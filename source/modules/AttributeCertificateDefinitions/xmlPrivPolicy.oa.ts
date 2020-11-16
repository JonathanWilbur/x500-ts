/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { id_at_xmlPrivPolicy } from "../AttributeCertificateDefinitions/id-at-xmlPrivPolicy.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_xmlPrivPolicy } from "../AttributeCertificateDefinitions/id-at-xmlPrivPolicy.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION xmlPrivPolicy */
/**
 * @summary xmlPrivPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * xmlPrivPolicy ATTRIBUTE ::= {
 *   WITH SYNTAX  UTF8String -- XML-encoded privilege policy information
 *   ID           id-at-xmlPrivPolicy }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const xmlPrivPolicy: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeUTF8String,
    },
    encoderFor: {
        "&Type": $._encodeUTF8String,
    },
    "&id": id_at_xmlPrivPolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION xmlPrivPolicy */

/* eslint-enable */
