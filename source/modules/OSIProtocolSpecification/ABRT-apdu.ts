import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import ABRT_source from "./ABRT-source";

/**
 * `ABRT-apdu ::= [APPLICATION 4] IMPLICIT SEQUENCE {
 *   abort-source  [0] IMPLICIT ABRT-source }`
 */
export default
class ABRT_apdu {
    constructor (
        readonly abortSource: ABRT_source,
    ) {}

    public static fromElement (value: ASN1Element): ABRT_apdu {
        let abortSource!: ABRT_source;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "abortSource",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    abortSource = el.integer;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ABRT_apdu(abortSource);
    }

    public toElement (): DERElement {
        const ret = DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
                this.abortSource,
            ),
        ]);
        ret.tagClass = ASN1TagClass.application;
        ret.tagNumber = 4;
        return ret;
    }
}
