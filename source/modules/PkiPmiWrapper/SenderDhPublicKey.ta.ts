/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION SenderDhPublicKey */
/**
 * @summary SenderDhPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SenderDhPublicKey ::= SEQUENCE {
 *   algorithm   AlgorithmIdentifier {{SupportedDHPublicKeyAlgorithms}},
 *   publicKey   BIT STRING,
 *   ... }
 * ```
 *
 * @class
 */
export class SenderDhPublicKey {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: AlgorithmIdentifier,
        /**
         * @summary `publicKey`.
         * @public
         * @readonly
         */
        readonly publicKey: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SenderDhPublicKey
     * @description
     *
     * This takes an `object` and converts it to a `SenderDhPublicKey`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SenderDhPublicKey`.
     * @returns {SenderDhPublicKey}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SenderDhPublicKey]: SenderDhPublicKey[_K] }>
    ): SenderDhPublicKey {
        return new SenderDhPublicKey(
            _o.algorithm,
            _o.publicKey,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SenderDhPublicKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SenderDhPublicKey */
/**
 * @summary The Leading Root Component Types of SenderDhPublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SenderDhPublicKey: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "publicKey",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SenderDhPublicKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SenderDhPublicKey */
/**
 * @summary The Trailing Root Component Types of SenderDhPublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SenderDhPublicKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SenderDhPublicKey */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SenderDhPublicKey */
/**
 * @summary The Extension Addition Component Types of SenderDhPublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SenderDhPublicKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SenderDhPublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SenderDhPublicKey */
let _cached_decoder_for_SenderDhPublicKey: $.ASN1Decoder<
    SenderDhPublicKey
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SenderDhPublicKey */

/* START_OF_SYMBOL_DEFINITION _decode_SenderDhPublicKey */
/**
 * @summary Decodes an ASN.1 element into a(n) SenderDhPublicKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SenderDhPublicKey} The decoded data structure.
 */
export function _decode_SenderDhPublicKey(el: _Element) {
    if (!_cached_decoder_for_SenderDhPublicKey) {
        _cached_decoder_for_SenderDhPublicKey = function (
            el: _Element
        ): SenderDhPublicKey {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SenderDhPublicKey contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algorithm";
            sequence[1].name = "publicKey";
            let algorithm!: AlgorithmIdentifier;
            let publicKey!: BIT_STRING;
            algorithm = _decode_AlgorithmIdentifier(sequence[0]);
            publicKey = $._decodeBitString(sequence[1]);
            return new SenderDhPublicKey(
                algorithm,
                publicKey,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_SenderDhPublicKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SenderDhPublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SenderDhPublicKey */
let _cached_encoder_for_SenderDhPublicKey: $.ASN1Encoder<
    SenderDhPublicKey
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SenderDhPublicKey */

/* START_OF_SYMBOL_DEFINITION _encode_SenderDhPublicKey */
/**
 * @summary Encodes a(n) SenderDhPublicKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SenderDhPublicKey, encoded as an ASN.1 Element.
 */
export function _encode_SenderDhPublicKey(
    value: SenderDhPublicKey,
    elGetter: $.ASN1Encoder<SenderDhPublicKey>
) {
    if (!_cached_encoder_for_SenderDhPublicKey) {
        _cached_encoder_for_SenderDhPublicKey = function (
            value: SenderDhPublicKey,
            elGetter: $.ASN1Encoder<SenderDhPublicKey>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.algorithm,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeBitString(
                                value.publicKey,
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
    return _cached_encoder_for_SenderDhPublicKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SenderDhPublicKey */

/* eslint-enable */
