/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import { id_ce_protRestrict } from "../CertificateExtensions/id-ce-protRestrict.va";
import {
    _decode_ProtRestriction,
    _encode_ProtRestriction,
} from "../CertificateExtensions/ProtRestriction.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_protRestrict } from "../CertificateExtensions/id-ce-protRestrict.va";
export {
    ProtRestriction,
    _decode_ProtRestriction,
    _encode_ProtRestriction,
} from "../CertificateExtensions/ProtRestriction.ta";

/* START_OF_SYMBOL_DEFINITION protRestrict */
/**
 * @summary protRestrict
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protRestrict EXTENSION ::= {
 *   SYNTAX        ProtRestriction
 *   IDENTIFIED BY id-ce-protRestrict }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const protRestrict: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_ProtRestriction,
    },
    encoderFor: {
        "&ExtnType": _encode_ProtRestriction,
    },
    "&id": id_ce_protRestrict /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION protRestrict */

/* eslint-enable */
