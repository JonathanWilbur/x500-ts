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
import Criteria from "./Criteria";

/**
 * `EnhancedGuide ::= SEQUENCE {
 *   objectClass  [0]  OBJECT-CLASS.&id,
 *   criteria     [1]  Criteria,
 *   subset       [2]  INTEGER {
 *     baseObject   (0),
 *     oneLevel     (1),
 *     wholeSubtree (2)} DEFAULT oneLevel,
 *   ... }`
 */
export default
class Guide {
    constructor (
        readonly objectClass: ObjectIdentifier | undefined,
        readonly criteria: Criteria,
        readonly subset: 0 | 1 | 2,
    ) {}

    public static fromElement (value: DERElement): Guide {
        let objectClass: ObjectIdentifier | undefined = undefined;
        let criteria!: Criteria;
        let subset: 0 | 1 | 2 = 1;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "objectClass",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    objectClass = (el as DERElement).objectIdentifier;
                },
            },
            {
                name: "criteria",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    criteria = (el as DERElement).inner;
                },
            },
            {
                name: "subset",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    subset = el.integer as (0 | 1 | 2);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new Guide(
            objectClass,
            criteria,
            subset,
        );
    }

    public toElement (): DERElement {
        const criteria = this.criteria;
        criteria.tagClass = ASN1TagClass.context;
        criteria.tagNumber = 1;
        return DERElement.fromSequence([
            this.objectClass
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    this.objectClass,
                )
                : undefined,
            criteria,
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
                this.subset,
            ),
        ]);
    }

    public static fromBytes (value: Uint8Array): Guide {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return Guide.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
