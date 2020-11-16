/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OsiBind_mode_selector,
    _decode_OsiBind_mode_selector,
    _encode_OsiBind_mode_selector,
} from "../OSIProtocolSpecification/OsiBind-mode-selector.ta";
import {
    OsiBind_normal_mode_parameters,
    _decode_OsiBind_normal_mode_parameters,
    _encode_OsiBind_normal_mode_parameters,
} from "../OSIProtocolSpecification/OsiBind-normal-mode-parameters.ta";
export {
    OsiBind_mode_selector,
    _decode_OsiBind_mode_selector,
    _encode_OsiBind_mode_selector,
} from "../OSIProtocolSpecification/OsiBind-mode-selector.ta";
export {
    OsiBind_normal_mode_parameters,
    _decode_OsiBind_normal_mode_parameters,
    _encode_OsiBind_normal_mode_parameters,
} from "../OSIProtocolSpecification/OsiBind-normal-mode-parameters.ta";

/* START_OF_SYMBOL_DEFINITION OsiBind */
/**
 * @summary OsiBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBind{APPLICATION-CONTEXT:Protocols} ::= SET {
 *   mode-selector                  [0]  IMPLICIT SET {
 *     mode-value                     [0]  IMPLICIT INTEGER(1)},
 *   normal-mode-parameters         [2]  IMPLICIT SEQUENCE {
 *     protocol-version               [0]  IMPLICIT BIT STRING {version-1(0)}
 *                                           DEFAULT {version-1},
 *     calling-presentation-selector  [1]  IMPLICIT Presentation-selector OPTIONAL,
 *     called-presentation-selector   [2]  IMPLICIT Presentation-selector OPTIONAL,
 *     presentation-context-definition-list
 *                                    [4]  IMPLICIT Context-list,
 *     user-data                           CHOICE {
 *       fully-encoded-data  [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *         transfer-syntax-name              Transfer-syntax-name OPTIONAL,
 *         presentation-context-identifier   Presentation-context-identifier,
 *         presentation-data-values          CHOICE {
 *           single-ASN1-type             [0]  ABSTRACT-SYNTAX.&Type
 *                                              (AARQ-apdu{{Protocols}})}}}}}
 * ```
 *
 * @class
 */
export class OsiBind {
    constructor(
        /**
         * @summary `mode_selector`.
         * @public
         * @readonly
         */
        readonly mode_selector: OsiBind_mode_selector,
        /**
         * @summary `normal_mode_parameters`.
         * @public
         * @readonly
         */
        readonly normal_mode_parameters: OsiBind_normal_mode_parameters
    ) {}

    /**
     * @summary Restructures an object into a OsiBind
     * @description
     *
     * This takes an `object` and converts it to a `OsiBind`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBind`.
     * @returns {OsiBind}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof OsiBind]: OsiBind[_K] }>
    ): OsiBind {
        return new OsiBind(_o.mode_selector, _o.normal_mode_parameters);
    }
}
/* END_OF_SYMBOL_DEFINITION OsiBind */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OsiBind */
/**
 * @summary The Leading Root Component Types of OsiBind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBind: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mode-selector",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "normal-mode-parameters",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OsiBind */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OsiBind */
/**
 * @summary The Trailing Root Component Types of OsiBind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBind: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OsiBind */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OsiBind */
/**
 * @summary The Extension Addition Component Types of OsiBind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBind: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OsiBind */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiBind */
let _cached_decoder_for_OsiBind: $.ASN1Decoder<OsiBind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiBind */

/* START_OF_SYMBOL_DEFINITION _decode_OsiBind */
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBind} The decoded data structure.
 */
export function _decode_OsiBind(el: _Element) {
    if (!_cached_decoder_for_OsiBind) {
        _cached_decoder_for_OsiBind = function (el: _Element): OsiBind {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let mode_selector!: OsiBind_mode_selector;
            let normal_mode_parameters!: OsiBind_normal_mode_parameters;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "mode-selector": (_el: _Element): void => {
                    mode_selector = $._decode_explicit<OsiBind_mode_selector>(
                        () => _decode_OsiBind_mode_selector
                    )(_el);
                },
                "normal-mode-parameters": (_el: _Element): void => {
                    normal_mode_parameters = $._decode_explicit<
                        OsiBind_normal_mode_parameters
                    >(() => _decode_OsiBind_normal_mode_parameters)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBind,
                _extension_additions_list_spec_for_OsiBind,
                _root_component_type_list_2_spec_for_OsiBind,
                undefined
            );
            return new OsiBind /* SET_CONSTRUCTOR_CALL */(
                mode_selector,
                normal_mode_parameters
            );
        };
    }
    return _cached_decoder_for_OsiBind(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OsiBind */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiBind */
let _cached_encoder_for_OsiBind: $.ASN1Encoder<OsiBind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiBind */

/* START_OF_SYMBOL_DEFINITION _encode_OsiBind */
/**
 * @summary Encodes a(n) OsiBind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBind, encoded as an ASN.1 Element.
 */
export function _encode_OsiBind(
    value: OsiBind,
    elGetter: $.ASN1Encoder<OsiBind>
) {
    if (!_cached_encoder_for_OsiBind) {
        _cached_encoder_for_OsiBind = function (
            value: OsiBind,
            elGetter: $.ASN1Encoder<OsiBind>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_OsiBind_mode_selector,
                            $.BER
                        )(value.mode_selector, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => _encode_OsiBind_normal_mode_parameters,
                            $.BER
                        )(value.normal_mode_parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBind(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OsiBind */

/* eslint-enable */
