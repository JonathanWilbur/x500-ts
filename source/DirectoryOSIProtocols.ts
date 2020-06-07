
// DirectoryOSIProtocols
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    commonProtocolSpecification,
    directoryAbstractService,
    distributedOperations,
    directoryShadowAbstractService,
    id_ac,
    id_as,
    id_idm,
    iDMProtocolSpecification,
    opBindingManagement,
    oSIProtocolSpecification
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

import * as CommonProtocolSpecification from "./CommonProtocolSpecification";
import {
    OPERATION
} from "./CommonProtocolSpecification";

import * as OSIProtocolSpecification from "./OSIProtocolSpecification";
import {
    OSI_PDU,
    _decode_OSI_PDU,
    _encode_OSI_PDU
} from "./OSIProtocolSpecification";

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

// TODO: ObjectClassAssignment: APPLICATION-CONTEXT

// TODO: ObjectAssignment: directoryAccessAC

export type DAP_OSI_PDUs = OSI_PDU; // DefinedType
export const _decode_DAP_OSI_PDUs = _decode_OSI_PDU;
export const _encode_DAP_OSI_PDUs = _encode_OSI_PDU;


// TODO: ObjectAssignment: directorySystemAC

export type DSP_OSI_PDUs = OSI_PDU; // DefinedType
export const _decode_DSP_OSI_PDUs = _decode_OSI_PDU;
export const _encode_DSP_OSI_PDUs = _encode_OSI_PDU;


// TODO: ObjectAssignment: directoryOperationalBindingManagementAC

export type DOP_OSI_PDUs = OSI_PDU; // DefinedType
export const _decode_DOP_OSI_PDUs = _decode_OSI_PDU;
export const _encode_DOP_OSI_PDUs = _encode_OSI_PDU;


// TODO: ObjectAssignment: shadowSupplierInitiatedAC

export type ShadowSupplierInitiatedDISP_OSI_PDUs = OSI_PDU; // DefinedType
export const _decode_ShadowSupplierInitiatedDISP_OSI_PDUs = _decode_OSI_PDU;
export const _encode_ShadowSupplierInitiatedDISP_OSI_PDUs = _encode_OSI_PDU;


// TODO: ObjectAssignment: shadowSupplierInitiatedAsynchronousAC

export type ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs = OSI_PDU; // DefinedType
export const _decode_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs = _decode_OSI_PDU;
export const _encode_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs = _encode_OSI_PDU;


// TODO: ObjectAssignment: shadowConsumerInitiatedAC

export type ShadowConsumerInitiatedDISP_OSI_PDUs = OSI_PDU; // DefinedType
export const _decode_ShadowConsumerInitiatedDISP_OSI_PDUs = _decode_OSI_PDU;
export const _encode_ShadowConsumerInitiatedDISP_OSI_PDUs = _encode_OSI_PDU;


// TODO: ObjectAssignment: shadowConsumerInitiatedAsynchronousAC

export type ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs = OSI_PDU; // DefinedType
export const _decode_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs = _decode_OSI_PDU;
export const _encode_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs = _encode_OSI_PDU;


export const id_as_directoryAccessAS: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_as);

export const id_as_directorySystemAS: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_as);

export const id_as_directoryShadowAS: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_as);

export const id_as_directoryOperationalBindingManagementAS: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_as);

export const id_acseAS: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* association-control */ 2,
    /* abstract-syntax */ 1,
    /* apdus */ 0,
    /* version */ 1,
], joint_iso_itu_t);

export const id_ac_directoryAccessAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_ac);

export const id_ac_directorySystemAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_ac);

export const id_ac_directoryOperationalBindingManagementAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_ac);

export const id_ac_shadowConsumerInitiatedAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_ac);

export const id_ac_shadowSupplierInitiatedAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_ac);

export const id_ac_shadowSupplierInitiatedAsynchronousAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
], id_ac);

export const id_ac_shadowConsumerInitiatedAsynchronousAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
], id_ac);

