/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import {
    _decode_AttributeTypeDescription,
    _encode_AttributeTypeDescription,
} from "../SchemaAdministration/AttributeTypeDescription.ta";
import { id_lsx_attributeTypeDescription } from "../SelectedAttributeTypes/id-lsx-attributeTypeDescription.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    AttributeTypeDescription,
    _decode_AttributeTypeDescription,
    _encode_AttributeTypeDescription,
} from "../SchemaAdministration/AttributeTypeDescription.ta";
export { id_lsx_attributeTypeDescription } from "../SelectedAttributeTypes/id-lsx-attributeTypeDescription.va";

/* START_OF_SYMBOL_DEFINITION attributeTypeDescription */
/**
 * @summary attributeTypeDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeTypeDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Attribute Type Description"
 *   DIRECTORY SYNTAX  AttributeTypeDescription
 *   ID                id-lsx-attributeTypeDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const attributeTypeDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_AttributeTypeDescription,
    },
    encoderFor: {
        "&Type": _encode_AttributeTypeDescription,
    },
    "&ldapDesc": "Attribute Type Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_attributeTypeDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attributeTypeDescription */

/* eslint-enable */
