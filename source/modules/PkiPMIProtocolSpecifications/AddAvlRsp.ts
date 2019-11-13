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

/**
 * `AddAvlRsp ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   result        CHOICE {
 *     success       [0]  AddAvlOK,
 *     failure       [1]  AddAvlErr,
 *     ... },
 *   ... }`
 */
export default
class AddAvlRsp {
    constructor (
        readonly avmpCommonComponents: AVMPcommonComponents,
        readonly result: ASN1Element,
    ) {}

    public static fromElement (value: DERElement): AddAvlRsp {
        let version: AVMPversion = AVMPversion.v1;
        let timeStamp!: Date;
        let sequence!: AVMPsequence;
        let result!: ASN1Element;
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
                name: "result",
                optional: false,
                callback: (el: ASN1Element): void => {
                    result = el;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AddAvlRsp(
            new AVMPcommonComponents(version, timeStamp, sequence),
            result,
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
            this.result,
        ]);
    }
}
