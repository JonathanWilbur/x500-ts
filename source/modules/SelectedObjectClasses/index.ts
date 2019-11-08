import { ObjectIdentifier } from "asn1-ts";

//  Object identifier assignments
//  object identifiers assigned in other modules are shown in comments

//  Object classes

//  id-oc-top                  OBJECT IDENTIFIER ::= {id-oc 0} Defined in X.501 | Part 2
//  id-oc-alias                OBJECT IDENTIFIER ::= {id-oc 1} Defined in X.501 | Part 2
export const id_oc_country                  = new ObjectIdentifier([2, 5, 6, 2]);
export const id_oc_locality                 = new ObjectIdentifier([2, 5, 6, 3]);
export const id_oc_organization             = new ObjectIdentifier([2, 5, 6, 4]);
export const id_oc_organizationalUnit       = new ObjectIdentifier([2, 5, 6, 5]);
export const id_oc_person                   = new ObjectIdentifier([2, 5, 6, 6]);
export const id_oc_organizationalPerson     = new ObjectIdentifier([2, 5, 6, 7]);
export const id_oc_organizationalRole       = new ObjectIdentifier([2, 5, 6, 8]);
export const id_oc_groupOfNames             = new ObjectIdentifier([2, 5, 6, 9]);
export const id_oc_residentialPerson        = new ObjectIdentifier([2, 5, 6, 10]);
export const id_oc_applicationProcess       = new ObjectIdentifier([2, 5, 6, 11]);
export const id_oc_applicationEntity        = new ObjectIdentifier([2, 5, 6, 12]);
export const id_oc_dSA                      = new ObjectIdentifier([2, 5, 6, 13]);
export const id_oc_device                   = new ObjectIdentifier([2, 5, 6, 14]);
export const id_oc_strongAuthenticationUser = new ObjectIdentifier([2, 5, 6, 15]); // Deprecated, see 6.1
export const id_oc_certificationAuthority   = new ObjectIdentifier([2, 5, 6, 16]); // Deprecated, see 6.1
export const id_oc_certificationAuthority_V2  = new ObjectIdentifier([2, 5, 6, 16, 2]); // Deprecated, see 6.18
export const id_oc_groupOfUniqueNames       = new ObjectIdentifier([2, 5, 6, 17]);
export const id_oc_userSecurityInformation  = new ObjectIdentifier([2, 5, 6, 18]);
// id-oc-cRLDistributionPoint  OBJECT IDENTIFIER ::= {id-oc 19} Defined in X.509 | Part 8
export const id_oc_dmd                      = new ObjectIdentifier([2, 5, 6, 20]);
// id-oc-pkiUser               OBJECT IDENTIFIER ::= {id-oc 21} Defined in X.509 | Part 8
// id-oc-pkiCA                 OBJECT IDENTIFIER ::= {id-oc 22} Defined in X.509 | Part 8
// id-oc-deltaCRL              OBJECT IDENTIFIER ::= {id-oc 23} Defined in X.509 | Part 8
// id-oc-pmiUser               OBJECT IDENTIFIER ::= {id-oc 24} Defined in X.509 | Part 8
// id-oc-pmiAA                 OBJECT IDENTIFIER ::= {id-oc 25} Defined in X.509 | Part 8
// id-oc-pmiSOA                OBJECT IDENTIFIER ::= {id-oc 26} Defined in X.509 | Part 8
// id-oc-attCertCRLDistributionPts
//                             OBJECT IDENTIFIER ::= {id-oc 27} Defined in X.509 | Part 8
// id-oc-parent                OBJECT IDENTIFIER ::= {id-oc 28} Defined in X.501 | Part 2
// id-oc-child                 OBJECT IDENTIFIER ::= {id-oc 29} Defined in X.501 | Part 2
// id-oc-cpCps                 OBJECT IDENTIFIER ::= {id-oc 30} Defined in X.509 | Part 8
// id-oc-pkiCertPath           OBJECT IDENTIFIER ::= {id-oc 31} Defined in X.509 | Part 8
// id-oc-privilegePolicy       OBJECT IDENTIFIER ::= {id-oc 32} Defined in X.509 | Part 8
// id-oc-pmiDelegationPath     OBJECT IDENTIFIER ::= {id-oc 33} Defined in X.509 | Part 8
// id-oc-protectedPrivilegePolicy
//                             OBJECT IDENTIFIER ::= {id-oc 34} Defined in X.509 | Part 8
export const id_oc_oidC1obj                 = new ObjectIdentifier([2, 5, 6, 35]);
export const id_oc_oidC2obj                 = new ObjectIdentifier([2, 5, 6, 36]);
export const id_oc_oidCobj                  = new ObjectIdentifier([2, 5, 6, 37]);
export const id_oc_isoTagInfo               = new ObjectIdentifier([2, 5, 6, 38]);
export const id_oc_isoTagType               = new ObjectIdentifier([2, 5, 6, 39]);
// id-oc-integrityInfo         OBJECT IDENTIFIER ::= {id-oc 40} Defined in X.501 | Part 2
export const id_oc_userPwdClass             = new ObjectIdentifier([2, 5, 6, 41]);
export const id_oc_urnCobj                  = new ObjectIdentifier([2, 5, 6, 42]);
export const id_oc_epcTagInfoObj            = new ObjectIdentifier([2, 5, 6, 43]);
export const id_oc_epcTagTypeObj            = new ObjectIdentifier([2, 5, 6, 44]);

