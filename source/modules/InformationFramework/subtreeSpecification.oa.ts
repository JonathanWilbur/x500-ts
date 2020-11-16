/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_oa_subtreeSpecification } from "../InformationFramework/id-oa-subtreeSpecification.va";
import {
    _decode_SubtreeSpecification,
    _encode_SubtreeSpecification,
} from "../InformationFramework/SubtreeSpecification.ta";
import { subtreeSpec } from "../SelectedAttributeTypes/subtreeSpec.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_oa_subtreeSpecification } from "../InformationFramework/id-oa-subtreeSpecification.va";
export {
    SubtreeSpecification,
    _decode_SubtreeSpecification,
    _encode_SubtreeSpecification,
} from "../InformationFramework/SubtreeSpecification.ta";
export { subtreeSpec } from "../SelectedAttributeTypes/subtreeSpec.oa";

/* START_OF_SYMBOL_DEFINITION subtreeSpecification */
/**
 * @summary subtreeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subtreeSpecification ATTRIBUTE ::= {
 *   WITH SYNTAX             SubtreeSpecification
 *   USAGE                   directoryOperation
 *   LDAP-SYNTAX             subtreeSpec.&id
 *   LDAP-NAME               {"subtreeSpecification"}
 *   ID                      id-oa-subtreeSpecification }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const subtreeSpecification: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SubtreeSpecification,
    },
    encoderFor: {
        "&Type": _encode_SubtreeSpecification,
    },
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": subtreeSpec["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_subtreeSpecification /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subtreeSpecification */

/* eslint-enable */
