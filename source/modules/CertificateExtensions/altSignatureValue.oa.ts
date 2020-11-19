/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    AltSignatureValue,
    _decode_AltSignatureValue,
    _encode_AltSignatureValue,
} from "../CertificateExtensions/AltSignatureValue.ta";
import { id_ce_altSignatureValue } from "../CertificateExtensions/id-ce-altSignatureValue.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    AltSignatureValue,
    _decode_AltSignatureValue,
    _encode_AltSignatureValue,
} from "../CertificateExtensions/AltSignatureValue.ta";
export { id_ce_altSignatureValue } from "../CertificateExtensions/id-ce-altSignatureValue.va";

/* START_OF_SYMBOL_DEFINITION altSignatureValue */
/**
 * @summary altSignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * altSignatureValue EXTENSION ::= {
 *   SYNTAX           AltSignatureValue
 *   IDENTIFIED BY    id-ce-altSignatureValue }
 * ```
 *
 * @constant
 * @type {EXTENSION<AltSignatureValue>}
 * @implements {EXTENSION<AltSignatureValue>}
 */
export const altSignatureValue: EXTENSION<AltSignatureValue> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AltSignatureValue,
    },
    encoderFor: {
        "&ExtnType": _encode_AltSignatureValue,
    },
    "&id": id_ce_altSignatureValue /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION altSignatureValue */

/* eslint-enable */
