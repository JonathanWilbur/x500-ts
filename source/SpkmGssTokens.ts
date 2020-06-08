
// SpkmGssTokens
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as InformationFramework from "./InformationFramework";
import {
    Name,
    _decode_Name,
    _encode_Name
} from "./InformationFramework";

import * as AuthenticationFramework from "./AuthenticationFramework";
import {
    Certificate,
    CertificateList,
    CertificatePair,
    SupportedAlgorithms,
    Validity,
    AlgorithmIdentifier,
    _decode_Certificate,
    _encode_Certificate,
    _decode_CertificateList,
    _encode_CertificateList,
    _decode_CertificatePair,
    _encode_CertificatePair,
    _decode_Validity,
    _encode_Validity,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier
} from "./AuthenticationFramework";


const itu_t: number = 0;
const itu_r: number = 0;
const ccitt: number = 0;
const iso: number = 1;
const joint_iso_itu_t: number = 2;
const joint_iso_ccitt: number = 2;

export type MechType = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_MechType = __utils._decodeObjectIdentifier;
export const _encode_MechType = __utils._encodeObjectIdentifier;


export type Random_Integer = asn1.BIT_STRING;
export const _decode_Random_Integer = __utils._decodeBitString;
export const _encode_Random_Integer = __utils._encodeBitString;


export type ChannelId = asn1.OCTET_STRING; // OctetStringType
export const _decode_ChannelId = __utils._decodeOctetString;
export const _encode_ChannelId = __utils._encodeOctetString;


export type Options = asn1.BIT_STRING;
export const Options_delegation_state: number = 0; /* LONG_NAMED_BIT */
export const delegation_state: number = Options_delegation_state; /* SHORT_NAMED_BIT */
export const Options_mutual_state: number = 1; /* LONG_NAMED_BIT */
export const mutual_state: number = Options_mutual_state; /* SHORT_NAMED_BIT */
export const Options_replay_det_state: number = 2; /* LONG_NAMED_BIT */
export const replay_det_state: number = Options_replay_det_state; /* SHORT_NAMED_BIT */
export const Options_sequence_state: number = 3; /* LONG_NAMED_BIT */
export const sequence_state: number = Options_sequence_state; /* SHORT_NAMED_BIT */
export const Options_conf_avail: number = 4; /* LONG_NAMED_BIT */
export const conf_avail: number = Options_conf_avail; /* SHORT_NAMED_BIT */
export const Options_integ_avail: number = 5; /* LONG_NAMED_BIT */
export const integ_avail: number = Options_integ_avail; /* SHORT_NAMED_BIT */
export const Options_target_certif_data_required: number = 6; /* LONG_NAMED_BIT */
export const target_certif_data_required: number = Options_target_certif_data_required; /* SHORT_NAMED_BIT */
export const _decode_Options = __utils._decodeBitString;
export const _encode_Options = __utils._encodeBitString;


export type Conf_Algs =
    { algs: AlgorithmIdentifier[] }
    | { null_: asn1.NULL };
export const _decode_Conf_Algs = __utils._decode_inextensible_choice<Conf_Algs>({
    "CONTEXT 0": [ "algs", __utils._decode_implicit<AlgorithmIdentifier[]>(() => __utils._decodeSequenceOf<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)) ],
    "CONTEXT 1": [ "null_", __utils._decode_implicit<asn1.NULL>(() => __utils._decodeNull) ]
});
export const _encode_Conf_Algs = __utils._encode_choice<Conf_Algs>({
    "algs": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeSequenceOf<AlgorithmIdentifier>(() => _encode_AlgorithmIdentifier, __utils.BER), __utils.BER),
    "null_": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeNull, __utils.BER),
}, __utils.BER);


export type Intg_Algs = AlgorithmIdentifier[]; // SequenceOfType
export const _decode_Intg_Algs = __utils._decodeSequenceOf<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier);
export const _encode_Intg_Algs = __utils._encodeSequenceOf<AlgorithmIdentifier>(() => _encode_AlgorithmIdentifier, __utils.BER);


export type OWF_Algs = AlgorithmIdentifier[]; // SequenceOfType
export const _decode_OWF_Algs = __utils._decodeSequenceOf<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier);
export const _encode_OWF_Algs = __utils._encodeSequenceOf<AlgorithmIdentifier>(() => _encode_AlgorithmIdentifier, __utils.BER);


