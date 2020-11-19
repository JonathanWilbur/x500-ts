/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    AAIssuingDistPointSyntax,
    _decode_AAIssuingDistPointSyntax,
    _encode_AAIssuingDistPointSyntax,
} from "../CertificateExtensions/AAIssuingDistPointSyntax.ta";
import { id_ce_aAissuingDistributionPoint } from "../CertificateExtensions/id-ce-aAissuingDistributionPoint.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    AAIssuingDistPointSyntax,
    _decode_AAIssuingDistPointSyntax,
    _encode_AAIssuingDistPointSyntax,
} from "../CertificateExtensions/AAIssuingDistPointSyntax.ta";
export { id_ce_aAissuingDistributionPoint } from "../CertificateExtensions/id-ce-aAissuingDistributionPoint.va";

/* START_OF_SYMBOL_DEFINITION aAissuingDistributionPoint */
/**
 * @summary aAissuingDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aAissuingDistributionPoint EXTENSION ::= {
 *   SYNTAX         AAIssuingDistPointSyntax
 *   IDENTIFIED BY  id-ce-aAissuingDistributionPoint }
 * ```
 *
 * @constant
 * @type {EXTENSION<AAIssuingDistPointSyntax>}
 * @implements {EXTENSION<AAIssuingDistPointSyntax>}
 */
export const aAissuingDistributionPoint: EXTENSION<AAIssuingDistPointSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AAIssuingDistPointSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AAIssuingDistPointSyntax,
    },
    "&id": id_ce_aAissuingDistributionPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION aAissuingDistributionPoint */

/* eslint-enable */
