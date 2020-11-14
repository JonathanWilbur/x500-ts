/**
 * @module CommonProtocolSpecification
 * @summary The ASN.1 module `CommonProtocolSpecification`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.commonProtocolSpecification.9
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
    INTEGER,
    NULL,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    establishOperationalBinding,
    modifyOperationalBinding,
    terminateOperationalBinding,
} from "./OperationalBindingManagement";
export {
    establishOperationalBinding,
    modifyOperationalBinding,
    terminateOperationalBinding,
} from "./OperationalBindingManagement";

/**
 * @summary InvokeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeId  ::=  CHOICE {
 *   present  INTEGER,
 *   absent   NULL,
 *   ... }
 * ```
 */
export type InvokeId =
    | { present: INTEGER } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_InvokeId: $.ASN1Decoder<InvokeId> | null = null;
let _cached_encoder_for_InvokeId: $.ASN1Encoder<InvokeId> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) InvokeId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeId} The decoded data structure.
 */
export function _decode_InvokeId(el: _Element) {
    if (!_cached_decoder_for_InvokeId) {
        _cached_decoder_for_InvokeId = $._decode_extensible_choice<InvokeId>({
            "UNIVERSAL 2": ["present", $._decodeInteger],
            "UNIVERSAL 5": ["absent", $._decodeNull],
        });
    }
    return _cached_decoder_for_InvokeId(el);
}
/**
 * @summary Encodes a(n) InvokeId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeId, encoded as an ASN.1 Element.
 */
