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

/* START_OF_SYMBOL_DEFINITION SuperiorToSubordinateModification */
/**
 * @summary SuperiorToSubordinateModification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SuperiorToSubordinateModification  ::=  SuperiorToSubordinate (
 *   WITH COMPONENTS {..., entryInfo  ABSENT } )
 * ```
 */
export type SuperiorToSubordinateModification = SuperiorToSubordinate; // DefinedType
/* END_OF_SYMBOL_DEFINITION SuperiorToSubordinateModification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SuperiorToSubordinateModification */
let _cached_decoder_for_SuperiorToSubordinateModification: $.ASN1Decoder<
    SuperiorToSubordinateModification
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SuperiorToSubordinateModification */

/* START_OF_SYMBOL_DEFINITION _decode_SuperiorToSubordinateModification */
/**
 * @summary Decodes an ASN.1 element into a(n) SuperiorToSubordinateModification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SuperiorToSubordinateModification} The decoded data structure.
 */
export function _decode_SuperiorToSubordinateModification(el: _Element) {
    if (!_cached_decoder_for_SuperiorToSubordinateModification) {
        _cached_decoder_for_SuperiorToSubordinateModification = _decode_SuperiorToSubordinate;
    }
    return _cached_decoder_for_SuperiorToSubordinateModification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SuperiorToSubordinateModification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SuperiorToSubordinateModification */
let _cached_encoder_for_SuperiorToSubordinateModification: $.ASN1Encoder<
    SuperiorToSubordinateModification
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SuperiorToSubordinateModification */

/* START_OF_SYMBOL_DEFINITION _encode_SuperiorToSubordinateModification */
/**
 * @summary Encodes a(n) SuperiorToSubordinateModification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuperiorToSubordinateModification, encoded as an ASN.1 Element.
 */
export function _encode_SuperiorToSubordinateModification(
    value: SuperiorToSubordinateModification,
    elGetter: $.ASN1Encoder<SuperiorToSubordinateModification>
) {
    if (!_cached_encoder_for_SuperiorToSubordinateModification) {
        _cached_encoder_for_SuperiorToSubordinateModification = _encode_SuperiorToSubordinate;
    }
    return _cached_encoder_for_SuperiorToSubordinateModification(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_SuperiorToSubordinateModification */

/* eslint-enable */
