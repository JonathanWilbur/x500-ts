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
    v1 /* IMPORTED_SHORT_NAMED_BIT */,
    Version,
    Version_v1 /* IMPORTED_LONG_NAMED_BIT */,
    _decode_Version,
    _encode_Version,
} from "../Wrapper/Version.ta";

/* START_OF_SYMBOL_DEFINITION InitializationAcc */
/**
 * @summary InitializationAcc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationAcc ::= SEQUENCE {
 *   version    Version,
 *   ... }
 * ```
 *
 * @class
 */
export class InitializationAcc {
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
     * @summary Restructures an object into a InitializationAcc
     * @description
     *
     * This takes an `object` and converts it to a `InitializationAcc`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitializationAcc`.
     * @returns {InitializationAcc}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof InitializationAcc]: InitializationAcc[_K] }>
    ): InitializationAcc {
        return new InitializationAcc(
            _o.version,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION InitializationAcc */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InitializationAcc */
/**
 * @summary The Leading Root Component Types of InitializationAcc
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InitializationAcc: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InitializationAcc */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InitializationAcc */
/**
 * @summary The Trailing Root Component Types of InitializationAcc
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InitializationAcc: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InitializationAcc */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InitializationAcc */
/**
 * @summary The Extension Addition Component Types of InitializationAcc
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InitializationAcc: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InitializationAcc */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationAcc */
let _cached_decoder_for_InitializationAcc: $.ASN1Decoder<InitializationAcc> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationAcc */

/* START_OF_SYMBOL_DEFINITION _decode_InitializationAcc */
/**
 * @summary Decodes an ASN.1 element into a(n) InitializationAcc
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializationAcc} The decoded data structure.
 */
export function _decode_InitializationAcc(el: _Element) {
    if (!_cached_decoder_for_InitializationAcc) {
        _cached_decoder_for_InitializationAcc = function (
            el: _Element
        ): InitializationAcc {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "InitializationAcc contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            let version!: Version;
            version = _decode_Version(sequence[0]);
            return new InitializationAcc(version, sequence.slice(1));
        };
    }
    return _cached_decoder_for_InitializationAcc(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InitializationAcc */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationAcc */
let _cached_encoder_for_InitializationAcc: $.ASN1Encoder<InitializationAcc> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationAcc */

/* START_OF_SYMBOL_DEFINITION _encode_InitializationAcc */
/**
 * @summary Encodes a(n) InitializationAcc into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializationAcc, encoded as an ASN.1 Element.
 */
export function _encode_InitializationAcc(
    value: InitializationAcc,
    elGetter: $.ASN1Encoder<InitializationAcc>
) {
    if (!_cached_encoder_for_InitializationAcc) {
        _cached_encoder_for_InitializationAcc = function (
            value: InitializationAcc,
            elGetter: $.ASN1Encoder<InitializationAcc>
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
    return _cached_encoder_for_InitializationAcc(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InitializationAcc */

/* eslint-enable */
