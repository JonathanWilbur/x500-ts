/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_lat_supportedLDAPVersion } from "../LdapSystemSchema/id-lat-supportedLDAPVersion.va";
import { integer } from "../SelectedAttributeTypes/integer.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_lat_supportedLDAPVersion } from "../LdapSystemSchema/id-lat-supportedLDAPVersion.va";
export { integer } from "../SelectedAttributeTypes/integer.oa";

/* START_OF_SYMBOL_DEFINITION supportedLDAPVersion */
/**
 * @summary supportedLDAPVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedLDAPVersion ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"supportedLDAPVersion"}
 *   ID                       id-lat-supportedLDAPVersion }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const supportedLDAPVersion: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_lat_supportedLDAPVersion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION supportedLDAPVersion */

/* eslint-enable */
