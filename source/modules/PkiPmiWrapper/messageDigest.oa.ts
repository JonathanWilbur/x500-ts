/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_messageDigest } from "../PkiPmiWrapper/id-messageDigest.va";
import { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_messageDigest } from "../PkiPmiWrapper/id-messageDigest.va";
export { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa";

/* START_OF_SYMBOL_DEFINITION messageDigest */
/**
 * @summary messageDigest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * messageDigest ATTRIBUTE ::= {
 *   WITH SYNTAX            OCTET STRING
 *   EQUALITY MATCHING RULE octetStringMatch
 *   SINGLE VALUE           TRUE
 *   ID                     id-messageDigest }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const messageDigest: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&equality-match": octetStringMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_messageDigest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION messageDigest */

/* eslint-enable */
