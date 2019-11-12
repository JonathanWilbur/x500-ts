import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import BaseDistance from "./BaseDistance";

/**
 * `ChopSpecification ::= SEQUENCE {
 *   specificExclusions    [1]  SET SIZE (1..MAX) OF CHOICE {
 *     chopBefore  [0]  LocalName,
 *     chopAfter   [1]  LocalName,
 *     ...} OPTIONAL,
 *   minimum       [2]  BaseDistance DEFAULT 0,
 *   maximum       [3]  BaseDistance OPTIONAL,
 *   ... }`
 */
export default
class ChopSpecification {
    constructor (
        readonly specificExclusions: DERElement[] | undefined,
        readonly minimum: BaseDistance | undefined,
        readonly maximum: BaseDistance | undefined,
    ) {}

    public static fromElement (value: ASN1Element): ChopSpecification {
        let specificExclusions: DERElement[] | undefined = undefined;
        let minimum: BaseDistance = 0;
        let maximum: BaseDistance | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "specificExclusions",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    specificExclusions = el.sizeConstrainedSetOf(1) as DERElement[];
                },
            },
            {
                name: "minimum",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    minimum = el.integer;
                },
            },
            {
                name: "maximum",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    maximum = el.integer;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ChopSpecification(specificExclusions, minimum, maximum);
    }

    public toElement (): DERElement {
        let specificExclusionsElement: DERElement | undefined = undefined;
        let minimumElement: DERElement | undefined = undefined;
        let maximumElement: DERElement | undefined = undefined;

        if (this.specificExclusions) {
            specificExclusionsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            specificExclusionsElement.set = this.specificExclusions;
        }

        if (this.minimum) {
            minimumElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
            );
            minimumElement.integer = this.minimum;
        }

        if (this.maximum) {
            maximumElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                3,
            );
            maximumElement.integer = this.maximum;
        }

        return DERElement.fromSequence([
            specificExclusionsElement,
            minimumElement,
            maximumElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): ChopSpecification {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return ChopSpecification.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
