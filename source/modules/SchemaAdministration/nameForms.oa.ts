/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_soa_nameForms } from "../SchemaAdministration/id-soa-nameForms.va";
import {
    _decode_NameFormDescription,
    _encode_NameFormDescription,
} from "../SchemaAdministration/NameFormDescription.ta";
import { nameFormDescription } from "../SelectedAttributeTypes/nameFormDescription.oa";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_soa_nameForms } from "../SchemaAdministration/id-soa-nameForms.va";
export {
    NameFormDescription,
    _decode_NameFormDescription,
    _encode_NameFormDescription,
} from "../SchemaAdministration/NameFormDescription.ta";
export { nameFormDescription } from "../SelectedAttributeTypes/nameFormDescription.oa";
export { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";

/* START_OF_SYMBOL_DEFINITION nameForms */
/**
 * @summary nameForms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameForms ATTRIBUTE ::= {
 *   WITH SYNTAX              NameFormDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              nameFormDescription.&id
 *   LDAP-NAME                {"nameForms"}
 *   ID                       id-soa-nameForms }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const nameForms: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_NameFormDescription,
    },
    encoderFor: {
        "&Type": _encode_NameFormDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": nameFormDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_nameForms /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION nameForms */

/* eslint-enable */
