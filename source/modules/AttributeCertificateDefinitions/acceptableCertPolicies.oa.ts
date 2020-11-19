/* eslint-disable */
import {
    AcceptableCertPoliciesSyntax,
    _decode_AcceptableCertPoliciesSyntax,
    _encode_AcceptableCertPoliciesSyntax,
} from "../AttributeCertificateDefinitions/AcceptableCertPoliciesSyntax.ta";
import { id_ce_acceptableCertPolicies } from "../AttributeCertificateDefinitions/id-ce-acceptableCertPolicies.va";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    AcceptableCertPoliciesSyntax,
    _decode_AcceptableCertPoliciesSyntax,
    _encode_AcceptableCertPoliciesSyntax,
} from "../AttributeCertificateDefinitions/AcceptableCertPoliciesSyntax.ta";
export { id_ce_acceptableCertPolicies } from "../AttributeCertificateDefinitions/id-ce-acceptableCertPolicies.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION acceptableCertPolicies */
/**
 * @summary acceptableCertPolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acceptableCertPolicies EXTENSION ::= {
 *   SYNTAX         AcceptableCertPoliciesSyntax
 *   IDENTIFIED BY  id-ce-acceptableCertPolicies }
 * ```
 *
 * @constant
 * @type {EXTENSION<AcceptableCertPoliciesSyntax>}
 * @implements {EXTENSION<AcceptableCertPoliciesSyntax>}
 */
export const acceptableCertPolicies: EXTENSION<AcceptableCertPoliciesSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AcceptableCertPoliciesSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AcceptableCertPoliciesSyntax,
    },
    "&id": id_ce_acceptableCertPolicies /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION acceptableCertPolicies */

/* eslint-enable */
