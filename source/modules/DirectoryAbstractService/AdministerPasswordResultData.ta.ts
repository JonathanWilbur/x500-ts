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
    CommonResultsSeq,
    _decode_CommonResultsSeq,
    _encode_CommonResultsSeq,
} from "../DirectoryAbstractService/CommonResultsSeq.ta";
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

/* START_OF_SYMBOL_DEFINITION AdministerPasswordResultData */
/**
 * @summary AdministerPasswordResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdministerPasswordResultData ::= SEQUENCE {
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }
 * ```
 *
 * @class
 */
export class AdministerPasswordResultData {
    constructor(
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<
            SecurityParameters
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<
            DistinguishedName
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<
            BOOLEAN
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a AdministerPasswordResultData
     * @description
     *
     * This takes an `object` and converts it to a `AdministerPasswordResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AdministerPasswordResultData`.
     * @returns {AdministerPasswordResultData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AdministerPasswordResultData]: AdministerPasswordResultData[_K];
            }
        >
    ): AdministerPasswordResultData {
        return new AdministerPasswordResultData(
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
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
/* END_OF_SYMBOL_DEFINITION AdministerPasswordResultData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AdministerPasswordResultData */
/**
 * @summary The Leading Root Component Types of AdministerPasswordResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AdministerPasswordResultData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AdministerPasswordResultData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AdministerPasswordResultData */
/**
 * @summary The Trailing Root Component Types of AdministerPasswordResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AdministerPasswordResultData: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AdministerPasswordResultData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AdministerPasswordResultData */
/**
 * @summary The Extension Addition Component Types of AdministerPasswordResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AdministerPasswordResultData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AdministerPasswordResultData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministerPasswordResultData */
let _cached_decoder_for_AdministerPasswordResultData: $.ASN1Decoder<
    AdministerPasswordResultData
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministerPasswordResultData */

/* START_OF_SYMBOL_DEFINITION _decode_AdministerPasswordResultData */
/**
 * @summary Decodes an ASN.1 element into a(n) AdministerPasswordResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdministerPasswordResultData} The decoded data structure.
 */
export function _decode_AdministerPasswordResultData(el: _Element) {
    if (!_cached_decoder_for_AdministerPasswordResultData) {
        _cached_decoder_for_AdministerPasswordResultData = function (
            el: _Element
        ): AdministerPasswordResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                AdministerPasswordResultData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
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
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AdministerPasswordResultData,
                _extension_additions_list_spec_for_AdministerPasswordResultData,
                _root_component_type_list_2_spec_for_AdministerPasswordResultData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AdministerPasswordResultData /* SEQUENCE_CONSTRUCTOR_CALL */(
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_AdministerPasswordResultData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdministerPasswordResultData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministerPasswordResultData */
let _cached_encoder_for_AdministerPasswordResultData: $.ASN1Encoder<
    AdministerPasswordResultData
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministerPasswordResultData */

/* START_OF_SYMBOL_DEFINITION _encode_AdministerPasswordResultData */
/**
 * @summary Encodes a(n) AdministerPasswordResultData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdministerPasswordResultData, encoded as an ASN.1 Element.
 */
export function _encode_AdministerPasswordResultData(
    value: AdministerPasswordResultData,
    elGetter: $.ASN1Encoder<AdministerPasswordResultData>
) {
    if (!_cached_encoder_for_AdministerPasswordResultData) {
        _cached_encoder_for_AdministerPasswordResultData = function (
            value: AdministerPasswordResultData,
            elGetter: $.ASN1Encoder<AdministerPasswordResultData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
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
                                AdministerPasswordResultData._default_value_for_aliasDereferenced
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
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AdministerPasswordResultData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdministerPasswordResultData */

/* eslint-enable */
