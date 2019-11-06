import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import AgreementID from "./AgreementID";
import Time from "./Time";
import UpdateWindow from "./UpdateWindow";
import RefreshInformation from "./RefreshInformation";
import SecurityParameters from "../DirectoryAbstractService/SecurityParameters";
import OperationalBindingID from "../OperationalBindingManagement/OperationalBindingID";

/**
 * `UpdateShadowArgumentData ::= [0]  SEQUENCE {
 *   agreementID         AgreementID,
 *   updateTime          Time,
 *   updateWindow        UpdateWindow OPTIONAL,
 *   updatedInfo         RefreshInformation,
 *   securityParameters  SecurityParameters OPTIONAL,
 *   ...}`
 */
export default
class UpdateShadowArgumentData {
    constructor (
        readonly agreementID: AgreementID,
        readonly updateTime: Time,
        readonly updateWindow: UpdateWindow | undefined,
        readonly updatedInfo: RefreshInformation,
        readonly securityParameters: SecurityParameters | undefined,
    ) {}

    public static fromElement (value: DERElement): UpdateShadowArgumentData {
        let agreementID!: AgreementID;
        let updateTime!: Time;
        let updateWindow: UpdateWindow | undefined = undefined;
        let updatedInfo!: RefreshInformation;
        let securityParameters: SecurityParameters | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "agreementID",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    agreementID = OperationalBindingID.fromElement(el as DERElement);
                },
            },
            {
                name: "updateTime",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.generalizedTime,
                callback: (el: ASN1Element): void => {
                    updateTime = el.generalizedTime;
                },
            },
            {
                name: "updateWindow",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    updateWindow = UpdateWindow.fromElement(el as DERElement);
                },
            },
            {
                name: "updatedInfo",
                optional: false,
                callback: (el: ASN1Element): void => {
                    updatedInfo = el;
                },
            },
            {
                name: "securityParameters",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    securityParameters = SecurityParameters.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new UpdateShadowArgumentData(
            agreementID,
            updateTime,
            updateWindow,
            updatedInfo,
            securityParameters,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.agreementID.toElement(),
            this.updateTime
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.generalizedTime,
                    this.updateTime,
                )
                : undefined,
            this.updateWindow
                ? this.updateWindow.toElement()
                : undefined,
            this.updatedInfo as DERElement,
            this.securityParameters
                ? this.securityParameters.toElement()
                : undefined,
        ]);
    }
}
