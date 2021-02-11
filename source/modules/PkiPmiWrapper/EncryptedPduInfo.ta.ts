/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../PkiPmiWrapper/EncryptedKey.ta";
import {
    EncryptedPdu,
    _decode_EncryptedPdu,
    _encode_EncryptedPdu,
} from "../PkiPmiWrapper/EncryptedPdu.ta";
import {
    EncryptedPduInfo_pduEncryptionAlgorithm,
    _decode_EncryptedPduInfo_pduEncryptionAlgorithm,
    _encode_EncryptedPduInfo_pduEncryptionAlgorithm,
} from "../PkiPmiWrapper/EncryptedPduInfo-pduEncryptionAlgorithm.ta";
export {
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../PkiPmiWrapper/EncryptedKey.ta";
export {
    EncryptedPdu,
    _decode_EncryptedPdu,
    _encode_EncryptedPdu,
} from "../PkiPmiWrapper/EncryptedPdu.ta";
export {
    EncryptedPduInfo_pduEncryptionAlgorithm,
    _decode_EncryptedPduInfo_pduEncryptionAlgorithm,
    _encode_EncryptedPduInfo_pduEncryptionAlgorithm,
} from "../PkiPmiWrapper/EncryptedPduInfo-pduEncryptionAlgorithm.ta";
export { SupportedPduSet } from "../PkiPmiWrapper/SupportedPduSet.osa";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION EncryptedPduInfo */
/**
 * @summary EncryptedPduInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedPduInfo ::= SEQUENCE {
 *   pduType                 WRAPPED-PDU.&id ({SupportedPduSet}),
 *   encryptedKey            EncryptedKey OPTIONAL,
 *   pduEncryptionAlgorithm  SEQUENCE {
 *     algorithm               ALGORITHM.&id ({SymmetricEncryptionAlgorithms}),
 *     parameter               ALGORITHM.&Type
 *                   ({SymmetricEncryptionAlgorithms}{@.algorithm})} OPTIONAL,
 *   encryptedPdu        [0] EncryptedPdu,
 *   ... }
 * ```
 *
 * @class
 */
export class EncryptedPduInfo {
    constructor(
        /**
         * @summary `pduType`.
         * @public
         * @readonly
         */
        readonly pduType: OBJECT_IDENTIFIER,
        /**
         * @summary `encryptedKey`.
         * @public
         * @readonly
         */
        readonly encryptedKey: OPTIONAL<EncryptedKey>,
        /**
         * @summary `pduEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly pduEncryptionAlgorithm: OPTIONAL<EncryptedPduInfo_pduEncryptionAlgorithm>,
        /**
         * @summary `encryptedPdu`.
         * @public
         * @readonly
         */
        readonly encryptedPdu: EncryptedPdu,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EncryptedPduInfo
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedPduInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedPduInfo`.
     * @returns {EncryptedPduInfo}
     */
    public static _from_object(
        _o: { [_K in keyof EncryptedPduInfo]: EncryptedPduInfo[_K] }
    ): EncryptedPduInfo {
        return new EncryptedPduInfo(
            _o.pduType,
            _o.encryptedKey,
            _o.pduEncryptionAlgorithm,
            _o.encryptedPdu,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EncryptedPduInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedPduInfo */
/**
 * @summary The Leading Root Component Types of EncryptedPduInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedPduInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "pduType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedKey",
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pduEncryptionAlgorithm",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedPdu",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedPduInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedPduInfo */
/**
 * @summary The Trailing Root Component Types of EncryptedPduInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedPduInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedPduInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedPduInfo */
/**
 * @summary The Extension Addition Component Types of EncryptedPduInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedPduInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedPduInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedPduInfo */
let _cached_decoder_for_EncryptedPduInfo: $.ASN1Decoder<EncryptedPduInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedPduInfo */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedPduInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedPduInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedPduInfo} The decoded data structure.
 */
export function _decode_EncryptedPduInfo(el: _Element) {
    if (!_cached_decoder_for_EncryptedPduInfo) {
        _cached_decoder_for_EncryptedPduInfo = function (
            el: _Element
        ): EncryptedPduInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pduType!: OBJECT_IDENTIFIER;
            let encryptedKey: OPTIONAL<EncryptedKey>;
            let pduEncryptionAlgorithm: OPTIONAL<EncryptedPduInfo_pduEncryptionAlgorithm>;
            let encryptedPdu!: EncryptedPdu;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                pduType: (_el: _Element): void => {
                    pduType = $._decodeObjectIdentifier(_el);
                },
                encryptedKey: (_el: _Element): void => {
                    encryptedKey = _decode_EncryptedKey(_el);
                },
                pduEncryptionAlgorithm: (_el: _Element): void => {
                    pduEncryptionAlgorithm = _decode_EncryptedPduInfo_pduEncryptionAlgorithm(
                        _el
                    );
                },
                encryptedPdu: (_el: _Element): void => {
                    encryptedPdu = $._decode_explicit<EncryptedPdu>(
                        () => _decode_EncryptedPdu
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedPduInfo,
                _extension_additions_list_spec_for_EncryptedPduInfo,
                _root_component_type_list_2_spec_for_EncryptedPduInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EncryptedPduInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ pduType,
                encryptedKey,
                pduEncryptionAlgorithm,
                encryptedPdu,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EncryptedPduInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedPduInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedPduInfo */
let _cached_encoder_for_EncryptedPduInfo: $.ASN1Encoder<EncryptedPduInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedPduInfo */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedPduInfo */
/**
 * @summary Encodes a(n) EncryptedPduInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedPduInfo, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedPduInfo(
    value: EncryptedPduInfo,
    elGetter: $.ASN1Encoder<EncryptedPduInfo>
) {
    if (!_cached_encoder_for_EncryptedPduInfo) {
        _cached_encoder_for_EncryptedPduInfo = function (
            value: EncryptedPduInfo,
            elGetter: $.ASN1Encoder<EncryptedPduInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.pduType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.encryptedKey === undefined
                                ? undefined
                                : _encode_EncryptedKey(
                                      value.encryptedKey,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.pduEncryptionAlgorithm ===
                            undefined
                                ? undefined
                                : _encode_EncryptedPduInfo_pduEncryptionAlgorithm(
                                      value.pduEncryptionAlgorithm,
                                      $.BER
                                  ),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_EncryptedPdu,
                                $.BER
                            )(value.encryptedPdu, $.BER),
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
    return _cached_encoder_for_EncryptedPduInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedPduInfo */

/* eslint-enable */
