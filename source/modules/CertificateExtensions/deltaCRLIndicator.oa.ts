/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    BaseCRLNumber,
    _decode_BaseCRLNumber,
    _encode_BaseCRLNumber,
} from "../CertificateExtensions/BaseCRLNumber.ta";
import { id_ce_deltaCRLIndicator } from "../CertificateExtensions/id-ce-deltaCRLIndicator.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    BaseCRLNumber,
    _decode_BaseCRLNumber,
    _encode_BaseCRLNumber,
} from "../CertificateExtensions/BaseCRLNumber.ta";
export { id_ce_deltaCRLIndicator } from "../CertificateExtensions/id-ce-deltaCRLIndicator.va";

/* START_OF_SYMBOL_DEFINITION deltaCRLIndicator */
/**
 * @summary deltaCRLIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deltaCRLIndicator EXTENSION ::= {
 *   SYNTAX         BaseCRLNumber
 *   IDENTIFIED BY  id-ce-deltaCRLIndicator }
 * ```
 *
 * @constant
 * @type {EXTENSION<BaseCRLNumber>}
 * @implements {EXTENSION<BaseCRLNumber>}
 */
export const deltaCRLIndicator: EXTENSION<BaseCRLNumber> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_BaseCRLNumber,
    },
    encoderFor: {
        "&ExtnType": _encode_BaseCRLNumber,
    },
    "&id": id_ce_deltaCRLIndicator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION deltaCRLIndicator */

/* eslint-enable */
