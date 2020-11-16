/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    _decode_AuthorityKeyIdentifier,
    _encode_AuthorityKeyIdentifier,
} from "../CertificateExtensions/AuthorityKeyIdentifier.ta";
import { id_ce_authorityKeyIdentifier } from "../CertificateExtensions/id-ce-authorityKeyIdentifier.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    AuthorityKeyIdentifier,
    _decode_AuthorityKeyIdentifier,
    _encode_AuthorityKeyIdentifier,
} from "../CertificateExtensions/AuthorityKeyIdentifier.ta";
export { id_ce_authorityKeyIdentifier } from "../CertificateExtensions/id-ce-authorityKeyIdentifier.va";

/* START_OF_SYMBOL_DEFINITION authorityKeyIdentifier */
/**
 * @summary authorityKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorityKeyIdentifier EXTENSION ::= {
 *   SYNTAX         AuthorityKeyIdentifier
 *   IDENTIFIED BY  id-ce-authorityKeyIdentifier }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const authorityKeyIdentifier: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AuthorityKeyIdentifier,
    },
    encoderFor: {
        "&ExtnType": _encode_AuthorityKeyIdentifier,
    },
    "&id": id_ce_authorityKeyIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION authorityKeyIdentifier */

/* eslint-enable */
