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
 * `Mapping ::= SEQUENCE {
 *   mappingFunction  OBJECT IDENTIFIER (CONSTRAINED BY {-- shall be an--
 *                      -- object identifier of a mapping-based matching algorithm -- }),
 *   level            INTEGER DEFAULT 0,
 *   ... }`
 */
export default
class Mapping {
    constructor (
        readonly mappingFunction: ObjectIdentifier,
        readonly level: number,
    ) {}

    public static fromElement (value: DERElement): Mapping {
        let mappingFunction!: ObjectIdentifier;
        let level: number = 0;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "mappingFunction",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    mappingFunction = el.objectIdentifier;
                },
            },
            {
                name: "level",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    level = el.integer;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new Mapping(
            mappingFunction,
            level,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.mappingFunction,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.level,
            ),
        ]);
    }

    public static fromBytes (value: Uint8Array): Mapping {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return Mapping.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
