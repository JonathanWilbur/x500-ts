/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    EncryptedPduInfo,
    _decode_EncryptedPduInfo,
    _encode_EncryptedPduInfo,
} from "../PkiPmiWrapper/EncryptedPduInfo.ta";
import {
    KeyAgreement,
    _decode_KeyAgreement,
    _encode_KeyAgreement,
} from "../PkiPmiWrapper/KeyAgreement.ta";
export {
    EncryptedPduInfo,
    _decode_EncryptedPduInfo,
    _encode_EncryptedPduInfo,
} from "../PkiPmiWrapper/EncryptedPduInfo.ta";
export {
    KeyAgreement,
    _decode_KeyAgreement,
    _encode_KeyAgreement,
} from "../PkiPmiWrapper/KeyAgreement.ta";

/* START_OF_SYMBOL_DEFINITION EncryptedInfo */
/**
 * @summary EncryptedInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedInfo ::= SEQUENCE {
 *   keyAgreement      KeyAgreement,
 *   encryptedPduInfo  EncryptedPduInfo,
 *   ... }
 * ```
 *
 * @class
 */
export class EncryptedInfo {
    constructor(
        /**
         * @summary `keyAgreement`.
         * @public
         * @readonly
         */
        readonly keyAgreement: KeyAgreement,
        /**
         * @summary `encryptedPduInfo`.
         * @public
         * @readonly
         */
        readonly encryptedPduInfo: EncryptedPduInfo,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EncryptedInfo
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedInfo`.
     * @returns {EncryptedInfo}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof EncryptedInfo]: EncryptedInfo[_K] }>
    ): EncryptedInfo {
        return new EncryptedInfo(
            _o.keyAgreement,
            _o.encryptedPduInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EncryptedInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedInfo */
/**
 * @summary The Leading Root Component Types of EncryptedInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "keyAgreement",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedPduInfo",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedInfo */
/**
 * @summary The Trailing Root Component Types of EncryptedInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedInfo */
/**
 * @summary The Extension Addition Component Types of EncryptedInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedInfo */
let _cached_decoder_for_EncryptedInfo: $.ASN1Decoder<EncryptedInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedInfo */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedInfo} The decoded data structure.
 */
export function _decode_EncryptedInfo(el: _Element) {
    if (!_cached_decoder_for_EncryptedInfo) {
        _cached_decoder_for_EncryptedInfo = function (
            el: _Element
        ): EncryptedInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "EncryptedInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "keyAgreement";
            sequence[1].name = "encryptedPduInfo";
            let keyAgreement!: KeyAgreement;
            let encryptedPduInfo!: EncryptedPduInfo;
            keyAgreement = _decode_KeyAgreement(sequence[0]);
            encryptedPduInfo = _decode_EncryptedPduInfo(sequence[1]);
            return new EncryptedInfo(
                keyAgreement,
                encryptedPduInfo,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_EncryptedInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedInfo */
let _cached_encoder_for_EncryptedInfo: $.ASN1Encoder<EncryptedInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedInfo */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedInfo */
/**
 * @summary Encodes a(n) EncryptedInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedInfo, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedInfo(
    value: EncryptedInfo,
    elGetter: $.ASN1Encoder<EncryptedInfo>
) {
    if (!_cached_encoder_for_EncryptedInfo) {
        _cached_encoder_for_EncryptedInfo = function (
            value: EncryptedInfo,
            elGetter: $.ASN1Encoder<EncryptedInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_KeyAgreement(
                                value.keyAgreement,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_EncryptedPduInfo(
                                value.encryptedPduInfo,
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
    return _cached_encoder_for_EncryptedInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedInfo */

/* eslint-enable */
