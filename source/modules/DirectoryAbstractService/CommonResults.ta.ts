/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";

/* START_OF_SYMBOL_DEFINITION CommonResults */
/**
 * @summary CommonResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonResults ::= SET {
 *   securityParameters  [30]  SecurityParameters  OPTIONAL,
 *   performer           [29]  DistinguishedName   OPTIONAL,
 *   aliasDereferenced   [28]  BOOLEAN             DEFAULT FALSE,
 *   notification        [27]  SEQUENCE SIZE (1..MAX) OF Attribute
 *                             {{SupportedAttributes}} OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class CommonResults {
    constructor(
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters>,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<DistinguishedName>,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<BOOLEAN>,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommonResults
     * @description
     *
     * This takes an `object` and converts it to a `CommonResults`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonResults`.
     * @returns {CommonResults}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CommonResults]: CommonResults[_K] }>
    ): CommonResults {
        return new CommonResults(
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION CommonResults */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommonResults */
/**
 * @summary The Leading Root Component Types of CommonResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommonResults: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "performer",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 28),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notification",
        true,
        $.hasTag(_TagClass.context, 27),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommonResults */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommonResults */
/**
 * @summary The Trailing Root Component Types of CommonResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommonResults: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommonResults */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommonResults */
/**
 * @summary The Extension Addition Component Types of CommonResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommonResults: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommonResults */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonResults */
let _cached_decoder_for_CommonResults: $.ASN1Decoder<
    CommonResults
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonResults */

/* START_OF_SYMBOL_DEFINITION _decode_CommonResults */
/**
 * @summary Decodes an ASN.1 element into a(n) CommonResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonResults} The decoded data structure.
 */
export function _decode_CommonResults(el: _Element) {
    if (!_cached_decoder_for_CommonResults) {
        _cached_decoder_for_CommonResults = function (
            el: _Element
        ): CommonResults {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                CommonResults._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                performer: (_el: _Element): void => {
                    performer = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: _Element): void => {
                    aliasDereferenced = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                notification: (_el: _Element): void => {
                    notification = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSequenceOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonResults,
                _extension_additions_list_spec_for_CommonResults,
                _root_component_type_list_2_spec_for_CommonResults,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CommonResults /* SET_CONSTRUCTOR_CALL */(
                securityParameters,
                performer,
                aliasDereferenced,
                notification,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CommonResults(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommonResults */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonResults */
let _cached_encoder_for_CommonResults: $.ASN1Encoder<
    CommonResults
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonResults */

/* START_OF_SYMBOL_DEFINITION _encode_CommonResults */
/**
 * @summary Encodes a(n) CommonResults into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonResults, encoded as an ASN.1 Element.
 */
export function _encode_CommonResults(
    value: CommonResults,
    elGetter: $.ASN1Encoder<CommonResults>
) {
    if (!_cached_encoder_for_CommonResults) {
        _cached_encoder_for_CommonResults = function (
            value: CommonResults,
            elGetter: $.ASN1Encoder<CommonResults>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.performer, $.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                CommonResults._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.aliasDereferenced, $.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () =>
                                          $._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.notification, $.BER),
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
    return _cached_encoder_for_CommonResults(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommonResults */

/* eslint-enable */
