/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import { id_ce_policyMappings } from "../CertificateExtensions/id-ce-policyMappings.va";
import {
    _decode_PolicyMappingsSyntax,
    _encode_PolicyMappingsSyntax,
} from "../CertificateExtensions/PolicyMappingsSyntax.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_policyMappings } from "../CertificateExtensions/id-ce-policyMappings.va";
export {
    PolicyMappingsSyntax,
    _decode_PolicyMappingsSyntax,
    _encode_PolicyMappingsSyntax,
} from "../CertificateExtensions/PolicyMappingsSyntax.ta";

/* START_OF_SYMBOL_DEFINITION policyMappings */
/**
 * @summary policyMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * policyMappings EXTENSION ::= {
 *   SYNTAX         PolicyMappingsSyntax
 *   IDENTIFIED BY  id-ce-policyMappings }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const policyMappings: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_PolicyMappingsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_PolicyMappingsSyntax,
    },
    "&id": id_ce_policyMappings /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION policyMappings */

/* eslint-enable */
