/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    _decode_CertificatePoliciesSyntax,
    _encode_CertificatePoliciesSyntax,
} from "../CertificateExtensions/CertificatePoliciesSyntax.ta";
import { id_ce_certificatePolicies } from "../CertificateExtensions/id-ce-certificatePolicies.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    CertificatePoliciesSyntax,
    _decode_CertificatePoliciesSyntax,
    _encode_CertificatePoliciesSyntax,
} from "../CertificateExtensions/CertificatePoliciesSyntax.ta";
export { id_ce_certificatePolicies } from "../CertificateExtensions/id-ce-certificatePolicies.va";

/* START_OF_SYMBOL_DEFINITION certificatePolicies */
/**
 * @summary certificatePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificatePolicies EXTENSION ::= {
 *   SYNTAX         CertificatePoliciesSyntax
 *   IDENTIFIED BY  id-ce-certificatePolicies }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const certificatePolicies: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CertificatePoliciesSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_CertificatePoliciesSyntax,
    },
    "&id": id_ce_certificatePolicies /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certificatePolicies */

/* eslint-enable */
