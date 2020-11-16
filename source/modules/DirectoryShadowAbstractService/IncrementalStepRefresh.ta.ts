/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    IncrementalStepRefresh_sDSEChanges,
    _decode_IncrementalStepRefresh_sDSEChanges,
    _encode_IncrementalStepRefresh_sDSEChanges,
} from "../DirectoryShadowAbstractService/IncrementalStepRefresh-sDSEChanges.ta";
import {
    SubordinateChanges,
    _decode_SubordinateChanges,
    _encode_SubordinateChanges,
} from "../DirectoryShadowAbstractService/SubordinateChanges.ta";
export {
    IncrementalStepRefresh_sDSEChanges,
    _decode_IncrementalStepRefresh_sDSEChanges,
    _encode_IncrementalStepRefresh_sDSEChanges,
} from "../DirectoryShadowAbstractService/IncrementalStepRefresh-sDSEChanges.ta";
export {
    SubordinateChanges,
    _decode_SubordinateChanges,
    _encode_SubordinateChanges,
} from "../DirectoryShadowAbstractService/SubordinateChanges.ta";

/* START_OF_SYMBOL_DEFINITION IncrementalStepRefresh */
/**
 * @summary IncrementalStepRefresh
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncrementalStepRefresh ::= SEQUENCE {
 *   sDSEChanges
 *     CHOICE {add     [0]  SDSEContent,
 *             remove  NULL,
 *             modify  [1]  ContentChange,
 *             ...} OPTIONAL,
 *   subordinateUpdates  SEQUENCE SIZE (1..MAX) OF SubordinateChanges OPTIONAL }
 * ```
 *
 * @class
 */
export class IncrementalStepRefresh {
    constructor(
        /**
         * @summary `sDSEChanges`.
         * @public
         * @readonly
         */
        readonly sDSEChanges: OPTIONAL<IncrementalStepRefresh_sDSEChanges>,
        /**
         * @summary `subordinateUpdates`.
         * @public
         * @readonly
         */
        readonly subordinateUpdates: OPTIONAL<SubordinateChanges[]>
    ) {}

    /**
     * @summary Restructures an object into a IncrementalStepRefresh
     * @description
     *
     * This takes an `object` and converts it to a `IncrementalStepRefresh`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IncrementalStepRefresh`.
     * @returns {IncrementalStepRefresh}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof IncrementalStepRefresh]: IncrementalStepRefresh[_K] }
        >
    ): IncrementalStepRefresh {
        return new IncrementalStepRefresh(
            _o.sDSEChanges,
            _o.subordinateUpdates
        );
    }
}
/* END_OF_SYMBOL_DEFINITION IncrementalStepRefresh */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IncrementalStepRefresh */
/**
 * @summary The Leading Root Component Types of IncrementalStepRefresh
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IncrementalStepRefresh: $.ComponentSpec[] = [
    new $.ComponentSpec("sDSEChanges", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "subordinateUpdates",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IncrementalStepRefresh */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IncrementalStepRefresh */
/**
 * @summary The Trailing Root Component Types of IncrementalStepRefresh
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IncrementalStepRefresh: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IncrementalStepRefresh */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IncrementalStepRefresh */
/**
 * @summary The Extension Addition Component Types of IncrementalStepRefresh
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IncrementalStepRefresh: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IncrementalStepRefresh */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IncrementalStepRefresh */
let _cached_decoder_for_IncrementalStepRefresh: $.ASN1Decoder<
    IncrementalStepRefresh
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IncrementalStepRefresh */

/* START_OF_SYMBOL_DEFINITION _decode_IncrementalStepRefresh */
/**
 * @summary Decodes an ASN.1 element into a(n) IncrementalStepRefresh
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IncrementalStepRefresh} The decoded data structure.
 */
export function _decode_IncrementalStepRefresh(el: _Element) {
    if (!_cached_decoder_for_IncrementalStepRefresh) {
        _cached_decoder_for_IncrementalStepRefresh = function (
            el: _Element
        ): IncrementalStepRefresh {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let sDSEChanges: OPTIONAL<IncrementalStepRefresh_sDSEChanges>;
            let subordinateUpdates: OPTIONAL<SubordinateChanges[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                sDSEChanges: (_el: _Element): void => {
                    sDSEChanges = _decode_IncrementalStepRefresh_sDSEChanges(
                        _el
                    );
                },
                subordinateUpdates: (_el: _Element): void => {
                    subordinateUpdates = $._decodeSequenceOf<
                        SubordinateChanges
                    >(() => _decode_SubordinateChanges)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IncrementalStepRefresh,
                _extension_additions_list_spec_for_IncrementalStepRefresh,
                _root_component_type_list_2_spec_for_IncrementalStepRefresh,
                undefined
            );
            return new IncrementalStepRefresh /* SEQUENCE_CONSTRUCTOR_CALL */(
                sDSEChanges,
                subordinateUpdates
            );
        };
    }
    return _cached_decoder_for_IncrementalStepRefresh(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IncrementalStepRefresh */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IncrementalStepRefresh */
let _cached_encoder_for_IncrementalStepRefresh: $.ASN1Encoder<
    IncrementalStepRefresh
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IncrementalStepRefresh */

/* START_OF_SYMBOL_DEFINITION _encode_IncrementalStepRefresh */
/**
 * @summary Encodes a(n) IncrementalStepRefresh into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IncrementalStepRefresh, encoded as an ASN.1 Element.
 */
export function _encode_IncrementalStepRefresh(
    value: IncrementalStepRefresh,
    elGetter: $.ASN1Encoder<IncrementalStepRefresh>
) {
    if (!_cached_encoder_for_IncrementalStepRefresh) {
        _cached_encoder_for_IncrementalStepRefresh = function (
            value: IncrementalStepRefresh,
            elGetter: $.ASN1Encoder<IncrementalStepRefresh>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.sDSEChanges === undefined
                            ? undefined
                            : _encode_IncrementalStepRefresh_sDSEChanges(
                                  value.sDSEChanges,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.subordinateUpdates === undefined
                            ? undefined
                            : $._encodeSequenceOf<SubordinateChanges>(
                                  () => _encode_SubordinateChanges,
                                  $.BER
                              )(value.subordinateUpdates, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IncrementalStepRefresh(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IncrementalStepRefresh */

/* eslint-enable */
