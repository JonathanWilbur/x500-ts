/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_telephoneNumberMatch } from "../SelectedAttributeTypes/id-mr-telephoneNumberMatch.va";
import { telephoneNr } from "../SelectedAttributeTypes/telephoneNr.oa";
import {
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from "../SelectedAttributeTypes/TelephoneNumber.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_mr_telephoneNumberMatch } from "../SelectedAttributeTypes/id-mr-telephoneNumberMatch.va";
export { telephoneNr } from "../SelectedAttributeTypes/telephoneNr.oa";
export {
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from "../SelectedAttributeTypes/TelephoneNumber.ta";

/* START_OF_SYMBOL_DEFINITION telephoneNumberMatch */
/**
 * @summary telephoneNumberMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * telephoneNumberMatch MATCHING-RULE ::= {
 *   SYNTAX       TelephoneNumber
 *   LDAP-SYNTAX  telephoneNr.&id
 *   LDAP-NAME    {"telephoneNumberMatch"}
 *   ID           id-mr-telephoneNumberMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const telephoneNumberMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_TelephoneNumber,
    },
    encoderFor: {
        "&AssertionType": _encode_TelephoneNumber,
    },
    "&ldapSyntax": telephoneNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_telephoneNumberMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION telephoneNumberMatch */

/* eslint-enable */