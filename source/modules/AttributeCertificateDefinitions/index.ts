import { ObjectIdentifier } from "asn1-ts";
export const attributeCertificateDefinitionsOID: ObjectIdentifier = new ObjectIdentifier([ 2, 5, 1, 32 ]);

export { default as ACPathData } from "./ACPathData";
export { default as AcceptableCertPoliciesSyntax } from "./AcceptableCertPoliciesSyntax";
export { default as AcceptablePrivilegePoliciesSyntax } from "./AcceptablePrivilegePoliciesSyntax";
export { default as AllowedAttributeAssignment } from "./AllowedAttributeAssignment";
export { default as AllowedAttributeAssignments } from "./AllowedAttributeAssignments";
export { default as AttCertIssuer } from "./AttCertIssuer";
export { default as AttCertPath } from "./AttCertPath";
export { default as AttCertValidityPeriod } from "./AttCertValidityPeriod";
export { default as AttCertVersion } from "./AttCertVersion";
export { default as AttributeCertificate } from "./AttributeCertificate";
export { default as AttributeCertificateAssertion } from "./AttributeCertificateAssertion";
export { default as AttributeCertificateExactAssertion } from "./AttributeCertificateExactAssertion";
export { default as AttributeCertificationPath } from "./AttributeCertificationPath";
export { default as AttributeDescription } from "./AttributeDescription";
export { default as AttributeIdentifier } from "./AttributeIdentifier";
export { default as AttributeMapping } from "./AttributeMapping";
export { default as AttributeMappings } from "./AttributeMappings";
export { default as AttributeName } from "./AttributeName";
export { default as AuthAttId } from "./AuthAttId";
export { default as AuthorityAttributeIdentifierSyntax } from "./AuthorityAttributeIdentifierSyntax";
// export { default as BaseDistance } from "./BaseDistance";
export { default as BasicAttConstraintsSyntax } from "./BasicAttConstraintsSyntax";
// export { default as CertPolicyId } from "./CertPolicyId";
export { default as DelMatchSyntax } from "./DelMatchSyntax";
export { default as DigestedObjectType } from "./DigestedObjectType";
export { default as DualStringSyntax } from "./DualStringSyntax";
// export { default as GeneralSubtree } from "./GeneralSubtree";
// export { default as GeneralSubtrees } from "./GeneralSubtrees";
export { default as Holder } from "./Holder";
export { default as HolderIssuerAssertion } from "./HolderIssuerAssertion";
export { default as HolderNameConstraintsSyntax } from "./HolderNameConstraintsSyntax";
export { default as IssuerSerial } from "./IssuerSerial";
export { default as ObjectDigestInfo } from "./ObjectDigestInfo";
export { default as PrivilegePolicy } from "./PrivilegePolicy";
export { default as PrivilegePolicyIdentifier } from "./PrivilegePolicyIdentifier";
export { default as RoleSpecCertIdentifier } from "./RoleSpecCertIdentifier";
export { default as RoleSpecCertIdentifierSyntax } from "./RoleSpecCertIdentifierSyntax";
export { default as RoleSyntax } from "./RoleSyntax";
export { default as TBSAttributeCertificate } from "./TBSAttributeCertificate";
export { default as Target } from "./Target";
export { default as TargetCert } from "./TargetCert";
export { default as Targets } from "./Targets";

// object classes

export const id_oc_pmiUser                            = new ObjectIdentifier([2, 5, 6, 24]);
export const id_oc_pmiAA                              = new ObjectIdentifier([2, 5, 6, 25]);
export const id_oc_pmiSOA                             = new ObjectIdentifier([2, 5, 6, 26]);
export const id_oc_attCertCRLDistributionPts          = new ObjectIdentifier([2, 5, 6, 27]);
export const id_oc_privilegePolicy                    = new ObjectIdentifier([2, 5, 6, 32]);
export const id_oc_pmiDelegationPath                  = new ObjectIdentifier([2, 5, 6, 33]);
export const id_oc_protectedPrivilegePolicy           = new ObjectIdentifier([2, 5, 6, 34]);

// directory attributes

