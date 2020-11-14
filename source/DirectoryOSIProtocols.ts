/**
 * @module DirectoryOSIProtocols
 * @summary The ASN.1 module `DirectoryOSIProtocols`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.directoryOSIProtocols.9
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
    joint_iso_itu_t,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { OPERATION } from "./CommonProtocolSpecification";
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
    dSAOperationalBindingManagementBind,
    establishOperationalBinding,
    modifyOperationalBinding,
    terminateOperationalBinding,
} from "./OperationalBindingManagement";
import {
    OSI_PDU,
    _decode_OSI_PDU,
    _encode_OSI_PDU,
} from "./OSIProtocolSpecification";
import { id_ac, id_as } from "./UsefulDefinitions";
export { OPERATION } from "./CommonProtocolSpecification";
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
    dSAOperationalBindingManagementBind,
    establishOperationalBinding,
    modifyOperationalBinding,
    terminateOperationalBinding,
} from "./OperationalBindingManagement";
export {
    OSI_PDU,
    _decode_OSI_PDU,
    _encode_OSI_PDU,
} from "./OSIProtocolSpecification";
export { id_ac, id_as, id_idm } from "./UsefulDefinitions";

/**
 * @summary id_ac_directoryAccessAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-directoryAccessAC                       OBJECT IDENTIFIER ::= {id-ac 1}
 * ```
 *
 * @constant
 */
export const id_ac_directoryAccessAC: OBJECT_IDENTIFIER = new _OID([1], id_ac);

/**
 * @summary APPLICATION_CONTEXT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * APPLICATION-CONTEXT ::= CLASS {
 *   &bind-operation          OPERATION,
 *   &Operations              OPERATION,
 *   &applicationContextName  OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   BIND-OPERATION &bind-operation
 *   OPERATIONS &Operations
 *   APPLICATION CONTEXT NAME &applicationContextName }
 * ```
 *
 * @interface
 */
export interface APPLICATION_CONTEXT {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "APPLICATION-CONTEXT";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof APPLICATION_CONTEXT]: $.ASN1Decoder<
                APPLICATION_CONTEXT[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof APPLICATION_CONTEXT]: $.ASN1Encoder<
                APPLICATION_CONTEXT[_K]
            >;
        }
    >;
    /**
     * @summary &bind-operation
     */
    "&bind-operation"?: OPERATION;
    /**
     * @summary &Operations
     */
    "&Operations"?: OPERATION[];
    /**
     * @summary &applicationContextName
     */
    "&applicationContextName"?: OBJECT_IDENTIFIER;
}

/**
 * @summary directoryAccessAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryAccessAC APPLICATION-CONTEXT ::= {
 *   BIND-OPERATION            directoryBind
 *   OPERATIONS                {read |
 *                              compare |
 *                              abandon |
 *                              list |
 *                              search |
 *                              addEntry |
 *                              removeEntry |
 *                              modifyEntry |
 *                              modifyDN |
 *                              administerPassword |
 *                              changePassword }
 *   APPLICATION CONTEXT NAME  id-ac-directoryAccessAC }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const directoryAccessAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
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
    "&applicationContextName": id_ac_directoryAccessAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

export type DAP_OSI_PDUs<> = OSI_PDU; // DefinedType
let _cached_decoder_for_DAP_OSI_PDUs: $.ASN1Decoder<DAP_OSI_PDUs> | null = null;
let _cached_encoder_for_DAP_OSI_PDUs: $.ASN1Encoder<DAP_OSI_PDUs> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DAP_OSI_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DAP_OSI_PDUs} The decoded data structure.
 */
