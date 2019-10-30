import {
    BERElement,
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
} from "asn1-ts";

export { default as Code } from "./Code";
export { default as InvokeId } from "./InvokeId";

// operation codes for DAP and DSP

export const id_opcode_read = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 1);
export const id_opcode_compare = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 2);
export const id_opcode_abandon = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 3);
export const id_opcode_list = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 4);
export const id_opcode_search = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 5);
export const id_opcode_addEntry = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 6);
export const id_opcode_removeEntry = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 7);
export const id_opcode_modifyEntry = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 8);
export const id_opcode_modifyDN = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 9);
export const id_opcode_changePassword = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 10);
export const id_opcode_administerPassword = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 11);
export const id_opcode_ldapTransport = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 12);
export const id_opcode_linkedLDAP = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 13);

// operation codes for DISP

export const id_opcode_requestShadowUpdate = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 1);
export const id_opcode_updateShadow = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 2);
export const id_opcode_coordinateShadowUpdate = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 3);

// operation codes for DOP

export const id_op_establishOperationalBinding = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 100);
export const id_op_modifyOperationalBinding = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 102);
export const id_op_terminateOperationalBinding = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 101);

// error codes for DAP and DSP

export const id_errcode_attributeError = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 1);
export const id_errcode_nameError = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 2);
export const id_errcode_serviceError = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 3);
export const id_errcode_referral = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 4);
export const id_errcode_abandoned = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 5);
export const id_errcode_securityError = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 6);
export const id_errcode_abandonFailed = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 7);
export const id_errcode_updateError = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 8);
export const id_errcode_dsaReferral = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 9);

// error code for DISP

export const id_errcode_shadowError = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 1);

// error code for DOP

export const id_err_operationalBindingError = new BERElement(ASN1TagClass.universal, ASN1Construction.primitive, ASN1UniversalType.integer, 100);
