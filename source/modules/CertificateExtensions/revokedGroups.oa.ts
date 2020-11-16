/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import { id_ce_revokedGroups } from "../CertificateExtensions/id-ce-revokedGroups.va";
import {
    _decode_RevokedGroupsSyntax,
    _encode_RevokedGroupsSyntax,
} from "../CertificateExtensions/RevokedGroupsSyntax.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_revokedGroups } from "../CertificateExtensions/id-ce-revokedGroups.va";
export {
    RevokedGroupsSyntax,
    _decode_RevokedGroupsSyntax,
    _encode_RevokedGroupsSyntax,
} from "../CertificateExtensions/RevokedGroupsSyntax.ta";

/* START_OF_SYMBOL_DEFINITION revokedGroups */
/**
 * @summary revokedGroups
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * revokedGroups EXTENSION ::= {
 *   SYNTAX         RevokedGroupsSyntax
 *   IDENTIFIED BY  id-ce-revokedGroups }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const revokedGroups: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_RevokedGroupsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_RevokedGroupsSyntax,
    },
    "&id": id_ce_revokedGroups /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION revokedGroups */

/* eslint-enable */
