/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_objectClass } from "../InformationFramework/id-at-objectClass.va";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa";
import { oid } from "../SelectedAttributeTypes/oid.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_objectClass } from "../InformationFramework/id-at-objectClass.va";
export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa";
export { oid } from "../SelectedAttributeTypes/oid.oa";

/* START_OF_SYMBOL_DEFINITION objectClass */
/**
 * @summary objectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectClass ATTRIBUTE ::= {
 *   WITH SYNTAX             OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   LDAP-SYNTAX             oid.&id
 *   LDAP-NAME               {"objectClass"}
 *   ID                      id-at-objectClass }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const objectClass: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_objectClass /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION objectClass */

/* eslint-enable */
