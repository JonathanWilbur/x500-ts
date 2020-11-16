/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    _decode_CRLDistPointsSyntax,
    _encode_CRLDistPointsSyntax,
} from "../CertificateExtensions/CRLDistPointsSyntax.ta";
import { id_ce_freshestCRL } from "../CertificateExtensions/id-ce-freshestCRL.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    CRLDistPointsSyntax,
    _decode_CRLDistPointsSyntax,
    _encode_CRLDistPointsSyntax,
} from "../CertificateExtensions/CRLDistPointsSyntax.ta";
export { id_ce_freshestCRL } from "../CertificateExtensions/id-ce-freshestCRL.va";

/* START_OF_SYMBOL_DEFINITION freshestCRL */
/**
 * @summary freshestCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * freshestCRL EXTENSION ::= {
 *   SYNTAX         CRLDistPointsSyntax
 *   IDENTIFIED BY  id-ce-freshestCRL }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const freshestCRL: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLDistPointsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLDistPointsSyntax,
    },
    "&id": id_ce_freshestCRL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION freshestCRL */

/* eslint-enable */
