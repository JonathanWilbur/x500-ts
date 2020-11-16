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
    AuthenticationLevel,
    _decode_AuthenticationLevel,
    _encode_AuthenticationLevel,
} from "../BasicAccessControl/AuthenticationLevel.ta";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
import {
    DomainInfo,
    _decode_DomainInfo,
    _encode_DomainInfo,
} from "../DistributedOperations/DomainInfo.ta";
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
    ReferenceType_superior /* IMPORTED_ENUMERATION_ITEM */,
    _decode_ReferenceType,
    _encode_ReferenceType,
    _enum_for_ReferenceType,
} from "../DistributedOperations/ReferenceType.ta";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DistributedOperations/Time.ta";
import {
    TraceInformation,
    _decode_TraceInformation,
    _encode_TraceInformation,
} from "../DistributedOperations/TraceInformation.ta";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
import {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../SelectedAttributeTypes/UniqueIdentifier.ta";
import {
    MRMapping,
    _decode_MRMapping,
    _encode_MRMapping,
} from "../ServiceAdministration/MRMapping.ta";
import {
    SearchRuleId,
    _decode_SearchRuleId,
    _encode_SearchRuleId,
} from "../ServiceAdministration/SearchRuleId.ta";
export {
    AuthenticationLevel,
    _decode_AuthenticationLevel,
    _encode_AuthenticationLevel,
} from "../BasicAccessControl/AuthenticationLevel.ta";
export {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
export {
    DomainInfo,
    _decode_DomainInfo,
    _encode_DomainInfo,
} from "../DistributedOperations/DomainInfo.ta";
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
    ReferenceType,
    ReferenceType_cross /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_ditBridge /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_immediateSuperior /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_master /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_nonSpecificSubordinate /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_self /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_subordinate /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_superior /* IMPORTED_ENUMERATION_ITEM */,
    ReferenceType_supplier /* IMPORTED_ENUMERATION_ITEM */,
    _decode_ReferenceType,
    _encode_ReferenceType,
    _enum_for_ReferenceType,
} from "../DistributedOperations/ReferenceType.ta";
export {
    Time,
    _decode_Time,
    _encode_Time,
} from "../DistributedOperations/Time.ta";
export {
    TraceInformation,
    _decode_TraceInformation,
    _encode_TraceInformation,
} from "../DistributedOperations/TraceInformation.ta";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../SelectedAttributeTypes/UniqueIdentifier.ta";
export {
    MRMapping,
    _decode_MRMapping,
    _encode_MRMapping,
} from "../ServiceAdministration/MRMapping.ta";
export {
    SearchRuleId,
    _decode_SearchRuleId,
    _encode_SearchRuleId,
} from "../ServiceAdministration/SearchRuleId.ta";

/* START_OF_SYMBOL_DEFINITION ChainingArguments */
/**
 * @summary ChainingArguments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChainingArguments ::= SET {
 *   originator                 [0]  DistinguishedName OPTIONAL,
 *   targetObject               [1]  DistinguishedName OPTIONAL,
 *   operationProgress          [2]  OperationProgress
 *                                DEFAULT {nameResolutionPhase notStarted},
 *   traceInformation           [3]  TraceInformation,
 *   aliasDereferenced          [4]  BOOLEAN DEFAULT FALSE,
 *   aliasedRDNs                [5]  INTEGER OPTIONAL,
 *   returnCrossRefs            [6]  BOOLEAN DEFAULT FALSE,
 *   referenceType              [7]  ReferenceType DEFAULT superior,
 *   info                       [8]  DomainInfo OPTIONAL,
 *   timeLimit                  [9]  Time OPTIONAL,
 *   securityParameters         [10] SecurityParameters DEFAULT {},
 *   entryOnly                  [11] BOOLEAN DEFAULT FALSE,
 *   uniqueIdentifier           [12] UniqueIdentifier OPTIONAL,
 *   authenticationLevel        [13] AuthenticationLevel OPTIONAL,
 *   exclusions                 [14] Exclusions OPTIONAL,
 *   excludeShadows             [15] BOOLEAN DEFAULT FALSE,
 *   nameResolveOnMaster        [16] BOOLEAN DEFAULT FALSE,
 *   operationIdentifier        [17] INTEGER OPTIONAL,
 *   searchRuleId               [18] SearchRuleId OPTIONAL,
 *   chainedRelaxation          [19] MRMapping OPTIONAL,
 *   relatedEntry               [20] INTEGER OPTIONAL,
 *   dspPaging                  [21] BOOLEAN DEFAULT FALSE,
 *   --                         [22] Not to be used
 *   --                         [23] Not to be used
 *   excludeWriteableCopies     [24] BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class ChainingArguments {
    constructor(
        /**
         * @summary `originator`.
         * @public
         * @readonly
         */
        readonly originator: OPTIONAL<DistinguishedName>,
        /**
         * @summary `targetObject`.
         * @public
         * @readonly
         */
        readonly targetObject: OPTIONAL<DistinguishedName>,
        /**
         * @summary `operationProgress`.
         * @public
         * @readonly
         */
        readonly operationProgress: OPTIONAL<OperationProgress>,
        /**
         * @summary `traceInformation`.
         * @public
         * @readonly
         */
        readonly traceInformation: TraceInformation,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<BOOLEAN>,
        /**
         * @summary `aliasedRDNs`.
         * @public
         * @readonly
         */
        readonly aliasedRDNs: OPTIONAL<INTEGER>,
        /**
         * @summary `returnCrossRefs`.
         * @public
         * @readonly
         */
        readonly returnCrossRefs: OPTIONAL<BOOLEAN>,
        /**
         * @summary `referenceType`.
         * @public
         * @readonly
         */
        readonly referenceType: OPTIONAL<ReferenceType>,
        /**
         * @summary `info`.
         * @public
         * @readonly
         */
        readonly info: OPTIONAL<DomainInfo>,
        /**
         * @summary `timeLimit`.
         * @public
         * @readonly
         */
        readonly timeLimit: OPTIONAL<Time>,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters>,
        /**
         * @summary `entryOnly`.
         * @public
         * @readonly
         */
        readonly entryOnly: OPTIONAL<BOOLEAN>,
        /**
         * @summary `uniqueIdentifier`.
         * @public
         * @readonly
         */
        readonly uniqueIdentifier: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary `authenticationLevel`.
         * @public
         * @readonly
         */
        readonly authenticationLevel: OPTIONAL<AuthenticationLevel>,
        /**
         * @summary `exclusions`.
         * @public
         * @readonly
         */
        readonly exclusions: OPTIONAL<Exclusions>,
        /**
         * @summary `excludeShadows`.
         * @public
         * @readonly
         */
        readonly excludeShadows: OPTIONAL<BOOLEAN>,
        /**
         * @summary `nameResolveOnMaster`.
         * @public
         * @readonly
         */
        readonly nameResolveOnMaster: OPTIONAL<BOOLEAN>,
        /**
         * @summary `operationIdentifier`.
         * @public
         * @readonly
         */
        readonly operationIdentifier: OPTIONAL<INTEGER>,
        /**
         * @summary `searchRuleId`.
         * @public
         * @readonly
         */
        readonly searchRuleId: OPTIONAL<SearchRuleId>,
        /**
         * @summary `chainedRelaxation`.
         * @public
         * @readonly
         */
        readonly chainedRelaxation: OPTIONAL<MRMapping>,
        /**
         * @summary `relatedEntry`.
         * @public
         * @readonly
         */
        readonly relatedEntry: OPTIONAL<INTEGER>,
        /**
         * @summary `dspPaging`.
         * @public
         * @readonly
         */
        readonly dspPaging: OPTIONAL<BOOLEAN>,
        /**
         * @summary `excludeWriteableCopies`.
         * @public
         * @readonly
         */
        readonly excludeWriteableCopies: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ChainingArguments
     * @description
     *
     * This takes an `object` and converts it to a `ChainingArguments`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChainingArguments`.
     * @returns {ChainingArguments}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ChainingArguments]: ChainingArguments[_K] }>
    ): ChainingArguments {
        return new ChainingArguments(
            _o.originator,
            _o.targetObject,
            _o.operationProgress,
            _o.traceInformation,
            _o.aliasDereferenced,
            _o.aliasedRDNs,
            _o.returnCrossRefs,
            _o.referenceType,
            _o.info,
            _o.timeLimit,
            _o.securityParameters,
            _o.entryOnly,
            _o.uniqueIdentifier,
            _o.authenticationLevel,
            _o.exclusions,
            _o.excludeShadows,
            _o.nameResolveOnMaster,
            _o.operationIdentifier,
            _o.searchRuleId,
            _o.chainedRelaxation,
            _o.relatedEntry,
            _o.dspPaging,
            _o.excludeWriteableCopies,
            _o._unrecognizedExtensionsList
        );
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
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `returnCrossRefs`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_returnCrossRefs() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `referenceType`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_referenceType() {
        return ReferenceType_superior;
    }
    /**
     * @summary Getter that returns the default value for `securityParameters`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_securityParameters() {
        return SecurityParameters._from_object({});
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
     * @summary Getter that returns the default value for `excludeShadows`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_excludeShadows() {
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
     * @summary Getter that returns the default value for `dspPaging`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_dspPaging() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `excludeWriteableCopies`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_excludeWriteableCopies() {
        return false;
    }
    /**
     * @summary The enum used as the type of the component `referenceType`
     * @public
     * @static
     */

    public static _enum_for_referenceType = _enum_for_ReferenceType;
}
/* END_OF_SYMBOL_DEFINITION ChainingArguments */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ChainingArguments */
/**
 * @summary The Leading Root Component Types of ChainingArguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ChainingArguments: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "originator",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "targetObject",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "operationProgress",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "traceInformation",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasedRDNs",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "returnCrossRefs",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "referenceType",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "info",
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeLimit",
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entryOnly",
        true,
        $.hasTag(_TagClass.context, 11),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "uniqueIdentifier",
        true,
        $.hasTag(_TagClass.context, 12),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "authenticationLevel",
        true,
        $.hasTag(_TagClass.context, 13),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "exclusions",
        true,
        $.hasTag(_TagClass.context, 14),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "excludeShadows",
        true,
        $.hasTag(_TagClass.context, 15),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nameResolveOnMaster",
        true,
        $.hasTag(_TagClass.context, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "operationIdentifier",
        true,
        $.hasTag(_TagClass.context, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "searchRuleId",
        true,
        $.hasTag(_TagClass.context, 18),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "chainedRelaxation",
        true,
        $.hasTag(_TagClass.context, 19),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "relatedEntry",
        true,
        $.hasTag(_TagClass.context, 20),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "dspPaging",
        true,
        $.hasTag(_TagClass.context, 21),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "excludeWriteableCopies",
        true,
        $.hasTag(_TagClass.context, 24),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ChainingArguments */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ChainingArguments */
/**
 * @summary The Trailing Root Component Types of ChainingArguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ChainingArguments: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ChainingArguments */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ChainingArguments */
/**
 * @summary The Extension Addition Component Types of ChainingArguments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ChainingArguments: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ChainingArguments */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChainingArguments */
let _cached_decoder_for_ChainingArguments: $.ASN1Decoder<
    ChainingArguments
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChainingArguments */

/* START_OF_SYMBOL_DEFINITION _decode_ChainingArguments */
/**
 * @summary Decodes an ASN.1 element into a(n) ChainingArguments
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChainingArguments} The decoded data structure.
 */
export function _decode_ChainingArguments(el: _Element) {
    if (!_cached_decoder_for_ChainingArguments) {
        _cached_decoder_for_ChainingArguments = function (
            el: _Element
        ): ChainingArguments {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let originator: OPTIONAL<DistinguishedName>;
            let targetObject: OPTIONAL<DistinguishedName>;
            let operationProgress: OPTIONAL<OperationProgress> =
                ChainingArguments._default_value_for_operationProgress;
            let traceInformation!: TraceInformation;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                ChainingArguments._default_value_for_aliasDereferenced;
            let aliasedRDNs: OPTIONAL<INTEGER>;
            let returnCrossRefs: OPTIONAL<BOOLEAN> =
                ChainingArguments._default_value_for_returnCrossRefs;
            let referenceType: OPTIONAL<ReferenceType> =
                ChainingArguments._default_value_for_referenceType;
            let info: OPTIONAL<DomainInfo>;
            let timeLimit: OPTIONAL<Time>;
            let securityParameters: OPTIONAL<SecurityParameters> =
                ChainingArguments._default_value_for_securityParameters;
            let entryOnly: OPTIONAL<BOOLEAN> =
                ChainingArguments._default_value_for_entryOnly;
            let uniqueIdentifier: OPTIONAL<UniqueIdentifier>;
            let authenticationLevel: OPTIONAL<AuthenticationLevel>;
            let exclusions: OPTIONAL<Exclusions>;
            let excludeShadows: OPTIONAL<BOOLEAN> =
                ChainingArguments._default_value_for_excludeShadows;
            let nameResolveOnMaster: OPTIONAL<BOOLEAN> =
                ChainingArguments._default_value_for_nameResolveOnMaster;
            let operationIdentifier: OPTIONAL<INTEGER>;
            let searchRuleId: OPTIONAL<SearchRuleId>;
            let chainedRelaxation: OPTIONAL<MRMapping>;
            let relatedEntry: OPTIONAL<INTEGER>;
            let dspPaging: OPTIONAL<BOOLEAN> =
                ChainingArguments._default_value_for_dspPaging;
            let excludeWriteableCopies: OPTIONAL<BOOLEAN> =
                ChainingArguments._default_value_for_excludeWriteableCopies;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                originator: (_el: _Element): void => {
                    originator = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                targetObject: (_el: _Element): void => {
                    targetObject = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                operationProgress: (_el: _Element): void => {
                    operationProgress = $._decode_explicit<OperationProgress>(
                        () => _decode_OperationProgress
                    )(_el);
                },
                traceInformation: (_el: _Element): void => {
                    traceInformation = $._decode_explicit<TraceInformation>(
                        () => _decode_TraceInformation
                    )(_el);
                },
                aliasDereferenced: (_el: _Element): void => {
                    aliasDereferenced = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                aliasedRDNs: (_el: _Element): void => {
                    aliasedRDNs = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                returnCrossRefs: (_el: _Element): void => {
                    returnCrossRefs = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                referenceType: (_el: _Element): void => {
                    referenceType = $._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                info: (_el: _Element): void => {
                    info = $._decode_explicit<DomainInfo>(
                        () => _decode_DomainInfo
                    )(_el);
                },
                timeLimit: (_el: _Element): void => {
                    timeLimit = $._decode_explicit<Time>(() => _decode_Time)(
                        _el
                    );
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                entryOnly: (_el: _Element): void => {
                    entryOnly = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                uniqueIdentifier: (_el: _Element): void => {
                    uniqueIdentifier = $._decode_explicit<UniqueIdentifier>(
                        () => _decode_UniqueIdentifier
                    )(_el);
                },
                authenticationLevel: (_el: _Element): void => {
                    authenticationLevel = $._decode_explicit<
                        AuthenticationLevel
                    >(() => _decode_AuthenticationLevel)(_el);
                },
                exclusions: (_el: _Element): void => {
                    exclusions = $._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                excludeShadows: (_el: _Element): void => {
                    excludeShadows = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                nameResolveOnMaster: (_el: _Element): void => {
                    nameResolveOnMaster = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                operationIdentifier: (_el: _Element): void => {
                    operationIdentifier = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                searchRuleId: (_el: _Element): void => {
                    searchRuleId = $._decode_explicit<SearchRuleId>(
                        () => _decode_SearchRuleId
                    )(_el);
                },
                chainedRelaxation: (_el: _Element): void => {
                    chainedRelaxation = $._decode_explicit<MRMapping>(
                        () => _decode_MRMapping
                    )(_el);
                },
                relatedEntry: (_el: _Element): void => {
                    relatedEntry = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                dspPaging: (_el: _Element): void => {
                    dspPaging = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                excludeWriteableCopies: (_el: _Element): void => {
                    excludeWriteableCopies = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ChainingArguments,
                _extension_additions_list_spec_for_ChainingArguments,
                _root_component_type_list_2_spec_for_ChainingArguments,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ChainingArguments /* SET_CONSTRUCTOR_CALL */(
                originator,
                targetObject,
                operationProgress,
                traceInformation,
                aliasDereferenced,
                aliasedRDNs,
                returnCrossRefs,
                referenceType,
                info,
                timeLimit,
                securityParameters,
                entryOnly,
                uniqueIdentifier,
                authenticationLevel,
                exclusions,
                excludeShadows,
                nameResolveOnMaster,
                operationIdentifier,
                searchRuleId,
                chainedRelaxation,
                relatedEntry,
                dspPaging,
                excludeWriteableCopies,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ChainingArguments(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ChainingArguments */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChainingArguments */
let _cached_encoder_for_ChainingArguments: $.ASN1Encoder<
    ChainingArguments
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChainingArguments */

/* START_OF_SYMBOL_DEFINITION _encode_ChainingArguments */
/**
 * @summary Encodes a(n) ChainingArguments into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChainingArguments, encoded as an ASN.1 Element.
 */
export function _encode_ChainingArguments(
    value: ChainingArguments,
    elGetter: $.ASN1Encoder<ChainingArguments>
) {
    if (!_cached_encoder_for_ChainingArguments) {
        _cached_encoder_for_ChainingArguments = function (
            value: ChainingArguments,
            elGetter: $.ASN1Encoder<ChainingArguments>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.originator === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.originator, $.BER),
                            /* IF_ABSENT  */ value.targetObject === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.targetObject, $.BER),
                            /* IF_DEFAULT */ value.operationProgress ===
                                undefined ||
                            $.deepEq(
                                value.operationProgress,
                                ChainingArguments._default_value_for_operationProgress
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_OperationProgress,
                                      $.BER
                                  )(value.operationProgress, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                3,
                                () => _encode_TraceInformation,
                                $.BER
                            )(value.traceInformation, $.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                ChainingArguments._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.aliasDereferenced, $.BER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.aliasedRDNs, $.BER),
                            /* IF_DEFAULT */ value.returnCrossRefs ===
                                undefined ||
                            $.deepEq(
                                value.returnCrossRefs,
                                ChainingArguments._default_value_for_returnCrossRefs
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.returnCrossRefs, $.BER),
                            /* IF_DEFAULT */ value.referenceType ===
                                undefined ||
                            $.deepEq(
                                value.referenceType,
                                ChainingArguments._default_value_for_referenceType
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_ReferenceType,
                                      $.BER
                                  )(value.referenceType, $.BER),
                            /* IF_ABSENT  */ value.info === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => _encode_DomainInfo,
                                      $.BER
                                  )(value.info, $.BER),
                            /* IF_ABSENT  */ value.timeLimit === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => _encode_Time,
                                      $.BER
                                  )(value.timeLimit, $.BER),
                            /* IF_DEFAULT */ value.securityParameters ===
                                undefined ||
                            $.deepEq(
                                value.securityParameters,
                                ChainingArguments._default_value_for_securityParameters
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      10,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            $.deepEq(
                                value.entryOnly,
                                ChainingArguments._default_value_for_entryOnly
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      11,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.entryOnly, $.BER),
                            /* IF_ABSENT  */ value.uniqueIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      12,
                                      () => _encode_UniqueIdentifier,
                                      $.BER
                                  )(value.uniqueIdentifier, $.BER),
                            /* IF_ABSENT  */ value.authenticationLevel ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      13,
                                      () => _encode_AuthenticationLevel,
                                      $.BER
                                  )(value.authenticationLevel, $.BER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      14,
                                      () => _encode_Exclusions,
                                      $.BER
                                  )(value.exclusions, $.BER),
                            /* IF_DEFAULT */ value.excludeShadows ===
                                undefined ||
                            $.deepEq(
                                value.excludeShadows,
                                ChainingArguments._default_value_for_excludeShadows
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      15,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.excludeShadows, $.BER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            $.deepEq(
                                value.nameResolveOnMaster,
                                ChainingArguments._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      16,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.nameResolveOnMaster, $.BER),
                            /* IF_ABSENT  */ value.operationIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      17,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.operationIdentifier, $.BER),
                            /* IF_ABSENT  */ value.searchRuleId === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      18,
                                      () => _encode_SearchRuleId,
                                      $.BER
                                  )(value.searchRuleId, $.BER),
                            /* IF_ABSENT  */ value.chainedRelaxation ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      19,
                                      () => _encode_MRMapping,
                                      $.BER
                                  )(value.chainedRelaxation, $.BER),
                            /* IF_ABSENT  */ value.relatedEntry === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      20,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.relatedEntry, $.BER),
                            /* IF_DEFAULT */ value.dspPaging === undefined ||
                            $.deepEq(
                                value.dspPaging,
                                ChainingArguments._default_value_for_dspPaging
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      21,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.dspPaging, $.BER),
                            /* IF_DEFAULT */ value.excludeWriteableCopies ===
                                undefined ||
                            $.deepEq(
                                value.excludeWriteableCopies,
                                ChainingArguments._default_value_for_excludeWriteableCopies
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      24,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.excludeWriteableCopies, $.BER),
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
    return _cached_encoder_for_ChainingArguments(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ChainingArguments */

/* eslint-enable */
