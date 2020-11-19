/* eslint-disable */
import { id_ce_delegatedNameConstraints } from "../AttributeCertificateDefinitions/id-ce-delegatedNameConstraints.va";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
    _encode_NameConstraintsSyntax,
} from "../CertificateExtensions/NameConstraintsSyntax.ta";
export { id_ce_delegatedNameConstraints } from "../AttributeCertificateDefinitions/id-ce-delegatedNameConstraints.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
    _encode_NameConstraintsSyntax,
} from "../CertificateExtensions/NameConstraintsSyntax.ta";

/* START_OF_SYMBOL_DEFINITION delegatedNameConstraints */
/**
 * @summary delegatedNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delegatedNameConstraints EXTENSION ::= {
 *   SYNTAX         NameConstraintsSyntax
 *   IDENTIFIED BY  id-ce-delegatedNameConstraints }
 * ```
 *
 * @constant
 * @type {EXTENSION<NameConstraintsSyntax>}
 * @implements {EXTENSION<NameConstraintsSyntax>}
 */
export const delegatedNameConstraints: EXTENSION<NameConstraintsSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_NameConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_NameConstraintsSyntax,
    },
    "&id": id_ce_delegatedNameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION delegatedNameConstraints */

/* eslint-enable */
