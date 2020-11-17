/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ListResult,
    _decode_ListResult,
    _encode_ListResult,
} from "../DirectoryAbstractService/ListResult.ta";
import {
    ListResultData_listInfo,
    _decode_ListResultData_listInfo,
    _encode_ListResultData_listInfo,
} from "../DirectoryAbstractService/ListResultData-listInfo.ta";
export {
    ListResult,
    _decode_ListResult,
    _encode_ListResult,
} from "../DirectoryAbstractService/ListResult.ta";
export {
    ListResultData_listInfo,
    _decode_ListResultData_listInfo,
    _encode_ListResultData_listInfo,
} from "../DirectoryAbstractService/ListResultData-listInfo.ta";

/* START_OF_SYMBOL_DEFINITION ListResultData */
/**
 * @summary ListResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListResultData  ::=  CHOICE {
 *   listInfo                     SET {
 *     name                         Name OPTIONAL,
 *     subordinates            [1]  SET OF SEQUENCE {
 *       rdn                          RelativeDistinguishedName,
 *       aliasEntry              [0]  BOOLEAN DEFAULT FALSE,
 *       fromEntry               [1]  BOOLEAN DEFAULT TRUE,
 *       ... },
 *     partialOutcomeQualifier [2]  PartialOutcomeQualifier OPTIONAL,
 *     ...,
 *     ...,
 *     COMPONENTS OF                CommonResults
 *     },
 *   uncorrelatedListInfo    [0]  SET OF ListResult,
 *   ... }
 * ```
 */
export type ListResultData =
    | { listInfo: ListResultData_listInfo } /* CHOICE_ALT_ROOT */
    | { uncorrelatedListInfo: ListResult[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ListResultData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ListResultData */
let _cached_decoder_for_ListResultData: $.ASN1Decoder<
    ListResultData
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ListResultData */

/* START_OF_SYMBOL_DEFINITION _decode_ListResultData */
/**
 * @summary Decodes an ASN.1 element into a(n) ListResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListResultData} The decoded data structure.
 */
export function _decode_ListResultData(el: _Element) {
    if (!_cached_decoder_for_ListResultData) {
        _cached_decoder_for_ListResultData = $._decode_extensible_choice<
            ListResultData
        >({
            "UNIVERSAL 17": ["listInfo", _decode_ListResultData_listInfo],
            "CONTEXT 0": [
                "uncorrelatedListInfo",
                $._decode_explicit<ListResult[]>(() =>
                    $._decodeSetOf<ListResult>(() => _decode_ListResult)
                ),
            ],
        });
    }
    return _cached_decoder_for_ListResultData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ListResultData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ListResultData */
let _cached_encoder_for_ListResultData: $.ASN1Encoder<
    ListResultData
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ListResultData */

/* START_OF_SYMBOL_DEFINITION _encode_ListResultData */
/**
 * @summary Encodes a(n) ListResultData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListResultData, encoded as an ASN.1 Element.
 */
export function _encode_ListResultData(
    value: ListResultData,
    elGetter: $.ASN1Encoder<ListResultData>
) {
    if (!_cached_encoder_for_ListResultData) {
        _cached_encoder_for_ListResultData = $._encode_choice<ListResultData>(
            {
                listInfo: _encode_ListResultData_listInfo,
                uncorrelatedListInfo: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () =>
                        $._encodeSetOf<ListResult>(
                            () => _encode_ListResult,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ListResultData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ListResultData */

/* eslint-enable */
