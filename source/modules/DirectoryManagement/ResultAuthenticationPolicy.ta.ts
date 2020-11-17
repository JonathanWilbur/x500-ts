/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RequestAuthenticationPolicy,
    _decode_RequestAuthenticationPolicy,
    _encode_RequestAuthenticationPolicy,
} from "../DirectoryManagement/RequestAuthenticationPolicy.ta";
export {
    none /* IMPORTED_SHORT_NAMED_BIT */,
    RequestAuthenticationPolicy,
    RequestAuthenticationPolicy_none /* IMPORTED_LONG_NAMED_BIT */,
    RequestAuthenticationPolicy_simpleName /* IMPORTED_LONG_NAMED_BIT */,
    RequestAuthenticationPolicy_strong /* IMPORTED_LONG_NAMED_BIT */,
    simpleName /* IMPORTED_SHORT_NAMED_BIT */,
    strong /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_RequestAuthenticationPolicy,
    _encode_RequestAuthenticationPolicy,
} from "../DirectoryManagement/RequestAuthenticationPolicy.ta";

/* START_OF_SYMBOL_DEFINITION ResultAuthenticationPolicy */
/**
 * @summary ResultAuthenticationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultAuthenticationPolicy  ::=  RequestAuthenticationPolicy
 * ```
 */
export type ResultAuthenticationPolicy = RequestAuthenticationPolicy; // DefinedType
/* END_OF_SYMBOL_DEFINITION ResultAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResultAuthenticationPolicy */
let _cached_decoder_for_ResultAuthenticationPolicy: $.ASN1Decoder<
    ResultAuthenticationPolicy
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResultAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION _decode_ResultAuthenticationPolicy */
/**
 * @summary Decodes an ASN.1 element into a(n) ResultAuthenticationPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResultAuthenticationPolicy} The decoded data structure.
 */
export function _decode_ResultAuthenticationPolicy(el: _Element) {
    if (!_cached_decoder_for_ResultAuthenticationPolicy) {
        _cached_decoder_for_ResultAuthenticationPolicy = _decode_RequestAuthenticationPolicy;
    }
    return _cached_decoder_for_ResultAuthenticationPolicy(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResultAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResultAuthenticationPolicy */
let _cached_encoder_for_ResultAuthenticationPolicy: $.ASN1Encoder<
    ResultAuthenticationPolicy
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResultAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION _encode_ResultAuthenticationPolicy */
/**
 * @summary Encodes a(n) ResultAuthenticationPolicy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultAuthenticationPolicy, encoded as an ASN.1 Element.
 */
export function _encode_ResultAuthenticationPolicy(
    value: ResultAuthenticationPolicy,
    elGetter: $.ASN1Encoder<ResultAuthenticationPolicy>
) {
    if (!_cached_encoder_for_ResultAuthenticationPolicy) {
        _cached_encoder_for_ResultAuthenticationPolicy = _encode_RequestAuthenticationPolicy;
    }
    return _cached_encoder_for_ResultAuthenticationPolicy(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResultAuthenticationPolicy */

/* eslint-enable */
