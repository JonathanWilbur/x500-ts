import { ObjectIdentifier } from "asn1-ts";
export const informationFrameworkOID: ObjectIdentifier = new ObjectIdentifier([ 2, 5, 1, 1 ]);

export { default as Attribute } from "./Attribute";
export { default as AttributeType } from "./AttributeType";
export { default as AttributeTypeAndValue } from "./AttributeTypeAndValue";
export { default as AttributeTypeAssertion } from "./AttributeTypeAssertion";
export { default as AttributeUsage } from "./AttributeUsage";
export { default as AttributeValue } from "./AttributeValue";
export { default as AttributeValueAssertion } from "./AttributeValueAssertion";
// export { default as BaseDistance } from "./BaseDistance"; // Already in CertificateExtensions.
export { default as ChopSpecification } from "./ChopSpecification";
export { default as Context } from "./Context";
export { default as ContextAssertion } from "./ContextAssertion";
export { default as DITContentRule } from "./DITContentRule";
export { default as DITContextUse } from "./DITContextUse";
export { default as DITStructureRule } from "./DITStructureRule";
export { default as DistinguishedName } from "./DistinguishedName";
export { default as HierarchyBelow } from "./HierarchyBelow";
export { default as HierarchyLevel } from "./HierarchyLevel";
export { default as LocalName } from "./LocalName";
export { default as Name } from "./Name";
export { default as ObjectClassKind } from "./ObjectClassKind";
export { default as PwdHistory } from "./PwdHistory";
export { default as RDNSequence } from "./RDNSequence";
export { default as Refinement } from "./Refinement";
export { default as RelativeDistinguishedName } from "./RelativeDistinguishedName";
export { default as RuleIdentifier } from "./RuleIdentifier";
export { default as SearchRuleDescription } from "./SearchRuleDescription";
export { default as SubtreeSpecification } from "./SubtreeSpecification";

// object classes

export const id_oc_top                              = new ObjectIdentifier([2, 5, 6, 0]);
export const id_oc_alias                            = new ObjectIdentifier([2, 5, 6, 1]);
export const id_oc_parent                           = new ObjectIdentifier([2, 5, 6, 28]);
export const id_oc_child                            = new ObjectIdentifier([2, 5, 6, 29]);

// attributes

export const id_at_objectClass                      = new ObjectIdentifier([2, 5, 4, 0]);
export const id_at_aliasedEntryName                 = new ObjectIdentifier([2, 5, 4, 1]);
export const id_at_pwdAttribute                     = new ObjectIdentifier([2, 5, 4, 84]);

// matching rules

export const id_mr_objectIdentifierMatch            = new ObjectIdentifier([2, 5, 13, 0]);
export const id_mr_distinguishedNameMatch           = new ObjectIdentifier([2, 5, 13, 1]);

// operational attributes

