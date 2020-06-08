
// DSAOperationalAttributeTypes
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    distributedOperations,
    id_doa,
    id_kmr,
    informationFramework,
    opBindingManagement,
    selectedAttributeTypes
} from "./UsefulDefinitions";

import * as InformationFramework from "./InformationFramework";
import {
    ATTRIBUTE,
    MATCHING_RULE,
    Name,
    _decode_Name,
    _encode_Name
} from "./InformationFramework";

import * as OperationalBindingManagement from "./OperationalBindingManagement";
import {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID
} from "./OperationalBindingManagement";

import * as DistributedOperations from "./DistributedOperations";
import {
    AccessPoint,
    DitBridgeKnowledge,
    MasterAndShadowAccessPoints,
    _decode_AccessPoint,
    _encode_AccessPoint,
    _decode_DitBridgeKnowledge,
    _encode_DitBridgeKnowledge,
    _decode_MasterAndShadowAccessPoints,
    _encode_MasterAndShadowAccessPoints
} from "./DistributedOperations";

import * as SelectedAttributeTypes from "./SelectedAttributeTypes";
import {
    bitStringMatch,
    directoryStringFirstComponentMatch
} from "./SelectedAttributeTypes";


const itu_t: number = 0;
const itu_r: number = 0;
const ccitt: number = 0;
const iso: number = 1;
const joint_iso_itu_t: number = 2;
const joint_iso_ccitt: number = 2;

// TODO: ObjectAssignment: dseType

export type DSEType = asn1.BIT_STRING;
export const DSEType_root: number = 0; /* LONG_NAMED_BIT */
export const root: number = DSEType_root; /* SHORT_NAMED_BIT */
export const DSEType_glue: number = 1; /* LONG_NAMED_BIT */
export const glue: number = DSEType_glue; /* SHORT_NAMED_BIT */
export const DSEType_cp: number = 2; /* LONG_NAMED_BIT */
export const cp: number = DSEType_cp; /* SHORT_NAMED_BIT */
export const DSEType_entry: number = 3; /* LONG_NAMED_BIT */
export const entry: number = DSEType_entry; /* SHORT_NAMED_BIT */
export const DSEType_alias: number = 4; /* LONG_NAMED_BIT */
export const alias: number = DSEType_alias; /* SHORT_NAMED_BIT */
export const DSEType_subr: number = 5; /* LONG_NAMED_BIT */
export const subr: number = DSEType_subr; /* SHORT_NAMED_BIT */
export const DSEType_nssr: number = 6; /* LONG_NAMED_BIT */
export const nssr: number = DSEType_nssr; /* SHORT_NAMED_BIT */
export const DSEType_supr: number = 7; /* LONG_NAMED_BIT */
export const supr: number = DSEType_supr; /* SHORT_NAMED_BIT */
export const DSEType_xr: number = 8; /* LONG_NAMED_BIT */
export const xr: number = DSEType_xr; /* SHORT_NAMED_BIT */
export const DSEType_admPoint: number = 9; /* LONG_NAMED_BIT */
export const admPoint: number = DSEType_admPoint; /* SHORT_NAMED_BIT */
export const DSEType_subentry: number = 10; /* LONG_NAMED_BIT */
export const subentry: number = DSEType_subentry; /* SHORT_NAMED_BIT */
export const DSEType_shadow: number = 11; /* LONG_NAMED_BIT */
export const shadow: number = DSEType_shadow; /* SHORT_NAMED_BIT */
export const DSEType_immSupr: number = 13; /* LONG_NAMED_BIT */
export const immSupr: number = DSEType_immSupr; /* SHORT_NAMED_BIT */
export const DSEType_rhob: number = 14; /* LONG_NAMED_BIT */
export const rhob: number = DSEType_rhob; /* SHORT_NAMED_BIT */
export const DSEType_sa: number = 15; /* LONG_NAMED_BIT */
export const sa: number = DSEType_sa; /* SHORT_NAMED_BIT */
export const DSEType_dsSubentry: number = 16; /* LONG_NAMED_BIT */
export const dsSubentry: number = DSEType_dsSubentry; /* SHORT_NAMED_BIT */
export const DSEType_familyMember: number = 17; /* LONG_NAMED_BIT */
export const familyMember: number = DSEType_familyMember; /* SHORT_NAMED_BIT */
export const DSEType_ditBridge: number = 18; /* LONG_NAMED_BIT */
export const ditBridge: number = DSEType_ditBridge; /* SHORT_NAMED_BIT */
export const _decode_DSEType = __utils._decodeBitString;
export const _encode_DSEType = __utils._encodeBitString;


// TODO: ObjectAssignment: myAccessPoint

// TODO: ObjectAssignment: superiorKnowledge

// TODO: ObjectAssignment: specificKnowledge

// TODO: ObjectAssignment: nonSpecificKnowledge

