import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import Holder from "./Holder";
import AttCertIssuer from "./AttCertIssuer";

/**
 * `HolderIssuerAssertion ::= SEQUENCE {
 *   holder  [0]  Holder OPTIONAL,
 *   issuer  [1]  AttCertIssuer OPTIONAL,
 *   ... }`
 */
export default
class HolderIssuerAssertion {
    constructor (
        readonly holder: Holder | undefined,
        readonly issuer: AttCertIssuer | undefined,
    ) {}

    public static fromElement (value: DERElement): HolderIssuerAssertion {
        let holder: Holder | undefined = undefined;
        let issuer: AttCertIssuer | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "holder",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    holder = Holder.fromElement(el as DERElement);
                },
            },
            {
                name: "issuer",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    issuer = AttCertIssuer.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new HolderIssuerAssertion(
            holder,
            issuer,
        );
    }

    public toElement (): DERElement {
        const hiaElements: (DERElement | undefined)[] = [
            undefined,
            undefined,
        ];
        if (this.holder) {
            const holderElement: DERElement = this.holder.toElement();
            holderElement.tagClass = ASN1TagClass.context;
            holderElement.construction = ASN1Construction.constructed;
            holderElement.tagNumber = 0;
            hiaElements[0] = holderElement;
        }
        if (this.issuer) {
            const issuerElement: DERElement = this.issuer.toElement();
            issuerElement.tagClass = ASN1TagClass.context;
            issuerElement.construction = ASN1Construction.constructed;
            issuerElement.tagNumber = 1;
            hiaElements[1] = issuerElement;
        }
        return DERElement.fromSequence(hiaElements);
    }

    public static fromBytes (value: Uint8Array): HolderIssuerAssertion {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return HolderIssuerAssertion.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
