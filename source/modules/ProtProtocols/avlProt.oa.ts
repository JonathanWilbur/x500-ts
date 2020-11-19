/* eslint-disable */
import {
    AvlProt,
    _decode_AvlProt,
    _encode_AvlProt,
} from "../AVL-management/AvlProt.ta";
import { id_avlprot } from "../ProtProtocols/id-avlprot.va";
import { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca";
export {
    AvlProt,
    _decode_AvlProt,
    _encode_AvlProt,
} from "../AVL-management/AvlProt.ta";
export { id_avlprot } from "../ProtProtocols/id-avlprot.va";
export { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca";

/* START_OF_SYMBOL_DEFINITION avlProt */
/**
 * @summary avlProt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * avlProt WRAPPED-PROT ::= {
 *                  AvlProt
 *   IDENTIFIED BY  id-avlprot }
 * ```
 *
 * @constant
 * @type {WRAPPED_PROT<AvlProt>}
 * @implements {WRAPPED_PROT<AvlProt>}
 */
export const avlProt: WRAPPED_PROT = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_AvlProt,
    },
    encoderFor: {
        "&Type": _encode_AvlProt,
    },
    "&id": id_avlprot /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION avlProt */

/* eslint-enable */
