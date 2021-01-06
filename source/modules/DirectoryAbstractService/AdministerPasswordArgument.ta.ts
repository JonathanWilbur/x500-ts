/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AdministerPasswordArgumentData,
    _decode_AdministerPasswordArgumentData,
    _encode_AdministerPasswordArgumentData,
} from "../DirectoryAbstractService/AdministerPasswordArgumentData.ta";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
export {
    AdministerPasswordArgumentData,
    _decode_AdministerPasswordArgumentData,
    _encode_AdministerPasswordArgumentData,
} from "../DirectoryAbstractService/AdministerPasswordArgumentData.ta";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";

/* START_OF_SYMBOL_DEFINITION AdministerPasswordArgument */
/**
 * @summary AdministerPasswordArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdministerPasswordArgument  ::=
 *   OPTIONALLY-PROTECTED-SEQ { AdministerPasswordArgumentData }
 * ```
 */
export type AdministerPasswordArgument = OPTIONALLY_PROTECTED_SEQ<AdministerPasswordArgumentData>; // DefinedType
/* END_OF_SYMBOL_DEFINITION AdministerPasswordArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministerPasswordArgument */
let _cached_decoder_for_AdministerPasswordArgument: $.ASN1Decoder<AdministerPasswordArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministerPasswordArgument */

/* START_OF_SYMBOL_DEFINITION _decode_AdministerPasswordArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) AdministerPasswordArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdministerPasswordArgument} The decoded data structure.
 */
export function _decode_AdministerPasswordArgument(el: _Element) {
    if (!_cached_decoder_for_AdministerPasswordArgument) {
        _cached_decoder_for_AdministerPasswordArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<AdministerPasswordArgumentData>(
            _decode_AdministerPasswordArgumentData
        );
    }
    return _cached_decoder_for_AdministerPasswordArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdministerPasswordArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministerPasswordArgument */
let _cached_encoder_for_AdministerPasswordArgument: $.ASN1Encoder<AdministerPasswordArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministerPasswordArgument */

/* START_OF_SYMBOL_DEFINITION _encode_AdministerPasswordArgument */
/**
 * @summary Encodes a(n) AdministerPasswordArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdministerPasswordArgument, encoded as an ASN.1 Element.
 */
export function _encode_AdministerPasswordArgument(
    value: AdministerPasswordArgument,
    elGetter: $.ASN1Encoder<AdministerPasswordArgument>
) {
    if (!_cached_encoder_for_AdministerPasswordArgument) {
        _cached_encoder_for_AdministerPasswordArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<AdministerPasswordArgumentData>(
            _encode_AdministerPasswordArgumentData
        );
    }
    return _cached_encoder_for_AdministerPasswordArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdministerPasswordArgument */

/* eslint-enable */
