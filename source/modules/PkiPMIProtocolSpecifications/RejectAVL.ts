import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import AVMPcommonComponents from "./AVMPcommonComponents";
import AVMPversion from "./AVMPversion";
import AVMPsequence from "./AVMPsequence";
import AVMP_error from "./AVMP-error";

/**
 * `RejectAVL ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   reason        AVMP-error,
 *   ... }`
 */
export default
class RejectAVL {
    constructor (
        readonly avmpCommonComponents: AVMPcommonComponents,
        readonly reason: AVMP_error,
    ) {}

    public static fromElement (value: DERElement): RejectAVL {
        let version: AVMPversion = AVMPversion.v1;
        let timeStamp!: Date;
        let sequence!: AVMPsequence;
        let reason!: AVMP_error;
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
                name: "timeStamp",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.generalizedTime,
                callback: (el: ASN1Element): void => {
                    timeStamp = el.generalizedTime;
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
        return new RejectAVL(
            new AVMPcommonComponents(version, timeStamp, sequence),
            reason,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.enumerated,
                this.avmpCommonComponents.version,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.generalizedTime,
                this.avmpCommonComponents.timeStamp,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.avmpCommonComponents.sequence,
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
