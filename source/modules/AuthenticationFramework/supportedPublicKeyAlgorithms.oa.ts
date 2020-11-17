/* eslint-disable */
import { id_at_supportedPublicKeyAlgorithms } from "../AuthenticationFramework/id-at-supportedPublicKeyAlgorithms.va";
import {
    _decode_SupportedPublicKeyAlgorithms,
    _encode_SupportedPublicKeyAlgorithms,
} from "../AuthenticationFramework/SupportedPublicKeyAlgorithms.ta";
import { x509SupportedPublicKeyAlgos } from "../AuthenticationFramework/x509SupportedPublicKeyAlgos.oa";
import { algorithmIdentifierMatch } from "../CertificateExtensions/algorithmIdentifierMatch.oa";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { id_at_supportedPublicKeyAlgorithms } from "../AuthenticationFramework/id-at-supportedPublicKeyAlgorithms.va";
export {
    SupportedPublicKeyAlgorithms,
    _decode_SupportedPublicKeyAlgorithms,
    _encode_SupportedPublicKeyAlgorithms,
} from "../AuthenticationFramework/SupportedPublicKeyAlgorithms.ta";
export { x509SupportedPublicKeyAlgos } from "../AuthenticationFramework/x509SupportedPublicKeyAlgos.oa";
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

/* START_OF_SYMBOL_DEFINITION supportedPublicKeyAlgorithms */
/**
 * @summary supportedPublicKeyAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedPublicKeyAlgorithms ATTRIBUTE ::= {
 *   WITH SYNTAX            SupportedPublicKeyAlgorithms
 *   EQUALITY MATCHING RULE algorithmIdentifierMatch
 *   LDAP-SYNTAX            x509SupportedPublicKeyAlgos.&id
 *   LDAP-NAME              {"supportedPublicKeyAlgorithms"}
 *   LDAP-DESC              "X.509 supported publiv key algorithms"
 *   ID                     id-at-supportedPublicKeyAlgorithms }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const supportedPublicKeyAlgorithms: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SupportedPublicKeyAlgorithms,
    },
    encoderFor: {
        "&Type": _encode_SupportedPublicKeyAlgorithms,
    },
    "&equality-match": algorithmIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax":
        x509SupportedPublicKeyAlgos["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc":
        "X.509 supported publiv key algorithms" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_supportedPublicKeyAlgorithms /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION supportedPublicKeyAlgorithms */

/* eslint-enable */
