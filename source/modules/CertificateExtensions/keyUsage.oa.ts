/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import { id_ce_keyUsage } from "../CertificateExtensions/id-ce-keyUsage.va";
import {
    _decode_KeyUsage,
    _encode_KeyUsage,
} from "../CertificateExtensions/KeyUsage.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_keyUsage } from "../CertificateExtensions/id-ce-keyUsage.va";
export {
    KeyUsage,
    KeyUsage_contentCommitment /* IMPORTED_BIT */,
    KeyUsage_cRLSign /* IMPORTED_BIT */,
    KeyUsage_dataEncipherment /* IMPORTED_BIT */,
    KeyUsage_decipherOnly /* IMPORTED_BIT */,
    KeyUsage_digitalSignature /* IMPORTED_BIT */,
    KeyUsage_encipherOnly /* IMPORTED_BIT */,
    KeyUsage_keyAgreement /* IMPORTED_BIT */,
    KeyUsage_keyCertSign /* IMPORTED_BIT */,
    KeyUsage_keyEncipherment /* IMPORTED_BIT */,
    _decode_KeyUsage,
    _encode_KeyUsage,
} from "../CertificateExtensions/KeyUsage.ta";

/* START_OF_SYMBOL_DEFINITION keyUsage */
/**
 * @summary keyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyUsage EXTENSION ::= {
 *   SYNTAX         KeyUsage
 *   IDENTIFIED BY  id-ce-keyUsage }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const keyUsage: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_KeyUsage,
    },
    encoderFor: {
        "&ExtnType": _encode_KeyUsage,
    },
    "&id": id_ce_keyUsage /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION keyUsage */

/* eslint-enable */
