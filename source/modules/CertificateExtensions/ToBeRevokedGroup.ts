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
import CertificateGroup from "./CertificateGroup";

/**
 * `ToBeRevokedGroup ::= SEQUENCE {
 *   certificateIssuer  [0]  GeneralName OPTIONAL,
 *   reasonInfo         [1]  ReasonInfo OPTIONAL,
 *   revocationTime     GeneralizedTime,
 *   certificateGroup   CertificateGroup,
 *   ... }`
 */
export default
class ToBeRevokedGroup {
    constructor (
        readonly certificateIssuer: GeneralName | undefined,
        readonly reasonInfo: ReasonInfo | undefined,
        readonly revocationTime: Date,
        readonly certificateGroup: CertificateGroup,
    ) {}

    public static fromElement (value: DERElement): ToBeRevokedGroup {
        let certificateIssuer: GeneralName | undefined = undefined;
        let reasonInfo: ReasonInfo | undefined = undefined;
        let revocationTime!: Date;
        let certificateGroup!: CertificateGroup;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "certificateIssuer",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    certificateIssuer = (el as DERElement).inner;
                },
            },
            {
                name: "reasonInfo",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    reasonInfo = ReasonInfo.fromElement(el as DERElement);
                },
            },
            {
                name: "revocationTime",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    revocationTime = el.generalizedTime;
                },
            },
            {
                name: "certificateGroup",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    certificateGroup = (el as DERElement).inner;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ToBeRevokedGroup(
            certificateIssuer,
            reasonInfo,
            revocationTime,
            certificateGroup,
        );
    }

    public toElement (): DERElement {
        let reasonInfoElement: DERElement | undefined = undefined;
        if (this.reasonInfo) {
            reasonInfoElement = this.reasonInfo.toElement();
            reasonInfoElement.tagClass = ASN1TagClass.context;
            reasonInfoElement.tagNumber = 1;
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
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
                this.revocationTime,
            ),
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
                this.certificateGroup,
            ),
        ]);
    }
}
