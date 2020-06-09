/*
    BEGIN_MODULE DirectoryIDMProtocols
    OID: joint-iso-itu-t.ds.module.directoryIDMProtocols.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    IDM_PDU,
    _decode_IDM_PDU,
    _encode_IDM_PDU,
} from "./IDMProtocolSpecification";
import { id_idm } from "./UsefulDefinitions";
export {
    abandon,
    addEntry,
    administerPassword,
    changePassword,
    compare,
    directoryBind,
    list,
    modifyDN,
    modifyEntry,
    read,
    removeEntry,
    search,
} from "./DirectoryAbstractService";
export {
    coordinateShadowUpdate,
    dSAShadowBind,
    requestShadowUpdate,
    updateShadow,
} from "./DirectoryShadowAbstractService";
export {
    chainedAbandon,
    chainedAddEntry,
    chainedAdministerPassword,
    chainedChangePassword,
    chainedCompare,
    chainedLdapTransport,
    chainedLinkedLDAP,
    chainedList,
    chainedModifyDN,
    chainedModifyEntry,
    chainedRead,
    chainedRemoveEntry,
    chainedSearch,
    dSABind,
} from "./DistributedOperations";
export {
    IDM_PDU,
    IDM_PROTOCOL,
    _decode_IDM_PDU,
    _encode_IDM_PDU,
} from "./IDMProtocolSpecification";
export {
    dSAOperationalBindingManagementBind,
    establishOperationalBinding,
    modifyOperationalBinding,
    terminateOperationalBinding,
} from "./OperationalBindingManagement";
export {
    directoryAbstractService,
    directoryShadowAbstractService,
    distributedOperations,
    iDMProtocolSpecification,
    id_idm,
    opBindingManagement,
} from "./UsefulDefinitions";

// TODO: ObjectAssignment: dap-ip

export type DAP_IDM_PDUs = IDM_PDU; // DefinedType
export const _decode_DAP_IDM_PDUs = _decode_IDM_PDU;
export const _encode_DAP_IDM_PDUs = _encode_IDM_PDU;

// TODO: ObjectAssignment: dsp-ip

export type DSP_IDM_PDUs = IDM_PDU; // DefinedType
export const _decode_DSP_IDM_PDUs = _decode_IDM_PDU;
export const _encode_DSP_IDM_PDUs = _encode_IDM_PDU;

// TODO: ObjectAssignment: disp-ip

export type DISP_IDM_PDUs = IDM_PDU; // DefinedType
export const _decode_DISP_IDM_PDUs = _decode_IDM_PDU;
export const _encode_DISP_IDM_PDUs = _encode_IDM_PDU;

// TODO: ObjectAssignment: dop-ip

export type DOP_IDM_PDUs = IDM_PDU; // DefinedType
export const _decode_DOP_IDM_PDUs = _decode_IDM_PDU;
export const _encode_DOP_IDM_PDUs = _encode_IDM_PDU;

export const id_idm_dap: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [0],
    id_idm
);

export const id_idm_dsp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_idm
);

export const id_idm_disp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_idm
);

export const id_idm_dop: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_idm
);

/* END_MODULE DirectoryIDMProtocols */
