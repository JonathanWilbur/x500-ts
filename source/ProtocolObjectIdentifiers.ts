/**
 * @module ProtocolObjectIdentifiers
 * @summary The ASN.1 module `ProtocolObjectIdentifiers`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.protocolObjectIdentifiers.4
 * IRI: undefined
 * EXTENSIBLE: false
 * ENCODINGREF: undefined
 * FILE: undefined
 *
 * This file was compiled by Wildboar Software's ASN.1 Compiler.
 *
 * @see {@link https://wildboarsoftware.com|Wildboar Software's Website}
 * /


/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import {
    id_ac,
    id_as,
    id_contract,
    id_package,
    id_rosObject,
} from "./UsefulDefinitions";
export {
    id_ac,
    id_as,
    id_contract,
    id_package,
    id_rosObject,
} from "./UsefulDefinitions";

/**
 * @summary id_rosObject_dua
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rosObject-dua OBJECT IDENTIFIER ::= {id-rosObject 1}
 * ```
 *
 * @constant
 */
export const id_rosObject_dua: OBJECT_IDENTIFIER = new _OID([1], id_rosObject);

/**
 * @summary id_rosObject_directory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rosObject-directory OBJECT IDENTIFIER ::= {id-rosObject 2}
 * ```
 *
 * @constant
 */
export const id_rosObject_directory: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_rosObject
);

/**
 * @summary id_rosObject_dapDSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rosObject-dapDSA OBJECT IDENTIFIER ::= {id-rosObject 3}
 * ```
 *
 * @constant
 */
export const id_rosObject_dapDSA: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_rosObject
);

/**
 * @summary id_rosObject_dspDSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rosObject-dspDSA OBJECT IDENTIFIER ::= {id-rosObject 4}
 * ```
 *
 * @constant
 */
export const id_rosObject_dspDSA: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_rosObject
);

/**
 * @summary id_rosObject_dopDSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rosObject-dopDSA OBJECT IDENTIFIER ::= {id-rosObject 7}
 * ```
 *
 * @constant
 */
export const id_rosObject_dopDSA: OBJECT_IDENTIFIER = new _OID(
    [7],
    id_rosObject
);

/**
 * @summary id_rosObject_initiatingConsumerDSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rosObject-initiatingConsumerDSA OBJECT IDENTIFIER ::= {id-rosObject 8}
 * ```
 *
 * @constant
 */
export const id_rosObject_initiatingConsumerDSA: OBJECT_IDENTIFIER = new _OID(
    [8],
    id_rosObject
);

/**
 * @summary id_rosObject_respondingSupplierDSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rosObject-respondingSupplierDSA OBJECT IDENTIFIER ::= {id-rosObject 9}
 * ```
 *
 * @constant
 */
export const id_rosObject_respondingSupplierDSA: OBJECT_IDENTIFIER = new _OID(
    [9],
    id_rosObject
);

/**
 * @summary id_rosObject_initiatingSupplierDSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rosObject-initiatingSupplierDSA OBJECT IDENTIFIER ::= {id-rosObject 10}
 * ```
 *
 * @constant
 */
export const id_rosObject_initiatingSupplierDSA: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_rosObject
);

/**
 * @summary id_rosObject_respondingConsumerDSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rosObject-respondingConsumerDSA OBJECT IDENTIFIER ::= {id-rosObject 11}
 * ```
 *
 * @constant
 */
export const id_rosObject_respondingConsumerDSA: OBJECT_IDENTIFIER = new _OID(
    [11],
    id_rosObject
);

/**
 * @summary id_contract_dap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-contract-dap OBJECT IDENTIFIER ::= {id-contract 1}
 * ```
 *
 * @constant
 */
export const id_contract_dap: OBJECT_IDENTIFIER = new _OID([1], id_contract);

/**
 * @summary id_contract_dsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-contract-dsp OBJECT IDENTIFIER ::= {id-contract 2}
 * ```
 *
 * @constant
 */
export const id_contract_dsp: OBJECT_IDENTIFIER = new _OID([2], id_contract);

/**
 * @summary id_contract_shadowConsumer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-contract-shadowConsumer OBJECT IDENTIFIER ::= {id-contract 3}
 * ```
 *
 * @constant
 */
export const id_contract_shadowConsumer: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_contract
);

