/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OperationProgress,
    _decode_OperationProgress,
    _encode_OperationProgress,
} from "../DistributedOperations/OperationProgress.ta";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    OperationProgress,
    _decode_OperationProgress,
    _encode_OperationProgress,
} from "../DistributedOperations/OperationProgress.ta";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";

/* START_OF_SYMBOL_DEFINITION TraceItem */
/**
 * @summary TraceItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TraceItem ::= SET {
 *   dsa                [0]  Name,
 *   targetObject       [1]  Name OPTIONAL,
 *   operationProgress  [2]  OperationProgress,
 *   ... }
 * ```
 *
 * @class
 */
export class TraceItem {
    constructor(
        /**
         * @summary `dsa`.
         * @public
         * @readonly
         */
        readonly dsa: Name,
        /**
         * @summary `targetObject`.
         * @public
         * @readonly
         */
        readonly targetObject: OPTIONAL<Name>,
        /**
         * @summary `operationProgress`.
         * @public
         * @readonly
         */
        readonly operationProgress: OperationProgress,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TraceItem
     * @description
     *
     * This takes an `object` and converts it to a `TraceItem`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TraceItem`.
     * @returns {TraceItem}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TraceItem]: TraceItem[_K] }>
    ): TraceItem {
        return new TraceItem(
            _o.dsa,
            _o.targetObject,
            _o.operationProgress,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TraceItem */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TraceItem */
/**
 * @summary The Leading Root Component Types of TraceItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TraceItem: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "dsa",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "targetObject",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "operationProgress",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TraceItem */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TraceItem */
/**
 * @summary The Trailing Root Component Types of TraceItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TraceItem: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TraceItem */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TraceItem */
/**
 * @summary The Extension Addition Component Types of TraceItem
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TraceItem: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TraceItem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TraceItem */
let _cached_decoder_for_TraceItem: $.ASN1Decoder<TraceItem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TraceItem */

/* START_OF_SYMBOL_DEFINITION _decode_TraceItem */
/**
 * @summary Decodes an ASN.1 element into a(n) TraceItem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TraceItem} The decoded data structure.
 */
export function _decode_TraceItem(el: _Element) {
    if (!_cached_decoder_for_TraceItem) {
        _cached_decoder_for_TraceItem = function (el: _Element): TraceItem {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let dsa!: Name;
            let targetObject: OPTIONAL<Name>;
            let operationProgress!: OperationProgress;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                dsa: (_el: _Element): void => {
                    dsa = $._decode_explicit<Name>(() => _decode_Name)(_el);
                },
                targetObject: (_el: _Element): void => {
                    targetObject = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                operationProgress: (_el: _Element): void => {
                    operationProgress = $._decode_explicit<OperationProgress>(
                        () => _decode_OperationProgress
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TraceItem,
                _extension_additions_list_spec_for_TraceItem,
                _root_component_type_list_2_spec_for_TraceItem,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TraceItem /* SET_CONSTRUCTOR_CALL */(
                dsa,
                targetObject,
                operationProgress,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TraceItem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TraceItem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TraceItem */
let _cached_encoder_for_TraceItem: $.ASN1Encoder<TraceItem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TraceItem */

/* START_OF_SYMBOL_DEFINITION _encode_TraceItem */
/**
 * @summary Encodes a(n) TraceItem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceItem, encoded as an ASN.1 Element.
 */
export function _encode_TraceItem(
    value: TraceItem,
    elGetter: $.ASN1Encoder<TraceItem>
) {
    if (!_cached_encoder_for_TraceItem) {
        _cached_encoder_for_TraceItem = function (
            value: TraceItem,
            elGetter: $.ASN1Encoder<TraceItem>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_Name,
                                $.BER
                            )(value.dsa, $.BER),
                            /* IF_ABSENT  */ value.targetObject === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Name,
                                      $.BER
                                  )(value.targetObject, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => _encode_OperationProgress,
                                $.BER
                            )(value.operationProgress, $.BER),
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
    return _cached_encoder_for_TraceItem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TraceItem */

/* eslint-enable */
