/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_not_ldapDiagnosticMsg } from "../SelectedAttributeTypes/id-not-ldapDiagnosticMsg.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_not_ldapDiagnosticMsg } from "../SelectedAttributeTypes/id-not-ldapDiagnosticMsg.va";

/* START_OF_SYMBOL_DEFINITION ldapDiagnosticMsg */
/**
 * @summary ldapDiagnosticMsg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapDiagnosticMsg ATTRIBUTE ::= {
 *   WITH SYNTAX              UTF8String
 *   SINGLE VALUE             TRUE
 *   ID                       id-not-ldapDiagnosticMsg }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const ldapDiagnosticMsg: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeUTF8String,
    },
    encoderFor: {
        "&Type": $._encodeUTF8String,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_not_ldapDiagnosticMsg /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ldapDiagnosticMsg */

/* eslint-enable */
