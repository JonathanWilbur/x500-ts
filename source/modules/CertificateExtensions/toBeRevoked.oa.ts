/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import { id_ce_toBeRevoked } from "../CertificateExtensions/id-ce-toBeRevoked.va";
import {
    _decode_ToBeRevokedSyntax,
    _encode_ToBeRevokedSyntax,
} from "../CertificateExtensions/ToBeRevokedSyntax.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_toBeRevoked } from "../CertificateExtensions/id-ce-toBeRevoked.va";
export {
    ToBeRevokedSyntax,
    _decode_ToBeRevokedSyntax,
    _encode_ToBeRevokedSyntax,
} from "../CertificateExtensions/ToBeRevokedSyntax.ta";

/* START_OF_SYMBOL_DEFINITION toBeRevoked */
/**
 * @summary toBeRevoked
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * toBeRevoked EXTENSION ::= {
 *   SYNTAX         ToBeRevokedSyntax
 *   IDENTIFIED BY  id-ce-toBeRevoked }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const toBeRevoked: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_ToBeRevokedSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_ToBeRevokedSyntax,
    },
    "&id": id_ce_toBeRevoked /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION toBeRevoked */

/* eslint-enable */
