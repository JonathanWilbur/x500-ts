/* eslint-disable */
import {
    _decode_AuthorityAttributeIdentifierSyntax,
    _encode_AuthorityAttributeIdentifierSyntax,
} from "../AttributeCertificateDefinitions/AuthorityAttributeIdentifierSyntax.ta";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    AuthorityAttributeIdentifierSyntax,
    _decode_AuthorityAttributeIdentifierSyntax,
    _encode_AuthorityAttributeIdentifierSyntax,
} from "../AttributeCertificateDefinitions/AuthorityAttributeIdentifierSyntax.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION authorityAttributeIdentifier */
/**
 * @summary authorityAttributeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorityAttributeIdentifier EXTENSION ::= {
 *   SYNTAX         AuthorityAttributeIdentifierSyntax
 *   IDENTIFIED BY  {id-ce-authorityAttributeIdentifier} }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const authorityAttributeIdentifier: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AuthorityAttributeIdentifierSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AuthorityAttributeIdentifierSyntax,
    },
    "&id": undefined,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION authorityAttributeIdentifier */

/* eslint-enable */
