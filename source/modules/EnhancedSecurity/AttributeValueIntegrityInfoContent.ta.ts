/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AVIHash,
    _decode_AVIHash,
    _encode_AVIHash,
} from "../EnhancedSecurity/AVIHash.ta";
import {
    Signer,
    _decode_Signer,
    _encode_Signer,
} from "../EnhancedSecurity/Signer.ta";
export {
    AVIHash,
    _decode_AVIHash,
    _encode_AVIHash,
} from "../EnhancedSecurity/AVIHash.ta";
export {
    Signer,
    _decode_Signer,
    _encode_Signer,
} from "../EnhancedSecurity/Signer.ta";

/* START_OF_SYMBOL_DEFINITION AttributeValueIntegrityInfoContent */
/**
 * @summary AttributeValueIntegrityInfoContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValueIntegrityInfoContent ::= SEQUENCE {
 *   signer   Signer OPTIONAL, -- Authority or data originators name
 *   aVIHash  AVIHash,         -- Hash value of protected attribute
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeValueIntegrityInfoContent {
    constructor(
        /**
         * @summary `signer`.
         * @public
         * @readonly
         */
        readonly signer: OPTIONAL<Signer>,
        /**
         * @summary `aVIHash`.
         * @public
         * @readonly
         */
        readonly aVIHash: AVIHash,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeValueIntegrityInfoContent
     * @description
     *
     * This takes an `object` and converts it to a `AttributeValueIntegrityInfoContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeValueIntegrityInfoContent`.
     * @returns {AttributeValueIntegrityInfoContent}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeValueIntegrityInfoContent]: AttributeValueIntegrityInfoContent[_K];
            }
        >
    ): AttributeValueIntegrityInfoContent {
        return new AttributeValueIntegrityInfoContent(
            _o.signer,
            _o.aVIHash,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeValueIntegrityInfoContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeValueIntegrityInfoContent */
/**
 * @summary The Leading Root Component Types of AttributeValueIntegrityInfoContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeValueIntegrityInfoContent: $.ComponentSpec[] = [
    new $.ComponentSpec("signer", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "aVIHash",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeValueIntegrityInfoContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeValueIntegrityInfoContent */
/**
 * @summary The Trailing Root Component Types of AttributeValueIntegrityInfoContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeValueIntegrityInfoContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeValueIntegrityInfoContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeValueIntegrityInfoContent */
/**
 * @summary The Extension Addition Component Types of AttributeValueIntegrityInfoContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeValueIntegrityInfoContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeValueIntegrityInfoContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueIntegrityInfoContent */
let _cached_decoder_for_AttributeValueIntegrityInfoContent: $.ASN1Decoder<
    AttributeValueIntegrityInfoContent
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueIntegrityInfoContent */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeValueIntegrityInfoContent */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueIntegrityInfoContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValueIntegrityInfoContent} The decoded data structure.
 */
export function _decode_AttributeValueIntegrityInfoContent(el: _Element) {
    if (!_cached_decoder_for_AttributeValueIntegrityInfoContent) {
        _cached_decoder_for_AttributeValueIntegrityInfoContent = function (
            el: _Element
        ): AttributeValueIntegrityInfoContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let signer: OPTIONAL<Signer>;
            let aVIHash!: AVIHash;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                signer: (_el: _Element): void => {
                    signer = _decode_Signer(_el);
                },
                aVIHash: (_el: _Element): void => {
                    aVIHash = _decode_AVIHash(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeValueIntegrityInfoContent,
                _extension_additions_list_spec_for_AttributeValueIntegrityInfoContent,
                _root_component_type_list_2_spec_for_AttributeValueIntegrityInfoContent,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeValueIntegrityInfoContent /* SEQUENCE_CONSTRUCTOR_CALL */(
                signer,
                aVIHash,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeValueIntegrityInfoContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeValueIntegrityInfoContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueIntegrityInfoContent */
let _cached_encoder_for_AttributeValueIntegrityInfoContent: $.ASN1Encoder<
    AttributeValueIntegrityInfoContent
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueIntegrityInfoContent */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeValueIntegrityInfoContent */
/**
 * @summary Encodes a(n) AttributeValueIntegrityInfoContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueIntegrityInfoContent, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValueIntegrityInfoContent(
    value: AttributeValueIntegrityInfoContent,
    elGetter: $.ASN1Encoder<AttributeValueIntegrityInfoContent>
) {
    if (!_cached_encoder_for_AttributeValueIntegrityInfoContent) {
        _cached_encoder_for_AttributeValueIntegrityInfoContent = function (
            value: AttributeValueIntegrityInfoContent,
            elGetter: $.ASN1Encoder<AttributeValueIntegrityInfoContent>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.signer === undefined
                                ? undefined
                                : _encode_Signer(value.signer, $.BER),
                            /* REQUIRED   */ _encode_AVIHash(
                                value.aVIHash,
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
    return _cached_encoder_for_AttributeValueIntegrityInfoContent(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeValueIntegrityInfoContent */

/* eslint-enable */
