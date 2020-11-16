/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_soa_objectClasses } from "../SchemaAdministration/id-soa-objectClasses.va";
import {
    _decode_ObjectClassDescription,
    _encode_ObjectClassDescription,
} from "../SchemaAdministration/ObjectClassDescription.ta";
import { objectClassDescription } from "../SelectedAttributeTypes/objectClassDescription.oa";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_soa_objectClasses } from "../SchemaAdministration/id-soa-objectClasses.va";
export {
    ObjectClassDescription,
    _decode_ObjectClassDescription,
    _encode_ObjectClassDescription,
} from "../SchemaAdministration/ObjectClassDescription.ta";
export { objectClassDescription } from "../SelectedAttributeTypes/objectClassDescription.oa";
export { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";

/* START_OF_SYMBOL_DEFINITION objectClasses */
/**
 * @summary objectClasses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectClasses ATTRIBUTE ::= {
 *   WITH SYNTAX              ObjectClassDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              objectClassDescription.&id
 *   LDAP-NAME                {"objectClasses"}
 *   ID                       id-soa-objectClasses }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const objectClasses: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ObjectClassDescription,
    },
    encoderFor: {
        "&Type": _encode_ObjectClassDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": objectClassDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_objectClasses /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION objectClasses */

/* eslint-enable */
