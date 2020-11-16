/* eslint-disable */
import {
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
import { algorithmIdentifier } from "../CertificateExtensions/algorithmIdentifier.oa";
import { id_mr_algorithmIdentifierMatch } from "../CertificateExtensions/id-mr-algorithmIdentifierMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
export { algorithmIdentifier } from "../CertificateExtensions/algorithmIdentifier.oa";
export { id_mr_algorithmIdentifierMatch } from "../CertificateExtensions/id-mr-algorithmIdentifierMatch.va";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";

/* START_OF_SYMBOL_DEFINITION algorithmIdentifierMatch */
/**
 * @summary algorithmIdentifierMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithmIdentifierMatch MATCHING-RULE ::= {
 *   SYNTAX       AlgorithmIdentifier {{SupportedAlgorithms}}
 *   LDAP-SYNTAX  algorithmIdentifier.&id
 *   LDAP-NAME    {"algorithmIdentifierMatch"}
 *   LDAP-DESC    "X.509 Algorithm Identifier Match"
 *   ID           id-mr-algorithmIdentifierMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const algorithmIdentifierMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AlgorithmIdentifier,
    },
    encoderFor: {
        "&AssertionType": _encode_AlgorithmIdentifier,
    },
    "&ldapSyntax": algorithmIdentifier["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 Algorithm Identifier Match" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_algorithmIdentifierMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION algorithmIdentifierMatch */

/* eslint-enable */