export function _decode_DAP_OSI_PDUs(el: _Element) {
    if (!_cached_decoder_for_DAP_OSI_PDUs) {
        _cached_decoder_for_DAP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_DAP_OSI_PDUs(el);
}
/**
 * @summary Encodes a(n) DAP_OSI_PDUs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DAP_OSI_PDUs, encoded as an ASN.1 Element.
 */
export function _encode_DAP_OSI_PDUs(
    value: DAP_OSI_PDUs,
    elGetter: $.ASN1Encoder<DAP_OSI_PDUs>
) {
    if (!_cached_encoder_for_DAP_OSI_PDUs) {
        _cached_encoder_for_DAP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_DAP_OSI_PDUs(value, elGetter);
}

/**
 * @summary id_ac_directorySystemAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-directorySystemAC                       OBJECT IDENTIFIER ::= {id-ac 2}
 * ```
 *
 * @constant
 */
export const id_ac_directorySystemAC: OBJECT_IDENTIFIER = new _OID([2], id_ac);

/**
 * @summary directorySystemAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directorySystemAC APPLICATION-CONTEXT ::= {
 *   BIND-OPERATION            dSABind
 *   OPERATIONS                {chainedRead |
 *                              chainedCompare |
 *                              chainedAbandon |
 *                              chainedList |
 *                              chainedSearch |
 *                              chainedAddEntry |
 *                              chainedRemoveEntry |
 *                              chainedModifyEntry |
 *                              chainedModifyDN |
 *                              chainedAdministerPassword |
 *                              chainedChangePassword |
 *                              chainedLdapTransport |
 *                              chainedLinkedLDAP }
 *   APPLICATION CONTEXT NAME  id-ac-directorySystemAC }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const directorySystemAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
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
    "&applicationContextName": id_ac_directorySystemAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

export type DSP_OSI_PDUs<> = OSI_PDU; // DefinedType
let _cached_decoder_for_DSP_OSI_PDUs: $.ASN1Decoder<DSP_OSI_PDUs> | null = null;
let _cached_encoder_for_DSP_OSI_PDUs: $.ASN1Encoder<DSP_OSI_PDUs> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DSP_OSI_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSP_OSI_PDUs} The decoded data structure.
 */
export function _decode_DSP_OSI_PDUs(el: _Element) {
    if (!_cached_decoder_for_DSP_OSI_PDUs) {
        _cached_decoder_for_DSP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_DSP_OSI_PDUs(el);
}
/**
 * @summary Encodes a(n) DSP_OSI_PDUs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSP_OSI_PDUs, encoded as an ASN.1 Element.
 */
export function _encode_DSP_OSI_PDUs(
    value: DSP_OSI_PDUs,
    elGetter: $.ASN1Encoder<DSP_OSI_PDUs>
) {
    if (!_cached_encoder_for_DSP_OSI_PDUs) {
        _cached_encoder_for_DSP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_DSP_OSI_PDUs(value, elGetter);
}

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
 * @summary directoryOperationalBindingManagementAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryOperationalBindingManagementAC APPLICATION-CONTEXT ::= {
 *   BIND-OPERATION            dSAOperationalBindingManagementBind
 *   OPERATIONS                {establishOperationalBinding |
 *                              modifyOperationalBinding |
 *                              terminateOperationalBinding}
 *   APPLICATION CONTEXT NAME  id-ac-directoryOperationalBindingManagementAC }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const directoryOperationalBindingManagementAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSAOperationalBindingManagementBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        establishOperationalBinding,
        modifyOperationalBinding,
        terminateOperationalBinding,
    ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_directoryOperationalBindingManagementAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

export type DOP_OSI_PDUs<> = OSI_PDU; // DefinedType
let _cached_decoder_for_DOP_OSI_PDUs: $.ASN1Decoder<DOP_OSI_PDUs> | null = null;
let _cached_encoder_for_DOP_OSI_PDUs: $.ASN1Encoder<DOP_OSI_PDUs> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DOP_OSI_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DOP_OSI_PDUs} The decoded data structure.
 */
export function _decode_DOP_OSI_PDUs(el: _Element) {
    if (!_cached_decoder_for_DOP_OSI_PDUs) {
        _cached_decoder_for_DOP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_DOP_OSI_PDUs(el);
}
/**
 * @summary Encodes a(n) DOP_OSI_PDUs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOP_OSI_PDUs, encoded as an ASN.1 Element.
 */
export function _encode_DOP_OSI_PDUs(
    value: DOP_OSI_PDUs,
    elGetter: $.ASN1Encoder<DOP_OSI_PDUs>
) {
    if (!_cached_encoder_for_DOP_OSI_PDUs) {
        _cached_encoder_for_DOP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_DOP_OSI_PDUs(value, elGetter);
}

/**
 * @summary id_ac_shadowSupplierInitiatedAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-shadowSupplierInitiatedAC               OBJECT IDENTIFIER ::= {id-ac 5}
 * ```
 *
 * @constant
 */
export const id_ac_shadowSupplierInitiatedAC: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_ac
);

/**
 * @summary shadowSupplierInitiatedAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowSupplierInitiatedAC APPLICATION-CONTEXT ::= {
 *   BIND-OPERATION            dSAShadowBind
 *   OPERATIONS                {updateShadow |
 *                              coordinateShadowUpdate}
 *   APPLICATION CONTEXT NAME  id-ac-shadowSupplierInitiatedAC }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const shadowSupplierInitiatedAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSAShadowBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        updateShadow,
        coordinateShadowUpdate,
    ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_shadowSupplierInitiatedAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

export type ShadowSupplierInitiatedDISP_OSI_PDUs<> = OSI_PDU; // DefinedType
let _cached_decoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs: $.ASN1Decoder<
    ShadowSupplierInitiatedDISP_OSI_PDUs
> | null = null;
let _cached_encoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs: $.ASN1Encoder<
    ShadowSupplierInitiatedDISP_OSI_PDUs
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ShadowSupplierInitiatedDISP_OSI_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShadowSupplierInitiatedDISP_OSI_PDUs} The decoded data structure.
 */
export function _decode_ShadowSupplierInitiatedDISP_OSI_PDUs(el: _Element) {
    if (!_cached_decoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs) {
        _cached_decoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs(el);
}
/**
 * @summary Encodes a(n) ShadowSupplierInitiatedDISP_OSI_PDUs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShadowSupplierInitiatedDISP_OSI_PDUs, encoded as an ASN.1 Element.
 */
export function _encode_ShadowSupplierInitiatedDISP_OSI_PDUs(
    value: ShadowSupplierInitiatedDISP_OSI_PDUs,
    elGetter: $.ASN1Encoder<ShadowSupplierInitiatedDISP_OSI_PDUs>
) {
    if (!_cached_encoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs) {
        _cached_encoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_ShadowSupplierInitiatedDISP_OSI_PDUs(
        value,
        elGetter
    );
}

/**
 * @summary id_ac_shadowSupplierInitiatedAsynchronousAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-shadowSupplierInitiatedAsynchronousAC   OBJECT IDENTIFIER ::= {id-ac 8}
 * ```
 *
 * @constant
 */
export const id_ac_shadowSupplierInitiatedAsynchronousAC: OBJECT_IDENTIFIER = new _OID(
    [8],
    id_ac
);

/**
 * @summary shadowSupplierInitiatedAsynchronousAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowSupplierInitiatedAsynchronousAC APPLICATION-CONTEXT ::= {
 *   BIND-OPERATION            dSAShadowBind
 *   OPERATIONS                {updateShadow |
 *                              coordinateShadowUpdate}
 *   APPLICATION CONTEXT NAME  id-ac-shadowSupplierInitiatedAsynchronousAC }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const shadowSupplierInitiatedAsynchronousAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSAShadowBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        updateShadow,
        coordinateShadowUpdate,
    ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_shadowSupplierInitiatedAsynchronousAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

export type ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs<> = OSI_PDU; // DefinedType
let _cached_decoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs: $.ASN1Decoder<
    ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs
> | null = null;
let _cached_encoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs: $.ASN1Encoder<
    ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs} The decoded data structure.
 */
export function _decode_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs(
    el: _Element
) {
    if (!_cached_decoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs) {
        _cached_decoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs(
        el
    );
}
/**
 * @summary Encodes a(n) ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs, encoded as an ASN.1 Element.
 */
export function _encode_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs(
    value: ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs,
    elGetter: $.ASN1Encoder<ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs>
) {
    if (!_cached_encoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs) {
        _cached_encoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_ShadowSupplierInitiatedAsynchronousDISP_OSI_PDUs(
        value,
        elGetter
    );
}

/**
 * @summary id_ac_shadowConsumerInitiatedAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-shadowConsumerInitiatedAC               OBJECT IDENTIFIER ::= {id-ac 4}
 * ```
 *
 * @constant
 */
export const id_ac_shadowConsumerInitiatedAC: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_ac
);

/**
 * @summary shadowConsumerInitiatedAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowConsumerInitiatedAC APPLICATION-CONTEXT ::= {
 *   BIND-OPERATION            dSAShadowBind
 *   OPERATIONS                {requestShadowUpdate |
 *                              updateShadow}
 *   APPLICATION CONTEXT NAME  id-ac-shadowConsumerInitiatedAC }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const shadowConsumerInitiatedAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSAShadowBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        requestShadowUpdate,
        updateShadow,
    ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_shadowConsumerInitiatedAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

export type ShadowConsumerInitiatedDISP_OSI_PDUs<> = OSI_PDU; // DefinedType
let _cached_decoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs: $.ASN1Decoder<
    ShadowConsumerInitiatedDISP_OSI_PDUs
> | null = null;
let _cached_encoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs: $.ASN1Encoder<
    ShadowConsumerInitiatedDISP_OSI_PDUs
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ShadowConsumerInitiatedDISP_OSI_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShadowConsumerInitiatedDISP_OSI_PDUs} The decoded data structure.
 */
export function _decode_ShadowConsumerInitiatedDISP_OSI_PDUs(el: _Element) {
    if (!_cached_decoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs) {
        _cached_decoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs(el);
}
/**
 * @summary Encodes a(n) ShadowConsumerInitiatedDISP_OSI_PDUs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShadowConsumerInitiatedDISP_OSI_PDUs, encoded as an ASN.1 Element.
 */
export function _encode_ShadowConsumerInitiatedDISP_OSI_PDUs(
    value: ShadowConsumerInitiatedDISP_OSI_PDUs,
    elGetter: $.ASN1Encoder<ShadowConsumerInitiatedDISP_OSI_PDUs>
) {
    if (!_cached_encoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs) {
        _cached_encoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_ShadowConsumerInitiatedDISP_OSI_PDUs(
        value,
        elGetter
    );
}

/**
 * @summary id_ac_shadowConsumerInitiatedAsynchronousAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-shadowConsumerInitiatedAsynchronousAC   OBJECT IDENTIFIER ::= {id-ac 9}
 * ```
 *
 * @constant
 */
export const id_ac_shadowConsumerInitiatedAsynchronousAC: OBJECT_IDENTIFIER = new _OID(
    [9],
    id_ac
);

/**
 * @summary shadowConsumerInitiatedAsynchronousAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowConsumerInitiatedAsynchronousAC APPLICATION-CONTEXT ::= {
 *   BIND-OPERATION            dSAShadowBind
 *   OPERATIONS                {requestShadowUpdate |
 *                              updateShadow}
 *   APPLICATION CONTEXT NAME  id-ac-shadowConsumerInitiatedAsynchronousAC }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const shadowConsumerInitiatedAsynchronousAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSAShadowBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        requestShadowUpdate,
        updateShadow,
    ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_shadowConsumerInitiatedAsynchronousAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

export type ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs<> = OSI_PDU; // DefinedType
let _cached_decoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs: $.ASN1Decoder<
    ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs
> | null = null;
let _cached_encoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs: $.ASN1Encoder<
    ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs} The decoded data structure.
 */
export function _decode_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs(
    el: _Element
) {
    if (!_cached_decoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs) {
        _cached_decoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs = _decode_OSI_PDU;
    }
    return _cached_decoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs(
        el
    );
}
/**
 * @summary Encodes a(n) ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs, encoded as an ASN.1 Element.
 */
export function _encode_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs(
    value: ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs,
    elGetter: $.ASN1Encoder<ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs>
) {
    if (!_cached_encoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs) {
        _cached_encoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs = _encode_OSI_PDU;
    }
    return _cached_encoder_for_ShadowConsumerInitiatedAsynchronousDISP_OSI_PDUs(
        value,
        elGetter
    );
}

/**
 * @summary id_as_directoryAccessAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-as-directoryAccessAS                       OBJECT IDENTIFIER ::= {id-as 1}
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
 * id-as-directorySystemAS                       OBJECT IDENTIFIER ::= {id-as 2}
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
 * id-as-directoryShadowAS                       OBJECT IDENTIFIER ::= {id-as 3}
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
 * @summary id_acseAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-acseAS                                     OBJECT IDENTIFIER ::= {joint-iso-itu-t association-control(2) abstract-syntax(1) apdus(0) version(1)}
 * ```
 *
 * @constant
 */
export const id_acseAS: OBJECT_IDENTIFIER = new _OID(
    [
        /* association-control */ 2,
        /* abstract-syntax */ 1,
        /* apdus */ 0,
        /* version */ 1,
    ],
    joint_iso_itu_t
);

/* END_MODULE DirectoryOSIProtocols */
/* eslint-enable */
