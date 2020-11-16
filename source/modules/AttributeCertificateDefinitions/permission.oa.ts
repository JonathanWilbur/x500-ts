/* eslint-disable */
import { dualStringMatch } from "../AttributeCertificateDefinitions/dualStringMatch.oa";
import {
    _decode_DualStringSyntax,
    _encode_DualStringSyntax,
} from "../AttributeCertificateDefinitions/DualStringSyntax.ta";
import { id_at_permission } from "../AttributeCertificateDefinitions/id-at-permission.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { dualStringMatch } from "../AttributeCertificateDefinitions/dualStringMatch.oa";
export {
    DualStringSyntax,
    _decode_DualStringSyntax,
    _encode_DualStringSyntax,
} from "../AttributeCertificateDefinitions/DualStringSyntax.ta";
export { id_at_permission } from "../AttributeCertificateDefinitions/id-at-permission.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION permission */
/**
 * @summary permission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * permission ATTRIBUTE ::= {
 *   WITH SYNTAX             DualStringSyntax
 *   EQUALITY MATCHING RULE  dualStringMatch
 *   ID                      id-at-permission }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const permission: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DualStringSyntax,
    },
    encoderFor: {
        "&Type": _encode_DualStringSyntax,
    },
    "&equality-match": dualStringMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_permission /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION permission */

/* eslint-enable */
