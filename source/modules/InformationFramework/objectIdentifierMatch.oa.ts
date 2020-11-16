/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { id_mr_objectIdentifierMatch } from "../InformationFramework/id-mr-objectIdentifierMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { oid } from "../SelectedAttributeTypes/oid.oa";
export { id_mr_objectIdentifierMatch } from "../InformationFramework/id-mr-objectIdentifierMatch.va";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { oid } from "../SelectedAttributeTypes/oid.oa";

/* START_OF_SYMBOL_DEFINITION objectIdentifierMatch */
/**
 * @summary objectIdentifierMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectIdentifierMatch MATCHING-RULE ::= {
 *   SYNTAX       OBJECT IDENTIFIER
 *   LDAP-SYNTAX  oid.&id
 *   LDAP-NAME    {"objectIdentifierMatch"}
 *   ID           id-mr-objectIdentifierMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const objectIdentifierMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&AssertionType": $._encodeObjectIdentifier,
    },
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_objectIdentifierMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION objectIdentifierMatch */

/* eslint-enable */
