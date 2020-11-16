/* eslint-disable */
import { INTEGER, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { FamilyGrouping } from "../DirectoryAbstractService/FamilyGrouping.ta";
import { FamilyReturn } from "../DirectoryAbstractService/FamilyReturn.ta";
import { AttributeType } from "../InformationFramework/AttributeType.ta";
import { AllowedSubset } from "../ServiceAdministration/AllowedSubset.ta";
import { AttributeCombination } from "../ServiceAdministration/AttributeCombination.ta";
import { ControlOptions } from "../ServiceAdministration/ControlOptions.ta";
import { EntryLimit } from "../ServiceAdministration/EntryLimit.ta";
import { ImposedSubset } from "../ServiceAdministration/ImposedSubset.ta";
import { RelaxationPolicy } from "../ServiceAdministration/RelaxationPolicy.ta";
import { REQUEST_ATTRIBUTE } from "../ServiceAdministration/REQUEST-ATTRIBUTE.oca";
import { RESULT_ATTRIBUTE } from "../ServiceAdministration/RESULT-ATTRIBUTE.oca";
export {
    FamilyGrouping,
    FamilyGrouping_compoundEntry /* IMPORTED_ENUMERATION_ITEM */,
    FamilyGrouping_entryOnly /* IMPORTED_ENUMERATION_ITEM */,
    FamilyGrouping_multiStrand /* IMPORTED_ENUMERATION_ITEM */,
    FamilyGrouping_strands /* IMPORTED_ENUMERATION_ITEM */,
    _decode_FamilyGrouping,
    _encode_FamilyGrouping,
    _enum_for_FamilyGrouping,
} from "../DirectoryAbstractService/FamilyGrouping.ta";
export {
    FamilyReturn,
    _decode_FamilyReturn,
    _encode_FamilyReturn,
} from "../DirectoryAbstractService/FamilyReturn.ta";
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
export {
    AllowedSubset,
    AllowedSubset_baseObject /* IMPORTED_BIT */,
    AllowedSubset_oneLevel /* IMPORTED_BIT */,
    AllowedSubset_wholeSubtree /* IMPORTED_BIT */,
    _decode_AllowedSubset,
    _encode_AllowedSubset,
} from "../ServiceAdministration/AllowedSubset.ta";
export {
    AttributeCombination,
    _decode_AttributeCombination,
    _encode_AttributeCombination,
} from "../ServiceAdministration/AttributeCombination.ta";
export {
    ControlOptions,
    _decode_ControlOptions,
    _encode_ControlOptions,
} from "../ServiceAdministration/ControlOptions.ta";
export {
    EntryLimit,
    _decode_EntryLimit,
    _encode_EntryLimit,
} from "../ServiceAdministration/EntryLimit.ta";
export {
    ImposedSubset,
    ImposedSubset_baseObject /* IMPORTED_ENUMERATION_ITEM */,
    ImposedSubset_oneLevel /* IMPORTED_ENUMERATION_ITEM */,
    ImposedSubset_wholeSubtree /* IMPORTED_ENUMERATION_ITEM */,
    _decode_ImposedSubset,
    _encode_ImposedSubset,
    _enum_for_ImposedSubset,
} from "../ServiceAdministration/ImposedSubset.ta";
export {
    RelaxationPolicy,
    _decode_RelaxationPolicy,
    _encode_RelaxationPolicy,
} from "../ServiceAdministration/RelaxationPolicy.ta";
export { REQUEST_ATTRIBUTE } from "../ServiceAdministration/REQUEST-ATTRIBUTE.oca";
export { RESULT_ATTRIBUTE } from "../ServiceAdministration/RESULT-ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION SEARCH_RULE */
/**
 * @summary SEARCH_RULE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEARCH-RULE ::= CLASS {
 *   &dmdId                 OBJECT IDENTIFIER,
 *   &serviceType           OBJECT IDENTIFIER               OPTIONAL,
 *   &userClass             INTEGER                         OPTIONAL,
 *   &InputAttributeTypes   REQUEST-ATTRIBUTE               OPTIONAL,
 *   &combination           AttributeCombination            OPTIONAL,
 *   &OutputAttributeTypes  RESULT-ATTRIBUTE                OPTIONAL,
 *   &defaultControls       ControlOptions                  OPTIONAL,
 *   &mandatoryControls     ControlOptions                  OPTIONAL,
 *   &searchRuleControls    ControlOptions                  OPTIONAL,
 *   &familyGrouping        FamilyGrouping                  OPTIONAL,
 *   &familyReturn          FamilyReturn                    OPTIONAL,
 *   &additionalControl     AttributeType                   OPTIONAL,
 *   &relaxation            RelaxationPolicy                OPTIONAL,
 *   &allowedSubset         AllowedSubset                   DEFAULT '111'B,
 *   &imposedSubset         ImposedSubset                   OPTIONAL,
 *   &entryLimit            EntryLimit                      OPTIONAL,
 *   &id                    INTEGER                         UNIQUE }
 * WITH SYNTAX {
 *   DMD ID                 &dmdId
 *   [SERVICE-TYPE          &serviceType]
 *   [USER-CLASS            &userClass]
 *   [INPUT ATTRIBUTES      &InputAttributeTypes]
 *   [COMBINATION           &combination]
 *   [OUTPUT ATTRIBUTES     &OutputAttributeTypes]
 *   [DEFAULT CONTROL       &defaultControls]
 *   [MANDATORY CONTROL     &mandatoryControls]
 *   [SEARCH-RULE CONTROL   &searchRuleControls]
 *   [FAMILY-GROUPING       &familyGrouping]
 *   [FAMILY-RETURN         &familyReturn]
 *   [ADDITIONAL CONTROL    &additionalControl]
 *   [RELAXATION            &relaxation]
 *   [ALLOWED SUBSET        &allowedSubset]
 *   [IMPOSED SUBSET        &imposedSubset]
 *   [ENTRY LIMIT           &entryLimit]
 *   ID                     &id }
 * ```
 *
 * @interface
 */
export interface SEARCH_RULE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SEARCH-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof SEARCH_RULE]: $.ASN1Decoder<SEARCH_RULE[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof SEARCH_RULE]: $.ASN1Encoder<SEARCH_RULE[_K]>;
        }
    >;
    /**
     * @summary &dmdId
     */
    readonly "&dmdId"?: OBJECT_IDENTIFIER;
    /**
     * @summary &serviceType
     */
    readonly "&serviceType"?: OBJECT_IDENTIFIER;
    /**
     * @summary &userClass
     */
    readonly "&userClass"?: INTEGER;
    /**
     * @summary &InputAttributeTypes
     */
    readonly "&InputAttributeTypes"?: REQUEST_ATTRIBUTE[];
    /**
     * @summary &combination
     */
    readonly "&combination"?: AttributeCombination;
    /**
     * @summary &OutputAttributeTypes
     */
    readonly "&OutputAttributeTypes"?: RESULT_ATTRIBUTE[];
    /**
     * @summary &defaultControls
     */
    readonly "&defaultControls"?: ControlOptions;
    /**
     * @summary &mandatoryControls
     */
    readonly "&mandatoryControls"?: ControlOptions;
    /**
     * @summary &searchRuleControls
     */
    readonly "&searchRuleControls"?: ControlOptions;
    /**
     * @summary &familyGrouping
     */
    readonly "&familyGrouping"?: FamilyGrouping;
    /**
     * @summary &familyReturn
     */
    readonly "&familyReturn"?: FamilyReturn;
    /**
     * @summary &additionalControl
     */
    readonly "&additionalControl"?: AttributeType;
    /**
     * @summary &relaxation
     */
    readonly "&relaxation"?: RelaxationPolicy;
    /**
     * @summary &allowedSubset
     */
    readonly "&allowedSubset"?: AllowedSubset;
    /**
     * @summary &imposedSubset
     */
    readonly "&imposedSubset"?: ImposedSubset;
    /**
     * @summary &entryLimit
     */
    readonly "&entryLimit"?: EntryLimit;
    /**
     * @summary &id
     */
    readonly "&id"?: INTEGER;
}
/* END_OF_SYMBOL_DEFINITION SEARCH_RULE */

/* eslint-enable */
