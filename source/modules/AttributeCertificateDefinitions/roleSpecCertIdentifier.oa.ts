/* eslint-disable */
import {
    RoleSpecCertIdentifierSyntax,
    _decode_RoleSpecCertIdentifierSyntax,
    _encode_RoleSpecCertIdentifierSyntax,
} from "../AttributeCertificateDefinitions/RoleSpecCertIdentifierSyntax.ta";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    RoleSpecCertIdentifierSyntax,
    _decode_RoleSpecCertIdentifierSyntax,
    _encode_RoleSpecCertIdentifierSyntax,
} from "../AttributeCertificateDefinitions/RoleSpecCertIdentifierSyntax.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION roleSpecCertIdentifier */
/**
 * @summary roleSpecCertIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * roleSpecCertIdentifier EXTENSION ::= {
 *   SYNTAX         RoleSpecCertIdentifierSyntax
 *   IDENTIFIED BY  {id-ce-roleSpecCertIdentifier} }
 * ```
 *
 * @constant
 * @type {EXTENSION<RoleSpecCertIdentifierSyntax>}
 * @implements {EXTENSION<RoleSpecCertIdentifierSyntax>}
 */
export const roleSpecCertIdentifier: EXTENSION<RoleSpecCertIdentifierSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_RoleSpecCertIdentifierSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_RoleSpecCertIdentifierSyntax,
    },
    "&id": undefined,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION roleSpecCertIdentifier */

/* eslint-enable */
