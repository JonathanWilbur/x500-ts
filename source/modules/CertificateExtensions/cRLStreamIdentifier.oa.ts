/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    _decode_CRLStreamIdentifier,
    _encode_CRLStreamIdentifier,
} from "../CertificateExtensions/CRLStreamIdentifier.ta";
import { id_ce_cRLStreamIdentifier } from "../CertificateExtensions/id-ce-cRLStreamIdentifier.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    CRLStreamIdentifier,
    _decode_CRLStreamIdentifier,
    _encode_CRLStreamIdentifier,
} from "../CertificateExtensions/CRLStreamIdentifier.ta";
export { id_ce_cRLStreamIdentifier } from "../CertificateExtensions/id-ce-cRLStreamIdentifier.va";

/* START_OF_SYMBOL_DEFINITION cRLStreamIdentifier */
/**
 * @summary cRLStreamIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cRLStreamIdentifier EXTENSION ::= {
 *   SYNTAX         CRLStreamIdentifier
 *   IDENTIFIED BY  id-ce-cRLStreamIdentifier }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const cRLStreamIdentifier: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLStreamIdentifier,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLStreamIdentifier,
    },
    "&id": id_ce_cRLStreamIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION cRLStreamIdentifier */

/* eslint-enable */
