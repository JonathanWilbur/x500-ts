/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OBJECT_IDENTIFIER,
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
import {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta";
import {
    Validity,
    _decode_Validity,
    _encode_Validity,
} from "../OperationalBindingManagement/Validity.ta";
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
export { OpBindingSet } from "../OperationalBindingManagement/OpBindingSet.osa";
export { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca";
export {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta";
export {
    Validity,
    _decode_Validity,
    _encode_Validity,
} from "../OperationalBindingManagement/Validity.ta";

/* START_OF_SYMBOL_DEFINITION ModifyOperationalBindingResultData */
/**
 * @summary ModifyOperationalBindingResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyOperationalBindingResultData ::= SEQUENCE {
 *     newBindingID    OperationalBindingID,
 *     bindingType     OPERATIONAL-BINDING.&id({OpBindingSet}),
 *     newAgreement    OPERATIONAL-BINDING.&Agreement ({OpBindingSet}{@.bindingType}),
 *     valid           Validity OPTIONAL,
 *     ...,
 *     ...,
 *     COMPONENTS OF   CommonResultsSeq
 *     }
 * ```
 *
 * @class
 */
export class ModifyOperationalBindingResultData {
    constructor(
        /**
         * @summary `newBindingID`.
         * @public
         * @readonly
         */
        readonly newBindingID: OperationalBindingID,
        /**
         * @summary `bindingType`.
         * @public
         * @readonly
         */
        readonly bindingType: OBJECT_IDENTIFIER,
        /**
         * @summary `newAgreement`.
         * @public
         * @readonly
         */
        readonly newAgreement: _Element,
        /**
         * @summary `valid`.
         * @public
         * @readonly
         */
        readonly valid: OPTIONAL<Validity>,
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
     * @summary Restructures an object into a ModifyOperationalBindingResultData
     * @description
     *
     * This takes an `object` and converts it to a `ModifyOperationalBindingResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyOperationalBindingResultData`.
     * @returns {ModifyOperationalBindingResultData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ModifyOperationalBindingResultData]: ModifyOperationalBindingResultData[_K];
            }
        >
    ): ModifyOperationalBindingResultData {
        return new ModifyOperationalBindingResultData(
            _o.newBindingID,
            _o.bindingType,
            _o.newAgreement,
            _o.valid,
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
/* END_OF_SYMBOL_DEFINITION ModifyOperationalBindingResultData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyOperationalBindingResultData */
/**
 * @summary The Leading Root Component Types of ModifyOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyOperationalBindingResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "newBindingID",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "bindingType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "newAgreement",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "valid",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyOperationalBindingResultData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyOperationalBindingResultData */
/**
 * @summary The Trailing Root Component Types of ModifyOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyOperationalBindingResultData: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyOperationalBindingResultData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyOperationalBindingResultData */
/**
 * @summary The Extension Addition Component Types of ModifyOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyOperationalBindingResultData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyOperationalBindingResultData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyOperationalBindingResultData */
let _cached_decoder_for_ModifyOperationalBindingResultData: $.ASN1Decoder<ModifyOperationalBindingResultData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyOperationalBindingResultData */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyOperationalBindingResultData */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyOperationalBindingResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyOperationalBindingResultData} The decoded data structure.
 */
export function _decode_ModifyOperationalBindingResultData(el: _Element) {
    if (!_cached_decoder_for_ModifyOperationalBindingResultData) {
        _cached_decoder_for_ModifyOperationalBindingResultData = function (
            el: _Element
        ): ModifyOperationalBindingResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let newBindingID!: OperationalBindingID;
            let bindingType!: OBJECT_IDENTIFIER;
            let newAgreement!: _Element;
            let valid: OPTIONAL<Validity>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                ModifyOperationalBindingResultData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                newBindingID: (_el: _Element): void => {
                    newBindingID = _decode_OperationalBindingID(_el);
                },
                bindingType: (_el: _Element): void => {
                    bindingType = $._decodeObjectIdentifier(_el);
                },
                newAgreement: (_el: _Element): void => {
                    newAgreement = $._decodeAny(_el);
                },
                valid: (_el: _Element): void => {
                    valid = _decode_Validity(_el);
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
                _root_component_type_list_1_spec_for_ModifyOperationalBindingResultData,
                _extension_additions_list_spec_for_ModifyOperationalBindingResultData,
                _root_component_type_list_2_spec_for_ModifyOperationalBindingResultData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ModifyOperationalBindingResultData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ newBindingID,
                bindingType,
                newAgreement,
                valid,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ModifyOperationalBindingResultData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyOperationalBindingResultData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyOperationalBindingResultData */
let _cached_encoder_for_ModifyOperationalBindingResultData: $.ASN1Encoder<ModifyOperationalBindingResultData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyOperationalBindingResultData */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyOperationalBindingResultData */
/**
 * @summary Encodes a(n) ModifyOperationalBindingResultData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyOperationalBindingResultData, encoded as an ASN.1 Element.
 */
export function _encode_ModifyOperationalBindingResultData(
    value: ModifyOperationalBindingResultData,
    elGetter: $.ASN1Encoder<ModifyOperationalBindingResultData>
) {
    if (!_cached_encoder_for_ModifyOperationalBindingResultData) {
        _cached_encoder_for_ModifyOperationalBindingResultData = function (
            value: ModifyOperationalBindingResultData,
            elGetter: $.ASN1Encoder<ModifyOperationalBindingResultData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_OperationalBindingID(
                                value.newBindingID,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.bindingType,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(
                                value.newAgreement,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.valid === undefined
                                ? undefined
                                : _encode_Validity(value.valid, $.BER),
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
                                ModifyOperationalBindingResultData._default_value_for_aliasDereferenced
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
    return _cached_encoder_for_ModifyOperationalBindingResultData(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyOperationalBindingResultData */

/* eslint-enable */
