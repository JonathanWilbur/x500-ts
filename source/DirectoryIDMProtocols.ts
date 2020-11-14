/**
 * @module DirectoryIDMProtocols
 * @summary The ASN.1 module `DirectoryIDMProtocols`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.directoryIDMProtocols.9
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
import {
    ASN1Element as _Element,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
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
    search,
} from "./DirectoryAbstractService";
import {
    coordinateShadowUpdate,
    dSAShadowBind,
    requestShadowUpdate,
    updateShadow,
} from "./DirectoryShadowAbstractService";
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
    dSABind,
} from "./DistributedOperations";
import {
    IDM_PDU,
    IDM_PROTOCOL,
    _decode_IDM_PDU,
    _encode_IDM_PDU,
} from "./IDMProtocolSpecification";
import {
    dSAOperationalBindingManagementBind,
    establishOperationalBinding,
    modifyOperationalBinding,
    terminateOperationalBinding,
} from "./OperationalBindingManagement";
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
export { id_idm } from "./UsefulDefinitions";

/**
 * @summary id_idm_dap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-idm-dap  OBJECT IDENTIFIER ::= {id-idm 0}
 * ```
 *
 * @constant
 */
export const id_idm_dap: OBJECT_IDENTIFIER = new _OID([0], id_idm);

/**
 * @summary dap_ip
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dap-ip IDM-PROTOCOL ::= {
 *   BIND-OPERATION  directoryBind
 *   OPERATIONS      {read |
 *                    compare |
 *                    abandon |
 *                    list |
 *                    search |
 *                    addEntry |
 *                    removeEntry |
 *                    modifyEntry |
 *                    modifyDN |
 *                    administerPassword |
 *                    changePassword }
 *   ID              id-idm-dap }
 * ```
 *
 * @constant
 * @type {IDM_PROTOCOL}
 * @implements {IDM_PROTOCOL}
 */
export const dap_ip: IDM_PROTOCOL = {
    class: "IDM-PROTOCOL",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": directoryBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        read,
        compare,
        abandon,
        list,
        search,
        addEntry,
        removeEntry,
        modifyEntry,
        modifyDN,
        administerPassword,
        changePassword,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_idm_dap /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

export type DAP_IDM_PDUs<> = IDM_PDU; // DefinedType
let _cached_decoder_for_DAP_IDM_PDUs: $.ASN1Decoder<DAP_IDM_PDUs> | null = null;
let _cached_encoder_for_DAP_IDM_PDUs: $.ASN1Encoder<DAP_IDM_PDUs> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DAP_IDM_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DAP_IDM_PDUs} The decoded data structure.
 */
export function _decode_DAP_IDM_PDUs(el: _Element) {
    if (!_cached_decoder_for_DAP_IDM_PDUs) {
        _cached_decoder_for_DAP_IDM_PDUs = _decode_IDM_PDU;
    }
    return _cached_decoder_for_DAP_IDM_PDUs(el);
}
/**
 * @summary Encodes a(n) DAP_IDM_PDUs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DAP_IDM_PDUs, encoded as an ASN.1 Element.
 */
export function _encode_DAP_IDM_PDUs(
    value: DAP_IDM_PDUs,
    elGetter: $.ASN1Encoder<DAP_IDM_PDUs>
) {
    if (!_cached_encoder_for_DAP_IDM_PDUs) {
        _cached_encoder_for_DAP_IDM_PDUs = _encode_IDM_PDU;
    }
    return _cached_encoder_for_DAP_IDM_PDUs(value, elGetter);
}

/**
 * @summary id_idm_dsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-idm-dsp  OBJECT IDENTIFIER ::= {id-idm 1}
 * ```
 *
 * @constant
 */
export const id_idm_dsp: OBJECT_IDENTIFIER = new _OID([1], id_idm);

/**
 * @summary dsp_ip
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsp-ip IDM-PROTOCOL ::= {
 *   BIND-OPERATION  dSABind
 *   OPERATIONS      {chainedRead |
 *                    chainedCompare |
 *                    chainedAbandon |
 *                    chainedList |
 *                    chainedSearch |
 *                    chainedAddEntry |
 *                    chainedRemoveEntry |
 *                    chainedModifyEntry |
 *                    chainedModifyDN |
 *                    chainedAdministerPassword |
 *                    chainedChangePassword |
 *                    chainedLdapTransport |
 *                    chainedLinkedLDAP }
 *   ID              id-idm-dsp }
 * ```
 *
 * @constant
 * @type {IDM_PROTOCOL}
 * @implements {IDM_PROTOCOL}
 */
export const dsp_ip: IDM_PROTOCOL = {
    class: "IDM-PROTOCOL",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSABind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        chainedRead,
        chainedCompare,
        chainedAbandon,
        chainedList,
        chainedSearch,
        chainedAddEntry,
        chainedRemoveEntry,
        chainedModifyEntry,
        chainedModifyDN,
        chainedAdministerPassword,
        chainedChangePassword,
        chainedLdapTransport,
        chainedLinkedLDAP,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_idm_dsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

export type DSP_IDM_PDUs<> = IDM_PDU; // DefinedType
let _cached_decoder_for_DSP_IDM_PDUs: $.ASN1Decoder<DSP_IDM_PDUs> | null = null;
let _cached_encoder_for_DSP_IDM_PDUs: $.ASN1Encoder<DSP_IDM_PDUs> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DSP_IDM_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSP_IDM_PDUs} The decoded data structure.
 */
