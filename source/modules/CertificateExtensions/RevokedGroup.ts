import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import GeneralName from "./GeneralName";
import ReasonInfo from "./ReasonInfo";
import RevokedCertificateGroup from "./RevokedCertificateGroup";

/**
 * `RevokedGroup ::= SEQUENCE {
 *   certificateIssuer        [0]  GeneralName OPTIONAL,
 *   reasonInfo               [1]  ReasonInfo OPTIONAL,
 *   invalidityDate           [2]  GeneralizedTime OPTIONAL,
 *   revokedcertificateGroup  [3]  RevokedCertificateGroup,
 *   ... }`
 */
export default
class RevokedGroup {
    constructor (
        readonly certificateIssuer: GeneralName | undefined,
        readonly reasonInfo: ReasonInfo | undefined,
        readonly invalidityDate: Date | undefined,
        readonly revokedcertificateGroup: RevokedCertificateGroup,
    ) {}

    public static fromElement (value: ASN1Element): RevokedGroup {
        let certificateIssuer: GeneralName | undefined = undefined;
        let reasonInfo: ReasonInfo | undefined = undefined;
        let invalidityDate: Date | undefined = undefined;
        let revokedcertificateGroup!: RevokedCertificateGroup;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "certificateIssuer",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    certificateIssuer = (el as DERElement).inner;
                },
            },
            {
                name: "reasonInfo",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    reasonInfo = ReasonInfo.fromElement(el as DERElement);
                },
            },
            {
                name: "invalidityDate",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    invalidityDate = el.generalizedTime;
                },
            },
            {
                name: "revokedcertificateGroup",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    revokedcertificateGroup = (el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new RevokedGroup(
            certificateIssuer,
            reasonInfo,
            invalidityDate,
            revokedcertificateGroup,
        );
    }

    public toElement (): DERElement {
        let reasonInfoElement: DERElement | undefined = undefined;
        if (this.reasonInfo) {
            reasonInfoElement = this.reasonInfo.toElement();
            reasonInfoElement.tagClass = ASN1TagClass.context;
            reasonInfoElement.tagNumber = 2;
        }
        return DERElement.fromSequence([
            this.certificateIssuer
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.constructed,
                    0,
                    this.certificateIssuer,
                )
                : undefined,
            reasonInfoElement,
            this.invalidityDate
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    2,
                    this.invalidityDate,
                )
                : undefined,
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
                this.revokedcertificateGroup,
            ),
        ]);
    }
}
