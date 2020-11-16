/* eslint-disable */
import {
    _decode_HolderNameConstraintsSyntax,
    _encode_HolderNameConstraintsSyntax,
} from "../AttributeCertificateDefinitions/HolderNameConstraintsSyntax.ta";
import { id_ce_holderNameConstraints } from "../AttributeCertificateDefinitions/id-ce-holderNameConstraints.va";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    HolderNameConstraintsSyntax,
    _decode_HolderNameConstraintsSyntax,
    _encode_HolderNameConstraintsSyntax,
} from "../AttributeCertificateDefinitions/HolderNameConstraintsSyntax.ta";
export { id_ce_holderNameConstraints } from "../AttributeCertificateDefinitions/id-ce-holderNameConstraints.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION holderNameConstraints */
/**
 * @summary holderNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * holderNameConstraints EXTENSION ::= {
 *   SYNTAX         HolderNameConstraintsSyntax
 *   IDENTIFIED BY  id-ce-holderNameConstraints }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const holderNameConstraints: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_HolderNameConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_HolderNameConstraintsSyntax,
    },
    "&id": id_ce_holderNameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION holderNameConstraints */

/* eslint-enable */
