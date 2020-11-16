/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa";
import { id_not_appliedRelaxation } from "../SelectedAttributeTypes/id-not-appliedRelaxation.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa";
export { id_not_appliedRelaxation } from "../SelectedAttributeTypes/id-not-appliedRelaxation.va";

/* START_OF_SYMBOL_DEFINITION appliedRelaxation */
/**
 * @summary appliedRelaxation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * appliedRelaxation ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   ID                       id-not-appliedRelaxation }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const appliedRelaxation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_not_appliedRelaxation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION appliedRelaxation */

/* eslint-enable */
