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
    UpdateErrorData_attributeInfo_Item,
    _decode_UpdateErrorData_attributeInfo_Item,
    _encode_UpdateErrorData_attributeInfo_Item,
} from "../DirectoryAbstractService/UpdateErrorData-attributeInfo-Item.ta";
import {
    UpdateProblem,
    _decode_UpdateProblem,
    _encode_UpdateProblem,
} from "../DirectoryAbstractService/UpdateProblem.ta";
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
    CommonResults,
    _decode_CommonResults,
    _encode_CommonResults,
} from "../DirectoryAbstractService/CommonResults.ta";
export {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
export {
    UpdateErrorData_attributeInfo_Item,
    _decode_UpdateErrorData_attributeInfo_Item,
    _encode_UpdateErrorData_attributeInfo_Item,
} from "../DirectoryAbstractService/UpdateErrorData-attributeInfo-Item.ta";
export {
    affectsMultipleDSAs /* IMPORTED_SHORT_NAMED_INTEGER */,
    entryAlreadyExists /* IMPORTED_SHORT_NAMED_INTEGER */,
    familyRuleViolation /* IMPORTED_SHORT_NAMED_INTEGER */,
    hierarchyRuleViolation /* IMPORTED_SHORT_NAMED_INTEGER */,
    insufficientPasswordQuality /* IMPORTED_SHORT_NAMED_INTEGER */,
    namingViolation /* IMPORTED_SHORT_NAMED_INTEGER */,
    noPasswordSlot /* IMPORTED_SHORT_NAMED_INTEGER */,
    noSuchSuperior /* IMPORTED_SHORT_NAMED_INTEGER */,
    notAllowedOnNonLeaf /* IMPORTED_SHORT_NAMED_INTEGER */,
    notAllowedOnRDN /* IMPORTED_SHORT_NAMED_INTEGER */,
    notAncestor /* IMPORTED_SHORT_NAMED_INTEGER */,
    objectClassModificationProhibited /* IMPORTED_SHORT_NAMED_INTEGER */,
    objectClassViolation /* IMPORTED_SHORT_NAMED_INTEGER */,
    parentNotAncestor /* IMPORTED_SHORT_NAMED_INTEGER */,
    passwordInHistory /* IMPORTED_SHORT_NAMED_INTEGER */,
    UpdateProblem,
    UpdateProblem_affectsMultipleDSAs /* IMPORTED_LONG_NAMED_INTEGER */,
    UpdateProblem_entryAlreadyExists /* IMPORTED_LONG_NAMED_INTEGER */,
    UpdateProblem_familyRuleViolation /* IMPORTED_LONG_NAMED_INTEGER */,
    UpdateProblem_hierarchyRuleViolation /* IMPORTED_LONG_NAMED_INTEGER */,
    UpdateProblem_insufficientPasswordQuality /* IMPORTED_LONG_NAMED_INTEGER */,
    UpdateProblem_namingViolation /* IMPORTED_LONG_NAMED_INTEGER */,
    UpdateProblem_noPasswordSlot /* IMPORTED_LONG_NAMED_INTEGER */,
    UpdateProblem_noSuchSuperior /* IMPORTED_LONG_NAMED_INTEGER */,
    UpdateProblem_notAllowedOnNonLeaf /* IMPORTED_LONG_NAMED_INTEGER */,
    UpdateProblem_notAllowedOnRDN /* IMPORTED_LONG_NAMED_INTEGER */,
    UpdateProblem_notAncestor /* IMPORTED_LONG_NAMED_INTEGER */,
    UpdateProblem_objectClassModificationProhibited /* IMPORTED_LONG_NAMED_INTEGER */,
    UpdateProblem_objectClassViolation /* IMPORTED_LONG_NAMED_INTEGER */,
    UpdateProblem_parentNotAncestor /* IMPORTED_LONG_NAMED_INTEGER */,
    UpdateProblem_passwordInHistory /* IMPORTED_LONG_NAMED_INTEGER */,
    _decode_UpdateProblem,
    _encode_UpdateProblem,
} from "../DirectoryAbstractService/UpdateProblem.ta";
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

/* START_OF_SYMBOL_DEFINITION UpdateErrorData */
/**
 * @summary UpdateErrorData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateErrorData ::= SET {
 *   problem        [0]  UpdateProblem,
 *   attributeInfo  [1]  SET SIZE (1..MAX) OF CHOICE {
 *     attributeType       AttributeType,
 *     attribute           Attribute{{SupportedAttributes}},
 *     ... } OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF       CommonResults }
 * ```
 *
 * @class
 */
export class UpdateErrorData {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: UpdateProblem,
        /**
         * @summary `attributeInfo`.
         * @public
         * @readonly
         */
        readonly attributeInfo: OPTIONAL<UpdateErrorData_attributeInfo_Item[]>,
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
     * @summary Restructures an object into a UpdateErrorData
     * @description
     *
     * This takes an `object` and converts it to a `UpdateErrorData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateErrorData`.
     * @returns {UpdateErrorData}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UpdateErrorData]: UpdateErrorData[_K] }>
    ): UpdateErrorData {
        return new UpdateErrorData(
            _o.problem,
            _o.attributeInfo,
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
/* END_OF_SYMBOL_DEFINITION UpdateErrorData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UpdateErrorData */
/**
 * @summary The Leading Root Component Types of UpdateErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UpdateErrorData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "problem",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeInfo",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UpdateErrorData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UpdateErrorData */
/**
 * @summary The Trailing Root Component Types of UpdateErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UpdateErrorData: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UpdateErrorData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UpdateErrorData */
/**
 * @summary The Extension Addition Component Types of UpdateErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UpdateErrorData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UpdateErrorData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UpdateErrorData */
let _cached_decoder_for_UpdateErrorData: $.ASN1Decoder<UpdateErrorData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UpdateErrorData */

/* START_OF_SYMBOL_DEFINITION _decode_UpdateErrorData */
/**
 * @summary Decodes an ASN.1 element into a(n) UpdateErrorData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateErrorData} The decoded data structure.
 */
export function _decode_UpdateErrorData(el: _Element) {
    if (!_cached_decoder_for_UpdateErrorData) {
        _cached_decoder_for_UpdateErrorData = function (
            el: _Element
        ): UpdateErrorData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: UpdateProblem;
            let attributeInfo: OPTIONAL<UpdateErrorData_attributeInfo_Item[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                UpdateErrorData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<UpdateProblem>(
                        () => _decode_UpdateProblem
                    )(_el);
                },
                attributeInfo: (_el: _Element): void => {
                    attributeInfo = $._decode_explicit<
                        UpdateErrorData_attributeInfo_Item[]
                    >(() =>
                        $._decodeSetOf<UpdateErrorData_attributeInfo_Item>(
                            () => _decode_UpdateErrorData_attributeInfo_Item
                        )
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
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UpdateErrorData,
                _extension_additions_list_spec_for_UpdateErrorData,
                _root_component_type_list_2_spec_for_UpdateErrorData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new UpdateErrorData(
                /* SET_CONSTRUCTOR_CALL */ problem,
                attributeInfo,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_UpdateErrorData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UpdateErrorData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UpdateErrorData */
let _cached_encoder_for_UpdateErrorData: $.ASN1Encoder<UpdateErrorData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UpdateErrorData */

/* START_OF_SYMBOL_DEFINITION _encode_UpdateErrorData */
/**
 * @summary Encodes a(n) UpdateErrorData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateErrorData, encoded as an ASN.1 Element.
 */
export function _encode_UpdateErrorData(
    value: UpdateErrorData,
    elGetter: $.ASN1Encoder<UpdateErrorData>
) {
    if (!_cached_encoder_for_UpdateErrorData) {
        _cached_encoder_for_UpdateErrorData = function (
            value: UpdateErrorData,
            elGetter: $.ASN1Encoder<UpdateErrorData>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_UpdateProblem,
                                $.BER
                            )(value.problem, $.BER),
                            /* IF_ABSENT  */ value.attributeInfo === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<UpdateErrorData_attributeInfo_Item>(
                                              () =>
                                                  _encode_UpdateErrorData_attributeInfo_Item,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.attributeInfo, $.BER),
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
                                UpdateErrorData._default_value_for_aliasDereferenced
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
    return _cached_encoder_for_UpdateErrorData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UpdateErrorData */

/* eslint-enable */
