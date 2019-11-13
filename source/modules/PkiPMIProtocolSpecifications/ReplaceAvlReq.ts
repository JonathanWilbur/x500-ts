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
import AvlSerialNumber from "../AuthenticationFramework/AvlSerialNumber";
import CertAVL from "../AuthenticationFramework/CertAVL";
import AVMPversion from "./AVMPversion";
import AVMPsequence from "./AVMPsequence";

/**
 * `ReplaceAvlReq ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   old           AvlSerialNumber OPTIONAL,
 *   new           CertAVL,
 *   ... }`
 */
export default
class ReplaceAvlReq {
    constructor (
        readonly avmpCommonComponents: AVMPcommonComponents,
        readonly old: AvlSerialNumber | undefined,
        readonly new_: CertAVL,
    ) {}

    public static fromElement (value: DERElement): ReplaceAvlReq {
        let version: AVMPversion = AVMPversion.v1;
        let timeStamp!: Date;
        let sequence!: AVMPsequence;
        let old: AvlSerialNumber | undefined;
        let new_!: CertAVL;
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
                name: "old",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    old = el.octetString;
                },
            },
            {
                name: "new",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    new_ = CertAVL.fromElement(el);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ReplaceAvlReq(
            new AVMPcommonComponents(version, timeStamp, sequence),
            old,
            new_,
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
            this.old
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.old,
                )
                : undefined,
            this.new_.toElement(),
        ]);
    }
}
