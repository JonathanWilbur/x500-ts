
// CommonProtocolSpecification
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    opBindingManagement
} from "./UsefulDefinitions";
export {
    opBindingManagement
} from "./UsefulDefinitions";

import * as OperationalBindingManagement from "./OperationalBindingManagement";
import {
    establishOperationalBinding,
    modifyOperationalBinding,
    terminateOperationalBinding
} from "./OperationalBindingManagement";
export {
    establishOperationalBinding,
    modifyOperationalBinding,
    terminateOperationalBinding
} from "./OperationalBindingManagement";


const itu_t: number = 0;
const itu_r: number = 0;
const ccitt: number = 0;
const iso: number = 1;
const joint_iso_itu_t: number = 2;
const joint_iso_ccitt: number = 2;

export type Code =
    { local: asn1.INTEGER }
    | { global: asn1.OBJECT_IDENTIFIER }
    | asn1.ASN1Element;
export const _decode_Code = __utils._decode_extensible_choice<Code>({
    "UNIVERSAL 2": [ "local", __utils._decodeInteger ],
    "UNIVERSAL 6": [ "global", __utils._decodeObjectIdentifier ]
});
export const _encode_Code = __utils._encode_choice<Code>({
    "local": __utils._encodeInteger,
    "global": __utils._encodeObjectIdentifier,
}, __utils.BER);


// TODO: ObjectClassAssignment: ERROR

// TODO: ObjectClassAssignment: OPERATION

export type InvokeId =
    { present: asn1.INTEGER }
    | { absent: asn1.NULL }
    | asn1.ASN1Element;
export const _decode_InvokeId = __utils._decode_extensible_choice<InvokeId>({
    "UNIVERSAL 2": [ "present", __utils._decodeInteger ],
    "UNIVERSAL 5": [ "absent", __utils._decodeNull ]
});
export const _encode_InvokeId = __utils._encode_choice<InvokeId>({
    "present": __utils._encodeInteger,
    "absent": __utils._encodeNull,
}, __utils.BER);


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

