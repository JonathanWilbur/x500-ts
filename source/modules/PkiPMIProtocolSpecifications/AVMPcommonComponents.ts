import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import AVMPversion from "./AVMPversion";
import AVMPsequence from "./AVMPsequence";

/**
 * `AVMPcommonComponents ::= SEQUENCE {
 *   version    AVMPversion DEFAULT v1,
 *   timeStamp  GeneralizedTime,
 *   sequence   AVMPsequence,
 *   ... }`
 */
export default
class AVMPcommonComponents {
    constructor (
        readonly version: AVMPversion,
        readonly timeStamp: Date,
        readonly sequence: AVMPsequence,
    ) {}

    public static fromElement (value: DERElement): AVMPcommonComponents {
        let version: AVMPversion = AVMPversion.v1;
        let timeStamp!: Date;
        let sequence!: AVMPsequence;
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
        ];
        validateConstruction(value.sequence, specification);
        return new AVMPcommonComponents(version, timeStamp, sequence);
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
                ASN1UniversalType.generalizedTime,
                this.timeStamp,
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
