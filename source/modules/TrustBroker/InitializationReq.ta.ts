/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Version,
    _decode_Version,
    _encode_Version,
} from "../Wrapper/Version.ta";
export {
    Version,
    Version_v1 /* IMPORTED_BIT */,
    _decode_Version,
    _encode_Version,
} from "../Wrapper/Version.ta";

/* START_OF_SYMBOL_DEFINITION InitializationReq */
/**
 * @summary InitializationReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationReq ::= SEQUENCE {
 *   version    Version,
 *   ... }
 * ```
 *
 * @class
 */
export class InitializationReq {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InitializationReq
     * @description
     *
     * This takes an `object` and converts it to a `InitializationReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitializationReq`.
     * @returns {InitializationReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof InitializationReq]: InitializationReq[_K] }>
    ): InitializationReq {
        return new InitializationReq(
            _o.version,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION InitializationReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InitializationReq */
/**
 * @summary The Leading Root Component Types of InitializationReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InitializationReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InitializationReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InitializationReq */
/**
 * @summary The Trailing Root Component Types of InitializationReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InitializationReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InitializationReq */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InitializationReq */
/**
 * @summary The Extension Addition Component Types of InitializationReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InitializationReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InitializationReq */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationReq */
let _cached_decoder_for_InitializationReq: $.ASN1Decoder<
    InitializationReq
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationReq */

/* START_OF_SYMBOL_DEFINITION _decode_InitializationReq */
/**
 * @summary Decodes an ASN.1 element into a(n) InitializationReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializationReq} The decoded data structure.
 */
export function _decode_InitializationReq(el: _Element) {
    if (!_cached_decoder_for_InitializationReq) {
        _cached_decoder_for_InitializationReq = function (
            el: _Element
        ): InitializationReq {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "InitializationReq contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            let version!: Version;
            version = _decode_Version(sequence[0]);
            return new InitializationReq(version, sequence.slice(1));
        };
    }
    return _cached_decoder_for_InitializationReq(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InitializationReq */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationReq */
let _cached_encoder_for_InitializationReq: $.ASN1Encoder<
    InitializationReq
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationReq */

/* START_OF_SYMBOL_DEFINITION _encode_InitializationReq */
/**
 * @summary Encodes a(n) InitializationReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializationReq, encoded as an ASN.1 Element.
 */
export function _encode_InitializationReq(
    value: InitializationReq,
    elGetter: $.ASN1Encoder<InitializationReq>
) {
    if (!_cached_encoder_for_InitializationReq) {
        _cached_encoder_for_InitializationReq = function (
            value: InitializationReq,
            elGetter: $.ASN1Encoder<InitializationReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Version(
                                value.version,
                                $.BER
                            ),
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
    return _cached_encoder_for_InitializationReq(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InitializationReq */

/* eslint-enable */
