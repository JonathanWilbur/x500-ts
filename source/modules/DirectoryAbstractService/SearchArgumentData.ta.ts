/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    TRUE_BIT,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ContextSelection,
    _decode_ContextSelection,
    _encode_ContextSelection,
} from "../DirectoryAbstractService/ContextSelection.ta";
import {
    EntryInformationSelection,
    _decode_EntryInformationSelection,
    _encode_EntryInformationSelection,
} from "../DirectoryAbstractService/EntryInformationSelection.ta";
import {
    FamilyGrouping,
    FamilyGrouping_entryOnly /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_FamilyGrouping,
    _encode_FamilyGrouping,
    _enum_for_FamilyGrouping,
} from "../DirectoryAbstractService/FamilyGrouping.ta";
import {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from "../DirectoryAbstractService/Filter.ta";
import {
    HierarchySelections,
    HierarchySelections_self /* IMPORTED_LONG_NAMED_BIT */,
    _decode_HierarchySelections,
    _encode_HierarchySelections,
} from "../DirectoryAbstractService/HierarchySelections.ta";
import {
    JoinArgument,
    _decode_JoinArgument,
    _encode_JoinArgument,
} from "../DirectoryAbstractService/JoinArgument.ta";
import {
    PagedResultsRequest,
    _decode_PagedResultsRequest,
    _encode_PagedResultsRequest,
} from "../DirectoryAbstractService/PagedResultsRequest.ta";
import {
    SearchArgumentData_joinType,
    SearchArgumentData_joinType_leftOuterJoin /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_SearchArgumentData_joinType,
    _encode_SearchArgumentData_joinType,
    _enum_for_SearchArgumentData_joinType,
} from "../DirectoryAbstractService/SearchArgumentData-joinType.ta";
import {
    baseObject /* IMPORTED_SHORT_NAMED_INTEGER */,
    SearchArgumentData_subset,
    _decode_SearchArgumentData_subset,
    _encode_SearchArgumentData_subset,
} from "../DirectoryAbstractService/SearchArgumentData-subset.ta";
import {
    SearchControlOptions,
    SearchControlOptions_searchAliases /* IMPORTED_LONG_NAMED_BIT */,
    _decode_SearchControlOptions,
    _encode_SearchControlOptions,
} from "../DirectoryAbstractService/SearchControlOptions.ta";
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
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
import {
    RelaxationPolicy,
    _decode_RelaxationPolicy,
    _encode_RelaxationPolicy,
} from "../ServiceAdministration/RelaxationPolicy.ta";
export {
    CommonArguments,
    _decode_CommonArguments,
    _encode_CommonArguments,
} from "../DirectoryAbstractService/CommonArguments.ta";
export {
    ContextSelection,
    _decode_ContextSelection,
    _encode_ContextSelection,
} from "../DirectoryAbstractService/ContextSelection.ta";
export {
    EntryInformationSelection,
    _decode_EntryInformationSelection,
    _encode_EntryInformationSelection,
} from "../DirectoryAbstractService/EntryInformationSelection.ta";
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
    Filter,
    _decode_Filter,
    _encode_Filter,
} from "../DirectoryAbstractService/Filter.ta";
export {
    all /* IMPORTED_SHORT_NAMED_BIT */,
    children /* IMPORTED_SHORT_NAMED_BIT */,
    hierarchy /* IMPORTED_SHORT_NAMED_BIT */,
    HierarchySelections,
    HierarchySelections_all /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_children /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_hierarchy /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_parent /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_self /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_siblingChildren /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_siblings /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_siblingSubtree /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_subtree /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_top /* IMPORTED_LONG_NAMED_BIT */,
    parent /* IMPORTED_SHORT_NAMED_BIT */,
    siblingChildren /* IMPORTED_SHORT_NAMED_BIT */,
    siblings /* IMPORTED_SHORT_NAMED_BIT */,
    siblingSubtree /* IMPORTED_SHORT_NAMED_BIT */,
    subtree /* IMPORTED_SHORT_NAMED_BIT */,
    top /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_HierarchySelections,
    _encode_HierarchySelections,
} from "../DirectoryAbstractService/HierarchySelections.ta";
export {
    JoinArgument,
    _decode_JoinArgument,
    _encode_JoinArgument,
} from "../DirectoryAbstractService/JoinArgument.ta";
export {
    PagedResultsRequest,
    _decode_PagedResultsRequest,
    _encode_PagedResultsRequest,
} from "../DirectoryAbstractService/PagedResultsRequest.ta";
export {
    fullOuterJoin /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    innerJoin /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    leftOuterJoin /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SearchArgumentData_joinType,
    SearchArgumentData_joinType_fullOuterJoin /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SearchArgumentData_joinType_innerJoin /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SearchArgumentData_joinType_leftOuterJoin /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_SearchArgumentData_joinType,
    _encode_SearchArgumentData_joinType,
    _enum_for_SearchArgumentData_joinType,
} from "../DirectoryAbstractService/SearchArgumentData-joinType.ta";
export {
    baseObject /* IMPORTED_SHORT_NAMED_INTEGER */,
    oneLevel /* IMPORTED_SHORT_NAMED_INTEGER */,
    SearchArgumentData_subset,
    SearchArgumentData_subset_baseObject /* IMPORTED_LONG_NAMED_INTEGER */,
    SearchArgumentData_subset_oneLevel /* IMPORTED_LONG_NAMED_INTEGER */,
    SearchArgumentData_subset_wholeSubtree /* IMPORTED_LONG_NAMED_INTEGER */,
    wholeSubtree /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_SearchArgumentData_subset,
    _encode_SearchArgumentData_subset,
} from "../DirectoryAbstractService/SearchArgumentData-subset.ta";
export {
    checkOverspecified /* IMPORTED_SHORT_NAMED_BIT */,
    dnAttribute /* IMPORTED_SHORT_NAMED_BIT */,
    entryCount /* IMPORTED_SHORT_NAMED_BIT */,
    includeAllAreas /* IMPORTED_SHORT_NAMED_BIT */,
    matchedValuesOnly /* IMPORTED_SHORT_NAMED_BIT */,
    matchOnResidualName /* IMPORTED_SHORT_NAMED_BIT */,
    noSystemRelaxation /* IMPORTED_SHORT_NAMED_BIT */,
    performExactly /* IMPORTED_SHORT_NAMED_BIT */,
    searchAliases /* IMPORTED_SHORT_NAMED_BIT */,
    SearchControlOptions,
    SearchControlOptions_checkOverspecified /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_dnAttribute /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_entryCount /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_includeAllAreas /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_matchedValuesOnly /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_matchOnResidualName /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_noSystemRelaxation /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_performExactly /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_searchAliases /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_searchFamily /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_separateFamilyMembers /* IMPORTED_LONG_NAMED_BIT */,
    SearchControlOptions_useSubset /* IMPORTED_LONG_NAMED_BIT */,
    searchFamily /* IMPORTED_SHORT_NAMED_BIT */,
    separateFamilyMembers /* IMPORTED_SHORT_NAMED_BIT */,
    useSubset /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_SearchControlOptions,
    _encode_SearchControlOptions,
} from "../DirectoryAbstractService/SearchControlOptions.ta";
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
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    RelaxationPolicy,
    _decode_RelaxationPolicy,
    _encode_RelaxationPolicy,
} from "../ServiceAdministration/RelaxationPolicy.ta";

