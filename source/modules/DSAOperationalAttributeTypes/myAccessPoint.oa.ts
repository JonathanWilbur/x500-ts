/* eslint-disable */
import {
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta";
import { accessPointMatch } from "../DSAOperationalAttributeTypes/accessPointMatch.oa";
import { id_doa_myAccessPoint } from "../DSAOperationalAttributeTypes/id-doa-myAccessPoint.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta";
export { accessPointMatch } from "../DSAOperationalAttributeTypes/accessPointMatch.oa";
export { id_doa_myAccessPoint } from "../DSAOperationalAttributeTypes/id-doa-myAccessPoint.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION myAccessPoint */
/**
 * @summary myAccessPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * myAccessPoint ATTRIBUTE ::= {
 *   WITH SYNTAX             AccessPoint
 *   EQUALITY MATCHING RULE  accessPointMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-myAccessPoint }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const myAccessPoint: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AccessPoint,
    },
    encoderFor: {
        "&Type": _encode_AccessPoint,
    },
    "&equality-match": accessPointMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_myAccessPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION myAccessPoint */

/* eslint-enable */
