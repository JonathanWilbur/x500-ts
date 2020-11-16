/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_protocolInformationMatch } from "../SelectedAttributeTypes/id-mr-protocolInformationMatch.va";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_mr_protocolInformationMatch } from "../SelectedAttributeTypes/id-mr-protocolInformationMatch.va";

/* START_OF_SYMBOL_DEFINITION protocolInformationMatch */
/**
 * @summary protocolInformationMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protocolInformationMatch MATCHING-RULE ::= {
 *   SYNTAX       OCTET STRING
 *   ID           id-mr-protocolInformationMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const protocolInformationMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeOctetString,
    },
    encoderFor: {
        "&AssertionType": $._encodeOctetString,
    },
    "&id": id_mr_protocolInformationMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION protocolInformationMatch */

/* eslint-enable */