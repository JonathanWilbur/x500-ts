/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { bitString } from "../SelectedAttributeTypes/bitString.oa";
import { bitStringMatch } from "../SelectedAttributeTypes/bitStringMatch.oa";
import { id_at_uniqueIdentifier } from "../SelectedAttributeTypes/id-at-uniqueIdentifier.va";
import {
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../SelectedAttributeTypes/UniqueIdentifier.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { bitString } from "../SelectedAttributeTypes/bitString.oa";
export { bitStringMatch } from "../SelectedAttributeTypes/bitStringMatch.oa";
export { id_at_uniqueIdentifier } from "../SelectedAttributeTypes/id-at-uniqueIdentifier.va";
export {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../SelectedAttributeTypes/UniqueIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION uniqueIdentifier */
/**
 * @summary uniqueIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uniqueIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX              UniqueIdentifier
 *   EQUALITY MATCHING RULE   bitStringMatch
 *   LDAP-SYNTAX              bitString.&id
 *   LDAP-NAME                {"x500UniqueIdentifier"}
 *   ID                       id-at-uniqueIdentifier }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const uniqueIdentifier: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniqueIdentifier,
    },
    encoderFor: {
        "&Type": _encode_UniqueIdentifier,
    },
    "&equality-match": bitStringMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": bitString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_uniqueIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uniqueIdentifier */

/* eslint-enable */
