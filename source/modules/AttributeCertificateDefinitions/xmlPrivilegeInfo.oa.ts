/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { id_at_xMLPrivilegeInfo } from "../AttributeCertificateDefinitions/id-at-xMLPrivilegeInfo.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_xMLPrivilegeInfo } from "../AttributeCertificateDefinitions/id-at-xMLPrivilegeInfo.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION xmlPrivilegeInfo */
/**
 * @summary xmlPrivilegeInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * xmlPrivilegeInfo ATTRIBUTE ::= {
 *   WITH SYNTAX  UTF8String --contains XML-encoded privilege information
 *   ID           id-at-xMLPrivilegeInfo }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const xmlPrivilegeInfo: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeUTF8String,
    },
    encoderFor: {
        "&Type": $._encodeUTF8String,
    },
    "&id": id_at_xMLPrivilegeInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION xmlPrivilegeInfo */

/* eslint-enable */
