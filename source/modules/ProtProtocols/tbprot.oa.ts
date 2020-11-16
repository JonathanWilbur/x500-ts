/* eslint-disable */
import { id_tbprot } from "../ProtProtocols/id-tbprot.va";
import { _decode_TBprot, _encode_TBprot } from "../TrustBroker/TBprot.ta";
import { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca";
export { id_tbprot } from "../ProtProtocols/id-tbprot.va";
export {
    TBprot,
    _decode_TBprot,
    _encode_TBprot,
} from "../TrustBroker/TBprot.ta";
export { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca";

/* START_OF_SYMBOL_DEFINITION tbprot */
/**
 * @summary tbprot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tbprot WRAPPED-PROT ::= {
 *                  TBprot
 *   IDENTIFIED BY  id-tbprot }
 * ```
 *
 * @constant
 * @type {WRAPPED_PROT}
 * @implements {WRAPPED_PROT}
 */
export const tbprot: WRAPPED_PROT = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_TBprot,
    },
    encoderFor: {
        "&Type": _encode_TBprot,
    },
    "&id": id_tbprot /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION tbprot */

/* eslint-enable */
