/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    GeneralSubtree,
    _decode_GeneralSubtree,
    _encode_GeneralSubtree,
} from "../AttributeCertificateDefinitions/GeneralSubtree.ta";
export {
    GeneralSubtree,
    _decode_GeneralSubtree,
    _encode_GeneralSubtree,
} from "../AttributeCertificateDefinitions/GeneralSubtree.ta";

/* START_OF_SYMBOL_DEFINITION GeneralSubtrees */
/**
 * @summary GeneralSubtrees
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralSubtrees  ::=  SEQUENCE SIZE (1..MAX) OF GeneralSubtree
 * ```
 */
export type GeneralSubtrees = GeneralSubtree[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION GeneralSubtrees */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralSubtrees */
let _cached_decoder_for_GeneralSubtrees: $.ASN1Decoder<
    GeneralSubtrees
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralSubtrees */

/* START_OF_SYMBOL_DEFINITION _decode_GeneralSubtrees */
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralSubtrees
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralSubtrees} The decoded data structure.
 */
export function _decode_GeneralSubtrees(el: _Element) {
    if (!_cached_decoder_for_GeneralSubtrees) {
        _cached_decoder_for_GeneralSubtrees = $._decodeSequenceOf<
            GeneralSubtree
        >(() => _decode_GeneralSubtree);
    }
    return _cached_decoder_for_GeneralSubtrees(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GeneralSubtrees */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralSubtrees */
let _cached_encoder_for_GeneralSubtrees: $.ASN1Encoder<
    GeneralSubtrees
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralSubtrees */

/* START_OF_SYMBOL_DEFINITION _encode_GeneralSubtrees */
/**
 * @summary Encodes a(n) GeneralSubtrees into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralSubtrees, encoded as an ASN.1 Element.
 */
export function _encode_GeneralSubtrees(
    value: GeneralSubtrees,
    elGetter: $.ASN1Encoder<GeneralSubtrees>
) {
    if (!_cached_encoder_for_GeneralSubtrees) {
        _cached_encoder_for_GeneralSubtrees = $._encodeSequenceOf<
            GeneralSubtree
        >(() => _encode_GeneralSubtree, $.BER);
    }
    return _cached_encoder_for_GeneralSubtrees(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GeneralSubtrees */

/* eslint-enable */
