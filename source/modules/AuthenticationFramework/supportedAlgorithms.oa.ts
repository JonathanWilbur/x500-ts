/* eslint-disable */
import { id_at_supportedAlgorithms } from "../AuthenticationFramework/id-at-supportedAlgorithms.va";
import {
    SupportedAlgorithm,
    _decode_SupportedAlgorithm,
    _encode_SupportedAlgorithm,
} from "../AuthenticationFramework/SupportedAlgorithm.ta";
import { x509SupportedAlgorithm } from "../AuthenticationFramework/x509SupportedAlgorithm.oa";
import { algorithmIdentifierMatch } from "../CertificateExtensions/algorithmIdentifierMatch.oa";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { id_at_supportedAlgorithms } from "../AuthenticationFramework/id-at-supportedAlgorithms.va";
export {
    SupportedAlgorithm,
    _decode_SupportedAlgorithm,
    _encode_SupportedAlgorithm,
} from "../AuthenticationFramework/SupportedAlgorithm.ta";
export { x509SupportedAlgorithm } from "../AuthenticationFramework/x509SupportedAlgorithm.oa";
export { algorithmIdentifierMatch } from "../CertificateExtensions/algorithmIdentifierMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION supportedAlgorithms */
/**
 * @summary supportedAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedAlgorithms ATTRIBUTE ::= {
 *   WITH SYNTAX              SupportedAlgorithm
 *   EQUALITY MATCHING RULE   algorithmIdentifierMatch
 *   LDAP-SYNTAX              x509SupportedAlgorithm.&id
 *   LDAP-NAME                {"supportedAlgorithms"}
 *   LDAP-DESC                "X.509 support algorithms"
 *   ID                       id-at-supportedAlgorithms }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SupportedAlgorithm>}
 * @implements {ATTRIBUTE<SupportedAlgorithm>}
 */
export const supportedAlgorithms: ATTRIBUTE<SupportedAlgorithm> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SupportedAlgorithm,
    },
    encoderFor: {
        "&Type": _encode_SupportedAlgorithm,
    },
    "&equality-match": algorithmIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509SupportedAlgorithm["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 support algorithms" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_supportedAlgorithms /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION supportedAlgorithms */

/* eslint-enable */
