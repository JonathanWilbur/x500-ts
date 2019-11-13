import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import CASPcommonComponents from "./CASPcommonComponents";
import CASPversion from "./CASPversion";
import CASPsequence from "./CASPsequence";
import CASP_error from "./CASP-error";

/**
 * `RejectCAsubscribe ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   reason        CASP-error,
 *   ... }`
 */
export default
class RejectCAsubscribe {
    constructor (
        readonly caspCommonComponents: CASPcommonComponents,
        readonly reason: CASP_error,
    ) {}

    public static fromElement (value: DERElement): RejectCAsubscribe {
        let version: CASPversion = CASPversion.v1;
        let sequence!: CASPsequence;
        let reason!: CASP_error;
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
            {
                name: "reason",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.enumerated,
                callback: (el: ASN1Element): void => {
                    reason = el.enumerated;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new RejectCAsubscribe(
            new CASPcommonComponents(version, sequence),
            reason,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.enumerated,
                this.caspCommonComponents.version,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.caspCommonComponents.sequence,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.enumerated,
                this.reason,
            ),
        ]);
    }
}