/* START_OF_SYMBOL_DEFINITION SearchArgumentData */
/**
 * @summary SearchArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchArgumentData ::= SET {
 *   baseObject            [0]  Name,
 *   subset                [1]  INTEGER {
 *     baseObject    (0),
 *     oneLevel      (1),
 *     wholeSubtree  (2)} DEFAULT baseObject,
 *   filter                [2]  Filter DEFAULT and:{},
 *   searchAliases         [3]  BOOLEAN DEFAULT TRUE,
 *   selection             [4]  EntryInformationSelection DEFAULT {},
 *   pagedResults          [5]  PagedResultsRequest OPTIONAL,
 *   matchedValuesOnly     [6]  BOOLEAN DEFAULT FALSE,
 *   extendedFilter        [7]  Filter OPTIONAL,
 *   checkOverspecified    [8]  BOOLEAN DEFAULT FALSE,
 *   relaxation            [9]  RelaxationPolicy OPTIONAL,
 *   extendedArea          [10] INTEGER OPTIONAL,
 *   hierarchySelections   [11] HierarchySelections DEFAULT {self},
 *   searchControlOptions  [12] SearchControlOptions DEFAULT {searchAliases},
 *   joinArguments         [13] SEQUENCE SIZE (1..MAX) OF JoinArgument OPTIONAL,
 *   joinType              [14] ENUMERATED {
 *     innerJoin      (0),
 *     leftOuterJoin  (1),
 *     fullOuterJoin  (2)} DEFAULT leftOuterJoin,
 *   ...,
 *   ...,
 *   COMPONENTS OF              CommonArguments }
 * ```
 *
 * @class
 */
