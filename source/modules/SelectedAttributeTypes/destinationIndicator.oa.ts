/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa";
import {
    _decode_DestinationIndicator,
    _encode_DestinationIndicator,
} from "../SelectedAttributeTypes/DestinationIndicator.ta";
import { id_at_destinationIndicator } from "../SelectedAttributeTypes/id-at-destinationIndicator.va";
import { printableString } from "../SelectedAttributeTypes/printableString.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa";
export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa";
export {
    DestinationIndicator,
    _decode_DestinationIndicator,
    _encode_DestinationIndicator,
} from "../SelectedAttributeTypes/DestinationIndicator.ta";
export { id_at_destinationIndicator } from "../SelectedAttributeTypes/id-at-destinationIndicator.va";
export { printableString } from "../SelectedAttributeTypes/printableString.oa";

/* START_OF_SYMBOL_DEFINITION destinationIndicator */
/**
 * @summary destinationIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * destinationIndicator ATTRIBUTE ::= {
 *   WITH SYNTAX              DestinationIndicator
 *   EQUALITY MATCHING RULE   caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"destinationIndicator"}
 *   ID                       id-at-destinationIndicator }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const destinationIndicator: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DestinationIndicator,
    },
    encoderFor: {
        "&Type": _encode_DestinationIndicator,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_destinationIndicator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION destinationIndicator */

/* eslint-enable */