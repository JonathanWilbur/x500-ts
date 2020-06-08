
// OSIProtocolSpecification
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    commonProtocolSpecification,
    directoryAbstractService,
    directoryOSIProtocols,
    enhancedSecurity,
    informationFramework
} from "./UsefulDefinitions";

import * as InformationFramework from "./InformationFramework";
import {
    Name,
    RelativeDistinguishedName,
    _decode_Name,
    _encode_Name,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName
} from "./InformationFramework";

import * as DirectoryAbstractService from "./DirectoryAbstractService";
import {
    SecurityProblem,
    ServiceProblem,
    Versions,
    _decode_SecurityProblem,
    _encode_SecurityProblem,
    _decode_ServiceProblem,
    _encode_ServiceProblem,
    _decode_Versions,
    _encode_Versions
} from "./DirectoryAbstractService";

import * as CommonProtocolSpecification from "./CommonProtocolSpecification";
import {
    InvokeId,
    OPERATION,
    _decode_InvokeId,
    _encode_InvokeId
} from "./CommonProtocolSpecification";

import * as DirectoryOSIProtocols from "./DirectoryOSIProtocols";
import {
    APPLICATION_CONTEXT
} from "./DirectoryOSIProtocols";


const itu_t: number = 0;
const itu_r: number = 0;
const ccitt: number = 0;
const iso: number = 1;
const joint_iso_itu_t: number = 2;
const joint_iso_ccitt: number = 2;

export type OSI_PDU = asn1.ASN1Element; // ObjectClassFieldType
export const _decode_OSI_PDU = __utils._decodeAny;
export const _encode_OSI_PDU = __utils._encodeAny;


