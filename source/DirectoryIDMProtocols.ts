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
import * as __utils from "./__utils";
export {
    IDM_PDU,
    _decode_IDM_PDU,
    _encode_IDM_PDU,
} from "./IDMProtocolSpecification";
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
let _cached_decoder_for_DAP_IDM_PDUs: __utils.ASN1Decoder<
    DAP_IDM_PDUs
> | null = null;
let _cached_encoder_for_DAP_IDM_PDUs: __utils.ASN1Encoder<
    DAP_IDM_PDUs
> | null = null;
export function _decode_DAP_IDM_PDUs(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DAP_IDM_PDUs) {
        _cached_decoder_for_DAP_IDM_PDUs = _decode_IDM_PDU;
    }
    return _cached_decoder_for_DAP_IDM_PDUs(el);
}
export function _encode_DAP_IDM_PDUs(
    value: DAP_IDM_PDUs,
    elGetter: __utils.ASN1Encoder<DAP_IDM_PDUs>
) {
    if (!_cached_encoder_for_DAP_IDM_PDUs) {
        _cached_encoder_for_DAP_IDM_PDUs = _encode_IDM_PDU;
    }
    return _cached_encoder_for_DAP_IDM_PDUs(value, elGetter);
}

// TODO: ObjectAssignment: dsp-ip

export type DSP_IDM_PDUs = IDM_PDU; // DefinedType
let _cached_decoder_for_DSP_IDM_PDUs: __utils.ASN1Decoder<
    DSP_IDM_PDUs
> | null = null;
let _cached_encoder_for_DSP_IDM_PDUs: __utils.ASN1Encoder<
    DSP_IDM_PDUs
> | null = null;
export function _decode_DSP_IDM_PDUs(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DSP_IDM_PDUs) {
        _cached_decoder_for_DSP_IDM_PDUs = _decode_IDM_PDU;
    }
    return _cached_decoder_for_DSP_IDM_PDUs(el);
}
export function _encode_DSP_IDM_PDUs(
    value: DSP_IDM_PDUs,
    elGetter: __utils.ASN1Encoder<DSP_IDM_PDUs>
) {
    if (!_cached_encoder_for_DSP_IDM_PDUs) {
        _cached_encoder_for_DSP_IDM_PDUs = _encode_IDM_PDU;
    }
    return _cached_encoder_for_DSP_IDM_PDUs(value, elGetter);
}

// TODO: ObjectAssignment: disp-ip

export type DISP_IDM_PDUs = IDM_PDU; // DefinedType
let _cached_decoder_for_DISP_IDM_PDUs: __utils.ASN1Decoder<
    DISP_IDM_PDUs
> | null = null;
let _cached_encoder_for_DISP_IDM_PDUs: __utils.ASN1Encoder<
    DISP_IDM_PDUs
> | null = null;
export function _decode_DISP_IDM_PDUs(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DISP_IDM_PDUs) {
        _cached_decoder_for_DISP_IDM_PDUs = _decode_IDM_PDU;
    }
    return _cached_decoder_for_DISP_IDM_PDUs(el);
}
export function _encode_DISP_IDM_PDUs(
    value: DISP_IDM_PDUs,
    elGetter: __utils.ASN1Encoder<DISP_IDM_PDUs>
) {
    if (!_cached_encoder_for_DISP_IDM_PDUs) {
        _cached_encoder_for_DISP_IDM_PDUs = _encode_IDM_PDU;
    }
    return _cached_encoder_for_DISP_IDM_PDUs(value, elGetter);
}

// TODO: ObjectAssignment: dop-ip

export type DOP_IDM_PDUs = IDM_PDU; // DefinedType
let _cached_decoder_for_DOP_IDM_PDUs: __utils.ASN1Decoder<
    DOP_IDM_PDUs
> | null = null;
let _cached_encoder_for_DOP_IDM_PDUs: __utils.ASN1Encoder<
    DOP_IDM_PDUs
> | null = null;
export function _decode_DOP_IDM_PDUs(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DOP_IDM_PDUs) {
        _cached_decoder_for_DOP_IDM_PDUs = _decode_IDM_PDU;
    }
    return _cached_decoder_for_DOP_IDM_PDUs(el);
}
export function _encode_DOP_IDM_PDUs(
    value: DOP_IDM_PDUs,
    elGetter: __utils.ASN1Encoder<DOP_IDM_PDUs>
) {
    if (!_cached_encoder_for_DOP_IDM_PDUs) {
        _cached_encoder_for_DOP_IDM_PDUs = _encode_IDM_PDU;
    }
    return _cached_encoder_for_DOP_IDM_PDUs(value, elGetter);
}

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
