/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    _decode_CRLNumber,
    _encode_CRLNumber,
} from "../CertificateExtensions/CRLNumber.ta";
import { id_ce_cRLNumber } from "../CertificateExtensions/id-ce-cRLNumber.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    CRLNumber,
    _decode_CRLNumber,
    _encode_CRLNumber,
} from "../CertificateExtensions/CRLNumber.ta";
export { id_ce_cRLNumber } from "../CertificateExtensions/id-ce-cRLNumber.va";

/* START_OF_SYMBOL_DEFINITION cRLNumber */
/**
 * @summary cRLNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cRLNumber EXTENSION ::= {
 *   SYNTAX         CRLNumber
 *   IDENTIFIED BY  id-ce-cRLNumber }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const cRLNumber: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLNumber,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLNumber,
    },
    "&id": id_ce_cRLNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION cRLNumber */

/* eslint-enable */
