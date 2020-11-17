/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AccessPointInformation,
    _decode_AccessPointInformation,
    _encode_AccessPointInformation,
} from "../DistributedOperations/AccessPointInformation.ta";
import {
    Exclusions,
    _decode_Exclusions,
    _encode_Exclusions,
} from "../DistributedOperations/Exclusions.ta";
import {
    OperationProgress,
    _decode_OperationProgress,
    _encode_OperationProgress,
} from "../DistributedOperations/OperationProgress.ta";
import {
    ReferenceType,
    _decode_ReferenceType,
    _encode_ReferenceType,
    _enum_for_ReferenceType,
} from "../DistributedOperations/ReferenceType.ta";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    AccessPointInformation,
    _decode_AccessPointInformation,
    _encode_AccessPointInformation,
} from "../DistributedOperations/AccessPointInformation.ta";
export {
    Exclusions,
    _decode_Exclusions,
    _encode_Exclusions,
} from "../DistributedOperations/Exclusions.ta";
export {
    OperationProgress,
    _decode_OperationProgress,
    _encode_OperationProgress,
} from "../DistributedOperations/OperationProgress.ta";
export {
    cross /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ditBridge /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    immediateSuperior /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    master /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    nonSpecificSubordinate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ReferenceType,
    ReferenceType_cross /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ReferenceType_ditBridge /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ReferenceType_immediateSuperior /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ReferenceType_master /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ReferenceType_nonSpecificSubordinate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ReferenceType_self /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ReferenceType_subordinate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ReferenceType_superior /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ReferenceType_supplier /* IMPORTED_LONG_ENUMERATION_ITEM */,
    self /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    subordinate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    superior /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    supplier /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ReferenceType,
    _encode_ReferenceType,
    _enum_for_ReferenceType,
} from "../DistributedOperations/ReferenceType.ta";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";

