/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CASPsequence,
    _decode_CASPsequence,
    _encode_CASPsequence,
} from "../PkiPMIProtocolSpecifications/CASPsequence.ta";
import {
    CASPversion,
    CASPversion_v1 /* IMPORTED_ENUMERATION_ITEM */,
    _decode_CASPversion,
    _encode_CASPversion,
    _enum_for_CASPversion,
} from "../PkiPMIProtocolSpecifications/CASPversion.ta";
export {
    CASPsequence,
    _decode_CASPsequence,
    _encode_CASPsequence,
} from "../PkiPMIProtocolSpecifications/CASPsequence.ta";
export {
    CASPversion,
    CASPversion_v1 /* IMPORTED_ENUMERATION_ITEM */,
    CASPversion_v2 /* IMPORTED_ENUMERATION_ITEM */,
    CASPversion_v3 /* IMPORTED_ENUMERATION_ITEM */,
    _decode_CASPversion,
    _encode_CASPversion,
    _enum_for_CASPversion,
} from "../PkiPMIProtocolSpecifications/CASPversion.ta";

/* START_OF_SYMBOL_DEFINITION CASPcommonComponents */
/**
 * @summary CASPcommonComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASPcommonComponents ::= SEQUENCE {
 *   version    CASPversion DEFAULT v1,
 *   sequence   CASPsequence,
 *   ... }
 * ```
 *
 * @class
 */
export class CASPcommonComponents {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<CASPversion>,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: CASPsequence,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CASPcommonComponents
     * @description
     *
     * This takes an `object` and converts it to a `CASPcommonComponents`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CASPcommonComponents`.
     * @returns {CASPcommonComponents}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof CASPcommonComponents]: CASPcommonComponents[_K] }
        >
    ): CASPcommonComponents {
        return new CASPcommonComponents(
            _o.version,
            _o.sequence,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return CASPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_CASPversion;
}
/* END_OF_SYMBOL_DEFINITION CASPcommonComponents */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CASPcommonComponents */
/**
 * @summary The Leading Root Component Types of CASPcommonComponents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CASPcommonComponents: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CASPcommonComponents */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CASPcommonComponents */
/**
 * @summary The Trailing Root Component Types of CASPcommonComponents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CASPcommonComponents: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CASPcommonComponents */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CASPcommonComponents */
/**
 * @summary The Extension Addition Component Types of CASPcommonComponents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CASPcommonComponents: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CASPcommonComponents */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CASPcommonComponents */
let _cached_decoder_for_CASPcommonComponents: $.ASN1Decoder<
    CASPcommonComponents
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CASPcommonComponents */

/* START_OF_SYMBOL_DEFINITION _decode_CASPcommonComponents */
/**
 * @summary Decodes an ASN.1 element into a(n) CASPcommonComponents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CASPcommonComponents} The decoded data structure.
 */
export function _decode_CASPcommonComponents(el: _Element) {
    if (!_cached_decoder_for_CASPcommonComponents) {
        _cached_decoder_for_CASPcommonComponents = function (
            el: _Element
        ): CASPcommonComponents {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                CASPcommonComponents._default_value_for_version;
            let sequence!: CASPsequence;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CASPcommonComponents,
                _extension_additions_list_spec_for_CASPcommonComponents,
                _root_component_type_list_2_spec_for_CASPcommonComponents,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CASPcommonComponents /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                sequence,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CASPcommonComponents(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CASPcommonComponents */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CASPcommonComponents */
let _cached_encoder_for_CASPcommonComponents: $.ASN1Encoder<
    CASPcommonComponents
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CASPcommonComponents */

/* START_OF_SYMBOL_DEFINITION _encode_CASPcommonComponents */
/**
 * @summary Encodes a(n) CASPcommonComponents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CASPcommonComponents, encoded as an ASN.1 Element.
 */
export function _encode_CASPcommonComponents(
    value: CASPcommonComponents,
    elGetter: $.ASN1Encoder<CASPcommonComponents>
) {
    if (!_cached_encoder_for_CASPcommonComponents) {
        _cached_encoder_for_CASPcommonComponents = function (
            value: CASPcommonComponents,
            elGetter: $.ASN1Encoder<CASPcommonComponents>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CASPcommonComponents._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.BER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
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
    return _cached_encoder_for_CASPcommonComponents(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CASPcommonComponents */

/* eslint-enable */
