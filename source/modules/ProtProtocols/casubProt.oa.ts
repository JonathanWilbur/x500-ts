/* eslint-disable */
import {
    CasubProt,
    _decode_CasubProt,
    _encode_CasubProt,
} from "../CaSubscription/CasubProt.ta";
import { id_casubprot } from "../ProtProtocols/id-casubprot.va";
import { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca";
export {
    CasubProt,
    _decode_CasubProt,
    _encode_CasubProt,
} from "../CaSubscription/CasubProt.ta";
export { id_casubprot } from "../ProtProtocols/id-casubprot.va";
export { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca";

/* START_OF_SYMBOL_DEFINITION casubProt */
/**
 * @summary casubProt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * casubProt WRAPPED-PROT ::= {
 *                  CasubProt
 *   IDENTIFIED BY  id-casubprot }
 * ```
 *
 * @constant
 * @type {WRAPPED_PROT<CasubProt>}
 * @implements {WRAPPED_PROT<CasubProt>}
 */
export const casubProt: WRAPPED_PROT = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CasubProt,
    },
    encoderFor: {
        "&Type": _encode_CasubProt,
    },
    "&id": id_casubprot /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION casubProt */

/* eslint-enable */
