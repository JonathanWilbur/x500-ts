/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa";
import { id_at_tagOid } from "../SelectedAttributeTypes/id-at-tagOid.va";
import { oid } from "../SelectedAttributeTypes/oid.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa";
export { id_at_tagOid } from "../SelectedAttributeTypes/id-at-tagOid.va";
export { oid } from "../SelectedAttributeTypes/oid.oa";

/* START_OF_SYMBOL_DEFINITION tagOid */
/**
 * @summary tagOid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tagOid ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"tagOid"}
 *   ID                       id-at-tagOid }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const tagOid: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_tagOid /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION tagOid */

/* eslint-enable */