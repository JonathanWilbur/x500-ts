import { ObjectIdentifier } from "asn1-ts";

export { default as LdapSyntaxDescription } from "./LdapSyntaxDescription";

export const id_lat_namingContexts                     = new ObjectIdentifier([1, 3, 6, 1, 4, 1, 1466, 101, 120, 5]);
export const id_lat_altServer                          = new ObjectIdentifier([1, 3, 6, 1, 4, 1, 1466, 101, 120, 6]);
export const id_lat_supportedExtension                 = new ObjectIdentifier([1, 3, 6, 1, 4, 1, 1466, 101, 120, 7]);
export const id_lat_supportedControl                   = new ObjectIdentifier([1, 3, 6, 1, 4, 1, 1466, 101, 120, 13]);
export const id_lat_supportedSASLMechanisms            = new ObjectIdentifier([1, 3, 6, 1, 4, 1, 1466, 101, 120, 14]);
export const id_lat_supportedLDAPVersion               = new ObjectIdentifier([1, 3, 6, 1, 4, 1, 1466, 101, 120, 15]);
export const id_soa_ldapSyntaxes                       = new ObjectIdentifier([1, 3, 6, 1, 4, 1, 1466, 101, 120, 16]);
export const id_oat_supportedFeatures                  = new ObjectIdentifier([1, 3, 6, 1, 4, 1, 4203, 1, 3, 5]);
