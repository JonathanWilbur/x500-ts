import {
    ASN1UniversalType,
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import LocalName from "./LocalName";
// import ChopSpecification from "./ChopSpecification";
import Refinement from "./Refinement";
import BaseDistance from "./BaseDistance";
import RelativeDistinguishedName from "./RelativeDistinguishedName";
import AttributeTypeAndValue from "./AttributeTypeAndValue";
import validateTag from "../../validateTag";

/**
 * `SubtreeSpecification ::= SEQUENCE {
 *   base                 [0]  LocalName DEFAULT {},
 *   COMPONENTS OF             ChopSpecification,
 *   specificationFilter  [4]  Refinement OPTIONAL,
 *   ... }
 * -- empty sequence specifies whole administrative area`
 */
export default
class SubtreeSpecification {
    constructor (
        readonly base: LocalName | undefined,
        readonly specificExclusions: DERElement[] | undefined,
        readonly minimum: BaseDistance | undefined,
        readonly maximum: BaseDistance | undefined,
        readonly specificationFilter: Refinement | undefined,
    ) {}

    public static fromElement (value: ASN1Element): SubtreeSpecification {
        let base: LocalName | undefined = undefined;
        let specificExclusions: DERElement[] | undefined = undefined;
        let minimum: BaseDistance | undefined = undefined;
        let maximum: BaseDistance | undefined = undefined;
        let specificationFilter: Refinement | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "base",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    base = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `base[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `base[${rdnIndex}][${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        });
                },
            },
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
            {
                name: "specificationFilter",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    specificationFilter = el as DERElement;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SubtreeSpecification(
            base,
            specificExclusions,
            minimum,
            maximum,
            specificationFilter,
        );
    }

    public toElement (): DERElement {
        let baseElement: DERElement | undefined = undefined;
        let specificExclusionsElement: DERElement | undefined = undefined;
        let minimumElement: DERElement | undefined = undefined;
        let maximumElement: DERElement | undefined = undefined;
        let specificationFilterElement: DERElement | undefined = undefined;

        if (this.base) {
            baseElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            baseElement.sequence = this.base.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));
        }

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

        if (this.specificationFilter) {
            specificationFilterElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                4,
            );
            specificationFilterElement.inner = this.specificationFilter;
        }

        return DERElement.fromSequence([
            baseElement,
            specificExclusionsElement,
            minimumElement,
            maximumElement,
            specificationFilterElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): SubtreeSpecification {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return SubtreeSpecification.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
