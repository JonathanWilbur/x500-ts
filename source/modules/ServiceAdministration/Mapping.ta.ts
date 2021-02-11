/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Mapping */
/**
 * @summary Mapping
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Mapping ::= SEQUENCE {
 *   mappingFunction  OBJECT IDENTIFIER (CONSTRAINED BY {-- shall be an--
 *                      -- object identifier of a mapping-based matching algorithm -- }),
 *   level            INTEGER DEFAULT 0,
 *   ... }
 * ```
 *
 * @class
 */
export class Mapping {
    constructor(
        /**
         * @summary `mappingFunction`.
         * @public
         * @readonly
         */
        readonly mappingFunction: OBJECT_IDENTIFIER,
        /**
         * @summary `level`.
         * @public
         * @readonly
         */
        readonly level: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Mapping
     * @description
     *
     * This takes an `object` and converts it to a `Mapping`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Mapping`.
     * @returns {Mapping}
     */
    public static _from_object(
        _o: { [_K in keyof Mapping]: Mapping[_K] }
    ): Mapping {
        return new Mapping(
            _o.mappingFunction,
            _o.level,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `level`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_level() {
        return 0;
    }
}
/* END_OF_SYMBOL_DEFINITION Mapping */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Mapping */
/**
 * @summary The Leading Root Component Types of Mapping
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Mapping: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mappingFunction",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "level",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Mapping */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Mapping */
/**
 * @summary The Trailing Root Component Types of Mapping
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Mapping: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Mapping */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Mapping */
/**
 * @summary The Extension Addition Component Types of Mapping
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Mapping: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Mapping */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Mapping */
let _cached_decoder_for_Mapping: $.ASN1Decoder<Mapping> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Mapping */

/* START_OF_SYMBOL_DEFINITION _decode_Mapping */
/**
 * @summary Decodes an ASN.1 element into a(n) Mapping
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Mapping} The decoded data structure.
 */
export function _decode_Mapping(el: _Element) {
    if (!_cached_decoder_for_Mapping) {
        _cached_decoder_for_Mapping = function (el: _Element): Mapping {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mappingFunction!: OBJECT_IDENTIFIER;
            let level: OPTIONAL<INTEGER> = Mapping._default_value_for_level;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                mappingFunction: (_el: _Element): void => {
                    mappingFunction = $._decodeObjectIdentifier(_el);
                },
                level: (_el: _Element): void => {
                    level = $._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Mapping,
                _extension_additions_list_spec_for_Mapping,
                _root_component_type_list_2_spec_for_Mapping,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Mapping(
                /* SEQUENCE_CONSTRUCTOR_CALL */ mappingFunction,
                level,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Mapping(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Mapping */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Mapping */
let _cached_encoder_for_Mapping: $.ASN1Encoder<Mapping> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Mapping */

/* START_OF_SYMBOL_DEFINITION _encode_Mapping */
/**
 * @summary Encodes a(n) Mapping into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Mapping, encoded as an ASN.1 Element.
 */
export function _encode_Mapping(
    value: Mapping,
    elGetter: $.ASN1Encoder<Mapping>
) {
    if (!_cached_encoder_for_Mapping) {
        _cached_encoder_for_Mapping = function (
            value: Mapping,
            elGetter: $.ASN1Encoder<Mapping>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.mappingFunction,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.level === undefined ||
                            $.deepEq(
                                value.level,
                                Mapping._default_value_for_level
                            )
                                ? undefined
                                : $._encodeInteger(value.level, $.BER),
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
    return _cached_encoder_for_Mapping(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Mapping */

/* eslint-enable */
