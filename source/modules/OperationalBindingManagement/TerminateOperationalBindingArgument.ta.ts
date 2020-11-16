/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
import {
    TerminateOperationalBindingArgumentData,
    _decode_TerminateOperationalBindingArgumentData,
    _encode_TerminateOperationalBindingArgumentData,
} from "../OperationalBindingManagement/TerminateOperationalBindingArgumentData.ta";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
export {
    TerminateOperationalBindingArgumentData,
    _decode_TerminateOperationalBindingArgumentData,
    _encode_TerminateOperationalBindingArgumentData,
} from "../OperationalBindingManagement/TerminateOperationalBindingArgumentData.ta";

/* START_OF_SYMBOL_DEFINITION TerminateOperationalBindingArgument */
/**
 * @summary TerminateOperationalBindingArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateOperationalBindingArgument  ::=
 *   OPTIONALLY-PROTECTED-SEQ { TerminateOperationalBindingArgumentData }
 * ```
 */
export type TerminateOperationalBindingArgument = OPTIONALLY_PROTECTED_SEQ<
    TerminateOperationalBindingArgumentData
>; // DefinedType
/* END_OF_SYMBOL_DEFINITION TerminateOperationalBindingArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateOperationalBindingArgument */
let _cached_decoder_for_TerminateOperationalBindingArgument: $.ASN1Decoder<
    TerminateOperationalBindingArgument
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TerminateOperationalBindingArgument */

/* START_OF_SYMBOL_DEFINITION _decode_TerminateOperationalBindingArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) TerminateOperationalBindingArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateOperationalBindingArgument} The decoded data structure.
 */
export function _decode_TerminateOperationalBindingArgument(el: _Element) {
    if (!_cached_decoder_for_TerminateOperationalBindingArgument) {
        _cached_decoder_for_TerminateOperationalBindingArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            TerminateOperationalBindingArgumentData
        >(_decode_TerminateOperationalBindingArgumentData);
    }
    return _cached_decoder_for_TerminateOperationalBindingArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TerminateOperationalBindingArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateOperationalBindingArgument */
let _cached_encoder_for_TerminateOperationalBindingArgument: $.ASN1Encoder<
    TerminateOperationalBindingArgument
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TerminateOperationalBindingArgument */

/* START_OF_SYMBOL_DEFINITION _encode_TerminateOperationalBindingArgument */
/**
 * @summary Encodes a(n) TerminateOperationalBindingArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateOperationalBindingArgument, encoded as an ASN.1 Element.
 */
export function _encode_TerminateOperationalBindingArgument(
    value: TerminateOperationalBindingArgument,
    elGetter: $.ASN1Encoder<TerminateOperationalBindingArgument>
) {
    if (!_cached_encoder_for_TerminateOperationalBindingArgument) {
        _cached_encoder_for_TerminateOperationalBindingArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
            TerminateOperationalBindingArgumentData
        >(_encode_TerminateOperationalBindingArgumentData);
    }
    return _cached_encoder_for_TerminateOperationalBindingArgument(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_TerminateOperationalBindingArgument */

/* eslint-enable */
