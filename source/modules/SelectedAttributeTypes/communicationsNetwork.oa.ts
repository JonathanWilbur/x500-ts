/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa";
import {
    _decode_CommunicationsNetwork,
    _encode_CommunicationsNetwork,
} from "../SelectedAttributeTypes/CommunicationsNetwork.ta";
import { id_at_communicationsNetwork } from "../SelectedAttributeTypes/id-at-communicationsNetwork.va";
import { oid } from "../SelectedAttributeTypes/oid.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa";
export {
    CommunicationsNetwork,
    _decode_CommunicationsNetwork,
    _encode_CommunicationsNetwork,
} from "../SelectedAttributeTypes/CommunicationsNetwork.ta";
export { id_at_communicationsNetwork } from "../SelectedAttributeTypes/id-at-communicationsNetwork.va";
export { oid } from "../SelectedAttributeTypes/oid.oa";

/* START_OF_SYMBOL_DEFINITION communicationsNetwork */
/**
 * @summary communicationsNetwork
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * communicationsNetwork ATTRIBUTE ::= {
 *   WITH SYNTAX              CommunicationsNetwork
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"communicationsNetwork"}
 *   ID                       id-at-communicationsNetwork }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const communicationsNetwork: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CommunicationsNetwork,
    },
    encoderFor: {
        "&Type": _encode_CommunicationsNetwork,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_communicationsNetwork /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION communicationsNetwork */

/* eslint-enable */
