/* eslint-disable */
import { GeneralizedTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa";
import { id_mr_generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/id-mr-generalizedTimeOrderingMatch.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa";
export { id_mr_generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/id-mr-generalizedTimeOrderingMatch.va";

/* START_OF_SYMBOL_DEFINITION generalizedTimeOrderingMatch */
/**
 * @summary generalizedTimeOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * generalizedTimeOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       GeneralizedTime
 *   -- as per 46.3 b) or c) of Rec. ITU-T X.680 | ISO/IEC 8824-1
 *   LDAP-SYNTAX  generalizedTime.&id
 *   LDAP-NAME    {"generalizedTimeOrderingMatch"}
 *   ID           id-mr-generalizedTimeOrderingMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<GeneralizedTime>}
 * @implements {MATCHING_RULE<GeneralizedTime>}
 */
export const generalizedTimeOrderingMatch: MATCHING_RULE<GeneralizedTime> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&AssertionType": $._encodeGeneralizedTime,
    },
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION generalizedTimeOrderingMatch */

/* eslint-enable */
