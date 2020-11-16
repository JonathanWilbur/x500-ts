/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { bitString } from "../SelectedAttributeTypes/bitString.oa";
import { bitStringMatch } from "../SelectedAttributeTypes/bitStringMatch.oa";
import { id_at_uii } from "../SelectedAttributeTypes/id-at-uii.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { bitString } from "../SelectedAttributeTypes/bitString.oa";
export { bitStringMatch } from "../SelectedAttributeTypes/bitStringMatch.oa";
export { id_at_uii } from "../SelectedAttributeTypes/id-at-uii.va";

/* START_OF_SYMBOL_DEFINITION uii */
/**
 * @summary uii
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uii ATTRIBUTE ::= {
 *   WITH SYNTAX              BIT STRING
 *   EQUALITY MATCHING RULE   bitStringMatch
 *   LDAP-SYNTAX              bitString.&id
 *   LDAP-NAME                {"uii"}
 *   ID                       id-at-uii }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const uii: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBitString,
    },
    encoderFor: {
        "&Type": $._encodeBitString,
    },
    "&equality-match": bitStringMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": bitString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_uii /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uii */

/* eslint-enable */