/* START_OF_SYMBOL_DEFINITION ContinuationReference */
/**
 * @summary ContinuationReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContinuationReference ::= SET {
 *   targetObject         [0]  Name,
 *   aliasedRDNs          [1]  INTEGER OPTIONAL, -- only present in first edition systems
 *   operationProgress    [2]  OperationProgress,
 *   rdnsResolved         [3]  INTEGER OPTIONAL,
 *   referenceType        [4]  ReferenceType,
 *   accessPoints         [5]  SET OF AccessPointInformation,
 *   entryOnly            [6]  BOOLEAN DEFAULT FALSE,
 *   exclusions           [7]  Exclusions OPTIONAL,
 *   returnToDUA          [8]  BOOLEAN DEFAULT FALSE,
 *   nameResolveOnMaster  [9]  BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class ContinuationReference {
    constructor(
        /**
         * @summary `targetObject`.
         * @public
         * @readonly
         */
        readonly targetObject: Name,
        /**
         * @summary `aliasedRDNs`.
         * @public
         * @readonly
         */
        readonly aliasedRDNs: OPTIONAL<INTEGER>,
        /**
         * @summary `operationProgress`.
         * @public
         * @readonly
         */
        readonly operationProgress: OperationProgress,
        /**
         * @summary `rdnsResolved`.
         * @public
         * @readonly
         */
        readonly rdnsResolved: OPTIONAL<INTEGER>,
        /**
         * @summary `referenceType`.
         * @public
         * @readonly
         */
        readonly referenceType: ReferenceType,
        /**
         * @summary `accessPoints`.
         * @public
         * @readonly
         */
        readonly accessPoints: AccessPointInformation[],
        /**
         * @summary `entryOnly`.
         * @public
         * @readonly
         */
        readonly entryOnly: OPTIONAL<BOOLEAN>,
        /**
         * @summary `exclusions`.
         * @public
         * @readonly
         */
        readonly exclusions: OPTIONAL<Exclusions>,
        /**
         * @summary `returnToDUA`.
         * @public
         * @readonly
         */
        readonly returnToDUA: OPTIONAL<BOOLEAN>,
        /**
         * @summary `nameResolveOnMaster`.
         * @public
         * @readonly
         */
        readonly nameResolveOnMaster: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContinuationReference
     * @description
     *
     * This takes an `object` and converts it to a `ContinuationReference`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContinuationReference`.
     * @returns {ContinuationReference}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ContinuationReference]: ContinuationReference[_K] }
        >
    ): ContinuationReference {
        return new ContinuationReference(
            _o.targetObject,
            _o.aliasedRDNs,
            _o.operationProgress,
            _o.rdnsResolved,
            _o.referenceType,
            _o.accessPoints,
            _o.entryOnly,
            _o.exclusions,
            _o.returnToDUA,
            _o.nameResolveOnMaster,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `entryOnly`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_entryOnly() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `returnToDUA`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_returnToDUA() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `nameResolveOnMaster`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    /**
     * @summary The enum used as the type of the component `referenceType`
     * @public
     * @static
     */

    public static _enum_for_referenceType = _enum_for_ReferenceType;
}
/* END_OF_SYMBOL_DEFINITION ContinuationReference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ContinuationReference */
/**
 * @summary The Leading Root Component Types of ContinuationReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContinuationReference: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "targetObject",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasedRDNs",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "operationProgress",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "rdnsResolved",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "referenceType",
        false,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "accessPoints",
        false,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entryOnly",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "exclusions",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "returnToDUA",
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nameResolveOnMaster",
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ContinuationReference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ContinuationReference */
/**
 * @summary The Trailing Root Component Types of ContinuationReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContinuationReference: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ContinuationReference */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ContinuationReference */
/**
 * @summary The Extension Addition Component Types of ContinuationReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContinuationReference: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ContinuationReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContinuationReference */
let _cached_decoder_for_ContinuationReference: $.ASN1Decoder<
    ContinuationReference
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContinuationReference */

/* START_OF_SYMBOL_DEFINITION _decode_ContinuationReference */
/**
 * @summary Decodes an ASN.1 element into a(n) ContinuationReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContinuationReference} The decoded data structure.
 */
export function _decode_ContinuationReference(el: _Element) {
    if (!_cached_decoder_for_ContinuationReference) {
        _cached_decoder_for_ContinuationReference = function (
            el: _Element
        ): ContinuationReference {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let targetObject!: Name;
            let aliasedRDNs: OPTIONAL<INTEGER>;
            let operationProgress!: OperationProgress;
            let rdnsResolved: OPTIONAL<INTEGER>;
            let referenceType!: ReferenceType;
            let accessPoints!: AccessPointInformation[];
            let entryOnly: OPTIONAL<BOOLEAN> =
                ContinuationReference._default_value_for_entryOnly;
            let exclusions: OPTIONAL<Exclusions>;
            let returnToDUA: OPTIONAL<BOOLEAN> =
                ContinuationReference._default_value_for_returnToDUA;
            let nameResolveOnMaster: OPTIONAL<BOOLEAN> =
                ContinuationReference._default_value_for_nameResolveOnMaster;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                targetObject: (_el: _Element): void => {
                    targetObject = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                aliasedRDNs: (_el: _Element): void => {
                    aliasedRDNs = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                operationProgress: (_el: _Element): void => {
                    operationProgress = $._decode_explicit<OperationProgress>(
                        () => _decode_OperationProgress
                    )(_el);
                },
                rdnsResolved: (_el: _Element): void => {
                    rdnsResolved = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                referenceType: (_el: _Element): void => {
                    referenceType = $._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                accessPoints: (_el: _Element): void => {
                    accessPoints = $._decode_explicit<AccessPointInformation[]>(
                        () =>
                            $._decodeSetOf<AccessPointInformation>(
                                () => _decode_AccessPointInformation
                            )
                    )(_el);
                },
                entryOnly: (_el: _Element): void => {
                    entryOnly = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: _Element): void => {
                    exclusions = $._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                returnToDUA: (_el: _Element): void => {
                    returnToDUA = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                nameResolveOnMaster: (_el: _Element): void => {
                    nameResolveOnMaster = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContinuationReference,
                _extension_additions_list_spec_for_ContinuationReference,
                _root_component_type_list_2_spec_for_ContinuationReference,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ContinuationReference /* SET_CONSTRUCTOR_CALL */(
                targetObject,
                aliasedRDNs,
                operationProgress,
                rdnsResolved,
                referenceType,
                accessPoints,
                entryOnly,
                exclusions,
                returnToDUA,
                nameResolveOnMaster,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ContinuationReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContinuationReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContinuationReference */
let _cached_encoder_for_ContinuationReference: $.ASN1Encoder<
    ContinuationReference
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContinuationReference */

/* START_OF_SYMBOL_DEFINITION _encode_ContinuationReference */
/**
 * @summary Encodes a(n) ContinuationReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContinuationReference, encoded as an ASN.1 Element.
 */
export function _encode_ContinuationReference(
    value: ContinuationReference,
    elGetter: $.ASN1Encoder<ContinuationReference>
) {
    if (!_cached_encoder_for_ContinuationReference) {
        _cached_encoder_for_ContinuationReference = function (
            value: ContinuationReference,
            elGetter: $.ASN1Encoder<ContinuationReference>
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
                            )(value.targetObject, $.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.aliasedRDNs, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => _encode_OperationProgress,
                                $.BER
                            )(value.operationProgress, $.BER),
                            /* IF_ABSENT  */ value.rdnsResolved === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.rdnsResolved, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                4,
                                () => _encode_ReferenceType,
                                $.BER
                            )(value.referenceType, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                5,
                                () =>
                                    $._encodeSetOf<AccessPointInformation>(
                                        () => _encode_AccessPointInformation,
                                        $.BER
                                    ),
                                $.BER
                            )(value.accessPoints, $.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            $.deepEq(
                                value.entryOnly,
                                ContinuationReference._default_value_for_entryOnly
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.entryOnly, $.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_Exclusions,
                                      $.BER
                                  )(value.exclusions, $.BER),
                            /* IF_DEFAULT */ value.returnToDUA === undefined ||
                            $.deepEq(
                                value.returnToDUA,
                                ContinuationReference._default_value_for_returnToDUA
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.returnToDUA, $.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            $.deepEq(
                                value.nameResolveOnMaster,
                                ContinuationReference._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.nameResolveOnMaster, $.BER),
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
    return _cached_encoder_for_ContinuationReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContinuationReference */

/* eslint-enable */
