/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_protocolInformation } from "../SelectedAttributeTypes/id-at-protocolInformation.va";
import {
    _decode_ProtocolInformation,
    _encode_ProtocolInformation,
} from "../SelectedAttributeTypes/ProtocolInformation.ta";
import { protocolInformationMatch } from "../SelectedAttributeTypes/protocolInformationMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_protocolInformation } from "../SelectedAttributeTypes/id-at-protocolInformation.va";
export {
    ProtocolInformation,
    _decode_ProtocolInformation,
    _encode_ProtocolInformation,
} from "../SelectedAttributeTypes/ProtocolInformation.ta";
export { protocolInformationMatch } from "../SelectedAttributeTypes/protocolInformationMatch.oa";

/* START_OF_SYMBOL_DEFINITION protocolInformation */
/**
 * @summary protocolInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protocolInformation ATTRIBUTE ::= {
 *   WITH SYNTAX              ProtocolInformation
 *   EQUALITY MATCHING RULE   protocolInformationMatch
 *   ID                       id-at-protocolInformation }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const protocolInformation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ProtocolInformation,
    },
    encoderFor: {
        "&Type": _encode_ProtocolInformation,
    },
    "&equality-match": protocolInformationMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_protocolInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION protocolInformation */

/* eslint-enable */
