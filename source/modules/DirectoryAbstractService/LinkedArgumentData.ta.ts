/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    BOOLEAN,
    INTEGER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ContextSelection,
    _decode_ContextSelection,
    _encode_ContextSelection,
} from "../DirectoryAbstractService/ContextSelection.ta";
import {
    FamilyGrouping,
    FamilyGrouping_entryOnly /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_FamilyGrouping,
    _encode_FamilyGrouping,
    _enum_for_FamilyGrouping,
} from "../DirectoryAbstractService/FamilyGrouping.ta";
import {
    LinkId,
    _decode_LinkId,
    _encode_LinkId,
} from "../DirectoryAbstractService/LinkId.ta";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
import {
    ServiceControls,
    _decode_ServiceControls,
    _encode_ServiceControls,
} from "../DirectoryAbstractService/ServiceControls.ta";
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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
import {
    LDAPMessage,
    _decode_LDAPMessage,
    _encode_LDAPMessage,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPMessage.ta";
export {
    CommonArgumentsSeq,
    _decode_CommonArgumentsSeq,
    _encode_CommonArgumentsSeq,
} from "../DirectoryAbstractService/CommonArgumentsSeq.ta";
export {
    ContextSelection,
    _decode_ContextSelection,
    _encode_ContextSelection,
} from "../DirectoryAbstractService/ContextSelection.ta";
export {
    compoundEntry /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    entryOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    FamilyGrouping,
    FamilyGrouping_compoundEntry /* IMPORTED_LONG_ENUMERATION_ITEM */,
    FamilyGrouping_entryOnly /* IMPORTED_LONG_ENUMERATION_ITEM */,
    FamilyGrouping_multiStrand /* IMPORTED_LONG_ENUMERATION_ITEM */,
    FamilyGrouping_strands /* IMPORTED_LONG_ENUMERATION_ITEM */,
    multiStrand /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    strands /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_FamilyGrouping,
    _encode_FamilyGrouping,
    _enum_for_FamilyGrouping,
} from "../DirectoryAbstractService/FamilyGrouping.ta";
export {
    LinkId,
    _decode_LinkId,
    _encode_LinkId,
} from "../DirectoryAbstractService/LinkId.ta";
export {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
export {
    ServiceControls,
    _decode_ServiceControls,
    _encode_ServiceControls,
} from "../DirectoryAbstractService/ServiceControls.ta";
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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    LDAPMessage,
    _decode_LDAPMessage,
    _encode_LDAPMessage,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPMessage.ta";

/* START_OF_SYMBOL_DEFINITION LinkedArgumentData */
/**
 * @summary LinkedArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkedArgumentData ::= SEQUENCE {
 *   object         DistinguishedName,
 *   ldapMessage    LDAPMessage,
 *   linkId         LinkId,
 *   returnToClient BOOLEAN DEFAULT FALSE,
 *   ...,
 *   ...,
 *   COMPONENTS OF  CommonArgumentsSeq }
 * ```
 *
 * @class
 */
export class LinkedArgumentData {
    constructor(
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: DistinguishedName,
        /**
         * @summary `ldapMessage`.
         * @public
         * @readonly
         */
        readonly ldapMessage: LDAPMessage,
        /**
         * @summary `linkId`.
         * @public
         * @readonly
         */
        readonly linkId: LinkId,
        /**
         * @summary `returnToClient`.
         * @public
         * @readonly
         */
        readonly returnToClient: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `serviceControls`.
         * @public
         * @readonly
         */
        readonly serviceControls: OPTIONAL<ServiceControls> /* REPLICATED_COMPONENT */,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */,
        /**
         * @summary `requestor`.
         * @public
         * @readonly
         */
        readonly requestor: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */,
        /**
         * @summary `operationProgress`.
         * @public
         * @readonly
         */
        readonly operationProgress: OPTIONAL<OperationProgress> /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasedRDNs`.
         * @public
         * @readonly
         */
        readonly aliasedRDNs: OPTIONAL<INTEGER> /* REPLICATED_COMPONENT */,
        /**
         * @summary `criticalExtensions`.
         * @public
         * @readonly
         */
        readonly criticalExtensions: OPTIONAL<BIT_STRING> /* REPLICATED_COMPONENT */,
        /**
         * @summary `referenceType`.
         * @public
         * @readonly
         */
        readonly referenceType: OPTIONAL<ReferenceType> /* REPLICATED_COMPONENT */,
        /**
         * @summary `entryOnly`.
         * @public
         * @readonly
         */
        readonly entryOnly: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `exclusions`.
         * @public
         * @readonly
         */
        readonly exclusions: OPTIONAL<Exclusions> /* REPLICATED_COMPONENT */,
        /**
         * @summary `nameResolveOnMaster`.
         * @public
         * @readonly
         */
        readonly nameResolveOnMaster: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `operationContexts`.
         * @public
         * @readonly
         */
        readonly operationContexts: OPTIONAL<ContextSelection> /* REPLICATED_COMPONENT */,
        /**
         * @summary `familyGrouping`.
         * @public
         * @readonly
         */
        readonly familyGrouping: OPTIONAL<FamilyGrouping> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a LinkedArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `LinkedArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LinkedArgumentData`.
     * @returns {LinkedArgumentData}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof LinkedArgumentData]: LinkedArgumentData[_K] }
        >
    ): LinkedArgumentData {
        return new LinkedArgumentData(
            _o.object,
            _o.ldapMessage,
            _o.linkId,
            _o.returnToClient,
            _o._unrecognizedExtensionsList,
            _o.serviceControls,
            _o.securityParameters,
            _o.requestor,
            _o.operationProgress,
            _o.aliasedRDNs,
            _o.criticalExtensions,
            _o.referenceType,
            _o.entryOnly,
            _o.exclusions,
            _o.nameResolveOnMaster,
            _o.operationContexts,
            _o.familyGrouping
        );
    }

    /**
     * @summary Getter that returns the default value for `returnToClient`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_returnToClient() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `serviceControls`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_serviceControls() {
        return ServiceControls._from_object({});
    }
    /**
     * @summary Getter that returns the default value for `operationProgress`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_operationProgress() {
        return OperationProgress._from_object({
            nameResolutionPhase:
                OperationProgress._enum_for_nameResolutionPhase.notStarted,
        });
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
     * @summary Getter that returns the default value for `nameResolveOnMaster`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_nameResolveOnMaster() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `familyGrouping`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_familyGrouping() {
        return FamilyGrouping_entryOnly;
    }
    /**
     * @summary The enum used as the type of the component `referenceType`
     * @public
     * @static
     */

    public static _enum_for_referenceType = _enum_for_ReferenceType;
    /**
     * @summary The enum used as the type of the component `familyGrouping`
     * @public
     * @static
     */

    public static _enum_for_familyGrouping = _enum_for_FamilyGrouping;
}
/* END_OF_SYMBOL_DEFINITION LinkedArgumentData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LinkedArgumentData */
/**
 * @summary The Leading Root Component Types of LinkedArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LinkedArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "object",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "ldapMessage",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "linkId",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "returnToClient",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LinkedArgumentData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LinkedArgumentData */
/**
 * @summary The Trailing Root Component Types of LinkedArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LinkedArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "serviceControls",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "requestor",
        true,
        $.hasTag(_TagClass.context, 28),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "operationProgress",
        true,
        $.hasTag(_TagClass.context, 27),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasedRDNs",
        true,
        $.hasTag(_TagClass.context, 26),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "criticalExtensions",
        true,
        $.hasTag(_TagClass.context, 25),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "referenceType",
        true,
        $.hasTag(_TagClass.context, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entryOnly",
        true,
        $.hasTag(_TagClass.context, 23),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "exclusions",
        true,
        $.hasTag(_TagClass.context, 22),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nameResolveOnMaster",
        true,
        $.hasTag(_TagClass.context, 21),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "operationContexts",
        true,
        $.hasTag(_TagClass.context, 20),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "familyGrouping",
        true,
        $.hasTag(_TagClass.context, 19),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LinkedArgumentData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LinkedArgumentData */
/**
 * @summary The Extension Addition Component Types of LinkedArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LinkedArgumentData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LinkedArgumentData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkedArgumentData */
let _cached_decoder_for_LinkedArgumentData: $.ASN1Decoder<LinkedArgumentData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkedArgumentData */

/* START_OF_SYMBOL_DEFINITION _decode_LinkedArgumentData */
/**
 * @summary Decodes an ASN.1 element into a(n) LinkedArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LinkedArgumentData} The decoded data structure.
 */
export function _decode_LinkedArgumentData(el: _Element) {
    if (!_cached_decoder_for_LinkedArgumentData) {
        _cached_decoder_for_LinkedArgumentData = function (
            el: _Element
        ): LinkedArgumentData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let object!: DistinguishedName;
            let ldapMessage!: LDAPMessage;
            let linkId!: LinkId;
            let returnToClient: OPTIONAL<BOOLEAN> =
                LinkedArgumentData._default_value_for_returnToClient;
            let _unrecognizedExtensionsList: _Element[] = [];
            let serviceControls: OPTIONAL<ServiceControls> =
                LinkedArgumentData._default_value_for_serviceControls;
            let securityParameters: OPTIONAL<SecurityParameters>;
            let requestor: OPTIONAL<DistinguishedName>;
            let operationProgress: OPTIONAL<OperationProgress> =
                LinkedArgumentData._default_value_for_operationProgress;
            let aliasedRDNs: OPTIONAL<INTEGER>;
            let criticalExtensions: OPTIONAL<BIT_STRING>;
            let referenceType: OPTIONAL<ReferenceType>;
            let entryOnly: OPTIONAL<BOOLEAN> =
                LinkedArgumentData._default_value_for_entryOnly;
            let exclusions: OPTIONAL<Exclusions>;
            let nameResolveOnMaster: OPTIONAL<BOOLEAN> =
                LinkedArgumentData._default_value_for_nameResolveOnMaster;
            let operationContexts: OPTIONAL<ContextSelection>;
            let familyGrouping: OPTIONAL<FamilyGrouping> =
                LinkedArgumentData._default_value_for_familyGrouping;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                object: (_el: _Element): void => {
                    object = _decode_DistinguishedName(_el);
                },
                ldapMessage: (_el: _Element): void => {
                    ldapMessage = _decode_LDAPMessage(_el);
                },
                linkId: (_el: _Element): void => {
                    linkId = _decode_LinkId(_el);
                },
                returnToClient: (_el: _Element): void => {
                    returnToClient = $._decodeBoolean(_el);
                },
                serviceControls: (_el: _Element): void => {
                    serviceControls = $._decode_explicit<ServiceControls>(
                        () => _decode_ServiceControls
                    )(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                requestor: (_el: _Element): void => {
                    requestor = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: _Element): void => {
                    operationProgress = $._decode_explicit<OperationProgress>(
                        () => _decode_OperationProgress
                    )(_el);
                },
                aliasedRDNs: (_el: _Element): void => {
                    aliasedRDNs = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                criticalExtensions: (_el: _Element): void => {
                    criticalExtensions = $._decode_explicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
                referenceType: (_el: _Element): void => {
                    referenceType = $._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
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
                nameResolveOnMaster: (_el: _Element): void => {
                    nameResolveOnMaster = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                operationContexts: (_el: _Element): void => {
                    operationContexts = $._decode_explicit<ContextSelection>(
                        () => _decode_ContextSelection
                    )(_el);
                },
                familyGrouping: (_el: _Element): void => {
                    familyGrouping = $._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LinkedArgumentData,
                _extension_additions_list_spec_for_LinkedArgumentData,
                _root_component_type_list_2_spec_for_LinkedArgumentData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new LinkedArgumentData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ object,
                ldapMessage,
                linkId,
                returnToClient,
                _unrecognizedExtensionsList,
                serviceControls,
                securityParameters,
                requestor,
                operationProgress,
                aliasedRDNs,
                criticalExtensions,
                referenceType,
                entryOnly,
                exclusions,
                nameResolveOnMaster,
                operationContexts,
                familyGrouping
            );
        };
    }
    return _cached_decoder_for_LinkedArgumentData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LinkedArgumentData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkedArgumentData */
let _cached_encoder_for_LinkedArgumentData: $.ASN1Encoder<LinkedArgumentData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkedArgumentData */

/* START_OF_SYMBOL_DEFINITION _encode_LinkedArgumentData */
/**
 * @summary Encodes a(n) LinkedArgumentData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LinkedArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_LinkedArgumentData(
    value: LinkedArgumentData,
    elGetter: $.ASN1Encoder<LinkedArgumentData>
) {
    if (!_cached_encoder_for_LinkedArgumentData) {
        _cached_encoder_for_LinkedArgumentData = function (
            value: LinkedArgumentData,
            elGetter: $.ASN1Encoder<LinkedArgumentData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_DistinguishedName(
                                value.object,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_LDAPMessage(
                                value.ldapMessage,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_LinkId(
                                value.linkId,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.returnToClient ===
                                undefined ||
                            $.deepEq(
                                value.returnToClient,
                                LinkedArgumentData._default_value_for_returnToClient
                            )
                                ? undefined
                                : $._encodeBoolean(value.returnToClient, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            $.deepEq(
                                value.serviceControls,
                                LinkedArgumentData._default_value_for_serviceControls
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      30,
                                      () => _encode_ServiceControls,
                                      $.BER
                                  )(value.serviceControls, $.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_ABSENT  */ value.requestor === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.requestor, $.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            $.deepEq(
                                value.operationProgress,
                                LinkedArgumentData._default_value_for_operationProgress
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () => _encode_OperationProgress,
                                      $.BER
                                  )(value.operationProgress, $.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      26,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.aliasedRDNs, $.BER),
                            /* IF_ABSENT  */ value.criticalExtensions ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      25,
                                      () => $._encodeBitString,
                                      $.BER
                                  )(value.criticalExtensions, $.BER),
                            /* IF_ABSENT  */ value.referenceType === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      24,
                                      () => _encode_ReferenceType,
                                      $.BER
                                  )(value.referenceType, $.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            $.deepEq(
                                value.entryOnly,
                                LinkedArgumentData._default_value_for_entryOnly
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      23,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.entryOnly, $.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      22,
                                      () => _encode_Exclusions,
                                      $.BER
                                  )(value.exclusions, $.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            $.deepEq(
                                value.nameResolveOnMaster,
                                LinkedArgumentData._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      21,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.nameResolveOnMaster, $.BER),
                            /* IF_ABSENT  */ value.operationContexts ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      20,
                                      () => _encode_ContextSelection,
                                      $.BER
                                  )(value.operationContexts, $.BER),
                            /* IF_DEFAULT */ value.familyGrouping ===
                                undefined ||
                            $.deepEq(
                                value.familyGrouping,
                                LinkedArgumentData._default_value_for_familyGrouping
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      19,
                                      () => _encode_FamilyGrouping,
                                      $.BER
                                  )(value.familyGrouping, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LinkedArgumentData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LinkedArgumentData */

/* eslint-enable */
