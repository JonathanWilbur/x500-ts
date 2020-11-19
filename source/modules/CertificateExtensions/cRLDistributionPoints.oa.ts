/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    CRLDistPointsSyntax,
    _decode_CRLDistPointsSyntax,
    _encode_CRLDistPointsSyntax,
} from "../CertificateExtensions/CRLDistPointsSyntax.ta";
import { id_ce_cRLDistributionPoints } from "../CertificateExtensions/id-ce-cRLDistributionPoints.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    CRLDistPointsSyntax,
    _decode_CRLDistPointsSyntax,
    _encode_CRLDistPointsSyntax,
} from "../CertificateExtensions/CRLDistPointsSyntax.ta";
export { id_ce_cRLDistributionPoints } from "../CertificateExtensions/id-ce-cRLDistributionPoints.va";

/* START_OF_SYMBOL_DEFINITION cRLDistributionPoints */
/**
 * @summary cRLDistributionPoints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cRLDistributionPoints EXTENSION ::= {
 *   SYNTAX         CRLDistPointsSyntax
 *   IDENTIFIED BY  id-ce-cRLDistributionPoints }
 * ```
 *
 * @constant
 * @type {EXTENSION<CRLDistPointsSyntax>}
 * @implements {EXTENSION<CRLDistPointsSyntax>}
 */
export const cRLDistributionPoints: EXTENSION<CRLDistPointsSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLDistPointsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLDistPointsSyntax,
    },
    "&id": id_ce_cRLDistributionPoints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION cRLDistributionPoints */

/* eslint-enable */
