/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    KeyAgreement_keyEncryptionAlgorithm,
    _decode_KeyAgreement_keyEncryptionAlgorithm,
    _encode_KeyAgreement_keyEncryptionAlgorithm,
} from "../PkiPmiWrapper/KeyAgreement-keyEncryptionAlgorithm.ta";
import {
    SenderDhInfo,
    _decode_SenderDhInfo,
    _encode_SenderDhInfo,
} from "../PkiPmiWrapper/SenderDhInfo.ta";
export {
    KeyAgreement_keyEncryptionAlgorithm,
    _decode_KeyAgreement_keyEncryptionAlgorithm,
    _encode_KeyAgreement_keyEncryptionAlgorithm,
} from "../PkiPmiWrapper/KeyAgreement-keyEncryptionAlgorithm.ta";
export {
    SenderDhInfo,
    _decode_SenderDhInfo,
    _encode_SenderDhInfo,
} from "../PkiPmiWrapper/SenderDhInfo.ta";

/* START_OF_SYMBOL_DEFINITION KeyAgreement */
/**
 * @summary KeyAgreement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreement ::= SEQUENCE {
 *   senderDhInfo       [0] SenderDhInfo,
 *   keyEncryptionAlgorithm SEQUENCE {
 *     algorithm    ALGORITHM.&id ({SupportedKeyEncryptionAlgorithm}),
 *     parameters   ALGORITHM.&Type({SupportedKeyEncryptionAlgorithm}{@.algorithm}),
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class KeyAgreement {
    constructor(
        /**
         * @summary `senderDhInfo`.
         * @public
         * @readonly
         */
        readonly senderDhInfo: SenderDhInfo,
        /**
         * @summary `keyEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly keyEncryptionAlgorithm: KeyAgreement_keyEncryptionAlgorithm,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a KeyAgreement
     * @description
     *
     * This takes an `object` and converts it to a `KeyAgreement`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyAgreement`.
     * @returns {KeyAgreement}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof KeyAgreement]: KeyAgreement[_K] }>
    ): KeyAgreement {
        return new KeyAgreement(
            _o.senderDhInfo,
            _o.keyEncryptionAlgorithm,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION KeyAgreement */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyAgreement */
/**
 * @summary The Leading Root Component Types of KeyAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyAgreement: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "senderDhInfo",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyAgreement */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyAgreement */
/**
 * @summary The Trailing Root Component Types of KeyAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyAgreement: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyAgreement */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyAgreement */
/**
 * @summary The Extension Addition Component Types of KeyAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyAgreement: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyAgreement */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreement */
let _cached_decoder_for_KeyAgreement: $.ASN1Decoder<KeyAgreement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreement */

/* START_OF_SYMBOL_DEFINITION _decode_KeyAgreement */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyAgreement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyAgreement} The decoded data structure.
 */
export function _decode_KeyAgreement(el: _Element) {
    if (!_cached_decoder_for_KeyAgreement) {
        _cached_decoder_for_KeyAgreement = function (
            el: _Element
        ): KeyAgreement {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "KeyAgreement contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "senderDhInfo";
            sequence[1].name = "keyEncryptionAlgorithm";
            let senderDhInfo!: SenderDhInfo;
            let keyEncryptionAlgorithm!: KeyAgreement_keyEncryptionAlgorithm;
            senderDhInfo = $._decode_explicit<SenderDhInfo>(
                () => _decode_SenderDhInfo
            )(sequence[0]);
            keyEncryptionAlgorithm = _decode_KeyAgreement_keyEncryptionAlgorithm(
                sequence[1]
            );
            return new KeyAgreement(
                senderDhInfo,
                keyEncryptionAlgorithm,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_KeyAgreement(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyAgreement */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreement */
let _cached_encoder_for_KeyAgreement: $.ASN1Encoder<KeyAgreement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreement */

/* START_OF_SYMBOL_DEFINITION _encode_KeyAgreement */
/**
 * @summary Encodes a(n) KeyAgreement into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAgreement, encoded as an ASN.1 Element.
 */
export function _encode_KeyAgreement(
    value: KeyAgreement,
    elGetter: $.ASN1Encoder<KeyAgreement>
) {
    if (!_cached_encoder_for_KeyAgreement) {
        _cached_encoder_for_KeyAgreement = function (
            value: KeyAgreement,
            elGetter: $.ASN1Encoder<KeyAgreement>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_SenderDhInfo,
                                $.BER
                            )(value.senderDhInfo, $.BER),
                            /* REQUIRED   */ _encode_KeyAgreement_keyEncryptionAlgorithm(
                                value.keyEncryptionAlgorithm,
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
    return _cached_encoder_for_KeyAgreement(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyAgreement */

/* eslint-enable */
