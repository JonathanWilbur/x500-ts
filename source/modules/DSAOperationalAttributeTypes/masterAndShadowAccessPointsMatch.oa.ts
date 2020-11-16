/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { id_kmr_masterShadowMatch } from "../DSAOperationalAttributeTypes/id-kmr-masterShadowMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export { id_kmr_masterShadowMatch } from "../DSAOperationalAttributeTypes/id-kmr-masterShadowMatch.va";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";

/* START_OF_SYMBOL_DEFINITION masterAndShadowAccessPointsMatch */
/**
 * @summary masterAndShadowAccessPointsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * masterAndShadowAccessPointsMatch MATCHING-RULE ::= {
 *   SYNTAX  SET OF Name
 *   ID      id-kmr-masterShadowMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const masterAndShadowAccessPointsMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeSetOf<Name>(() => _decode_Name),
    },
    encoderFor: {
        "&AssertionType": $._encodeSetOf<Name>(() => _encode_Name, $.BER),
    },
    "&id": id_kmr_masterShadowMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION masterAndShadowAccessPointsMatch */

/* eslint-enable */
