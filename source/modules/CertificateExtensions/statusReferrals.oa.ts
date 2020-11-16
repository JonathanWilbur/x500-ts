/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import { id_ce_statusReferrals } from "../CertificateExtensions/id-ce-statusReferrals.va";
import {
    _decode_StatusReferrals,
    _encode_StatusReferrals,
} from "../CertificateExtensions/StatusReferrals.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_statusReferrals } from "../CertificateExtensions/id-ce-statusReferrals.va";
export {
    StatusReferrals,
    _decode_StatusReferrals,
    _encode_StatusReferrals,
} from "../CertificateExtensions/StatusReferrals.ta";

/* START_OF_SYMBOL_DEFINITION statusReferrals */
/**
 * @summary statusReferrals
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * statusReferrals EXTENSION ::= {
 *   SYNTAX         StatusReferrals
 *   IDENTIFIED BY  id-ce-statusReferrals }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const statusReferrals: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_StatusReferrals,
    },
    encoderFor: {
        "&ExtnType": _encode_StatusReferrals,
    },
    "&id": id_ce_statusReferrals /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION statusReferrals */

/* eslint-enable */
