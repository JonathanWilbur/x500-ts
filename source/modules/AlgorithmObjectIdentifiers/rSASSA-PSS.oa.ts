/* eslint-disable */
import { id_RSASSA_PSS } from "../AlgorithmObjectIdentifiers/id-RSASSA-PSS.va";
import {
    _decode_rSASSA_PSS_Type,
    _encode_rSASSA_PSS_Type,
} from "../AlgorithmObjectIdentifiers/rSASSA-PSS-Type.ta";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { id_RSASSA_PSS } from "../AlgorithmObjectIdentifiers/id-RSASSA-PSS.va";
export {
    rSASSA_PSS_Type,
    _decode_rSASSA_PSS_Type,
    _encode_rSASSA_PSS_Type,
} from "../AlgorithmObjectIdentifiers/rSASSA-PSS-Type.ta";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION rSASSA_PSS */
/**
 * @summary rSASSA_PSS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rSASSA-PSS ALGORITHM ::= {
 *   PARMS                 SEQUENCE {
 *     hashAlgorithm    [0]  AlgorithmIdentifier {{HashAlgorithms}},
 *  -- maskGenAlgorithm [1]  AlgorithmIdentifier {{MaskGenAlgorithms}},
 *     saltLength       [2]  INTEGER DEFAULT 20,
 *     trailerField     [3]  INTEGER DEFAULT 1 }
 *   IDENTIFIED BY         id-RSASSA-PSS }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const rSASSA_PSS: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_rSASSA_PSS_Type,
    },
    encoderFor: {
        "&Type": _encode_rSASSA_PSS_Type,
    },
    "&id": id_RSASSA_PSS /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION rSASSA_PSS */

/* eslint-enable */
