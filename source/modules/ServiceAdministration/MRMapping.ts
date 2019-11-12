import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import Mapping from "./Mapping";
import MRSubstitution from "./MRSubstitution";

/**
 * `MRMapping ::= SEQUENCE {
 *   mapping       [0]  SEQUENCE SIZE (1..MAX) OF Mapping OPTIONAL,
 *   substitution  [1]  SEQUENCE SIZE (1..MAX) OF MRSubstitution OPTIONAL,
 *   ... }`
 */
export default
class MRMapping {
    constructor (
        readonly mapping: Mapping[] | undefined,
        readonly substitution: MRSubstitution[] | undefined,
    ) {}

    public static fromElement (value: ASN1Element): MRMapping {
        let mapping: Mapping[] | undefined = undefined;
        let substitution: MRSubstitution[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "mapping",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    mapping = el.sizeConstrainedSequenceOf(1)
                        .map((m) => Mapping.fromElement(m as DERElement));
                },
            },
            {
                name: "substitution",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    substitution = el.sizeConstrainedSequenceOf(1)
                        .map((m) => MRSubstitution.fromElement(m as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new MRMapping(
            mapping,
            substitution,
        );
    }

    public toElement (): DERElement {
        let mappingElement: DERElement | undefined = undefined;
        let substitutionElement: DERElement | undefined = undefined;
        if (this.mapping) {
            mappingElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            mappingElement.sequence = this.mapping.map((m) => m.toElement());
        }
        if (this.substitution) {
            substitutionElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            substitutionElement.sequence = this.substitution.map((s) => s.toElement());
        }
        return DERElement.fromSequence([
            mappingElement,
            substitutionElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): MRMapping {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return MRMapping.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
