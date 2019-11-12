import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ObjectIdentifier,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import GeneralNames from "../CertificateExtensions/GeneralNames";
import AttributeType from "../InformationFramework/AttributeType";

/**
 * `AttributeCertificateAssertion ::= SEQUENCE {
 *   holder             [0]  CHOICE {
 *     baseCertificateID  [0]  IssuerSerial,
 *     holderName         [1]  GeneralNames,
 *     ...} OPTIONAL,
 *   issuer             [1]  GeneralNames OPTIONAL,
 *   attCertValidity    [2]  GeneralizedTime OPTIONAL,
 *   attType            [3]  SET OF AttributeType OPTIONAL,
 *   ... }`
 */
export default
class AttributeCertificateAssertion {
    constructor (
        readonly holder: DERElement | undefined,
        readonly issuer: GeneralNames | undefined,
        readonly attCertValidity: Date | undefined,
        readonly attType: AttributeType[] | undefined,
    ) {}

    public static fromElement (value: ASN1Element): AttributeCertificateAssertion {
        let holder: DERElement | undefined = undefined;
        let issuer: GeneralNames | undefined = undefined;
        let attCertValidity: Date | undefined = undefined;
        let attType: AttributeType[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "holder",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    holder = el as DERElement;
                },
            },
            {
                name: "issuer",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    issuer = (el as DERElement).sequence;
                },
            },
            {
                name: "attCertValidity",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    attCertValidity = (el as DERElement).generalizedTime;
                },
            },
            {
                name: "attType",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    attType = el.set.map((att: ASN1Element): AttributeType => att.objectIdentifier);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AttributeCertificateAssertion(
            holder,
            issuer,
            attCertValidity,
            attType,
        );
    }

    public toElement (): DERElement {
        const acaElements: (DERElement | undefined)[] = [
            undefined,
            undefined,
            undefined,
            undefined,
        ];
        if (this.holder) {
            acaElements[0] = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
                this.holder,
            );
        }
        if (this.issuer) {
            const issuerElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            issuerElement.sequence = this.issuer;
            acaElements[1] = issuerElement;
        }
        if (this.attCertValidity) {
            const attCertValidityElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                2,
            );
            attCertValidityElement.generalizedTime = this.attCertValidity;
            acaElements[2] = attCertValidityElement;
        }
        if (this.attType) {
            const attTypeElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
            attTypeElement.set = this.attType.map((oid: ObjectIdentifier): DERElement => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                oid,
            ));
            acaElements[3] = attTypeElement;
        }
        return DERElement.fromSequence(acaElements);
    }

    public static fromBytes (value: Uint8Array): AttributeCertificateAssertion {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return AttributeCertificateAssertion.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
