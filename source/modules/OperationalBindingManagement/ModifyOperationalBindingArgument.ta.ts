/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
import {
    ModifyOperationalBindingArgumentData,
    _decode_ModifyOperationalBindingArgumentData,
    _encode_ModifyOperationalBindingArgumentData,
} from "../OperationalBindingManagement/ModifyOperationalBindingArgumentData.ta";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
export {
    ModifyOperationalBindingArgumentData,
    _decode_ModifyOperationalBindingArgumentData,
    _encode_ModifyOperationalBindingArgumentData,
} from "../OperationalBindingManagement/ModifyOperationalBindingArgumentData.ta";

/* START_OF_SYMBOL_DEFINITION ModifyOperationalBindingArgument */
/**
 * @summary ModifyOperationalBindingArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyOperationalBindingArgument  ::=
 *   OPTIONALLY-PROTECTED-SEQ { ModifyOperationalBindingArgumentData }
 * ```
 */
export type ModifyOperationalBindingArgument = OPTIONALLY_PROTECTED_SEQ<ModifyOperationalBindingArgumentData>; // DefinedType
/* END_OF_SYMBOL_DEFINITION ModifyOperationalBindingArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyOperationalBindingArgument */
let _cached_decoder_for_ModifyOperationalBindingArgument: $.ASN1Decoder<ModifyOperationalBindingArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyOperationalBindingArgument */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyOperationalBindingArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyOperationalBindingArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyOperationalBindingArgument} The decoded data structure.
 */
export function _decode_ModifyOperationalBindingArgument(el: _Element) {
    if (!_cached_decoder_for_ModifyOperationalBindingArgument) {
        _cached_decoder_for_ModifyOperationalBindingArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyOperationalBindingArgumentData>(
            _decode_ModifyOperationalBindingArgumentData
        );
    }
    return _cached_decoder_for_ModifyOperationalBindingArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyOperationalBindingArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyOperationalBindingArgument */
let _cached_encoder_for_ModifyOperationalBindingArgument: $.ASN1Encoder<ModifyOperationalBindingArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyOperationalBindingArgument */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyOperationalBindingArgument */
/**
 * @summary Encodes a(n) ModifyOperationalBindingArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyOperationalBindingArgument, encoded as an ASN.1 Element.
 */
export function _encode_ModifyOperationalBindingArgument(
    value: ModifyOperationalBindingArgument,
    elGetter: $.ASN1Encoder<ModifyOperationalBindingArgument>
) {
    if (!_cached_encoder_for_ModifyOperationalBindingArgument) {
        _cached_encoder_for_ModifyOperationalBindingArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyOperationalBindingArgumentData>(
            _encode_ModifyOperationalBindingArgumentData
        );
    }
    return _cached_encoder_for_ModifyOperationalBindingArgument(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyOperationalBindingArgument */

/* eslint-enable */
