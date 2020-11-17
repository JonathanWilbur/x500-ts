/* eslint-disable */
import { id_mr_roleSpecCertIdMatch } from "../AttributeCertificateDefinitions/id-mr-roleSpecCertIdMatch.va";
import {
    _decode_RoleSpecCertIdentifierSyntax,
    _encode_RoleSpecCertIdentifierSyntax,
} from "../AttributeCertificateDefinitions/RoleSpecCertIdentifierSyntax.ta";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_mr_roleSpecCertIdMatch } from "../AttributeCertificateDefinitions/id-mr-roleSpecCertIdMatch.va";
export {
    RoleSpecCertIdentifierSyntax,
    _decode_RoleSpecCertIdentifierSyntax,
    _encode_RoleSpecCertIdentifierSyntax,
} from "../AttributeCertificateDefinitions/RoleSpecCertIdentifierSyntax.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION roleSpecCertIdMatch */
/**
 * @summary roleSpecCertIdMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * roleSpecCertIdMatch MATCHING-RULE ::= {
 *   SYNTAX  RoleSpecCertIdentifierSyntax
 *   ID      id-mr-roleSpecCertIdMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const roleSpecCertIdMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_RoleSpecCertIdentifierSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_RoleSpecCertIdentifierSyntax,
    },
    "&id": id_mr_roleSpecCertIdMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION roleSpecCertIdMatch */

/* eslint-enable */
