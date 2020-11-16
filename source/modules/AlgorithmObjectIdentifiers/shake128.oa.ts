/* eslint-disable */
import { id_shake128 } from "../AlgorithmObjectIdentifiers/id-shake128.va";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { id_shake128 } from "../AlgorithmObjectIdentifiers/id-shake128.va";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION shake128 */
/**
 * @summary shake128
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shake128 ALGORITHM ::= {
 *   IDENTIFIED BY id-shake128 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const shake128: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_shake128 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION shake128 */

/* eslint-enable */
