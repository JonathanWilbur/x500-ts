/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import {
    _decode_ObjectClassDescription,
    _encode_ObjectClassDescription,
} from "../SchemaAdministration/ObjectClassDescription.ta";
import { id_lsx_objectClassDescription } from "../SelectedAttributeTypes/id-lsx-objectClassDescription.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    ObjectClassDescription,
    _decode_ObjectClassDescription,
    _encode_ObjectClassDescription,
} from "../SchemaAdministration/ObjectClassDescription.ta";
export { id_lsx_objectClassDescription } from "../SelectedAttributeTypes/id-lsx-objectClassDescription.va";

/* START_OF_SYMBOL_DEFINITION objectClassDescription */
/**
 * @summary objectClassDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectClassDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Object Class Description"
 *   DIRECTORY SYNTAX  ObjectClassDescription
 *   ID                id-lsx-objectClassDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const objectClassDescription: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_ObjectClassDescription,
    },
    encoderFor: {
        "&Type": _encode_ObjectClassDescription,
    },
    "&ldapDesc": "Object Class Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_objectClassDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION objectClassDescription */

/* eslint-enable */
