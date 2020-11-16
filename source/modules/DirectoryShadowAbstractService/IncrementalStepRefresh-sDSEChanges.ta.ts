/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ContentChange,
    _decode_ContentChange,
    _encode_ContentChange,
} from "../DirectoryShadowAbstractService/ContentChange.ta";
import {
    SDSEContent,
    _decode_SDSEContent,
    _encode_SDSEContent,
} from "../DirectoryShadowAbstractService/SDSEContent.ta";
export {
    ContentChange,
    _decode_ContentChange,
    _encode_ContentChange,
} from "../DirectoryShadowAbstractService/ContentChange.ta";
export {
    SDSEContent,
    _decode_SDSEContent,
    _encode_SDSEContent,
} from "../DirectoryShadowAbstractService/SDSEContent.ta";

/* START_OF_SYMBOL_DEFINITION IncrementalStepRefresh_sDSEChanges */
/**
 * @summary IncrementalStepRefresh_sDSEChanges
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncrementalStepRefresh-sDSEChanges ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type IncrementalStepRefresh_sDSEChanges =
    | { add: SDSEContent } /* CHOICE_ALT_ROOT */
    | { remove: NULL } /* CHOICE_ALT_ROOT */
    | { modify: ContentChange } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION IncrementalStepRefresh_sDSEChanges */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IncrementalStepRefresh_sDSEChanges */
let _cached_decoder_for_IncrementalStepRefresh_sDSEChanges: $.ASN1Decoder<
    IncrementalStepRefresh_sDSEChanges
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IncrementalStepRefresh_sDSEChanges */

/* START_OF_SYMBOL_DEFINITION _decode_IncrementalStepRefresh_sDSEChanges */
/**
 * @summary Decodes an ASN.1 element into a(n) IncrementalStepRefresh_sDSEChanges
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IncrementalStepRefresh_sDSEChanges} The decoded data structure.
 */
export function _decode_IncrementalStepRefresh_sDSEChanges(el: _Element) {
    if (!_cached_decoder_for_IncrementalStepRefresh_sDSEChanges) {
        _cached_decoder_for_IncrementalStepRefresh_sDSEChanges = $._decode_extensible_choice<
            IncrementalStepRefresh_sDSEChanges
        >({
            "CONTEXT 0": [
                "add",
                $._decode_implicit<SDSEContent>(() => _decode_SDSEContent),
            ],
            "UNIVERSAL 5": ["remove", $._decodeNull],
            "CONTEXT 1": [
                "modify",
                $._decode_implicit<ContentChange>(() => _decode_ContentChange),
            ],
        });
    }
    return _cached_decoder_for_IncrementalStepRefresh_sDSEChanges(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IncrementalStepRefresh_sDSEChanges */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IncrementalStepRefresh_sDSEChanges */
let _cached_encoder_for_IncrementalStepRefresh_sDSEChanges: $.ASN1Encoder<
    IncrementalStepRefresh_sDSEChanges
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IncrementalStepRefresh_sDSEChanges */

/* START_OF_SYMBOL_DEFINITION _encode_IncrementalStepRefresh_sDSEChanges */
/**
 * @summary Encodes a(n) IncrementalStepRefresh_sDSEChanges into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IncrementalStepRefresh_sDSEChanges, encoded as an ASN.1 Element.
 */
export function _encode_IncrementalStepRefresh_sDSEChanges(
    value: IncrementalStepRefresh_sDSEChanges,
    elGetter: $.ASN1Encoder<IncrementalStepRefresh_sDSEChanges>
) {
    if (!_cached_encoder_for_IncrementalStepRefresh_sDSEChanges) {
        _cached_encoder_for_IncrementalStepRefresh_sDSEChanges = $._encode_choice<
            IncrementalStepRefresh_sDSEChanges
        >(
            {
                add: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_SDSEContent,
                    $.BER
                ),
                remove: $._encodeNull,
                modify: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ContentChange,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_IncrementalStepRefresh_sDSEChanges(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_IncrementalStepRefresh_sDSEChanges */

/* eslint-enable */
