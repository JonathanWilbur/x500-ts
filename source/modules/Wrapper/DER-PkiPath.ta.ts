/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export {
    PkiPath,
    _decode_PkiPath,
    _encode_PkiPath,
} from "../PKI-Stub/PkiPath.ta";
export { der } from "../Wrapper/der.va";

/* START_OF_SYMBOL_DEFINITION DER_PkiPath */
/**
 * @summary DER_PkiPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DER-PkiPath  ::=  OCTET STRING
 *   (CONTAINING PkiPath ENCODED BY der)
 * ```
 */
export type DER_PkiPath = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION DER_PkiPath */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DER_PkiPath */
let _cached_decoder_for_DER_PkiPath: $.ASN1Decoder<DER_PkiPath> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DER_PkiPath */

/* START_OF_SYMBOL_DEFINITION _decode_DER_PkiPath */
/**
 * @summary Decodes an ASN.1 element into a(n) DER_PkiPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DER_PkiPath} The decoded data structure.
 */
export function _decode_DER_PkiPath(el: _Element) {
    if (!_cached_decoder_for_DER_PkiPath) {
        _cached_decoder_for_DER_PkiPath = $._decodeOctetString;
    }
    return _cached_decoder_for_DER_PkiPath(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DER_PkiPath */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DER_PkiPath */
let _cached_encoder_for_DER_PkiPath: $.ASN1Encoder<DER_PkiPath> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DER_PkiPath */

/* START_OF_SYMBOL_DEFINITION _encode_DER_PkiPath */
/**
 * @summary Encodes a(n) DER_PkiPath into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DER_PkiPath, encoded as an ASN.1 Element.
 */
export function _encode_DER_PkiPath(
    value: DER_PkiPath,
    elGetter: $.ASN1Encoder<DER_PkiPath>
) {
    if (!_cached_encoder_for_DER_PkiPath) {
        _cached_encoder_for_DER_PkiPath = $._encodeOctetString;
    }
    return _cached_encoder_for_DER_PkiPath(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DER_PkiPath */

/* eslint-enable */
