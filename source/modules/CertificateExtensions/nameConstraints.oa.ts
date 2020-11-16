/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import { id_ce_nameConstraints } from "../CertificateExtensions/id-ce-nameConstraints.va";
import {
    _decode_NameConstraintsSyntax,
    _encode_NameConstraintsSyntax,
} from "../CertificateExtensions/NameConstraintsSyntax.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_nameConstraints } from "../CertificateExtensions/id-ce-nameConstraints.va";
export {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
    _encode_NameConstraintsSyntax,
} from "../CertificateExtensions/NameConstraintsSyntax.ta";

/* START_OF_SYMBOL_DEFINITION nameConstraints */
/**
 * @summary nameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameConstraints EXTENSION ::= {
 *   SYNTAX         NameConstraintsSyntax
 *   IDENTIFIED BY  id-ce-nameConstraints }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const nameConstraints: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_NameConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_NameConstraintsSyntax,
    },
    "&id": id_ce_nameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION nameConstraints */

/* eslint-enable */
