import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import Holder from "./Holder";
import AttCertIssuer from "./AttCertIssuer";

/**
 * `DelMatchSyntax ::= SEQUENCE {
 *   firstIssuer  AttCertIssuer,
 *   lastHolder   Holder,
 *   ... }`
 */
export default
class DelMatchSyntax {
    constructor (
        readonly firstIssuer: AttCertIssuer,
        readonly lastHolder: Holder,
    ) {}

    public static fromElement (value: DERElement): DelMatchSyntax {
        let firstIssuer!: AttCertIssuer;
        let lastHolder!: Holder;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "firstIssuer",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    firstIssuer = AttCertIssuer.fromElement(el as DERElement);
                },
            },
            {
                name: "lastHolder",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    lastHolder = Holder.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new DelMatchSyntax(
            firstIssuer,
            lastHolder,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.firstIssuer.toElement(),
            this.lastHolder.toElement(),
        ]);
    }

    public static fromBytes (value: Uint8Array): DelMatchSyntax {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return DelMatchSyntax.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
