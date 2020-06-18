/*
    BEGIN_MODULE CommonProtocolSpecification
    OID: joint-iso-itu-t.ds.module.commonProtocolSpecification.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
export { opBindingManagement } from "./UsefulDefinitions";

export type Code =
    | { local: asn1.INTEGER } /* CHOICE_ALT_ROOT */
    | { global: asn1.OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Code: __utils.ASN1Decoder<Code> | null = null;
let _cached_encoder_for_Code: __utils.ASN1Encoder<Code> | null = null;
export function _decode_Code(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Code) {
        _cached_decoder_for_Code = __utils._decode_extensible_choice<Code>({
            "UNIVERSAL 2": ["local", __utils._decodeInteger],
            "UNIVERSAL 6": ["global", __utils._decodeObjectIdentifier],
        });
    }
    return _cached_decoder_for_Code(el);
}
export function _encode_Code(value: Code, elGetter: __utils.ASN1Encoder<Code>) {
    if (!_cached_encoder_for_Code) {
        _cached_encoder_for_Code = __utils._encode_choice<Code>(
            {
                local: __utils._encodeInteger,
                global: __utils._encodeObjectIdentifier,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Code(value, elGetter);
}

// TODO: ObjectClassAssignment: ERROR

// TODO: ObjectClassAssignment: OPERATION

export type InvokeId =
    | { present: asn1.INTEGER } /* CHOICE_ALT_ROOT */
    | { absent: asn1.NULL } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_InvokeId: __utils.ASN1Decoder<InvokeId> | null = null;
let _cached_encoder_for_InvokeId: __utils.ASN1Encoder<InvokeId> | null = null;
export function _decode_InvokeId(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_InvokeId) {
        _cached_decoder_for_InvokeId = __utils._decode_extensible_choice<
            InvokeId
        >({
            "UNIVERSAL 2": ["present", __utils._decodeInteger],
            "UNIVERSAL 5": ["absent", __utils._decodeNull],
        });
    }
    return _cached_decoder_for_InvokeId(el);
}
export function _encode_InvokeId(
    value: InvokeId,
    elGetter: __utils.ASN1Encoder<InvokeId>
) {
    if (!_cached_encoder_for_InvokeId) {
        _cached_encoder_for_InvokeId = __utils._encode_choice<InvokeId>(
            {
                present: __utils._encodeInteger,
                absent: __utils._encodeNull,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_InvokeId(value, elGetter);
}

export const id_opcode_read: Code = { local: 1 };

export const id_opcode_compare: Code = { local: 2 };

export const id_opcode_abandon: Code = { local: 3 };

export const id_opcode_list: Code = { local: 4 };

export const id_opcode_search: Code = { local: 5 };

export const id_opcode_addEntry: Code = { local: 6 };

export const id_opcode_removeEntry: Code = { local: 7 };

export const id_opcode_modifyEntry: Code = { local: 8 };

export const id_opcode_modifyDN: Code = { local: 9 };

export const id_opcode_changePassword: Code = { local: 10 };

export const id_opcode_administerPassword: Code = { local: 11 };

export const id_opcode_ldapTransport: Code = { local: 12 };

export const id_opcode_linkedLDAP: Code = { local: 13 };

export const id_opcode_requestShadowUpdate: Code = { local: 1 };

export const id_opcode_updateShadow: Code = { local: 2 };

export const id_opcode_coordinateShadowUpdate: Code = { local: 3 };

export const id_op_establishOperationalBinding: Code = { local: 100 };

export const id_op_modifyOperationalBinding: Code = { local: 102 };

export const id_op_terminateOperationalBinding: Code = { local: 101 };

export const id_errcode_attributeError: Code = { local: 1 };

export const id_errcode_nameError: Code = { local: 2 };

export const id_errcode_serviceError: Code = { local: 3 };

export const id_errcode_referral: Code = { local: 4 };

export const id_errcode_abandoned: Code = { local: 5 };

export const id_errcode_securityError: Code = { local: 6 };

export const id_errcode_abandonFailed: Code = { local: 7 };

export const id_errcode_updateError: Code = { local: 8 };

export const id_errcode_dsaReferral: Code = { local: 9 };

export const id_errcode_shadowError: Code = { local: 1 };

export const id_err_operationalBindingError: Code = { local: 100 };

// TODO: ObjectSetAssignment: DOP-Invokable

// TODO: ObjectSetAssignment: DOP-Returnable

/* END_MODULE CommonProtocolSpecification */