export function _decode_DSP_IDM_PDUs(el: _Element) {
    if (!_cached_decoder_for_DSP_IDM_PDUs) {
        _cached_decoder_for_DSP_IDM_PDUs = _decode_IDM_PDU;
    }
    return _cached_decoder_for_DSP_IDM_PDUs(el);
}
/**
 * @summary Encodes a(n) DSP_IDM_PDUs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSP_IDM_PDUs, encoded as an ASN.1 Element.
 */
export function _encode_DSP_IDM_PDUs(
    value: DSP_IDM_PDUs,
    elGetter: $.ASN1Encoder<DSP_IDM_PDUs>
) {
    if (!_cached_encoder_for_DSP_IDM_PDUs) {
        _cached_encoder_for_DSP_IDM_PDUs = _encode_IDM_PDU;
    }
    return _cached_encoder_for_DSP_IDM_PDUs(value, elGetter);
}

/**
 * @summary id_idm_disp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-idm-disp OBJECT IDENTIFIER ::= {id-idm 2}
 * ```
 *
 * @constant
 */
export const id_idm_disp: OBJECT_IDENTIFIER = new _OID([2], id_idm);

/**
 * @summary disp_ip
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * disp-ip IDM-PROTOCOL ::= {
 *   BIND-OPERATION  dSAShadowBind
 *   OPERATIONS      {requestShadowUpdate |
 *                    updateShadow |
 *                    coordinateShadowUpdate}
 *   ID              id-idm-disp }
 * ```
 *
 * @constant
 * @type {IDM_PROTOCOL}
 * @implements {IDM_PROTOCOL}
 */
export const disp_ip: IDM_PROTOCOL = {
    class: "IDM-PROTOCOL",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSAShadowBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        requestShadowUpdate,
        updateShadow,
        coordinateShadowUpdate,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_idm_disp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

export type DISP_IDM_PDUs<> = IDM_PDU; // DefinedType
let _cached_decoder_for_DISP_IDM_PDUs: $.ASN1Decoder<
    DISP_IDM_PDUs
> | null = null;
let _cached_encoder_for_DISP_IDM_PDUs: $.ASN1Encoder<
    DISP_IDM_PDUs
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DISP_IDM_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DISP_IDM_PDUs} The decoded data structure.
 */
export function _decode_DISP_IDM_PDUs(el: _Element) {
    if (!_cached_decoder_for_DISP_IDM_PDUs) {
        _cached_decoder_for_DISP_IDM_PDUs = _decode_IDM_PDU;
    }
    return _cached_decoder_for_DISP_IDM_PDUs(el);
}
/**
 * @summary Encodes a(n) DISP_IDM_PDUs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DISP_IDM_PDUs, encoded as an ASN.1 Element.
 */
export function _encode_DISP_IDM_PDUs(
    value: DISP_IDM_PDUs,
    elGetter: $.ASN1Encoder<DISP_IDM_PDUs>
) {
    if (!_cached_encoder_for_DISP_IDM_PDUs) {
        _cached_encoder_for_DISP_IDM_PDUs = _encode_IDM_PDU;
    }
    return _cached_encoder_for_DISP_IDM_PDUs(value, elGetter);
}

/**
 * @summary id_idm_dop
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-idm-dop  OBJECT IDENTIFIER ::= {id-idm 3}
 * ```
 *
 * @constant
 */
export const id_idm_dop: OBJECT_IDENTIFIER = new _OID([3], id_idm);

/**
 * @summary dop_ip
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dop-ip IDM-PROTOCOL ::= {
 *   BIND-OPERATION  dSAOperationalBindingManagementBind
 *   OPERATIONS      {establishOperationalBinding |
 *                    modifyOperationalBinding |
 *                    terminateOperationalBinding}
 *   ID              id-idm-dop }
 * ```
 *
 * @constant
 * @type {IDM_PROTOCOL}
 * @implements {IDM_PROTOCOL}
 */
export const dop_ip: IDM_PROTOCOL = {
    class: "IDM-PROTOCOL",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSAOperationalBindingManagementBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        establishOperationalBinding,
        modifyOperationalBinding,
        terminateOperationalBinding,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_idm_dop /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

export type DOP_IDM_PDUs<> = IDM_PDU; // DefinedType
let _cached_decoder_for_DOP_IDM_PDUs: $.ASN1Decoder<DOP_IDM_PDUs> | null = null;
let _cached_encoder_for_DOP_IDM_PDUs: $.ASN1Encoder<DOP_IDM_PDUs> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DOP_IDM_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DOP_IDM_PDUs} The decoded data structure.
 */
export function _decode_DOP_IDM_PDUs(el: _Element) {
    if (!_cached_decoder_for_DOP_IDM_PDUs) {
        _cached_decoder_for_DOP_IDM_PDUs = _decode_IDM_PDU;
    }
    return _cached_decoder_for_DOP_IDM_PDUs(el);
}
/**
 * @summary Encodes a(n) DOP_IDM_PDUs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOP_IDM_PDUs, encoded as an ASN.1 Element.
 */
export function _encode_DOP_IDM_PDUs(
    value: DOP_IDM_PDUs,
    elGetter: $.ASN1Encoder<DOP_IDM_PDUs>
) {
    if (!_cached_encoder_for_DOP_IDM_PDUs) {
        _cached_encoder_for_DOP_IDM_PDUs = _encode_IDM_PDU;
    }
    return _cached_encoder_for_DOP_IDM_PDUs(value, elGetter);
}

/* END_MODULE DirectoryIDMProtocols */
/* eslint-enable */
