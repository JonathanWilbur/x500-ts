/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ChangePasswordArgumentData,
    _decode_ChangePasswordArgumentData,
    _encode_ChangePasswordArgumentData,
} from "../DirectoryAbstractService/ChangePasswordArgumentData.ta";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
export {
    ChangePasswordArgumentData,
    _decode_ChangePasswordArgumentData,
    _encode_ChangePasswordArgumentData,
} from "../DirectoryAbstractService/ChangePasswordArgumentData.ta";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";

/* START_OF_SYMBOL_DEFINITION ChangePasswordArgument */
/**
 * @summary ChangePasswordArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangePasswordArgument  ::=  OPTIONALLY-PROTECTED-SEQ { ChangePasswordArgumentData }
 * ```
 */
export type ChangePasswordArgument = OPTIONALLY_PROTECTED_SEQ<
    ChangePasswordArgumentData
>; // DefinedType
/* END_OF_SYMBOL_DEFINITION ChangePasswordArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChangePasswordArgument */
let _cached_decoder_for_ChangePasswordArgument: $.ASN1Decoder<
    ChangePasswordArgument
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChangePasswordArgument */

/* START_OF_SYMBOL_DEFINITION _decode_ChangePasswordArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) ChangePasswordArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChangePasswordArgument} The decoded data structure.
 */
export function _decode_ChangePasswordArgument(el: _Element) {
    if (!_cached_decoder_for_ChangePasswordArgument) {
        _cached_decoder_for_ChangePasswordArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            ChangePasswordArgumentData
        >(_decode_ChangePasswordArgumentData);
    }
    return _cached_decoder_for_ChangePasswordArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ChangePasswordArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChangePasswordArgument */
let _cached_encoder_for_ChangePasswordArgument: $.ASN1Encoder<
    ChangePasswordArgument
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChangePasswordArgument */

/* START_OF_SYMBOL_DEFINITION _encode_ChangePasswordArgument */
/**
 * @summary Encodes a(n) ChangePasswordArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangePasswordArgument, encoded as an ASN.1 Element.
 */
export function _encode_ChangePasswordArgument(
    value: ChangePasswordArgument,
    elGetter: $.ASN1Encoder<ChangePasswordArgument>
) {
    if (!_cached_encoder_for_ChangePasswordArgument) {
        _cached_encoder_for_ChangePasswordArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
            ChangePasswordArgumentData
        >(_encode_ChangePasswordArgumentData);
    }
    return _cached_encoder_for_ChangePasswordArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ChangePasswordArgument */

/* eslint-enable */
