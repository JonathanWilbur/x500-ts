/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { id_aca_accessControlScheme } from "../BasicAccessControl/id-aca-accessControlScheme.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa";
export { id_aca_accessControlScheme } from "../BasicAccessControl/id-aca-accessControlScheme.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa";

/* START_OF_SYMBOL_DEFINITION accessControlScheme */
/**
 * @summary accessControlScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControlScheme ATTRIBUTE ::= {
 *   WITH SYNTAX             OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   SINGLE VALUE            TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-aca-accessControlScheme }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const accessControlScheme: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_aca_accessControlScheme /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION accessControlScheme */

/* eslint-enable */
