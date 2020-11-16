/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta";
import { id_ce_subjectAltName } from "../CertificateExtensions/id-ce-subjectAltName.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta";
export { id_ce_subjectAltName } from "../CertificateExtensions/id-ce-subjectAltName.va";

/* START_OF_SYMBOL_DEFINITION subjectAltName */
/**
 * @summary subjectAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subjectAltName EXTENSION ::= {
 *   SYNTAX         GeneralNames
 *   IDENTIFIED BY  id-ce-subjectAltName }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const subjectAltName: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_GeneralNames,
    },
    encoderFor: {
        "&ExtnType": _encode_GeneralNames,
    },
    "&id": id_ce_subjectAltName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subjectAltName */

/* eslint-enable */
