import {
    ASN1Element,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import Wrap_Header from "./Wrap-Header";
import Wrap_Body from "./Wrap-Body";

/**
 * `SPKM-WRAP ::= SEQUENCE {wrap-header  Wrap-Header,
 *                         wrap-body    Wrap-Body
 * }`
 */
export default
class SPKM_WRAP {
    constructor (
        readonly wrapHeader: Wrap_Header,
        readonly wrapBody: Wrap_Body,
    ) {}

    public static fromElement (value: DERElement): SPKM_WRAP {
        let wrapHeader!: Wrap_Header;
        let wrapBody!: Wrap_Body;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "wrap-header",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    wrapHeader = Wrap_Header.fromElement(el as DERElement);
                },
            },
            {
                name: "wrap-body",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    wrapBody = Wrap_Body.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SPKM_WRAP(wrapHeader, wrapBody);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.wrapHeader.toElement(),
            this.wrapBody.toElement(),
        ]);
    }
}
