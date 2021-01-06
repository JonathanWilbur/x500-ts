/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PagedResultsRequest_newRequest,
    _decode_PagedResultsRequest_newRequest,
    _encode_PagedResultsRequest_newRequest,
} from "../DirectoryAbstractService/PagedResultsRequest-newRequest.ta";
export {
    PagedResultsRequest_newRequest,
    _decode_PagedResultsRequest_newRequest,
    _encode_PagedResultsRequest_newRequest,
} from "../DirectoryAbstractService/PagedResultsRequest-newRequest.ta";

/* START_OF_SYMBOL_DEFINITION PagedResultsRequest */
/**
 * @summary PagedResultsRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PagedResultsRequest  ::=  CHOICE {
 *   newRequest         SEQUENCE {
 *     pageSize           INTEGER,
 *     sortKeys           SEQUENCE SIZE (1..MAX) OF SortKey OPTIONAL,
 *     reverse       [1]  BOOLEAN DEFAULT FALSE,
 *     unmerged      [2]  BOOLEAN DEFAULT FALSE,
 *     pageNumber    [3]  INTEGER OPTIONAL,
 *     ...},
 *   queryReference     OCTET STRING,
 *   abandonQuery  [0]  OCTET STRING,
 *   ... }
 * ```
 */
export type PagedResultsRequest =
    | { newRequest: PagedResultsRequest_newRequest } /* CHOICE_ALT_ROOT */
    | { queryReference: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { abandonQuery: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION PagedResultsRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PagedResultsRequest */
let _cached_decoder_for_PagedResultsRequest: $.ASN1Decoder<PagedResultsRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PagedResultsRequest */

/* START_OF_SYMBOL_DEFINITION _decode_PagedResultsRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) PagedResultsRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PagedResultsRequest} The decoded data structure.
 */
export function _decode_PagedResultsRequest(el: _Element) {
    if (!_cached_decoder_for_PagedResultsRequest) {
        _cached_decoder_for_PagedResultsRequest = $._decode_extensible_choice<PagedResultsRequest>(
            {
                "UNIVERSAL 16": [
                    "newRequest",
                    _decode_PagedResultsRequest_newRequest,
                ],
                "UNIVERSAL 4": ["queryReference", $._decodeOctetString],
                "CONTEXT 0": [
                    "abandonQuery",
                    $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_PagedResultsRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PagedResultsRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PagedResultsRequest */
let _cached_encoder_for_PagedResultsRequest: $.ASN1Encoder<PagedResultsRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PagedResultsRequest */

/* START_OF_SYMBOL_DEFINITION _encode_PagedResultsRequest */
/**
 * @summary Encodes a(n) PagedResultsRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PagedResultsRequest, encoded as an ASN.1 Element.
 */
export function _encode_PagedResultsRequest(
    value: PagedResultsRequest,
    elGetter: $.ASN1Encoder<PagedResultsRequest>
) {
    if (!_cached_encoder_for_PagedResultsRequest) {
        _cached_encoder_for_PagedResultsRequest = $._encode_choice<PagedResultsRequest>(
            {
                newRequest: _encode_PagedResultsRequest_newRequest,
                queryReference: $._encodeOctetString,
                abandonQuery: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeOctetString,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PagedResultsRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PagedResultsRequest */

/* eslint-enable */
