/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeErrorData_problems_Item,
    _decode_AttributeErrorData_problems_Item,
    _encode_AttributeErrorData_problems_Item,
} from "../DirectoryAbstractService/AttributeErrorData-problems-Item.ta";
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
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    AttributeErrorData_problems_Item,
    _decode_AttributeErrorData_problems_Item,
    _encode_AttributeErrorData_problems_Item,
} from "../DirectoryAbstractService/AttributeErrorData-problems-Item.ta";
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
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";

/* START_OF_SYMBOL_DEFINITION AttributeErrorData */
/**
 * @summary AttributeErrorData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeErrorData ::= SET {
 *   object   [0]  Name,
 *   problems [1]  SET OF SEQUENCE {
 *     problem  [0]  AttributeProblem,
 *     type     [1]  AttributeType,
 *     value    [2]  AttributeValue OPTIONAL,
 *     ...},
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResults }
 * ```
 *
 * @class
 */
export class AttributeErrorData {
    constructor(
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: Name,
        /**
         * @summary `problems`.
         * @public
         * @readonly
         */
        readonly problems: AttributeErrorData_problems_Item[],
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
     * @summary Restructures an object into a AttributeErrorData
     * @description
     *
     * This takes an `object` and converts it to a `AttributeErrorData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeErrorData`.
     * @returns {AttributeErrorData}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof AttributeErrorData]: AttributeErrorData[_K] }
        >
    ): AttributeErrorData {
        return new AttributeErrorData(
            _o.object,
            _o.problems,
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
/* END_OF_SYMBOL_DEFINITION AttributeErrorData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeErrorData */
/**
 * @summary The Leading Root Component Types of AttributeErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeErrorData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "object",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "problems",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeErrorData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeErrorData */
/**
 * @summary The Trailing Root Component Types of AttributeErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeErrorData: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeErrorData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeErrorData */
/**
 * @summary The Extension Addition Component Types of AttributeErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeErrorData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeErrorData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeErrorData */
let _cached_decoder_for_AttributeErrorData: $.ASN1Decoder<AttributeErrorData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeErrorData */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeErrorData */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeErrorData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeErrorData} The decoded data structure.
 */
export function _decode_AttributeErrorData(el: _Element) {
    if (!_cached_decoder_for_AttributeErrorData) {
        _cached_decoder_for_AttributeErrorData = function (
            el: _Element
        ): AttributeErrorData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let object!: Name;
            let problems!: AttributeErrorData_problems_Item[];
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                AttributeErrorData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                object: (_el: _Element): void => {
                    object = $._decode_explicit<Name>(() => _decode_Name)(_el);
                },
                problems: (_el: _Element): void => {
                    problems = $._decode_explicit<
                        AttributeErrorData_problems_Item[]
                    >(() =>
                        $._decodeSetOf<AttributeErrorData_problems_Item>(
                            () => _decode_AttributeErrorData_problems_Item
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
                _root_component_type_list_1_spec_for_AttributeErrorData,
                _extension_additions_list_spec_for_AttributeErrorData,
                _root_component_type_list_2_spec_for_AttributeErrorData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeErrorData(
                /* SET_CONSTRUCTOR_CALL */ object,
                problems,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_AttributeErrorData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeErrorData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeErrorData */
let _cached_encoder_for_AttributeErrorData: $.ASN1Encoder<AttributeErrorData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeErrorData */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeErrorData */
/**
 * @summary Encodes a(n) AttributeErrorData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeErrorData, encoded as an ASN.1 Element.
 */
export function _encode_AttributeErrorData(
    value: AttributeErrorData,
    elGetter: $.ASN1Encoder<AttributeErrorData>
) {
    if (!_cached_encoder_for_AttributeErrorData) {
        _cached_encoder_for_AttributeErrorData = function (
            value: AttributeErrorData,
            elGetter: $.ASN1Encoder<AttributeErrorData>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_Name,
                                $.BER
                            )(value.object, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () =>
                                    $._encodeSetOf<AttributeErrorData_problems_Item>(
                                        () =>
                                            _encode_AttributeErrorData_problems_Item,
                                        $.BER
                                    ),
                                $.BER
                            )(value.problems, $.BER),
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
                                AttributeErrorData._default_value_for_aliasDereferenced
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
    return _cached_encoder_for_AttributeErrorData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeErrorData */

/* eslint-enable */
