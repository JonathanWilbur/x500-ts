/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    _decode_AttributeTypeDescription,
    _encode_AttributeTypeDescription,
} from "../SchemaAdministration/AttributeTypeDescription.ta";
import { id_soa_attributeTypes } from "../SchemaAdministration/id-soa-attributeTypes.va";
import { attributeTypeDescription } from "../SelectedAttributeTypes/attributeTypeDescription.oa";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeTypeDescription,
    _decode_AttributeTypeDescription,
    _encode_AttributeTypeDescription,
} from "../SchemaAdministration/AttributeTypeDescription.ta";
export { id_soa_attributeTypes } from "../SchemaAdministration/id-soa-attributeTypes.va";
export { attributeTypeDescription } from "../SelectedAttributeTypes/attributeTypeDescription.oa";
export { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";

/* START_OF_SYMBOL_DEFINITION attributeTypes */
/**
 * @summary attributeTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeTypes ATTRIBUTE ::= {
 *   WITH SYNTAX              AttributeTypeDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              attributeTypeDescription.&id
 *   LDAP-NAME                {"attributeTypes"}
 *   ID                       id-soa-attributeTypes }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const attributeTypes: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeTypeDescription,
    },
    encoderFor: {
        "&Type": _encode_AttributeTypeDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": attributeTypeDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_attributeTypes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attributeTypes */

/* eslint-enable */
