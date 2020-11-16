/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OsiBindResult_mode_selector,
    _decode_OsiBindResult_mode_selector,
    _encode_OsiBindResult_mode_selector,
} from "../OSIProtocolSpecification/OsiBindResult-mode-selector.ta";
import {
    OsiBindResult_normal_mode_parameters,
    _decode_OsiBindResult_normal_mode_parameters,
    _encode_OsiBindResult_normal_mode_parameters,
} from "../OSIProtocolSpecification/OsiBindResult-normal-mode-parameters.ta";
export {
    OsiBindResult_mode_selector,
    _decode_OsiBindResult_mode_selector,
    _encode_OsiBindResult_mode_selector,
} from "../OSIProtocolSpecification/OsiBindResult-mode-selector.ta";
export {
    OsiBindResult_normal_mode_parameters,
    _decode_OsiBindResult_normal_mode_parameters,
    _encode_OsiBindResult_normal_mode_parameters,
} from "../OSIProtocolSpecification/OsiBindResult-normal-mode-parameters.ta";

/* START_OF_SYMBOL_DEFINITION OsiBindResult */
/**
 * @summary OsiBindResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindResult{APPLICATION-CONTEXT:Protocols} ::= SET {
 *   mode-selector                    [0] IMPLICIT SET {mode-value  [0] IMPLICIT INTEGER(1)},
 *   normal-mode-parameters           [2] IMPLICIT SEQUENCE {
 *     protocol-version                 [0] IMPLICIT BIT STRING {version-1(0)}
 *                                            DEFAULT {version-1},
 *     responding-presentation-selector [3] IMPLICIT Presentation-selector OPTIONAL,
 *     presentation-context-definition-result-list
 *                                      [5] IMPLICIT SEQUENCE SIZE (2) OF SEQUENCE {
 *       result                           [0] IMPLICIT Result(acceptance),
 *       transfer-syntax-name             [1] IMPLICIT Transfer-syntax-name },
 *     user-data                            CHOICE {
 *       fully-encoded-data [APPLICATION 1] IMPLICIT SEQUENCE SIZE(1) OF SEQUENCE {
 *         transfer-syntax-name               Transfer-syntax-name OPTIONAL,
 *         presentation-context-identifier    Presentation-context-identifier,
 *         presentation-data-values           CHOICE {
 *           single-ASN1-type              [0]  ABSTRACT-SYNTAX.&Type(AARE-apdu{{Protocols}}
 *   )}}}}}
 * ```
 *
 * @class
 */
export class OsiBindResult {
    constructor(
        /**
         * @summary `mode_selector`.
         * @public
         * @readonly
         */
        readonly mode_selector: OsiBindResult_mode_selector,
        /**
         * @summary `normal_mode_parameters`.
         * @public
         * @readonly
         */
        readonly normal_mode_parameters: OsiBindResult_normal_mode_parameters
    ) {}

    /**
     * @summary Restructures an object into a OsiBindResult
     * @description
     *
     * This takes an `object` and converts it to a `OsiBindResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBindResult`.
     * @returns {OsiBindResult}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof OsiBindResult]: OsiBindResult[_K] }>
    ): OsiBindResult {
        return new OsiBindResult(_o.mode_selector, _o.normal_mode_parameters);
    }
}
/* END_OF_SYMBOL_DEFINITION OsiBindResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OsiBindResult */
/**
 * @summary The Leading Root Component Types of OsiBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBindResult: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OsiBindResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OsiBindResult */
/**
 * @summary The Trailing Root Component Types of OsiBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBindResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OsiBindResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OsiBindResult */
/**
 * @summary The Extension Addition Component Types of OsiBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBindResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OsiBindResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiBindResult */
let _cached_decoder_for_OsiBindResult: $.ASN1Decoder<
    OsiBindResult
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiBindResult */

/* START_OF_SYMBOL_DEFINITION _decode_OsiBindResult */
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindResult} The decoded data structure.
 */
export function _decode_OsiBindResult(el: _Element) {
    if (!_cached_decoder_for_OsiBindResult) {
        _cached_decoder_for_OsiBindResult = function (
            el: _Element
        ): OsiBindResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let mode_selector!: OsiBindResult_mode_selector;
            let normal_mode_parameters!: OsiBindResult_normal_mode_parameters;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "mode-selector": (_el: _Element): void => {
                    mode_selector = $._decode_explicit<
                        OsiBindResult_mode_selector
                    >(() => _decode_OsiBindResult_mode_selector)(_el);
                },
                "normal-mode-parameters": (_el: _Element): void => {
                    normal_mode_parameters = $._decode_explicit<
                        OsiBindResult_normal_mode_parameters
                    >(() => _decode_OsiBindResult_normal_mode_parameters)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindResult,
                _extension_additions_list_spec_for_OsiBindResult,
                _root_component_type_list_2_spec_for_OsiBindResult,
                undefined
            );
            return new OsiBindResult /* SET_CONSTRUCTOR_CALL */(
                mode_selector,
                normal_mode_parameters
            );
        };
    }
    return _cached_decoder_for_OsiBindResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OsiBindResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiBindResult */
let _cached_encoder_for_OsiBindResult: $.ASN1Encoder<
    OsiBindResult
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiBindResult */

/* START_OF_SYMBOL_DEFINITION _encode_OsiBindResult */
/**
 * @summary Encodes a(n) OsiBindResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindResult, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindResult(
    value: OsiBindResult,
    elGetter: $.ASN1Encoder<OsiBindResult>
) {
    if (!_cached_encoder_for_OsiBindResult) {
        _cached_encoder_for_OsiBindResult = function (
            value: OsiBindResult,
            elGetter: $.ASN1Encoder<OsiBindResult>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_OsiBindResult_mode_selector,
                            $.BER
                        )(value.mode_selector, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => _encode_OsiBindResult_normal_mode_parameters,
                            $.BER
                        )(value.normal_mode_parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OsiBindResult */

/* eslint-enable */
