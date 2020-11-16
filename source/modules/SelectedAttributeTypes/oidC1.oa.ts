/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_oidC1 } from "../SelectedAttributeTypes/id-oidC1.va";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_oidC1 } from "../SelectedAttributeTypes/id-oidC1.va";
export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa";

/* START_OF_SYMBOL_DEFINITION oidC1 */
/**
 * @summary oidC1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidC1 ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER
 *   EQUALITY MATCHING RULE   integerMatch
 *   SINGLE VALUE             TRUE
 *   ID                       id-oidC1 }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const oidC1: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_oidC1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oidC1 */

/* eslint-enable */