/**
 * @summary id_contract_shadowSupplier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-contract-shadowSupplier OBJECT IDENTIFIER ::= {id-contract 4}
 * ```
 *
 * @constant
 */
export const id_contract_shadowSupplier: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_contract
);

/**
 * @summary id_contract_dop
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-contract-dop OBJECT IDENTIFIER ::= {id-contract 5}
 * ```
 *
 * @constant
 */
export const id_contract_dop: OBJECT_IDENTIFIER = new _OID([5], id_contract);

/**
 * @summary id_package_read
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-read OBJECT IDENTIFIER ::= {id-package 1}
 * ```
 *
 * @constant
 */
export const id_package_read: OBJECT_IDENTIFIER = new _OID([1], id_package);

/**
 * @summary id_package_search
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-search OBJECT IDENTIFIER ::= {id-package 2}
 * ```
 *
 * @constant
 */
export const id_package_search: OBJECT_IDENTIFIER = new _OID([2], id_package);

/**
 * @summary id_package_modify
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-modify OBJECT IDENTIFIER ::= {id-package 3}
 * ```
 *
 * @constant
 */
export const id_package_modify: OBJECT_IDENTIFIER = new _OID([3], id_package);

/**
 * @summary id_package_chainedRead
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-chainedRead OBJECT IDENTIFIER ::= {id-package 4}
 * ```
 *
 * @constant
 */
export const id_package_chainedRead: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_package
);

/**
 * @summary id_package_chainedSearch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-chainedSearch OBJECT IDENTIFIER ::= {id-package 5}
 * ```
 *
 * @constant
 */
export const id_package_chainedSearch: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_package
);

/**
 * @summary id_package_chainedModify
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-chainedModify OBJECT IDENTIFIER ::= {id-package 6}
 * ```
 *
 * @constant
 */
export const id_package_chainedModify: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_package
);

/**
 * @summary id_package_shadowConsumer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-shadowConsumer OBJECT IDENTIFIER ::= {id-package 7}
 * ```
 *
 * @constant
 */
export const id_package_shadowConsumer: OBJECT_IDENTIFIER = new _OID(
    [7],
    id_package
);

/**
 * @summary id_package_shadowSupplier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-shadowSupplier OBJECT IDENTIFIER ::= {id-package 8}
 * ```
 *
 * @constant
 */
export const id_package_shadowSupplier: OBJECT_IDENTIFIER = new _OID(
    [8],
    id_package
);

/**
 * @summary id_package_operationalBindingManagement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-operationalBindingManagement OBJECT IDENTIFIER ::= {id-package 9}
 * ```
 *
 * @constant
 */
export const id_package_operationalBindingManagement: OBJECT_IDENTIFIER = new _OID(
    [9],
    id_package
);

/**
 * @summary id_package_dapConnection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-dapConnection OBJECT IDENTIFIER ::= {id-package 10}
 * ```
 *
 * @constant
 */
export const id_package_dapConnection: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_package
);

/**
 * @summary id_package_dspConnection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-dspConnection OBJECT IDENTIFIER ::= {id-package 11}
 * ```
 *
 * @constant
 */
export const id_package_dspConnection: OBJECT_IDENTIFIER = new _OID(
    [11],
    id_package
);

/**
 * @summary id_package_dispConnection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-dispConnection OBJECT IDENTIFIER ::= {id-package 12}
 * ```
 *
 * @constant
 */
export const id_package_dispConnection: OBJECT_IDENTIFIER = new _OID(
    [12],
    id_package
);

/**
 * @summary id_package_dopConnection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-dopConnection OBJECT IDENTIFIER ::= {id-package 13}
 * ```
 *
 * @constant
 */
export const id_package_dopConnection: OBJECT_IDENTIFIER = new _OID(
    [13],
    id_package
);

/**
 * @summary id_ac_directoryAccessAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-directoryAccessAC OBJECT IDENTIFIER ::= {id-ac 1}
 * ```
 *
 * @constant
 */
export const id_ac_directoryAccessAC: OBJECT_IDENTIFIER = new _OID([1], id_ac);

/**
 * @summary id_ac_directorySystemAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-directorySystemAC OBJECT IDENTIFIER ::= {id-ac 2}
 * ```
 *
 * @constant
 */
export const id_ac_directorySystemAC: OBJECT_IDENTIFIER = new _OID([2], id_ac);

