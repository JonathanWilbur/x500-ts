/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RDNSequence,
    _decode_RDNSequence,
    _encode_RDNSequence,
} from "../PKI_Stub/RDNSequence.ta";
export {
    RDNSequence,
    _decode_RDNSequence,
    _encode_RDNSequence,
} from "../PKI_Stub/RDNSequence.ta";

/* START_OF_SYMBOL_DEFINITION Name */
/**
 * @summary Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Name  ::=  CHOICE { -- only one possibility for now -- rdnSequence  RDNSequence }
 * ```
 */
export type Name = { rdnSequence: RDNSequence } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Name */
let _cached_decoder_for_Name: $.ASN1Decoder<Name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Name */

/* START_OF_SYMBOL_DEFINITION _decode_Name */
/**
 * @summary Decodes an ASN.1 element into a(n) Name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Name} The decoded data structure.
 */
export function _decode_Name(el: _Element) {
    if (!_cached_decoder_for_Name) {
        _cached_decoder_for_Name = $._decode_inextensible_choice<Name>({
            "UNIVERSAL 16": ["rdnSequence", _decode_RDNSequence],
        });
    }
    return _cached_decoder_for_Name(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Name */
let _cached_encoder_for_Name: $.ASN1Encoder<Name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Name */

/* START_OF_SYMBOL_DEFINITION _encode_Name */
/**
 * @summary Encodes a(n) Name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Name, encoded as an ASN.1 Element.
 */
export function _encode_Name(value: Name, elGetter: $.ASN1Encoder<Name>) {
    if (!_cached_encoder_for_Name) {
        _cached_encoder_for_Name = $._encode_choice<Name>(
            {
                rdnSequence: _encode_RDNSequence,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Name(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Name */

/* eslint-enable */
