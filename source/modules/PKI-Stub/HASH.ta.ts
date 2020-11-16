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
} from "../PKI_Stub/AlgorithmIdentifier.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI_Stub/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION HASH */
/**
 * @summary HASH
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HASH{ToBeHashed} ::= SEQUENCE {
 *   algorithmIdentifier  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   hashValue            BIT STRING,
 *   ... }
 * ```
 *
 * @class
 */
export class HASH<ToBeHashed> {
    constructor(
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `hashValue`.
         * @public
         * @readonly
         */
        readonly hashValue: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a HASH
     * @description
     *
     * This takes an `object` and converts it to a `HASH`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HASH`.
     * @returns {HASH}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof HASH<any>]: HASH<any>[_K] }>
    ): HASH<any> {
        return new HASH(
            _o.algorithmIdentifier,
            _o.hashValue,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION HASH */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_HASH */
/**
 * @summary The Leading Root Component Types of HASH
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HASH: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "hashValue",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_HASH */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_HASH */
/**
 * @summary The Trailing Root Component Types of HASH
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HASH: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_HASH */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_HASH */
/**
 * @summary The Extension Addition Component Types of HASH
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HASH: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_HASH */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HASH */
let _cached_decoder_for_HASH: $.ASN1Decoder<HASH<ToBeHashed>> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HASH */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_HASH */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) HASH
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_HASH<ToBeHashed>(
    _decode_ToBeHashed: $.ASN1Decoder<ToBeHashed>
) {
    return function <ToBeHashed>(el: _Element): HASH<ToBeHashed> {
        const sequence: _Element[] = el.sequence;
        if (sequence.length < 2) {
            throw new _ConstructionError(
                "HASH contained only " +
                    sequence.length.toString() +
                    " elements."
            );
        }
        sequence[0].name = "algorithmIdentifier";
        sequence[1].name = "hashValue";
        let algorithmIdentifier!: AlgorithmIdentifier;
        let hashValue!: BIT_STRING;
        algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
        hashValue = $._decodeBitString(sequence[1]);
        return new HASH<ToBeHashed>(
            algorithmIdentifier,
            hashValue,
            sequence.slice(2)
        );
    };
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_HASH */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HASH */
let _cached_encoder_for_HASH: $.ASN1Encoder<HASH<ToBeHashed>> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HASH */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_HASH */
/**
 * @summary Returns a function that will encode a(n) HASH into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) HASH as an ASN.1 element.
 */
export function _get_encoder_for_HASH<ToBeHashed>(
    _encode_ToBeHashed: $.ASN1Encoder<ToBeHashed>
) {
    return function (
        value: HASH<ToBeHashed>,
        elGetter: $.ASN1Encoder<HASH<ToBeHashed>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algorithmIdentifier,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.hashValue,
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
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_HASH */

/* eslint-enable */
