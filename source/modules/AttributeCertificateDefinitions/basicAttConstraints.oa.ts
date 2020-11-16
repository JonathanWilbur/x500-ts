/* eslint-disable */
import {
    _decode_BasicAttConstraintsSyntax,
    _encode_BasicAttConstraintsSyntax,
} from "../AttributeCertificateDefinitions/BasicAttConstraintsSyntax.ta";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    BasicAttConstraintsSyntax,
    _decode_BasicAttConstraintsSyntax,
    _encode_BasicAttConstraintsSyntax,
} from "../AttributeCertificateDefinitions/BasicAttConstraintsSyntax.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION basicAttConstraints */
/**
 * @summary basicAttConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * basicAttConstraints EXTENSION ::= {
 *   SYNTAX         BasicAttConstraintsSyntax
 *   IDENTIFIED BY  {id-ce-basicAttConstraints} }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const basicAttConstraints: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_BasicAttConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_BasicAttConstraintsSyntax,
    },
    "&id": undefined,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION basicAttConstraints */

/* eslint-enable */
