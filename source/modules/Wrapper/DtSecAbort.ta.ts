/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
import {
    TbsDtSecAbort,
    _decode_TbsDtSecAbort,
    _encode_TbsDtSecAbort,
} from "../Wrapper/TbsDtSecAbort.ta";
export {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
export {
    TbsDtSecAbort,
    _decode_TbsDtSecAbort,
    _encode_TbsDtSecAbort,
} from "../Wrapper/TbsDtSecAbort.ta";

/* START_OF_SYMBOL_DEFINITION DtSecAbort */
/**
 * @summary DtSecAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DtSecAbort  ::=  Signed{TbsDtSecAbort}
 * ```
 */
export type DtSecAbort = Signed<TbsDtSecAbort>; // DefinedType
/* END_OF_SYMBOL_DEFINITION DtSecAbort */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DtSecAbort */
let _cached_decoder_for_DtSecAbort: $.ASN1Decoder<DtSecAbort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DtSecAbort */

/* START_OF_SYMBOL_DEFINITION _decode_DtSecAbort */
/**
 * @summary Decodes an ASN.1 element into a(n) DtSecAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DtSecAbort} The decoded data structure.
 */
export function _decode_DtSecAbort(el: _Element) {
    if (!_cached_decoder_for_DtSecAbort) {
        _cached_decoder_for_DtSecAbort = _get_decoder_for_Signed<TbsDtSecAbort>(
            _decode_TbsDtSecAbort
        );
    }
    return _cached_decoder_for_DtSecAbort(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DtSecAbort */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DtSecAbort */
let _cached_encoder_for_DtSecAbort: $.ASN1Encoder<DtSecAbort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DtSecAbort */

/* START_OF_SYMBOL_DEFINITION _encode_DtSecAbort */
/**
 * @summary Encodes a(n) DtSecAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DtSecAbort, encoded as an ASN.1 Element.
 */
export function _encode_DtSecAbort(
    value: DtSecAbort,
    elGetter: $.ASN1Encoder<DtSecAbort>
) {
    if (!_cached_encoder_for_DtSecAbort) {
        _cached_encoder_for_DtSecAbort = _get_encoder_for_Signed<TbsDtSecAbort>(
            _encode_TbsDtSecAbort
        );
    }
    return _cached_encoder_for_DtSecAbort(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DtSecAbort */

/* eslint-enable */
