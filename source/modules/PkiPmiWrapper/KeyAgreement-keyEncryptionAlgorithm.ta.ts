/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { SupportedKeyEncryptionAlgorithm } from "../PkiPmiWrapper/SupportedKeyEncryptionAlgorithm.osa";

/* START_OF_SYMBOL_DEFINITION KeyAgreement_keyEncryptionAlgorithm */
/**
 * @summary KeyAgreement_keyEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreement-keyEncryptionAlgorithm ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class KeyAgreement_keyEncryptionAlgorithm {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a KeyAgreement_keyEncryptionAlgorithm
     * @description
     *
     * This takes an `object` and converts it to a `KeyAgreement_keyEncryptionAlgorithm`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyAgreement_keyEncryptionAlgorithm`.
     * @returns {KeyAgreement_keyEncryptionAlgorithm}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof KeyAgreement_keyEncryptionAlgorithm]: KeyAgreement_keyEncryptionAlgorithm[_K];
            }
        >
    ): KeyAgreement_keyEncryptionAlgorithm {
        return new KeyAgreement_keyEncryptionAlgorithm(
            _o.algorithm,
            _o.parameters,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION KeyAgreement_keyEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyAgreement_keyEncryptionAlgorithm */
/**
 * @summary The Leading Root Component Types of KeyAgreement_keyEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyAgreement_keyEncryptionAlgorithm: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("parameters", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyAgreement_keyEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyAgreement_keyEncryptionAlgorithm */
/**
 * @summary The Trailing Root Component Types of KeyAgreement_keyEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyAgreement_keyEncryptionAlgorithm: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyAgreement_keyEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyAgreement_keyEncryptionAlgorithm */
/**
 * @summary The Extension Addition Component Types of KeyAgreement_keyEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyAgreement_keyEncryptionAlgorithm: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyAgreement_keyEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm */
let _cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm: $.ASN1Decoder<
    KeyAgreement_keyEncryptionAlgorithm
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _decode_KeyAgreement_keyEncryptionAlgorithm */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyAgreement_keyEncryptionAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyAgreement_keyEncryptionAlgorithm} The decoded data structure.
 */
export function _decode_KeyAgreement_keyEncryptionAlgorithm(el: _Element) {
    if (!_cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm) {
        _cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm = function (
            el: _Element
        ): KeyAgreement_keyEncryptionAlgorithm {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "KeyAgreement-keyEncryptionAlgorithm contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algorithm";
            sequence[1].name = "parameters";
            let algorithm!: OBJECT_IDENTIFIER;
            let parameters!: _Element;
            algorithm = $._decodeObjectIdentifier(sequence[0]);
            parameters = $._decodeAny(sequence[1]);
            return new KeyAgreement_keyEncryptionAlgorithm(
                algorithm,
                parameters,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyAgreement_keyEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm */
let _cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm: $.ASN1Encoder<
    KeyAgreement_keyEncryptionAlgorithm
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _encode_KeyAgreement_keyEncryptionAlgorithm */
/**
 * @summary Encodes a(n) KeyAgreement_keyEncryptionAlgorithm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAgreement_keyEncryptionAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_KeyAgreement_keyEncryptionAlgorithm(
    value: KeyAgreement_keyEncryptionAlgorithm,
    elGetter: $.ASN1Encoder<KeyAgreement_keyEncryptionAlgorithm>
) {
    if (!_cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm) {
        _cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm = function (
            value: KeyAgreement_keyEncryptionAlgorithm,
            elGetter: $.ASN1Encoder<KeyAgreement_keyEncryptionAlgorithm>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.algorithm,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(
                                value.parameters,
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
    return _cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyAgreement_keyEncryptionAlgorithm */

/* eslint-enable */
