import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import CASPversion from "./CASPversion";
import CASPsequence from "./CASPsequence";

/**
 * `CASPcommonComponents ::= SEQUENCE {
 *   version    CASPversion DEFAULT v1,
 *   sequence   CASPsequence,
 *   ... }`
 */
export default
class CASPcommonComponents {
    constructor (
        readonly version: CASPversion,
        readonly sequence: CASPsequence,
    ) {}

    public static fromElement (value: DERElement): CASPcommonComponents {
        let version: CASPversion = CASPversion.v1;
        let sequence!: CASPsequence;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "version",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.enumerated,
                callback: (el: ASN1Element): void => {
                    version = el.enumerated;
                },
            },
            {
                name: "sequence",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    sequence = el.integer;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new CASPcommonComponents(version, sequence);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.enumerated,
                this.version,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.sequence,
            ),
        ]);
    }
}
