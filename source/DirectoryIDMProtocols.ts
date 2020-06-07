
// DirectoryIDMProtocols
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    directoryAbstractService,
    distributedOperations,
    directoryShadowAbstractService,
    id_idm,
    iDMProtocolSpecification,
    opBindingManagement
} from "./UsefulDefinitions";

import * as OperationalBindingManagement from "./OperationalBindingManagement";
import {
    dSAOperationalBindingManagementBind,
    establishOperationalBinding,
    modifyOperationalBinding,
    terminateOperationalBinding
} from "./OperationalBindingManagement";

import * as DirectoryAbstractService from "./DirectoryAbstractService";
import {
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
    search
} from "./DirectoryAbstractService";

import * as DistributedOperations from "./DistributedOperations";
import {
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
    dSABind
} from "./DistributedOperations";

import * as IDMProtocolSpecification from "./IDMProtocolSpecification";
import {
    IDM_PDU,
    IDM_PROTOCOL,
    _decode_IDM_PDU,
    _encode_IDM_PDU
} from "./IDMProtocolSpecification";

import * as DirectoryShadowAbstractService from "./DirectoryShadowAbstractService";
import {
    coordinateShadowUpdate,
    dSAShadowBind,
    requestShadowUpdate,
    updateShadow
} from "./DirectoryShadowAbstractService";


const itu_t: number = 0;
const itu_r: number = 0;
const ccitt: number = 0;
const iso: number = 1;
const joint_iso_itu_t: number = 2;
const joint_iso_ccitt: number = 2;

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


export const id_idm_dap: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    0,
], id_idm);

export const id_idm_dsp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_idm);

export const id_idm_disp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_idm);

export const id_idm_dop: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_idm);

