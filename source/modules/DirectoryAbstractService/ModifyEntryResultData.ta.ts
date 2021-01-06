/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    EntryInformation,
    _decode_EntryInformation,
    _encode_EntryInformation,
} from "../DirectoryAbstractService/EntryInformation.ta";
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
    EntryInformation,
    _decode_EntryInformation,
    _encode_EntryInformation,
} from "../DirectoryAbstractService/EntryInformation.ta";
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

/* START_OF_SYMBOL_DEFINITION ModifyEntryResultData */
/**
 * @summary ModifyEntryResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyEntryResultData ::= SEQUENCE {
 *   entry    [0]  EntryInformation OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }
 * ```
 *
 * @class
 */
export class ModifyEntryResultData {
    constructor(
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: OPTIONAL<EntryInformation>,
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
        readonly securityParameters: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a ModifyEntryResultData
     * @description
     *
     * This takes an `object` and converts it to a `ModifyEntryResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyEntryResultData`.
     * @returns {ModifyEntryResultData}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ModifyEntryResultData]: ModifyEntryResultData[_K] }
        >
    ): ModifyEntryResultData {
        return new ModifyEntryResultData(
            _o.entry,
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
/* END_OF_SYMBOL_DEFINITION ModifyEntryResultData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyEntryResultData */
/**
 * @summary The Leading Root Component Types of ModifyEntryResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyEntryResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "entry",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyEntryResultData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyEntryResultData */
/**
 * @summary The Trailing Root Component Types of ModifyEntryResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyEntryResultData: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyEntryResultData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyEntryResultData */
/**
 * @summary The Extension Addition Component Types of ModifyEntryResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyEntryResultData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyEntryResultData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyEntryResultData */
let _cached_decoder_for_ModifyEntryResultData: $.ASN1Decoder<ModifyEntryResultData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyEntryResultData */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyEntryResultData */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyEntryResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyEntryResultData} The decoded data structure.
 */
export function _decode_ModifyEntryResultData(el: _Element) {
    if (!_cached_decoder_for_ModifyEntryResultData) {
        _cached_decoder_for_ModifyEntryResultData = function (
            el: _Element
        ): ModifyEntryResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let entry: OPTIONAL<EntryInformation>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                ModifyEntryResultData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                entry: (_el: _Element): void => {
                    entry = $._decode_explicit<EntryInformation>(
                        () => _decode_EntryInformation
                    )(_el);
                },
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
                _root_component_type_list_1_spec_for_ModifyEntryResultData,
                _extension_additions_list_spec_for_ModifyEntryResultData,
                _root_component_type_list_2_spec_for_ModifyEntryResultData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ModifyEntryResultData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ entry,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ModifyEntryResultData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyEntryResultData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyEntryResultData */
let _cached_encoder_for_ModifyEntryResultData: $.ASN1Encoder<ModifyEntryResultData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyEntryResultData */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyEntryResultData */
/**
 * @summary Encodes a(n) ModifyEntryResultData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyEntryResultData, encoded as an ASN.1 Element.
 */
export function _encode_ModifyEntryResultData(
    value: ModifyEntryResultData,
    elGetter: $.ASN1Encoder<ModifyEntryResultData>
) {
    if (!_cached_encoder_for_ModifyEntryResultData) {
        _cached_encoder_for_ModifyEntryResultData = function (
            value: ModifyEntryResultData,
            elGetter: $.ASN1Encoder<ModifyEntryResultData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.entry === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_EntryInformation,
                                      $.BER
                                  )(value.entry, $.BER),
                        ],
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
                                ModifyEntryResultData._default_value_for_aliasDereferenced
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
    return _cached_encoder_for_ModifyEntryResultData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyEntryResultData */

/* eslint-enable */
