/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CRLNumber,
    _decode_CRLNumber,
    _encode_CRLNumber,
} from "../CertificateExtensions/CRLNumber.ta";
export {
    CRLNumber,
    _decode_CRLNumber,
    _encode_CRLNumber,
} from "../CertificateExtensions/CRLNumber.ta";

/* START_OF_SYMBOL_DEFINITION BaseCRLNumber */
/**
 * @summary BaseCRLNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BaseCRLNumber  ::=  CRLNumber
 * ```
 */
export type BaseCRLNumber = CRLNumber; // DefinedType
/* END_OF_SYMBOL_DEFINITION BaseCRLNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BaseCRLNumber */
let _cached_decoder_for_BaseCRLNumber: $.ASN1Decoder<BaseCRLNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BaseCRLNumber */

/* START_OF_SYMBOL_DEFINITION _decode_BaseCRLNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) BaseCRLNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BaseCRLNumber} The decoded data structure.
 */
export function _decode_BaseCRLNumber(el: _Element) {
    if (!_cached_decoder_for_BaseCRLNumber) {
        _cached_decoder_for_BaseCRLNumber = _decode_CRLNumber;
    }
    return _cached_decoder_for_BaseCRLNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BaseCRLNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BaseCRLNumber */
let _cached_encoder_for_BaseCRLNumber: $.ASN1Encoder<BaseCRLNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BaseCRLNumber */

/* START_OF_SYMBOL_DEFINITION _encode_BaseCRLNumber */
/**
 * @summary Encodes a(n) BaseCRLNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BaseCRLNumber, encoded as an ASN.1 Element.
 */
export function _encode_BaseCRLNumber(
    value: BaseCRLNumber,
    elGetter: $.ASN1Encoder<BaseCRLNumber>
) {
    if (!_cached_encoder_for_BaseCRLNumber) {
        _cached_encoder_for_BaseCRLNumber = _encode_CRLNumber;
    }
    return _cached_encoder_for_BaseCRLNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BaseCRLNumber */

/* eslint-enable */
