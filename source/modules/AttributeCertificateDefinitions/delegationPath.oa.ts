/* eslint-disable */
import {
    _decode_AttCertPath,
    _encode_AttCertPath,
} from "../AttributeCertificateDefinitions/AttCertPath.ta";
import { id_at_delegationPath } from "../AttributeCertificateDefinitions/id-at-delegationPath.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttCertPath,
    _decode_AttCertPath,
    _encode_AttCertPath,
} from "../AttributeCertificateDefinitions/AttCertPath.ta";
export { id_at_delegationPath } from "../AttributeCertificateDefinitions/id-at-delegationPath.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION delegationPath */
/**
 * @summary delegationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delegationPath ATTRIBUTE ::= {
 *   WITH SYNTAX  AttCertPath
 *   ID           id-at-delegationPath }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const delegationPath: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttCertPath,
    },
    encoderFor: {
        "&Type": _encode_AttCertPath,
    },
    "&id": id_at_delegationPath /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION delegationPath */

/* eslint-enable */