export const id_at_attributeCertificate               = new ObjectIdentifier([2, 5, 4, 58]);
export const id_at_attributeCertificateRevocationList = new ObjectIdentifier([2, 5, 4, 59]);
export const id_at_aACertificate                      = new ObjectIdentifier([2, 5, 4, 61]);
export const id_at_attributeDescriptorCertificate     = new ObjectIdentifier([2, 5, 4, 62]);
export const id_at_attributeAuthorityRevocationList   = new ObjectIdentifier([2, 5, 4, 63]);
export const id_at_privPolicy                         = new ObjectIdentifier([2, 5, 4, 71]);
export const id_at_role                               = new ObjectIdentifier([2, 5, 4, 72]);
export const id_at_delegationPath                     = new ObjectIdentifier([2, 5, 4, 73]);
export const id_at_protPrivPolicy                     = new ObjectIdentifier([2, 5, 4, 74]);
export const id_at_xMLPrivilegeInfo                   = new ObjectIdentifier([2, 5, 4, 75]);
export const id_at_xmlPrivPolicy                      = new ObjectIdentifier([2, 5, 4, 76]);
export const id_at_permission                         = new ObjectIdentifier([2, 5, 4, 82]);
export const id_at_eeAttrCertificateRevocationList    = new ObjectIdentifier([2, 5, 4, 102]);

// attribute certificate extensions

export const id_ce_authorityAttributeIdentifier       = new ObjectIdentifier([2, 5, 29, 38]);
export const id_ce_roleSpecCertIdentifier             = new ObjectIdentifier([2, 5, 29, 39]);
export const id_ce_basicAttConstraints                = new ObjectIdentifier([2, 5, 29, 41]);
export const id_ce_delegatedNameConstraints           = new ObjectIdentifier([2, 5, 29, 42]);
export const id_ce_timeSpecification                  = new ObjectIdentifier([2, 5, 29, 43]);
export const id_ce_attributeDescriptor                = new ObjectIdentifier([2, 5, 29, 48]);
export const id_ce_userNotice                         = new ObjectIdentifier([2, 5, 29, 49]);
export const id_ce_sOAIdentifier                      = new ObjectIdentifier([2, 5, 29, 50]);
export const id_ce_acceptableCertPolicies             = new ObjectIdentifier([2, 5, 29, 52]);
export const id_ce_targetingInformation               = new ObjectIdentifier([2, 5, 29, 55]);
export const id_ce_noRevAvail                         = new ObjectIdentifier([2, 5, 29, 56]);
export const id_ce_acceptablePrivilegePolicies        = new ObjectIdentifier([2, 5, 29, 57]);
export const id_ce_indirectIssuer                     = new ObjectIdentifier([2, 5, 29, 61]);
export const id_ce_noAssertion                        = new ObjectIdentifier([2, 5, 29, 62]);
export const id_ce_issuedOnBehalfOf                   = new ObjectIdentifier([2, 5, 29, 64]);
export const id_ce_singleUse                          = new ObjectIdentifier([2, 5, 29, 65]);
export const id_ce_groupAC                            = new ObjectIdentifier([2, 5, 29, 66]);
export const id_ce_allowedAttributeAssignments        = new ObjectIdentifier([2, 5, 29, 67]);
export const id_ce_attributeMappings                  = new ObjectIdentifier([2, 5, 29, 68]);
export const id_ce_holderNameConstraints              = new ObjectIdentifier([2, 5, 29, 69]);

// PMI matching rules

export const id_mr_attributeCertificateMatch          = new ObjectIdentifier([2, 5, 13, 42]);
export const id_mr_attributeCertificateExactMatch     = new ObjectIdentifier([2, 5, 13, 45]);
export const id_mr_holderIssuerMatch                  = new ObjectIdentifier([2, 5, 13, 46]);
export const id_mr_authAttIdMatch                     = new ObjectIdentifier([2, 5, 13, 53]);
export const id_mr_roleSpecCertIdMatch                = new ObjectIdentifier([2, 5, 13, 54]);
export const id_mr_basicAttConstraintsMatch           = new ObjectIdentifier([2, 5, 13, 55]);
export const id_mr_delegatedNameConstraintsMatch      = new ObjectIdentifier([2, 5, 13, 56]);
export const id_mr_timeSpecMatch                      = new ObjectIdentifier([2, 5, 13, 57]);
export const id_mr_attDescriptorMatch                 = new ObjectIdentifier([2, 5, 13, 58]);
export const id_mr_acceptableCertPoliciesMatch        = new ObjectIdentifier([2, 5, 13, 59]);
export const id_mr_delegationPathMatch                = new ObjectIdentifier([2, 5, 13, 61]);
export const id_mr_sOAIdentifierMatch                 = new ObjectIdentifier([2, 5, 13, 66]);
export const id_mr_extensionPresenceMatch             = new ObjectIdentifier([2, 5, 13, 67]);
export const id_mr_dualStringMatch                    = new ObjectIdentifier([2, 5, 13, 69]);
