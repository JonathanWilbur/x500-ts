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

/**
 * `ScopeRestriction ::= SEQUENCE {
 *   id            SCOPE-RESTRICTION.&id,
 *   restriction   SCOPE-RESTRICTION.&Type,
 *   ... }`
 */
export default
class ScopeRestriction {
    constructor (
        readonly id: ObjectIdentifier,
        readonly restriction: DERElement,
    ) {}

    public static fromElement (value: DERElement): ScopeRestriction {
        let id!: ObjectIdentifier;
        let restriction!: DERElement;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "id",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    id = (el as DERElement).objectIdentifier;
                },
            },
            {
                name: "restriction",
                optional: false,
                callback: (el: ASN1Element): void => {
                    restriction = el as DERElement;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ScopeRestriction(id, restriction);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.id,
            ),
            this.restriction,
        ]);
    }

    public static fromBytes (value: Uint8Array): ScopeRestriction {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return ScopeRestriction.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
