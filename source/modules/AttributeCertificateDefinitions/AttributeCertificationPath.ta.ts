/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ACPathData,
    _decode_ACPathData,
    _encode_ACPathData,
} from "../AttributeCertificateDefinitions/ACPathData.ta";
import { AttributeCertificate } from "../AttributeCertificateDefinitions/AttributeCertificate.ta";
export {
    ACPathData,
    _decode_ACPathData,
    _encode_ACPathData,
} from "../AttributeCertificateDefinitions/ACPathData.ta";
export {
    AttributeCertificate,
    _get_decoder_for_AttributeCertificate,
    _get_encoder_for_AttributeCertificate,
} from "../AttributeCertificateDefinitions/AttributeCertificate.ta";

/* START_OF_SYMBOL_DEFINITION AttributeCertificationPath */
/**
 * @summary AttributeCertificationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificationPath ::= SEQUENCE {
 *   attributeCertificate  AttributeCertificate,
 *   acPath                SEQUENCE OF ACPathData OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeCertificationPath {
    constructor(
        /**
         * @summary `attributeCertificate`.
         * @public
         * @readonly
         */
        readonly attributeCertificate: AttributeCertificate,
        /**
         * @summary `acPath`.
         * @public
         * @readonly
         */
        readonly acPath: OPTIONAL<ACPathData[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeCertificationPath
     * @description
     *
     * This takes an `object` and converts it to a `AttributeCertificationPath`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeCertificationPath`.
     * @returns {AttributeCertificationPath}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeCertificationPath]: AttributeCertificationPath[_K];
            }
        >
    ): AttributeCertificationPath {
        return new AttributeCertificationPath(
            _o.attributeCertificate,
            _o.acPath,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeCertificationPath */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeCertificationPath */
/**
 * @summary The Leading Root Component Types of AttributeCertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeCertificationPath: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attributeCertificate",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "acPath",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeCertificationPath */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeCertificationPath */
/**
 * @summary The Trailing Root Component Types of AttributeCertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeCertificationPath: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeCertificationPath */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeCertificationPath */
/**
 * @summary The Extension Addition Component Types of AttributeCertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeCertificationPath: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeCertificationPath */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificationPath */
let _cached_decoder_for_AttributeCertificationPath: $.ASN1Decoder<
    AttributeCertificationPath
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeCertificationPath */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeCertificationPath */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificationPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificationPath} The decoded data structure.
 */
export function _decode_AttributeCertificationPath(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificationPath) {
        _cached_decoder_for_AttributeCertificationPath = function (
            el: _Element
        ): AttributeCertificationPath {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attributeCertificate!: AttributeCertificate;
            let acPath: OPTIONAL<ACPathData[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attributeCertificate: (_el: _Element): void => {
                    attributeCertificate = _decode_AttributeCertificate(_el);
                },
                acPath: (_el: _Element): void => {
                    acPath = $._decodeSequenceOf<ACPathData>(
                        () => _decode_ACPathData
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeCertificationPath,
                _extension_additions_list_spec_for_AttributeCertificationPath,
                _root_component_type_list_2_spec_for_AttributeCertificationPath,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeCertificationPath /* SEQUENCE_CONSTRUCTOR_CALL */(
                attributeCertificate,
                acPath,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeCertificationPath(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeCertificationPath */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificationPath */
let _cached_encoder_for_AttributeCertificationPath: $.ASN1Encoder<
    AttributeCertificationPath
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeCertificationPath */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeCertificationPath */
/**
 * @summary Encodes a(n) AttributeCertificationPath into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificationPath, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificationPath(
    value: AttributeCertificationPath,
    elGetter: $.ASN1Encoder<AttributeCertificationPath>
) {
    if (!_cached_encoder_for_AttributeCertificationPath) {
        _cached_encoder_for_AttributeCertificationPath = function (
            value: AttributeCertificationPath,
            elGetter: $.ASN1Encoder<AttributeCertificationPath>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeCertificate(
                                value.attributeCertificate,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.acPath === undefined
                                ? undefined
                                : $._encodeSequenceOf<ACPathData>(
                                      () => _encode_ACPathData,
                                      $.BER
                                  )(value.acPath, $.BER),
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
    return _cached_encoder_for_AttributeCertificationPath(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeCertificationPath */

/* eslint-enable */
