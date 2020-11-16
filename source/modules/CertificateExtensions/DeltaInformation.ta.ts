/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";

/* START_OF_SYMBOL_DEFINITION DeltaInformation */
/**
 * @summary DeltaInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeltaInformation ::= SEQUENCE {
 *   deltaLocation  GeneralName,
 *   nextDelta      GeneralizedTime OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DeltaInformation {
    constructor(
        /**
         * @summary `deltaLocation`.
         * @public
         * @readonly
         */
        readonly deltaLocation: GeneralName,
        /**
         * @summary `nextDelta`.
         * @public
         * @readonly
         */
        readonly nextDelta: OPTIONAL<GeneralizedTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DeltaInformation
     * @description
     *
     * This takes an `object` and converts it to a `DeltaInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeltaInformation`.
     * @returns {DeltaInformation}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DeltaInformation]: DeltaInformation[_K] }>
    ): DeltaInformation {
        return new DeltaInformation(
            _o.deltaLocation,
            _o.nextDelta,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DeltaInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeltaInformation */
/**
 * @summary The Leading Root Component Types of DeltaInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeltaInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "deltaLocation",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nextDelta",
        true,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeltaInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeltaInformation */
/**
 * @summary The Trailing Root Component Types of DeltaInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeltaInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeltaInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeltaInformation */
/**
 * @summary The Extension Addition Component Types of DeltaInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeltaInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeltaInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeltaInformation */
let _cached_decoder_for_DeltaInformation: $.ASN1Decoder<
    DeltaInformation
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeltaInformation */

/* START_OF_SYMBOL_DEFINITION _decode_DeltaInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) DeltaInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeltaInformation} The decoded data structure.
 */
export function _decode_DeltaInformation(el: _Element) {
    if (!_cached_decoder_for_DeltaInformation) {
        _cached_decoder_for_DeltaInformation = function (
            el: _Element
        ): DeltaInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let deltaLocation!: GeneralName;
            let nextDelta: OPTIONAL<GeneralizedTime>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                deltaLocation: (_el: _Element): void => {
                    deltaLocation = _decode_GeneralName(_el);
                },
                nextDelta: (_el: _Element): void => {
                    nextDelta = $._decodeGeneralizedTime(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeltaInformation,
                _extension_additions_list_spec_for_DeltaInformation,
                _root_component_type_list_2_spec_for_DeltaInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DeltaInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                deltaLocation,
                nextDelta,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DeltaInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeltaInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeltaInformation */
let _cached_encoder_for_DeltaInformation: $.ASN1Encoder<
    DeltaInformation
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeltaInformation */

/* START_OF_SYMBOL_DEFINITION _encode_DeltaInformation */
/**
 * @summary Encodes a(n) DeltaInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeltaInformation, encoded as an ASN.1 Element.
 */
export function _encode_DeltaInformation(
    value: DeltaInformation,
    elGetter: $.ASN1Encoder<DeltaInformation>
) {
    if (!_cached_encoder_for_DeltaInformation) {
        _cached_encoder_for_DeltaInformation = function (
            value: DeltaInformation,
            elGetter: $.ASN1Encoder<DeltaInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_GeneralName(
                                value.deltaLocation,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.nextDelta === undefined
                                ? undefined
                                : $._encodeGeneralizedTime(
                                      value.nextDelta,
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
    return _cached_encoder_for_DeltaInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeltaInformation */

/* eslint-enable */