export class OsiBind_mode_selector {
    constructor (
        readonly mode_value: asn1.INTEGER
    ) {}
}
const _root_component_type_list_1_spec_for_OsiBind_mode_selector: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("mode-value", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiBind_mode_selector: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiBind_mode_selector: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiBind_mode_selector = function (el: asn1.ASN1Element): OsiBind_mode_selector {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let mode_value!: asn1.INTEGER;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "mode-value": (_el: asn1.ASN1Element): void => { mode_value = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OsiBind_mode_selector,
        _extension_additions_list_spec_for_OsiBind_mode_selector,
        _root_component_type_list_2_spec_for_OsiBind_mode_selector,
        undefined,
    );
    return new OsiBind_mode_selector( /* SET_CONSTRUCTOR_CALL */
        mode_value
    );
};
export const _encode_OsiBind_mode_selector = function (value: OsiBind_mode_selector, elGetter: __utils.ASN1Encoder<OsiBind_mode_selector>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeInteger, __utils.BER)(value.mode_value, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type OsiBind_normal_mode_parameters_protocol_version = asn1.BIT_STRING;
export const OsiBind_normal_mode_parameters_protocol_version_version_1: number = 0; /* LONG_NAMED_BIT */
export const version_1: number = OsiBind_normal_mode_parameters_protocol_version_version_1; /* SHORT_NAMED_BIT */
export const _decode_OsiBind_normal_mode_parameters_protocol_version = __utils._decodeBitString;
export const _encode_OsiBind_normal_mode_parameters_protocol_version = __utils._encodeBitString;


export type Presentation_selector = asn1.OCTET_STRING; // OctetStringType
export const _decode_Presentation_selector = __utils._decodeOctetString;
export const _encode_Presentation_selector = __utils._encodeOctetString;


export type Presentation_context_identifier = asn1.INTEGER;
export const _decode_Presentation_context_identifier = __utils._decodeInteger;
export const _encode_Presentation_context_identifier = __utils._encodeInteger;


export type Abstract_syntax_name = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_Abstract_syntax_name = __utils._decodeObjectIdentifier;
export const _encode_Abstract_syntax_name = __utils._encodeObjectIdentifier;


export type Transfer_syntax_name = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_Transfer_syntax_name = __utils._decodeObjectIdentifier;
export const _encode_Transfer_syntax_name = __utils._encodeObjectIdentifier;


export class Context_list_Item {
    constructor (
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly abstract_syntax_name: Abstract_syntax_name,
        readonly transfer_syntax_name_list: Transfer_syntax_name[]
    ) {}
}
const _root_component_type_list_1_spec_for_Context_list_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("presentation-context-identifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("abstract-syntax-name", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("transfer-syntax-name-list", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
const _root_component_type_list_2_spec_for_Context_list_Item: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_Context_list_Item: __utils.ComponentSpec[] = [
    
];
export const _decode_Context_list_Item = function (el: asn1.ASN1Element): Context_list_Item {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("Context-list-Item contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "presentation-context-identifier";
    sequence[1].name = "abstract-syntax-name";
    sequence[2].name = "transfer-syntax-name-list";
    let presentation_context_identifier!: Presentation_context_identifier;
    let abstract_syntax_name!: Abstract_syntax_name;
    let transfer_syntax_name_list!: Transfer_syntax_name[];
    presentation_context_identifier = _decode_Presentation_context_identifier(sequence[0]);
    abstract_syntax_name = _decode_Abstract_syntax_name(sequence[1]);
    transfer_syntax_name_list = __utils._decodeSequenceOf<Transfer_syntax_name>(() => _decode_Transfer_syntax_name)(sequence[2]);
    // TODO: Validate values.
    return new Context_list_Item(
        presentation_context_identifier,
        abstract_syntax_name,
        transfer_syntax_name_list,

    );
};
export const _encode_Context_list_Item = function (value: Context_list_Item, elGetter: __utils.ASN1Encoder<Context_list_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Presentation_context_identifier(value.presentation_context_identifier, __utils.BER),
            _encode_Abstract_syntax_name(value.abstract_syntax_name, __utils.BER),
            __utils._encodeSequenceOf<Transfer_syntax_name>(() => _encode_Transfer_syntax_name, __utils.BER)(value.transfer_syntax_name_list, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Context_list = Context_list_Item[]; // SequenceOfType
export const _decode_Context_list = __utils._decodeSequenceOf<Context_list_Item>(() => _decode_Context_list_Item);
export const _encode_Context_list = __utils._encodeSequenceOf<Context_list_Item>(() => _encode_Context_list_Item, __utils.BER);


export type OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values =
    { single_ASN1_type: asn1.ASN1Element };
export const _decode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._decode_inextensible_choice<OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values>({
    "CONTEXT 0": [ "single_ASN1_type", __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny) ]
});
export const _encode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._encode_choice<OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values>({
    "single_ASN1_type": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeAny, __utils.BER),
}, __utils.BER);


export class OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item {
    constructor (
        readonly transfer_syntax_name: Transfer_syntax_name | undefined,
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly presentation_data_values: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {}
}
const _root_component_type_list_1_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("transfer-syntax-name", true, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("presentation-context-identifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("presentation-data-values", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item = function (el: asn1.ASN1Element): OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let transfer_syntax_name: asn1.OPTIONAL<Transfer_syntax_name>;
    let presentation_context_identifier!: Presentation_context_identifier;
    let presentation_data_values!: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "transfer-syntax-name": (_el: asn1.ASN1Element): void => { transfer_syntax_name = _decode_Transfer_syntax_name(_el); },
        "presentation-context-identifier": (_el: asn1.ASN1Element): void => { presentation_context_identifier = _decode_Presentation_context_identifier(_el); },
        "presentation-data-values": (_el: asn1.ASN1Element): void => { presentation_data_values = _decode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item,
        _extension_additions_list_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item,
        _root_component_type_list_2_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item,
        undefined,
    );
    return new OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item( /* SEQUENCE_CONSTRUCTOR_CALL */
        transfer_syntax_name,
        presentation_context_identifier,
        presentation_data_values
    );
};
export const _encode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item = function (value: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item, elGetter: __utils.ASN1Encoder<OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.transfer_syntax_name ? _encode_Transfer_syntax_name(value.transfer_syntax_name, __utils.BER) : undefined),
            _encode_Presentation_context_identifier(value.presentation_context_identifier, __utils.BER),
            _encode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(value.presentation_data_values, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type OsiBind_normal_mode_parameters_user_data =
    { fully_encoded_data: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item[] };
export const _decode_OsiBind_normal_mode_parameters_user_data = __utils._decode_inextensible_choice<OsiBind_normal_mode_parameters_user_data>({
    "APPLICATION 1": [ "fully_encoded_data", __utils._decode_explicit<OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item[]>(() => __utils._decodeSequenceOf<OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item>(() => _decode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item)) ]
});
export const _encode_OsiBind_normal_mode_parameters_user_data = __utils._encode_choice<OsiBind_normal_mode_parameters_user_data>({
    "fully_encoded_data": __utils._encode_explicit(asn1.ASN1TagClass.application, 1, () => __utils._encodeSequenceOf<OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item>(() => _encode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item, __utils.BER), __utils.BER),
}, __utils.BER);


export class OsiBind_normal_mode_parameters {
    constructor (
        readonly protocol_version: OsiBind_normal_mode_parameters_protocol_version | undefined,
        readonly calling_presentation_selector: Presentation_selector | undefined,
        readonly called_presentation_selector: Presentation_selector | undefined,
        readonly presentation_context_definition_list: Context_list,
        readonly user_data: OsiBind_normal_mode_parameters_user_data
    ) {}
}
const _root_component_type_list_1_spec_for_OsiBind_normal_mode_parameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("protocol-version", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("calling-presentation-selector", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("called-presentation-selector", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("presentation-context-definition-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("user-data", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiBind_normal_mode_parameters: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiBind_normal_mode_parameters: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiBind_normal_mode_parameters = function (el: asn1.ASN1Element): OsiBind_normal_mode_parameters {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let protocol_version: asn1.OPTIONAL<OsiBind_normal_mode_parameters_protocol_version> = /* FIXME: protocol-version COULD_NOT_COMPILE_DEFAULT_VALUE */;
    let calling_presentation_selector: asn1.OPTIONAL<Presentation_selector>;
    let called_presentation_selector: asn1.OPTIONAL<Presentation_selector>;
    let presentation_context_definition_list!: Context_list;
    let user_data!: OsiBind_normal_mode_parameters_user_data;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "protocol-version": (_el: asn1.ASN1Element): void => { protocol_version = __utils._decode_explicit<OsiBind_normal_mode_parameters_protocol_version>(() => _decode_OsiBind_normal_mode_parameters_protocol_version)(_el); },
        "calling-presentation-selector": (_el: asn1.ASN1Element): void => { calling_presentation_selector = __utils._decode_explicit<Presentation_selector>(() => _decode_Presentation_selector)(_el); },
        "called-presentation-selector": (_el: asn1.ASN1Element): void => { called_presentation_selector = __utils._decode_explicit<Presentation_selector>(() => _decode_Presentation_selector)(_el); },
        "presentation-context-definition-list": (_el: asn1.ASN1Element): void => { presentation_context_definition_list = __utils._decode_explicit<Context_list>(() => _decode_Context_list)(_el); },
        "user-data": (_el: asn1.ASN1Element): void => { user_data = _decode_OsiBind_normal_mode_parameters_user_data(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OsiBind_normal_mode_parameters,
        _extension_additions_list_spec_for_OsiBind_normal_mode_parameters,
        _root_component_type_list_2_spec_for_OsiBind_normal_mode_parameters,
        undefined,
    );
    return new OsiBind_normal_mode_parameters( /* SEQUENCE_CONSTRUCTOR_CALL */
        protocol_version,
        calling_presentation_selector,
        called_presentation_selector,
        presentation_context_definition_list,
        user_data
    );
};
export const _encode_OsiBind_normal_mode_parameters = function (value: OsiBind_normal_mode_parameters, elGetter: __utils.ASN1Encoder<OsiBind_normal_mode_parameters>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.protocol_version /* FIXME: COULD_NOT_COMPILE_DEFAULT_VALUE */? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_OsiBind_normal_mode_parameters_protocol_version, __utils.BER)(value.protocol_version, __utils.BER) : undefined),
            (value.calling_presentation_selector ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Presentation_selector, __utils.BER)(value.calling_presentation_selector, __utils.BER) : undefined),
            (value.called_presentation_selector ? __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_Presentation_selector, __utils.BER)(value.called_presentation_selector, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => _encode_Context_list, __utils.BER)(value.presentation_context_definition_list, __utils.BER),
            _encode_OsiBind_normal_mode_parameters_user_data(value.user_data, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class OsiBind {
    constructor (
        readonly mode_selector: OsiBind_mode_selector,
        readonly normal_mode_parameters: OsiBind_normal_mode_parameters
    ) {}
}
const _root_component_type_list_1_spec_for_OsiBind: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("mode-selector", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("normal-mode-parameters", false, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiBind: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiBind: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiBind = function (el: asn1.ASN1Element): OsiBind {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let mode_selector!: OsiBind_mode_selector;
    let normal_mode_parameters!: OsiBind_normal_mode_parameters;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "mode-selector": (_el: asn1.ASN1Element): void => { mode_selector = __utils._decode_explicit<OsiBind_mode_selector>(() => _decode_OsiBind_mode_selector)(_el); },
        "normal-mode-parameters": (_el: asn1.ASN1Element): void => { normal_mode_parameters = __utils._decode_explicit<OsiBind_normal_mode_parameters>(() => _decode_OsiBind_normal_mode_parameters)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OsiBind,
        _extension_additions_list_spec_for_OsiBind,
        _root_component_type_list_2_spec_for_OsiBind,
        undefined,
    );
    return new OsiBind( /* SET_CONSTRUCTOR_CALL */
        mode_selector,
        normal_mode_parameters
    );
};
export const _encode_OsiBind = function (value: OsiBind, elGetter: __utils.ASN1Encoder<OsiBind>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_OsiBind_mode_selector, __utils.BER)(value.mode_selector, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_OsiBind_normal_mode_parameters, __utils.BER)(value.normal_mode_parameters, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AARQ_apdu_protocol_version = asn1.BIT_STRING;
export const AARQ_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */
export const version1: number = AARQ_apdu_protocol_version_version1; /* SHORT_NAMED_BIT */
export const _decode_AARQ_apdu_protocol_version = __utils._decodeBitString;
export const _encode_AARQ_apdu_protocol_version = __utils._encodeBitString;


export type Application_context_name = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_Application_context_name = __utils._decodeObjectIdentifier;
export const _encode_Application_context_name = __utils._encodeObjectIdentifier;


export type AP_invocation_identifier = asn1.INTEGER;
export const _decode_AP_invocation_identifier = __utils._decodeInteger;
export const _encode_AP_invocation_identifier = __utils._encodeInteger;


export type AE_invocation_identifier = asn1.INTEGER;
export const _decode_AE_invocation_identifier = __utils._decodeInteger;
export const _encode_AE_invocation_identifier = __utils._encodeInteger;


export type Implementation_data = asn1.GraphicString; // GraphicString
export const _decode_Implementation_data = __utils._decodeGraphicString;
export const _encode_Implementation_data = __utils._encodeGraphicString;


export type Association_informationBind = asn1.EXTERNAL[]; // SequenceOfType
export const _decode_Association_informationBind = __utils._decodeSequenceOf<asn1.EXTERNAL>(() => __utils._decodeExternal);
export const _encode_Association_informationBind = __utils._encodeSequenceOf<asn1.EXTERNAL>(() => __utils._encodeExternal, __utils.BER);


export class AARQ_apdu {
    constructor (
        readonly protocol_version: AARQ_apdu_protocol_version | undefined,
        readonly application_context_name: Application_context_name,
        readonly called_AP_title: Name | undefined,
        readonly called_AE_qualifier: RelativeDistinguishedName | undefined,
        readonly called_AP_invocation_identifier: AP_invocation_identifier | undefined,
        readonly called_AE_invocation_identifier: AE_invocation_identifier | undefined,
        readonly calling_AP_title: Name | undefined,
        readonly calling_AE_qualifier: RelativeDistinguishedName | undefined,
        readonly calling_AP_invocation_identifier: AP_invocation_identifier | undefined,
        readonly calling_AE_invocation_identifier: AE_invocation_identifier | undefined,
        readonly implementation_information: Implementation_data | undefined,
        readonly user_information: Association_informationBind
    ) {}
}
const _root_component_type_list_1_spec_for_AARQ_apdu: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("protocol-version", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("application-context-name", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("called-AP-title", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("called-AE-qualifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("called-AP-invocation-identifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("called-AE-invocation-identifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("calling-AP-title", true, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined),
    new __utils.ComponentSpec("calling-AE-qualifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined),
    new __utils.ComponentSpec("calling-AP-invocation-identifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 8), undefined, undefined),
    new __utils.ComponentSpec("calling-AE-invocation-identifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 9), undefined, undefined),
    new __utils.ComponentSpec("implementation-information", true, __utils.hasTag(asn1.ASN1TagClass.context, 29), undefined, undefined),
    new __utils.ComponentSpec("user-information", false, __utils.hasTag(asn1.ASN1TagClass.context, 30), undefined, undefined)
];
const _root_component_type_list_2_spec_for_AARQ_apdu: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_AARQ_apdu: __utils.ComponentSpec[] = [
    
];
export const _decode_AARQ_apdu = __utils._decode_explicit<AARQ_apdu>(() => function (el: asn1.ASN1Element): AARQ_apdu {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let protocol_version: asn1.OPTIONAL<AARQ_apdu_protocol_version> = /* FIXME: protocol-version COULD_NOT_COMPILE_DEFAULT_VALUE */;
    let application_context_name!: Application_context_name;
    let called_AP_title: asn1.OPTIONAL<Name>;
    let called_AE_qualifier: asn1.OPTIONAL<RelativeDistinguishedName>;
    let called_AP_invocation_identifier: asn1.OPTIONAL<AP_invocation_identifier>;
    let called_AE_invocation_identifier: asn1.OPTIONAL<AE_invocation_identifier>;
    let calling_AP_title: asn1.OPTIONAL<Name>;
    let calling_AE_qualifier: asn1.OPTIONAL<RelativeDistinguishedName>;
    let calling_AP_invocation_identifier: asn1.OPTIONAL<AP_invocation_identifier>;
    let calling_AE_invocation_identifier: asn1.OPTIONAL<AE_invocation_identifier>;
    let implementation_information: asn1.OPTIONAL<Implementation_data>;
    let user_information!: Association_informationBind;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "protocol-version": (_el: asn1.ASN1Element): void => { protocol_version = __utils._decode_explicit<AARQ_apdu_protocol_version>(() => _decode_AARQ_apdu_protocol_version)(_el); },
        "application-context-name": (_el: asn1.ASN1Element): void => { application_context_name = __utils._decode_explicit<Application_context_name>(() => _decode_Application_context_name)(_el); },
        "called-AP-title": (_el: asn1.ASN1Element): void => { called_AP_title = __utils._decode_explicit<Name>(() => _decode_Name)(_el); },
        "called-AE-qualifier": (_el: asn1.ASN1Element): void => { called_AE_qualifier = __utils._decode_explicit<RelativeDistinguishedName>(() => _decode_RelativeDistinguishedName)(_el); },
        "called-AP-invocation-identifier": (_el: asn1.ASN1Element): void => { called_AP_invocation_identifier = __utils._decode_explicit<AP_invocation_identifier>(() => _decode_AP_invocation_identifier)(_el); },
        "called-AE-invocation-identifier": (_el: asn1.ASN1Element): void => { called_AE_invocation_identifier = __utils._decode_explicit<AE_invocation_identifier>(() => _decode_AE_invocation_identifier)(_el); },
        "calling-AP-title": (_el: asn1.ASN1Element): void => { calling_AP_title = __utils._decode_explicit<Name>(() => _decode_Name)(_el); },
        "calling-AE-qualifier": (_el: asn1.ASN1Element): void => { calling_AE_qualifier = __utils._decode_explicit<RelativeDistinguishedName>(() => _decode_RelativeDistinguishedName)(_el); },
        "calling-AP-invocation-identifier": (_el: asn1.ASN1Element): void => { calling_AP_invocation_identifier = __utils._decode_explicit<AP_invocation_identifier>(() => _decode_AP_invocation_identifier)(_el); },
        "calling-AE-invocation-identifier": (_el: asn1.ASN1Element): void => { calling_AE_invocation_identifier = __utils._decode_explicit<AE_invocation_identifier>(() => _decode_AE_invocation_identifier)(_el); },
        "implementation-information": (_el: asn1.ASN1Element): void => { implementation_information = __utils._decode_explicit<Implementation_data>(() => _decode_Implementation_data)(_el); },
        "user-information": (_el: asn1.ASN1Element): void => { user_information = __utils._decode_explicit<Association_informationBind>(() => _decode_Association_informationBind)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AARQ_apdu,
        _extension_additions_list_spec_for_AARQ_apdu,
        _root_component_type_list_2_spec_for_AARQ_apdu,
        undefined,
    );
    return new AARQ_apdu( /* SEQUENCE_CONSTRUCTOR_CALL */
        protocol_version,
        application_context_name,
        called_AP_title,
        called_AE_qualifier,
        called_AP_invocation_identifier,
        called_AE_invocation_identifier,
        calling_AP_title,
        calling_AE_qualifier,
        calling_AP_invocation_identifier,
        calling_AE_invocation_identifier,
        implementation_information,
        user_information
    );
});
export const _encode_AARQ_apdu = __utils._encode_explicit(asn1.ASN1TagClass.application, 0, () => function (value: AARQ_apdu, elGetter: __utils.ASN1Encoder<AARQ_apdu>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.protocol_version /* FIXME: COULD_NOT_COMPILE_DEFAULT_VALUE */? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_AARQ_apdu_protocol_version, __utils.BER)(value.protocol_version, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Application_context_name, __utils.BER)(value.application_context_name, __utils.BER),
            (value.called_AP_title ? __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_Name, __utils.BER)(value.called_AP_title, __utils.BER) : undefined),
            (value.called_AE_qualifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_RelativeDistinguishedName, __utils.BER)(value.called_AE_qualifier, __utils.BER) : undefined),
            (value.called_AP_invocation_identifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => _encode_AP_invocation_identifier, __utils.BER)(value.called_AP_invocation_identifier, __utils.BER) : undefined),
            (value.called_AE_invocation_identifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 5, () => _encode_AE_invocation_identifier, __utils.BER)(value.called_AE_invocation_identifier, __utils.BER) : undefined),
            (value.calling_AP_title ? __utils._encode_explicit(asn1.ASN1TagClass.context, 6, () => _encode_Name, __utils.BER)(value.calling_AP_title, __utils.BER) : undefined),
            (value.calling_AE_qualifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 7, () => _encode_RelativeDistinguishedName, __utils.BER)(value.calling_AE_qualifier, __utils.BER) : undefined),
            (value.calling_AP_invocation_identifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 8, () => _encode_AP_invocation_identifier, __utils.BER)(value.calling_AP_invocation_identifier, __utils.BER) : undefined),
            (value.calling_AE_invocation_identifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 9, () => _encode_AE_invocation_identifier, __utils.BER)(value.calling_AE_invocation_identifier, __utils.BER) : undefined),
            (value.implementation_information ? __utils._encode_explicit(asn1.ASN1TagClass.context, 29, () => _encode_Implementation_data, __utils.BER)(value.implementation_information, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 30, () => _encode_Association_informationBind, __utils.BER)(value.user_information, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type TheOsiBind = asn1.ASN1Element; // ObjectClassFieldType
export const _decode_TheOsiBind = __utils._decode_explicit<TheOsiBind>(() => __utils._decodeAny);
export const _encode_TheOsiBind = __utils._encode_explicit(asn1.ASN1TagClass.context, 16, () => __utils._encodeAny, __utils.BER);


export class OsiBindResult_mode_selector {
    constructor (
        readonly mode_value: asn1.INTEGER
    ) {}
}
const _root_component_type_list_1_spec_for_OsiBindResult_mode_selector: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("mode-value", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiBindResult_mode_selector: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiBindResult_mode_selector: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiBindResult_mode_selector = function (el: asn1.ASN1Element): OsiBindResult_mode_selector {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let mode_value!: asn1.INTEGER;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "mode-value": (_el: asn1.ASN1Element): void => { mode_value = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OsiBindResult_mode_selector,
        _extension_additions_list_spec_for_OsiBindResult_mode_selector,
        _root_component_type_list_2_spec_for_OsiBindResult_mode_selector,
        undefined,
    );
    return new OsiBindResult_mode_selector( /* SET_CONSTRUCTOR_CALL */
        mode_value
    );
};
export const _encode_OsiBindResult_mode_selector = function (value: OsiBindResult_mode_selector, elGetter: __utils.ASN1Encoder<OsiBindResult_mode_selector>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeInteger, __utils.BER)(value.mode_value, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type OsiBindResult_normal_mode_parameters_protocol_version = asn1.BIT_STRING;
export const OsiBindResult_normal_mode_parameters_protocol_version_version_1: number = 0; /* LONG_NAMED_BIT */
export const version_1: number = OsiBindResult_normal_mode_parameters_protocol_version_version_1; /* SHORT_NAMED_BIT */
export const _decode_OsiBindResult_normal_mode_parameters_protocol_version = __utils._decodeBitString;
export const _encode_OsiBindResult_normal_mode_parameters_protocol_version = __utils._encodeBitString;


export type Result = asn1.INTEGER;
export const Result_acceptance: Result = 0; /* LONG_NAMED_INTEGER_VALUE */
export const acceptance: Result = Result_acceptance; /* SHORT_NAMED_INTEGER_VALUE */
export const Result_user_rejection: Result = 1; /* LONG_NAMED_INTEGER_VALUE */
export const user_rejection: Result = Result_user_rejection; /* SHORT_NAMED_INTEGER_VALUE */
export const Result_provider_rejection: Result = 2; /* LONG_NAMED_INTEGER_VALUE */
export const provider_rejection: Result = Result_provider_rejection; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Result = __utils._decodeInteger;
export const _encode_Result = __utils._encodeInteger;


export class OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item {
    constructor (
        readonly result: Result,
        readonly transfer_syntax_name: Transfer_syntax_name
    ) {}
}
const _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("result", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("transfer-syntax-name", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item = function (el: asn1.ASN1Element): OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("OsiBindResult-normal-mode-parameters-presentation-context-definition-result-list-Item contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "result";
    sequence[1].name = "transfer-syntax-name";
    let result!: Result;
    let transfer_syntax_name!: Transfer_syntax_name;
    result = __utils._decode_explicit<Result>(() => _decode_Result)(sequence[0]);
    transfer_syntax_name = __utils._decode_explicit<Transfer_syntax_name>(() => _decode_Transfer_syntax_name)(sequence[1]);
    // TODO: Validate values.
    return new OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
        result,
        transfer_syntax_name,

    );
};
export const _encode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item = function (value: OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item, elGetter: __utils.ASN1Encoder<OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Result, __utils.BER)(value.result, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Transfer_syntax_name, __utils.BER)(value.transfer_syntax_name, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values =
    { single_ASN1_type: asn1.ASN1Element };
export const _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._decode_inextensible_choice<OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values>({
    "CONTEXT 0": [ "single_ASN1_type", __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny) ]
});
export const _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._encode_choice<OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values>({
    "single_ASN1_type": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeAny, __utils.BER),
}, __utils.BER);


export class OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item {
    constructor (
        readonly transfer_syntax_name: Transfer_syntax_name | undefined,
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly presentation_data_values: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {}
}
const _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("transfer-syntax-name", true, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("presentation-context-identifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("presentation-data-values", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item = function (el: asn1.ASN1Element): OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let transfer_syntax_name: asn1.OPTIONAL<Transfer_syntax_name>;
    let presentation_context_identifier!: Presentation_context_identifier;
    let presentation_data_values!: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "transfer-syntax-name": (_el: asn1.ASN1Element): void => { transfer_syntax_name = _decode_Transfer_syntax_name(_el); },
        "presentation-context-identifier": (_el: asn1.ASN1Element): void => { presentation_context_identifier = _decode_Presentation_context_identifier(_el); },
        "presentation-data-values": (_el: asn1.ASN1Element): void => { presentation_data_values = _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
        _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
        _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
        undefined,
    );
    return new OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item( /* SEQUENCE_CONSTRUCTOR_CALL */
        transfer_syntax_name,
        presentation_context_identifier,
        presentation_data_values
    );
};
export const _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item = function (value: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item, elGetter: __utils.ASN1Encoder<OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.transfer_syntax_name ? _encode_Transfer_syntax_name(value.transfer_syntax_name, __utils.BER) : undefined),
            _encode_Presentation_context_identifier(value.presentation_context_identifier, __utils.BER),
            _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(value.presentation_data_values, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type OsiBindResult_normal_mode_parameters_user_data =
    { fully_encoded_data: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item[] };
export const _decode_OsiBindResult_normal_mode_parameters_user_data = __utils._decode_inextensible_choice<OsiBindResult_normal_mode_parameters_user_data>({
    "APPLICATION 1": [ "fully_encoded_data", __utils._decode_explicit<OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item[]>(() => __utils._decodeSequenceOf<OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item>(() => _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item)) ]
});
export const _encode_OsiBindResult_normal_mode_parameters_user_data = __utils._encode_choice<OsiBindResult_normal_mode_parameters_user_data>({
    "fully_encoded_data": __utils._encode_explicit(asn1.ASN1TagClass.application, 1, () => __utils._encodeSequenceOf<OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item>(() => _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item, __utils.BER), __utils.BER),
}, __utils.BER);


export class OsiBindResult_normal_mode_parameters {
    constructor (
        readonly protocol_version: OsiBindResult_normal_mode_parameters_protocol_version | undefined,
        readonly responding_presentation_selector: Presentation_selector | undefined,
        readonly presentation_context_definition_result_list: OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item[],
        readonly user_data: OsiBindResult_normal_mode_parameters_user_data
    ) {}
}
const _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("protocol-version", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("responding-presentation-selector", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("presentation-context-definition-result-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("user-data", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiBindResult_normal_mode_parameters = function (el: asn1.ASN1Element): OsiBindResult_normal_mode_parameters {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let protocol_version: asn1.OPTIONAL<OsiBindResult_normal_mode_parameters_protocol_version> = /* FIXME: protocol-version COULD_NOT_COMPILE_DEFAULT_VALUE */;
    let responding_presentation_selector: asn1.OPTIONAL<Presentation_selector>;
    let presentation_context_definition_result_list!: OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item[];
    let user_data!: OsiBindResult_normal_mode_parameters_user_data;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "protocol-version": (_el: asn1.ASN1Element): void => { protocol_version = __utils._decode_explicit<OsiBindResult_normal_mode_parameters_protocol_version>(() => _decode_OsiBindResult_normal_mode_parameters_protocol_version)(_el); },
        "responding-presentation-selector": (_el: asn1.ASN1Element): void => { responding_presentation_selector = __utils._decode_explicit<Presentation_selector>(() => _decode_Presentation_selector)(_el); },
        "presentation-context-definition-result-list": (_el: asn1.ASN1Element): void => { presentation_context_definition_result_list = __utils._decode_explicit<OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item[]>(() => __utils._decodeSequenceOf<OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item>(() => _decode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item))(_el); },
        "user-data": (_el: asn1.ASN1Element): void => { user_data = _decode_OsiBindResult_normal_mode_parameters_user_data(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters,
        _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters,
        _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters,
        undefined,
    );
    return new OsiBindResult_normal_mode_parameters( /* SEQUENCE_CONSTRUCTOR_CALL */
        protocol_version,
        responding_presentation_selector,
        presentation_context_definition_result_list,
        user_data
    );
};
export const _encode_OsiBindResult_normal_mode_parameters = function (value: OsiBindResult_normal_mode_parameters, elGetter: __utils.ASN1Encoder<OsiBindResult_normal_mode_parameters>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.protocol_version /* FIXME: COULD_NOT_COMPILE_DEFAULT_VALUE */? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_OsiBindResult_normal_mode_parameters_protocol_version, __utils.BER)(value.protocol_version, __utils.BER) : undefined),
            (value.responding_presentation_selector ? __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_Presentation_selector, __utils.BER)(value.responding_presentation_selector, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 5, () => __utils._encodeSequenceOf<OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item>(() => _encode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item, __utils.BER), __utils.BER)(value.presentation_context_definition_result_list, __utils.BER),
            _encode_OsiBindResult_normal_mode_parameters_user_data(value.user_data, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class OsiBindResult {
    constructor (
        readonly mode_selector: OsiBindResult_mode_selector,
        readonly normal_mode_parameters: OsiBindResult_normal_mode_parameters
    ) {}
}
const _root_component_type_list_1_spec_for_OsiBindResult: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("mode-selector", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("normal-mode-parameters", false, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiBindResult: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiBindResult: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiBindResult = function (el: asn1.ASN1Element): OsiBindResult {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let mode_selector!: OsiBindResult_mode_selector;
    let normal_mode_parameters!: OsiBindResult_normal_mode_parameters;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "mode-selector": (_el: asn1.ASN1Element): void => { mode_selector = __utils._decode_explicit<OsiBindResult_mode_selector>(() => _decode_OsiBindResult_mode_selector)(_el); },
        "normal-mode-parameters": (_el: asn1.ASN1Element): void => { normal_mode_parameters = __utils._decode_explicit<OsiBindResult_normal_mode_parameters>(() => _decode_OsiBindResult_normal_mode_parameters)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OsiBindResult,
        _extension_additions_list_spec_for_OsiBindResult,
        _root_component_type_list_2_spec_for_OsiBindResult,
        undefined,
    );
    return new OsiBindResult( /* SET_CONSTRUCTOR_CALL */
        mode_selector,
        normal_mode_parameters
    );
};
export const _encode_OsiBindResult = function (value: OsiBindResult, elGetter: __utils.ASN1Encoder<OsiBindResult>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_OsiBindResult_mode_selector, __utils.BER)(value.mode_selector, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_OsiBindResult_normal_mode_parameters, __utils.BER)(value.normal_mode_parameters, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AARE_apdu_protocol_version = asn1.BIT_STRING;
export const AARE_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */
export const version1: number = AARE_apdu_protocol_version_version1; /* SHORT_NAMED_BIT */
export const _decode_AARE_apdu_protocol_version = __utils._decodeBitString;
export const _encode_AARE_apdu_protocol_version = __utils._encodeBitString;


export type Associate_result = asn1.INTEGER;
export const Associate_result_accepted: Associate_result = 0; /* LONG_NAMED_INTEGER_VALUE */
export const accepted: Associate_result = Associate_result_accepted; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_result_rejected_permanent: Associate_result = 1; /* LONG_NAMED_INTEGER_VALUE */
export const rejected_permanent: Associate_result = Associate_result_rejected_permanent; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_result_rejected_transient: Associate_result = 2; /* LONG_NAMED_INTEGER_VALUE */
export const rejected_transient: Associate_result = Associate_result_rejected_transient; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Associate_result = __utils._decodeInteger;
export const _encode_Associate_result = __utils._encodeInteger;


export type Associate_source_diagnostic_acse_service_user = asn1.INTEGER;
export const Associate_source_diagnostic_acse_service_user_null_: Associate_source_diagnostic_acse_service_user = 0; /* LONG_NAMED_INTEGER_VALUE */
export const null_: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_null_; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_no_reason_given: Associate_source_diagnostic_acse_service_user = 1; /* LONG_NAMED_INTEGER_VALUE */
export const no_reason_given: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_no_reason_given; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_application_context_name_not_supported: Associate_source_diagnostic_acse_service_user = 2; /* LONG_NAMED_INTEGER_VALUE */
export const application_context_name_not_supported: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_application_context_name_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized: Associate_source_diagnostic_acse_service_user = 3; /* LONG_NAMED_INTEGER_VALUE */
export const calling_AP_title_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 4; /* LONG_NAMED_INTEGER_VALUE */
export const calling_AP_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized: Associate_source_diagnostic_acse_service_user = 5; /* LONG_NAMED_INTEGER_VALUE */
export const calling_AE_qualifier_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 6; /* LONG_NAMED_INTEGER_VALUE */
export const calling_AE_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized: Associate_source_diagnostic_acse_service_user = 7; /* LONG_NAMED_INTEGER_VALUE */
export const called_AP_title_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 8; /* LONG_NAMED_INTEGER_VALUE */
export const called_AP_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized: Associate_source_diagnostic_acse_service_user = 9; /* LONG_NAMED_INTEGER_VALUE */
export const called_AE_qualifier_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 10; /* LONG_NAMED_INTEGER_VALUE */
export const called_AE_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Associate_source_diagnostic_acse_service_user = __utils._decodeInteger;
export const _encode_Associate_source_diagnostic_acse_service_user = __utils._encodeInteger;


export type Associate_source_diagnostic_acse_service_provider = asn1.INTEGER;
export const Associate_source_diagnostic_acse_service_provider_null_: Associate_source_diagnostic_acse_service_provider = 0; /* LONG_NAMED_INTEGER_VALUE */
export const null_: Associate_source_diagnostic_acse_service_provider = Associate_source_diagnostic_acse_service_provider_null_; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_provider_no_reason_given: Associate_source_diagnostic_acse_service_provider = 1; /* LONG_NAMED_INTEGER_VALUE */
export const no_reason_given: Associate_source_diagnostic_acse_service_provider = Associate_source_diagnostic_acse_service_provider_no_reason_given; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_provider_no_common_acse_version: Associate_source_diagnostic_acse_service_provider = 2; /* LONG_NAMED_INTEGER_VALUE */
export const no_common_acse_version: Associate_source_diagnostic_acse_service_provider = Associate_source_diagnostic_acse_service_provider_no_common_acse_version; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Associate_source_diagnostic_acse_service_provider = __utils._decodeInteger;
export const _encode_Associate_source_diagnostic_acse_service_provider = __utils._encodeInteger;


export type Associate_source_diagnostic =
    { acse_service_user: Associate_source_diagnostic_acse_service_user }
    | { acse_service_provider: Associate_source_diagnostic_acse_service_provider };
export const _decode_Associate_source_diagnostic = __utils._decode_inextensible_choice<Associate_source_diagnostic>({
    "CONTEXT 1": [ "acse_service_user", __utils._decode_explicit<Associate_source_diagnostic_acse_service_user>(() => _decode_Associate_source_diagnostic_acse_service_user) ],
    "CONTEXT 2": [ "acse_service_provider", __utils._decode_explicit<Associate_source_diagnostic_acse_service_provider>(() => _decode_Associate_source_diagnostic_acse_service_provider) ]
});
export const _encode_Associate_source_diagnostic = __utils._encode_choice<Associate_source_diagnostic>({
    "acse_service_user": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Associate_source_diagnostic_acse_service_user, __utils.BER),
    "acse_service_provider": __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_Associate_source_diagnostic_acse_service_provider, __utils.BER),
}, __utils.BER);


export type Association_informationBindRes = asn1.EXTERNAL[]; // SequenceOfType
export const _decode_Association_informationBindRes = __utils._decodeSequenceOf<asn1.EXTERNAL>(() => __utils._decodeExternal);
export const _encode_Association_informationBindRes = __utils._encodeSequenceOf<asn1.EXTERNAL>(() => __utils._encodeExternal, __utils.BER);


export class AARE_apdu {
    constructor (
        readonly protocol_version: AARE_apdu_protocol_version | undefined,
        readonly application_context_name: Application_context_name,
        readonly result: Associate_result,
        readonly result_source_diagnostic: Associate_source_diagnostic,
        readonly responding_AP_title: Name | undefined,
        readonly responding_AE_qualifier: RelativeDistinguishedName | undefined,
        readonly responding_AP_invocation_identifier: AP_invocation_identifier | undefined,
        readonly responding_AE_invocation_identifier: AE_invocation_identifier | undefined,
        readonly implementation_information: Implementation_data | undefined,
        readonly user_information: Association_informationBindRes
    ) {}
}
const _root_component_type_list_1_spec_for_AARE_apdu: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("protocol-version", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("application-context-name", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("result", false, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("result-source-diagnostic", false, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("responding-AP-title", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("responding-AE-qualifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("responding-AP-invocation-identifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined),
    new __utils.ComponentSpec("responding-AE-invocation-identifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined),
    new __utils.ComponentSpec("implementation-information", true, __utils.hasTag(asn1.ASN1TagClass.context, 29), undefined, undefined),
    new __utils.ComponentSpec("user-information", false, __utils.hasTag(asn1.ASN1TagClass.context, 30), undefined, undefined)
];
const _root_component_type_list_2_spec_for_AARE_apdu: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_AARE_apdu: __utils.ComponentSpec[] = [
    
];
export const _decode_AARE_apdu = __utils._decode_explicit<AARE_apdu>(() => function (el: asn1.ASN1Element): AARE_apdu {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let protocol_version: asn1.OPTIONAL<AARE_apdu_protocol_version> = /* FIXME: protocol-version COULD_NOT_COMPILE_DEFAULT_VALUE */;
    let application_context_name!: Application_context_name;
    let result!: Associate_result;
    let result_source_diagnostic!: Associate_source_diagnostic;
    let responding_AP_title: asn1.OPTIONAL<Name>;
    let responding_AE_qualifier: asn1.OPTIONAL<RelativeDistinguishedName>;
    let responding_AP_invocation_identifier: asn1.OPTIONAL<AP_invocation_identifier>;
    let responding_AE_invocation_identifier: asn1.OPTIONAL<AE_invocation_identifier>;
    let implementation_information: asn1.OPTIONAL<Implementation_data>;
    let user_information!: Association_informationBindRes;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "protocol-version": (_el: asn1.ASN1Element): void => { protocol_version = __utils._decode_explicit<AARE_apdu_protocol_version>(() => _decode_AARE_apdu_protocol_version)(_el); },
        "application-context-name": (_el: asn1.ASN1Element): void => { application_context_name = __utils._decode_explicit<Application_context_name>(() => _decode_Application_context_name)(_el); },
        "result": (_el: asn1.ASN1Element): void => { result = __utils._decode_explicit<Associate_result>(() => _decode_Associate_result)(_el); },
        "result-source-diagnostic": (_el: asn1.ASN1Element): void => { result_source_diagnostic = __utils._decode_explicit<Associate_source_diagnostic>(() => _decode_Associate_source_diagnostic)(_el); },
        "responding-AP-title": (_el: asn1.ASN1Element): void => { responding_AP_title = __utils._decode_explicit<Name>(() => _decode_Name)(_el); },
        "responding-AE-qualifier": (_el: asn1.ASN1Element): void => { responding_AE_qualifier = __utils._decode_explicit<RelativeDistinguishedName>(() => _decode_RelativeDistinguishedName)(_el); },
        "responding-AP-invocation-identifier": (_el: asn1.ASN1Element): void => { responding_AP_invocation_identifier = __utils._decode_explicit<AP_invocation_identifier>(() => _decode_AP_invocation_identifier)(_el); },
        "responding-AE-invocation-identifier": (_el: asn1.ASN1Element): void => { responding_AE_invocation_identifier = __utils._decode_explicit<AE_invocation_identifier>(() => _decode_AE_invocation_identifier)(_el); },
        "implementation-information": (_el: asn1.ASN1Element): void => { implementation_information = __utils._decode_explicit<Implementation_data>(() => _decode_Implementation_data)(_el); },
        "user-information": (_el: asn1.ASN1Element): void => { user_information = __utils._decode_explicit<Association_informationBindRes>(() => _decode_Association_informationBindRes)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AARE_apdu,
        _extension_additions_list_spec_for_AARE_apdu,
        _root_component_type_list_2_spec_for_AARE_apdu,
        undefined,
    );
    return new AARE_apdu( /* SEQUENCE_CONSTRUCTOR_CALL */
        protocol_version,
        application_context_name,
        result,
        result_source_diagnostic,
        responding_AP_title,
        responding_AE_qualifier,
        responding_AP_invocation_identifier,
        responding_AE_invocation_identifier,
        implementation_information,
        user_information
    );
});
export const _encode_AARE_apdu = __utils._encode_explicit(asn1.ASN1TagClass.application, 1, () => function (value: AARE_apdu, elGetter: __utils.ASN1Encoder<AARE_apdu>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.protocol_version /* FIXME: COULD_NOT_COMPILE_DEFAULT_VALUE */? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_AARE_apdu_protocol_version, __utils.BER)(value.protocol_version, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Application_context_name, __utils.BER)(value.application_context_name, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_Associate_result, __utils.BER)(value.result, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_Associate_source_diagnostic, __utils.BER)(value.result_source_diagnostic, __utils.BER),
            (value.responding_AP_title ? __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => _encode_Name, __utils.BER)(value.responding_AP_title, __utils.BER) : undefined),
            (value.responding_AE_qualifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 5, () => _encode_RelativeDistinguishedName, __utils.BER)(value.responding_AE_qualifier, __utils.BER) : undefined),
            (value.responding_AP_invocation_identifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 6, () => _encode_AP_invocation_identifier, __utils.BER)(value.responding_AP_invocation_identifier, __utils.BER) : undefined),
            (value.responding_AE_invocation_identifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 7, () => _encode_AE_invocation_identifier, __utils.BER)(value.responding_AE_invocation_identifier, __utils.BER) : undefined),
            (value.implementation_information ? __utils._encode_explicit(asn1.ASN1TagClass.context, 29, () => _encode_Implementation_data, __utils.BER)(value.implementation_information, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 30, () => _encode_Association_informationBindRes, __utils.BER)(value.user_information, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type TheOsiBindRes = asn1.ASN1Element; // ObjectClassFieldType
export const _decode_TheOsiBindRes = __utils._decode_explicit<TheOsiBindRes>(() => __utils._decodeAny);
export const _encode_TheOsiBindRes = __utils._encode_explicit(asn1.ASN1TagClass.context, 17, () => __utils._encodeAny, __utils.BER);


export type OsiBindError_normal_mode_parameters_protocol_version = asn1.BIT_STRING;
export const OsiBindError_normal_mode_parameters_protocol_version_version_1: number = 0; /* LONG_NAMED_BIT */
export const version_1: number = OsiBindError_normal_mode_parameters_protocol_version_version_1; /* SHORT_NAMED_BIT */
export const _decode_OsiBindError_normal_mode_parameters_protocol_version = __utils._decodeBitString;
export const _encode_OsiBindError_normal_mode_parameters_protocol_version = __utils._encodeBitString;


export type Result_list_Item_provider_reason = asn1.INTEGER;
export const Result_list_Item_provider_reason_reason_not_specified: Result_list_Item_provider_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
export const reason_not_specified: Result_list_Item_provider_reason = Result_list_Item_provider_reason_reason_not_specified; /* SHORT_NAMED_INTEGER_VALUE */
export const Result_list_Item_provider_reason_abstract_syntax_not_supported: Result_list_Item_provider_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
export const abstract_syntax_not_supported: Result_list_Item_provider_reason = Result_list_Item_provider_reason_abstract_syntax_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
export const Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported: Result_list_Item_provider_reason = 2; /* LONG_NAMED_INTEGER_VALUE */
export const proposed_transfer_syntaxes_not_supported: Result_list_Item_provider_reason = Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Result_list_Item_provider_reason = __utils._decodeInteger;
export const _encode_Result_list_Item_provider_reason = __utils._encodeInteger;


export class Result_list_Item {
    constructor (
        readonly result: Result,
        readonly transfer_syntax_name: Transfer_syntax_name | undefined,
        readonly provider_reason: Result_list_Item_provider_reason | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_Result_list_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("result", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("transfer-syntax-name", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("provider-reason", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
const _root_component_type_list_2_spec_for_Result_list_Item: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_Result_list_Item: __utils.ComponentSpec[] = [
    
];
export const _decode_Result_list_Item = function (el: asn1.ASN1Element): Result_list_Item {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let result!: Result;
    let transfer_syntax_name: asn1.OPTIONAL<Transfer_syntax_name>;
    let provider_reason: asn1.OPTIONAL<Result_list_Item_provider_reason>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "result": (_el: asn1.ASN1Element): void => { result = __utils._decode_explicit<Result>(() => _decode_Result)(_el); },
        "transfer-syntax-name": (_el: asn1.ASN1Element): void => { transfer_syntax_name = __utils._decode_explicit<Transfer_syntax_name>(() => _decode_Transfer_syntax_name)(_el); },
        "provider-reason": (_el: asn1.ASN1Element): void => { provider_reason = __utils._decode_explicit<Result_list_Item_provider_reason>(() => _decode_Result_list_Item_provider_reason)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Result_list_Item,
        _extension_additions_list_spec_for_Result_list_Item,
        _root_component_type_list_2_spec_for_Result_list_Item,
        undefined,
    );
    return new Result_list_Item( /* SEQUENCE_CONSTRUCTOR_CALL */
        result,
        transfer_syntax_name,
        provider_reason
    );
};
export const _encode_Result_list_Item = function (value: Result_list_Item, elGetter: __utils.ASN1Encoder<Result_list_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Result, __utils.BER)(value.result, __utils.BER),
            (value.transfer_syntax_name ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Transfer_syntax_name, __utils.BER)(value.transfer_syntax_name, __utils.BER) : undefined),
            (value.provider_reason ? __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_Result_list_Item_provider_reason, __utils.BER)(value.provider_reason, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Result_list = Result_list_Item[]; // SequenceOfType
export const _decode_Result_list = __utils._decodeSequenceOf<Result_list_Item>(() => _decode_Result_list_Item);
export const _encode_Result_list = __utils._encodeSequenceOf<Result_list_Item>(() => _encode_Result_list_Item, __utils.BER);


export type Provider_reason = asn1.INTEGER;
export const Provider_reason_reason_not_specified: Provider_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
export const reason_not_specified: Provider_reason = Provider_reason_reason_not_specified; /* SHORT_NAMED_INTEGER_VALUE */
export const Provider_reason_temporary_congestion: Provider_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
export const temporary_congestion: Provider_reason = Provider_reason_temporary_congestion; /* SHORT_NAMED_INTEGER_VALUE */
export const Provider_reason_local_limit_exceeded: Provider_reason = 2; /* LONG_NAMED_INTEGER_VALUE */
export const local_limit_exceeded: Provider_reason = Provider_reason_local_limit_exceeded; /* SHORT_NAMED_INTEGER_VALUE */
export const Provider_reason_called_presentation_address_unknown: Provider_reason = 3; /* LONG_NAMED_INTEGER_VALUE */
export const called_presentation_address_unknown: Provider_reason = Provider_reason_called_presentation_address_unknown; /* SHORT_NAMED_INTEGER_VALUE */
export const Provider_reason_protocol_version_not_supported: Provider_reason = 4; /* LONG_NAMED_INTEGER_VALUE */
export const protocol_version_not_supported: Provider_reason = Provider_reason_protocol_version_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
export const Provider_reason_default_context_not_supported: Provider_reason = 5; /* LONG_NAMED_INTEGER_VALUE */
export const default_context_not_supported: Provider_reason = Provider_reason_default_context_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
export const Provider_reason_user_data_not_readable: Provider_reason = 6; /* LONG_NAMED_INTEGER_VALUE */
export const user_data_not_readable: Provider_reason = Provider_reason_user_data_not_readable; /* SHORT_NAMED_INTEGER_VALUE */
export const Provider_reason_no_PSAP_available: Provider_reason = 7; /* LONG_NAMED_INTEGER_VALUE */
export const no_PSAP_available: Provider_reason = Provider_reason_no_PSAP_available; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Provider_reason = __utils._decodeInteger;
export const _encode_Provider_reason = __utils._encodeInteger;


export type OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values =
    { single_ASN1_type: asn1.ASN1Element };
export const _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._decode_inextensible_choice<OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values>({
    "CONTEXT 0": [ "single_ASN1_type", __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny) ]
});
export const _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._encode_choice<OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values>({
    "single_ASN1_type": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeAny, __utils.BER),
}, __utils.BER);


export class OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item {
    constructor (
        readonly transfer_syntax_name: Transfer_syntax_name | undefined,
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly presentation_data_values: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {}
}
const _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("transfer-syntax-name", true, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("presentation-context-identifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("presentation-data-values", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item = function (el: asn1.ASN1Element): OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let transfer_syntax_name: asn1.OPTIONAL<Transfer_syntax_name>;
    let presentation_context_identifier!: Presentation_context_identifier;
    let presentation_data_values!: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "transfer-syntax-name": (_el: asn1.ASN1Element): void => { transfer_syntax_name = _decode_Transfer_syntax_name(_el); },
        "presentation-context-identifier": (_el: asn1.ASN1Element): void => { presentation_context_identifier = _decode_Presentation_context_identifier(_el); },
        "presentation-data-values": (_el: asn1.ASN1Element): void => { presentation_data_values = _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
        _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
        _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
        undefined,
    );
    return new OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item( /* SEQUENCE_CONSTRUCTOR_CALL */
        transfer_syntax_name,
        presentation_context_identifier,
        presentation_data_values
    );
};
export const _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item = function (value: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item, elGetter: __utils.ASN1Encoder<OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.transfer_syntax_name ? _encode_Transfer_syntax_name(value.transfer_syntax_name, __utils.BER) : undefined),
            _encode_Presentation_context_identifier(value.presentation_context_identifier, __utils.BER),
            _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(value.presentation_data_values, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type OsiBindError_normal_mode_parameters_user_data =
    { fully_encoded_data: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item[] };
export const _decode_OsiBindError_normal_mode_parameters_user_data = __utils._decode_inextensible_choice<OsiBindError_normal_mode_parameters_user_data>({
    "APPLICATION 1": [ "fully_encoded_data", __utils._decode_explicit<OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item[]>(() => __utils._decodeSequenceOf<OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item>(() => _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item)) ]
});
export const _encode_OsiBindError_normal_mode_parameters_user_data = __utils._encode_choice<OsiBindError_normal_mode_parameters_user_data>({
    "fully_encoded_data": __utils._encode_explicit(asn1.ASN1TagClass.application, 1, () => __utils._encodeSequenceOf<OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item>(() => _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item, __utils.BER), __utils.BER),
}, __utils.BER);


export class OsiBindError_normal_mode_parameters {
    constructor (
        readonly protocol_version: OsiBindError_normal_mode_parameters_protocol_version | undefined,
        readonly responding_presentation_selector: Presentation_selector | undefined,
        readonly presentation_context_definition_result_list: Result_list | undefined,
        readonly provider_reason: Provider_reason | undefined,
        readonly user_data: OsiBindError_normal_mode_parameters_user_data | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("protocol-version", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("responding-presentation-selector", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("presentation-context-definition-result-list", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("provider-reason", true, __utils.hasTag(asn1.ASN1TagClass.context, 10), undefined, undefined),
    new __utils.ComponentSpec("user-data", true, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiBindError_normal_mode_parameters = function (el: asn1.ASN1Element): OsiBindError_normal_mode_parameters {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let protocol_version: asn1.OPTIONAL<OsiBindError_normal_mode_parameters_protocol_version> = /* FIXME: protocol-version COULD_NOT_COMPILE_DEFAULT_VALUE */;
    let responding_presentation_selector: asn1.OPTIONAL<Presentation_selector>;
    let presentation_context_definition_result_list: asn1.OPTIONAL<Result_list>;
    let provider_reason: asn1.OPTIONAL<Provider_reason>;
    let user_data: asn1.OPTIONAL<OsiBindError_normal_mode_parameters_user_data>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "protocol-version": (_el: asn1.ASN1Element): void => { protocol_version = __utils._decode_explicit<OsiBindError_normal_mode_parameters_protocol_version>(() => _decode_OsiBindError_normal_mode_parameters_protocol_version)(_el); },
        "responding-presentation-selector": (_el: asn1.ASN1Element): void => { responding_presentation_selector = __utils._decode_explicit<Presentation_selector>(() => _decode_Presentation_selector)(_el); },
        "presentation-context-definition-result-list": (_el: asn1.ASN1Element): void => { presentation_context_definition_result_list = __utils._decode_explicit<Result_list>(() => _decode_Result_list)(_el); },
        "provider-reason": (_el: asn1.ASN1Element): void => { provider_reason = __utils._decode_explicit<Provider_reason>(() => _decode_Provider_reason)(_el); },
        "user-data": (_el: asn1.ASN1Element): void => { user_data = _decode_OsiBindError_normal_mode_parameters_user_data(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters,
        _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters,
        _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters,
        undefined,
    );
    return new OsiBindError_normal_mode_parameters( /* SEQUENCE_CONSTRUCTOR_CALL */
        protocol_version,
        responding_presentation_selector,
        presentation_context_definition_result_list,
        provider_reason,
        user_data
    );
};
export const _encode_OsiBindError_normal_mode_parameters = function (value: OsiBindError_normal_mode_parameters, elGetter: __utils.ASN1Encoder<OsiBindError_normal_mode_parameters>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.protocol_version /* FIXME: COULD_NOT_COMPILE_DEFAULT_VALUE */? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_OsiBindError_normal_mode_parameters_protocol_version, __utils.BER)(value.protocol_version, __utils.BER) : undefined),
            (value.responding_presentation_selector ? __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_Presentation_selector, __utils.BER)(value.responding_presentation_selector, __utils.BER) : undefined),
            (value.presentation_context_definition_result_list ? __utils._encode_explicit(asn1.ASN1TagClass.context, 5, () => _encode_Result_list, __utils.BER)(value.presentation_context_definition_result_list, __utils.BER) : undefined),
            (value.provider_reason ? __utils._encode_explicit(asn1.ASN1TagClass.context, 10, () => _encode_Provider_reason, __utils.BER)(value.provider_reason, __utils.BER) : undefined),
            (value.user_data ? _encode_OsiBindError_normal_mode_parameters_user_data(value.user_data, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type OsiBindError =
    { normal_mode_parameters: OsiBindError_normal_mode_parameters };
export const _decode_OsiBindError = __utils._decode_inextensible_choice<OsiBindError>({
    "UNIVERSAL 16": [ "normal_mode_parameters", _decode_OsiBindError_normal_mode_parameters ]
});
export const _encode_OsiBindError = __utils._encode_choice<OsiBindError>({
    "normal_mode_parameters": _encode_OsiBindError_normal_mode_parameters,
}, __utils.BER);


export type AAREerr_apdu_protocol_version = asn1.BIT_STRING;
export const AAREerr_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */
export const version1: number = AAREerr_apdu_protocol_version_version1; /* SHORT_NAMED_BIT */
export const _decode_AAREerr_apdu_protocol_version = __utils._decodeBitString;
export const _encode_AAREerr_apdu_protocol_version = __utils._encodeBitString;


export type Association_informationBindErr = asn1.EXTERNAL[]; // SequenceOfType
export const _decode_Association_informationBindErr = __utils._decodeSequenceOf<asn1.EXTERNAL>(() => __utils._decodeExternal);
export const _encode_Association_informationBindErr = __utils._encodeSequenceOf<asn1.EXTERNAL>(() => __utils._encodeExternal, __utils.BER);


export class AAREerr_apdu {
    constructor (
        readonly protocol_version: AAREerr_apdu_protocol_version | undefined,
        readonly application_context_name: Application_context_name,
        readonly result: Associate_result,
        readonly result_source_diagnostic: Associate_source_diagnostic,
        readonly responding_AP_title: Name | undefined,
        readonly responding_AE_qualifier: RelativeDistinguishedName | undefined,
        readonly responding_AP_invocation_identifier: AP_invocation_identifier | undefined,
        readonly responding_AE_invocation_identifier: AE_invocation_identifier | undefined,
        readonly implementation_information: Implementation_data | undefined,
        readonly user_information: Association_informationBindErr | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_AAREerr_apdu: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("protocol-version", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("application-context-name", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("result", false, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("result-source-diagnostic", false, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("responding-AP-title", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("responding-AE-qualifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("responding-AP-invocation-identifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined),
    new __utils.ComponentSpec("responding-AE-invocation-identifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined),
    new __utils.ComponentSpec("implementation-information", true, __utils.hasTag(asn1.ASN1TagClass.context, 29), undefined, undefined),
    new __utils.ComponentSpec("user-information", true, __utils.hasTag(asn1.ASN1TagClass.context, 30), undefined, undefined)
];
const _root_component_type_list_2_spec_for_AAREerr_apdu: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_AAREerr_apdu: __utils.ComponentSpec[] = [
    
];
export const _decode_AAREerr_apdu = __utils._decode_explicit<AAREerr_apdu>(() => function (el: asn1.ASN1Element): AAREerr_apdu {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let protocol_version: asn1.OPTIONAL<AAREerr_apdu_protocol_version> = /* FIXME: protocol-version COULD_NOT_COMPILE_DEFAULT_VALUE */;
    let application_context_name!: Application_context_name;
    let result!: Associate_result;
    let result_source_diagnostic!: Associate_source_diagnostic;
    let responding_AP_title: asn1.OPTIONAL<Name>;
    let responding_AE_qualifier: asn1.OPTIONAL<RelativeDistinguishedName>;
    let responding_AP_invocation_identifier: asn1.OPTIONAL<AP_invocation_identifier>;
    let responding_AE_invocation_identifier: asn1.OPTIONAL<AE_invocation_identifier>;
    let implementation_information: asn1.OPTIONAL<Implementation_data>;
    let user_information: asn1.OPTIONAL<Association_informationBindErr>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "protocol-version": (_el: asn1.ASN1Element): void => { protocol_version = __utils._decode_explicit<AAREerr_apdu_protocol_version>(() => _decode_AAREerr_apdu_protocol_version)(_el); },
        "application-context-name": (_el: asn1.ASN1Element): void => { application_context_name = __utils._decode_explicit<Application_context_name>(() => _decode_Application_context_name)(_el); },
        "result": (_el: asn1.ASN1Element): void => { result = __utils._decode_explicit<Associate_result>(() => _decode_Associate_result)(_el); },
        "result-source-diagnostic": (_el: asn1.ASN1Element): void => { result_source_diagnostic = __utils._decode_explicit<Associate_source_diagnostic>(() => _decode_Associate_source_diagnostic)(_el); },
        "responding-AP-title": (_el: asn1.ASN1Element): void => { responding_AP_title = __utils._decode_explicit<Name>(() => _decode_Name)(_el); },
        "responding-AE-qualifier": (_el: asn1.ASN1Element): void => { responding_AE_qualifier = __utils._decode_explicit<RelativeDistinguishedName>(() => _decode_RelativeDistinguishedName)(_el); },
        "responding-AP-invocation-identifier": (_el: asn1.ASN1Element): void => { responding_AP_invocation_identifier = __utils._decode_explicit<AP_invocation_identifier>(() => _decode_AP_invocation_identifier)(_el); },
        "responding-AE-invocation-identifier": (_el: asn1.ASN1Element): void => { responding_AE_invocation_identifier = __utils._decode_explicit<AE_invocation_identifier>(() => _decode_AE_invocation_identifier)(_el); },
        "implementation-information": (_el: asn1.ASN1Element): void => { implementation_information = __utils._decode_explicit<Implementation_data>(() => _decode_Implementation_data)(_el); },
        "user-information": (_el: asn1.ASN1Element): void => { user_information = __utils._decode_explicit<Association_informationBindErr>(() => _decode_Association_informationBindErr)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AAREerr_apdu,
        _extension_additions_list_spec_for_AAREerr_apdu,
        _root_component_type_list_2_spec_for_AAREerr_apdu,
        undefined,
    );
    return new AAREerr_apdu( /* SEQUENCE_CONSTRUCTOR_CALL */
        protocol_version,
        application_context_name,
        result,
        result_source_diagnostic,
        responding_AP_title,
        responding_AE_qualifier,
        responding_AP_invocation_identifier,
        responding_AE_invocation_identifier,
        implementation_information,
        user_information
    );
});
export const _encode_AAREerr_apdu = __utils._encode_explicit(asn1.ASN1TagClass.application, 1, () => function (value: AAREerr_apdu, elGetter: __utils.ASN1Encoder<AAREerr_apdu>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.protocol_version /* FIXME: COULD_NOT_COMPILE_DEFAULT_VALUE */? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_AAREerr_apdu_protocol_version, __utils.BER)(value.protocol_version, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Application_context_name, __utils.BER)(value.application_context_name, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_Associate_result, __utils.BER)(value.result, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_Associate_source_diagnostic, __utils.BER)(value.result_source_diagnostic, __utils.BER),
            (value.responding_AP_title ? __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => _encode_Name, __utils.BER)(value.responding_AP_title, __utils.BER) : undefined),
            (value.responding_AE_qualifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 5, () => _encode_RelativeDistinguishedName, __utils.BER)(value.responding_AE_qualifier, __utils.BER) : undefined),
            (value.responding_AP_invocation_identifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 6, () => _encode_AP_invocation_identifier, __utils.BER)(value.responding_AP_invocation_identifier, __utils.BER) : undefined),
            (value.responding_AE_invocation_identifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 7, () => _encode_AE_invocation_identifier, __utils.BER)(value.responding_AE_invocation_identifier, __utils.BER) : undefined),
            (value.implementation_information ? __utils._encode_explicit(asn1.ASN1TagClass.context, 29, () => _encode_Implementation_data, __utils.BER)(value.implementation_information, __utils.BER) : undefined),
            (value.user_information ? __utils._encode_explicit(asn1.ASN1TagClass.context, 30, () => _encode_Association_informationBindErr, __utils.BER)(value.user_information, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type TheOsiBindErr = asn1.ASN1Element; // ObjectClassFieldType
export const _decode_TheOsiBindErr = __utils._decode_explicit<TheOsiBindErr>(() => __utils._decodeAny);
export const _encode_TheOsiBindErr = __utils._encode_explicit(asn1.ASN1TagClass.context, 18, () => __utils._encodeAny, __utils.BER);


export type OsiUnbind_fully_encoded_data_Item_presentation_data_values =
    { single_ASN1_type: asn1.ASN1Element };
export const _decode_OsiUnbind_fully_encoded_data_Item_presentation_data_values = __utils._decode_inextensible_choice<OsiUnbind_fully_encoded_data_Item_presentation_data_values>({
    "CONTEXT 0": [ "single_ASN1_type", __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny) ]
});
export const _encode_OsiUnbind_fully_encoded_data_Item_presentation_data_values = __utils._encode_choice<OsiUnbind_fully_encoded_data_Item_presentation_data_values>({
    "single_ASN1_type": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeAny, __utils.BER),
}, __utils.BER);


export class OsiUnbind_fully_encoded_data_Item {
    constructor (
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly presentation_data_values: OsiUnbind_fully_encoded_data_Item_presentation_data_values
    ) {}
}
const _root_component_type_list_1_spec_for_OsiUnbind_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("presentation-context-identifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("presentation-data-values", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiUnbind_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiUnbind_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiUnbind_fully_encoded_data_Item = function (el: asn1.ASN1Element): OsiUnbind_fully_encoded_data_Item {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("OsiUnbind-fully-encoded-data-Item contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "presentation-context-identifier";
    sequence[1].name = "presentation-data-values";
    let presentation_context_identifier!: Presentation_context_identifier;
    let presentation_data_values!: OsiUnbind_fully_encoded_data_Item_presentation_data_values;
    presentation_context_identifier = _decode_Presentation_context_identifier(sequence[0]);
    presentation_data_values = _decode_OsiUnbind_fully_encoded_data_Item_presentation_data_values(sequence[1]);
    // TODO: Validate values.
    return new OsiUnbind_fully_encoded_data_Item(
        presentation_context_identifier,
        presentation_data_values,

    );
};
export const _encode_OsiUnbind_fully_encoded_data_Item = function (value: OsiUnbind_fully_encoded_data_Item, elGetter: __utils.ASN1Encoder<OsiUnbind_fully_encoded_data_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Presentation_context_identifier(value.presentation_context_identifier, __utils.BER),
            _encode_OsiUnbind_fully_encoded_data_Item_presentation_data_values(value.presentation_data_values, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type OsiUnbind =
    { fully_encoded_data: OsiUnbind_fully_encoded_data_Item[] };
export const _decode_OsiUnbind = __utils._decode_inextensible_choice<OsiUnbind>({
    "APPLICATION 1": [ "fully_encoded_data", __utils._decode_explicit<OsiUnbind_fully_encoded_data_Item[]>(() => __utils._decodeSequenceOf<OsiUnbind_fully_encoded_data_Item>(() => _decode_OsiUnbind_fully_encoded_data_Item)) ]
});
export const _encode_OsiUnbind = __utils._encode_choice<OsiUnbind>({
    "fully_encoded_data": __utils._encode_explicit(asn1.ASN1TagClass.application, 1, () => __utils._encodeSequenceOf<OsiUnbind_fully_encoded_data_Item>(() => _encode_OsiUnbind_fully_encoded_data_Item, __utils.BER), __utils.BER),
}, __utils.BER);


export type Release_request_reason = asn1.INTEGER;
export const Release_request_reason_normal: Release_request_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
export const normal: Release_request_reason = Release_request_reason_normal; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Release_request_reason = __utils._decodeInteger;
export const _encode_Release_request_reason = __utils._encodeInteger;


export class TheOsiUnbind {
    constructor (
        readonly reason: Release_request_reason | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_TheOsiUnbind: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("reason", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
const _root_component_type_list_2_spec_for_TheOsiUnbind: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_TheOsiUnbind: __utils.ComponentSpec[] = [
    
];
export const _decode_TheOsiUnbind = __utils._decode_explicit<TheOsiUnbind>(() => function (el: asn1.ASN1Element): TheOsiUnbind {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let reason: asn1.OPTIONAL<Release_request_reason>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "reason": (_el: asn1.ASN1Element): void => { reason = __utils._decode_explicit<Release_request_reason>(() => _decode_Release_request_reason)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TheOsiUnbind,
        _extension_additions_list_spec_for_TheOsiUnbind,
        _root_component_type_list_2_spec_for_TheOsiUnbind,
        undefined,
    );
    return new TheOsiUnbind( /* SEQUENCE_CONSTRUCTOR_CALL */
        reason
    );
});
export const _encode_TheOsiUnbind = __utils._encode_explicit(asn1.ASN1TagClass.application, 2, () => function (value: TheOsiUnbind, elGetter: __utils.ASN1Encoder<TheOsiUnbind>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.reason ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Release_request_reason, __utils.BER)(value.reason, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type OsiUnbindResult_fully_encoded_data_Item_presentation_data_values =
    { single_ASN1_type: asn1.ASN1Element };
export const _decode_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values = __utils._decode_inextensible_choice<OsiUnbindResult_fully_encoded_data_Item_presentation_data_values>({
    "CONTEXT 0": [ "single_ASN1_type", __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny) ]
});
export const _encode_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values = __utils._encode_choice<OsiUnbindResult_fully_encoded_data_Item_presentation_data_values>({
    "single_ASN1_type": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeAny, __utils.BER),
}, __utils.BER);


export class OsiUnbindResult_fully_encoded_data_Item {
    constructor (
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly presentation_data_values: OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
    ) {}
}
const _root_component_type_list_1_spec_for_OsiUnbindResult_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("presentation-context-identifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("presentation-data-values", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiUnbindResult_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiUnbindResult_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiUnbindResult_fully_encoded_data_Item = function (el: asn1.ASN1Element): OsiUnbindResult_fully_encoded_data_Item {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("OsiUnbindResult-fully-encoded-data-Item contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "presentation-context-identifier";
    sequence[1].name = "presentation-data-values";
    let presentation_context_identifier!: Presentation_context_identifier;
    let presentation_data_values!: OsiUnbindResult_fully_encoded_data_Item_presentation_data_values;
    presentation_context_identifier = _decode_Presentation_context_identifier(sequence[0]);
    presentation_data_values = _decode_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values(sequence[1]);
    // TODO: Validate values.
    return new OsiUnbindResult_fully_encoded_data_Item(
        presentation_context_identifier,
        presentation_data_values,

    );
};
export const _encode_OsiUnbindResult_fully_encoded_data_Item = function (value: OsiUnbindResult_fully_encoded_data_Item, elGetter: __utils.ASN1Encoder<OsiUnbindResult_fully_encoded_data_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Presentation_context_identifier(value.presentation_context_identifier, __utils.BER),
            _encode_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values(value.presentation_data_values, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type OsiUnbindResult =
    { fully_encoded_data: OsiUnbindResult_fully_encoded_data_Item[] };
export const _decode_OsiUnbindResult = __utils._decode_inextensible_choice<OsiUnbindResult>({
    "APPLICATION 1": [ "fully_encoded_data", __utils._decode_explicit<OsiUnbindResult_fully_encoded_data_Item[]>(() => __utils._decodeSequenceOf<OsiUnbindResult_fully_encoded_data_Item>(() => _decode_OsiUnbindResult_fully_encoded_data_Item)) ]
});
export const _encode_OsiUnbindResult = __utils._encode_choice<OsiUnbindResult>({
    "fully_encoded_data": __utils._encode_explicit(asn1.ASN1TagClass.application, 1, () => __utils._encodeSequenceOf<OsiUnbindResult_fully_encoded_data_Item>(() => _encode_OsiUnbindResult_fully_encoded_data_Item, __utils.BER), __utils.BER),
}, __utils.BER);


export type Release_response_reason = asn1.INTEGER;
export const Release_response_reason_normal: Release_response_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
export const normal: Release_response_reason = Release_response_reason_normal; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Release_response_reason = __utils._decodeInteger;
export const _encode_Release_response_reason = __utils._encodeInteger;


export class TheOsiUnbindRes {
    constructor (
        readonly reason: Release_response_reason | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_TheOsiUnbindRes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("reason", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
const _root_component_type_list_2_spec_for_TheOsiUnbindRes: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_TheOsiUnbindRes: __utils.ComponentSpec[] = [
    
];
export const _decode_TheOsiUnbindRes = __utils._decode_explicit<TheOsiUnbindRes>(() => function (el: asn1.ASN1Element): TheOsiUnbindRes {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let reason: asn1.OPTIONAL<Release_response_reason>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "reason": (_el: asn1.ASN1Element): void => { reason = __utils._decode_explicit<Release_response_reason>(() => _decode_Release_response_reason)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TheOsiUnbindRes,
        _extension_additions_list_spec_for_TheOsiUnbindRes,
        _root_component_type_list_2_spec_for_TheOsiUnbindRes,
        undefined,
    );
    return new TheOsiUnbindRes( /* SEQUENCE_CONSTRUCTOR_CALL */
        reason
    );
});
export const _encode_TheOsiUnbindRes = __utils._encode_explicit(asn1.ASN1TagClass.application, 3, () => function (value: TheOsiUnbindRes, elGetter: __utils.ASN1Encoder<TheOsiUnbindRes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.reason ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Release_response_reason, __utils.BER)(value.reason, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type OsiOperation_fully_encoded_data_Item_presentation_data_values =
    { single_ASN1_type: asn1.ASN1Element };
export const _decode_OsiOperation_fully_encoded_data_Item_presentation_data_values = __utils._decode_inextensible_choice<OsiOperation_fully_encoded_data_Item_presentation_data_values>({
    "CONTEXT 0": [ "single_ASN1_type", __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny) ]
});
export const _encode_OsiOperation_fully_encoded_data_Item_presentation_data_values = __utils._encode_choice<OsiOperation_fully_encoded_data_Item_presentation_data_values>({
    "single_ASN1_type": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeAny, __utils.BER),
}, __utils.BER);


export class OsiOperation_fully_encoded_data_Item {
    constructor (
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly presentation_data_values: OsiOperation_fully_encoded_data_Item_presentation_data_values
    ) {}
}
const _root_component_type_list_1_spec_for_OsiOperation_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("presentation-context-identifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("presentation-data-values", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiOperation_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiOperation_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiOperation_fully_encoded_data_Item = function (el: asn1.ASN1Element): OsiOperation_fully_encoded_data_Item {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("OsiOperation-fully-encoded-data-Item contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "presentation-context-identifier";
    sequence[1].name = "presentation-data-values";
    let presentation_context_identifier!: Presentation_context_identifier;
    let presentation_data_values!: OsiOperation_fully_encoded_data_Item_presentation_data_values;
    presentation_context_identifier = _decode_Presentation_context_identifier(sequence[0]);
    presentation_data_values = _decode_OsiOperation_fully_encoded_data_Item_presentation_data_values(sequence[1]);
    // TODO: Validate values.
    return new OsiOperation_fully_encoded_data_Item(
        presentation_context_identifier,
        presentation_data_values,

    );
};
export const _encode_OsiOperation_fully_encoded_data_Item = function (value: OsiOperation_fully_encoded_data_Item, elGetter: __utils.ASN1Encoder<OsiOperation_fully_encoded_data_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Presentation_context_identifier(value.presentation_context_identifier, __utils.BER),
            _encode_OsiOperation_fully_encoded_data_Item_presentation_data_values(value.presentation_data_values, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type OsiOperation =
    { fully_encoded_data: OsiOperation_fully_encoded_data_Item[] };
export const _decode_OsiOperation = __utils._decode_inextensible_choice<OsiOperation>({
    "APPLICATION 1": [ "fully_encoded_data", __utils._decode_explicit<OsiOperation_fully_encoded_data_Item[]>(() => __utils._decodeSequenceOf<OsiOperation_fully_encoded_data_Item>(() => _decode_OsiOperation_fully_encoded_data_Item)) ]
});
export const _encode_OsiOperation = __utils._encode_choice<OsiOperation>({
    "fully_encoded_data": __utils._encode_explicit(asn1.ASN1TagClass.application, 1, () => __utils._encodeSequenceOf<OsiOperation_fully_encoded_data_Item>(() => _encode_OsiOperation_fully_encoded_data_Item, __utils.BER), __utils.BER),
}, __utils.BER);


export class OsiReq {
    constructor (
        readonly invokeId: InvokeId,
        readonly opcode: Code,
        readonly argument: asn1.ASN1Element
    ) {}
}
const _root_component_type_list_1_spec_for_OsiReq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("invokeId", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("opcode", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("argument", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiReq: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiReq: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiReq = __utils._decode_explicit<OsiReq>(() => function (el: asn1.ASN1Element): OsiReq {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("OsiReq contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "invokeId";
    sequence[1].name = "opcode";
    sequence[2].name = "argument";
    let invokeId!: InvokeId;
    let opcode!: Code;
    let argument!: asn1.ASN1Element;
    invokeId = _decode_InvokeId(sequence[0]);
    opcode = _decode_Code(sequence[1]);
    argument = __utils._decodeAny(sequence[2]);
    // TODO: Validate values.
    return new OsiReq(
        invokeId,
        opcode,
        argument,

    );
});
export const _encode_OsiReq = __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => function (value: OsiReq, elGetter: __utils.ASN1Encoder<OsiReq>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_InvokeId(value.invokeId, __utils.BER),
            _encode_Code(value.opcode, __utils.BER),
            __utils._encodeAny(value.argument, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export class OsiRes_result {
    constructor (
        readonly opcode: Code,
        readonly result: asn1.ASN1Element
    ) {}
}
const _root_component_type_list_1_spec_for_OsiRes_result: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("opcode", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("result", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiRes_result: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiRes_result: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiRes_result = function (el: asn1.ASN1Element): OsiRes_result {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("OsiRes-result contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "opcode";
    sequence[1].name = "result";
    let opcode!: Code;
    let result!: asn1.ASN1Element;
    opcode = _decode_Code(sequence[0]);
    result = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new OsiRes_result(
        opcode,
        result,

    );
};
export const _encode_OsiRes_result = function (value: OsiRes_result, elGetter: __utils.ASN1Encoder<OsiRes_result>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Code(value.opcode, __utils.BER),
            __utils._encodeAny(value.result, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class OsiRes {
    constructor (
        readonly invokeId: InvokeId,
        readonly result: OsiRes_result
    ) {}
}
const _root_component_type_list_1_spec_for_OsiRes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("invokeId", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("result", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiRes: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiRes: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiRes = __utils._decode_explicit<OsiRes>(() => function (el: asn1.ASN1Element): OsiRes {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("OsiRes contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "invokeId";
    sequence[1].name = "result";
    let invokeId!: InvokeId;
    let result!: OsiRes_result;
    invokeId = _decode_InvokeId(sequence[0]);
    result = _decode_OsiRes_result(sequence[1]);
    // TODO: Validate values.
    return new OsiRes(
        invokeId,
        result,

    );
});
export const _encode_OsiRes = __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => function (value: OsiRes, elGetter: __utils.ASN1Encoder<OsiRes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_InvokeId(value.invokeId, __utils.BER),
            _encode_OsiRes_result(value.result, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export class OsiErr {
    constructor (
        readonly invokeID: InvokeId,
        readonly errcode: asn1.ASN1Element,
        readonly error: asn1.ASN1Element
    ) {}
}
const _root_component_type_list_1_spec_for_OsiErr: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("invokeID", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("errcode", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("error", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiErr: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiErr: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiErr = __utils._decode_explicit<OsiErr>(() => function (el: asn1.ASN1Element): OsiErr {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("OsiErr contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "invokeID";
    sequence[1].name = "errcode";
    sequence[2].name = "error";
    let invokeID!: InvokeId;
    let errcode!: asn1.ASN1Element;
    let error!: asn1.ASN1Element;
    invokeID = _decode_InvokeId(sequence[0]);
    errcode = __utils._decodeAny(sequence[1]);
    error = __utils._decodeAny(sequence[2]);
    // TODO: Validate values.
    return new OsiErr(
        invokeID,
        errcode,
        error,

    );
});
export const _encode_OsiErr = __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => function (value: OsiErr, elGetter: __utils.ASN1Encoder<OsiErr>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_InvokeId(value.invokeID, __utils.BER),
            __utils._encodeAny(value.errcode, __utils.BER),
            __utils._encodeAny(value.error, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type GeneralProblem = asn1.INTEGER;
export const GeneralProblem_unrecognizedPDU: GeneralProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
export const unrecognizedPDU: GeneralProblem = GeneralProblem_unrecognizedPDU; /* SHORT_NAMED_INTEGER_VALUE */
export const GeneralProblem_mistypedPDU: GeneralProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
export const mistypedPDU: GeneralProblem = GeneralProblem_mistypedPDU; /* SHORT_NAMED_INTEGER_VALUE */
export const GeneralProblem_badlyStructuredPDU: GeneralProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
export const badlyStructuredPDU: GeneralProblem = GeneralProblem_badlyStructuredPDU; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GeneralProblem = __utils._decodeInteger;
export const _encode_GeneralProblem = __utils._encodeInteger;


export type InvokeProblem = asn1.INTEGER;
export const InvokeProblem_duplicateInvocation: InvokeProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
export const duplicateInvocation: InvokeProblem = InvokeProblem_duplicateInvocation; /* SHORT_NAMED_INTEGER_VALUE */
export const InvokeProblem_unrecognizedOperation: InvokeProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
export const unrecognizedOperation: InvokeProblem = InvokeProblem_unrecognizedOperation; /* SHORT_NAMED_INTEGER_VALUE */
export const InvokeProblem_mistypedArgument: InvokeProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
export const mistypedArgument: InvokeProblem = InvokeProblem_mistypedArgument; /* SHORT_NAMED_INTEGER_VALUE */
export const InvokeProblem_resourceLimitation: InvokeProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
export const resourceLimitation: InvokeProblem = InvokeProblem_resourceLimitation; /* SHORT_NAMED_INTEGER_VALUE */
export const InvokeProblem_releaseInProgress: InvokeProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
export const releaseInProgress: InvokeProblem = InvokeProblem_releaseInProgress; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_InvokeProblem = __utils._decodeInteger;
export const _encode_InvokeProblem = __utils._encodeInteger;


export type ReturnResultProblem = asn1.INTEGER;
export const ReturnResultProblem_unrecognizedInvocation: ReturnResultProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
export const unrecognizedInvocation: ReturnResultProblem = ReturnResultProblem_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */
export const ReturnResultProblem_resultResponseUnexpected: ReturnResultProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
export const resultResponseUnexpected: ReturnResultProblem = ReturnResultProblem_resultResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */
export const ReturnResultProblem_mistypedResult: ReturnResultProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
export const mistypedResult: ReturnResultProblem = ReturnResultProblem_mistypedResult; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ReturnResultProblem = __utils._decodeInteger;
export const _encode_ReturnResultProblem = __utils._encodeInteger;


export type ReturnErrorProblem = asn1.INTEGER;
export const ReturnErrorProblem_unrecognizedInvocation: ReturnErrorProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
export const unrecognizedInvocation: ReturnErrorProblem = ReturnErrorProblem_unrecognizedInvocation; /* SHORT_NAMED_INTEGER_VALUE */
export const ReturnErrorProblem_errorResponseUnexpected: ReturnErrorProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
export const errorResponseUnexpected: ReturnErrorProblem = ReturnErrorProblem_errorResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */
export const ReturnErrorProblem_unrecognizedError: ReturnErrorProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
export const unrecognizedError: ReturnErrorProblem = ReturnErrorProblem_unrecognizedError; /* SHORT_NAMED_INTEGER_VALUE */
export const ReturnErrorProblem_unexpectedError: ReturnErrorProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
export const unexpectedError: ReturnErrorProblem = ReturnErrorProblem_unexpectedError; /* SHORT_NAMED_INTEGER_VALUE */
export const ReturnErrorProblem_mistypedParameter: ReturnErrorProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
export const mistypedParameter: ReturnErrorProblem = ReturnErrorProblem_mistypedParameter; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ReturnErrorProblem = __utils._decodeInteger;
export const _encode_ReturnErrorProblem = __utils._encodeInteger;


export type OsiRej_problem =
    { general: GeneralProblem }
    | { invoke: InvokeProblem }
    | { returnResult: ReturnResultProblem }
    | { returnError: ReturnErrorProblem }
    | asn1.ASN1Element;
export const _decode_OsiRej_problem = __utils._decode_extensible_choice<OsiRej_problem>({
    "CONTEXT 0": [ "general", __utils._decode_explicit<GeneralProblem>(() => _decode_GeneralProblem) ],
    "CONTEXT 1": [ "invoke", __utils._decode_explicit<InvokeProblem>(() => _decode_InvokeProblem) ],
    "CONTEXT 2": [ "returnResult", __utils._decode_explicit<ReturnResultProblem>(() => _decode_ReturnResultProblem) ],
    "CONTEXT 3": [ "returnError", __utils._decode_explicit<ReturnErrorProblem>(() => _decode_ReturnErrorProblem) ]
});
export const _encode_OsiRej_problem = __utils._encode_choice<OsiRej_problem>({
    "general": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_GeneralProblem, __utils.BER),
    "invoke": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_InvokeProblem, __utils.BER),
    "returnResult": __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_ReturnResultProblem, __utils.BER),
    "returnError": __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_ReturnErrorProblem, __utils.BER),
}, __utils.BER);


export class OsiRej {
    constructor (
        readonly invokeId: InvokeId,
        readonly problem: OsiRej_problem,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_OsiRej: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("invokeId", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("problem", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_OsiRej: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OsiRej: __utils.ComponentSpec[] = [
    
];
export const _decode_OsiRej = __utils._decode_explicit<OsiRej>(() => function (el: asn1.ASN1Element): OsiRej {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("OsiRej contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "invokeId";
    sequence[1].name = "problem";
    let invokeId!: InvokeId;
    let problem!: OsiRej_problem;
    invokeId = _decode_InvokeId(sequence[0]);
    problem = _decode_OsiRej_problem(sequence[1]);
    // TODO: Validate values.
    return new OsiRej(
        invokeId,
        problem,
        sequence.slice(2),
    );
});
export const _encode_OsiRej = __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => function (value: OsiRej, elGetter: __utils.ASN1Encoder<OsiRej>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_InvokeId(value.invokeId, __utils.BER),
            _encode_OsiRej_problem(value.problem, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type OsiDirectoryOperation =
    { request: OsiReq }
    | { result: OsiRes }
    | { error: OsiErr }
    | { reject: OsiRej };
export const _decode_OsiDirectoryOperation = __utils._decode_inextensible_choice<OsiDirectoryOperation>({
    "CONTEXT 1": [ "request", _decode_OsiReq ],
    "CONTEXT 2": [ "result", _decode_OsiRes ],
    "CONTEXT 3": [ "error", _decode_OsiErr ],
    "CONTEXT 4": [ "reject", _decode_OsiRej ]
});
export const _encode_OsiDirectoryOperation = __utils._encode_choice<OsiDirectoryOperation>({
    "request": _encode_OsiReq,
    "result": _encode_OsiRes,
    "error": _encode_OsiErr,
    "reject": _encode_OsiRej,
}, __utils.BER);


export class Presentation_context_identifier_list_Item {
    constructor (
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly transfer_syntax_name: Transfer_syntax_name
    ) {}
}
const _root_component_type_list_1_spec_for_Presentation_context_identifier_list_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("presentation-context-identifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("transfer-syntax-name", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined)
];
const _root_component_type_list_2_spec_for_Presentation_context_identifier_list_Item: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_Presentation_context_identifier_list_Item: __utils.ComponentSpec[] = [
    
];
export const _decode_Presentation_context_identifier_list_Item = function (el: asn1.ASN1Element): Presentation_context_identifier_list_Item {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("Presentation-context-identifier-list-Item contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "presentation-context-identifier";
    sequence[1].name = "transfer-syntax-name";
    let presentation_context_identifier!: Presentation_context_identifier;
    let transfer_syntax_name!: Transfer_syntax_name;
    presentation_context_identifier = _decode_Presentation_context_identifier(sequence[0]);
    transfer_syntax_name = _decode_Transfer_syntax_name(sequence[1]);
    // TODO: Validate values.
    return new Presentation_context_identifier_list_Item(
        presentation_context_identifier,
        transfer_syntax_name,

    );
};
export const _encode_Presentation_context_identifier_list_Item = function (value: Presentation_context_identifier_list_Item, elGetter: __utils.ASN1Encoder<Presentation_context_identifier_list_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Presentation_context_identifier(value.presentation_context_identifier, __utils.BER),
            _encode_Transfer_syntax_name(value.transfer_syntax_name, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Presentation_context_identifier_list = Presentation_context_identifier_list_Item[]; // SequenceOfType
export const _decode_Presentation_context_identifier_list = __utils._decodeSequenceOf<Presentation_context_identifier_list_Item>(() => _decode_Presentation_context_identifier_list_Item);
export const _encode_Presentation_context_identifier_list = __utils._encodeSequenceOf<Presentation_context_identifier_list_Item>(() => _encode_Presentation_context_identifier_list_Item, __utils.BER);


export type ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values =
    { single_ASN1_type: asn1.ASN1Element };
export const _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._decode_inextensible_choice<ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values>({
    "CONTEXT 0": [ "single_ASN1_type", __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny) ]
});
export const _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._encode_choice<ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values>({
    "single_ASN1_type": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeAny, __utils.BER),
}, __utils.BER);


export class ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item {
    constructor (
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly presentation_data_values: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {}
}
const _root_component_type_list_1_spec_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("presentation-context-identifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("presentation-data-values", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    
];
export const _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item = function (el: asn1.ASN1Element): ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("ARU-PPDU-normal-mode-parameters-user-data-fully-encoded-data-Item contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "presentation-context-identifier";
    sequence[1].name = "presentation-data-values";
    let presentation_context_identifier!: Presentation_context_identifier;
    let presentation_data_values!: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values;
    presentation_context_identifier = _decode_Presentation_context_identifier(sequence[0]);
    presentation_data_values = _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(sequence[1]);
    // TODO: Validate values.
    return new ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item(
        presentation_context_identifier,
        presentation_data_values,

    );
};
export const _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item = function (value: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item, elGetter: __utils.ASN1Encoder<ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Presentation_context_identifier(value.presentation_context_identifier, __utils.BER),
            _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(value.presentation_data_values, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type ARU_PPDU_normal_mode_parameters_user_data =
    { fully_encoded_data: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item[] };
export const _decode_ARU_PPDU_normal_mode_parameters_user_data = __utils._decode_inextensible_choice<ARU_PPDU_normal_mode_parameters_user_data>({
    "APPLICATION 1": [ "fully_encoded_data", __utils._decode_explicit<ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item[]>(() => __utils._decodeSequenceOf<ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item>(() => _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item)) ]
});
export const _encode_ARU_PPDU_normal_mode_parameters_user_data = __utils._encode_choice<ARU_PPDU_normal_mode_parameters_user_data>({
    "fully_encoded_data": __utils._encode_explicit(asn1.ASN1TagClass.application, 1, () => __utils._encodeSequenceOf<ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item>(() => _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item, __utils.BER), __utils.BER),
}, __utils.BER);


export class ARU_PPDU_normal_mode_parameters {
    constructor (
        readonly presentation_context_identifier_list: Presentation_context_identifier_list,
        readonly user_data: ARU_PPDU_normal_mode_parameters_user_data
    ) {}
}
const _root_component_type_list_1_spec_for_ARU_PPDU_normal_mode_parameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("presentation-context-identifier-list", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("user-data", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_ARU_PPDU_normal_mode_parameters: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_ARU_PPDU_normal_mode_parameters: __utils.ComponentSpec[] = [
    
];
export const _decode_ARU_PPDU_normal_mode_parameters = function (el: asn1.ASN1Element): ARU_PPDU_normal_mode_parameters {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("ARU-PPDU-normal-mode-parameters contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "presentation-context-identifier-list";
    sequence[1].name = "user-data";
    let presentation_context_identifier_list!: Presentation_context_identifier_list;
    let user_data!: ARU_PPDU_normal_mode_parameters_user_data;
    presentation_context_identifier_list = __utils._decode_explicit<Presentation_context_identifier_list>(() => _decode_Presentation_context_identifier_list)(sequence[0]);
    user_data = _decode_ARU_PPDU_normal_mode_parameters_user_data(sequence[1]);
    // TODO: Validate values.
    return new ARU_PPDU_normal_mode_parameters(
        presentation_context_identifier_list,
        user_data,

    );
};
export const _encode_ARU_PPDU_normal_mode_parameters = function (value: ARU_PPDU_normal_mode_parameters, elGetter: __utils.ASN1Encoder<ARU_PPDU_normal_mode_parameters>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Presentation_context_identifier_list, __utils.BER)(value.presentation_context_identifier_list, __utils.BER),
            _encode_ARU_PPDU_normal_mode_parameters_user_data(value.user_data, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type ARU_PPDU =
    { normal_mode_parameters: ARU_PPDU_normal_mode_parameters };
export const _decode_ARU_PPDU = __utils._decode_inextensible_choice<ARU_PPDU>({
    "CONTEXT 0": [ "normal_mode_parameters", __utils._decode_explicit<ARU_PPDU_normal_mode_parameters>(() => _decode_ARU_PPDU_normal_mode_parameters) ]
});
export const _encode_ARU_PPDU = __utils._encode_choice<ARU_PPDU>({
    "normal_mode_parameters": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_ARU_PPDU_normal_mode_parameters, __utils.BER),
}, __utils.BER);


export type Abort_reason = asn1.INTEGER;
export const Abort_reason_reason_not_specified: Abort_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
export const reason_not_specified: Abort_reason = Abort_reason_reason_not_specified; /* SHORT_NAMED_INTEGER_VALUE */
export const Abort_reason_unrecognized_ppdu: Abort_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
export const unrecognized_ppdu: Abort_reason = Abort_reason_unrecognized_ppdu; /* SHORT_NAMED_INTEGER_VALUE */
export const Abort_reason_unexpected_ppdu: Abort_reason = 2; /* LONG_NAMED_INTEGER_VALUE */
export const unexpected_ppdu: Abort_reason = Abort_reason_unexpected_ppdu; /* SHORT_NAMED_INTEGER_VALUE */
export const Abort_reason_unexpected_session_service_primitive: Abort_reason = 3; /* LONG_NAMED_INTEGER_VALUE */
export const unexpected_session_service_primitive: Abort_reason = Abort_reason_unexpected_session_service_primitive; /* SHORT_NAMED_INTEGER_VALUE */
export const Abort_reason_unrecognized_ppdu_parameter: Abort_reason = 4; /* LONG_NAMED_INTEGER_VALUE */
export const unrecognized_ppdu_parameter: Abort_reason = Abort_reason_unrecognized_ppdu_parameter; /* SHORT_NAMED_INTEGER_VALUE */
export const Abort_reason_unexpected_ppdu_parameter: Abort_reason = 5; /* LONG_NAMED_INTEGER_VALUE */
export const unexpected_ppdu_parameter: Abort_reason = Abort_reason_unexpected_ppdu_parameter; /* SHORT_NAMED_INTEGER_VALUE */
export const Abort_reason_invalid_ppdu_parameter_value: Abort_reason = 6; /* LONG_NAMED_INTEGER_VALUE */
export const invalid_ppdu_parameter_value: Abort_reason = Abort_reason_invalid_ppdu_parameter_value; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Abort_reason = __utils._decodeInteger;
export const _encode_Abort_reason = __utils._encodeInteger;


export type Event_identifier = asn1.INTEGER;
export const Event_identifier_cp_PPDU: Event_identifier = 0; /* LONG_NAMED_INTEGER_VALUE */
export const cp_PPDU: Event_identifier = Event_identifier_cp_PPDU; /* SHORT_NAMED_INTEGER_VALUE */
export const Event_identifier_cpa_PPDU: Event_identifier = 1; /* LONG_NAMED_INTEGER_VALUE */
export const cpa_PPDU: Event_identifier = Event_identifier_cpa_PPDU; /* SHORT_NAMED_INTEGER_VALUE */
export const Event_identifier_cpr_PPDU: Event_identifier = 2; /* LONG_NAMED_INTEGER_VALUE */
export const cpr_PPDU: Event_identifier = Event_identifier_cpr_PPDU; /* SHORT_NAMED_INTEGER_VALUE */
export const Event_identifier_aru_PPDU: Event_identifier = 3; /* LONG_NAMED_INTEGER_VALUE */
export const aru_PPDU: Event_identifier = Event_identifier_aru_PPDU; /* SHORT_NAMED_INTEGER_VALUE */
export const Event_identifier_arp_PPDU: Event_identifier = 4; /* LONG_NAMED_INTEGER_VALUE */
export const arp_PPDU: Event_identifier = Event_identifier_arp_PPDU; /* SHORT_NAMED_INTEGER_VALUE */
export const Event_identifier_td_PPDU: Event_identifier = 7; /* LONG_NAMED_INTEGER_VALUE */
export const td_PPDU: Event_identifier = Event_identifier_td_PPDU; /* SHORT_NAMED_INTEGER_VALUE */
export const Event_identifier_s_release_indication: Event_identifier = 14; /* LONG_NAMED_INTEGER_VALUE */
export const s_release_indication: Event_identifier = Event_identifier_s_release_indication; /* SHORT_NAMED_INTEGER_VALUE */
export const Event_identifier_s_release_confirm: Event_identifier = 15; /* LONG_NAMED_INTEGER_VALUE */
export const s_release_confirm: Event_identifier = Event_identifier_s_release_confirm; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Event_identifier = __utils._decodeInteger;
export const _encode_Event_identifier = __utils._encodeInteger;


export class ARP_PPDU {
    constructor (
        readonly provider_reason: Abort_reason | undefined,
        readonly event_identifier: Event_identifier | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_ARP_PPDU: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("provider-reason", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("event-identifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_ARP_PPDU: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_ARP_PPDU: __utils.ComponentSpec[] = [
    
];
export const _decode_ARP_PPDU = function (el: asn1.ASN1Element): ARP_PPDU {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let provider_reason: asn1.OPTIONAL<Abort_reason>;
    let event_identifier: asn1.OPTIONAL<Event_identifier>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "provider-reason": (_el: asn1.ASN1Element): void => { provider_reason = __utils._decode_explicit<Abort_reason>(() => _decode_Abort_reason)(_el); },
        "event-identifier": (_el: asn1.ASN1Element): void => { event_identifier = __utils._decode_explicit<Event_identifier>(() => _decode_Event_identifier)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ARP_PPDU,
        _extension_additions_list_spec_for_ARP_PPDU,
        _root_component_type_list_2_spec_for_ARP_PPDU,
        undefined,
    );
    return new ARP_PPDU( /* SEQUENCE_CONSTRUCTOR_CALL */
        provider_reason,
        event_identifier
    );
};
export const _encode_ARP_PPDU = function (value: ARP_PPDU, elGetter: __utils.ASN1Encoder<ARP_PPDU>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.provider_reason ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Abort_reason, __utils.BER)(value.provider_reason, __utils.BER) : undefined),
            (value.event_identifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Event_identifier, __utils.BER)(value.event_identifier, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type PresentationAbort =
    { aru_ppdu: ARU_PPDU }
    | { arp_ppdu: ARP_PPDU };
export const _decode_PresentationAbort = __utils._decode_inextensible_choice<PresentationAbort>({
    /* NO_TAG_OR_TAG_CLASS */: [ "aru_ppdu", _decode_ARU_PPDU ],
    "UNIVERSAL 16": [ "arp_ppdu", _decode_ARP_PPDU ]
});
export const _encode_PresentationAbort = __utils._encode_choice<PresentationAbort>({
    "aru_ppdu": _encode_ARU_PPDU,
    "arp_ppdu": _encode_ARP_PPDU,
}, __utils.BER);


export type ABRT_source = asn1.INTEGER;
export const ABRT_source_acse_service_user: ABRT_source = 0; /* LONG_NAMED_INTEGER_VALUE */
export const acse_service_user: ABRT_source = ABRT_source_acse_service_user; /* SHORT_NAMED_INTEGER_VALUE */
export const ABRT_source_acse_service_provider: ABRT_source = 1; /* LONG_NAMED_INTEGER_VALUE */
export const acse_service_provider: ABRT_source = ABRT_source_acse_service_provider; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ABRT_source = __utils._decodeInteger;
export const _encode_ABRT_source = __utils._encodeInteger;


export class ABRT_apdu {
    constructor (
        readonly abort_source: ABRT_source
    ) {}
}
const _root_component_type_list_1_spec_for_ABRT_apdu: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("abort-source", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
const _root_component_type_list_2_spec_for_ABRT_apdu: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_ABRT_apdu: __utils.ComponentSpec[] = [
    
];
export const _decode_ABRT_apdu = __utils._decode_explicit<ABRT_apdu>(() => function (el: asn1.ASN1Element): ABRT_apdu {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new asn1.ASN1ConstructionError("ABRT-apdu contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "abort-source";
    let abort_source!: ABRT_source;
    abort_source = __utils._decode_explicit<ABRT_source>(() => _decode_ABRT_source)(sequence[0]);
    // TODO: Validate values.
    return new ABRT_apdu(
        abort_source,

    );
});
export const _encode_ABRT_apdu = __utils._encode_explicit(asn1.ASN1TagClass.application, 4, () => function (value: ABRT_apdu, elGetter: __utils.ASN1Encoder<ABRT_apdu>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_ABRT_source, __utils.BER)(value.abort_source, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