export class SupplierOrConsumer {
    constructor (
        readonly ae_title: Name /* REPLICATED_COMPONENT */,
        readonly address: PresentationAddress /* REPLICATED_COMPONENT */,
        readonly protocolInformation: ProtocolInformation[] | undefined /* REPLICATED_COMPONENT */,
        readonly agreementID: OperationalBindingID,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_SupplierOrConsumer: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("ae-title", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    /* FIXME: address COULD_NOT_RESOLVE_TYPE_DEF */,
    new __utils.ComponentSpec("protocolInformation", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("agreementID", false, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_SupplierOrConsumer: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_SupplierOrConsumer: __utils.ComponentSpec[] = [
    
];
export const _decode_SupplierOrConsumer = function (el: asn1.ASN1Element): SupplierOrConsumer {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let ae_title!: Name;
    let address!: PresentationAddress;
    let protocolInformation: asn1.OPTIONAL<ProtocolInformation[]>;
    let agreementID!: OperationalBindingID;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "ae-title": (_el: asn1.ASN1Element): void => { ae_title = __utils._decode_explicit<Name>(() => _decode_Name)(_el); },
        "address": (_el: asn1.ASN1Element): void => { address = __utils._decode_explicit<PresentationAddress>(() => _decode_PresentationAddress)(_el); },
        "protocolInformation": (_el: asn1.ASN1Element): void => { protocolInformation = __utils._decode_explicit<ProtocolInformation[]>(() => __utils._decodeSetOf<ProtocolInformation>(() => _decode_ProtocolInformation))(_el); },
        "agreementID": (_el: asn1.ASN1Element): void => { agreementID = __utils._decode_explicit<OperationalBindingID>(() => _decode_OperationalBindingID)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SupplierOrConsumer,
        _extension_additions_list_spec_for_SupplierOrConsumer,
        _root_component_type_list_2_spec_for_SupplierOrConsumer,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new SupplierOrConsumer( /* SET_CONSTRUCTOR_CALL */
        ae_title,
        address,
        protocolInformation,
        agreementID,
        _unrecognizedExtensionsList
    );
};
export const _encode_SupplierOrConsumer = function (value: SupplierOrConsumer, elGetter: __utils.ASN1Encoder<SupplierOrConsumer>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Name, __utils.BER)(value.ae_title, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_PresentationAddress, __utils.BER)(value.address, __utils.BER),
            (value.protocolInformation ? __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSetOf<ProtocolInformation>(() => _encode_ProtocolInformation, __utils.BER), __utils.BER)(value.protocolInformation, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_OperationalBindingID, __utils.BER)(value.agreementID, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SupplierInformation {
    constructor (
        readonly ae_title: Name /* REPLICATED_COMPONENT */,
        readonly address: PresentationAddress /* REPLICATED_COMPONENT */,
        readonly protocolInformation: ProtocolInformation[] | undefined /* REPLICATED_COMPONENT */,
        readonly agreementID: OperationalBindingID /* REPLICATED_COMPONENT */,
        readonly supplier_is_master: asn1.BOOLEAN | undefined,
        readonly non_supplying_master: AccessPoint | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_SupplierInformation: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("ae-title", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    /* FIXME: address COULD_NOT_RESOLVE_TYPE_DEF */,
    new __utils.ComponentSpec("protocolInformation", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("agreementID", false, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("supplier-is-master", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("non-supplying-master", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined)
];
const _root_component_type_list_2_spec_for_SupplierInformation: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_SupplierInformation: __utils.ComponentSpec[] = [
    
];
export const _decode_SupplierInformation = function (el: asn1.ASN1Element): SupplierInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let ae_title!: Name;
    let address!: PresentationAddress;
    let protocolInformation: asn1.OPTIONAL<ProtocolInformation[]>;
    let agreementID!: OperationalBindingID;
    let supplier_is_master: asn1.OPTIONAL<asn1.BOOLEAN> = true;
    let non_supplying_master: asn1.OPTIONAL<AccessPoint>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "ae-title": (_el: asn1.ASN1Element): void => { ae_title = __utils._decode_explicit<Name>(() => _decode_Name)(_el); },
        "address": (_el: asn1.ASN1Element): void => { address = __utils._decode_explicit<PresentationAddress>(() => _decode_PresentationAddress)(_el); },
        "protocolInformation": (_el: asn1.ASN1Element): void => { protocolInformation = __utils._decode_explicit<ProtocolInformation[]>(() => __utils._decodeSetOf<ProtocolInformation>(() => _decode_ProtocolInformation))(_el); },
        "agreementID": (_el: asn1.ASN1Element): void => { agreementID = __utils._decode_explicit<OperationalBindingID>(() => _decode_OperationalBindingID)(_el); },
        "supplier-is-master": (_el: asn1.ASN1Element): void => { supplier_is_master = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "non-supplying-master": (_el: asn1.ASN1Element): void => { non_supplying_master = __utils._decode_explicit<AccessPoint>(() => _decode_AccessPoint)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SupplierInformation,
        _extension_additions_list_spec_for_SupplierInformation,
        _root_component_type_list_2_spec_for_SupplierInformation,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new SupplierInformation( /* SET_CONSTRUCTOR_CALL */
        ae_title,
        address,
        protocolInformation,
        agreementID,
        supplier_is_master,
        non_supplying_master,
        _unrecognizedExtensionsList
    );
};
export const _encode_SupplierInformation = function (value: SupplierInformation, elGetter: __utils.ASN1Encoder<SupplierInformation>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Name, __utils.BER)(value.ae_title, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_PresentationAddress, __utils.BER)(value.address, __utils.BER),
            (value.protocolInformation ? __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSetOf<ProtocolInformation>(() => _encode_ProtocolInformation, __utils.BER), __utils.BER)(value.protocolInformation, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_OperationalBindingID, __utils.BER)(value.agreementID, __utils.BER),
            ((value.supplier_is_master !== undefined && value.supplier_is_master !== true) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => __utils._encodeBoolean, __utils.BER)(value.supplier_is_master, __utils.BER) : undefined),
            (value.non_supplying_master ? __utils._encode_explicit(asn1.ASN1TagClass.context, 5, () => _encode_AccessPoint, __utils.BER)(value.non_supplying_master, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: supplierKnowledge

export type ConsumerInformation = SupplierOrConsumer; // DefinedType
export const _decode_ConsumerInformation = _decode_SupplierOrConsumer;
export const _encode_ConsumerInformation = _encode_SupplierOrConsumer;


// TODO: ObjectAssignment: consumerKnowledge

export class SupplierAndConsumers {
    constructor (
        readonly ae_title: Name /* REPLICATED_COMPONENT */,
        readonly address: PresentationAddress /* REPLICATED_COMPONENT */,
        readonly protocolInformation: ProtocolInformation[] | undefined /* REPLICATED_COMPONENT */,
        readonly consumers: AccessPoint[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_SupplierAndConsumers: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("ae-title", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    /* FIXME: address COULD_NOT_RESOLVE_TYPE_DEF */,
    new __utils.ComponentSpec("protocolInformation", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("consumers", false, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_SupplierAndConsumers: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_SupplierAndConsumers: __utils.ComponentSpec[] = [
    
];
export const _decode_SupplierAndConsumers = function (el: asn1.ASN1Element): SupplierAndConsumers {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let ae_title!: Name;
    let address!: PresentationAddress;
    let protocolInformation: asn1.OPTIONAL<ProtocolInformation[]>;
    let consumers!: AccessPoint[];
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "ae-title": (_el: asn1.ASN1Element): void => { ae_title = __utils._decode_explicit<Name>(() => _decode_Name)(_el); },
        "address": (_el: asn1.ASN1Element): void => { address = __utils._decode_explicit<PresentationAddress>(() => _decode_PresentationAddress)(_el); },
        "protocolInformation": (_el: asn1.ASN1Element): void => { protocolInformation = __utils._decode_explicit<ProtocolInformation[]>(() => __utils._decodeSetOf<ProtocolInformation>(() => _decode_ProtocolInformation))(_el); },
        "consumers": (_el: asn1.ASN1Element): void => { consumers = __utils._decode_explicit<AccessPoint[]>(() => __utils._decodeSetOf<AccessPoint>(() => _decode_AccessPoint))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SupplierAndConsumers,
        _extension_additions_list_spec_for_SupplierAndConsumers,
        _root_component_type_list_2_spec_for_SupplierAndConsumers,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new SupplierAndConsumers( /* SET_CONSTRUCTOR_CALL */
        ae_title,
        address,
        protocolInformation,
        consumers,
        _unrecognizedExtensionsList
    );
};
export const _encode_SupplierAndConsumers = function (value: SupplierAndConsumers, elGetter: __utils.ASN1Encoder<SupplierAndConsumers>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Name, __utils.BER)(value.ae_title, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_PresentationAddress, __utils.BER)(value.address, __utils.BER),
            (value.protocolInformation ? __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSetOf<ProtocolInformation>(() => _encode_ProtocolInformation, __utils.BER), __utils.BER)(value.protocolInformation, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeSetOf<AccessPoint>(() => _encode_AccessPoint, __utils.BER), __utils.BER)(value.consumers, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: secondaryShadows

// TODO: ObjectAssignment: ditBridgeKnowledge

// TODO: ObjectAssignment: accessPointMatch

// TODO: ObjectAssignment: masterAndShadowAccessPointsMatch

// TODO: ObjectAssignment: supplierOrConsumerInformationMatch

// TODO: ObjectAssignment: supplierAndConsumersMatch

export const id_doa_dseType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    0,
], id_doa);

export const id_doa_myAccessPoint: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_doa);

export const id_doa_superiorKnowledge: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_doa);

export const id_doa_specificKnowledge: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_doa);

export const id_doa_nonSpecificKnowledge: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_doa);

export const id_doa_supplierKnowledge: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_doa);

export const id_doa_consumerKnowledge: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id_doa);

export const id_doa_secondaryShadows: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
], id_doa);

export const id_doa_ditBridgeKnowledge: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
], id_doa);

export const id_kmr_accessPointMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    0,
], id_kmr);

export const id_kmr_masterShadowMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_kmr);

export const id_kmr_supplierConsumerMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_kmr);

export const id_kmr_supplierConsumersMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_kmr);

