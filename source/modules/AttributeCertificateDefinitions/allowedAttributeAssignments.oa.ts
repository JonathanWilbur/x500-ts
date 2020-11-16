/* eslint-disable */
import {
    _decode_AllowedAttributeAssignments,
    _encode_AllowedAttributeAssignments,
} from "../AttributeCertificateDefinitions/AllowedAttributeAssignments.ta";
import { id_ce_allowedAttributeAssignments } from "../AttributeCertificateDefinitions/id-ce-allowedAttributeAssignments.va";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    AllowedAttributeAssignments,
    _decode_AllowedAttributeAssignments,
    _encode_AllowedAttributeAssignments,
} from "../AttributeCertificateDefinitions/AllowedAttributeAssignments.ta";
export { id_ce_allowedAttributeAssignments } from "../AttributeCertificateDefinitions/id-ce-allowedAttributeAssignments.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION allowedAttributeAssignments */
/**
 * @summary allowedAttributeAssignments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * allowedAttributeAssignments EXTENSION ::= {
 *   SYNTAX         AllowedAttributeAssignments
 *   IDENTIFIED BY  id-ce-allowedAttributeAssignments }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const allowedAttributeAssignments: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AllowedAttributeAssignments,
    },
    encoderFor: {
        "&ExtnType": _encode_AllowedAttributeAssignments,
    },
    "&id": id_ce_allowedAttributeAssignments /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION allowedAttributeAssignments */

/* eslint-enable */