export const id_oidRoot                     = new ObjectIdentifier([2, 17, 1, 2, 3]);
export const id_oidArc                      = new ObjectIdentifier([2, 17, 1, 2, 5]);

//  Name forms

export const id_nf_countryNameForm          = new ObjectIdentifier([2, 5, 15, 0]);
export const id_nf_locNameForm              = new ObjectIdentifier([2, 5, 15, 1]);
export const id_nf_sOPNameForm              = new ObjectIdentifier([2, 5, 15, 2]);
export const id_nf_orgNameForm              = new ObjectIdentifier([2, 5, 15, 3]);
export const id_nf_orgUnitNameForm          = new ObjectIdentifier([2, 5, 15, 4]);
export const id_nf_personNameForm           = new ObjectIdentifier([2, 5, 15, 5]);
export const id_nf_orgPersonNameForm        = new ObjectIdentifier([2, 5, 15, 6]);
export const id_nf_orgRoleNameForm          = new ObjectIdentifier([2, 5, 15, 7]);
export const id_nf_gONNameForm              = new ObjectIdentifier([2, 5, 15, 8]);
export const id_nf_resPersonNameForm        = new ObjectIdentifier([2, 5, 15, 9]);
export const id_nf_applProcessNameForm      = new ObjectIdentifier([2, 5, 15, 10]);
export const id_nf_applEntityNameForm       = new ObjectIdentifier([2, 5, 15, 11]);
export const id_nf_dSANameForm              = new ObjectIdentifier([2, 5, 15, 12]);
export const id_nf_deviceNameForm           = new ObjectIdentifier([2, 5, 15, 13]);
// id-nf-cRLDistPtNameForm     OBJECT IDENTIFIER ::= {id-nf 14}
export const id_nf_dMDNameForm              = new ObjectIdentifier([2, 5, 15, 15]);
// id-nf-subentryNameForm      OBJECT IDENTIFIER ::= {id-nf 16}
export const id_nf_oidC1NameForm            = new ObjectIdentifier([2, 5, 15, 17]);
export const id_nf_oidC2NameForm            = new ObjectIdentifier([2, 5, 15, 18]);
export const id_nf_oidCNameForm             = new ObjectIdentifier([2, 5, 15, 19]);
export const id_nf_urnCNameForm             = new ObjectIdentifier([2, 5, 15, 20]);

export const id_oidRootNf                   = new ObjectIdentifier([2, 17, 1, 2, 4]);
export const id_oidArcNf                    = new ObjectIdentifier([2, 17, 1, 2, 6]);
