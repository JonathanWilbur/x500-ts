/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Payload28 */
/**
 * @summary Payload28
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Payload28 ::= SEQUENCE {
 *   dhPublicKey OCTET STRING (SIZE (512)),
 *   nonce       OCTET STRING (SIZE (32)),
 *   ... }
 * ```
 *
 * @class
 */
export class Payload28 {
    constructor(
        /**
         * @summary `dhPublicKey`.
         * @public
         * @readonly
         */
        readonly dhPublicKey: OCTET_STRING,
        /**
         * @summary `nonce`.
         * @public
         * @readonly
         */
        readonly nonce: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Payload28
     * @description
     *
     * This takes an `object` and converts it to a `Payload28`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Payload28`.
     * @returns {Payload28}
     */
    public static _from_object(
        _o: { [_K in keyof Payload28]: Payload28[_K] }
    ): Payload28 {
        return new Payload28(
            _o.dhPublicKey,
            _o.nonce,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Payload28 */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Payload28 */
/**
 * @summary The Leading Root Component Types of Payload28
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Payload28: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "dhPublicKey",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nonce",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Payload28 */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Payload28 */
/**
 * @summary The Trailing Root Component Types of Payload28
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Payload28: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Payload28 */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Payload28 */
/**
 * @summary The Extension Addition Component Types of Payload28
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Payload28: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Payload28 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Payload28 */
let _cached_decoder_for_Payload28: $.ASN1Decoder<Payload28> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Payload28 */

/* START_OF_SYMBOL_DEFINITION _decode_Payload28 */
/**
 * @summary Decodes an ASN.1 element into a(n) Payload28
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Payload28} The decoded data structure.
 */
export function _decode_Payload28(el: _Element) {
    if (!_cached_decoder_for_Payload28) {
        _cached_decoder_for_Payload28 = function (el: _Element): Payload28 {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "Payload28 contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "dhPublicKey";
            sequence[1].name = "nonce";
            let dhPublicKey!: OCTET_STRING;
            let nonce!: OCTET_STRING;
            dhPublicKey = $._decodeOctetString(sequence[0]);
            nonce = $._decodeOctetString(sequence[1]);
            return new Payload28(dhPublicKey, nonce, sequence.slice(2));
        };
    }
    return _cached_decoder_for_Payload28(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Payload28 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Payload28 */
let _cached_encoder_for_Payload28: $.ASN1Encoder<Payload28> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Payload28 */

/* START_OF_SYMBOL_DEFINITION _encode_Payload28 */
/**
 * @summary Encodes a(n) Payload28 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Payload28, encoded as an ASN.1 Element.
 */
export function _encode_Payload28(
    value: Payload28,
    elGetter: $.ASN1Encoder<Payload28>
) {
    if (!_cached_encoder_for_Payload28) {
        _cached_encoder_for_Payload28 = function (
            value: Payload28,
            elGetter: $.ASN1Encoder<Payload28>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeOctetString(
                                value.dhPublicKey,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeOctetString(
                                value.nonce,
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
    return _cached_encoder_for_Payload28(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Payload28 */

/* eslint-enable */
