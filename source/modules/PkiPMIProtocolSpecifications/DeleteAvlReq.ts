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
import AvlSerialNumber from "../AuthenticationFramework/AvlSerialNumber";

/**
 * `DeleteAvlReq ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   avl-Id        AvlSerialNumber OPTIONAL,
 *   ... }`
 */
export default
class DeleteAvlReq {
    constructor (
        readonly avmpCommonComponents: AVMPcommonComponents,
        readonly avl_Id: AvlSerialNumber | undefined,
    ) {}

    public static fromElement (value: DERElement): DeleteAvlReq {
        let version: AVMPversion = AVMPversion.v1;
        let timeStamp!: Date;
        let sequence!: AVMPsequence;
        let avl_Id: AvlSerialNumber | undefined;
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
                name: "avl-Id",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    avl_Id = el.octetString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new DeleteAvlReq(
            new AVMPcommonComponents(version, timeStamp, sequence),
            avl_Id,
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
            this.avl_Id
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.avl_Id,
                )
                : undefined,
        ]);
    }
}
