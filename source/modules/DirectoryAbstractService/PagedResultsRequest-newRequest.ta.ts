/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SortKey,
    _decode_SortKey,
    _encode_SortKey,
} from "../DirectoryAbstractService/SortKey.ta";
export {
    SortKey,
    _decode_SortKey,
    _encode_SortKey,
} from "../DirectoryAbstractService/SortKey.ta";

/* START_OF_SYMBOL_DEFINITION PagedResultsRequest_newRequest */
/**
 * @summary PagedResultsRequest_newRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PagedResultsRequest-newRequest ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class PagedResultsRequest_newRequest {
    constructor(
        /**
         * @summary `pageSize`.
         * @public
         * @readonly
         */
        readonly pageSize: INTEGER,
        /**
         * @summary `sortKeys`.
         * @public
         * @readonly
         */
        readonly sortKeys: OPTIONAL<SortKey[]>,
        /**
         * @summary `reverse`.
         * @public
         * @readonly
         */
        readonly reverse: OPTIONAL<BOOLEAN>,
        /**
         * @summary `unmerged`.
         * @public
         * @readonly
         */
        readonly unmerged: OPTIONAL<BOOLEAN>,
        /**
         * @summary `pageNumber`.
         * @public
         * @readonly
         */
        readonly pageNumber: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PagedResultsRequest_newRequest
     * @description
     *
     * This takes an `object` and converts it to a `PagedResultsRequest_newRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PagedResultsRequest_newRequest`.
     * @returns {PagedResultsRequest_newRequest}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof PagedResultsRequest_newRequest]: PagedResultsRequest_newRequest[_K];
            }
        >
    ): PagedResultsRequest_newRequest {
        return new PagedResultsRequest_newRequest(
            _o.pageSize,
            _o.sortKeys,
            _o.reverse,
            _o.unmerged,
            _o.pageNumber,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `reverse`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_reverse() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `unmerged`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_unmerged() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION PagedResultsRequest_newRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PagedResultsRequest_newRequest */
/**
 * @summary The Leading Root Component Types of PagedResultsRequest_newRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PagedResultsRequest_newRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "pageSize",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sortKeys",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reverse",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "unmerged",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pageNumber",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PagedResultsRequest_newRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PagedResultsRequest_newRequest */
/**
 * @summary The Trailing Root Component Types of PagedResultsRequest_newRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PagedResultsRequest_newRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PagedResultsRequest_newRequest */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PagedResultsRequest_newRequest */
/**
 * @summary The Extension Addition Component Types of PagedResultsRequest_newRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PagedResultsRequest_newRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PagedResultsRequest_newRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PagedResultsRequest_newRequest */
let _cached_decoder_for_PagedResultsRequest_newRequest: $.ASN1Decoder<PagedResultsRequest_newRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PagedResultsRequest_newRequest */

/* START_OF_SYMBOL_DEFINITION _decode_PagedResultsRequest_newRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) PagedResultsRequest_newRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PagedResultsRequest_newRequest} The decoded data structure.
 */
export function _decode_PagedResultsRequest_newRequest(el: _Element) {
    if (!_cached_decoder_for_PagedResultsRequest_newRequest) {
        _cached_decoder_for_PagedResultsRequest_newRequest = function (
            el: _Element
        ): PagedResultsRequest_newRequest {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pageSize!: INTEGER;
            let sortKeys: OPTIONAL<SortKey[]>;
            let reverse: OPTIONAL<BOOLEAN> =
                PagedResultsRequest_newRequest._default_value_for_reverse;
            let unmerged: OPTIONAL<BOOLEAN> =
                PagedResultsRequest_newRequest._default_value_for_unmerged;
            let pageNumber: OPTIONAL<INTEGER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                pageSize: (_el: _Element): void => {
                    pageSize = $._decodeInteger(_el);
                },
                sortKeys: (_el: _Element): void => {
                    sortKeys = $._decodeSequenceOf<SortKey>(
                        () => _decode_SortKey
                    )(_el);
                },
                reverse: (_el: _Element): void => {
                    reverse = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                unmerged: (_el: _Element): void => {
                    unmerged = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                pageNumber: (_el: _Element): void => {
                    pageNumber = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PagedResultsRequest_newRequest,
                _extension_additions_list_spec_for_PagedResultsRequest_newRequest,
                _root_component_type_list_2_spec_for_PagedResultsRequest_newRequest,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PagedResultsRequest_newRequest(
                /* SEQUENCE_CONSTRUCTOR_CALL */ pageSize,
                sortKeys,
                reverse,
                unmerged,
                pageNumber,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PagedResultsRequest_newRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PagedResultsRequest_newRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PagedResultsRequest_newRequest */
let _cached_encoder_for_PagedResultsRequest_newRequest: $.ASN1Encoder<PagedResultsRequest_newRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PagedResultsRequest_newRequest */

/* START_OF_SYMBOL_DEFINITION _encode_PagedResultsRequest_newRequest */
/**
 * @summary Encodes a(n) PagedResultsRequest_newRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PagedResultsRequest_newRequest, encoded as an ASN.1 Element.
 */
export function _encode_PagedResultsRequest_newRequest(
    value: PagedResultsRequest_newRequest,
    elGetter: $.ASN1Encoder<PagedResultsRequest_newRequest>
) {
    if (!_cached_encoder_for_PagedResultsRequest_newRequest) {
        _cached_encoder_for_PagedResultsRequest_newRequest = function (
            value: PagedResultsRequest_newRequest,
            elGetter: $.ASN1Encoder<PagedResultsRequest_newRequest>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(
                                value.pageSize,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.sortKeys === undefined
                                ? undefined
                                : $._encodeSequenceOf<SortKey>(
                                      () => _encode_SortKey,
                                      $.BER
                                  )(value.sortKeys, $.BER),
                            /* IF_DEFAULT */ value.reverse === undefined ||
                            $.deepEq(
                                value.reverse,
                                PagedResultsRequest_newRequest._default_value_for_reverse
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.reverse, $.BER),
                            /* IF_DEFAULT */ value.unmerged === undefined ||
                            $.deepEq(
                                value.unmerged,
                                PagedResultsRequest_newRequest._default_value_for_unmerged
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.unmerged, $.BER),
                            /* IF_ABSENT  */ value.pageNumber === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.pageNumber, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PagedResultsRequest_newRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PagedResultsRequest_newRequest */

/* eslint-enable */