export class SearchArgumentData {
    constructor(
        /**
         * @summary `baseObject`.
         * @public
         * @readonly
         */
        readonly baseObject: Name,
        /**
         * @summary `subset`.
         * @public
         * @readonly
         */
        readonly subset: OPTIONAL<SearchArgumentData_subset>,
        /**
         * @summary `filter`.
         * @public
         * @readonly
         */
        readonly filter: OPTIONAL<Filter>,
        /**
         * @summary `searchAliases`.
         * @public
         * @readonly
         */
        readonly searchAliases: OPTIONAL<BOOLEAN>,
        /**
         * @summary `selection`.
         * @public
         * @readonly
         */
        readonly selection: OPTIONAL<EntryInformationSelection>,
        /**
         * @summary `pagedResults`.
         * @public
         * @readonly
         */
        readonly pagedResults: OPTIONAL<PagedResultsRequest>,
        /**
         * @summary `matchedValuesOnly`.
         * @public
         * @readonly
         */
        readonly matchedValuesOnly: OPTIONAL<BOOLEAN>,
        /**
         * @summary `extendedFilter`.
         * @public
         * @readonly
         */
        readonly extendedFilter: OPTIONAL<Filter>,
        /**
         * @summary `checkOverspecified`.
         * @public
         * @readonly
         */
        readonly checkOverspecified: OPTIONAL<BOOLEAN>,
        /**
         * @summary `relaxation`.
         * @public
         * @readonly
         */
        readonly relaxation: OPTIONAL<RelaxationPolicy>,
        /**
         * @summary `extendedArea`.
         * @public
         * @readonly
         */
        readonly extendedArea: OPTIONAL<INTEGER>,
        /**
         * @summary `hierarchySelections`.
         * @public
         * @readonly
         */
        readonly hierarchySelections: OPTIONAL<HierarchySelections>,
        /**
         * @summary `searchControlOptions`.
         * @public
         * @readonly
         */
        readonly searchControlOptions: OPTIONAL<SearchControlOptions>,
        /**
         * @summary `joinArguments`.
         * @public
         * @readonly
         */
        readonly joinArguments: OPTIONAL<JoinArgument[]>,
        /**
         * @summary `joinType`.
         * @public
         * @readonly
         */
        readonly joinType: OPTIONAL<SearchArgumentData_joinType>,
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
     * @summary Restructures an object into a SearchArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `SearchArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchArgumentData`.
     * @returns {SearchArgumentData}
     */
    public static _from_object(
        _o: { [_K in keyof SearchArgumentData]: SearchArgumentData[_K] }
    ): SearchArgumentData {
        return new SearchArgumentData(
            _o.baseObject,
            _o.subset,
            _o.filter,
            _o.searchAliases,
            _o.selection,
            _o.pagedResults,
            _o.matchedValuesOnly,
            _o.extendedFilter,
            _o.checkOverspecified,
            _o.relaxation,
            _o.extendedArea,
            _o.hierarchySelections,
            _o.searchControlOptions,
            _o.joinArguments,
            _o.joinType,
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
     * @summary Getter that returns the default value for `subset`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_subset() {
        return baseObject;
    }
    /**
     * @summary Getter that returns the default value for `filter`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_filter() {
        return { and: [] };
    }
    /**
     * @summary Getter that returns the default value for `searchAliases`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_searchAliases() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `selection`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_selection() {
        return EntryInformationSelection._from_object({});
    }
    /**
     * @summary Getter that returns the default value for `matchedValuesOnly`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_matchedValuesOnly() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `checkOverspecified`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_checkOverspecified() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `hierarchySelections`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_hierarchySelections() {
        return (() => {
            const _ret = new Uint8ClampedArray(
                Math.max(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
            );
            _ret[HierarchySelections_self] = TRUE_BIT;
            return _ret;
        })();
    }
    /**
     * @summary Getter that returns the default value for `searchControlOptions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_searchControlOptions() {
        return (() => {
            const _ret = new Uint8ClampedArray(
                Math.max(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)
            );
            _ret[SearchControlOptions_searchAliases] = TRUE_BIT;
            return _ret;
        })();
    }
    /**
     * @summary Getter that returns the default value for `joinType`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_joinType() {
        return SearchArgumentData_joinType_leftOuterJoin;
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
     * @summary The enum used as the type of the component `joinType`
     * @public
     * @static
     */

    public static _enum_for_joinType = _enum_for_SearchArgumentData_joinType;
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
/* END_OF_SYMBOL_DEFINITION SearchArgumentData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchArgumentData */
/**
 * @summary The Leading Root Component Types of SearchArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "baseObject",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subset",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "filter",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "searchAliases",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "selection",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pagedResults",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "matchedValuesOnly",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "extendedFilter",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "checkOverspecified",
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "relaxation",
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "extendedArea",
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "hierarchySelections",
        true,
        $.hasTag(_TagClass.context, 11),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "searchControlOptions",
        true,
        $.hasTag(_TagClass.context, 12),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "joinArguments",
        true,
        $.hasTag(_TagClass.context, 13),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "joinType",
        true,
        $.hasTag(_TagClass.context, 14),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchArgumentData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchArgumentData */
/**
 * @summary The Trailing Root Component Types of SearchArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchArgumentData: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchArgumentData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchArgumentData */
/**
 * @summary The Extension Addition Component Types of SearchArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchArgumentData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchArgumentData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchArgumentData */
let _cached_decoder_for_SearchArgumentData: $.ASN1Decoder<SearchArgumentData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchArgumentData */

/* START_OF_SYMBOL_DEFINITION _decode_SearchArgumentData */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchArgumentData} The decoded data structure.
 */
export function _decode_SearchArgumentData(el: _Element) {
    if (!_cached_decoder_for_SearchArgumentData) {
        _cached_decoder_for_SearchArgumentData = function (
            el: _Element
        ): SearchArgumentData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let baseObject!: Name;
            let subset: OPTIONAL<SearchArgumentData_subset> =
                SearchArgumentData._default_value_for_subset;
            let filter: OPTIONAL<Filter> =
                SearchArgumentData._default_value_for_filter;
            let searchAliases: OPTIONAL<BOOLEAN> =
                SearchArgumentData._default_value_for_searchAliases;
            let selection: OPTIONAL<EntryInformationSelection> =
                SearchArgumentData._default_value_for_selection;
            let pagedResults: OPTIONAL<PagedResultsRequest>;
            let matchedValuesOnly: OPTIONAL<BOOLEAN> =
                SearchArgumentData._default_value_for_matchedValuesOnly;
            let extendedFilter: OPTIONAL<Filter>;
            let checkOverspecified: OPTIONAL<BOOLEAN> =
                SearchArgumentData._default_value_for_checkOverspecified;
            let relaxation: OPTIONAL<RelaxationPolicy>;
            let extendedArea: OPTIONAL<INTEGER>;
            let hierarchySelections: OPTIONAL<HierarchySelections> =
                SearchArgumentData._default_value_for_hierarchySelections;
            let searchControlOptions: OPTIONAL<SearchControlOptions> =
                SearchArgumentData._default_value_for_searchControlOptions;
            let joinArguments: OPTIONAL<JoinArgument[]>;
            let joinType: OPTIONAL<SearchArgumentData_joinType> =
                SearchArgumentData._default_value_for_joinType;
            let _unrecognizedExtensionsList: _Element[] = [];
            let serviceControls: OPTIONAL<ServiceControls> =
                SearchArgumentData._default_value_for_serviceControls;
            let securityParameters: OPTIONAL<SecurityParameters>;
            let requestor: OPTIONAL<DistinguishedName>;
            let operationProgress: OPTIONAL<OperationProgress> =
                SearchArgumentData._default_value_for_operationProgress;
            let aliasedRDNs: OPTIONAL<INTEGER>;
            let criticalExtensions: OPTIONAL<BIT_STRING>;
            let referenceType: OPTIONAL<ReferenceType>;
            let entryOnly: OPTIONAL<BOOLEAN> =
                SearchArgumentData._default_value_for_entryOnly;
            let exclusions: OPTIONAL<Exclusions>;
            let nameResolveOnMaster: OPTIONAL<BOOLEAN> =
                SearchArgumentData._default_value_for_nameResolveOnMaster;
            let operationContexts: OPTIONAL<ContextSelection>;
            let familyGrouping: OPTIONAL<FamilyGrouping> =
                SearchArgumentData._default_value_for_familyGrouping;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                baseObject: (_el: _Element): void => {
                    baseObject = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                subset: (_el: _Element): void => {
                    subset = $._decode_explicit<SearchArgumentData_subset>(
                        () => _decode_SearchArgumentData_subset
                    )(_el);
                },
                filter: (_el: _Element): void => {
                    filter = $._decode_explicit<Filter>(() => _decode_Filter)(
                        _el
                    );
                },
                searchAliases: (_el: _Element): void => {
                    searchAliases = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                selection: (_el: _Element): void => {
                    selection = $._decode_explicit<EntryInformationSelection>(
                        () => _decode_EntryInformationSelection
                    )(_el);
                },
                pagedResults: (_el: _Element): void => {
                    pagedResults = $._decode_explicit<PagedResultsRequest>(
                        () => _decode_PagedResultsRequest
                    )(_el);
                },
                matchedValuesOnly: (_el: _Element): void => {
                    matchedValuesOnly = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                extendedFilter: (_el: _Element): void => {
                    extendedFilter = $._decode_explicit<Filter>(
                        () => _decode_Filter
                    )(_el);
                },
                checkOverspecified: (_el: _Element): void => {
                    checkOverspecified = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                relaxation: (_el: _Element): void => {
                    relaxation = $._decode_explicit<RelaxationPolicy>(
                        () => _decode_RelaxationPolicy
                    )(_el);
                },
                extendedArea: (_el: _Element): void => {
                    extendedArea = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                hierarchySelections: (_el: _Element): void => {
                    hierarchySelections = $._decode_explicit<HierarchySelections>(
                        () => _decode_HierarchySelections
                    )(_el);
                },
                searchControlOptions: (_el: _Element): void => {
                    searchControlOptions = $._decode_explicit<SearchControlOptions>(
                        () => _decode_SearchControlOptions
                    )(_el);
                },
                joinArguments: (_el: _Element): void => {
                    joinArguments = $._decode_explicit<JoinArgument[]>(() =>
                        $._decodeSequenceOf<JoinArgument>(
                            () => _decode_JoinArgument
                        )
                    )(_el);
                },
                joinType: (_el: _Element): void => {
                    joinType = $._decode_explicit<SearchArgumentData_joinType>(
                        () => _decode_SearchArgumentData_joinType
                    )(_el);
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
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SearchArgumentData,
                _extension_additions_list_spec_for_SearchArgumentData,
                _root_component_type_list_2_spec_for_SearchArgumentData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SearchArgumentData(
                /* SET_CONSTRUCTOR_CALL */ baseObject,
                subset,
                filter,
                searchAliases,
                selection,
                pagedResults,
                matchedValuesOnly,
                extendedFilter,
                checkOverspecified,
                relaxation,
                extendedArea,
                hierarchySelections,
                searchControlOptions,
                joinArguments,
                joinType,
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
    return _cached_decoder_for_SearchArgumentData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchArgumentData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchArgumentData */
let _cached_encoder_for_SearchArgumentData: $.ASN1Encoder<SearchArgumentData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchArgumentData */

/* START_OF_SYMBOL_DEFINITION _encode_SearchArgumentData */
/**
 * @summary Encodes a(n) SearchArgumentData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_SearchArgumentData(
    value: SearchArgumentData,
    elGetter: $.ASN1Encoder<SearchArgumentData>
) {
    if (!_cached_encoder_for_SearchArgumentData) {
        _cached_encoder_for_SearchArgumentData = function (
            value: SearchArgumentData,
            elGetter: $.ASN1Encoder<SearchArgumentData>
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
                            )(value.baseObject, $.BER),
                            /* IF_DEFAULT */ value.subset === undefined ||
                            $.deepEq(
                                value.subset,
                                SearchArgumentData._default_value_for_subset
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_SearchArgumentData_subset,
                                      $.BER
                                  )(value.subset, $.BER),
                            /* IF_DEFAULT */ value.filter === undefined ||
                            $.deepEq(
                                value.filter,
                                SearchArgumentData._default_value_for_filter
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_Filter,
                                      $.BER
                                  )(value.filter, $.BER),
                            /* IF_DEFAULT */ value.searchAliases ===
                                undefined ||
                            $.deepEq(
                                value.searchAliases,
                                SearchArgumentData._default_value_for_searchAliases
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.searchAliases, $.BER),
                            /* IF_DEFAULT */ value.selection === undefined ||
                            $.deepEq(
                                value.selection,
                                SearchArgumentData._default_value_for_selection
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_EntryInformationSelection,
                                      $.BER
                                  )(value.selection, $.BER),
                            /* IF_ABSENT  */ value.pagedResults === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => _encode_PagedResultsRequest,
                                      $.BER
                                  )(value.pagedResults, $.BER),
                            /* IF_DEFAULT */ value.matchedValuesOnly ===
                                undefined ||
                            $.deepEq(
                                value.matchedValuesOnly,
                                SearchArgumentData._default_value_for_matchedValuesOnly
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.matchedValuesOnly, $.BER),
                            /* IF_ABSENT  */ value.extendedFilter === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_Filter,
                                      $.BER
                                  )(value.extendedFilter, $.BER),
                            /* IF_DEFAULT */ value.checkOverspecified ===
                                undefined ||
                            $.deepEq(
                                value.checkOverspecified,
                                SearchArgumentData._default_value_for_checkOverspecified
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.checkOverspecified, $.BER),
                            /* IF_ABSENT  */ value.relaxation === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => _encode_RelaxationPolicy,
                                      $.BER
                                  )(value.relaxation, $.BER),
                            /* IF_ABSENT  */ value.extendedArea === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      10,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.extendedArea, $.BER),
                            /* IF_DEFAULT */ value.hierarchySelections ===
                                undefined ||
                            $.deepEq(
                                value.hierarchySelections,
                                SearchArgumentData._default_value_for_hierarchySelections
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      11,
                                      () => _encode_HierarchySelections,
                                      $.BER
                                  )(value.hierarchySelections, $.BER),
                            /* IF_DEFAULT */ value.searchControlOptions ===
                                undefined ||
                            $.deepEq(
                                value.searchControlOptions,
                                SearchArgumentData._default_value_for_searchControlOptions
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      12,
                                      () => _encode_SearchControlOptions,
                                      $.BER
                                  )(value.searchControlOptions, $.BER),
                            /* IF_ABSENT  */ value.joinArguments === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      13,
                                      () =>
                                          $._encodeSequenceOf<JoinArgument>(
                                              () => _encode_JoinArgument,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.joinArguments, $.BER),
                            /* IF_DEFAULT */ value.joinType === undefined ||
                            $.deepEq(
                                value.joinType,
                                SearchArgumentData._default_value_for_joinType
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      14,
                                      () => _encode_SearchArgumentData_joinType,
                                      $.BER
                                  )(value.joinType, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            $.deepEq(
                                value.serviceControls,
                                SearchArgumentData._default_value_for_serviceControls
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
                                SearchArgumentData._default_value_for_operationProgress
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
                                SearchArgumentData._default_value_for_entryOnly
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
                                SearchArgumentData._default_value_for_nameResolveOnMaster
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
                                SearchArgumentData._default_value_for_familyGrouping
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
    return _cached_encoder_for_SearchArgumentData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchArgumentData */

/* eslint-enable */
