import { ObjectIdentifier } from "asn1-ts";
export const authenticationFrameworkOID: ObjectIdentifier = new ObjectIdentifier([ 2, 5, 1, 7 ]);

export { default as AlgorithmIdentifier } from "./AlgorithmIdentifier";
export { default as AvlSerialNumber } from "./AvlSerialNumber";
export { default as CertAVL } from "./CertAVL";
export { default as Certificate } from "./Certificate";
export { default as CertificateList } from "./CertificateList";
export { default as CertificateListContent } from "./CertificateListContent";
export { default as CertificatePair } from "./CertificatePair";
export { default as CertificateSerialNumber } from "./CertificateSerialNumber";
export { default as Certificates } from "./Certificates";
export { default as CertificationPath } from "./CertificationPath";
export { default as CrossCertificates } from "./CrossCertificates";
export { default as ENCRYPTED_HASH } from "./ENCRYPTED-HASH";
export { default as ENCRYPTED } from "./ENCRYPTED";
export { default as Extension } from "./Extension";
export { default as Extensions } from "./Extensions";
export { default as FINGERPRINT } from "./FINGERPRINT";
export { default as ForwardCertificationPath } from "./ForwardCertificationPath";
export { default as HASH } from "./HASH";
export { default as InfoSyntax } from "./InfoSyntax";
export { default as IssuerSerialNumber } from "./IssuerSerialNumber";
export { default as PKCertIdentifier } from "./PKCertIdentifier";
export { default as PkiPath } from "./PkiPath";
export { default as PolicyID } from "./PolicyID";
export { default as ProtRestriction } from "./ProtRestriction";
export { default as PublicKey } from "./PublicKey";
export { default as SIGNATURE } from "./SIGNATURE";
export { default as ScopeRestriction } from "./ScopeRestriction";
export { default as ScopeRestrictions } from "./ScopeRestrictions";
export { default as SubjectPublicKeyInfo } from "./SubjectPublicKeyInfo";
export { default as SupportedAlgorithm } from "./SupportedAlgorithm";
export { default as TBSCertAVL } from "./TBSCertAVL";
export { default as TBSCertAVLEntry } from "./TBSCertAVLEntry";
export { default as TBSCertificate } from "./TBSCertificate";
export { default as Time } from "./Time";
export { default as Validity } from "./Validity";
export { default as Version } from "./Version";

// object classes

export const id_oc_cRLDistributionPoint          = new ObjectIdentifier([2, 5, 6, 19]);
export const id_oc_pkiUser                       = new ObjectIdentifier([2, 5, 6, 21]);
export const id_oc_pkiCA                         = new ObjectIdentifier([2, 5, 6, 22]);
export const id_oc_deltaCRL                      = new ObjectIdentifier([2, 5, 6, 23]);
export const id_oc_cpCps                         = new ObjectIdentifier([2, 5, 6, 30]);
export const id_oc_pkiCertPath                   = new ObjectIdentifier([2, 5, 6, 31]);

// name forms

export const id_nf_cRLDistPtNameForm             = new ObjectIdentifier([2, 5, 15, 14]);

// directory attributes

export const id_at_userPassword                  = new ObjectIdentifier([2, 5, 4, 35]);
export const id_at_userCertificate               = new ObjectIdentifier([2, 5, 4, 36]);
export const id_at_cAcertificate                 = new ObjectIdentifier([2, 5, 4, 37]);
export const id_at_authorityRevocationList       = new ObjectIdentifier([2, 5, 4, 38]);
export const id_at_certificateRevocationList     = new ObjectIdentifier([2, 5, 4, 39]);
export const id_at_crossCertificatePair          = new ObjectIdentifier([2, 5, 4, 40]);
export const id_at_supportedAlgorithms           = new ObjectIdentifier([2, 5, 4, 52]);
export const id_at_deltaRevocationList           = new ObjectIdentifier([2, 5, 4, 53]);
export const id_at_certificationPracticeStmt     = new ObjectIdentifier([2, 5, 4, 68]);
export const id_at_certificatePolicy             = new ObjectIdentifier([2, 5, 4, 69]);
export const id_at_pkiPath                       = new ObjectIdentifier([2, 5, 4, 70]);
export const id_at_eepkCertificateRevocationList = new ObjectIdentifier([2, 5, 4, 101]);

// syntaxes

export const id_lsx_x509Certificate              = new ObjectIdentifier([1, 3, 6, 1, 4, 1, 1466, 115, 121, 1, 8]);
export const id_lsx_x509CertificateList          = new ObjectIdentifier([1, 3, 6, 1, 4, 1, 1466, 115, 121, 1, 9]);
export const id_lsx_x509CertificatePair          = new ObjectIdentifier([1, 3, 6, 1, 4, 1, 1466, 115, 121, 1, 10]);
export const id_lsx_x509SupportedAlgorithm       = new ObjectIdentifier([1, 3, 6, 1, 4, 1, 1466, 115, 121, 1, 49]);

// Authorization validation restrictions

export const id_protRestrict                     = new ObjectIdentifier([2, 5, 41, 1]);
