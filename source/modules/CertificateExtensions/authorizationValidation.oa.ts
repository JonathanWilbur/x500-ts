/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    _decode_AvlId,
    _encode_AvlId,
} from "../CertificateExtensions/AvlId.ta";
import { id_ce_authorizationValidation } from "../CertificateExtensions/id-ce-authorizationValidation.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    AvlId,
    _decode_AvlId,
    _encode_AvlId,
} from "../CertificateExtensions/AvlId.ta";
export { id_ce_authorizationValidation } from "../CertificateExtensions/id-ce-authorizationValidation.va";

/* START_OF_SYMBOL_DEFINITION authorizationValidation */
/**
 * @summary authorizationValidation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorizationValidation EXTENSION ::= {
 *   SYNTAX         AvlId
 *   IDENTIFIED BY  id-ce-authorizationValidation }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const authorizationValidation: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AvlId,
    },
    encoderFor: {
        "&ExtnType": _encode_AvlId,
    },
    "&id": id_ce_authorizationValidation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION authorizationValidation */

/* eslint-enable */
