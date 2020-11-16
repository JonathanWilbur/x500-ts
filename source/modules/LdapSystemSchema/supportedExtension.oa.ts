/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_lat_supportedExtension } from "../LdapSystemSchema/id-lat-supportedExtension.va";
import { oid } from "../SelectedAttributeTypes/oid.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_lat_supportedExtension } from "../LdapSystemSchema/id-lat-supportedExtension.va";
export { oid } from "../SelectedAttributeTypes/oid.oa";

/* START_OF_SYMBOL_DEFINITION supportedExtension */
/**
 * @summary supportedExtension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedExtension ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"supportedExtension"}
 *   ID                       id-lat-supportedExtension }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const supportedExtension: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_lat_supportedExtension /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION supportedExtension */

/* eslint-enable */
