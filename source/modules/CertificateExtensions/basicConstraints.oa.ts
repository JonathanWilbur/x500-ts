/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    _decode_BasicConstraintsSyntax,
    _encode_BasicConstraintsSyntax,
} from "../CertificateExtensions/BasicConstraintsSyntax.ta";
import { id_ce_basicConstraints } from "../CertificateExtensions/id-ce-basicConstraints.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    BasicConstraintsSyntax,
    _decode_BasicConstraintsSyntax,
    _encode_BasicConstraintsSyntax,
} from "../CertificateExtensions/BasicConstraintsSyntax.ta";
export { id_ce_basicConstraints } from "../CertificateExtensions/id-ce-basicConstraints.va";

/* START_OF_SYMBOL_DEFINITION basicConstraints */
/**
 * @summary basicConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * basicConstraints EXTENSION ::= {
 *   SYNTAX         BasicConstraintsSyntax
 *   IDENTIFIED BY  id-ce-basicConstraints }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const basicConstraints: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_BasicConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_BasicConstraintsSyntax,
    },
    "&id": id_ce_basicConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION basicConstraints */

/* eslint-enable */
