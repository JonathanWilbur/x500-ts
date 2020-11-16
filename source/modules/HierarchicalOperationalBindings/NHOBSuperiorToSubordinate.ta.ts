/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SuperiorToSubordinate,
    _decode_SuperiorToSubordinate,
    _encode_SuperiorToSubordinate,
} from "../HierarchicalOperationalBindings/SuperiorToSubordinate.ta";
export {
    SuperiorToSubordinate,
    _decode_SuperiorToSubordinate,
    _encode_SuperiorToSubordinate,
} from "../HierarchicalOperationalBindings/SuperiorToSubordinate.ta";

/* START_OF_SYMBOL_DEFINITION NHOBSuperiorToSubordinate */
/**
 * @summary NHOBSuperiorToSubordinate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NHOBSuperiorToSubordinate  ::=  SuperiorToSubordinate (
 *   WITH COMPONENTS {..., entryInfo  ABSENT } )
 * ```
 */
export type NHOBSuperiorToSubordinate = SuperiorToSubordinate; // DefinedType
/* END_OF_SYMBOL_DEFINITION NHOBSuperiorToSubordinate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NHOBSuperiorToSubordinate */
let _cached_decoder_for_NHOBSuperiorToSubordinate: $.ASN1Decoder<
    NHOBSuperiorToSubordinate
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NHOBSuperiorToSubordinate */

/* START_OF_SYMBOL_DEFINITION _decode_NHOBSuperiorToSubordinate */
/**
 * @summary Decodes an ASN.1 element into a(n) NHOBSuperiorToSubordinate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NHOBSuperiorToSubordinate} The decoded data structure.
 */
export function _decode_NHOBSuperiorToSubordinate(el: _Element) {
    if (!_cached_decoder_for_NHOBSuperiorToSubordinate) {
        _cached_decoder_for_NHOBSuperiorToSubordinate = _decode_SuperiorToSubordinate;
    }
    return _cached_decoder_for_NHOBSuperiorToSubordinate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NHOBSuperiorToSubordinate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NHOBSuperiorToSubordinate */
let _cached_encoder_for_NHOBSuperiorToSubordinate: $.ASN1Encoder<
    NHOBSuperiorToSubordinate
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NHOBSuperiorToSubordinate */

/* START_OF_SYMBOL_DEFINITION _encode_NHOBSuperiorToSubordinate */
/**
 * @summary Encodes a(n) NHOBSuperiorToSubordinate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NHOBSuperiorToSubordinate, encoded as an ASN.1 Element.
 */
export function _encode_NHOBSuperiorToSubordinate(
    value: NHOBSuperiorToSubordinate,
    elGetter: $.ASN1Encoder<NHOBSuperiorToSubordinate>
) {
    if (!_cached_encoder_for_NHOBSuperiorToSubordinate) {
        _cached_encoder_for_NHOBSuperiorToSubordinate = _encode_SuperiorToSubordinate;
    }
    return _cached_encoder_for_NHOBSuperiorToSubordinate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NHOBSuperiorToSubordinate */

/* eslint-enable */
