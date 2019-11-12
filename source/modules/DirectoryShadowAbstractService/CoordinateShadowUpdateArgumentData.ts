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
import SecurityParameters from "../DirectoryAbstractService/SecurityParameters";
import OperationalBindingID from "../OperationalBindingManagement/OperationalBindingID";

/**
 * `CoordinateShadowUpdateArgumentData ::= [0]  SEQUENCE {
 *   agreementID         AgreementID,
 *   lastUpdate          Time OPTIONAL,
 *   updateStrategy      CHOICE {
 *     standard            ENUMERATED {
 *       noChanges   (0),
 *       incremental (1),
 *       total       (2),
 *       ...},
 *     other               EXTERNAL,
 *     ...},
 *   securityParameters  SecurityParameters OPTIONAL,
 *   ...}`
 */
export default
class UpdateShadowArgumentData {
    constructor (
        readonly agreementID: AgreementID,
        readonly lastUpdate: Time | undefined,
        readonly updateStrategy: ASN1Element,
        readonly securityParameters: SecurityParameters | undefined,
    ) {}

    public static fromElement (value: ASN1Element): UpdateShadowArgumentData {
        let agreementID!: AgreementID;
        let lastUpdate: Time | undefined = undefined;
        let updateStrategy!: ASN1Element;
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
                name: "lastUpdate",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.generalizedTime,
                callback: (el: ASN1Element): void => {
                    lastUpdate = el.generalizedTime;
                },
            },
            {
                name: "updateStrategy",
                optional: false,
                callback: (el: ASN1Element): void => {
                    updateStrategy = el;
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
            lastUpdate,
            updateStrategy,
            securityParameters,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.agreementID.toElement(),
            this.lastUpdate
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.generalizedTime,
                    this.lastUpdate,
                )
                : undefined,
            this.updateStrategy as DERElement,
            this.securityParameters
                ? this.securityParameters.toElement()
                : undefined,
        ]);
    }
}
