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
 * `Guide ::= SET {
 *   objectClass  [0]  OBJECT-CLASS.&id OPTIONAL,
 *   criteria     [1]  Criteria,
 *   ... }`
 */
export default
class Guide {
    constructor (
        readonly objectClass: ObjectIdentifier | undefined,
        readonly criteria: Criteria,
    ) {}

    public static fromElement (value: ASN1Element): Guide {
        let objectClass: ObjectIdentifier | undefined = undefined;
        let criteria!: Criteria;
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
        ];
        validateConstruction(value.sequence, specification);
        return new Guide(
            objectClass,
            criteria,
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