export class Context_Data {
    constructor (
        readonly channelId: ChannelId | undefined,
        readonly seq_number: asn1.INTEGER | undefined,
        readonly options: Options,
        readonly conf_alg: Conf_Algs,
        readonly intg_alg: Intg_Algs,
        readonly owf_alg: OWF_Algs
    ) {}
}
const _root_component_type_list_1_spec_for_Context_Data: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("channelId", true, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("seq-number", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("options", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("conf-alg", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("intg-alg", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("owf-alg", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
const _root_component_type_list_2_spec_for_Context_Data: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_Context_Data: __utils.ComponentSpec[] = [
    
];
export const _decode_Context_Data = function (el: asn1.ASN1Element): Context_Data {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let channelId: asn1.OPTIONAL<ChannelId>;
    let seq_number: asn1.OPTIONAL<asn1.INTEGER>;
    let options!: Options;
    let conf_alg!: Conf_Algs;
    let intg_alg!: Intg_Algs;
    let owf_alg!: OWF_Algs;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "channelId": (_el: asn1.ASN1Element): void => { channelId = _decode_ChannelId(_el); },
        "seq-number": (_el: asn1.ASN1Element): void => { seq_number = __utils._decodeInteger(_el); },
        "options": (_el: asn1.ASN1Element): void => { options = _decode_Options(_el); },
        "conf-alg": (_el: asn1.ASN1Element): void => { conf_alg = _decode_Conf_Algs(_el); },
        "intg-alg": (_el: asn1.ASN1Element): void => { intg_alg = _decode_Intg_Algs(_el); },
        "owf-alg": (_el: asn1.ASN1Element): void => { owf_alg = _decode_OWF_Algs(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Context_Data,
        _extension_additions_list_spec_for_Context_Data,
        _root_component_type_list_2_spec_for_Context_Data,
        undefined,
    );
    return new Context_Data( /* SEQUENCE_CONSTRUCTOR_CALL */
        channelId,
        seq_number,
        options,
        conf_alg,
        intg_alg,
        owf_alg
    );
};
export const _encode_Context_Data = function (value: Context_Data, elGetter: __utils.ASN1Encoder<Context_Data>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.channelId ? _encode_ChannelId(value.channelId, __utils.BER) : undefined),
            (value.seq_number ? __utils._encodeInteger(value.seq_number, __utils.BER) : undefined),
            _encode_Options(value.options, __utils.BER),
            _encode_Conf_Algs(value.conf_alg, __utils.BER),
            _encode_Intg_Algs(value.intg_alg, __utils.BER),
            _encode_OWF_Algs(value.owf_alg, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Key_Estb_Algs = AlgorithmIdentifier[]; // SequenceOfType
export const _decode_Key_Estb_Algs = __utils._decodeSequenceOf<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier);
export const _encode_Key_Estb_Algs = __utils._encodeSequenceOf<AlgorithmIdentifier>(() => _encode_AlgorithmIdentifier, __utils.BER);


export class Req_contents {
    constructor (
        readonly tok_id: asn1.INTEGER,
        readonly context_id: Random_Integer,
        readonly pvno: asn1.BIT_STRING,
        readonly timestamp: asn1.UTCTime | undefined,
        readonly randSrc: Random_Integer,
        readonly targ_name: Name,
        readonly src_name: Name | undefined,
        readonly req_data: Context_Data,
        readonly validity: Validity | undefined,
        readonly key_estb_set: Key_Estb_Algs,
        readonly key_estb_req: asn1.BIT_STRING | undefined,
        readonly key_src_bind: asn1.OCTET_STRING | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_Req_contents: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("tok-id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("context-id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("pvno", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("timestamp", true, __utils.hasTag(asn1.ASN1TagClass.universal, 23), undefined, undefined),
    new __utils.ComponentSpec("randSrc", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("targ-name", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("src-name", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("req-data", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("validity", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("key-estb-set", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("key-estb-req", true, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("key-src-bind", true, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
const _root_component_type_list_2_spec_for_Req_contents: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_Req_contents: __utils.ComponentSpec[] = [
    
];
export const _decode_Req_contents = function (el: asn1.ASN1Element): Req_contents {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let tok_id!: asn1.INTEGER;
    let context_id!: Random_Integer;
    let pvno!: asn1.BIT_STRING;
    let timestamp: asn1.OPTIONAL<asn1.UTCTime>;
    let randSrc!: Random_Integer;
    let targ_name!: Name;
    let src_name: asn1.OPTIONAL<Name>;
    let req_data!: Context_Data;
    let validity: asn1.OPTIONAL<Validity>;
    let key_estb_set!: Key_Estb_Algs;
    let key_estb_req: asn1.OPTIONAL<asn1.BIT_STRING>;
    let key_src_bind: asn1.OPTIONAL<asn1.OCTET_STRING>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "tok-id": (_el: asn1.ASN1Element): void => { tok_id = __utils._decodeInteger(_el); },
        "context-id": (_el: asn1.ASN1Element): void => { context_id = _decode_Random_Integer(_el); },
        "pvno": (_el: asn1.ASN1Element): void => { pvno = __utils._decodeBitString(_el); },
        "timestamp": (_el: asn1.ASN1Element): void => { timestamp = __utils._decodeUTCTime(_el); },
        "randSrc": (_el: asn1.ASN1Element): void => { randSrc = _decode_Random_Integer(_el); },
        "targ-name": (_el: asn1.ASN1Element): void => { targ_name = _decode_Name(_el); },
        "src-name": (_el: asn1.ASN1Element): void => { src_name = __utils._decode_implicit<Name>(() => _decode_Name)(_el); },
        "req-data": (_el: asn1.ASN1Element): void => { req_data = _decode_Context_Data(_el); },
        "validity": (_el: asn1.ASN1Element): void => { validity = __utils._decode_implicit<Validity>(() => _decode_Validity)(_el); },
        "key-estb-set": (_el: asn1.ASN1Element): void => { key_estb_set = _decode_Key_Estb_Algs(_el); },
        "key-estb-req": (_el: asn1.ASN1Element): void => { key_estb_req = __utils._decodeBitString(_el); },
        "key-src-bind": (_el: asn1.ASN1Element): void => { key_src_bind = __utils._decodeOctetString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Req_contents,
        _extension_additions_list_spec_for_Req_contents,
        _root_component_type_list_2_spec_for_Req_contents,
        undefined,
    );
    return new Req_contents( /* SEQUENCE_CONSTRUCTOR_CALL */
        tok_id,
        context_id,
        pvno,
        timestamp,
        randSrc,
        targ_name,
        src_name,
        req_data,
        validity,
        key_estb_set,
        key_estb_req,
        key_src_bind
    );
};
export const _encode_Req_contents = function (value: Req_contents, elGetter: __utils.ASN1Encoder<Req_contents>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeInteger(value.tok_id, __utils.BER),
            _encode_Random_Integer(value.context_id, __utils.BER),
            __utils._encodeBitString(value.pvno, __utils.BER),
            (value.timestamp ? __utils._encodeUTCTime(value.timestamp, __utils.BER) : undefined),
            _encode_Random_Integer(value.randSrc, __utils.BER),
            _encode_Name(value.targ_name, __utils.BER),
            (value.src_name ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_Name, __utils.BER)(value.src_name, __utils.BER) : undefined),
            _encode_Context_Data(value.req_data, __utils.BER),
            (value.validity ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_Validity, __utils.BER)(value.validity, __utils.BER) : undefined),
            _encode_Key_Estb_Algs(value.key_estb_set, __utils.BER),
            (value.key_estb_req ? __utils._encodeBitString(value.key_estb_req, __utils.BER) : undefined),
            (value.key_src_bind ? __utils._encodeOctetString(value.key_src_bind, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Integrity = asn1.BIT_STRING;
export const _decode_Integrity = __utils._decodeBitString;
export const _encode_Integrity = __utils._encodeBitString;


export class REQ_TOKEN {
    constructor (
        readonly req_contents: Req_contents,
        readonly algId: AlgorithmIdentifier,
        readonly req_integrity: Integrity
    ) {}
}
const _root_component_type_list_1_spec_for_REQ_TOKEN: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("req-contents", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("algId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("req-integrity", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_REQ_TOKEN: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_REQ_TOKEN: __utils.ComponentSpec[] = [
    
];
export const _decode_REQ_TOKEN = function (el: asn1.ASN1Element): REQ_TOKEN {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("REQ-TOKEN contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "req-contents";
    sequence[1].name = "algId";
    sequence[2].name = "req-integrity";
    let req_contents!: Req_contents;
    let algId!: AlgorithmIdentifier;
    let req_integrity!: Integrity;
    req_contents = _decode_Req_contents(sequence[0]);
    algId = _decode_AlgorithmIdentifier(sequence[1]);
    req_integrity = _decode_Integrity(sequence[2]);
    // TODO: Validate values.
    return new REQ_TOKEN(
        req_contents,
        algId,
        req_integrity,

    );
};
export const _encode_REQ_TOKEN = function (value: REQ_TOKEN, elGetter: __utils.ASN1Encoder<REQ_TOKEN>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Req_contents(value.req_contents, __utils.BER),
            _encode_AlgorithmIdentifier(value.algId, __utils.BER),
            _encode_Integrity(value.req_integrity, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class CertificationPath {
    constructor (
        readonly userKeyId: asn1.OCTET_STRING | undefined,
        readonly userCertif: Certificate | undefined,
        readonly verifKeyId: asn1.OCTET_STRING | undefined,
        readonly userVerifCertif: Certificate | undefined,
        readonly theCACertificates: CertificatePair[] | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_CertificationPath: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("userKeyId", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("userCertif", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("verifKeyId", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("userVerifCertif", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("theCACertificates", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined)
];
const _root_component_type_list_2_spec_for_CertificationPath: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_CertificationPath: __utils.ComponentSpec[] = [
    
];
export const _decode_CertificationPath = function (el: asn1.ASN1Element): CertificationPath {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let userKeyId: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let userCertif: asn1.OPTIONAL<Certificate>;
    let verifKeyId: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let userVerifCertif: asn1.OPTIONAL<Certificate>;
    let theCACertificates: asn1.OPTIONAL<CertificatePair[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "userKeyId": (_el: asn1.ASN1Element): void => { userKeyId = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
        "userCertif": (_el: asn1.ASN1Element): void => { userCertif = __utils._decode_implicit<Certificate>(() => _decode_Certificate)(_el); },
        "verifKeyId": (_el: asn1.ASN1Element): void => { verifKeyId = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
        "userVerifCertif": (_el: asn1.ASN1Element): void => { userVerifCertif = __utils._decode_implicit<Certificate>(() => _decode_Certificate)(_el); },
        "theCACertificates": (_el: asn1.ASN1Element): void => { theCACertificates = __utils._decode_implicit<CertificatePair[]>(() => __utils._decodeSequenceOf<CertificatePair>(() => _decode_CertificatePair))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertificationPath,
        _extension_additions_list_spec_for_CertificationPath,
        _root_component_type_list_2_spec_for_CertificationPath,
        undefined,
    );
    return new CertificationPath( /* SEQUENCE_CONSTRUCTOR_CALL */
        userKeyId,
        userCertif,
        verifKeyId,
        userVerifCertif,
        theCACertificates
    );
};
export const _encode_CertificationPath = function (value: CertificationPath, elGetter: __utils.ASN1Encoder<CertificationPath>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.userKeyId ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeOctetString, __utils.BER)(value.userKeyId, __utils.BER) : undefined),
            (value.userCertif ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_Certificate, __utils.BER)(value.userCertif, __utils.BER) : undefined),
            (value.verifKeyId ? __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeOctetString, __utils.BER)(value.verifKeyId, __utils.BER) : undefined),
            (value.userVerifCertif ? __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_Certificate, __utils.BER)(value.userVerifCertif, __utils.BER) : undefined),
            (value.theCACertificates ? __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => __utils._encodeSequenceOf<CertificatePair>(() => _encode_CertificatePair, __utils.BER), __utils.BER)(value.theCACertificates, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class CertificationData {
    constructor (
        readonly certificationPath: CertificationPath | undefined,
        readonly certificateRevocationList: CertificateList | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_CertificationData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("certificationPath", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("certificateRevocationList", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_CertificationData: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_CertificationData: __utils.ComponentSpec[] = [
    
];
export const _decode_CertificationData = function (el: asn1.ASN1Element): CertificationData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let certificationPath: asn1.OPTIONAL<CertificationPath>;
    let certificateRevocationList: asn1.OPTIONAL<CertificateList>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "certificationPath": (_el: asn1.ASN1Element): void => { certificationPath = __utils._decode_implicit<CertificationPath>(() => _decode_CertificationPath)(_el); },
        "certificateRevocationList": (_el: asn1.ASN1Element): void => { certificateRevocationList = __utils._decode_implicit<CertificateList>(() => _decode_CertificateList)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertificationData,
        _extension_additions_list_spec_for_CertificationData,
        _root_component_type_list_2_spec_for_CertificationData,
        undefined,
    );
    return new CertificationData( /* SEQUENCE_CONSTRUCTOR_CALL */
        certificationPath,
        certificateRevocationList
    );
};
export const _encode_CertificationData = function (value: CertificationData, elGetter: __utils.ASN1Encoder<CertificationData>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.certificationPath ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_CertificationPath, __utils.BER)(value.certificationPath, __utils.BER) : undefined),
            (value.certificateRevocationList ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_CertificateList, __utils.BER)(value.certificateRevocationList, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class AuthorizationData_Item {
    constructor (
        readonly ad_type: asn1.INTEGER,
        readonly ad_data: asn1.OCTET_STRING
    ) {}
}
const _root_component_type_list_1_spec_for_AuthorizationData_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("ad-type", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("ad-data", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
const _root_component_type_list_2_spec_for_AuthorizationData_Item: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_AuthorizationData_Item: __utils.ComponentSpec[] = [
    
];
export const _decode_AuthorizationData_Item = function (el: asn1.ASN1Element): AuthorizationData_Item {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("AuthorizationData-Item contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "ad-type";
    sequence[1].name = "ad-data";
    let ad_type!: asn1.INTEGER;
    let ad_data!: asn1.OCTET_STRING;
    ad_type = __utils._decodeInteger(sequence[0]);
    ad_data = __utils._decodeOctetString(sequence[1]);
    // TODO: Validate values.
    return new AuthorizationData_Item(
        ad_type,
        ad_data,

    );
};
export const _encode_AuthorizationData_Item = function (value: AuthorizationData_Item, elGetter: __utils.ASN1Encoder<AuthorizationData_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeInteger(value.ad_type, __utils.BER),
            __utils._encodeOctetString(value.ad_data, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AuthorizationData = AuthorizationData_Item[]; // SequenceOfType
export const _decode_AuthorizationData = __utils._decodeSequenceOf<AuthorizationData_Item>(() => _decode_AuthorizationData_Item);
export const _encode_AuthorizationData = __utils._encodeSequenceOf<AuthorizationData_Item>(() => _encode_AuthorizationData_Item, __utils.BER);


export class SPKM_REQ {
    constructor (
        readonly requestToken: REQ_TOKEN,
        readonly certif_data: CertificationData | undefined,
        readonly auth_data: AuthorizationData | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_SPKM_REQ: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("requestToken", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("certif-data", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("auth-data", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_SPKM_REQ: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_SPKM_REQ: __utils.ComponentSpec[] = [
    
];
export const _decode_SPKM_REQ = function (el: asn1.ASN1Element): SPKM_REQ {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let requestToken!: REQ_TOKEN;
    let certif_data: asn1.OPTIONAL<CertificationData>;
    let auth_data: asn1.OPTIONAL<AuthorizationData>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "requestToken": (_el: asn1.ASN1Element): void => { requestToken = _decode_REQ_TOKEN(_el); },
        "certif-data": (_el: asn1.ASN1Element): void => { certif_data = __utils._decode_implicit<CertificationData>(() => _decode_CertificationData)(_el); },
        "auth-data": (_el: asn1.ASN1Element): void => { auth_data = __utils._decode_implicit<AuthorizationData>(() => _decode_AuthorizationData)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SPKM_REQ,
        _extension_additions_list_spec_for_SPKM_REQ,
        _root_component_type_list_2_spec_for_SPKM_REQ,
        undefined,
    );
    return new SPKM_REQ( /* SEQUENCE_CONSTRUCTOR_CALL */
        requestToken,
        certif_data,
        auth_data
    );
};
export const _encode_SPKM_REQ = function (value: SPKM_REQ, elGetter: __utils.ASN1Encoder<SPKM_REQ>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_REQ_TOKEN(value.requestToken, __utils.BER),
            (value.certif_data ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_CertificationData, __utils.BER)(value.certif_data, __utils.BER) : undefined),
            (value.auth_data ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_AuthorizationData, __utils.BER)(value.auth_data, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class Rep_ti_contents {
    constructor (
        readonly tok_id: asn1.INTEGER,
        readonly context_id: Random_Integer,
        readonly pvno: asn1.BIT_STRING | undefined,
        readonly timestamp: asn1.UTCTime | undefined,
        readonly randTarg: Random_Integer,
        readonly src_name: Name | undefined,
        readonly targ_name: Name,
        readonly randSrc: Random_Integer,
        readonly rep_data: Context_Data,
        readonly validity: Validity | undefined,
        readonly key_estb_id: AlgorithmIdentifier | undefined,
        readonly key_estb_str: asn1.BIT_STRING | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_Rep_ti_contents: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("tok-id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("context-id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("pvno", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("timestamp", true, __utils.hasTag(asn1.ASN1TagClass.universal, 23), undefined, undefined),
    new __utils.ComponentSpec("randTarg", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("src-name", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("targ-name", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("randSrc", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("rep-data", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("validity", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("key-estb-id", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("key-estb-str", true, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_Rep_ti_contents: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_Rep_ti_contents: __utils.ComponentSpec[] = [
    
];
export const _decode_Rep_ti_contents = function (el: asn1.ASN1Element): Rep_ti_contents {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let tok_id!: asn1.INTEGER;
    let context_id!: Random_Integer;
    let pvno: asn1.OPTIONAL<asn1.BIT_STRING>;
    let timestamp: asn1.OPTIONAL<asn1.UTCTime>;
    let randTarg!: Random_Integer;
    let src_name: asn1.OPTIONAL<Name>;
    let targ_name!: Name;
    let randSrc!: Random_Integer;
    let rep_data!: Context_Data;
    let validity: asn1.OPTIONAL<Validity>;
    let key_estb_id: asn1.OPTIONAL<AlgorithmIdentifier>;
    let key_estb_str: asn1.OPTIONAL<asn1.BIT_STRING>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "tok-id": (_el: asn1.ASN1Element): void => { tok_id = __utils._decodeInteger(_el); },
        "context-id": (_el: asn1.ASN1Element): void => { context_id = _decode_Random_Integer(_el); },
        "pvno": (_el: asn1.ASN1Element): void => { pvno = __utils._decode_implicit<asn1.BIT_STRING>(() => __utils._decodeBitString)(_el); },
        "timestamp": (_el: asn1.ASN1Element): void => { timestamp = __utils._decodeUTCTime(_el); },
        "randTarg": (_el: asn1.ASN1Element): void => { randTarg = _decode_Random_Integer(_el); },
        "src-name": (_el: asn1.ASN1Element): void => { src_name = __utils._decode_implicit<Name>(() => _decode_Name)(_el); },
        "targ-name": (_el: asn1.ASN1Element): void => { targ_name = _decode_Name(_el); },
        "randSrc": (_el: asn1.ASN1Element): void => { randSrc = _decode_Random_Integer(_el); },
        "rep-data": (_el: asn1.ASN1Element): void => { rep_data = _decode_Context_Data(_el); },
        "validity": (_el: asn1.ASN1Element): void => { validity = __utils._decode_implicit<Validity>(() => _decode_Validity)(_el); },
        "key-estb-id": (_el: asn1.ASN1Element): void => { key_estb_id = _decode_AlgorithmIdentifier(_el); },
        "key-estb-str": (_el: asn1.ASN1Element): void => { key_estb_str = __utils._decodeBitString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Rep_ti_contents,
        _extension_additions_list_spec_for_Rep_ti_contents,
        _root_component_type_list_2_spec_for_Rep_ti_contents,
        undefined,
    );
    return new Rep_ti_contents( /* SEQUENCE_CONSTRUCTOR_CALL */
        tok_id,
        context_id,
        pvno,
        timestamp,
        randTarg,
        src_name,
        targ_name,
        randSrc,
        rep_data,
        validity,
        key_estb_id,
        key_estb_str
    );
};
export const _encode_Rep_ti_contents = function (value: Rep_ti_contents, elGetter: __utils.ASN1Encoder<Rep_ti_contents>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeInteger(value.tok_id, __utils.BER),
            _encode_Random_Integer(value.context_id, __utils.BER),
            (value.pvno ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeBitString, __utils.BER)(value.pvno, __utils.BER) : undefined),
            (value.timestamp ? __utils._encodeUTCTime(value.timestamp, __utils.BER) : undefined),
            _encode_Random_Integer(value.randTarg, __utils.BER),
            (value.src_name ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_Name, __utils.BER)(value.src_name, __utils.BER) : undefined),
            _encode_Name(value.targ_name, __utils.BER),
            _encode_Random_Integer(value.randSrc, __utils.BER),
            _encode_Context_Data(value.rep_data, __utils.BER),
            (value.validity ? __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_Validity, __utils.BER)(value.validity, __utils.BER) : undefined),
            (value.key_estb_id ? _encode_AlgorithmIdentifier(value.key_estb_id, __utils.BER) : undefined),
            (value.key_estb_str ? __utils._encodeBitString(value.key_estb_str, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class REP_TI_TOKEN {
    constructor (
        readonly rep_ti_contents: Rep_ti_contents,
        readonly algId: AlgorithmIdentifier,
        readonly rep_ti_integ: Integrity
    ) {}
}
const _root_component_type_list_1_spec_for_REP_TI_TOKEN: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("rep-ti-contents", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("algId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("rep-ti-integ", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_REP_TI_TOKEN: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_REP_TI_TOKEN: __utils.ComponentSpec[] = [
    
];
export const _decode_REP_TI_TOKEN = function (el: asn1.ASN1Element): REP_TI_TOKEN {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("REP-TI-TOKEN contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "rep-ti-contents";
    sequence[1].name = "algId";
    sequence[2].name = "rep-ti-integ";
    let rep_ti_contents!: Rep_ti_contents;
    let algId!: AlgorithmIdentifier;
    let rep_ti_integ!: Integrity;
    rep_ti_contents = _decode_Rep_ti_contents(sequence[0]);
    algId = _decode_AlgorithmIdentifier(sequence[1]);
    rep_ti_integ = _decode_Integrity(sequence[2]);
    // TODO: Validate values.
    return new REP_TI_TOKEN(
        rep_ti_contents,
        algId,
        rep_ti_integ,

    );
};
export const _encode_REP_TI_TOKEN = function (value: REP_TI_TOKEN, elGetter: __utils.ASN1Encoder<REP_TI_TOKEN>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Rep_ti_contents(value.rep_ti_contents, __utils.BER),
            _encode_AlgorithmIdentifier(value.algId, __utils.BER),
            _encode_Integrity(value.rep_ti_integ, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SPKM_REP_TI {
    constructor (
        readonly responseToken: REP_TI_TOKEN,
        readonly certif_data: CertificationData | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_SPKM_REP_TI: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("responseToken", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("certif-data", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
const _root_component_type_list_2_spec_for_SPKM_REP_TI: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_SPKM_REP_TI: __utils.ComponentSpec[] = [
    
];
export const _decode_SPKM_REP_TI = function (el: asn1.ASN1Element): SPKM_REP_TI {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let responseToken!: REP_TI_TOKEN;
    let certif_data: asn1.OPTIONAL<CertificationData>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "responseToken": (_el: asn1.ASN1Element): void => { responseToken = _decode_REP_TI_TOKEN(_el); },
        "certif-data": (_el: asn1.ASN1Element): void => { certif_data = _decode_CertificationData(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SPKM_REP_TI,
        _extension_additions_list_spec_for_SPKM_REP_TI,
        _root_component_type_list_2_spec_for_SPKM_REP_TI,
        undefined,
    );
    return new SPKM_REP_TI( /* SEQUENCE_CONSTRUCTOR_CALL */
        responseToken,
        certif_data
    );
};
export const _encode_SPKM_REP_TI = function (value: SPKM_REP_TI, elGetter: __utils.ASN1Encoder<SPKM_REP_TI>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_REP_TI_TOKEN(value.responseToken, __utils.BER),
            (value.certif_data ? _encode_CertificationData(value.certif_data, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class REP_IT_TOKEN {
    constructor (
        readonly tok_id: asn1.INTEGER,
        readonly context_id: Random_Integer,
        readonly randSrc: Random_Integer,
        readonly randTarg: Random_Integer,
        readonly targ_name: Name,
        readonly src_name: Name | undefined,
        readonly key_estb_rep: asn1.BIT_STRING | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_REP_IT_TOKEN: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("tok-id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("context-id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("randSrc", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("randTarg", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("targ-name", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("src-name", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("key-estb-rep", true, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_REP_IT_TOKEN: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_REP_IT_TOKEN: __utils.ComponentSpec[] = [
    
];
export const _decode_REP_IT_TOKEN = function (el: asn1.ASN1Element): REP_IT_TOKEN {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let tok_id!: asn1.INTEGER;
    let context_id!: Random_Integer;
    let randSrc!: Random_Integer;
    let randTarg!: Random_Integer;
    let targ_name!: Name;
    let src_name: asn1.OPTIONAL<Name>;
    let key_estb_rep: asn1.OPTIONAL<asn1.BIT_STRING>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "tok-id": (_el: asn1.ASN1Element): void => { tok_id = __utils._decodeInteger(_el); },
        "context-id": (_el: asn1.ASN1Element): void => { context_id = _decode_Random_Integer(_el); },
        "randSrc": (_el: asn1.ASN1Element): void => { randSrc = _decode_Random_Integer(_el); },
        "randTarg": (_el: asn1.ASN1Element): void => { randTarg = _decode_Random_Integer(_el); },
        "targ-name": (_el: asn1.ASN1Element): void => { targ_name = _decode_Name(_el); },
        "src-name": (_el: asn1.ASN1Element): void => { src_name = _decode_Name(_el); },
        "key-estb-rep": (_el: asn1.ASN1Element): void => { key_estb_rep = __utils._decodeBitString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_REP_IT_TOKEN,
        _extension_additions_list_spec_for_REP_IT_TOKEN,
        _root_component_type_list_2_spec_for_REP_IT_TOKEN,
        undefined,
    );
    return new REP_IT_TOKEN( /* SEQUENCE_CONSTRUCTOR_CALL */
        tok_id,
        context_id,
        randSrc,
        randTarg,
        targ_name,
        src_name,
        key_estb_rep
    );
};
export const _encode_REP_IT_TOKEN = function (value: REP_IT_TOKEN, elGetter: __utils.ASN1Encoder<REP_IT_TOKEN>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeInteger(value.tok_id, __utils.BER),
            _encode_Random_Integer(value.context_id, __utils.BER),
            _encode_Random_Integer(value.randSrc, __utils.BER),
            _encode_Random_Integer(value.randTarg, __utils.BER),
            _encode_Name(value.targ_name, __utils.BER),
            (value.src_name ? _encode_Name(value.src_name, __utils.BER) : undefined),
            (value.key_estb_rep ? __utils._encodeBitString(value.key_estb_rep, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SPKM_REP_IT {
    constructor (
        readonly responseToken: REP_IT_TOKEN,
        readonly algId: AlgorithmIdentifier,
        readonly rep_it_integ: Integrity
    ) {}
}
const _root_component_type_list_1_spec_for_SPKM_REP_IT: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("responseToken", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("algId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("rep-it-integ", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_SPKM_REP_IT: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_SPKM_REP_IT: __utils.ComponentSpec[] = [
    
];
export const _decode_SPKM_REP_IT = function (el: asn1.ASN1Element): SPKM_REP_IT {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("SPKM-REP-IT contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "responseToken";
    sequence[1].name = "algId";
    sequence[2].name = "rep-it-integ";
    let responseToken!: REP_IT_TOKEN;
    let algId!: AlgorithmIdentifier;
    let rep_it_integ!: Integrity;
    responseToken = _decode_REP_IT_TOKEN(sequence[0]);
    algId = _decode_AlgorithmIdentifier(sequence[1]);
    rep_it_integ = _decode_Integrity(sequence[2]);
    // TODO: Validate values.
    return new SPKM_REP_IT(
        responseToken,
        algId,
        rep_it_integ,

    );
};
export const _encode_SPKM_REP_IT = function (value: SPKM_REP_IT, elGetter: __utils.ASN1Encoder<SPKM_REP_IT>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_REP_IT_TOKEN(value.responseToken, __utils.BER),
            _encode_AlgorithmIdentifier(value.algId, __utils.BER),
            _encode_Integrity(value.rep_it_integ, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class ERROR_TOKEN {
    constructor (
        readonly tok_id: asn1.INTEGER,
        readonly context_id: Random_Integer
    ) {}
}
const _root_component_type_list_1_spec_for_ERROR_TOKEN: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("tok-id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("context-id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_ERROR_TOKEN: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_ERROR_TOKEN: __utils.ComponentSpec[] = [
    
];
export const _decode_ERROR_TOKEN = function (el: asn1.ASN1Element): ERROR_TOKEN {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("ERROR-TOKEN contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "tok-id";
    sequence[1].name = "context-id";
    let tok_id!: asn1.INTEGER;
    let context_id!: Random_Integer;
    tok_id = __utils._decodeInteger(sequence[0]);
    context_id = _decode_Random_Integer(sequence[1]);
    // TODO: Validate values.
    return new ERROR_TOKEN(
        tok_id,
        context_id,

    );
};
export const _encode_ERROR_TOKEN = function (value: ERROR_TOKEN, elGetter: __utils.ASN1Encoder<ERROR_TOKEN>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeInteger(value.tok_id, __utils.BER),
            _encode_Random_Integer(value.context_id, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SPKM_ERROR {
    constructor (
        readonly errorToken: ERROR_TOKEN,
        readonly algId: AlgorithmIdentifier,
        readonly integrity: Integrity
    ) {}
}
const _root_component_type_list_1_spec_for_SPKM_ERROR: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("errorToken", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("algId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("integrity", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_SPKM_ERROR: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_SPKM_ERROR: __utils.ComponentSpec[] = [
    
];
export const _decode_SPKM_ERROR = function (el: asn1.ASN1Element): SPKM_ERROR {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("SPKM-ERROR contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "errorToken";
    sequence[1].name = "algId";
    sequence[2].name = "integrity";
    let errorToken!: ERROR_TOKEN;
    let algId!: AlgorithmIdentifier;
    let integrity!: Integrity;
    errorToken = _decode_ERROR_TOKEN(sequence[0]);
    algId = _decode_AlgorithmIdentifier(sequence[1]);
    integrity = _decode_Integrity(sequence[2]);
    // TODO: Validate values.
    return new SPKM_ERROR(
        errorToken,
        algId,
        integrity,

    );
};
export const _encode_SPKM_ERROR = function (value: SPKM_ERROR, elGetter: __utils.ASN1Encoder<SPKM_ERROR>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_ERROR_TOKEN(value.errorToken, __utils.BER),
            _encode_AlgorithmIdentifier(value.algId, __utils.BER),
            _encode_Integrity(value.integrity, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SeqNum {
    constructor (
        readonly num: asn1.INTEGER,
        readonly dir_ind: asn1.BOOLEAN
    ) {}
}
const _root_component_type_list_1_spec_for_SeqNum: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("num", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("dir-ind", false, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_SeqNum: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_SeqNum: __utils.ComponentSpec[] = [
    
];
export const _decode_SeqNum = function (el: asn1.ASN1Element): SeqNum {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SeqNum contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "num";
    sequence[1].name = "dir-ind";
    let num!: asn1.INTEGER;
    let dir_ind!: asn1.BOOLEAN;
    num = __utils._decodeInteger(sequence[0]);
    dir_ind = __utils._decodeBoolean(sequence[1]);
    // TODO: Validate values.
    return new SeqNum(
        num,
        dir_ind,

    );
};
export const _encode_SeqNum = function (value: SeqNum, elGetter: __utils.ASN1Encoder<SeqNum>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeInteger(value.num, __utils.BER),
            __utils._encodeBoolean(value.dir_ind, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class Mic_Header {
    constructor (
        readonly tok_id: asn1.INTEGER,
        readonly context_id: Random_Integer,
        readonly int_alg: AlgorithmIdentifier | undefined,
        readonly snd_seq: SeqNum | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_Mic_Header: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("tok-id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("context-id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("int-alg", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("snd-seq", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_Mic_Header: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_Mic_Header: __utils.ComponentSpec[] = [
    
];
export const _decode_Mic_Header = function (el: asn1.ASN1Element): Mic_Header {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let tok_id!: asn1.INTEGER;
    let context_id!: Random_Integer;
    let int_alg: asn1.OPTIONAL<AlgorithmIdentifier>;
    let snd_seq: asn1.OPTIONAL<SeqNum>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "tok-id": (_el: asn1.ASN1Element): void => { tok_id = __utils._decodeInteger(_el); },
        "context-id": (_el: asn1.ASN1Element): void => { context_id = _decode_Random_Integer(_el); },
        "int-alg": (_el: asn1.ASN1Element): void => { int_alg = __utils._decode_implicit<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(_el); },
        "snd-seq": (_el: asn1.ASN1Element): void => { snd_seq = __utils._decode_implicit<SeqNum>(() => _decode_SeqNum)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Mic_Header,
        _extension_additions_list_spec_for_Mic_Header,
        _root_component_type_list_2_spec_for_Mic_Header,
        undefined,
    );
    return new Mic_Header( /* SEQUENCE_CONSTRUCTOR_CALL */
        tok_id,
        context_id,
        int_alg,
        snd_seq
    );
};
export const _encode_Mic_Header = function (value: Mic_Header, elGetter: __utils.ASN1Encoder<Mic_Header>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeInteger(value.tok_id, __utils.BER),
            _encode_Random_Integer(value.context_id, __utils.BER),
            (value.int_alg ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_AlgorithmIdentifier, __utils.BER)(value.int_alg, __utils.BER) : undefined),
            (value.snd_seq ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_SeqNum, __utils.BER)(value.snd_seq, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SPKM_MIC {
    constructor (
        readonly mic_header: Mic_Header,
        readonly int_cksum: asn1.BIT_STRING
    ) {}
}
const _root_component_type_list_1_spec_for_SPKM_MIC: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("mic-header", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("int-cksum", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_SPKM_MIC: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_SPKM_MIC: __utils.ComponentSpec[] = [
    
];
export const _decode_SPKM_MIC = function (el: asn1.ASN1Element): SPKM_MIC {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SPKM-MIC contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "mic-header";
    sequence[1].name = "int-cksum";
    let mic_header!: Mic_Header;
    let int_cksum!: asn1.BIT_STRING;
    mic_header = _decode_Mic_Header(sequence[0]);
    int_cksum = __utils._decodeBitString(sequence[1]);
    // TODO: Validate values.
    return new SPKM_MIC(
        mic_header,
        int_cksum,

    );
};
export const _encode_SPKM_MIC = function (value: SPKM_MIC, elGetter: __utils.ASN1Encoder<SPKM_MIC>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Mic_Header(value.mic_header, __utils.BER),
            __utils._encodeBitString(value.int_cksum, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Conf_Alg =
    { algId: AlgorithmIdentifier }
    | { null_: asn1.NULL };
export const _decode_Conf_Alg = __utils._decode_inextensible_choice<Conf_Alg>({
    "CONTEXT 0": [ "algId", __utils._decode_implicit<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier) ],
    "CONTEXT 1": [ "null_", __utils._decode_implicit<asn1.NULL>(() => __utils._decodeNull) ]
});
export const _encode_Conf_Alg = __utils._encode_choice<Conf_Alg>({
    "algId": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_AlgorithmIdentifier, __utils.BER),
    "null_": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeNull, __utils.BER),
}, __utils.BER);


export class Wrap_Header {
    constructor (
        readonly tok_id: asn1.INTEGER,
        readonly context_id: Random_Integer,
        readonly int_alg: AlgorithmIdentifier | undefined,
        readonly conf_alg: Conf_Alg | undefined,
        readonly snd_seq: SeqNum | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_Wrap_Header: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("tok-id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("context-id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("int-alg", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("conf-alg", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("snd-seq", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
const _root_component_type_list_2_spec_for_Wrap_Header: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_Wrap_Header: __utils.ComponentSpec[] = [
    
];
export const _decode_Wrap_Header = function (el: asn1.ASN1Element): Wrap_Header {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let tok_id!: asn1.INTEGER;
    let context_id!: Random_Integer;
    let int_alg: asn1.OPTIONAL<AlgorithmIdentifier>;
    let conf_alg: asn1.OPTIONAL<Conf_Alg>;
    let snd_seq: asn1.OPTIONAL<SeqNum>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "tok-id": (_el: asn1.ASN1Element): void => { tok_id = __utils._decodeInteger(_el); },
        "context-id": (_el: asn1.ASN1Element): void => { context_id = _decode_Random_Integer(_el); },
        "int-alg": (_el: asn1.ASN1Element): void => { int_alg = __utils._decode_implicit<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(_el); },
        "conf-alg": (_el: asn1.ASN1Element): void => { conf_alg = __utils._decode_implicit<Conf_Alg>(() => _decode_Conf_Alg)(_el); },
        "snd-seq": (_el: asn1.ASN1Element): void => { snd_seq = __utils._decode_implicit<SeqNum>(() => _decode_SeqNum)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Wrap_Header,
        _extension_additions_list_spec_for_Wrap_Header,
        _root_component_type_list_2_spec_for_Wrap_Header,
        undefined,
    );
    return new Wrap_Header( /* SEQUENCE_CONSTRUCTOR_CALL */
        tok_id,
        context_id,
        int_alg,
        conf_alg,
        snd_seq
    );
};
export const _encode_Wrap_Header = function (value: Wrap_Header, elGetter: __utils.ASN1Encoder<Wrap_Header>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeInteger(value.tok_id, __utils.BER),
            _encode_Random_Integer(value.context_id, __utils.BER),
            (value.int_alg ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_AlgorithmIdentifier, __utils.BER)(value.int_alg, __utils.BER) : undefined),
            (value.conf_alg ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_Conf_Alg, __utils.BER)(value.conf_alg, __utils.BER) : undefined),
            (value.snd_seq ? __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_SeqNum, __utils.BER)(value.snd_seq, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class Wrap_Body {
    constructor (
        readonly int_cksum: asn1.BIT_STRING,
        readonly data: asn1.BIT_STRING
    ) {}
}
const _root_component_type_list_1_spec_for_Wrap_Body: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("int-cksum", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("data", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_Wrap_Body: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_Wrap_Body: __utils.ComponentSpec[] = [
    
];
export const _decode_Wrap_Body = function (el: asn1.ASN1Element): Wrap_Body {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("Wrap-Body contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "int-cksum";
    sequence[1].name = "data";
    let int_cksum!: asn1.BIT_STRING;
    let data!: asn1.BIT_STRING;
    int_cksum = __utils._decodeBitString(sequence[0]);
    data = __utils._decodeBitString(sequence[1]);
    // TODO: Validate values.
    return new Wrap_Body(
        int_cksum,
        data,

    );
};
export const _encode_Wrap_Body = function (value: Wrap_Body, elGetter: __utils.ASN1Encoder<Wrap_Body>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeBitString(value.int_cksum, __utils.BER),
            __utils._encodeBitString(value.data, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SPKM_WRAP {
    constructor (
        readonly wrap_header: Wrap_Header,
        readonly wrap_body: Wrap_Body
    ) {}
}
const _root_component_type_list_1_spec_for_SPKM_WRAP: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("wrap-header", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("wrap-body", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
const _root_component_type_list_2_spec_for_SPKM_WRAP: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_SPKM_WRAP: __utils.ComponentSpec[] = [
    
];
export const _decode_SPKM_WRAP = function (el: asn1.ASN1Element): SPKM_WRAP {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SPKM-WRAP contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "wrap-header";
    sequence[1].name = "wrap-body";
    let wrap_header!: Wrap_Header;
    let wrap_body!: Wrap_Body;
    wrap_header = _decode_Wrap_Header(sequence[0]);
    wrap_body = _decode_Wrap_Body(sequence[1]);
    // TODO: Validate values.
    return new SPKM_WRAP(
        wrap_header,
        wrap_body,

    );
};
export const _encode_SPKM_WRAP = function (value: SPKM_WRAP, elGetter: __utils.ASN1Encoder<SPKM_WRAP>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Wrap_Header(value.wrap_header, __utils.BER),
            _encode_Wrap_Body(value.wrap_body, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class Del_Header {
    constructor (
        readonly tok_id: asn1.INTEGER,
        readonly context_id: Random_Integer,
        readonly int_alg: AlgorithmIdentifier | undefined,
        readonly snd_seq: SeqNum | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_Del_Header: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("tok-id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("context-id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("int-alg", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("snd-seq", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_Del_Header: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_Del_Header: __utils.ComponentSpec[] = [
    
];
export const _decode_Del_Header = function (el: asn1.ASN1Element): Del_Header {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let tok_id!: asn1.INTEGER;
    let context_id!: Random_Integer;
    let int_alg: asn1.OPTIONAL<AlgorithmIdentifier>;
    let snd_seq: asn1.OPTIONAL<SeqNum>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "tok-id": (_el: asn1.ASN1Element): void => { tok_id = __utils._decodeInteger(_el); },
        "context-id": (_el: asn1.ASN1Element): void => { context_id = _decode_Random_Integer(_el); },
        "int-alg": (_el: asn1.ASN1Element): void => { int_alg = __utils._decode_implicit<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(_el); },
        "snd-seq": (_el: asn1.ASN1Element): void => { snd_seq = __utils._decode_implicit<SeqNum>(() => _decode_SeqNum)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Del_Header,
        _extension_additions_list_spec_for_Del_Header,
        _root_component_type_list_2_spec_for_Del_Header,
        undefined,
    );
    return new Del_Header( /* SEQUENCE_CONSTRUCTOR_CALL */
        tok_id,
        context_id,
        int_alg,
        snd_seq
    );
};
export const _encode_Del_Header = function (value: Del_Header, elGetter: __utils.ASN1Encoder<Del_Header>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeInteger(value.tok_id, __utils.BER),
            _encode_Random_Integer(value.context_id, __utils.BER),
            (value.int_alg ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_AlgorithmIdentifier, __utils.BER)(value.int_alg, __utils.BER) : undefined),
            (value.snd_seq ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_SeqNum, __utils.BER)(value.snd_seq, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SPKM_DEL {
    constructor (
        readonly del_header: Del_Header,
        readonly int_cksum: asn1.BIT_STRING
    ) {}
}
const _root_component_type_list_1_spec_for_SPKM_DEL: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("del-header", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("int-cksum", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_SPKM_DEL: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_SPKM_DEL: __utils.ComponentSpec[] = [
    
];
export const _decode_SPKM_DEL = function (el: asn1.ASN1Element): SPKM_DEL {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SPKM-DEL contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "del-header";
    sequence[1].name = "int-cksum";
    let del_header!: Del_Header;
    let int_cksum!: asn1.BIT_STRING;
    del_header = _decode_Del_Header(sequence[0]);
    int_cksum = __utils._decodeBitString(sequence[1]);
    // TODO: Validate values.
    return new SPKM_DEL(
        del_header,
        int_cksum,

    );
};
export const _encode_SPKM_DEL = function (value: SPKM_DEL, elGetter: __utils.ASN1Encoder<SPKM_DEL>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Del_Header(value.del_header, __utils.BER),
            __utils._encodeBitString(value.int_cksum, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type SPKMInnerContextToken =
    { req: SPKM_REQ }
    | { rep_ti: SPKM_REP_TI }
    | { rep_it: SPKM_REP_IT }
    | { error: SPKM_ERROR }
    | { mic: SPKM_MIC }
    | { wrap: SPKM_WRAP }
    | { del: SPKM_DEL };
export const _decode_SPKMInnerContextToken = __utils._decode_inextensible_choice<SPKMInnerContextToken>({
    "CONTEXT 0": [ "req", __utils._decode_implicit<SPKM_REQ>(() => _decode_SPKM_REQ) ],
    "CONTEXT 1": [ "rep_ti", __utils._decode_implicit<SPKM_REP_TI>(() => _decode_SPKM_REP_TI) ],
    "CONTEXT 2": [ "rep_it", __utils._decode_implicit<SPKM_REP_IT>(() => _decode_SPKM_REP_IT) ],
    "CONTEXT 3": [ "error", __utils._decode_implicit<SPKM_ERROR>(() => _decode_SPKM_ERROR) ],
    "CONTEXT 4": [ "mic", __utils._decode_implicit<SPKM_MIC>(() => _decode_SPKM_MIC) ],
    "CONTEXT 5": [ "wrap", __utils._decode_implicit<SPKM_WRAP>(() => _decode_SPKM_WRAP) ],
    "CONTEXT 6": [ "del", __utils._decode_implicit<SPKM_DEL>(() => _decode_SPKM_DEL) ]
});
export const _encode_SPKMInnerContextToken = __utils._encode_choice<SPKMInnerContextToken>({
    "req": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_SPKM_REQ, __utils.BER),
    "rep_ti": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_SPKM_REP_TI, __utils.BER),
    "rep_it": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_SPKM_REP_IT, __utils.BER),
    "error": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_SPKM_ERROR, __utils.BER),
    "mic": __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => _encode_SPKM_MIC, __utils.BER),
    "wrap": __utils._encode_implicit(asn1.ASN1TagClass.context, 5, () => _encode_SPKM_WRAP, __utils.BER),
    "del": __utils._encode_implicit(asn1.ASN1TagClass.context, 6, () => _encode_SPKM_DEL, __utils.BER),
}, __utils.BER);


export class InitialContextToken {
    constructor (
        readonly thisMech: MechType,
        readonly innerContextToken: SPKMInnerContextToken
    ) {}
}
const _root_component_type_list_1_spec_for_InitialContextToken: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("thisMech", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("innerContextToken", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_InitialContextToken: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_InitialContextToken: __utils.ComponentSpec[] = [
    
];
export const _decode_InitialContextToken = __utils._decode_implicit<InitialContextToken>(() => function (el: asn1.ASN1Element): InitialContextToken {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("InitialContextToken contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "thisMech";
    sequence[1].name = "innerContextToken";
    let thisMech!: MechType;
    let innerContextToken!: SPKMInnerContextToken;
    thisMech = _decode_MechType(sequence[0]);
    innerContextToken = _decode_SPKMInnerContextToken(sequence[1]);
    // TODO: Validate values.
    return new InitialContextToken(
        thisMech,
        innerContextToken,

    );
});
export const _encode_InitialContextToken = __utils._encode_implicit(asn1.ASN1TagClass.application, 0, () => function (value: InitialContextToken, elGetter: __utils.ASN1Encoder<InitialContextToken>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_MechType(value.thisMech, __utils.BER),
            _encode_SPKMInnerContextToken(value.innerContextToken, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export const md5_DES_CBC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* integrity */ 3,
    /* md5-DES-CBC */ 1,
]);

export const sum64_DES_CBC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* integrity */ 3,
    /* sum64-DES-CBC */ 2,
]);

export const spkm_1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* spkm */ 1,
    /* spkm-1 */ 1,
]);

export const spkm_2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* spkm */ 1,
    /* spkm-2 */ 2,
]);

