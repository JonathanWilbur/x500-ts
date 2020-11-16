/* eslint-disable */
import { id_keyExchangeAlgorithm } from "../AlgorithmObjectIdentifiers/id-keyExchangeAlgorithm.va";
import {
    _decode_KEA_Parms_Id,
    _encode_KEA_Parms_Id,
} from "../AlgorithmObjectIdentifiers/KEA-Parms-Id.ta";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { id_keyExchangeAlgorithm } from "../AlgorithmObjectIdentifiers/id-keyExchangeAlgorithm.va";
export {
    KEA_Parms_Id,
    _decode_KEA_Parms_Id,
    _encode_KEA_Parms_Id,
} from "../AlgorithmObjectIdentifiers/KEA-Parms-Id.ta";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION keyExchangeAlgorithm */
/**
 * @summary keyExchangeAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyExchangeAlgorithm ALGORITHM ::= { -- IETF RFC 3279
 *   PARMS         KEA-Parms-Id
 *   IDENTIFIED BY id-keyExchangeAlgorithm }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const keyExchangeAlgorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_KEA_Parms_Id,
    },
    encoderFor: {
        "&Type": _encode_KEA_Parms_Id,
    },
    "&id": id_keyExchangeAlgorithm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION keyExchangeAlgorithm */

/* eslint-enable */
