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

/**
 * `CertUpdateRsp ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   result        CHOICE {
 *     success       [0]  CertUpdateOK,
 *     failure       [1]  CertUpdateErr,
 *     ... },
 *   ... }`
 */
export default
class CertUpdateRsp {
    constructor (
        readonly caspCommonComponents: CASPcommonComponents,
        readonly result: ASN1Element,
    ) {}

    public static fromElement (value: DERElement): CertUpdateRsp {
        let version: CASPversion = CASPversion.v1;
        let sequence!: CASPsequence;
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
        return new CertUpdateRsp(
            new CASPcommonComponents(version, sequence),
            result,
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
            this.result,
        ]);
    }
}
