/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    AltSignatureAlgorithm,
    _decode_AltSignatureAlgorithm,
    _encode_AltSignatureAlgorithm,
} from "../CertificateExtensions/AltSignatureAlgorithm.ta";
import { id_ce_altSignatureAlgorithm } from "../CertificateExtensions/id-ce-altSignatureAlgorithm.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    AltSignatureAlgorithm,
    _decode_AltSignatureAlgorithm,
    _encode_AltSignatureAlgorithm,
} from "../CertificateExtensions/AltSignatureAlgorithm.ta";
export { id_ce_altSignatureAlgorithm } from "../CertificateExtensions/id-ce-altSignatureAlgorithm.va";

/* START_OF_SYMBOL_DEFINITION altSignatureAlgorithm */
/**
 * @summary altSignatureAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * altSignatureAlgorithm EXTENSION ::= {
 *  SYNTAX           AltSignatureAlgorithm
 *  IDENTIFIED BY    id-ce-altSignatureAlgorithm }
 * ```
 *
 * @constant
 * @type {EXTENSION<AltSignatureAlgorithm>}
 * @implements {EXTENSION<AltSignatureAlgorithm>}
 */
export const altSignatureAlgorithm: EXTENSION<AltSignatureAlgorithm> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AltSignatureAlgorithm,
    },
    encoderFor: {
        "&ExtnType": _encode_AltSignatureAlgorithm,
    },
    "&id": id_ce_altSignatureAlgorithm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION altSignatureAlgorithm */

/* eslint-enable */
