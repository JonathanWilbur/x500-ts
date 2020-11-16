/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_nameAndOptionalUID } from "../SelectedAttributeTypes/id-lsx-nameAndOptionalUID.va";
import {
    _decode_NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../SelectedAttributeTypes/NameAndOptionalUID.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_nameAndOptionalUID } from "../SelectedAttributeTypes/id-lsx-nameAndOptionalUID.va";
export {
    NameAndOptionalUID,
    _decode_NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../SelectedAttributeTypes/NameAndOptionalUID.ta";

/* START_OF_SYMBOL_DEFINITION nameAndOptionalUID */
/**
 * @summary nameAndOptionalUID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameAndOptionalUID SYNTAX-NAME ::= {
 *   LDAP-DESC         "Name And Optional UID"
 *   DIRECTORY SYNTAX  NameAndOptionalUID
 *   ID                id-lsx-nameAndOptionalUID }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const nameAndOptionalUID: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_NameAndOptionalUID,
    },
    encoderFor: {
        "&Type": _encode_NameAndOptionalUID,
    },
    "&ldapDesc": "Name And Optional UID" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_nameAndOptionalUID /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION nameAndOptionalUID */

/* eslint-enable */
