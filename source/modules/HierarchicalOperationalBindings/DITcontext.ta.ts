/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Vertex,
    _decode_Vertex,
    _encode_Vertex,
} from "../HierarchicalOperationalBindings/Vertex.ta";
export {
    Vertex,
    _decode_Vertex,
    _encode_Vertex,
} from "../HierarchicalOperationalBindings/Vertex.ta";

/* START_OF_SYMBOL_DEFINITION DITcontext */
/**
 * @summary DITcontext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITcontext  ::=  SEQUENCE OF Vertex
 * ```
 */
export type DITcontext = Vertex[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION DITcontext */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DITcontext */
let _cached_decoder_for_DITcontext: $.ASN1Decoder<DITcontext> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DITcontext */

/* START_OF_SYMBOL_DEFINITION _decode_DITcontext */
/**
 * @summary Decodes an ASN.1 element into a(n) DITcontext
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITcontext} The decoded data structure.
 */
export function _decode_DITcontext(el: _Element) {
    if (!_cached_decoder_for_DITcontext) {
        _cached_decoder_for_DITcontext = $._decodeSequenceOf<Vertex>(
            () => _decode_Vertex
        );
    }
    return _cached_decoder_for_DITcontext(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DITcontext */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DITcontext */
let _cached_encoder_for_DITcontext: $.ASN1Encoder<DITcontext> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DITcontext */

/* START_OF_SYMBOL_DEFINITION _encode_DITcontext */
/**
 * @summary Encodes a(n) DITcontext into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITcontext, encoded as an ASN.1 Element.
 */
export function _encode_DITcontext(
    value: DITcontext,
    elGetter: $.ASN1Encoder<DITcontext>
) {
    if (!_cached_encoder_for_DITcontext) {
        _cached_encoder_for_DITcontext = $._encodeSequenceOf<Vertex>(
            () => _encode_Vertex,
            $.BER
        );
    }
    return _cached_encoder_for_DITcontext(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DITcontext */

/* eslint-enable */
