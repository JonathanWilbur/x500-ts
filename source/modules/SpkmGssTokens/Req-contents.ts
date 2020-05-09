import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import Random_Integer from "./Random-Integer";
import Name from "../InformationFramework/Name";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import Context_Data from "./Context-Data";
import Validity from "../AuthenticationFramework/Validity";
import Key_Estb_Algs from "./Key-Estb-Algs";

/**
 * `Req-contents ::= SEQUENCE {
 *   tok-id        INTEGER(256), -- shall contain 0100 (hex)
 *   context-id    Random-Integer,
 *   pvno          BIT STRING,
 *   timestamp     UTCTime OPTIONAL, -- mandatory for SPKM-2
 *   randSrc       Random-Integer,
 *   targ-name     Name,
 *   src-name      [0]  Name OPTIONAL,
 *   req-data      Context-Data,
 *   validity      [1]  Validity OPTIONAL,
 *   key-estb-set  Key-Estb-Algs,
 *   key-estb-req  BIT STRING OPTIONAL,
 *   key-src-bind  OCTET STRING OPTIONAL
 *   -- This field must be present for the case of SPKM-2
 *   -- unilateral authen. if the K-ALG in use does not provide
 *   -- such a binding (but is optional for all other cases).
 *   -- The octet string holds the result of applying the
 *   -- mandatory hashing procedure (in MANDATORY I-ALG;
 *   -- see Section 2.1) as follows:  MD5(src || context_key),
 *   -- where "src" is the DER-encoded octets of src-name,
 *   -- "context-key" is the symmetric key (i.e., the
 *   -- unprotected version of what is transmitted in
 *   -- key-estb-req), and "||" is the concatenation operation.
 * }`
 */
export default
class Req_contents {
    constructor (
        readonly tok_id: number,
        readonly context_id: Random_Integer,
        readonly pvno: boolean[],
        readonly timestamp: Date | undefined,
        readonly randSrc: Random_Integer,
        readonly targ_name: Name,
        readonly src_name: Name,
        readonly req_data: Context_Data,
        readonly validity: Validity | undefined,
        readonly key_estb_set: Key_Estb_Algs,
        readonly key_estb_req: boolean[] | undefined,
        readonly key_src_bind: Uint8Array | undefined,
    ) {}

    public static fromElement (value: DERElement): Req_contents {
        let tok_id: number = 256;
        let context_id!: Random_Integer;
        let pvno!: boolean[];
        let timestamp: Date | undefined;
        let randSrc!: Random_Integer;
        let targ_name!: Name;
        let src_name!: Name;
        let req_data!: Context_Data;
        let validity: Validity | undefined;
        let key_estb_set!: Key_Estb_Algs;
        let key_estb_req: boolean[] | undefined;
        let key_src_bind: Uint8Array | undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "tok-id",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    tok_id = el.integer;
                },
            },
            {
                name: "context-id",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    context_id = el.bitString;
                },
            },
            {
                name: "pvno",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    pvno = el.bitString;
                },
            },
            {
                name: "timestamp",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.utcTime,
                callback: (el: ASN1Element): void => {
                    timestamp = el.utcTime;
                },
            },
            {
                name: "randSrc",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    randSrc = el.bitString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new Req_contents(
            tok_id,
            context_id,
            pvno,
            timestamp,
            randSrc,
            targ_name,
            src_name,
            req_data,
            validity,
            key_estb_set,
            key_estb_req,
            key_src_bind,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([

        ]);
    }
}
