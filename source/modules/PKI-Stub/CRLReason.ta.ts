/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_CRLReason */
export enum _enum_for_CRLReason {
    unspecified = 0,
    keyCompromise = 1,
    cACompromise = 2,
    affiliationChanged = 3,
    superseded = 4,
    cessationOfOperation = 5,
    certificateHold = 6,
    removeFromCRL = 8,
    privilegeWithdrawn = 9,
    aACompromise = 10,
    weakAlgorithmOrKey = 11,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CRLReason */

/* START_OF_SYMBOL_DEFINITION CRLReason */
/**
 * @summary CRLReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLReason  ::=  ENUMERATED {
 *   unspecified          (0),
 *   keyCompromise        (1),
 *   cACompromise         (2),
 *   affiliationChanged   (3),
 *   superseded           (4),
 *   cessationOfOperation (5),
 *   certificateHold      (6),
 *   removeFromCRL        (8),
 *   privilegeWithdrawn   (9),
 *   aACompromise         (10),
 *   ...,
 *   weakAlgorithmOrKey   (11) }
 * ```@enum {number}
 */
export type CRLReason = _enum_for_CRLReason | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION CRLReason */

/* START_OF_SYMBOL_DEFINITION CRLReason_unspecified */
/**
 * @summary CRLReason_unspecified
 * @constant
 * @type {number}
 */
export const CRLReason_unspecified: CRLReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CRLReason_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export const unspecified: CRLReason = CRLReason_unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION CRLReason_keyCompromise */
/**
 * @summary CRLReason_keyCompromise
 * @constant
 * @type {number}
 */
export const CRLReason_keyCompromise: CRLReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CRLReason_keyCompromise */

/* START_OF_SYMBOL_DEFINITION keyCompromise */
/**
 * @summary keyCompromise
 * @constant
 * @type {number}
 */
export const keyCompromise: CRLReason = CRLReason_keyCompromise; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION keyCompromise */

/* START_OF_SYMBOL_DEFINITION CRLReason_cACompromise */
/**
 * @summary CRLReason_cACompromise
 * @constant
 * @type {number}
 */
export const CRLReason_cACompromise: CRLReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CRLReason_cACompromise */

/* START_OF_SYMBOL_DEFINITION cACompromise */
/**
 * @summary cACompromise
 * @constant
 * @type {number}
 */
export const cACompromise: CRLReason = CRLReason_cACompromise; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cACompromise */

/* START_OF_SYMBOL_DEFINITION CRLReason_affiliationChanged */
/**
 * @summary CRLReason_affiliationChanged
 * @constant
 * @type {number}
 */
export const CRLReason_affiliationChanged: CRLReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CRLReason_affiliationChanged */

/* START_OF_SYMBOL_DEFINITION affiliationChanged */
/**
 * @summary affiliationChanged
 * @constant
 * @type {number}
 */
export const affiliationChanged: CRLReason = CRLReason_affiliationChanged; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION affiliationChanged */

/* START_OF_SYMBOL_DEFINITION CRLReason_superseded */
/**
 * @summary CRLReason_superseded
 * @constant
 * @type {number}
 */
export const CRLReason_superseded: CRLReason = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CRLReason_superseded */

/* START_OF_SYMBOL_DEFINITION superseded */
/**
 * @summary superseded
 * @constant
 * @type {number}
 */
export const superseded: CRLReason = CRLReason_superseded; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION superseded */

/* START_OF_SYMBOL_DEFINITION CRLReason_cessationOfOperation */
/**
 * @summary CRLReason_cessationOfOperation
 * @constant
 * @type {number}
 */
export const CRLReason_cessationOfOperation: CRLReason = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CRLReason_cessationOfOperation */

/* START_OF_SYMBOL_DEFINITION cessationOfOperation */
/**
 * @summary cessationOfOperation
 * @constant
 * @type {number}
 */
export const cessationOfOperation: CRLReason = CRLReason_cessationOfOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cessationOfOperation */

/* START_OF_SYMBOL_DEFINITION CRLReason_certificateHold */
/**
 * @summary CRLReason_certificateHold
 * @constant
 * @type {number}
 */
export const CRLReason_certificateHold: CRLReason = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CRLReason_certificateHold */

/* START_OF_SYMBOL_DEFINITION certificateHold */
/**
 * @summary certificateHold
 * @constant
 * @type {number}
 */
export const certificateHold: CRLReason = CRLReason_certificateHold; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION certificateHold */

/* START_OF_SYMBOL_DEFINITION CRLReason_removeFromCRL */
/**
 * @summary CRLReason_removeFromCRL
 * @constant
 * @type {number}
 */
export const CRLReason_removeFromCRL: CRLReason = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CRLReason_removeFromCRL */

/* START_OF_SYMBOL_DEFINITION removeFromCRL */
/**
 * @summary removeFromCRL
 * @constant
 * @type {number}
 */
export const removeFromCRL: CRLReason = CRLReason_removeFromCRL; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION removeFromCRL */

/* START_OF_SYMBOL_DEFINITION CRLReason_privilegeWithdrawn */
/**
 * @summary CRLReason_privilegeWithdrawn
 * @constant
 * @type {number}
 */
export const CRLReason_privilegeWithdrawn: CRLReason = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CRLReason_privilegeWithdrawn */

/* START_OF_SYMBOL_DEFINITION privilegeWithdrawn */
/**
 * @summary privilegeWithdrawn
 * @constant
 * @type {number}
 */
export const privilegeWithdrawn: CRLReason = CRLReason_privilegeWithdrawn; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION privilegeWithdrawn */

/* START_OF_SYMBOL_DEFINITION CRLReason_aACompromise */
/**
 * @summary CRLReason_aACompromise
 * @constant
 * @type {number}
 */
export const CRLReason_aACompromise: CRLReason = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CRLReason_aACompromise */

/* START_OF_SYMBOL_DEFINITION aACompromise */
/**
 * @summary aACompromise
 * @constant
 * @type {number}
 */
export const aACompromise: CRLReason = CRLReason_aACompromise; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION aACompromise */

/* START_OF_SYMBOL_DEFINITION CRLReason_weakAlgorithmOrKey */
/**
 * @summary CRLReason_weakAlgorithmOrKey
 * @constant
 * @type {number}
 */
export const CRLReason_weakAlgorithmOrKey: CRLReason = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CRLReason_weakAlgorithmOrKey */

/* START_OF_SYMBOL_DEFINITION weakAlgorithmOrKey */
/**
 * @summary weakAlgorithmOrKey
 * @constant
 * @type {number}
 */
export const weakAlgorithmOrKey: CRLReason = CRLReason_weakAlgorithmOrKey; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION weakAlgorithmOrKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLReason */
let _cached_decoder_for_CRLReason: $.ASN1Decoder<CRLReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLReason */

/* START_OF_SYMBOL_DEFINITION _decode_CRLReason */
/**
 * @summary Decodes an ASN.1 element into a(n) CRLReason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLReason} The decoded data structure.
 */
export function _decode_CRLReason(el: _Element) {
    if (!_cached_decoder_for_CRLReason) {
        _cached_decoder_for_CRLReason = $._decodeEnumerated;
    }
    return _cached_decoder_for_CRLReason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CRLReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLReason */
let _cached_encoder_for_CRLReason: $.ASN1Encoder<CRLReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLReason */

/* START_OF_SYMBOL_DEFINITION _encode_CRLReason */
/**
 * @summary Encodes a(n) CRLReason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLReason, encoded as an ASN.1 Element.
 */
export function _encode_CRLReason(
    value: CRLReason,
    elGetter: $.ASN1Encoder<CRLReason>
) {
    if (!_cached_encoder_for_CRLReason) {
        _cached_encoder_for_CRLReason = $._encodeEnumerated;
    }
    return _cached_encoder_for_CRLReason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CRLReason */

/* eslint-enable */
