/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_soa_ldapSyntaxes } from "../LdapSystemSchema/id-soa-ldapSyntaxes.va";
import {
    _decode_LdapSyntaxDescription,
    _encode_LdapSyntaxDescription,
} from "../LdapSystemSchema/LdapSyntaxDescription.ta";
import { ldapSyntaxDescription } from "../SelectedAttributeTypes/ldapSyntaxDescription.oa";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_soa_ldapSyntaxes } from "../LdapSystemSchema/id-soa-ldapSyntaxes.va";
export {
    LdapSyntaxDescription,
    _decode_LdapSyntaxDescription,
    _encode_LdapSyntaxDescription,
} from "../LdapSystemSchema/LdapSyntaxDescription.ta";
export { ldapSyntaxDescription } from "../SelectedAttributeTypes/ldapSyntaxDescription.oa";
export { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";

/* START_OF_SYMBOL_DEFINITION ldapSyntaxes */
/**
 * @summary ldapSyntaxes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapSyntaxes ATTRIBUTE ::= {
 *   WITH SYNTAX              LdapSyntaxDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              ldapSyntaxDescription.&id
 *   LDAP-NAME                {"ldapSyntax"}
 *   ID                       id-soa-ldapSyntaxes }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const ldapSyntaxes: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_LdapSyntaxDescription,
    },
    encoderFor: {
        "&Type": _encode_LdapSyntaxDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ldapSyntaxDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_ldapSyntaxes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ldapSyntaxes */

/* eslint-enable */
