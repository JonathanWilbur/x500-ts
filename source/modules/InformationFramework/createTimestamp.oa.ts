/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_oa_createTimestamp } from "../InformationFramework/id-oa-createTimestamp.va";
import { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa";
import { generalizedTimeMatch } from "../SelectedAttributeTypes/generalizedTimeMatch.oa";
import { generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/generalizedTimeOrderingMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_oa_createTimestamp } from "../InformationFramework/id-oa-createTimestamp.va";
export { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa";
export { generalizedTimeMatch } from "../SelectedAttributeTypes/generalizedTimeMatch.oa";
export { generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/generalizedTimeOrderingMatch.oa";

/* START_OF_SYMBOL_DEFINITION createTimestamp */
/**
 * @summary createTimestamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * createTimestamp ATTRIBUTE ::= {
 *   WITH SYNTAX             GeneralizedTime
 *   -- as per 46.3 b) or c) of Rec. ITU-T X.680 | ISO/IEC 8824-1
 *   EQUALITY MATCHING RULE  generalizedTimeMatch
 *   ORDERING MATCHING RULE  generalizedTimeOrderingMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   LDAP-SYNTAX             generalizedTime.&id
 *   LDAP-NAME               {"createTimestamp"}
 *   ID                      id-oa-createTimestamp }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const createTimestamp: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&equality-match": generalizedTimeMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oa_createTimestamp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION createTimestamp */

/* eslint-enable */