export function _encode_InvokeId(
    value: InvokeId,
    elGetter: $.ASN1Encoder<InvokeId>
) {
    if (!_cached_encoder_for_InvokeId) {
        _cached_encoder_for_InvokeId = $._encode_choice<InvokeId>(
            {
                present: $._encodeInteger,
                absent: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_InvokeId(value, elGetter);
}

/**
 * @summary Code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Code  ::=  CHOICE {
 *   local   INTEGER,
 *   global  OBJECT IDENTIFIER,
 *   ... }
 * ```
 */
export type Code =
    | { local: INTEGER } /* CHOICE_ALT_ROOT */
    | { global: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Code: $.ASN1Decoder<Code> | null = null;
let _cached_encoder_for_Code: $.ASN1Encoder<Code> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Code
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Code} The decoded data structure.
 */
export function _decode_Code(el: _Element) {
    if (!_cached_decoder_for_Code) {
        _cached_decoder_for_Code = $._decode_extensible_choice<Code>({
            "UNIVERSAL 2": ["local", $._decodeInteger],
            "UNIVERSAL 6": ["global", $._decodeObjectIdentifier],
        });
    }
    return _cached_decoder_for_Code(el);
}
/**
 * @summary Encodes a(n) Code into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Code, encoded as an ASN.1 Element.
 */
export function _encode_Code(value: Code, elGetter: $.ASN1Encoder<Code>) {
    if (!_cached_encoder_for_Code) {
        _cached_encoder_for_Code = $._encode_choice<Code>(
            {
                local: $._encodeInteger,
                global: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Code(value, elGetter);
}

/**
 * @summary id_opcode_read
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-read                    Code ::= local:1
 * ```
 *
 * @constant
 */
export const id_opcode_read: Code = { local: 1 };

/**
 * @summary id_opcode_compare
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-compare                 Code ::= local:2
 * ```
 *
 * @constant
 */
export const id_opcode_compare: Code = { local: 2 };

/**
 * @summary id_opcode_abandon
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-abandon                 Code ::= local:3
 * ```
 *
 * @constant
 */
export const id_opcode_abandon: Code = { local: 3 };

/**
 * @summary id_opcode_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-list                    Code ::= local:4
 * ```
 *
 * @constant
 */
export const id_opcode_list: Code = { local: 4 };

/**
 * @summary id_opcode_search
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-search                  Code ::= local:5
 * ```
 *
 * @constant
 */
export const id_opcode_search: Code = { local: 5 };

/**
 * @summary id_opcode_addEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-addEntry                Code ::= local:6
 * ```
 *
 * @constant
 */
export const id_opcode_addEntry: Code = { local: 6 };

/**
 * @summary id_opcode_removeEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-removeEntry             Code ::= local:7
 * ```
 *
 * @constant
 */
export const id_opcode_removeEntry: Code = { local: 7 };

/**
 * @summary id_opcode_modifyEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-modifyEntry             Code ::= local:8
 * ```
 *
 * @constant
 */
export const id_opcode_modifyEntry: Code = { local: 8 };

/**
 * @summary id_opcode_modifyDN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-modifyDN                Code ::= local:9
 * ```
 *
 * @constant
 */
export const id_opcode_modifyDN: Code = { local: 9 };

/**
 * @summary id_opcode_changePassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-changePassword          Code ::= local:10
 * ```
 *
 * @constant
 */
export const id_opcode_changePassword: Code = { local: 10 };

/**
 * @summary id_opcode_administerPassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-administerPassword      Code ::= local:11
 * ```
 *
 * @constant
 */
export const id_opcode_administerPassword: Code = { local: 11 };

/**
 * @summary id_opcode_ldapTransport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-ldapTransport           Code ::= local:12
 * ```
 *
 * @constant
 */
export const id_opcode_ldapTransport: Code = { local: 12 };

/**
 * @summary id_opcode_linkedLDAP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-linkedLDAP              Code ::= local:13
 * ```
 *
 * @constant
 */
export const id_opcode_linkedLDAP: Code = { local: 13 };

/**
 * @summary id_opcode_requestShadowUpdate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-requestShadowUpdate     Code ::= local:1
 * ```
 *
 * @constant
 */
export const id_opcode_requestShadowUpdate: Code = { local: 1 };

/**
 * @summary id_opcode_updateShadow
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-updateShadow            Code ::= local:2
 * ```
 *
 * @constant
 */
export const id_opcode_updateShadow: Code = { local: 2 };

/**
 * @summary id_opcode_coordinateShadowUpdate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-opcode-coordinateShadowUpdate  Code ::= local:3
 * ```
 *
 * @constant
 */
export const id_opcode_coordinateShadowUpdate: Code = { local: 3 };

/**
 * @summary id_op_establishOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-op-establishOperationalBinding Code ::= local:100
 * ```
 *
 * @constant
 */
export const id_op_establishOperationalBinding: Code = { local: 100 };

/**
 * @summary id_op_modifyOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-op-modifyOperationalBinding    Code ::= local:102
 * ```
 *
 * @constant
 */
export const id_op_modifyOperationalBinding: Code = { local: 102 };

/**
 * @summary id_op_terminateOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-op-terminateOperationalBinding Code ::= local:101
 * ```
 *
 * @constant
 */
export const id_op_terminateOperationalBinding: Code = { local: 101 };

/**
 * @summary id_errcode_attributeError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-errcode-attributeError         Code ::= local:1
 * ```
 *
 * @constant
 */
export const id_errcode_attributeError: Code = { local: 1 };

/**
 * @summary id_errcode_nameError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-errcode-nameError              Code ::= local:2
 * ```
 *
 * @constant
 */
export const id_errcode_nameError: Code = { local: 2 };

/**
 * @summary id_errcode_serviceError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-errcode-serviceError           Code ::= local:3
 * ```
 *
 * @constant
 */
export const id_errcode_serviceError: Code = { local: 3 };

/**
 * @summary id_errcode_referral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-errcode-referral               Code ::= local:4
 * ```
 *
 * @constant
 */
export const id_errcode_referral: Code = { local: 4 };

/**
 * @summary id_errcode_abandoned
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-errcode-abandoned              Code ::= local:5
 * ```
 *
 * @constant
 */
export const id_errcode_abandoned: Code = { local: 5 };

/**
 * @summary id_errcode_securityError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-errcode-securityError          Code ::= local:6
 * ```
 *
 * @constant
 */
export const id_errcode_securityError: Code = { local: 6 };

/**
 * @summary id_errcode_abandonFailed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-errcode-abandonFailed          Code ::= local:7
 * ```
 *
 * @constant
 */
export const id_errcode_abandonFailed: Code = { local: 7 };

/**
 * @summary id_errcode_updateError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-errcode-updateError            Code ::= local:8
 * ```
 *
 * @constant
 */
export const id_errcode_updateError: Code = { local: 8 };

/**
 * @summary id_errcode_dsaReferral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-errcode-dsaReferral            Code ::= local:9
 * ```
 *
 * @constant
 */
export const id_errcode_dsaReferral: Code = { local: 9 };

/**
 * @summary id_errcode_shadowError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-errcode-shadowError            Code ::= local:1
 * ```
 *
 * @constant
 */
export const id_errcode_shadowError: Code = { local: 1 };

/**
 * @summary id_err_operationalBindingError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-err-operationalBindingError    Code ::= local:100
 * ```
 *
 * @constant
 */
export const id_err_operationalBindingError: Code = { local: 100 };

/**
 * @summary ERROR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ERROR ::= CLASS {
 *   &ParameterType,
 *   &errorCode      Code UNIQUE OPTIONAL }
 * WITH SYNTAX {
 *   PARAMETER       &ParameterType
 *   [CODE           &errorCode] }
 * ```
 *
 * @interface
 */
export interface ERROR<
    ParameterType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "ERROR";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ERROR<ParameterType>]: $.ASN1Decoder<
                ERROR<ParameterType>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ERROR<ParameterType>]: $.ASN1Encoder<
                ERROR<ParameterType>[_K]
            >;
        }
    >;
    /**
     * @summary &ParameterType
     */
    "&ParameterType": ParameterType;
    /**
     * @summary &errorCode
     */
    "&errorCode"?: Code;
}

/**
 * @summary OPERATION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OPERATION ::= CLASS {
 *   &ArgumentType   OPTIONAL,
 *   &ResultType     OPTIONAL,
 *   &Errors         ERROR OPTIONAL,
 *   &operationCode  Code UNIQUE OPTIONAL }
 * WITH SYNTAX {
 *   [ARGUMENT       &ArgumentType]
 *   [RESULT         &ResultType]
 *   [ERRORS         &Errors]
 *   [CODE           &operationCode] }
 * ```
 *
 * @interface
 */
export interface OPERATION<
    ArgumentType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    ResultType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "OPERATION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof OPERATION<ArgumentType, ResultType>]: $.ASN1Decoder<
                OPERATION<ArgumentType, ResultType>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof OPERATION<ArgumentType, ResultType>]: $.ASN1Encoder<
                OPERATION<ArgumentType, ResultType>[_K]
            >;
        }
    >;
    /**
     * @summary &ArgumentType
     */
    "&ArgumentType": ArgumentType;
    /**
     * @summary &ResultType
     */
    "&ResultType": ResultType;
    /**
     * @summary &Errors
     */
    "&Errors"?: ERROR[];
    /**
     * @summary &operationCode
     */
    "&operationCode"?: Code;
}

/**
 * @summary DOP_Invokable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DOP-Invokable OPERATION ::= {establishOperationalBinding |
 *    modifyOperationalBinding |
 *    terminateOperationalBinding}
 * ```
 *
 * @constant
 * @type {OPERATION[]}
 *
 */
export const DOP_Invokable: OPERATION[] = [
    establishOperationalBinding,
    modifyOperationalBinding,
    terminateOperationalBinding,
];

/**
 * @summary DOP_Returnable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DOP-Returnable OPERATION ::= {establishOperationalBinding |
 *    modifyOperationalBinding |
 *    terminateOperationalBinding}
 * ```
 *
 * @constant
 * @type {OPERATION[]}
 *
 */
export const DOP_Returnable: OPERATION[] = [
    establishOperationalBinding,
    modifyOperationalBinding,
    terminateOperationalBinding,
];

/* END_MODULE CommonProtocolSpecification */
/* eslint-enable */
