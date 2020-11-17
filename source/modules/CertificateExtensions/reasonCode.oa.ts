/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    _decode_CRLReason,
    _encode_CRLReason,
} from "../CertificateExtensions/CRLReason.ta";
import { id_ce_reasonCode } from "../CertificateExtensions/id-ce-reasonCode.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    aACompromise /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    affiliationChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    cACompromise /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    certificateHold /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    cessationOfOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CRLReason,
    CRLReason_aACompromise /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_affiliationChanged /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_cACompromise /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_certificateHold /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_cessationOfOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_keyCompromise /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_privilegeWithdrawn /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_removeFromCRL /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_superseded /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_unspecified /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_weakAlgorithmOrKey /* IMPORTED_LONG_ENUMERATION_ITEM */,
    keyCompromise /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    privilegeWithdrawn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    removeFromCRL /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    superseded /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unspecified /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    weakAlgorithmOrKey /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_CRLReason,
    _encode_CRLReason,
    _enum_for_CRLReason,
} from "../CertificateExtensions/CRLReason.ta";
export { id_ce_reasonCode } from "../CertificateExtensions/id-ce-reasonCode.va";

/* START_OF_SYMBOL_DEFINITION reasonCode */
/**
 * @summary reasonCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * reasonCode EXTENSION ::= {
 *   SYNTAX         CRLReason
 *   IDENTIFIED BY  id-ce-reasonCode }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const reasonCode: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLReason,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLReason,
    },
    "&id": id_ce_reasonCode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION reasonCode */

/* eslint-enable */
