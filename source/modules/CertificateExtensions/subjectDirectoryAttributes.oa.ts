/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    AttributesSyntax,
    _decode_AttributesSyntax,
    _encode_AttributesSyntax,
} from "../CertificateExtensions/AttributesSyntax.ta";
import { id_ce_subjectDirectoryAttributes } from "../CertificateExtensions/id-ce-subjectDirectoryAttributes.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    AttributesSyntax,
    _decode_AttributesSyntax,
    _encode_AttributesSyntax,
} from "../CertificateExtensions/AttributesSyntax.ta";
export { id_ce_subjectDirectoryAttributes } from "../CertificateExtensions/id-ce-subjectDirectoryAttributes.va";

/* START_OF_SYMBOL_DEFINITION subjectDirectoryAttributes */
/**
 * @summary subjectDirectoryAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subjectDirectoryAttributes EXTENSION ::= {
 *   SYNTAX         AttributesSyntax
 *   IDENTIFIED BY  id-ce-subjectDirectoryAttributes }
 * ```
 *
 * @constant
 * @type {EXTENSION<AttributesSyntax>}
 * @implements {EXTENSION<AttributesSyntax>}
 */
export const subjectDirectoryAttributes: EXTENSION<AttributesSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AttributesSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AttributesSyntax,
    },
    "&id": id_ce_subjectDirectoryAttributes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subjectDirectoryAttributes */

/* eslint-enable */
