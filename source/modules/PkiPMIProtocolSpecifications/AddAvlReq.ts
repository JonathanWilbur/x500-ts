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
import CertAVL from "../AuthenticationFramework/CertAVL";
import AVMPversion from "./AVMPversion";
import AVMPsequence from "./AVMPsequence";

/**
 * `AddAvlReq ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   certlist      CertAVL,
 *   ... }`
 */
export default
class AddAvlReq {
    constructor (
        readonly avmpCommonComponents: AVMPcommonComponents,
        readonly certlist: CertAVL,
    ) {}

    public static fromElement (value: DERElement): AddAvlReq {
        let version: AVMPversion = AVMPversion.v1;
        let timeStamp!: Date;
        let sequence!: AVMPsequence;
        let certlist!: CertAVL;
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
                name: "certlist",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    certlist = CertAVL.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AddAvlReq(
            new AVMPcommonComponents(version, timeStamp, sequence),
            certlist,
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
            this.certlist.toElement(),
        ]);
    }
}
