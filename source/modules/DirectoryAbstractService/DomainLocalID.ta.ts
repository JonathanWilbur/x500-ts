/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION DomainLocalID */
/**
 * @summary DomainLocalID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainLocalID  ::=  UnboundedDirectoryString
 * ```
 */
export type DomainLocalID = UnboundedDirectoryString; // DefinedType
/* END_OF_SYMBOL_DEFINITION DomainLocalID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainLocalID */
let _cached_decoder_for_DomainLocalID: $.ASN1Decoder<DomainLocalID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainLocalID */

/* START_OF_SYMBOL_DEFINITION _decode_DomainLocalID */
/**
 * @summary Decodes an ASN.1 element into a(n) DomainLocalID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DomainLocalID} The decoded data structure.
 */
export function _decode_DomainLocalID(el: _Element) {
    if (!_cached_decoder_for_DomainLocalID) {
        _cached_decoder_for_DomainLocalID = _decode_UnboundedDirectoryString;
    }
    return _cached_decoder_for_DomainLocalID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DomainLocalID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainLocalID */
let _cached_encoder_for_DomainLocalID: $.ASN1Encoder<DomainLocalID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainLocalID */

/* START_OF_SYMBOL_DEFINITION _encode_DomainLocalID */
/**
 * @summary Encodes a(n) DomainLocalID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainLocalID, encoded as an ASN.1 Element.
 */
export function _encode_DomainLocalID(
    value: DomainLocalID,
    elGetter: $.ASN1Encoder<DomainLocalID>
) {
    if (!_cached_encoder_for_DomainLocalID) {
        _cached_encoder_for_DomainLocalID = _encode_UnboundedDirectoryString;
    }
    return _cached_encoder_for_DomainLocalID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DomainLocalID */

/* eslint-enable */
