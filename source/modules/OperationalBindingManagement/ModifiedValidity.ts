

import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";

/**
 * `ModifiedValidity ::= SEQUENCE {
 *   validFrom            [0]  CHOICE {
 *     now                  [0]  NULL,
 *     time                 [1]  Time,
 *     ...} DEFAULT now:NULL,
 *   validUntil           [1]  CHOICE {
 *     explicitTermination  [0]  NULL,
 *     time                 [1]  Time,
 *     unchanged            [2]  NULL,
 *     ... } DEFAULT unchanged:NULL,
 *   ... }`
 */
export default
class ModifiedValidity {
    constructor (
        readonly validFrom: ASN1Element | undefined,
        readonly validUntil: ASN1Element | undefined,
    ) {}

    public static fromElement (value: ASN1Element): ModifiedValidity {
        let validFrom: ASN1Element = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            0,
        );
        let validUntil: ASN1Element = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            2,
        );
        const specification: ConstructedElementSpecification[] = [
            {
                name: "validFrom",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    validFrom = (el as DERElement).inner;
                },
            },
            {
                name: "validFrom",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    validUntil = (el as DERElement).inner;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ModifiedValidity(validFrom, validUntil);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
                this.validFrom,
            ),
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
                this.validUntil,
            ),
        ]);
    }
}
