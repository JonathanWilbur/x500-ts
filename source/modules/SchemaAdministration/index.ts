import { ObjectIdentifier } from "asn1-ts";

export { default as AttributeTypeDescription } from "./AttributeTypeDescription";
export { default as AttributeTypeInformation } from "./AttributeTypeInformation";
export { default as ContextDescription } from "./ContextDescription";
export { default as ContextInformation } from "./ContextInformation";
export { default as DITContentRuleDescription } from "./DITContentRuleDescription";
export { default as DITContextUseDescription } from "./DITContextUseDescription";
export { default as DITContextUseInformation } from "./DITContextUseInformation";
export { default as DITStructureRuleDescription } from "./DITStructureRuleDescription";
export { default as FriendsDescription } from "./FriendsDescription";
export { default as MatchingRuleDescription } from "./MatchingRuleDescription";
export { default as MatchingRuleUseDescription } from "./MatchingRuleUseDescription";
export { default as NameFormDescription } from "./NameFormDescription";
export { default as NameFormInformation } from "./NameFormInformation";
export { default as ObjectClassDescription } from "./ObjectClassDescription";
export { default as ObjectClassInformation } from "./ObjectClassInformation";

// object identifier assignments

// schema object classes

export const id_soc_subschema = new ObjectIdentifier([2, 5, 20, 1]);

// schema operational attributes

export const id_soa_dITStructureRule       = new ObjectIdentifier([2, 5, 21, 1]);
export const id_soa_dITContentRules        = new ObjectIdentifier([2, 5, 21, 2]);
export const id_soa_matchingRules          = new ObjectIdentifier([2, 5, 21, 4]);
export const id_soa_attributeTypes         = new ObjectIdentifier([2, 5, 21, 5]);
export const id_soa_objectClasses          = new ObjectIdentifier([2, 5, 21, 6]);
export const id_soa_nameForms              = new ObjectIdentifier([2, 5, 21, 7]);
export const id_soa_matchingRuleUse        = new ObjectIdentifier([2, 5, 21, 8]);
export const id_soa_structuralObjectClass  = new ObjectIdentifier([2, 5, 21, 9]);
export const id_soa_governingStructureRule = new ObjectIdentifier([2, 5, 21, 10]);
export const id_soa_contextTypes           = new ObjectIdentifier([2, 5, 21, 11]);
export const id_soa_dITContextUse          = new ObjectIdentifier([2, 5, 21, 12]);
export const id_soa_friends                = new ObjectIdentifier([2, 5, 21, 13]);
