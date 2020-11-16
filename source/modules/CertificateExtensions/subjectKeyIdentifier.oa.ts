/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import { id_ce_subjectKeyIdentifier } from "../CertificateExtensions/id-ce-subjectKeyIdentifier.va";
import {
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../CertificateExtensions/SubjectKeyIdentifier.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_subjectKeyIdentifier } from "../CertificateExtensions/id-ce-subjectKeyIdentifier.va";
export {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../CertificateExtensions/SubjectKeyIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION subjectKeyIdentifier */
/**
 * @summary subjectKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subjectKeyIdentifier EXTENSION ::= {
 *   SYNTAX         SubjectKeyIdentifier
 *   IDENTIFIED BY  id-ce-subjectKeyIdentifier }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const subjectKeyIdentifier: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_SubjectKeyIdentifier,
    },
    encoderFor: {
        "&ExtnType": _encode_SubjectKeyIdentifier,
    },
    "&id": id_ce_subjectKeyIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subjectKeyIdentifier */

/* eslint-enable */
