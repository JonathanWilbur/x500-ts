/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
import { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa";
import { id_oa_serviceAdminSubentryList } from "../InformationFramework/id-oa-serviceAdminSubentryList.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa";
export { id_oa_serviceAdminSubentryList } from "../InformationFramework/id-oa-serviceAdminSubentryList.va";

/* START_OF_SYMBOL_DEFINITION serviceAdminSubentryList */
/**
 * @summary serviceAdminSubentryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceAdminSubentryList ATTRIBUTE ::= {
 *   WITH SYNTAX             DistinguishedName
 *   EQUALITY MATCHING RULE  distinguishedNameMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-serviceAdminSubentryList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const serviceAdminSubentryList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_serviceAdminSubentryList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION serviceAdminSubentryList */

/* eslint-enable */