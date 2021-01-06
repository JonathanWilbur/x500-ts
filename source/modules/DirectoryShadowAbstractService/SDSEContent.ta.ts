/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SDSEType,
    _decode_SDSEType,
    _encode_SDSEType,
} from "../DirectoryShadowAbstractService/SDSEType.ta";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
export {
    SDSEType,
    _decode_SDSEType,
    _encode_SDSEType,
} from "../DirectoryShadowAbstractService/SDSEType.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";

/* START_OF_SYMBOL_DEFINITION SDSEContent */
/**
 * @summary SDSEContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SDSEContent ::= SEQUENCE {
 *   sDSEType          SDSEType,
 *   subComplete       [0]  BOOLEAN DEFAULT FALSE,
 *   attComplete       [1]  BOOLEAN OPTIONAL,
 *   attributes        SET OF Attribute{{SupportedAttributes}},
 *   attValIncomplete  SET OF AttributeType DEFAULT {},
 *   ...}
 * ```
 *
 * @class
 */
export class SDSEContent {
    constructor(
        /**
         * @summary `sDSEType`.
         * @public
         * @readonly
         */
        readonly sDSEType: SDSEType,
        /**
         * @summary `subComplete`.
         * @public
         * @readonly
         */
        readonly subComplete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `attComplete`.
         * @public
         * @readonly
         */
        readonly attComplete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: Attribute[],
        /**
         * @summary `attValIncomplete`.
         * @public
         * @readonly
         */
        readonly attValIncomplete: OPTIONAL<AttributeType[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SDSEContent
     * @description
     *
     * This takes an `object` and converts it to a `SDSEContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SDSEContent`.
     * @returns {SDSEContent}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SDSEContent]: SDSEContent[_K] }>
    ): SDSEContent {
        return new SDSEContent(
            _o.sDSEType,
            _o.subComplete,
            _o.attComplete,
            _o.attributes,
            _o.attValIncomplete,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `subComplete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_subComplete() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `attValIncomplete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_attValIncomplete() {
        return [];
    }
}
/* END_OF_SYMBOL_DEFINITION SDSEContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SDSEContent */
/**
 * @summary The Leading Root Component Types of SDSEContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SDSEContent: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "sDSEType",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subComplete",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attComplete",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributes",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attValIncomplete",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SDSEContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SDSEContent */
/**
 * @summary The Trailing Root Component Types of SDSEContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SDSEContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SDSEContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SDSEContent */
/**
 * @summary The Extension Addition Component Types of SDSEContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SDSEContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SDSEContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SDSEContent */
let _cached_decoder_for_SDSEContent: $.ASN1Decoder<SDSEContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SDSEContent */

/* START_OF_SYMBOL_DEFINITION _decode_SDSEContent */
/**
 * @summary Decodes an ASN.1 element into a(n) SDSEContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SDSEContent} The decoded data structure.
 */
export function _decode_SDSEContent(el: _Element) {
    if (!_cached_decoder_for_SDSEContent) {
        _cached_decoder_for_SDSEContent = function (el: _Element): SDSEContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let sDSEType!: SDSEType;
            let subComplete: OPTIONAL<BOOLEAN> =
                SDSEContent._default_value_for_subComplete;
            let attComplete: OPTIONAL<BOOLEAN>;
            let attributes!: Attribute[];
            let attValIncomplete: OPTIONAL<AttributeType[]> =
                SDSEContent._default_value_for_attValIncomplete;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                sDSEType: (_el: _Element): void => {
                    sDSEType = _decode_SDSEType(_el);
                },
                subComplete: (_el: _Element): void => {
                    subComplete = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                attComplete: (_el: _Element): void => {
                    attComplete = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                attributes: (_el: _Element): void => {
                    attributes = $._decodeSetOf<Attribute>(
                        () => _decode_Attribute
                    )(_el);
                },
                attValIncomplete: (_el: _Element): void => {
                    attValIncomplete = $._decodeSetOf<AttributeType>(
                        () => _decode_AttributeType
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SDSEContent,
                _extension_additions_list_spec_for_SDSEContent,
                _root_component_type_list_2_spec_for_SDSEContent,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SDSEContent(
                /* SEQUENCE_CONSTRUCTOR_CALL */ sDSEType,
                subComplete,
                attComplete,
                attributes,
                attValIncomplete,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SDSEContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SDSEContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SDSEContent */
let _cached_encoder_for_SDSEContent: $.ASN1Encoder<SDSEContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SDSEContent */

/* START_OF_SYMBOL_DEFINITION _encode_SDSEContent */
/**
 * @summary Encodes a(n) SDSEContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDSEContent, encoded as an ASN.1 Element.
 */
export function _encode_SDSEContent(
    value: SDSEContent,
    elGetter: $.ASN1Encoder<SDSEContent>
) {
    if (!_cached_encoder_for_SDSEContent) {
        _cached_encoder_for_SDSEContent = function (
            value: SDSEContent,
            elGetter: $.ASN1Encoder<SDSEContent>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_SDSEType(
                                value.sDSEType,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.subComplete === undefined ||
                            $.deepEq(
                                value.subComplete,
                                SDSEContent._default_value_for_subComplete
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.subComplete, $.BER),
                            /* IF_ABSENT  */ value.attComplete === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.attComplete, $.BER),
                            /* REQUIRED   */ $._encodeSetOf<Attribute>(
                                () => _encode_Attribute,
                                $.BER
                            )(value.attributes, $.BER),
                            /* IF_DEFAULT */ value.attValIncomplete ===
                                undefined ||
                            $.deepEq(
                                value.attValIncomplete,
                                SDSEContent._default_value_for_attValIncomplete
                            )
                                ? undefined
                                : $._encodeSetOf<AttributeType>(
                                      () => _encode_AttributeType,
                                      $.BER
                                  )(value.attValIncomplete, $.BER),
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
    return _cached_encoder_for_SDSEContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SDSEContent */

/* eslint-enable */