/**
 * @summary id_ac_directoryOperationalBindingManagementAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-directoryOperationalBindingManagementAC OBJECT IDENTIFIER ::= {id-ac 3}
 * ```
 *
 * @constant
 */
export const id_ac_directoryOperationalBindingManagementAC: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_ac
);

/**
 * @summary id_ac_shadowConsumerInitiatedAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-shadowConsumerInitiatedAC OBJECT IDENTIFIER ::= {id-ac 4}
 * ```
 *
 * @constant
 */
export const id_ac_shadowConsumerInitiatedAC: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_ac
);

/**
 * @summary id_ac_shadowSupplierInitiatedAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-shadowSupplierInitiatedAC OBJECT IDENTIFIER ::= {id-ac 5}
 * ```
 *
 * @constant
 */
export const id_ac_shadowSupplierInitiatedAC: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_ac
);

/**
 * @summary id_ac_reliableShadowSupplierInitiatedAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-reliableShadowSupplierInitiatedAC OBJECT IDENTIFIER ::= {id-ac 6}
 * ```
 *
 * @constant
 */
export const id_ac_reliableShadowSupplierInitiatedAC: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_ac
);

/**
 * @summary id_ac_reliableShadowConsumerInitiatedAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-reliableShadowConsumerInitiatedAC OBJECT IDENTIFIER ::= {id-ac 7}
 * ```
 *
 * @constant
 */
export const id_ac_reliableShadowConsumerInitiatedAC: OBJECT_IDENTIFIER = new _OID(
    [7],
    id_ac
);

/**
 * @summary id_ac_shadowSupplierInitiatedAsynchronousAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-shadowSupplierInitiatedAsynchronousAC OBJECT IDENTIFIER ::= {id-ac 8}
 * ```
 *
 * @constant
 */
export const id_ac_shadowSupplierInitiatedAsynchronousAC: OBJECT_IDENTIFIER = new _OID(
    [8],
    id_ac
);

/**
 * @summary id_ac_shadowConsumerInitiatedAsynchronousAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-shadowConsumerInitiatedAsynchronousAC OBJECT IDENTIFIER ::= {id-ac 9}
 * ```
 *
 * @constant
 */
export const id_ac_shadowConsumerInitiatedAsynchronousAC: OBJECT_IDENTIFIER = new _OID(
    [9],
    id_ac
);

/**
 * @summary id_as_directoryAccessAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-as-directoryAccessAS OBJECT IDENTIFIER ::= {id-as 1}
 * ```
 *
 * @constant
 */
export const id_as_directoryAccessAS: OBJECT_IDENTIFIER = new _OID([1], id_as);

/**
 * @summary id_as_directorySystemAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-as-directorySystemAS OBJECT IDENTIFIER ::= {id-as 2}
 * ```
 *
 * @constant
 */
export const id_as_directorySystemAS: OBJECT_IDENTIFIER = new _OID([2], id_as);

/**
 * @summary id_as_directoryShadowAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-as-directoryShadowAS OBJECT IDENTIFIER ::= {id-as 3}
 * ```
 *
 * @constant
 */
export const id_as_directoryShadowAS: OBJECT_IDENTIFIER = new _OID([3], id_as);

/**
 * @summary id_as_directoryOperationalBindingManagementAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-as-directoryOperationalBindingManagementAS OBJECT IDENTIFIER ::= {id-as 4}
 * ```
 *
 * @constant
 */
export const id_as_directoryOperationalBindingManagementAS: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_as
);

/**
 * @summary id_as_directoryReliableShadowAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-as-directoryReliableShadowAS OBJECT IDENTIFIER ::= {id-as 5}
 * ```
 *
 * @constant
 */
export const id_as_directoryReliableShadowAS: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_as
);

/**
 * @summary id_as_reliableShadowBindingAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-as-reliableShadowBindingAS OBJECT IDENTIFIER ::= {id-as 6}
 * ```
 *
 * @constant
 */
export const id_as_reliableShadowBindingAS: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_as
);

/**
 * @summary id_as_2or3se
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-as-2or3se OBJECT IDENTIFIER ::= {id-as 7}
 * ```
 *
 * @constant
 */
export const id_as_2or3se: OBJECT_IDENTIFIER = new _OID([7], id_as);

/* END_MODULE ProtocolObjectIdentifiers */
/* eslint-enable */
