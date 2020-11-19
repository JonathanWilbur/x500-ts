/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { id_mr_extensionPresenceMatch } from "../AttributeCertificateDefinitions/id-mr-extensionPresenceMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_mr_extensionPresenceMatch } from "../AttributeCertificateDefinitions/id-mr-extensionPresenceMatch.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION extensionPresenceMatch */
/**
 * @summary extensionPresenceMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extensionPresenceMatch MATCHING-RULE ::= {
 *   SYNTAX  EXTENSION.&id
 *   ID      id-mr-extensionPresenceMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<OBJECT_IDENTIFIER>}
 * @implements {MATCHING_RULE<OBJECT_IDENTIFIER>}
 */
export const extensionPresenceMatch: MATCHING_RULE<OBJECT_IDENTIFIER> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&AssertionType": $._encodeObjectIdentifier,
    },
    "&id": id_mr_extensionPresenceMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION extensionPresenceMatch */

/* eslint-enable */
