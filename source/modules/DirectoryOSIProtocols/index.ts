import { ObjectIdentifier } from "asn1-ts";

export const id_as_directoryAccessAS                       = new ObjectIdentifier([2, 5, 9, 1]);
export const id_as_directorySystemAS                       = new ObjectIdentifier([2, 5, 9, 2]);
export const id_as_directoryShadowAS                       = new ObjectIdentifier([2, 5, 9, 3]);
export const id_as_directoryOperationalBindingManagementAS = new ObjectIdentifier([2, 5, 9, 4]);
// id-as-directoryReliableShadowAS            OBJECT IDENTIFIER ::= {id-as 5}
// id-as-reliableShadowBindingAS              OBJECT IDENTIFIER ::= {id-as 6}
// id-as-2or3se                               OBJECT IDENTIFIER ::= {id-as 7}
export const id_acseAS                                     = new ObjectIdentifier([2, 2, 1, 0, 1]);

// application context object identifiers

export const id_ac_directoryAccessAC                       = new ObjectIdentifier([2, 5, 3, 1]);
export const id_ac_directorySystemAC                       = new ObjectIdentifier([2, 5, 3, 2]);
export const id_ac_directoryOperationalBindingManagementAC = new ObjectIdentifier([2, 5, 3, 3]);
export const id_ac_shadowConsumerInitiatedAC               = new ObjectIdentifier([2, 5, 3, 4]);
export const id_ac_shadowSupplierInitiatedAC               = new ObjectIdentifier([2, 5, 3, 5]);
// id-ac-reliableShadowSupplierInitiatedAC    OBJECT IDENTIFIER ::= {id-ac 6}
// id-ac-reliableShadowConsumerInitiatedAC    OBJECT IDENTIFIER ::= {id-ac 7}
export const id_ac_shadowSupplierInitiatedAsynchronousAC   = new ObjectIdentifier([2, 5, 3, 8]);
export const id_ac_shadowConsumerInitiatedAsynchronousAC   = new ObjectIdentifier([2, 5, 3, 9]);
// id-ac-directoryAccessWith2or3seAC          OBJECT IDENTIFIER ::= {id-ac 10}
// id-ac-directorySystemWith2or3seAC          OBJECT IDENTIFIER ::= {id-ac 11}
// id-ac-shadowSupplierInitiatedWith2or3seAC  OBJECT IDENTIFIER ::= {id-ac 12}
// id-ac-shadowConsumerInitiatedWith2or3seAC  OBJECT IDENTIFIER ::= {id-ac 13}
// id-ac-reliableShadowSupplierInitiatedWith2or3seAC
//                                            OBJECT IDENTIFIER ::= {id-ac 14}
// id-ac-reliableShadowConsumerInitiatedWith2or3seAC
//                                            OBJECT IDENTIFIER ::= {id-ac 15}
// id-ac-directoryOperationalBindingManagementWith2or3seAC
//                                            OBJECT IDENTIFIER ::= {id-ac 16}
