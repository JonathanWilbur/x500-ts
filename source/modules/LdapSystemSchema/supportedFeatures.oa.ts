/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_oat_supportedFeatures } from "../LdapSystemSchema/id-oat-supportedFeatures.va";
import { oid } from "../SelectedAttributeTypes/oid.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_oat_supportedFeatures } from "../LdapSystemSchema/id-oat-supportedFeatures.va";
export { oid } from "../SelectedAttributeTypes/oid.oa";

/* START_OF_SYMBOL_DEFINITION supportedFeatures */
/**
 * @summary supportedFeatures
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedFeatures ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"supportedFeatures"}
 *   ID                       id-oat-supportedFeatures }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const supportedFeatures: ATTRIBUTE = {
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
    "&id": id_oat_supportedFeatures /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION supportedFeatures */

/* eslint-enable */
