/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa";
import { id_not_searchServiceProblem } from "../SelectedAttributeTypes/id-not-searchServiceProblem.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa";
export { id_not_searchServiceProblem } from "../SelectedAttributeTypes/id-not-searchServiceProblem.va";

/* START_OF_SYMBOL_DEFINITION searchServiceProblem */
/**
 * @summary searchServiceProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * searchServiceProblem ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   SINGLE VALUE             TRUE
 *   ID                       id-not-searchServiceProblem }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const searchServiceProblem: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_not_searchServiceProblem /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION searchServiceProblem */

/* eslint-enable */