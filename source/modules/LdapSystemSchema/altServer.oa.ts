/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_lat_altServer } from "../LdapSystemSchema/id-lat-altServer.va";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_lat_altServer } from "../LdapSystemSchema/id-lat-altServer.va";
export { ia5String } from "../SelectedAttributeTypes/ia5String.oa";

/* START_OF_SYMBOL_DEFINITION altServer */
/**
 * @summary altServer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * altServer ATTRIBUTE ::= {
 *   WITH SYNTAX              IA5String
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              ia5String.&id
 *   LDAP-NAME                {"altServer"}
 *   ID                       id-lat-altServer }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const altServer: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_lat_altServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION altServer */

/* eslint-enable */
