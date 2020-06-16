/*
    BEGIN_MODULE DirectoryOSIProtocols
    OID: joint-iso-itu-t.ds.module.directoryOSIProtocols.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    OSI_PDU,
    _decode_OSI_PDU,
    _encode_OSI_PDU,
} from "./OSIProtocolSpecification";
import { id_ac, id_as } from "./UsefulDefinitions";
import * as __utils from "./__utils";
import { joint_iso_itu_t } from "./__utils";
export {
    OSI_PDU,
    _decode_OSI_PDU,
    _encode_OSI_PDU,
} from "./OSIProtocolSpecification";
export {
    commonProtocolSpecification,
    directoryAbstractService,
    directoryShadowAbstractService,
    distributedOperations,
    iDMProtocolSpecification,
    id_ac,
    id_as,
    id_idm,
    opBindingManagement,
    oSIProtocolSpecification,
} from "./UsefulDefinitions";

// TODO: ObjectClassAssignment: APPLICATION-CONTEXT

// TODO: ObjectAssignment: directoryAccessAC

export type DAP_OSI_PDUs = OSI_PDU; // DefinedType
let _cached_decoder_for_DAP_OSI_PDUs: __utils.ASN1Decoder<
    DAP_OSI_PDUs
> | null = null;
let _cached_encoder_for_DAP_OSI_PDUs: __utils.ASN1Encoder<
    DAP_OSI_PDUs
> | null = null;
export function _decode_DAP_OSI_PDUs(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DAP_OSI_PDUs) {
        _cached_decoder_for_DAP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_DAP_OSI_PDUs(el);
}
export function _encode_DAP_OSI_PDUs(
    value: DAP_OSI_PDUs,
    elGetter: __utils.ASN1Encoder<DAP_OSI_PDUs>
) {
    if (!_cached_encoder_for_DAP_OSI_PDUs) {
        _cached_encoder_for_DAP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_DAP_OSI_PDUs(value, elGetter);
}

// TODO: ObjectAssignment: directorySystemAC

export type DSP_OSI_PDUs = OSI_PDU; // DefinedType
let _cached_decoder_for_DSP_OSI_PDUs: __utils.ASN1Decoder<
    DSP_OSI_PDUs
> | null = null;
let _cached_encoder_for_DSP_OSI_PDUs: __utils.ASN1Encoder<
    DSP_OSI_PDUs
> | null = null;
export function _decode_DSP_OSI_PDUs(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DSP_OSI_PDUs) {
        _cached_decoder_for_DSP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_DSP_OSI_PDUs(el);
}
export function _encode_DSP_OSI_PDUs(
    value: DSP_OSI_PDUs,
    elGetter: __utils.ASN1Encoder<DSP_OSI_PDUs>
) {
    if (!_cached_encoder_for_DSP_OSI_PDUs) {
        _cached_encoder_for_DSP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_DSP_OSI_PDUs(value, elGetter);
}

// TODO: ObjectAssignment: directoryOperationalBindingManagementAC

export type DOP_OSI_PDUs = OSI_PDU; // DefinedType
let _cached_decoder_for_DOP_OSI_PDUs: __utils.ASN1Decoder<
    DOP_OSI_PDUs
> | null = null;
let _cached_encoder_for_DOP_OSI_PDUs: __utils.ASN1Encoder<
    DOP_OSI_PDUs
> | null = null;
export function _decode_DOP_OSI_PDUs(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DOP_OSI_PDUs) {
        _cached_decoder_for_DOP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_DOP_OSI_PDUs(el);
}
export function _encode_DOP_OSI_PDUs(
    value: DOP_OSI_PDUs,
    elGetter: __utils.ASN1Encoder<DOP_OSI_PDUs>
) {
    if (!_cached_encoder_for_DOP_OSI_PDUs) {
        _cached_encoder_for_DOP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_DOP_OSI_PDUs(value, elGetter);
}

// TODO: ObjectAssignment: shadowSupplierInitiatedAC

export type ShadowSupplierInitiatedDISP_OSI_PDUs = OSI_PDU; // DefinedType
let _cached_decoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs: __utils.ASN1Decoder<
    ShadowSupplierInitiatedDISP_OSI_PDUs
> | null = null;
let _cached_encoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs: __utils.ASN1Encoder<
    ShadowSupplierInitiatedDISP_OSI_PDUs
> | null = null;
export function _decode_ShadowSupplierInitiatedDISP_OSI_PDUs(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs) {
        _cached_decoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs(el);
}
export function _encode_ShadowSupplierInitiatedDISP_OSI_PDUs(
    value: ShadowSupplierInitiatedDISP_OSI_PDUs,
    elGetter: __utils.ASN1Encoder<ShadowSupplierInitiatedDISP_OSI_PDUs>
) {
    if (!_cached_encoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs) {
        _cached_encoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs(
        value,
        elGetter
    );
}

// TODO: ObjectAssignment: shadowSupplierInitiatedAsynchronousAC

export type ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs = OSI_PDU; // DefinedType
let _cached_decoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs: __utils.ASN1Decoder<
    ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs
> | null = null;
let _cached_encoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs: __utils.ASN1Encoder<
    ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs
> | null = null;
export function _decode_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs) {
        _cached_decoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs(
        el
    );
}
export function _encode_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs(
    value: ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs,
    elGetter: __utils.ASN1Encoder<
        ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs
    >
) {
    if (!_cached_encoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs) {
        _cached_encoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs(
        value,
        elGetter
    );
}

// TODO: ObjectAssignment: shadowConsumerInitiatedAC

export type ShadowConsumerInitiatedDISP_OSI_PDUs = OSI_PDU; // DefinedType
let _cached_decoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs: __utils.ASN1Decoder<
    ShadowConsumerInitiatedDISP_OSI_PDUs
> | null = null;
let _cached_encoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs: __utils.ASN1Encoder<
    ShadowConsumerInitiatedDISP_OSI_PDUs
> | null = null;
export function _decode_ShadowConsumerInitiatedDISP_OSI_PDUs(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs) {
        _cached_decoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs(el);
}
export function _encode_ShadowConsumerInitiatedDISP_OSI_PDUs(
    value: ShadowConsumerInitiatedDISP_OSI_PDUs,
    elGetter: __utils.ASN1Encoder<ShadowConsumerInitiatedDISP_OSI_PDUs>
) {
    if (!_cached_encoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs) {
        _cached_encoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs(
        value,
        elGetter
    );
}

// TODO: ObjectAssignment: shadowConsumerInitiatedAsynchronousAC

export type ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs = OSI_PDU; // DefinedType
let _cached_decoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs: __utils.ASN1Decoder<
    ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs
> | null = null;
let _cached_encoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs: __utils.ASN1Encoder<
    ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs
> | null = null;
export function _decode_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs) {
        _cached_decoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs(
        el
    );
}
export function _encode_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs(
    value: ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs,
    elGetter: __utils.ASN1Encoder<
        ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs
    >
) {
    if (!_cached_encoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs) {
        _cached_encoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs(
        value,
        elGetter
    );
}

export const id_as_directoryAccessAS: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_as
);

export const id_as_directorySystemAS: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_as
);

export const id_as_directoryShadowAS: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_as
);

export const id_as_directoryOperationalBindingManagementAS: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_as
);

export const id_acseAS: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* association-control */ 2,
        /* abstract-syntax */ 1,
        /* apdus */ 0,
        /* version */ 1,
    ],
    joint_iso_itu_t
);

export const id_ac_directoryAccessAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_ac
);

export const id_ac_directorySystemAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_ac
);

export const id_ac_directoryOperationalBindingManagementAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_ac
);

export const id_ac_shadowConsumerInitiatedAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_ac
);

export const id_ac_shadowSupplierInitiatedAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_ac
);

export const id_ac_shadowSupplierInitiatedAsynchronousAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    id_ac
);

export const id_ac_shadowConsumerInitiatedAsynchronousAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    id_ac
);

/* END_MODULE DirectoryOSIProtocols */
