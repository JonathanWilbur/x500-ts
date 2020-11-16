/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
import { id_at_collectiveStateOrProvinceName } from "../SelectedAttributeTypes/id-at-collectiveStateOrProvinceName.va";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
export { id_at_collectiveStateOrProvinceName } from "../SelectedAttributeTypes/id-at-collectiveStateOrProvinceName.va";
export { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa";

/* START_OF_SYMBOL_DEFINITION collectiveStateOrProvinceName */
/**
 * @summary collectiveStateOrProvinceName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveStateOrProvinceName ATTRIBUTE ::= {
 *   SUBTYPE OF               stateOrProvinceName
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"c-st"}
 *   ID                       id-at-collectiveStateOrProvinceName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveStateOrProvinceName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": stateOrProvinceName /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveStateOrProvinceName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION collectiveStateOrProvinceName */

/* eslint-enable */