export const id_oa_excludeAllCollectiveAttributes   = new ObjectIdentifier([2, 5, 18, 0]);
export const id_oa_createTimestamp                  = new ObjectIdentifier([2, 5, 18, 1]);
export const id_oa_modifyTimestamp                  = new ObjectIdentifier([2, 5, 18, 2]);
export const id_oa_creatorsName                     = new ObjectIdentifier([2, 5, 18, 3]);
export const id_oa_modifiersName                    = new ObjectIdentifier([2, 5, 18, 4]);
export const id_oa_administrativeRole               = new ObjectIdentifier([2, 5, 18, 5]);
export const id_oa_subtreeSpecification             = new ObjectIdentifier([2, 5, 18, 6]);
export const id_oa_collectiveExclusions             = new ObjectIdentifier([2, 5, 18, 7]);
export const id_oa_subschemaTimestamp               = new ObjectIdentifier([2, 5, 18, 8]);
export const id_oa_hasSubordinates                  = new ObjectIdentifier([2, 5, 18, 9]);
export const id_oa_subschemaSubentryList            = new ObjectIdentifier([2, 5, 18, 10]);
export const id_oa_accessControlSubentryList        = new ObjectIdentifier([2, 5, 18, 11]);
export const id_oa_collectiveAttributeSubentryList  = new ObjectIdentifier([2, 5, 18, 12]);
export const id_oa_contextDefaultSubentryList       = new ObjectIdentifier([2, 5, 18, 13]);
export const id_oa_contextAssertionDefault          = new ObjectIdentifier([2, 5, 18, 14]);
export const id_oa_serviceAdminSubentryList         = new ObjectIdentifier([2, 5, 18, 15]);
export const id_oa_searchRules                      = new ObjectIdentifier([2, 5, 18, 16]);
export const id_oa_hierarchyLevel                   = new ObjectIdentifier([2, 5, 18, 17]);
export const id_oa_hierarchyBelow                   = new ObjectIdentifier([2, 5, 18, 18]);
export const id_oa_hierarchyParent                  = new ObjectIdentifier([2, 5, 18, 19]);
export const id_oa_hierarchyTop                     = new ObjectIdentifier([2, 5, 18, 20]);
export const id_oa_pwdAdminSubentryList             = new ObjectIdentifier([2, 5, 18, 21]);
export const id_oa_pwdStartTime                     = new ObjectIdentifier([2, 5, 18, 22]);
export const id_oa_pwdExpiryTime                    = new ObjectIdentifier([2, 5, 18, 23]);
export const id_oa_pwdEndTime                       = new ObjectIdentifier([2, 5, 18, 24]);
export const id_oa_pwdFails                         = new ObjectIdentifier([2, 5, 18, 25]);
export const id_oa_pwdFailureTime                   = new ObjectIdentifier([2, 5, 18, 26]);
export const id_oa_pwdGracesUsed                    = new ObjectIdentifier([2, 5, 18, 27]);
export const id_oa_userPwdHistory                   = new ObjectIdentifier([2, 5, 18, 28]);
export const id_oa_userPwdRecentlyExpired           = new ObjectIdentifier([2, 5, 18, 29]);
export const id_oa_pwdModifyEntryAllowed            = new ObjectIdentifier([2, 5, 18, 30]);
export const id_oa_pwdChangeAllowed                 = new ObjectIdentifier([2, 5, 18, 31]);
export const id_oa_pwdMaxAge                        = new ObjectIdentifier([2, 5, 18, 32]);
export const id_oa_pwdExpiryAge                     = new ObjectIdentifier([2, 5, 18, 33]);
export const id_oa_pwdMinLength                     = new ObjectIdentifier([2, 5, 18, 34]);
export const id_oa_pwdVocabulary                    = new ObjectIdentifier([2, 5, 18, 35]);
export const id_oa_pwdAlphabet                      = new ObjectIdentifier([2, 5, 18, 36]);
export const id_oa_pwdDictionaries                  = new ObjectIdentifier([2, 5, 18, 37]);
export const id_oa_pwdExpiryWarning                 = new ObjectIdentifier([2, 5, 18, 38]);
export const id_oa_pwdGraces                        = new ObjectIdentifier([2, 5, 18, 39]);
export const id_oa_pwdFailureDuration               = new ObjectIdentifier([2, 5, 18, 40]);
export const id_oa_pwdLockoutDuration               = new ObjectIdentifier([2, 5, 18, 41]);
export const id_oa_pwdMaxFailures                   = new ObjectIdentifier([2, 5, 18, 42]);
export const id_oa_pwdMaxTimeInHistory              = new ObjectIdentifier([2, 5, 18, 43]);
export const id_oa_pwdMinTimeInHistory              = new ObjectIdentifier([2, 5, 18, 44]);
export const id_oa_pwdHistorySlots                  = new ObjectIdentifier([2, 5, 18, 45]);
export const id_oa_pwdRecentlyExpiredDuration       = new ObjectIdentifier([2, 5, 18, 46]);
export const id_oa_pwdEncAlg                        = new ObjectIdentifier([2, 5, 18, 47]);
export const id_oa_allAttributeTypes                = new ObjectIdentifier([2, 5, 18, 48]);

// subentry classes

export const id_sc_subentry                         = new ObjectIdentifier([2, 5, 17, 0]);
export const id_sc_accessControlSubentry            = new ObjectIdentifier([2, 5, 17, 1]);
export const id_sc_collectiveAttributeSubentry      = new ObjectIdentifier([2, 5, 17, 2]);
export const id_sc_contextAssertionSubentry         = new ObjectIdentifier([2, 5, 17, 3]);
export const id_sc_serviceAdminSubentry             = new ObjectIdentifier([2, 5, 17, 4]);
export const id_sc_pwdAdminSubentry                 = new ObjectIdentifier([2, 5, 17, 5]);

//  Name forms

export const id_nf_subentryNameForm                 = new ObjectIdentifier([2, 5, 15, 16]);

// administrative roles

export const id_ar_autonomousArea                   = new ObjectIdentifier([2, 5, 23, 1]);
export const id_ar_accessControlSpecificArea        = new ObjectIdentifier([2, 5, 23, 2]);
export const id_ar_accessControlInnerArea           = new ObjectIdentifier([2, 5, 23, 3]);
export const id_ar_subschemaAdminSpecificArea       = new ObjectIdentifier([2, 5, 23, 4]);
export const id_ar_collectiveAttributeSpecificArea  = new ObjectIdentifier([2, 5, 23, 5]);
export const id_ar_collectiveAttributeInnerArea     = new ObjectIdentifier([2, 5, 23, 6]);
export const id_ar_contextDefaultSpecificArea       = new ObjectIdentifier([2, 5, 23, 7]);
export const id_ar_serviceSpecificArea              = new ObjectIdentifier([2, 5, 23, 8]);
export const id_ar_pwdAdminSpecificArea             = new ObjectIdentifier([2, 5, 23, 9]);
