/* eslint-disable */
import {
    _decode_SubtreeSpecification,
    _encode_SubtreeSpecification,
} from "../InformationFramework/SubtreeSpecification.ta";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_subtreeSpec } from "../SelectedAttributeTypes/id-lsx-subtreeSpec.va";
export {
    SubtreeSpecification,
    _decode_SubtreeSpecification,
    _encode_SubtreeSpecification,
} from "../InformationFramework/SubtreeSpecification.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_subtreeSpec } from "../SelectedAttributeTypes/id-lsx-subtreeSpec.va";

/* START_OF_SYMBOL_DEFINITION subtreeSpec */
/**
 * @summary subtreeSpec
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subtreeSpec SYNTAX-NAME ::= {
 *   LDAP-DESC         "SubtreeSpecification"
 *   DIRECTORY SYNTAX  SubtreeSpecification
 *   ID                id-lsx-subtreeSpec }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const subtreeSpec: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_SubtreeSpecification,
    },
    encoderFor: {
        "&Type": _encode_SubtreeSpecification,
    },
    "&ldapDesc": "SubtreeSpecification" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_subtreeSpec /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subtreeSpec */

/* eslint-enable */
