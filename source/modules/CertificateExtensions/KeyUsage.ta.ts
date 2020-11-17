/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION KeyUsage */
/**
 * @summary KeyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyUsage  ::=  BIT STRING {
 *   digitalSignature  (0),
 *   contentCommitment (1),
 *   keyEncipherment   (2),
 *   dataEncipherment  (3),
 *   keyAgreement      (4),
 *   keyCertSign       (5),
 *   cRLSign           (6),
 *   encipherOnly      (7),
 *   decipherOnly      (8) }
 * ```
 */
export type KeyUsage = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION KeyUsage */

/* START_OF_SYMBOL_DEFINITION KeyUsage_digitalSignature */
/**
 * @summary KeyUsage_digitalSignature
 * @constant
 */
export const KeyUsage_digitalSignature: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsage_digitalSignature */

/* START_OF_SYMBOL_DEFINITION digitalSignature */
/**
 * @summary digitalSignature
 * @constant
 */
export const digitalSignature: number = KeyUsage_digitalSignature; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION digitalSignature */

/* START_OF_SYMBOL_DEFINITION KeyUsage_contentCommitment */
/**
 * @summary KeyUsage_contentCommitment
 * @constant
 */
export const KeyUsage_contentCommitment: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsage_contentCommitment */

/* START_OF_SYMBOL_DEFINITION contentCommitment */
/**
 * @summary contentCommitment
 * @constant
 */
export const contentCommitment: number = KeyUsage_contentCommitment; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION contentCommitment */

/* START_OF_SYMBOL_DEFINITION KeyUsage_keyEncipherment */
/**
 * @summary KeyUsage_keyEncipherment
 * @constant
 */
export const KeyUsage_keyEncipherment: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsage_keyEncipherment */

/* START_OF_SYMBOL_DEFINITION keyEncipherment */
/**
 * @summary keyEncipherment
 * @constant
 */
export const keyEncipherment: number = KeyUsage_keyEncipherment; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION keyEncipherment */

/* START_OF_SYMBOL_DEFINITION KeyUsage_dataEncipherment */
/**
 * @summary KeyUsage_dataEncipherment
 * @constant
 */
export const KeyUsage_dataEncipherment: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsage_dataEncipherment */

/* START_OF_SYMBOL_DEFINITION dataEncipherment */
/**
 * @summary dataEncipherment
 * @constant
 */
export const dataEncipherment: number = KeyUsage_dataEncipherment; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION dataEncipherment */

/* START_OF_SYMBOL_DEFINITION KeyUsage_keyAgreement */
/**
 * @summary KeyUsage_keyAgreement
 * @constant
 */
export const KeyUsage_keyAgreement: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsage_keyAgreement */

/* START_OF_SYMBOL_DEFINITION keyAgreement */
/**
 * @summary keyAgreement
 * @constant
 */
export const keyAgreement: number = KeyUsage_keyAgreement; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION keyAgreement */

/* START_OF_SYMBOL_DEFINITION KeyUsage_keyCertSign */
/**
 * @summary KeyUsage_keyCertSign
 * @constant
 */
export const KeyUsage_keyCertSign: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsage_keyCertSign */

/* START_OF_SYMBOL_DEFINITION keyCertSign */
/**
 * @summary keyCertSign
 * @constant
 */
export const keyCertSign: number = KeyUsage_keyCertSign; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION keyCertSign */

/* START_OF_SYMBOL_DEFINITION KeyUsage_cRLSign */
/**
 * @summary KeyUsage_cRLSign
 * @constant
 */
export const KeyUsage_cRLSign: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsage_cRLSign */

/* START_OF_SYMBOL_DEFINITION cRLSign */
/**
 * @summary cRLSign
 * @constant
 */
export const cRLSign: number = KeyUsage_cRLSign; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION cRLSign */

/* START_OF_SYMBOL_DEFINITION KeyUsage_encipherOnly */
/**
 * @summary KeyUsage_encipherOnly
 * @constant
 */
export const KeyUsage_encipherOnly: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsage_encipherOnly */

/* START_OF_SYMBOL_DEFINITION encipherOnly */
/**
 * @summary encipherOnly
 * @constant
 */
export const encipherOnly: number = KeyUsage_encipherOnly; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION encipherOnly */

/* START_OF_SYMBOL_DEFINITION KeyUsage_decipherOnly */
/**
 * @summary KeyUsage_decipherOnly
 * @constant
 */
export const KeyUsage_decipherOnly: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION KeyUsage_decipherOnly */

/* START_OF_SYMBOL_DEFINITION decipherOnly */
/**
 * @summary decipherOnly
 * @constant
 */
export const decipherOnly: number = KeyUsage_decipherOnly; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION decipherOnly */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyUsage */
let _cached_decoder_for_KeyUsage: $.ASN1Decoder<KeyUsage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyUsage */

/* START_OF_SYMBOL_DEFINITION _decode_KeyUsage */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyUsage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyUsage} The decoded data structure.
 */
export function _decode_KeyUsage(el: _Element) {
    if (!_cached_decoder_for_KeyUsage) {
        _cached_decoder_for_KeyUsage = $._decodeBitString;
    }
    return _cached_decoder_for_KeyUsage(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyUsage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyUsage */
let _cached_encoder_for_KeyUsage: $.ASN1Encoder<KeyUsage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyUsage */

/* START_OF_SYMBOL_DEFINITION _encode_KeyUsage */
/**
 * @summary Encodes a(n) KeyUsage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyUsage, encoded as an ASN.1 Element.
 */
export function _encode_KeyUsage(
    value: KeyUsage,
    elGetter: $.ASN1Encoder<KeyUsage>
) {
    if (!_cached_encoder_for_KeyUsage) {
        _cached_encoder_for_KeyUsage = $._encodeBitString;
    }
    return _cached_encoder_for_KeyUsage(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyUsage */

/* eslint-enable */
