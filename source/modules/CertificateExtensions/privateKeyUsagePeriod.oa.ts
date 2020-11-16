/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import { id_ce_privateKeyUsagePeriod } from "../CertificateExtensions/id-ce-privateKeyUsagePeriod.va";
import {
    _decode_PrivateKeyUsagePeriod,
    _encode_PrivateKeyUsagePeriod,
} from "../CertificateExtensions/PrivateKeyUsagePeriod.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_privateKeyUsagePeriod } from "../CertificateExtensions/id-ce-privateKeyUsagePeriod.va";
export {
    PrivateKeyUsagePeriod,
    _decode_PrivateKeyUsagePeriod,
    _encode_PrivateKeyUsagePeriod,
} from "../CertificateExtensions/PrivateKeyUsagePeriod.ta";

/* START_OF_SYMBOL_DEFINITION privateKeyUsagePeriod */
/**
 * @summary privateKeyUsagePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * privateKeyUsagePeriod EXTENSION ::= {
 *   SYNTAX         PrivateKeyUsagePeriod
 *   IDENTIFIED BY  id-ce-privateKeyUsagePeriod }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const privateKeyUsagePeriod: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_PrivateKeyUsagePeriod,
    },
    encoderFor: {
        "&ExtnType": _encode_PrivateKeyUsagePeriod,
    },
    "&id": id_ce_privateKeyUsagePeriod /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION privateKeyUsagePeriod */

/* eslint-enable */
