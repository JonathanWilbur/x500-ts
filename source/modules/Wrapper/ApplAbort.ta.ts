/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
import {
    TbsApplAbort,
    _decode_TbsApplAbort,
    _encode_TbsApplAbort,
} from "../Wrapper/TbsApplAbort.ta";
export {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
export {
    TbsApplAbort,
    _decode_TbsApplAbort,
    _encode_TbsApplAbort,
} from "../Wrapper/TbsApplAbort.ta";

/* START_OF_SYMBOL_DEFINITION ApplAbort */
/**
 * @summary ApplAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplAbort  ::=  Signed{TbsApplAbort}
 * ```
 */
export type ApplAbort = Signed<TbsApplAbort>; // DefinedType
/* END_OF_SYMBOL_DEFINITION ApplAbort */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplAbort */
let _cached_decoder_for_ApplAbort: $.ASN1Decoder<ApplAbort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplAbort */

/* START_OF_SYMBOL_DEFINITION _decode_ApplAbort */
/**
 * @summary Decodes an ASN.1 element into a(n) ApplAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplAbort} The decoded data structure.
 */
export function _decode_ApplAbort(el: _Element) {
    if (!_cached_decoder_for_ApplAbort) {
        _cached_decoder_for_ApplAbort = _get_decoder_for_Signed<TbsApplAbort>(
            _decode_TbsApplAbort
        );
    }
    return _cached_decoder_for_ApplAbort(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ApplAbort */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplAbort */
let _cached_encoder_for_ApplAbort: $.ASN1Encoder<ApplAbort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplAbort */

/* START_OF_SYMBOL_DEFINITION _encode_ApplAbort */
/**
 * @summary Encodes a(n) ApplAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplAbort, encoded as an ASN.1 Element.
 */
export function _encode_ApplAbort(
    value: ApplAbort,
    elGetter: $.ASN1Encoder<ApplAbort>
) {
    if (!_cached_encoder_for_ApplAbort) {
        _cached_encoder_for_ApplAbort = _get_encoder_for_Signed<TbsApplAbort>(
            _encode_TbsApplAbort
        );
    }
    return _cached_encoder_for_ApplAbort(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ApplAbort */

/* eslint-enable */
