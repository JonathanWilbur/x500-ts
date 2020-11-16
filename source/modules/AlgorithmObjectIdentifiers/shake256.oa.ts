/* eslint-disable */
import { id_shake256 } from "../AlgorithmObjectIdentifiers/id-shake256.va";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { id_shake256 } from "../AlgorithmObjectIdentifiers/id-shake256.va";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION shake256 */
/**
 * @summary shake256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shake256 ALGORITHM ::= {
 *   IDENTIFIED BY id-shake256 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const shake256: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_shake256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION shake256 */

/* eslint-enable */
