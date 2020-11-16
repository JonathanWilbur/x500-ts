/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    EntryModification,
    _decode_EntryModification,
    _encode_EntryModification,
} from "../DirectoryAbstractService/EntryModification.ta";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export {
    EntryModification,
    _decode_EntryModification,
    _encode_EntryModification,
} from "../DirectoryAbstractService/EntryModification.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";

/* START_OF_SYMBOL_DEFINITION ContentChange_attributeChanges */
/**
 * @summary ContentChange_attributeChanges
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentChange-attributeChanges ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ContentChange_attributeChanges =
    | { replace: Attribute[] } /* CHOICE_ALT_ROOT */
    | { changes: EntryModification[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ContentChange_attributeChanges */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentChange_attributeChanges */
let _cached_decoder_for_ContentChange_attributeChanges: $.ASN1Decoder<
    ContentChange_attributeChanges
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentChange_attributeChanges */

/* START_OF_SYMBOL_DEFINITION _decode_ContentChange_attributeChanges */
/**
 * @summary Decodes an ASN.1 element into a(n) ContentChange_attributeChanges
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentChange_attributeChanges} The decoded data structure.
 */
export function _decode_ContentChange_attributeChanges(el: _Element) {
    if (!_cached_decoder_for_ContentChange_attributeChanges) {
        _cached_decoder_for_ContentChange_attributeChanges = $._decode_inextensible_choice<
            ContentChange_attributeChanges
        >({
            "CONTEXT 0": [
                "replace",
                $._decode_implicit<Attribute[]>(() =>
                    $._decodeSetOf<Attribute>(() => _decode_Attribute)
                ),
            ],
            "CONTEXT 1": [
                "changes",
                $._decode_implicit<EntryModification[]>(() =>
                    $._decodeSequenceOf<EntryModification>(
                        () => _decode_EntryModification
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_ContentChange_attributeChanges(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContentChange_attributeChanges */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentChange_attributeChanges */
let _cached_encoder_for_ContentChange_attributeChanges: $.ASN1Encoder<
    ContentChange_attributeChanges
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentChange_attributeChanges */

/* START_OF_SYMBOL_DEFINITION _encode_ContentChange_attributeChanges */
/**
 * @summary Encodes a(n) ContentChange_attributeChanges into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentChange_attributeChanges, encoded as an ASN.1 Element.
 */
export function _encode_ContentChange_attributeChanges(
    value: ContentChange_attributeChanges,
    elGetter: $.ASN1Encoder<ContentChange_attributeChanges>
) {
    if (!_cached_encoder_for_ContentChange_attributeChanges) {
        _cached_encoder_for_ContentChange_attributeChanges = $._encode_choice<
            ContentChange_attributeChanges
        >(
            {
                replace: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        $._encodeSetOf<Attribute>(
                            () => _encode_Attribute,
                            $.BER
                        ),
                    $.BER
                ),
                changes: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<EntryModification>(
                            () => _encode_EntryModification,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ContentChange_attributeChanges(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContentChange_attributeChanges */

/* eslint-enable */
