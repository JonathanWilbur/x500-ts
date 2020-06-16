/*
    BEGIN_MODULE OSIProtocolSpecification
    OID: joint-iso-itu-t.ds.module.oSIProtocolSpecification.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    Code,
    InvokeId,
    _decode_Code,
    _decode_InvokeId,
    _encode_Code,
    _encode_InvokeId,
} from "./CommonProtocolSpecification";
import {
    Name,
    RelativeDistinguishedName,
    _decode_Name,
    _decode_RelativeDistinguishedName,
    _encode_Name,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";
import * as __utils from "./__utils";
export {
    InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from "./CommonProtocolSpecification";
export {
    SecurityProblem,
    SecurityProblem_blockedCredentials,
    SecurityProblem_inappropriateAlgorithms,
    SecurityProblem_inappropriateAuthentication,
    SecurityProblem_insufficientAccessRights,
    SecurityProblem_invalidCredentials,
    SecurityProblem_invalidSignature,
    SecurityProblem_noInformation,
    SecurityProblem_passwordExpired,
    SecurityProblem_protectionRequired,
    SecurityProblem_spkmError,
    SecurityProblem_unsupportedAuthenticationMethod,
    ServiceProblem,
    ServiceProblem_administrativeLimitExceeded,
    ServiceProblem_ambiguousKeyAttributes,
    ServiceProblem_busy,
    ServiceProblem_chainingRequired,
    ServiceProblem_ditError,
    ServiceProblem_invalidQueryReference,
    ServiceProblem_invalidReference,
    ServiceProblem_loopDetected,
    ServiceProblem_notSupportedByLDAP,
    ServiceProblem_outOfScope,
    ServiceProblem_requestedServiceNotAvailable,
    ServiceProblem_saslBindInProgress,
    ServiceProblem_timeLimitExceeded,
    ServiceProblem_unableToProceed,
    ServiceProblem_unavailable,
    ServiceProblem_unavailableCriticalExtension,
    ServiceProblem_unsupportedMatchingUse,
    ServiceProblem_unwillingToPerform,
    Versions,
    Versions_v1 as v1 /* IMPORTED_BIT */,
    Versions_v2 as v2 /* IMPORTED_BIT */,
    _decode_SecurityProblem,
    _decode_ServiceProblem,
    _decode_Versions,
    _encode_SecurityProblem,
    _encode_ServiceProblem,
    _encode_Versions,
} from "./DirectoryAbstractService";
export {
    Name,
    RelativeDistinguishedName,
    _decode_Name,
    _decode_RelativeDistinguishedName,
    _encode_Name,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";
export {
    commonProtocolSpecification,
    directoryAbstractService,
    directoryOSIProtocols,
    enhancedSecurity,
    informationFramework,
} from "./UsefulDefinitions";

export type OSI_PDU = asn1.ASN1Element; // ObjectClassFieldType
let _cached_decoder_for_OSI_PDU: __utils.ASN1Decoder<OSI_PDU> | null = null;
let _cached_encoder_for_OSI_PDU: __utils.ASN1Encoder<OSI_PDU> | null = null;
export function _decode_OSI_PDU(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OSI_PDU) {
        _cached_decoder_for_OSI_PDU = __utils._decodeAny;
    }
    return _cached_decoder_for_OSI_PDU(el);
}
export function _encode_OSI_PDU(
    value: OSI_PDU,
    elGetter: __utils.ASN1Encoder<OSI_PDU>
) {
    if (!_cached_encoder_for_OSI_PDU) {
        _cached_encoder_for_OSI_PDU = __utils._encodeAny;
    }
    return _cached_encoder_for_OSI_PDU(value, elGetter);
}

export class OsiBind_mode_selector {
    constructor(readonly mode_value: asn1.INTEGER) {}
}
export const _root_component_type_list_1_spec_for_OsiBind_mode_selector: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "mode-value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiBind_mode_selector: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiBind_mode_selector: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiBind_mode_selector: __utils.ASN1Decoder<
    OsiBind_mode_selector
> | null = null;
let _cached_encoder_for_OsiBind_mode_selector: __utils.ASN1Encoder<
    OsiBind_mode_selector
> | null = null;
export function _decode_OsiBind_mode_selector(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiBind_mode_selector) {
        _cached_decoder_for_OsiBind_mode_selector = function (
            el: asn1.ASN1Element
        ): OsiBind_mode_selector {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let mode_value!: asn1.INTEGER;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "mode-value": (_el: asn1.ASN1Element): void => {
                    mode_value = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBind_mode_selector,
                _extension_additions_list_spec_for_OsiBind_mode_selector,
                _root_component_type_list_2_spec_for_OsiBind_mode_selector,
                undefined
            );
            return new OsiBind_mode_selector(
                /* SET_CONSTRUCTOR_CALL */ mode_value
            );
        };
    }
    return _cached_decoder_for_OsiBind_mode_selector(el);
}
export function _encode_OsiBind_mode_selector(
    value: OsiBind_mode_selector,
    elGetter: __utils.ASN1Encoder<OsiBind_mode_selector>
) {
    if (!_cached_encoder_for_OsiBind_mode_selector) {
        _cached_encoder_for_OsiBind_mode_selector = function (
            value: OsiBind_mode_selector,
            elGetter: __utils.ASN1Encoder<OsiBind_mode_selector>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeInteger,
                            __utils.BER
                        )(value.mode_value, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OsiBind_mode_selector(value, elGetter);
}

export type OsiBind_normal_mode_parameters_protocol_version = asn1.BIT_STRING;
export const OsiBind_normal_mode_parameters_protocol_version_version_1: number = 0; /* LONG_NAMED_BIT */
let _cached_decoder_for_OsiBind_normal_mode_parameters_protocol_version: __utils.ASN1Decoder<
    OsiBind_normal_mode_parameters_protocol_version
> | null = null;
let _cached_encoder_for_OsiBind_normal_mode_parameters_protocol_version: __utils.ASN1Encoder<
    OsiBind_normal_mode_parameters_protocol_version
> | null = null;
export function _decode_OsiBind_normal_mode_parameters_protocol_version(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_OsiBind_normal_mode_parameters_protocol_version) {
        _cached_decoder_for_OsiBind_normal_mode_parameters_protocol_version =
            __utils._decodeBitString;
    }
    return _cached_decoder_for_OsiBind_normal_mode_parameters_protocol_version(
        el
    );
}
export function _encode_OsiBind_normal_mode_parameters_protocol_version(
    value: OsiBind_normal_mode_parameters_protocol_version,
    elGetter: __utils.ASN1Encoder<
        OsiBind_normal_mode_parameters_protocol_version
    >
) {
    if (!_cached_encoder_for_OsiBind_normal_mode_parameters_protocol_version) {
        _cached_encoder_for_OsiBind_normal_mode_parameters_protocol_version =
            __utils._encodeBitString;
    }
    return _cached_encoder_for_OsiBind_normal_mode_parameters_protocol_version(
        value,
        elGetter
    );
}

export type Presentation_selector = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_Presentation_selector: __utils.ASN1Decoder<
    Presentation_selector
> | null = null;
let _cached_encoder_for_Presentation_selector: __utils.ASN1Encoder<
    Presentation_selector
> | null = null;
export function _decode_Presentation_selector(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Presentation_selector) {
        _cached_decoder_for_Presentation_selector = __utils._decodeOctetString;
    }
    return _cached_decoder_for_Presentation_selector(el);
}
export function _encode_Presentation_selector(
    value: Presentation_selector,
    elGetter: __utils.ASN1Encoder<Presentation_selector>
) {
    if (!_cached_encoder_for_Presentation_selector) {
        _cached_encoder_for_Presentation_selector = __utils._encodeOctetString;
    }
    return _cached_encoder_for_Presentation_selector(value, elGetter);
}

export type Presentation_context_identifier = asn1.INTEGER;
let _cached_decoder_for_Presentation_context_identifier: __utils.ASN1Decoder<
    Presentation_context_identifier
> | null = null;
let _cached_encoder_for_Presentation_context_identifier: __utils.ASN1Encoder<
    Presentation_context_identifier
> | null = null;
export function _decode_Presentation_context_identifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Presentation_context_identifier) {
        _cached_decoder_for_Presentation_context_identifier =
            __utils._decodeInteger;
    }
    return _cached_decoder_for_Presentation_context_identifier(el);
}
export function _encode_Presentation_context_identifier(
    value: Presentation_context_identifier,
    elGetter: __utils.ASN1Encoder<Presentation_context_identifier>
) {
    if (!_cached_encoder_for_Presentation_context_identifier) {
        _cached_encoder_for_Presentation_context_identifier =
            __utils._encodeInteger;
    }
    return _cached_encoder_for_Presentation_context_identifier(value, elGetter);
}

export type Abstract_syntax_name = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_Abstract_syntax_name: __utils.ASN1Decoder<
    Abstract_syntax_name
> | null = null;
let _cached_encoder_for_Abstract_syntax_name: __utils.ASN1Encoder<
    Abstract_syntax_name
> | null = null;
export function _decode_Abstract_syntax_name(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Abstract_syntax_name) {
        _cached_decoder_for_Abstract_syntax_name =
            __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_Abstract_syntax_name(el);
}
export function _encode_Abstract_syntax_name(
    value: Abstract_syntax_name,
    elGetter: __utils.ASN1Encoder<Abstract_syntax_name>
) {
    if (!_cached_encoder_for_Abstract_syntax_name) {
        _cached_encoder_for_Abstract_syntax_name =
            __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_Abstract_syntax_name(value, elGetter);
}

export type Transfer_syntax_name = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_Transfer_syntax_name: __utils.ASN1Decoder<
    Transfer_syntax_name
> | null = null;
let _cached_encoder_for_Transfer_syntax_name: __utils.ASN1Encoder<
    Transfer_syntax_name
> | null = null;
export function _decode_Transfer_syntax_name(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Transfer_syntax_name) {
        _cached_decoder_for_Transfer_syntax_name =
            __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_Transfer_syntax_name(el);
}
export function _encode_Transfer_syntax_name(
    value: Transfer_syntax_name,
    elGetter: __utils.ASN1Encoder<Transfer_syntax_name>
) {
    if (!_cached_encoder_for_Transfer_syntax_name) {
        _cached_encoder_for_Transfer_syntax_name =
            __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_Transfer_syntax_name(value, elGetter);
}

export class Context_list_Item {
    constructor(
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly abstract_syntax_name: Abstract_syntax_name,
        readonly transfer_syntax_name_list: Transfer_syntax_name[]
    ) {}
}
export const _root_component_type_list_1_spec_for_Context_list_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "presentation-context-identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "abstract-syntax-name",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "transfer-syntax-name-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Context_list_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Context_list_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Context_list_Item: __utils.ASN1Decoder<
    Context_list_Item
> | null = null;
let _cached_encoder_for_Context_list_Item: __utils.ASN1Encoder<
    Context_list_Item
> | null = null;
export function _decode_Context_list_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Context_list_Item) {
        _cached_decoder_for_Context_list_Item = function (
            el: asn1.ASN1Element
        ): Context_list_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "Context-list-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "presentation-context-identifier";
            sequence[1].name = "abstract-syntax-name";
            sequence[2].name = "transfer-syntax-name-list";
            let presentation_context_identifier!: Presentation_context_identifier;
            let abstract_syntax_name!: Abstract_syntax_name;
            let transfer_syntax_name_list!: Transfer_syntax_name[];
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            abstract_syntax_name = _decode_Abstract_syntax_name(sequence[1]);
            transfer_syntax_name_list = __utils._decodeSequenceOf<
                Transfer_syntax_name
            >(() => _decode_Transfer_syntax_name)(sequence[2]);
            // TODO: Validate values.
            return new Context_list_Item(
                presentation_context_identifier,
                abstract_syntax_name,
                transfer_syntax_name_list
            );
        };
    }
    return _cached_decoder_for_Context_list_Item(el);
}
export function _encode_Context_list_Item(
    value: Context_list_Item,
    elGetter: __utils.ASN1Encoder<Context_list_Item>
) {
    if (!_cached_encoder_for_Context_list_Item) {
        _cached_encoder_for_Context_list_Item = function (
            value: Context_list_Item,
            elGetter: __utils.ASN1Encoder<Context_list_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Abstract_syntax_name(
                            value.abstract_syntax_name,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            Transfer_syntax_name
                        >(() => _encode_Transfer_syntax_name, __utils.BER)(
                            value.transfer_syntax_name_list,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Context_list_Item(value, elGetter);
}

export type Context_list = Context_list_Item[]; // SequenceOfType
let _cached_decoder_for_Context_list: __utils.ASN1Decoder<
    Context_list
> | null = null;
let _cached_encoder_for_Context_list: __utils.ASN1Encoder<
    Context_list
> | null = null;
export function _decode_Context_list(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Context_list) {
        _cached_decoder_for_Context_list = __utils._decodeSequenceOf<
            Context_list_Item
        >(() => _decode_Context_list_Item);
    }
    return _cached_decoder_for_Context_list(el);
}
export function _encode_Context_list(
    value: Context_list,
    elGetter: __utils.ASN1Encoder<Context_list>
) {
    if (!_cached_encoder_for_Context_list) {
        _cached_encoder_for_Context_list = __utils._encodeSequenceOf<
            Context_list_Item
        >(() => _encode_Context_list_Item, __utils.BER);
    }
    return _cached_encoder_for_Context_list(value, elGetter);
}

export type OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: asn1.ASN1Element;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: __utils.ASN1Decoder<
    OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
let _cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: __utils.ASN1Encoder<
    OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
export function _decode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._decode_inextensible_choice<
            OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >({
            "CONTEXT 0": [
                "single_ASN1_type",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        el
    );
}
export function _encode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    value: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
    elGetter: __utils.ASN1Encoder<
        OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    >
) {
    if (
        !_cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._encode_choice<
            OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >(
            {
                single_ASN1_type: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}

export class OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item {
    constructor(
        readonly transfer_syntax_name: Transfer_syntax_name | undefined,
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly presentation_data_values: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {}
}
export const _root_component_type_list_1_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "transfer-syntax-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "presentation-context-identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "presentation-data-values",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ASN1Decoder<
    OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
let _cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ASN1Encoder<
    OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
export function _decode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            el: asn1.ASN1Element
        ): OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let transfer_syntax_name: asn1.OPTIONAL<Transfer_syntax_name>;
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "transfer-syntax-name": (_el: asn1.ASN1Element): void => {
                    transfer_syntax_name = _decode_Transfer_syntax_name(_el);
                },
                "presentation-context-identifier": (
                    _el: asn1.ASN1Element
                ): void => {
                    presentation_context_identifier = _decode_Presentation_context_identifier(
                        _el
                    );
                },
                "presentation-data-values": (_el: asn1.ASN1Element): void => {
                    presentation_data_values = _decode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _extension_additions_list_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _root_component_type_list_2_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item,
                undefined
            );
            return new OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ transfer_syntax_name,
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item(
        el
    );
}
export function _encode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item(
    value: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item,
    elGetter: __utils.ASN1Encoder<
        OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
    >
) {
    if (
        !_cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            value: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item,
            elGetter: __utils.ASN1Encoder<
                OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
            >
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.transfer_syntax_name ===
                        undefined
                            ? undefined
                            : _encode_Transfer_syntax_name(
                                  value.transfer_syntax_name,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item(
        value,
        elGetter
    );
}

export type OsiBind_normal_mode_parameters_user_data = {
    fully_encoded_data: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiBind_normal_mode_parameters_user_data: __utils.ASN1Decoder<
    OsiBind_normal_mode_parameters_user_data
> | null = null;
let _cached_encoder_for_OsiBind_normal_mode_parameters_user_data: __utils.ASN1Encoder<
    OsiBind_normal_mode_parameters_user_data
> | null = null;
export function _decode_OsiBind_normal_mode_parameters_user_data(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_OsiBind_normal_mode_parameters_user_data) {
        _cached_decoder_for_OsiBind_normal_mode_parameters_user_data = __utils._decode_inextensible_choice<
            OsiBind_normal_mode_parameters_user_data
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                __utils._decode_explicit<
                    OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item[]
                >(() =>
                    __utils._decodeSequenceOf<
                        OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
                    >(
                        () =>
                            _decode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiBind_normal_mode_parameters_user_data(el);
}
export function _encode_OsiBind_normal_mode_parameters_user_data(
    value: OsiBind_normal_mode_parameters_user_data,
    elGetter: __utils.ASN1Encoder<OsiBind_normal_mode_parameters_user_data>
) {
    if (!_cached_encoder_for_OsiBind_normal_mode_parameters_user_data) {
        _cached_encoder_for_OsiBind_normal_mode_parameters_user_data = __utils._encode_choice<
            OsiBind_normal_mode_parameters_user_data
        >(
            {
                fully_encoded_data: __utils._encode_explicit(
                    asn1.ASN1TagClass.application,
                    1,
                    () =>
                        __utils._encodeSequenceOf<
                            OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
                        >(
                            () =>
                                _encode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item,
                            __utils.BER
                        ),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiBind_normal_mode_parameters_user_data(
        value,
        elGetter
    );
}

export class OsiBind_normal_mode_parameters {
    constructor(
        readonly protocol_version:
            | OsiBind_normal_mode_parameters_protocol_version
            | undefined,
        readonly calling_presentation_selector:
            | Presentation_selector
            | undefined,
        readonly called_presentation_selector:
            | Presentation_selector
            | undefined,
        readonly presentation_context_definition_list: Context_list,
        readonly user_data: OsiBind_normal_mode_parameters_user_data
    ) {}
    public static get _default_value_for_protocol_version() {
        return new Uint8ClampedArray([asn1.TRUE_BIT]);
    }
}
export const _root_component_type_list_1_spec_for_OsiBind_normal_mode_parameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "protocol-version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "calling-presentation-selector",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "called-presentation-selector",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "presentation-context-definition-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "user-data",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiBind_normal_mode_parameters: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiBind_normal_mode_parameters: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiBind_normal_mode_parameters: __utils.ASN1Decoder<
    OsiBind_normal_mode_parameters
> | null = null;
let _cached_encoder_for_OsiBind_normal_mode_parameters: __utils.ASN1Encoder<
    OsiBind_normal_mode_parameters
> | null = null;
export function _decode_OsiBind_normal_mode_parameters(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiBind_normal_mode_parameters) {
        _cached_decoder_for_OsiBind_normal_mode_parameters = function (
            el: asn1.ASN1Element
        ): OsiBind_normal_mode_parameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocol_version: asn1.OPTIONAL<OsiBind_normal_mode_parameters_protocol_version> =
                OsiBind_normal_mode_parameters._default_value_for_protocol_version;
            let calling_presentation_selector: asn1.OPTIONAL<Presentation_selector>;
            let called_presentation_selector: asn1.OPTIONAL<Presentation_selector>;
            let presentation_context_definition_list!: Context_list;
            let user_data!: OsiBind_normal_mode_parameters_user_data;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "protocol-version": (_el: asn1.ASN1Element): void => {
                    protocol_version = __utils._decode_explicit<
                        OsiBind_normal_mode_parameters_protocol_version
                    >(
                        () =>
                            _decode_OsiBind_normal_mode_parameters_protocol_version
                    )(_el);
                },
                "calling-presentation-selector": (
                    _el: asn1.ASN1Element
                ): void => {
                    calling_presentation_selector = __utils._decode_explicit<
                        Presentation_selector
                    >(() => _decode_Presentation_selector)(_el);
                },
                "called-presentation-selector": (
                    _el: asn1.ASN1Element
                ): void => {
                    called_presentation_selector = __utils._decode_explicit<
                        Presentation_selector
                    >(() => _decode_Presentation_selector)(_el);
                },
                "presentation-context-definition-list": (
                    _el: asn1.ASN1Element
                ): void => {
                    presentation_context_definition_list = __utils._decode_explicit<
                        Context_list
                    >(() => _decode_Context_list)(_el);
                },
                "user-data": (_el: asn1.ASN1Element): void => {
                    user_data = _decode_OsiBind_normal_mode_parameters_user_data(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBind_normal_mode_parameters,
                _extension_additions_list_spec_for_OsiBind_normal_mode_parameters,
                _root_component_type_list_2_spec_for_OsiBind_normal_mode_parameters,
                undefined
            );
            return new OsiBind_normal_mode_parameters(
                /* SEQUENCE_CONSTRUCTOR_CALL */ protocol_version,
                calling_presentation_selector,
                called_presentation_selector,
                presentation_context_definition_list,
                user_data
            );
        };
    }
    return _cached_decoder_for_OsiBind_normal_mode_parameters(el);
}
export function _encode_OsiBind_normal_mode_parameters(
    value: OsiBind_normal_mode_parameters,
    elGetter: __utils.ASN1Encoder<OsiBind_normal_mode_parameters>
) {
    if (!_cached_encoder_for_OsiBind_normal_mode_parameters) {
        _cached_encoder_for_OsiBind_normal_mode_parameters = function (
            value: OsiBind_normal_mode_parameters,
            elGetter: __utils.ASN1Encoder<OsiBind_normal_mode_parameters>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.protocol_version === undefined ||
                        __utils.deepEq(
                            value.protocol_version,
                            OsiBind_normal_mode_parameters._default_value_for_protocol_version
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () =>
                                      _encode_OsiBind_normal_mode_parameters_protocol_version,
                                  __utils.BER
                              )(value.protocol_version, __utils.BER),
                        /* IF_ABSENT  */ value.calling_presentation_selector ===
                        undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_Presentation_selector,
                                  __utils.BER
                              )(
                                  value.calling_presentation_selector,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.called_presentation_selector ===
                        undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_Presentation_selector,
                                  __utils.BER
                              )(
                                  value.called_presentation_selector,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            4,
                            () => _encode_Context_list,
                            __utils.BER
                        )(
                            value.presentation_context_definition_list,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_OsiBind_normal_mode_parameters_user_data(
                            value.user_data,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OsiBind_normal_mode_parameters(value, elGetter);
}

export class OsiBind {
    constructor(
        readonly mode_selector: OsiBind_mode_selector,
        readonly normal_mode_parameters: OsiBind_normal_mode_parameters
    ) {}
}
export const _root_component_type_list_1_spec_for_OsiBind: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "mode-selector",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "normal-mode-parameters",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiBind: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiBind: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiBind: __utils.ASN1Decoder<OsiBind> | null = null;
let _cached_encoder_for_OsiBind: __utils.ASN1Encoder<OsiBind> | null = null;
export function _decode_OsiBind(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiBind) {
        _cached_decoder_for_OsiBind = function (el: asn1.ASN1Element): OsiBind {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let mode_selector!: OsiBind_mode_selector;
            let normal_mode_parameters!: OsiBind_normal_mode_parameters;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "mode-selector": (_el: asn1.ASN1Element): void => {
                    mode_selector = __utils._decode_explicit<
                        OsiBind_mode_selector
                    >(() => _decode_OsiBind_mode_selector)(_el);
                },
                "normal-mode-parameters": (_el: asn1.ASN1Element): void => {
                    normal_mode_parameters = __utils._decode_explicit<
                        OsiBind_normal_mode_parameters
                    >(() => _decode_OsiBind_normal_mode_parameters)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBind,
                _extension_additions_list_spec_for_OsiBind,
                _root_component_type_list_2_spec_for_OsiBind,
                undefined
            );
            return new OsiBind(
                /* SET_CONSTRUCTOR_CALL */ mode_selector,
                normal_mode_parameters
            );
        };
    }
    return _cached_decoder_for_OsiBind(el);
}
export function _encode_OsiBind(
    value: OsiBind,
    elGetter: __utils.ASN1Encoder<OsiBind>
) {
    if (!_cached_encoder_for_OsiBind) {
        _cached_encoder_for_OsiBind = function (
            value: OsiBind,
            elGetter: __utils.ASN1Encoder<OsiBind>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_OsiBind_mode_selector,
                            __utils.BER
                        )(value.mode_selector, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            2,
                            () => _encode_OsiBind_normal_mode_parameters,
                            __utils.BER
                        )(value.normal_mode_parameters, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OsiBind(value, elGetter);
}

export type AARQ_apdu_protocol_version = asn1.BIT_STRING;
export const AARQ_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */
let _cached_decoder_for_AARQ_apdu_protocol_version: __utils.ASN1Decoder<
    AARQ_apdu_protocol_version
> | null = null;
let _cached_encoder_for_AARQ_apdu_protocol_version: __utils.ASN1Encoder<
    AARQ_apdu_protocol_version
> | null = null;
export function _decode_AARQ_apdu_protocol_version(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AARQ_apdu_protocol_version) {
        _cached_decoder_for_AARQ_apdu_protocol_version =
            __utils._decodeBitString;
    }
    return _cached_decoder_for_AARQ_apdu_protocol_version(el);
}
export function _encode_AARQ_apdu_protocol_version(
    value: AARQ_apdu_protocol_version,
    elGetter: __utils.ASN1Encoder<AARQ_apdu_protocol_version>
) {
    if (!_cached_encoder_for_AARQ_apdu_protocol_version) {
        _cached_encoder_for_AARQ_apdu_protocol_version =
            __utils._encodeBitString;
    }
    return _cached_encoder_for_AARQ_apdu_protocol_version(value, elGetter);
}

export type Application_context_name = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_Application_context_name: __utils.ASN1Decoder<
    Application_context_name
> | null = null;
let _cached_encoder_for_Application_context_name: __utils.ASN1Encoder<
    Application_context_name
> | null = null;
export function _decode_Application_context_name(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Application_context_name) {
        _cached_decoder_for_Application_context_name =
            __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_Application_context_name(el);
}
export function _encode_Application_context_name(
    value: Application_context_name,
    elGetter: __utils.ASN1Encoder<Application_context_name>
) {
    if (!_cached_encoder_for_Application_context_name) {
        _cached_encoder_for_Application_context_name =
            __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_Application_context_name(value, elGetter);
}

export type AP_invocation_identifier = asn1.INTEGER;
let _cached_decoder_for_AP_invocation_identifier: __utils.ASN1Decoder<
    AP_invocation_identifier
> | null = null;
let _cached_encoder_for_AP_invocation_identifier: __utils.ASN1Encoder<
    AP_invocation_identifier
> | null = null;
export function _decode_AP_invocation_identifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AP_invocation_identifier) {
        _cached_decoder_for_AP_invocation_identifier = __utils._decodeInteger;
    }
    return _cached_decoder_for_AP_invocation_identifier(el);
}
export function _encode_AP_invocation_identifier(
    value: AP_invocation_identifier,
    elGetter: __utils.ASN1Encoder<AP_invocation_identifier>
) {
    if (!_cached_encoder_for_AP_invocation_identifier) {
        _cached_encoder_for_AP_invocation_identifier = __utils._encodeInteger;
    }
    return _cached_encoder_for_AP_invocation_identifier(value, elGetter);
}

export type AE_invocation_identifier = asn1.INTEGER;
let _cached_decoder_for_AE_invocation_identifier: __utils.ASN1Decoder<
    AE_invocation_identifier
> | null = null;
let _cached_encoder_for_AE_invocation_identifier: __utils.ASN1Encoder<
    AE_invocation_identifier
> | null = null;
export function _decode_AE_invocation_identifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AE_invocation_identifier) {
        _cached_decoder_for_AE_invocation_identifier = __utils._decodeInteger;
    }
    return _cached_decoder_for_AE_invocation_identifier(el);
}
export function _encode_AE_invocation_identifier(
    value: AE_invocation_identifier,
    elGetter: __utils.ASN1Encoder<AE_invocation_identifier>
) {
    if (!_cached_encoder_for_AE_invocation_identifier) {
        _cached_encoder_for_AE_invocation_identifier = __utils._encodeInteger;
    }
    return _cached_encoder_for_AE_invocation_identifier(value, elGetter);
}

export type Implementation_data = asn1.GraphicString; // GraphicString
let _cached_decoder_for_Implementation_data: __utils.ASN1Decoder<
    Implementation_data
> | null = null;
let _cached_encoder_for_Implementation_data: __utils.ASN1Encoder<
    Implementation_data
> | null = null;
export function _decode_Implementation_data(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Implementation_data) {
        _cached_decoder_for_Implementation_data = __utils._decodeGraphicString;
    }
    return _cached_decoder_for_Implementation_data(el);
}
export function _encode_Implementation_data(
    value: Implementation_data,
    elGetter: __utils.ASN1Encoder<Implementation_data>
) {
    if (!_cached_encoder_for_Implementation_data) {
        _cached_encoder_for_Implementation_data = __utils._encodeGraphicString;
    }
    return _cached_encoder_for_Implementation_data(value, elGetter);
}

export type Association_informationBind = asn1.EXTERNAL[]; // SequenceOfType
let _cached_decoder_for_Association_informationBind: __utils.ASN1Decoder<
    Association_informationBind
> | null = null;
let _cached_encoder_for_Association_informationBind: __utils.ASN1Encoder<
    Association_informationBind
> | null = null;
export function _decode_Association_informationBind(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Association_informationBind) {
        _cached_decoder_for_Association_informationBind = __utils._decodeSequenceOf<
            asn1.EXTERNAL
        >(() => __utils._decodeExternal);
    }
    return _cached_decoder_for_Association_informationBind(el);
}
export function _encode_Association_informationBind(
    value: Association_informationBind,
    elGetter: __utils.ASN1Encoder<Association_informationBind>
) {
    if (!_cached_encoder_for_Association_informationBind) {
        _cached_encoder_for_Association_informationBind = __utils._encodeSequenceOf<
            asn1.EXTERNAL
        >(() => __utils._encodeExternal, __utils.BER);
    }
    return _cached_encoder_for_Association_informationBind(value, elGetter);
}

export class AARQ_apdu {
    constructor(
        readonly protocol_version: AARQ_apdu_protocol_version | undefined,
        readonly application_context_name: Application_context_name,
        readonly called_AP_title: Name | undefined,
        readonly called_AE_qualifier: RelativeDistinguishedName | undefined,
        readonly called_AP_invocation_identifier:
            | AP_invocation_identifier
            | undefined,
        readonly called_AE_invocation_identifier:
            | AE_invocation_identifier
            | undefined,
        readonly calling_AP_title: Name | undefined,
        readonly calling_AE_qualifier: RelativeDistinguishedName | undefined,
        readonly calling_AP_invocation_identifier:
            | AP_invocation_identifier
            | undefined,
        readonly calling_AE_invocation_identifier:
            | AE_invocation_identifier
            | undefined,
        readonly implementation_information: Implementation_data | undefined,
        readonly user_information: Association_informationBind
    ) {}
    public static get _default_value_for_protocol_version() {
        return new Uint8ClampedArray([asn1.TRUE_BIT]);
    }
}
export const _root_component_type_list_1_spec_for_AARQ_apdu: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "protocol-version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "application-context-name",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "called-AP-title",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "called-AE-qualifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "called-AP-invocation-identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "called-AE-invocation-identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "calling-AP-title",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "calling-AE-qualifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "calling-AP-invocation-identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "calling-AE-invocation-identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "implementation-information",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "user-information",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AARQ_apdu: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AARQ_apdu: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AARQ_apdu: __utils.ASN1Decoder<AARQ_apdu> | null = null;
let _cached_encoder_for_AARQ_apdu: __utils.ASN1Encoder<AARQ_apdu> | null = null;
export function _decode_AARQ_apdu(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AARQ_apdu) {
        _cached_decoder_for_AARQ_apdu = __utils._decode_explicit<AARQ_apdu>(
            () =>
                function (el: asn1.ASN1Element): AARQ_apdu {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let protocol_version: asn1.OPTIONAL<AARQ_apdu_protocol_version> =
                        AARQ_apdu._default_value_for_protocol_version;
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
                        "protocol-version": (_el: asn1.ASN1Element): void => {
                            protocol_version = __utils._decode_explicit<
                                AARQ_apdu_protocol_version
                            >(() => _decode_AARQ_apdu_protocol_version)(_el);
                        },
                        "application-context-name": (
                            _el: asn1.ASN1Element
                        ): void => {
                            application_context_name = __utils._decode_explicit<
                                Application_context_name
                            >(() => _decode_Application_context_name)(_el);
                        },
                        "called-AP-title": (_el: asn1.ASN1Element): void => {
                            called_AP_title = __utils._decode_explicit<Name>(
                                () => _decode_Name
                            )(_el);
                        },
                        "called-AE-qualifier": (
                            _el: asn1.ASN1Element
                        ): void => {
                            called_AE_qualifier = __utils._decode_explicit<
                                RelativeDistinguishedName
                            >(() => _decode_RelativeDistinguishedName)(_el);
                        },
                        "called-AP-invocation-identifier": (
                            _el: asn1.ASN1Element
                        ): void => {
                            called_AP_invocation_identifier = __utils._decode_explicit<
                                AP_invocation_identifier
                            >(() => _decode_AP_invocation_identifier)(_el);
                        },
                        "called-AE-invocation-identifier": (
                            _el: asn1.ASN1Element
                        ): void => {
                            called_AE_invocation_identifier = __utils._decode_explicit<
                                AE_invocation_identifier
                            >(() => _decode_AE_invocation_identifier)(_el);
                        },
                        "calling-AP-title": (_el: asn1.ASN1Element): void => {
                            calling_AP_title = __utils._decode_explicit<Name>(
                                () => _decode_Name
                            )(_el);
                        },
                        "calling-AE-qualifier": (
                            _el: asn1.ASN1Element
                        ): void => {
                            calling_AE_qualifier = __utils._decode_explicit<
                                RelativeDistinguishedName
                            >(() => _decode_RelativeDistinguishedName)(_el);
                        },
                        "calling-AP-invocation-identifier": (
                            _el: asn1.ASN1Element
                        ): void => {
                            calling_AP_invocation_identifier = __utils._decode_explicit<
                                AP_invocation_identifier
                            >(() => _decode_AP_invocation_identifier)(_el);
                        },
                        "calling-AE-invocation-identifier": (
                            _el: asn1.ASN1Element
                        ): void => {
                            calling_AE_invocation_identifier = __utils._decode_explicit<
                                AE_invocation_identifier
                            >(() => _decode_AE_invocation_identifier)(_el);
                        },
                        "implementation-information": (
                            _el: asn1.ASN1Element
                        ): void => {
                            implementation_information = __utils._decode_explicit<
                                Implementation_data
                            >(() => _decode_Implementation_data)(_el);
                        },
                        "user-information": (_el: asn1.ASN1Element): void => {
                            user_information = __utils._decode_explicit<
                                Association_informationBind
                            >(() => _decode_Association_informationBind)(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_AARQ_apdu,
                        _extension_additions_list_spec_for_AARQ_apdu,
                        _root_component_type_list_2_spec_for_AARQ_apdu,
                        undefined
                    );
                    return new AARQ_apdu(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ protocol_version,
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
                }
        );
    }
    return _cached_decoder_for_AARQ_apdu(el);
}
export function _encode_AARQ_apdu(
    value: AARQ_apdu,
    elGetter: __utils.ASN1Encoder<AARQ_apdu>
) {
    if (!_cached_encoder_for_AARQ_apdu) {
        _cached_encoder_for_AARQ_apdu = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            0,
            () =>
                function (
                    value: AARQ_apdu,
                    elGetter: __utils.ASN1Encoder<AARQ_apdu>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* IF_DEFAULT */ value.protocol_version ===
                                    undefined ||
                                __utils.deepEq(
                                    value.protocol_version,
                                    AARQ_apdu._default_value_for_protocol_version
                                )
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          0,
                                          () =>
                                              _encode_AARQ_apdu_protocol_version,
                                          __utils.BER
                                      )(value.protocol_version, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    1,
                                    () => _encode_Application_context_name,
                                    __utils.BER
                                )(value.application_context_name, __utils.BER),
                                /* IF_ABSENT  */ value.called_AP_title ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          2,
                                          () => _encode_Name,
                                          __utils.BER
                                      )(value.called_AP_title, __utils.BER),
                                /* IF_ABSENT  */ value.called_AE_qualifier ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          3,
                                          () =>
                                              _encode_RelativeDistinguishedName,
                                          __utils.BER
                                      )(value.called_AE_qualifier, __utils.BER),
                                /* IF_ABSENT  */ value.called_AP_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          4,
                                          () =>
                                              _encode_AP_invocation_identifier,
                                          __utils.BER
                                      )(
                                          value.called_AP_invocation_identifier,
                                          __utils.BER
                                      ),
                                /* IF_ABSENT  */ value.called_AE_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          5,
                                          () =>
                                              _encode_AE_invocation_identifier,
                                          __utils.BER
                                      )(
                                          value.called_AE_invocation_identifier,
                                          __utils.BER
                                      ),
                                /* IF_ABSENT  */ value.calling_AP_title ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          6,
                                          () => _encode_Name,
                                          __utils.BER
                                      )(value.calling_AP_title, __utils.BER),
                                /* IF_ABSENT  */ value.calling_AE_qualifier ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          7,
                                          () =>
                                              _encode_RelativeDistinguishedName,
                                          __utils.BER
                                      )(
                                          value.calling_AE_qualifier,
                                          __utils.BER
                                      ),
                                /* IF_ABSENT  */ value.calling_AP_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          8,
                                          () =>
                                              _encode_AP_invocation_identifier,
                                          __utils.BER
                                      )(
                                          value.calling_AP_invocation_identifier,
                                          __utils.BER
                                      ),
                                /* IF_ABSENT  */ value.calling_AE_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          9,
                                          () =>
                                              _encode_AE_invocation_identifier,
                                          __utils.BER
                                      )(
                                          value.calling_AE_invocation_identifier,
                                          __utils.BER
                                      ),
                                /* IF_ABSENT  */ value.implementation_information ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          29,
                                          () => _encode_Implementation_data,
                                          __utils.BER
                                      )(
                                          value.implementation_information,
                                          __utils.BER
                                      ),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    30,
                                    () => _encode_Association_informationBind,
                                    __utils.BER
                                )(value.user_information, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_AARQ_apdu(value, elGetter);
}

export type TheOsiBind = asn1.ASN1Element; // ObjectClassFieldType
let _cached_decoder_for_TheOsiBind: __utils.ASN1Decoder<
    TheOsiBind
> | null = null;
let _cached_encoder_for_TheOsiBind: __utils.ASN1Encoder<
    TheOsiBind
> | null = null;
export function _decode_TheOsiBind(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TheOsiBind) {
        _cached_decoder_for_TheOsiBind = __utils._decode_explicit<TheOsiBind>(
            () => __utils._decodeAny
        );
    }
    return _cached_decoder_for_TheOsiBind(el);
}
export function _encode_TheOsiBind(
    value: TheOsiBind,
    elGetter: __utils.ASN1Encoder<TheOsiBind>
) {
    if (!_cached_encoder_for_TheOsiBind) {
        _cached_encoder_for_TheOsiBind = __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            16,
            () => __utils._encodeAny,
            __utils.BER
        );
    }
    return _cached_encoder_for_TheOsiBind(value, elGetter);
}

export class OsiBindResult_mode_selector {
    constructor(readonly mode_value: asn1.INTEGER) {}
}
export const _root_component_type_list_1_spec_for_OsiBindResult_mode_selector: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "mode-value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiBindResult_mode_selector: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiBindResult_mode_selector: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiBindResult_mode_selector: __utils.ASN1Decoder<
    OsiBindResult_mode_selector
> | null = null;
let _cached_encoder_for_OsiBindResult_mode_selector: __utils.ASN1Encoder<
    OsiBindResult_mode_selector
> | null = null;
export function _decode_OsiBindResult_mode_selector(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiBindResult_mode_selector) {
        _cached_decoder_for_OsiBindResult_mode_selector = function (
            el: asn1.ASN1Element
        ): OsiBindResult_mode_selector {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let mode_value!: asn1.INTEGER;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "mode-value": (_el: asn1.ASN1Element): void => {
                    mode_value = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindResult_mode_selector,
                _extension_additions_list_spec_for_OsiBindResult_mode_selector,
                _root_component_type_list_2_spec_for_OsiBindResult_mode_selector,
                undefined
            );
            return new OsiBindResult_mode_selector(
                /* SET_CONSTRUCTOR_CALL */ mode_value
            );
        };
    }
    return _cached_decoder_for_OsiBindResult_mode_selector(el);
}
export function _encode_OsiBindResult_mode_selector(
    value: OsiBindResult_mode_selector,
    elGetter: __utils.ASN1Encoder<OsiBindResult_mode_selector>
) {
    if (!_cached_encoder_for_OsiBindResult_mode_selector) {
        _cached_encoder_for_OsiBindResult_mode_selector = function (
            value: OsiBindResult_mode_selector,
            elGetter: __utils.ASN1Encoder<OsiBindResult_mode_selector>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeInteger,
                            __utils.BER
                        )(value.mode_value, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindResult_mode_selector(value, elGetter);
}

export type OsiBindResult_normal_mode_parameters_protocol_version = asn1.BIT_STRING;
export const OsiBindResult_normal_mode_parameters_protocol_version_version_1: number = 0; /* LONG_NAMED_BIT */
let _cached_decoder_for_OsiBindResult_normal_mode_parameters_protocol_version: __utils.ASN1Decoder<
    OsiBindResult_normal_mode_parameters_protocol_version
> | null = null;
let _cached_encoder_for_OsiBindResult_normal_mode_parameters_protocol_version: __utils.ASN1Encoder<
    OsiBindResult_normal_mode_parameters_protocol_version
> | null = null;
export function _decode_OsiBindResult_normal_mode_parameters_protocol_version(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_OsiBindResult_normal_mode_parameters_protocol_version
    ) {
        _cached_decoder_for_OsiBindResult_normal_mode_parameters_protocol_version =
            __utils._decodeBitString;
    }
    return _cached_decoder_for_OsiBindResult_normal_mode_parameters_protocol_version(
        el
    );
}
export function _encode_OsiBindResult_normal_mode_parameters_protocol_version(
    value: OsiBindResult_normal_mode_parameters_protocol_version,
    elGetter: __utils.ASN1Encoder<
        OsiBindResult_normal_mode_parameters_protocol_version
    >
) {
    if (
        !_cached_encoder_for_OsiBindResult_normal_mode_parameters_protocol_version
    ) {
        _cached_encoder_for_OsiBindResult_normal_mode_parameters_protocol_version =
            __utils._encodeBitString;
    }
    return _cached_encoder_for_OsiBindResult_normal_mode_parameters_protocol_version(
        value,
        elGetter
    );
}

export type Result = asn1.INTEGER;
export const Result_acceptance: Result = 0; /* LONG_NAMED_INTEGER_VALUE */
export const acceptance: Result = Result_acceptance; /* SHORT_NAMED_INTEGER_VALUE */
export const Result_user_rejection: Result = 1; /* LONG_NAMED_INTEGER_VALUE */
export const user_rejection: Result = Result_user_rejection; /* SHORT_NAMED_INTEGER_VALUE */
export const Result_provider_rejection: Result = 2; /* LONG_NAMED_INTEGER_VALUE */
export const provider_rejection: Result = Result_provider_rejection; /* SHORT_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Result: __utils.ASN1Decoder<Result> | null = null;
let _cached_encoder_for_Result: __utils.ASN1Encoder<Result> | null = null;
export function _decode_Result(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Result) {
        _cached_decoder_for_Result = __utils._decodeInteger;
    }
    return _cached_decoder_for_Result(el);
}
export function _encode_Result(
    value: Result,
    elGetter: __utils.ASN1Encoder<Result>
) {
    if (!_cached_encoder_for_Result) {
        _cached_encoder_for_Result = __utils._encodeInteger;
    }
    return _cached_encoder_for_Result(value, elGetter);
}

export class OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item {
    constructor(
        readonly result: Result,
        readonly transfer_syntax_name: Transfer_syntax_name
    ) {}
}
export const _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "result",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "transfer-syntax-name",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: __utils.ASN1Decoder<
    OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
> | null = null;
let _cached_encoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: __utils.ASN1Encoder<
    OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
> | null = null;
export function _decode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
    ) {
        _cached_decoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item = function (
            el: asn1.ASN1Element
        ): OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "OsiBindResult-normal-mode-parameters-presentation-context-definition-result-list-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "result";
            sequence[1].name = "transfer-syntax-name";
            let result!: Result;
            let transfer_syntax_name!: Transfer_syntax_name;
            result = __utils._decode_explicit<Result>(() => _decode_Result)(
                sequence[0]
            );
            transfer_syntax_name = __utils._decode_explicit<
                Transfer_syntax_name
            >(() => _decode_Transfer_syntax_name)(sequence[1]);
            // TODO: Validate values.
            return new OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
                result,
                transfer_syntax_name
            );
        };
    }
    return _cached_decoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
        el
    );
}
export function _encode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
    value: OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item,
    elGetter: __utils.ASN1Encoder<
        OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
    >
) {
    if (
        !_cached_encoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
    ) {
        _cached_encoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item = function (
            value: OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item,
            elGetter: __utils.ASN1Encoder<
                OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
            >
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Result,
                            __utils.BER
                        )(value.result, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => _encode_Transfer_syntax_name,
                            __utils.BER
                        )(value.transfer_syntax_name, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
        value,
        elGetter
    );
}

export type OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: asn1.ASN1Element;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: __utils.ASN1Decoder<
    OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
let _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: __utils.ASN1Encoder<
    OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
export function _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._decode_inextensible_choice<
            OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >({
            "CONTEXT 0": [
                "single_ASN1_type",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        el
    );
}
export function _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    value: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
    elGetter: __utils.ASN1Encoder<
        OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    >
) {
    if (
        !_cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._encode_choice<
            OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >(
            {
                single_ASN1_type: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}

export class OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item {
    constructor(
        readonly transfer_syntax_name: Transfer_syntax_name | undefined,
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly presentation_data_values: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {}
}
export const _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "transfer-syntax-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "presentation-context-identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "presentation-data-values",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ASN1Decoder<
    OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
let _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ASN1Encoder<
    OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
export function _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            el: asn1.ASN1Element
        ): OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let transfer_syntax_name: asn1.OPTIONAL<Transfer_syntax_name>;
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "transfer-syntax-name": (_el: asn1.ASN1Element): void => {
                    transfer_syntax_name = _decode_Transfer_syntax_name(_el);
                },
                "presentation-context-identifier": (
                    _el: asn1.ASN1Element
                ): void => {
                    presentation_context_identifier = _decode_Presentation_context_identifier(
                        _el
                    );
                },
                "presentation-data-values": (_el: asn1.ASN1Element): void => {
                    presentation_data_values = _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
                undefined
            );
            return new OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ transfer_syntax_name,
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
        el
    );
}
export function _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
    value: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
    elGetter: __utils.ASN1Encoder<
        OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
    >
) {
    if (
        !_cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            value: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
            elGetter: __utils.ASN1Encoder<
                OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
            >
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.transfer_syntax_name ===
                        undefined
                            ? undefined
                            : _encode_Transfer_syntax_name(
                                  value.transfer_syntax_name,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
        value,
        elGetter
    );
}

export type OsiBindResult_normal_mode_parameters_user_data = {
    fully_encoded_data: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data: __utils.ASN1Decoder<
    OsiBindResult_normal_mode_parameters_user_data
> | null = null;
let _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data: __utils.ASN1Encoder<
    OsiBindResult_normal_mode_parameters_user_data
> | null = null;
export function _decode_OsiBindResult_normal_mode_parameters_user_data(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data) {
        _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data = __utils._decode_inextensible_choice<
            OsiBindResult_normal_mode_parameters_user_data
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                __utils._decode_explicit<
                    OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item[]
                >(() =>
                    __utils._decodeSequenceOf<
                        OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
                    >(
                        () =>
                            _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data(
        el
    );
}
export function _encode_OsiBindResult_normal_mode_parameters_user_data(
    value: OsiBindResult_normal_mode_parameters_user_data,
    elGetter: __utils.ASN1Encoder<
        OsiBindResult_normal_mode_parameters_user_data
    >
) {
    if (!_cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data) {
        _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data = __utils._encode_choice<
            OsiBindResult_normal_mode_parameters_user_data
        >(
            {
                fully_encoded_data: __utils._encode_explicit(
                    asn1.ASN1TagClass.application,
                    1,
                    () =>
                        __utils._encodeSequenceOf<
                            OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
                        >(
                            () =>
                                _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
                            __utils.BER
                        ),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data(
        value,
        elGetter
    );
}

export class OsiBindResult_normal_mode_parameters {
    constructor(
        readonly protocol_version:
            | OsiBindResult_normal_mode_parameters_protocol_version
            | undefined,
        readonly responding_presentation_selector:
            | Presentation_selector
            | undefined,
        readonly presentation_context_definition_result_list: OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item[],
        readonly user_data: OsiBindResult_normal_mode_parameters_user_data
    ) {}
    public static get _default_value_for_protocol_version() {
        return new Uint8ClampedArray([asn1.TRUE_BIT]);
    }
}
export const _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "protocol-version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "responding-presentation-selector",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "presentation-context-definition-result-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "user-data",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiBindResult_normal_mode_parameters: __utils.ASN1Decoder<
    OsiBindResult_normal_mode_parameters
> | null = null;
let _cached_encoder_for_OsiBindResult_normal_mode_parameters: __utils.ASN1Encoder<
    OsiBindResult_normal_mode_parameters
> | null = null;
export function _decode_OsiBindResult_normal_mode_parameters(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_OsiBindResult_normal_mode_parameters) {
        _cached_decoder_for_OsiBindResult_normal_mode_parameters = function (
            el: asn1.ASN1Element
        ): OsiBindResult_normal_mode_parameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocol_version: asn1.OPTIONAL<OsiBindResult_normal_mode_parameters_protocol_version> =
                OsiBindResult_normal_mode_parameters._default_value_for_protocol_version;
            let responding_presentation_selector: asn1.OPTIONAL<Presentation_selector>;
            let presentation_context_definition_result_list!: OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item[];
            let user_data!: OsiBindResult_normal_mode_parameters_user_data;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "protocol-version": (_el: asn1.ASN1Element): void => {
                    protocol_version = __utils._decode_explicit<
                        OsiBindResult_normal_mode_parameters_protocol_version
                    >(
                        () =>
                            _decode_OsiBindResult_normal_mode_parameters_protocol_version
                    )(_el);
                },
                "responding-presentation-selector": (
                    _el: asn1.ASN1Element
                ): void => {
                    responding_presentation_selector = __utils._decode_explicit<
                        Presentation_selector
                    >(() => _decode_Presentation_selector)(_el);
                },
                "presentation-context-definition-result-list": (
                    _el: asn1.ASN1Element
                ): void => {
                    presentation_context_definition_result_list = __utils._decode_explicit<
                        OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item[]
                    >(() =>
                        __utils._decodeSequenceOf<
                            OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
                        >(
                            () =>
                                _decode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
                        )
                    )(_el);
                },
                "user-data": (_el: asn1.ASN1Element): void => {
                    user_data = _decode_OsiBindResult_normal_mode_parameters_user_data(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters,
                _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters,
                _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters,
                undefined
            );
            return new OsiBindResult_normal_mode_parameters(
                /* SEQUENCE_CONSTRUCTOR_CALL */ protocol_version,
                responding_presentation_selector,
                presentation_context_definition_result_list,
                user_data
            );
        };
    }
    return _cached_decoder_for_OsiBindResult_normal_mode_parameters(el);
}
export function _encode_OsiBindResult_normal_mode_parameters(
    value: OsiBindResult_normal_mode_parameters,
    elGetter: __utils.ASN1Encoder<OsiBindResult_normal_mode_parameters>
) {
    if (!_cached_encoder_for_OsiBindResult_normal_mode_parameters) {
        _cached_encoder_for_OsiBindResult_normal_mode_parameters = function (
            value: OsiBindResult_normal_mode_parameters,
            elGetter: __utils.ASN1Encoder<OsiBindResult_normal_mode_parameters>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.protocol_version === undefined ||
                        __utils.deepEq(
                            value.protocol_version,
                            OsiBindResult_normal_mode_parameters._default_value_for_protocol_version
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () =>
                                      _encode_OsiBindResult_normal_mode_parameters_protocol_version,
                                  __utils.BER
                              )(value.protocol_version, __utils.BER),
                        /* IF_ABSENT  */ value.responding_presentation_selector ===
                        undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => _encode_Presentation_selector,
                                  __utils.BER
                              )(
                                  value.responding_presentation_selector,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            5,
                            () =>
                                __utils._encodeSequenceOf<
                                    OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
                                >(
                                    () =>
                                        _encode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item,
                                    __utils.BER
                                ),
                            __utils.BER
                        )(
                            value.presentation_context_definition_result_list,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_OsiBindResult_normal_mode_parameters_user_data(
                            value.user_data,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindResult_normal_mode_parameters(
        value,
        elGetter
    );
}

export class OsiBindResult {
    constructor(
        readonly mode_selector: OsiBindResult_mode_selector,
        readonly normal_mode_parameters: OsiBindResult_normal_mode_parameters
    ) {}
}
export const _root_component_type_list_1_spec_for_OsiBindResult: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "mode-selector",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "normal-mode-parameters",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiBindResult: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiBindResult: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiBindResult: __utils.ASN1Decoder<
    OsiBindResult
> | null = null;
let _cached_encoder_for_OsiBindResult: __utils.ASN1Encoder<
    OsiBindResult
> | null = null;
export function _decode_OsiBindResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiBindResult) {
        _cached_decoder_for_OsiBindResult = function (
            el: asn1.ASN1Element
        ): OsiBindResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let mode_selector!: OsiBindResult_mode_selector;
            let normal_mode_parameters!: OsiBindResult_normal_mode_parameters;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "mode-selector": (_el: asn1.ASN1Element): void => {
                    mode_selector = __utils._decode_explicit<
                        OsiBindResult_mode_selector
                    >(() => _decode_OsiBindResult_mode_selector)(_el);
                },
                "normal-mode-parameters": (_el: asn1.ASN1Element): void => {
                    normal_mode_parameters = __utils._decode_explicit<
                        OsiBindResult_normal_mode_parameters
                    >(() => _decode_OsiBindResult_normal_mode_parameters)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindResult,
                _extension_additions_list_spec_for_OsiBindResult,
                _root_component_type_list_2_spec_for_OsiBindResult,
                undefined
            );
            return new OsiBindResult(
                /* SET_CONSTRUCTOR_CALL */ mode_selector,
                normal_mode_parameters
            );
        };
    }
    return _cached_decoder_for_OsiBindResult(el);
}
export function _encode_OsiBindResult(
    value: OsiBindResult,
    elGetter: __utils.ASN1Encoder<OsiBindResult>
) {
    if (!_cached_encoder_for_OsiBindResult) {
        _cached_encoder_for_OsiBindResult = function (
            value: OsiBindResult,
            elGetter: __utils.ASN1Encoder<OsiBindResult>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_OsiBindResult_mode_selector,
                            __utils.BER
                        )(value.mode_selector, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            2,
                            () => _encode_OsiBindResult_normal_mode_parameters,
                            __utils.BER
                        )(value.normal_mode_parameters, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindResult(value, elGetter);
}

export type AARE_apdu_protocol_version = asn1.BIT_STRING;
export const AARE_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */
let _cached_decoder_for_AARE_apdu_protocol_version: __utils.ASN1Decoder<
    AARE_apdu_protocol_version
> | null = null;
let _cached_encoder_for_AARE_apdu_protocol_version: __utils.ASN1Encoder<
    AARE_apdu_protocol_version
> | null = null;
export function _decode_AARE_apdu_protocol_version(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AARE_apdu_protocol_version) {
        _cached_decoder_for_AARE_apdu_protocol_version =
            __utils._decodeBitString;
    }
    return _cached_decoder_for_AARE_apdu_protocol_version(el);
}
export function _encode_AARE_apdu_protocol_version(
    value: AARE_apdu_protocol_version,
    elGetter: __utils.ASN1Encoder<AARE_apdu_protocol_version>
) {
    if (!_cached_encoder_for_AARE_apdu_protocol_version) {
        _cached_encoder_for_AARE_apdu_protocol_version =
            __utils._encodeBitString;
    }
    return _cached_encoder_for_AARE_apdu_protocol_version(value, elGetter);
}

export type Associate_result = asn1.INTEGER;
export const Associate_result_accepted: Associate_result = 0; /* LONG_NAMED_INTEGER_VALUE */
export const accepted: Associate_result = Associate_result_accepted; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_result_rejected_permanent: Associate_result = 1; /* LONG_NAMED_INTEGER_VALUE */
export const rejected_permanent: Associate_result = Associate_result_rejected_permanent; /* SHORT_NAMED_INTEGER_VALUE */
export const Associate_result_rejected_transient: Associate_result = 2; /* LONG_NAMED_INTEGER_VALUE */
export const rejected_transient: Associate_result = Associate_result_rejected_transient; /* SHORT_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Associate_result: __utils.ASN1Decoder<
    Associate_result
> | null = null;
let _cached_encoder_for_Associate_result: __utils.ASN1Encoder<
    Associate_result
> | null = null;
export function _decode_Associate_result(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Associate_result) {
        _cached_decoder_for_Associate_result = __utils._decodeInteger;
    }
    return _cached_decoder_for_Associate_result(el);
}
export function _encode_Associate_result(
    value: Associate_result,
    elGetter: __utils.ASN1Encoder<Associate_result>
) {
    if (!_cached_encoder_for_Associate_result) {
        _cached_encoder_for_Associate_result = __utils._encodeInteger;
    }
    return _cached_encoder_for_Associate_result(value, elGetter);
}

export type Associate_source_diagnostic_acse_service_user = asn1.INTEGER;
export const Associate_source_diagnostic_acse_service_user_null_: Associate_source_diagnostic_acse_service_user = 0; /* LONG_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_no_reason_given: Associate_source_diagnostic_acse_service_user = 1; /* LONG_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_application_context_name_not_supported: Associate_source_diagnostic_acse_service_user = 2; /* LONG_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized: Associate_source_diagnostic_acse_service_user = 3; /* LONG_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 4; /* LONG_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized: Associate_source_diagnostic_acse_service_user = 5; /* LONG_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 6; /* LONG_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized: Associate_source_diagnostic_acse_service_user = 7; /* LONG_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 8; /* LONG_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized: Associate_source_diagnostic_acse_service_user = 9; /* LONG_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 10; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Associate_source_diagnostic_acse_service_user: __utils.ASN1Decoder<
    Associate_source_diagnostic_acse_service_user
> | null = null;
let _cached_encoder_for_Associate_source_diagnostic_acse_service_user: __utils.ASN1Encoder<
    Associate_source_diagnostic_acse_service_user
> | null = null;
export function _decode_Associate_source_diagnostic_acse_service_user(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_Associate_source_diagnostic_acse_service_user) {
        _cached_decoder_for_Associate_source_diagnostic_acse_service_user =
            __utils._decodeInteger;
    }
    return _cached_decoder_for_Associate_source_diagnostic_acse_service_user(
        el
    );
}
export function _encode_Associate_source_diagnostic_acse_service_user(
    value: Associate_source_diagnostic_acse_service_user,
    elGetter: __utils.ASN1Encoder<Associate_source_diagnostic_acse_service_user>
) {
    if (!_cached_encoder_for_Associate_source_diagnostic_acse_service_user) {
        _cached_encoder_for_Associate_source_diagnostic_acse_service_user =
            __utils._encodeInteger;
    }
    return _cached_encoder_for_Associate_source_diagnostic_acse_service_user(
        value,
        elGetter
    );
}

export type Associate_source_diagnostic_acse_service_provider = asn1.INTEGER;
export const Associate_source_diagnostic_acse_service_provider_null_: Associate_source_diagnostic_acse_service_provider = 0; /* LONG_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_provider_no_reason_given: Associate_source_diagnostic_acse_service_provider = 1; /* LONG_NAMED_INTEGER_VALUE */
export const Associate_source_diagnostic_acse_service_provider_no_common_acse_version: Associate_source_diagnostic_acse_service_provider = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Associate_source_diagnostic_acse_service_provider: __utils.ASN1Decoder<
    Associate_source_diagnostic_acse_service_provider
> | null = null;
let _cached_encoder_for_Associate_source_diagnostic_acse_service_provider: __utils.ASN1Encoder<
    Associate_source_diagnostic_acse_service_provider
> | null = null;
export function _decode_Associate_source_diagnostic_acse_service_provider(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_Associate_source_diagnostic_acse_service_provider
    ) {
        _cached_decoder_for_Associate_source_diagnostic_acse_service_provider =
            __utils._decodeInteger;
    }
    return _cached_decoder_for_Associate_source_diagnostic_acse_service_provider(
        el
    );
}
export function _encode_Associate_source_diagnostic_acse_service_provider(
    value: Associate_source_diagnostic_acse_service_provider,
    elGetter: __utils.ASN1Encoder<
        Associate_source_diagnostic_acse_service_provider
    >
) {
    if (
        !_cached_encoder_for_Associate_source_diagnostic_acse_service_provider
    ) {
        _cached_encoder_for_Associate_source_diagnostic_acse_service_provider =
            __utils._encodeInteger;
    }
    return _cached_encoder_for_Associate_source_diagnostic_acse_service_provider(
        value,
        elGetter
    );
}

export type Associate_source_diagnostic =
    | {
          acse_service_user: Associate_source_diagnostic_acse_service_user;
      } /* CHOICE_ALT_ROOT */
    | {
          acse_service_provider: Associate_source_diagnostic_acse_service_provider;
      } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_Associate_source_diagnostic: __utils.ASN1Decoder<
    Associate_source_diagnostic
> | null = null;
let _cached_encoder_for_Associate_source_diagnostic: __utils.ASN1Encoder<
    Associate_source_diagnostic
> | null = null;
export function _decode_Associate_source_diagnostic(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Associate_source_diagnostic) {
        _cached_decoder_for_Associate_source_diagnostic = __utils._decode_inextensible_choice<
            Associate_source_diagnostic
        >({
            "CONTEXT 1": [
                "acse_service_user",
                __utils._decode_explicit<
                    Associate_source_diagnostic_acse_service_user
                >(() => _decode_Associate_source_diagnostic_acse_service_user),
            ],
            "CONTEXT 2": [
                "acse_service_provider",
                __utils._decode_explicit<
                    Associate_source_diagnostic_acse_service_provider
                >(
                    () =>
                        _decode_Associate_source_diagnostic_acse_service_provider
                ),
            ],
        });
    }
    return _cached_decoder_for_Associate_source_diagnostic(el);
}
export function _encode_Associate_source_diagnostic(
    value: Associate_source_diagnostic,
    elGetter: __utils.ASN1Encoder<Associate_source_diagnostic>
) {
    if (!_cached_encoder_for_Associate_source_diagnostic) {
        _cached_encoder_for_Associate_source_diagnostic = __utils._encode_choice<
            Associate_source_diagnostic
        >(
            {
                acse_service_user: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_Associate_source_diagnostic_acse_service_user,
                    __utils.BER
                ),
                acse_service_provider: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () =>
                        _encode_Associate_source_diagnostic_acse_service_provider,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Associate_source_diagnostic(value, elGetter);
}

export type Association_informationBindRes = asn1.EXTERNAL[]; // SequenceOfType
let _cached_decoder_for_Association_informationBindRes: __utils.ASN1Decoder<
    Association_informationBindRes
> | null = null;
let _cached_encoder_for_Association_informationBindRes: __utils.ASN1Encoder<
    Association_informationBindRes
> | null = null;
export function _decode_Association_informationBindRes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Association_informationBindRes) {
        _cached_decoder_for_Association_informationBindRes = __utils._decodeSequenceOf<
            asn1.EXTERNAL
        >(() => __utils._decodeExternal);
    }
    return _cached_decoder_for_Association_informationBindRes(el);
}
export function _encode_Association_informationBindRes(
    value: Association_informationBindRes,
    elGetter: __utils.ASN1Encoder<Association_informationBindRes>
) {
    if (!_cached_encoder_for_Association_informationBindRes) {
        _cached_encoder_for_Association_informationBindRes = __utils._encodeSequenceOf<
            asn1.EXTERNAL
        >(() => __utils._encodeExternal, __utils.BER);
    }
    return _cached_encoder_for_Association_informationBindRes(value, elGetter);
}

export class AARE_apdu {
    constructor(
        readonly protocol_version: AARE_apdu_protocol_version | undefined,
        readonly application_context_name: Application_context_name,
        readonly result: Associate_result,
        readonly result_source_diagnostic: Associate_source_diagnostic,
        readonly responding_AP_title: Name | undefined,
        readonly responding_AE_qualifier: RelativeDistinguishedName | undefined,
        readonly responding_AP_invocation_identifier:
            | AP_invocation_identifier
            | undefined,
        readonly responding_AE_invocation_identifier:
            | AE_invocation_identifier
            | undefined,
        readonly implementation_information: Implementation_data | undefined,
        readonly user_information: Association_informationBindRes
    ) {}
    public static get _default_value_for_protocol_version() {
        return new Uint8ClampedArray([asn1.TRUE_BIT]);
    }
}
export const _root_component_type_list_1_spec_for_AARE_apdu: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "protocol-version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "application-context-name",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result-source-diagnostic",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "responding-AP-title",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "responding-AE-qualifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "responding-AP-invocation-identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "responding-AE-invocation-identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "implementation-information",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "user-information",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AARE_apdu: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AARE_apdu: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AARE_apdu: __utils.ASN1Decoder<AARE_apdu> | null = null;
let _cached_encoder_for_AARE_apdu: __utils.ASN1Encoder<AARE_apdu> | null = null;
export function _decode_AARE_apdu(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AARE_apdu) {
        _cached_decoder_for_AARE_apdu = __utils._decode_explicit<AARE_apdu>(
            () =>
                function (el: asn1.ASN1Element): AARE_apdu {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let protocol_version: asn1.OPTIONAL<AARE_apdu_protocol_version> =
                        AARE_apdu._default_value_for_protocol_version;
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
                        "protocol-version": (_el: asn1.ASN1Element): void => {
                            protocol_version = __utils._decode_explicit<
                                AARE_apdu_protocol_version
                            >(() => _decode_AARE_apdu_protocol_version)(_el);
                        },
                        "application-context-name": (
                            _el: asn1.ASN1Element
                        ): void => {
                            application_context_name = __utils._decode_explicit<
                                Application_context_name
                            >(() => _decode_Application_context_name)(_el);
                        },
                        result: (_el: asn1.ASN1Element): void => {
                            result = __utils._decode_explicit<Associate_result>(
                                () => _decode_Associate_result
                            )(_el);
                        },
                        "result-source-diagnostic": (
                            _el: asn1.ASN1Element
                        ): void => {
                            result_source_diagnostic = __utils._decode_explicit<
                                Associate_source_diagnostic
                            >(() => _decode_Associate_source_diagnostic)(_el);
                        },
                        "responding-AP-title": (
                            _el: asn1.ASN1Element
                        ): void => {
                            responding_AP_title = __utils._decode_explicit<
                                Name
                            >(() => _decode_Name)(_el);
                        },
                        "responding-AE-qualifier": (
                            _el: asn1.ASN1Element
                        ): void => {
                            responding_AE_qualifier = __utils._decode_explicit<
                                RelativeDistinguishedName
                            >(() => _decode_RelativeDistinguishedName)(_el);
                        },
                        "responding-AP-invocation-identifier": (
                            _el: asn1.ASN1Element
                        ): void => {
                            responding_AP_invocation_identifier = __utils._decode_explicit<
                                AP_invocation_identifier
                            >(() => _decode_AP_invocation_identifier)(_el);
                        },
                        "responding-AE-invocation-identifier": (
                            _el: asn1.ASN1Element
                        ): void => {
                            responding_AE_invocation_identifier = __utils._decode_explicit<
                                AE_invocation_identifier
                            >(() => _decode_AE_invocation_identifier)(_el);
                        },
                        "implementation-information": (
                            _el: asn1.ASN1Element
                        ): void => {
                            implementation_information = __utils._decode_explicit<
                                Implementation_data
                            >(() => _decode_Implementation_data)(_el);
                        },
                        "user-information": (_el: asn1.ASN1Element): void => {
                            user_information = __utils._decode_explicit<
                                Association_informationBindRes
                            >(() => _decode_Association_informationBindRes)(
                                _el
                            );
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_AARE_apdu,
                        _extension_additions_list_spec_for_AARE_apdu,
                        _root_component_type_list_2_spec_for_AARE_apdu,
                        undefined
                    );
                    return new AARE_apdu(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ protocol_version,
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
                }
        );
    }
    return _cached_decoder_for_AARE_apdu(el);
}
export function _encode_AARE_apdu(
    value: AARE_apdu,
    elGetter: __utils.ASN1Encoder<AARE_apdu>
) {
    if (!_cached_encoder_for_AARE_apdu) {
        _cached_encoder_for_AARE_apdu = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            1,
            () =>
                function (
                    value: AARE_apdu,
                    elGetter: __utils.ASN1Encoder<AARE_apdu>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* IF_DEFAULT */ value.protocol_version ===
                                    undefined ||
                                __utils.deepEq(
                                    value.protocol_version,
                                    AARE_apdu._default_value_for_protocol_version
                                )
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          0,
                                          () =>
                                              _encode_AARE_apdu_protocol_version,
                                          __utils.BER
                                      )(value.protocol_version, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    1,
                                    () => _encode_Application_context_name,
                                    __utils.BER
                                )(value.application_context_name, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    2,
                                    () => _encode_Associate_result,
                                    __utils.BER
                                )(value.result, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    3,
                                    () => _encode_Associate_source_diagnostic,
                                    __utils.BER
                                )(value.result_source_diagnostic, __utils.BER),
                                /* IF_ABSENT  */ value.responding_AP_title ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          4,
                                          () => _encode_Name,
                                          __utils.BER
                                      )(value.responding_AP_title, __utils.BER),
                                /* IF_ABSENT  */ value.responding_AE_qualifier ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          5,
                                          () =>
                                              _encode_RelativeDistinguishedName,
                                          __utils.BER
                                      )(
                                          value.responding_AE_qualifier,
                                          __utils.BER
                                      ),
                                /* IF_ABSENT  */ value.responding_AP_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          6,
                                          () =>
                                              _encode_AP_invocation_identifier,
                                          __utils.BER
                                      )(
                                          value.responding_AP_invocation_identifier,
                                          __utils.BER
                                      ),
                                /* IF_ABSENT  */ value.responding_AE_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          7,
                                          () =>
                                              _encode_AE_invocation_identifier,
                                          __utils.BER
                                      )(
                                          value.responding_AE_invocation_identifier,
                                          __utils.BER
                                      ),
                                /* IF_ABSENT  */ value.implementation_information ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          29,
                                          () => _encode_Implementation_data,
                                          __utils.BER
                                      )(
                                          value.implementation_information,
                                          __utils.BER
                                      ),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    30,
                                    () =>
                                        _encode_Association_informationBindRes,
                                    __utils.BER
                                )(value.user_information, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_AARE_apdu(value, elGetter);
}

export type TheOsiBindRes = asn1.ASN1Element; // ObjectClassFieldType
let _cached_decoder_for_TheOsiBindRes: __utils.ASN1Decoder<
    TheOsiBindRes
> | null = null;
let _cached_encoder_for_TheOsiBindRes: __utils.ASN1Encoder<
    TheOsiBindRes
> | null = null;
export function _decode_TheOsiBindRes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TheOsiBindRes) {
        _cached_decoder_for_TheOsiBindRes = __utils._decode_explicit<
            TheOsiBindRes
        >(() => __utils._decodeAny);
    }
    return _cached_decoder_for_TheOsiBindRes(el);
}
export function _encode_TheOsiBindRes(
    value: TheOsiBindRes,
    elGetter: __utils.ASN1Encoder<TheOsiBindRes>
) {
    if (!_cached_encoder_for_TheOsiBindRes) {
        _cached_encoder_for_TheOsiBindRes = __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            17,
            () => __utils._encodeAny,
            __utils.BER
        );
    }
    return _cached_encoder_for_TheOsiBindRes(value, elGetter);
}

export type OsiBindError_normal_mode_parameters_protocol_version = asn1.BIT_STRING;
export const OsiBindError_normal_mode_parameters_protocol_version_version_1: number = 0; /* LONG_NAMED_BIT */
export const version_1: number = OsiBindError_normal_mode_parameters_protocol_version_version_1; /* SHORT_NAMED_BIT */
let _cached_decoder_for_OsiBindError_normal_mode_parameters_protocol_version: __utils.ASN1Decoder<
    OsiBindError_normal_mode_parameters_protocol_version
> | null = null;
let _cached_encoder_for_OsiBindError_normal_mode_parameters_protocol_version: __utils.ASN1Encoder<
    OsiBindError_normal_mode_parameters_protocol_version
> | null = null;
export function _decode_OsiBindError_normal_mode_parameters_protocol_version(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_OsiBindError_normal_mode_parameters_protocol_version
    ) {
        _cached_decoder_for_OsiBindError_normal_mode_parameters_protocol_version =
            __utils._decodeBitString;
    }
    return _cached_decoder_for_OsiBindError_normal_mode_parameters_protocol_version(
        el
    );
}
export function _encode_OsiBindError_normal_mode_parameters_protocol_version(
    value: OsiBindError_normal_mode_parameters_protocol_version,
    elGetter: __utils.ASN1Encoder<
        OsiBindError_normal_mode_parameters_protocol_version
    >
) {
    if (
        !_cached_encoder_for_OsiBindError_normal_mode_parameters_protocol_version
    ) {
        _cached_encoder_for_OsiBindError_normal_mode_parameters_protocol_version =
            __utils._encodeBitString;
    }
    return _cached_encoder_for_OsiBindError_normal_mode_parameters_protocol_version(
        value,
        elGetter
    );
}

export type Result_list_Item_provider_reason = asn1.INTEGER;
export const Result_list_Item_provider_reason_reason_not_specified: Result_list_Item_provider_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
export const Result_list_Item_provider_reason_abstract_syntax_not_supported: Result_list_Item_provider_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
export const Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported: Result_list_Item_provider_reason = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Result_list_Item_provider_reason: __utils.ASN1Decoder<
    Result_list_Item_provider_reason
> | null = null;
let _cached_encoder_for_Result_list_Item_provider_reason: __utils.ASN1Encoder<
    Result_list_Item_provider_reason
> | null = null;
export function _decode_Result_list_Item_provider_reason(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Result_list_Item_provider_reason) {
        _cached_decoder_for_Result_list_Item_provider_reason =
            __utils._decodeInteger;
    }
    return _cached_decoder_for_Result_list_Item_provider_reason(el);
}
export function _encode_Result_list_Item_provider_reason(
    value: Result_list_Item_provider_reason,
    elGetter: __utils.ASN1Encoder<Result_list_Item_provider_reason>
) {
    if (!_cached_encoder_for_Result_list_Item_provider_reason) {
        _cached_encoder_for_Result_list_Item_provider_reason =
            __utils._encodeInteger;
    }
    return _cached_encoder_for_Result_list_Item_provider_reason(
        value,
        elGetter
    );
}

export class Result_list_Item {
    constructor(
        readonly result: Result,
        readonly transfer_syntax_name: Transfer_syntax_name | undefined,
        readonly provider_reason: Result_list_Item_provider_reason | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_Result_list_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "result",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "transfer-syntax-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "provider-reason",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Result_list_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Result_list_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Result_list_Item: __utils.ASN1Decoder<
    Result_list_Item
> | null = null;
let _cached_encoder_for_Result_list_Item: __utils.ASN1Encoder<
    Result_list_Item
> | null = null;
export function _decode_Result_list_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Result_list_Item) {
        _cached_decoder_for_Result_list_Item = function (
            el: asn1.ASN1Element
        ): Result_list_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let result!: Result;
            let transfer_syntax_name: asn1.OPTIONAL<Transfer_syntax_name>;
            let provider_reason: asn1.OPTIONAL<Result_list_Item_provider_reason>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                result: (_el: asn1.ASN1Element): void => {
                    result = __utils._decode_explicit<Result>(
                        () => _decode_Result
                    )(_el);
                },
                "transfer-syntax-name": (_el: asn1.ASN1Element): void => {
                    transfer_syntax_name = __utils._decode_explicit<
                        Transfer_syntax_name
                    >(() => _decode_Transfer_syntax_name)(_el);
                },
                "provider-reason": (_el: asn1.ASN1Element): void => {
                    provider_reason = __utils._decode_explicit<
                        Result_list_Item_provider_reason
                    >(() => _decode_Result_list_Item_provider_reason)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Result_list_Item,
                _extension_additions_list_spec_for_Result_list_Item,
                _root_component_type_list_2_spec_for_Result_list_Item,
                undefined
            );
            return new Result_list_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ result,
                transfer_syntax_name,
                provider_reason
            );
        };
    }
    return _cached_decoder_for_Result_list_Item(el);
}
export function _encode_Result_list_Item(
    value: Result_list_Item,
    elGetter: __utils.ASN1Encoder<Result_list_Item>
) {
    if (!_cached_encoder_for_Result_list_Item) {
        _cached_encoder_for_Result_list_Item = function (
            value: Result_list_Item,
            elGetter: __utils.ASN1Encoder<Result_list_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Result,
                            __utils.BER
                        )(value.result, __utils.BER),
                        /* IF_ABSENT  */ value.transfer_syntax_name ===
                        undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_Transfer_syntax_name,
                                  __utils.BER
                              )(value.transfer_syntax_name, __utils.BER),
                        /* IF_ABSENT  */ value.provider_reason === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () =>
                                      _encode_Result_list_Item_provider_reason,
                                  __utils.BER
                              )(value.provider_reason, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Result_list_Item(value, elGetter);
}

export type Result_list = Result_list_Item[]; // SequenceOfType
let _cached_decoder_for_Result_list: __utils.ASN1Decoder<
    Result_list
> | null = null;
let _cached_encoder_for_Result_list: __utils.ASN1Encoder<
    Result_list
> | null = null;
export function _decode_Result_list(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Result_list) {
        _cached_decoder_for_Result_list = __utils._decodeSequenceOf<
            Result_list_Item
        >(() => _decode_Result_list_Item);
    }
    return _cached_decoder_for_Result_list(el);
}
export function _encode_Result_list(
    value: Result_list,
    elGetter: __utils.ASN1Encoder<Result_list>
) {
    if (!_cached_encoder_for_Result_list) {
        _cached_encoder_for_Result_list = __utils._encodeSequenceOf<
            Result_list_Item
        >(() => _encode_Result_list_Item, __utils.BER);
    }
    return _cached_encoder_for_Result_list(value, elGetter);
}

export type Provider_reason = asn1.INTEGER;
export const Provider_reason_reason_not_specified: Provider_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
export const Provider_reason_temporary_congestion: Provider_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
export const Provider_reason_local_limit_exceeded: Provider_reason = 2; /* LONG_NAMED_INTEGER_VALUE */
export const Provider_reason_called_presentation_address_unknown: Provider_reason = 3; /* LONG_NAMED_INTEGER_VALUE */
export const Provider_reason_protocol_version_not_supported: Provider_reason = 4; /* LONG_NAMED_INTEGER_VALUE */
export const Provider_reason_default_context_not_supported: Provider_reason = 5; /* LONG_NAMED_INTEGER_VALUE */
export const Provider_reason_user_data_not_readable: Provider_reason = 6; /* LONG_NAMED_INTEGER_VALUE */
export const Provider_reason_no_PSAP_available: Provider_reason = 7; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Provider_reason: __utils.ASN1Decoder<
    Provider_reason
> | null = null;
let _cached_encoder_for_Provider_reason: __utils.ASN1Encoder<
    Provider_reason
> | null = null;
export function _decode_Provider_reason(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Provider_reason) {
        _cached_decoder_for_Provider_reason = __utils._decodeInteger;
    }
    return _cached_decoder_for_Provider_reason(el);
}
export function _encode_Provider_reason(
    value: Provider_reason,
    elGetter: __utils.ASN1Encoder<Provider_reason>
) {
    if (!_cached_encoder_for_Provider_reason) {
        _cached_encoder_for_Provider_reason = __utils._encodeInteger;
    }
    return _cached_encoder_for_Provider_reason(value, elGetter);
}

export type OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: asn1.ASN1Element;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: __utils.ASN1Decoder<
    OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
let _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: __utils.ASN1Encoder<
    OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
export function _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._decode_inextensible_choice<
            OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >({
            "CONTEXT 0": [
                "single_ASN1_type",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        el
    );
}
export function _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    value: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
    elGetter: __utils.ASN1Encoder<
        OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    >
) {
    if (
        !_cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._encode_choice<
            OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >(
            {
                single_ASN1_type: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}

export class OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item {
    constructor(
        readonly transfer_syntax_name: Transfer_syntax_name | undefined,
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly presentation_data_values: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {}
}
export const _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "transfer-syntax-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "presentation-context-identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "presentation-data-values",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ASN1Decoder<
    OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
let _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ASN1Encoder<
    OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
export function _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            el: asn1.ASN1Element
        ): OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let transfer_syntax_name: asn1.OPTIONAL<Transfer_syntax_name>;
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "transfer-syntax-name": (_el: asn1.ASN1Element): void => {
                    transfer_syntax_name = _decode_Transfer_syntax_name(_el);
                },
                "presentation-context-identifier": (
                    _el: asn1.ASN1Element
                ): void => {
                    presentation_context_identifier = _decode_Presentation_context_identifier(
                        _el
                    );
                },
                "presentation-data-values": (_el: asn1.ASN1Element): void => {
                    presentation_data_values = _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
                undefined
            );
            return new OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ transfer_syntax_name,
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
        el
    );
}
export function _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
    value: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
    elGetter: __utils.ASN1Encoder<
        OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
    >
) {
    if (
        !_cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            value: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
            elGetter: __utils.ASN1Encoder<
                OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
            >
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.transfer_syntax_name ===
                        undefined
                            ? undefined
                            : _encode_Transfer_syntax_name(
                                  value.transfer_syntax_name,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
        value,
        elGetter
    );
}

export type OsiBindError_normal_mode_parameters_user_data = {
    fully_encoded_data: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data: __utils.ASN1Decoder<
    OsiBindError_normal_mode_parameters_user_data
> | null = null;
let _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data: __utils.ASN1Encoder<
    OsiBindError_normal_mode_parameters_user_data
> | null = null;
export function _decode_OsiBindError_normal_mode_parameters_user_data(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_OsiBindError_normal_mode_parameters_user_data) {
        _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data = __utils._decode_inextensible_choice<
            OsiBindError_normal_mode_parameters_user_data
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                __utils._decode_explicit<
                    OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item[]
                >(() =>
                    __utils._decodeSequenceOf<
                        OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
                    >(
                        () =>
                            _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data(
        el
    );
}
export function _encode_OsiBindError_normal_mode_parameters_user_data(
    value: OsiBindError_normal_mode_parameters_user_data,
    elGetter: __utils.ASN1Encoder<OsiBindError_normal_mode_parameters_user_data>
) {
    if (!_cached_encoder_for_OsiBindError_normal_mode_parameters_user_data) {
        _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data = __utils._encode_choice<
            OsiBindError_normal_mode_parameters_user_data
        >(
            {
                fully_encoded_data: __utils._encode_explicit(
                    asn1.ASN1TagClass.application,
                    1,
                    () =>
                        __utils._encodeSequenceOf<
                            OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
                        >(
                            () =>
                                _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
                            __utils.BER
                        ),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data(
        value,
        elGetter
    );
}

export class OsiBindError_normal_mode_parameters {
    constructor(
        readonly protocol_version:
            | OsiBindError_normal_mode_parameters_protocol_version
            | undefined,
        readonly responding_presentation_selector:
            | Presentation_selector
            | undefined,
        readonly presentation_context_definition_result_list:
            | Result_list
            | undefined,
        readonly provider_reason: Provider_reason | undefined,
        readonly user_data:
            | OsiBindError_normal_mode_parameters_user_data
            | undefined
    ) {}
    public static get _default_value_for_protocol_version() {
        return new Uint8ClampedArray([asn1.TRUE_BIT]);
    }
}
export const _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "protocol-version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "responding-presentation-selector",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "presentation-context-definition-result-list",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "provider-reason",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "user-data",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiBindError_normal_mode_parameters: __utils.ASN1Decoder<
    OsiBindError_normal_mode_parameters
> | null = null;
let _cached_encoder_for_OsiBindError_normal_mode_parameters: __utils.ASN1Encoder<
    OsiBindError_normal_mode_parameters
> | null = null;
export function _decode_OsiBindError_normal_mode_parameters(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_OsiBindError_normal_mode_parameters) {
        _cached_decoder_for_OsiBindError_normal_mode_parameters = function (
            el: asn1.ASN1Element
        ): OsiBindError_normal_mode_parameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocol_version: asn1.OPTIONAL<OsiBindError_normal_mode_parameters_protocol_version> =
                OsiBindError_normal_mode_parameters._default_value_for_protocol_version;
            let responding_presentation_selector: asn1.OPTIONAL<Presentation_selector>;
            let presentation_context_definition_result_list: asn1.OPTIONAL<Result_list>;
            let provider_reason: asn1.OPTIONAL<Provider_reason>;
            let user_data: asn1.OPTIONAL<OsiBindError_normal_mode_parameters_user_data>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "protocol-version": (_el: asn1.ASN1Element): void => {
                    protocol_version = __utils._decode_explicit<
                        OsiBindError_normal_mode_parameters_protocol_version
                    >(
                        () =>
                            _decode_OsiBindError_normal_mode_parameters_protocol_version
                    )(_el);
                },
                "responding-presentation-selector": (
                    _el: asn1.ASN1Element
                ): void => {
                    responding_presentation_selector = __utils._decode_explicit<
                        Presentation_selector
                    >(() => _decode_Presentation_selector)(_el);
                },
                "presentation-context-definition-result-list": (
                    _el: asn1.ASN1Element
                ): void => {
                    presentation_context_definition_result_list = __utils._decode_explicit<
                        Result_list
                    >(() => _decode_Result_list)(_el);
                },
                "provider-reason": (_el: asn1.ASN1Element): void => {
                    provider_reason = __utils._decode_explicit<Provider_reason>(
                        () => _decode_Provider_reason
                    )(_el);
                },
                "user-data": (_el: asn1.ASN1Element): void => {
                    user_data = _decode_OsiBindError_normal_mode_parameters_user_data(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters,
                _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters,
                _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters,
                undefined
            );
            return new OsiBindError_normal_mode_parameters(
                /* SEQUENCE_CONSTRUCTOR_CALL */ protocol_version,
                responding_presentation_selector,
                presentation_context_definition_result_list,
                provider_reason,
                user_data
            );
        };
    }
    return _cached_decoder_for_OsiBindError_normal_mode_parameters(el);
}
export function _encode_OsiBindError_normal_mode_parameters(
    value: OsiBindError_normal_mode_parameters,
    elGetter: __utils.ASN1Encoder<OsiBindError_normal_mode_parameters>
) {
    if (!_cached_encoder_for_OsiBindError_normal_mode_parameters) {
        _cached_encoder_for_OsiBindError_normal_mode_parameters = function (
            value: OsiBindError_normal_mode_parameters,
            elGetter: __utils.ASN1Encoder<OsiBindError_normal_mode_parameters>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.protocol_version === undefined ||
                        __utils.deepEq(
                            value.protocol_version,
                            OsiBindError_normal_mode_parameters._default_value_for_protocol_version
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () =>
                                      _encode_OsiBindError_normal_mode_parameters_protocol_version,
                                  __utils.BER
                              )(value.protocol_version, __utils.BER),
                        /* IF_ABSENT  */ value.responding_presentation_selector ===
                        undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => _encode_Presentation_selector,
                                  __utils.BER
                              )(
                                  value.responding_presentation_selector,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.presentation_context_definition_result_list ===
                        undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  5,
                                  () => _encode_Result_list,
                                  __utils.BER
                              )(
                                  value.presentation_context_definition_result_list,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.provider_reason === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  10,
                                  () => _encode_Provider_reason,
                                  __utils.BER
                              )(value.provider_reason, __utils.BER),
                        /* IF_ABSENT  */ value.user_data === undefined
                            ? undefined
                            : _encode_OsiBindError_normal_mode_parameters_user_data(
                                  value.user_data,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindError_normal_mode_parameters(
        value,
        elGetter
    );
}

export type OsiBindError = {
    normal_mode_parameters: OsiBindError_normal_mode_parameters;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiBindError: __utils.ASN1Decoder<
    OsiBindError
> | null = null;
let _cached_encoder_for_OsiBindError: __utils.ASN1Encoder<
    OsiBindError
> | null = null;
export function _decode_OsiBindError(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiBindError) {
        _cached_decoder_for_OsiBindError = __utils._decode_inextensible_choice<
            OsiBindError
        >({
            "UNIVERSAL 16": [
                "normal_mode_parameters",
                _decode_OsiBindError_normal_mode_parameters,
            ],
        });
    }
    return _cached_decoder_for_OsiBindError(el);
}
export function _encode_OsiBindError(
    value: OsiBindError,
    elGetter: __utils.ASN1Encoder<OsiBindError>
) {
    if (!_cached_encoder_for_OsiBindError) {
        _cached_encoder_for_OsiBindError = __utils._encode_choice<OsiBindError>(
            {
                normal_mode_parameters: _encode_OsiBindError_normal_mode_parameters,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiBindError(value, elGetter);
}

export type AAREerr_apdu_protocol_version = asn1.BIT_STRING;
export const AAREerr_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */
let _cached_decoder_for_AAREerr_apdu_protocol_version: __utils.ASN1Decoder<
    AAREerr_apdu_protocol_version
> | null = null;
let _cached_encoder_for_AAREerr_apdu_protocol_version: __utils.ASN1Encoder<
    AAREerr_apdu_protocol_version
> | null = null;
export function _decode_AAREerr_apdu_protocol_version(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AAREerr_apdu_protocol_version) {
        _cached_decoder_for_AAREerr_apdu_protocol_version =
            __utils._decodeBitString;
    }
    return _cached_decoder_for_AAREerr_apdu_protocol_version(el);
}
export function _encode_AAREerr_apdu_protocol_version(
    value: AAREerr_apdu_protocol_version,
    elGetter: __utils.ASN1Encoder<AAREerr_apdu_protocol_version>
) {
    if (!_cached_encoder_for_AAREerr_apdu_protocol_version) {
        _cached_encoder_for_AAREerr_apdu_protocol_version =
            __utils._encodeBitString;
    }
    return _cached_encoder_for_AAREerr_apdu_protocol_version(value, elGetter);
}

export type Association_informationBindErr = asn1.EXTERNAL[]; // SequenceOfType
let _cached_decoder_for_Association_informationBindErr: __utils.ASN1Decoder<
    Association_informationBindErr
> | null = null;
let _cached_encoder_for_Association_informationBindErr: __utils.ASN1Encoder<
    Association_informationBindErr
> | null = null;
export function _decode_Association_informationBindErr(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Association_informationBindErr) {
        _cached_decoder_for_Association_informationBindErr = __utils._decodeSequenceOf<
            asn1.EXTERNAL
        >(() => __utils._decodeExternal);
    }
    return _cached_decoder_for_Association_informationBindErr(el);
}
export function _encode_Association_informationBindErr(
    value: Association_informationBindErr,
    elGetter: __utils.ASN1Encoder<Association_informationBindErr>
) {
    if (!_cached_encoder_for_Association_informationBindErr) {
        _cached_encoder_for_Association_informationBindErr = __utils._encodeSequenceOf<
            asn1.EXTERNAL
        >(() => __utils._encodeExternal, __utils.BER);
    }
    return _cached_encoder_for_Association_informationBindErr(value, elGetter);
}

export class AAREerr_apdu {
    constructor(
        readonly protocol_version: AAREerr_apdu_protocol_version | undefined,
        readonly application_context_name: Application_context_name,
        readonly result: Associate_result,
        readonly result_source_diagnostic: Associate_source_diagnostic,
        readonly responding_AP_title: Name | undefined,
        readonly responding_AE_qualifier: RelativeDistinguishedName | undefined,
        readonly responding_AP_invocation_identifier:
            | AP_invocation_identifier
            | undefined,
        readonly responding_AE_invocation_identifier:
            | AE_invocation_identifier
            | undefined,
        readonly implementation_information: Implementation_data | undefined,
        readonly user_information: Association_informationBindErr | undefined
    ) {}
    public static get _default_value_for_protocol_version() {
        return new Uint8ClampedArray([asn1.TRUE_BIT]);
    }
}
export const _root_component_type_list_1_spec_for_AAREerr_apdu: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "protocol-version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "application-context-name",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result-source-diagnostic",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "responding-AP-title",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "responding-AE-qualifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "responding-AP-invocation-identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "responding-AE-invocation-identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "implementation-information",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "user-information",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AAREerr_apdu: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AAREerr_apdu: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AAREerr_apdu: __utils.ASN1Decoder<
    AAREerr_apdu
> | null = null;
let _cached_encoder_for_AAREerr_apdu: __utils.ASN1Encoder<
    AAREerr_apdu
> | null = null;
export function _decode_AAREerr_apdu(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AAREerr_apdu) {
        _cached_decoder_for_AAREerr_apdu = __utils._decode_explicit<
            AAREerr_apdu
        >(
            () =>
                function (el: asn1.ASN1Element): AAREerr_apdu {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let protocol_version: asn1.OPTIONAL<AAREerr_apdu_protocol_version> =
                        AAREerr_apdu._default_value_for_protocol_version;
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
                        "protocol-version": (_el: asn1.ASN1Element): void => {
                            protocol_version = __utils._decode_explicit<
                                AAREerr_apdu_protocol_version
                            >(() => _decode_AAREerr_apdu_protocol_version)(_el);
                        },
                        "application-context-name": (
                            _el: asn1.ASN1Element
                        ): void => {
                            application_context_name = __utils._decode_explicit<
                                Application_context_name
                            >(() => _decode_Application_context_name)(_el);
                        },
                        result: (_el: asn1.ASN1Element): void => {
                            result = __utils._decode_explicit<Associate_result>(
                                () => _decode_Associate_result
                            )(_el);
                        },
                        "result-source-diagnostic": (
                            _el: asn1.ASN1Element
                        ): void => {
                            result_source_diagnostic = __utils._decode_explicit<
                                Associate_source_diagnostic
                            >(() => _decode_Associate_source_diagnostic)(_el);
                        },
                        "responding-AP-title": (
                            _el: asn1.ASN1Element
                        ): void => {
                            responding_AP_title = __utils._decode_explicit<
                                Name
                            >(() => _decode_Name)(_el);
                        },
                        "responding-AE-qualifier": (
                            _el: asn1.ASN1Element
                        ): void => {
                            responding_AE_qualifier = __utils._decode_explicit<
                                RelativeDistinguishedName
                            >(() => _decode_RelativeDistinguishedName)(_el);
                        },
                        "responding-AP-invocation-identifier": (
                            _el: asn1.ASN1Element
                        ): void => {
                            responding_AP_invocation_identifier = __utils._decode_explicit<
                                AP_invocation_identifier
                            >(() => _decode_AP_invocation_identifier)(_el);
                        },
                        "responding-AE-invocation-identifier": (
                            _el: asn1.ASN1Element
                        ): void => {
                            responding_AE_invocation_identifier = __utils._decode_explicit<
                                AE_invocation_identifier
                            >(() => _decode_AE_invocation_identifier)(_el);
                        },
                        "implementation-information": (
                            _el: asn1.ASN1Element
                        ): void => {
                            implementation_information = __utils._decode_explicit<
                                Implementation_data
                            >(() => _decode_Implementation_data)(_el);
                        },
                        "user-information": (_el: asn1.ASN1Element): void => {
                            user_information = __utils._decode_explicit<
                                Association_informationBindErr
                            >(() => _decode_Association_informationBindErr)(
                                _el
                            );
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_AAREerr_apdu,
                        _extension_additions_list_spec_for_AAREerr_apdu,
                        _root_component_type_list_2_spec_for_AAREerr_apdu,
                        undefined
                    );
                    return new AAREerr_apdu(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ protocol_version,
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
                }
        );
    }
    return _cached_decoder_for_AAREerr_apdu(el);
}
export function _encode_AAREerr_apdu(
    value: AAREerr_apdu,
    elGetter: __utils.ASN1Encoder<AAREerr_apdu>
) {
    if (!_cached_encoder_for_AAREerr_apdu) {
        _cached_encoder_for_AAREerr_apdu = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            1,
            () =>
                function (
                    value: AAREerr_apdu,
                    elGetter: __utils.ASN1Encoder<AAREerr_apdu>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* IF_DEFAULT */ value.protocol_version ===
                                    undefined ||
                                __utils.deepEq(
                                    value.protocol_version,
                                    AAREerr_apdu._default_value_for_protocol_version
                                )
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          0,
                                          () =>
                                              _encode_AAREerr_apdu_protocol_version,
                                          __utils.BER
                                      )(value.protocol_version, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    1,
                                    () => _encode_Application_context_name,
                                    __utils.BER
                                )(value.application_context_name, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    2,
                                    () => _encode_Associate_result,
                                    __utils.BER
                                )(value.result, __utils.BER),
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    3,
                                    () => _encode_Associate_source_diagnostic,
                                    __utils.BER
                                )(value.result_source_diagnostic, __utils.BER),
                                /* IF_ABSENT  */ value.responding_AP_title ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          4,
                                          () => _encode_Name,
                                          __utils.BER
                                      )(value.responding_AP_title, __utils.BER),
                                /* IF_ABSENT  */ value.responding_AE_qualifier ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          5,
                                          () =>
                                              _encode_RelativeDistinguishedName,
                                          __utils.BER
                                      )(
                                          value.responding_AE_qualifier,
                                          __utils.BER
                                      ),
                                /* IF_ABSENT  */ value.responding_AP_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          6,
                                          () =>
                                              _encode_AP_invocation_identifier,
                                          __utils.BER
                                      )(
                                          value.responding_AP_invocation_identifier,
                                          __utils.BER
                                      ),
                                /* IF_ABSENT  */ value.responding_AE_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          7,
                                          () =>
                                              _encode_AE_invocation_identifier,
                                          __utils.BER
                                      )(
                                          value.responding_AE_invocation_identifier,
                                          __utils.BER
                                      ),
                                /* IF_ABSENT  */ value.implementation_information ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          29,
                                          () => _encode_Implementation_data,
                                          __utils.BER
                                      )(
                                          value.implementation_information,
                                          __utils.BER
                                      ),
                                /* IF_ABSENT  */ value.user_information ===
                                undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          30,
                                          () =>
                                              _encode_Association_informationBindErr,
                                          __utils.BER
                                      )(value.user_information, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_AAREerr_apdu(value, elGetter);
}

export type TheOsiBindErr = asn1.ASN1Element; // ObjectClassFieldType
let _cached_decoder_for_TheOsiBindErr: __utils.ASN1Decoder<
    TheOsiBindErr
> | null = null;
let _cached_encoder_for_TheOsiBindErr: __utils.ASN1Encoder<
    TheOsiBindErr
> | null = null;
export function _decode_TheOsiBindErr(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TheOsiBindErr) {
        _cached_decoder_for_TheOsiBindErr = __utils._decode_explicit<
            TheOsiBindErr
        >(() => __utils._decodeAny);
    }
    return _cached_decoder_for_TheOsiBindErr(el);
}
export function _encode_TheOsiBindErr(
    value: TheOsiBindErr,
    elGetter: __utils.ASN1Encoder<TheOsiBindErr>
) {
    if (!_cached_encoder_for_TheOsiBindErr) {
        _cached_encoder_for_TheOsiBindErr = __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            18,
            () => __utils._encodeAny,
            __utils.BER
        );
    }
    return _cached_encoder_for_TheOsiBindErr(value, elGetter);
}

export type OsiUnbind_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: asn1.ASN1Element;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values: __utils.ASN1Decoder<
    OsiUnbind_fully_encoded_data_Item_presentation_data_values
> | null = null;
let _cached_encoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values: __utils.ASN1Encoder<
    OsiUnbind_fully_encoded_data_Item_presentation_data_values
> | null = null;
export function _decode_OsiUnbind_fully_encoded_data_Item_presentation_data_values(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values = __utils._decode_inextensible_choice<
            OsiUnbind_fully_encoded_data_Item_presentation_data_values
        >({
            "CONTEXT 0": [
                "single_ASN1_type",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values(
        el
    );
}
export function _encode_OsiUnbind_fully_encoded_data_Item_presentation_data_values(
    value: OsiUnbind_fully_encoded_data_Item_presentation_data_values,
    elGetter: __utils.ASN1Encoder<
        OsiUnbind_fully_encoded_data_Item_presentation_data_values
    >
) {
    if (
        !_cached_encoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values = __utils._encode_choice<
            OsiUnbind_fully_encoded_data_Item_presentation_data_values
        >(
            {
                single_ASN1_type: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}

export class OsiUnbind_fully_encoded_data_Item {
    constructor(
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly presentation_data_values: OsiUnbind_fully_encoded_data_Item_presentation_data_values
    ) {}
}
export const _root_component_type_list_1_spec_for_OsiUnbind_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "presentation-context-identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "presentation-data-values",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiUnbind_fully_encoded_data_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiUnbind_fully_encoded_data_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiUnbind_fully_encoded_data_Item: __utils.ASN1Decoder<
    OsiUnbind_fully_encoded_data_Item
> | null = null;
let _cached_encoder_for_OsiUnbind_fully_encoded_data_Item: __utils.ASN1Encoder<
    OsiUnbind_fully_encoded_data_Item
> | null = null;
export function _decode_OsiUnbind_fully_encoded_data_Item(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_OsiUnbind_fully_encoded_data_Item) {
        _cached_decoder_for_OsiUnbind_fully_encoded_data_Item = function (
            el: asn1.ASN1Element
        ): OsiUnbind_fully_encoded_data_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "OsiUnbind-fully-encoded-data-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "presentation-context-identifier";
            sequence[1].name = "presentation-data-values";
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiUnbind_fully_encoded_data_Item_presentation_data_values;
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            presentation_data_values = _decode_OsiUnbind_fully_encoded_data_Item_presentation_data_values(
                sequence[1]
            );
            // TODO: Validate values.
            return new OsiUnbind_fully_encoded_data_Item(
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiUnbind_fully_encoded_data_Item(el);
}
export function _encode_OsiUnbind_fully_encoded_data_Item(
    value: OsiUnbind_fully_encoded_data_Item,
    elGetter: __utils.ASN1Encoder<OsiUnbind_fully_encoded_data_Item>
) {
    if (!_cached_encoder_for_OsiUnbind_fully_encoded_data_Item) {
        _cached_encoder_for_OsiUnbind_fully_encoded_data_Item = function (
            value: OsiUnbind_fully_encoded_data_Item,
            elGetter: __utils.ASN1Encoder<OsiUnbind_fully_encoded_data_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_OsiUnbind_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OsiUnbind_fully_encoded_data_Item(
        value,
        elGetter
    );
}

export type OsiUnbind = {
    fully_encoded_data: OsiUnbind_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiUnbind: __utils.ASN1Decoder<OsiUnbind> | null = null;
let _cached_encoder_for_OsiUnbind: __utils.ASN1Encoder<OsiUnbind> | null = null;
export function _decode_OsiUnbind(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiUnbind) {
        _cached_decoder_for_OsiUnbind = __utils._decode_inextensible_choice<
            OsiUnbind
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                __utils._decode_explicit<OsiUnbind_fully_encoded_data_Item[]>(
                    () =>
                        __utils._decodeSequenceOf<
                            OsiUnbind_fully_encoded_data_Item
                        >(() => _decode_OsiUnbind_fully_encoded_data_Item)
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiUnbind(el);
}
export function _encode_OsiUnbind(
    value: OsiUnbind,
    elGetter: __utils.ASN1Encoder<OsiUnbind>
) {
    if (!_cached_encoder_for_OsiUnbind) {
        _cached_encoder_for_OsiUnbind = __utils._encode_choice<OsiUnbind>(
            {
                fully_encoded_data: __utils._encode_explicit(
                    asn1.ASN1TagClass.application,
                    1,
                    () =>
                        __utils._encodeSequenceOf<
                            OsiUnbind_fully_encoded_data_Item
                        >(
                            () => _encode_OsiUnbind_fully_encoded_data_Item,
                            __utils.BER
                        ),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiUnbind(value, elGetter);
}

export type Release_request_reason = asn1.INTEGER;
export const Release_request_reason_normal: Release_request_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Release_request_reason: __utils.ASN1Decoder<
    Release_request_reason
> | null = null;
let _cached_encoder_for_Release_request_reason: __utils.ASN1Encoder<
    Release_request_reason
> | null = null;
export function _decode_Release_request_reason(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Release_request_reason) {
        _cached_decoder_for_Release_request_reason = __utils._decodeInteger;
    }
    return _cached_decoder_for_Release_request_reason(el);
}
export function _encode_Release_request_reason(
    value: Release_request_reason,
    elGetter: __utils.ASN1Encoder<Release_request_reason>
) {
    if (!_cached_encoder_for_Release_request_reason) {
        _cached_encoder_for_Release_request_reason = __utils._encodeInteger;
    }
    return _cached_encoder_for_Release_request_reason(value, elGetter);
}

export class TheOsiUnbind {
    constructor(readonly reason: Release_request_reason | undefined) {}
}
export const _root_component_type_list_1_spec_for_TheOsiUnbind: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "reason",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TheOsiUnbind: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TheOsiUnbind: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TheOsiUnbind: __utils.ASN1Decoder<
    TheOsiUnbind
> | null = null;
let _cached_encoder_for_TheOsiUnbind: __utils.ASN1Encoder<
    TheOsiUnbind
> | null = null;
export function _decode_TheOsiUnbind(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TheOsiUnbind) {
        _cached_decoder_for_TheOsiUnbind = __utils._decode_explicit<
            TheOsiUnbind
        >(
            () =>
                function (el: asn1.ASN1Element): TheOsiUnbind {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let reason: asn1.OPTIONAL<Release_request_reason>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: __utils.DecodingMap = {
                        reason: (_el: asn1.ASN1Element): void => {
                            reason = __utils._decode_explicit<
                                Release_request_reason
                            >(() => _decode_Release_request_reason)(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_TheOsiUnbind,
                        _extension_additions_list_spec_for_TheOsiUnbind,
                        _root_component_type_list_2_spec_for_TheOsiUnbind,
                        undefined
                    );
                    return new TheOsiUnbind(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ reason
                    );
                }
        );
    }
    return _cached_decoder_for_TheOsiUnbind(el);
}
export function _encode_TheOsiUnbind(
    value: TheOsiUnbind,
    elGetter: __utils.ASN1Encoder<TheOsiUnbind>
) {
    if (!_cached_encoder_for_TheOsiUnbind) {
        _cached_encoder_for_TheOsiUnbind = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            2,
            () =>
                function (
                    value: TheOsiUnbind,
                    elGetter: __utils.ASN1Encoder<TheOsiUnbind>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* IF_ABSENT  */ value.reason === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          0,
                                          () => _encode_Release_request_reason,
                                          __utils.BER
                                      )(value.reason, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_TheOsiUnbind(value, elGetter);
}

export type OsiUnbindResult_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: asn1.ASN1Element;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values: __utils.ASN1Decoder<
    OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
> | null = null;
let _cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values: __utils.ASN1Encoder<
    OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
> | null = null;
export function _decode_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values = __utils._decode_inextensible_choice<
            OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
        >({
            "CONTEXT 0": [
                "single_ASN1_type",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values(
        el
    );
}
export function _encode_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values(
    value: OsiUnbindResult_fully_encoded_data_Item_presentation_data_values,
    elGetter: __utils.ASN1Encoder<
        OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
    >
) {
    if (
        !_cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values = __utils._encode_choice<
            OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
        >(
            {
                single_ASN1_type: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}

export class OsiUnbindResult_fully_encoded_data_Item {
    constructor(
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly presentation_data_values: OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
    ) {}
}
export const _root_component_type_list_1_spec_for_OsiUnbindResult_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "presentation-context-identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "presentation-data-values",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiUnbindResult_fully_encoded_data_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiUnbindResult_fully_encoded_data_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item: __utils.ASN1Decoder<
    OsiUnbindResult_fully_encoded_data_Item
> | null = null;
let _cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item: __utils.ASN1Encoder<
    OsiUnbindResult_fully_encoded_data_Item
> | null = null;
export function _decode_OsiUnbindResult_fully_encoded_data_Item(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item) {
        _cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item = function (
            el: asn1.ASN1Element
        ): OsiUnbindResult_fully_encoded_data_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "OsiUnbindResult-fully-encoded-data-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "presentation-context-identifier";
            sequence[1].name = "presentation-data-values";
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiUnbindResult_fully_encoded_data_Item_presentation_data_values;
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            presentation_data_values = _decode_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values(
                sequence[1]
            );
            // TODO: Validate values.
            return new OsiUnbindResult_fully_encoded_data_Item(
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item(el);
}
export function _encode_OsiUnbindResult_fully_encoded_data_Item(
    value: OsiUnbindResult_fully_encoded_data_Item,
    elGetter: __utils.ASN1Encoder<OsiUnbindResult_fully_encoded_data_Item>
) {
    if (!_cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item) {
        _cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item = function (
            value: OsiUnbindResult_fully_encoded_data_Item,
            elGetter: __utils.ASN1Encoder<
                OsiUnbindResult_fully_encoded_data_Item
            >
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item(
        value,
        elGetter
    );
}

export type OsiUnbindResult = {
    fully_encoded_data: OsiUnbindResult_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiUnbindResult: __utils.ASN1Decoder<
    OsiUnbindResult
> | null = null;
let _cached_encoder_for_OsiUnbindResult: __utils.ASN1Encoder<
    OsiUnbindResult
> | null = null;
export function _decode_OsiUnbindResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiUnbindResult) {
        _cached_decoder_for_OsiUnbindResult = __utils._decode_inextensible_choice<
            OsiUnbindResult
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                __utils._decode_explicit<
                    OsiUnbindResult_fully_encoded_data_Item[]
                >(() =>
                    __utils._decodeSequenceOf<
                        OsiUnbindResult_fully_encoded_data_Item
                    >(() => _decode_OsiUnbindResult_fully_encoded_data_Item)
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiUnbindResult(el);
}
export function _encode_OsiUnbindResult(
    value: OsiUnbindResult,
    elGetter: __utils.ASN1Encoder<OsiUnbindResult>
) {
    if (!_cached_encoder_for_OsiUnbindResult) {
        _cached_encoder_for_OsiUnbindResult = __utils._encode_choice<
            OsiUnbindResult
        >(
            {
                fully_encoded_data: __utils._encode_explicit(
                    asn1.ASN1TagClass.application,
                    1,
                    () =>
                        __utils._encodeSequenceOf<
                            OsiUnbindResult_fully_encoded_data_Item
                        >(
                            () =>
                                _encode_OsiUnbindResult_fully_encoded_data_Item,
                            __utils.BER
                        ),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiUnbindResult(value, elGetter);
}

export type Release_response_reason = asn1.INTEGER;
export const Release_response_reason_normal: Release_response_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Release_response_reason: __utils.ASN1Decoder<
    Release_response_reason
> | null = null;
let _cached_encoder_for_Release_response_reason: __utils.ASN1Encoder<
    Release_response_reason
> | null = null;
export function _decode_Release_response_reason(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Release_response_reason) {
        _cached_decoder_for_Release_response_reason = __utils._decodeInteger;
    }
    return _cached_decoder_for_Release_response_reason(el);
}
export function _encode_Release_response_reason(
    value: Release_response_reason,
    elGetter: __utils.ASN1Encoder<Release_response_reason>
) {
    if (!_cached_encoder_for_Release_response_reason) {
        _cached_encoder_for_Release_response_reason = __utils._encodeInteger;
    }
    return _cached_encoder_for_Release_response_reason(value, elGetter);
}

export class TheOsiUnbindRes {
    constructor(readonly reason: Release_response_reason | undefined) {}
}
export const _root_component_type_list_1_spec_for_TheOsiUnbindRes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "reason",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TheOsiUnbindRes: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TheOsiUnbindRes: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TheOsiUnbindRes: __utils.ASN1Decoder<
    TheOsiUnbindRes
> | null = null;
let _cached_encoder_for_TheOsiUnbindRes: __utils.ASN1Encoder<
    TheOsiUnbindRes
> | null = null;
export function _decode_TheOsiUnbindRes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TheOsiUnbindRes) {
        _cached_decoder_for_TheOsiUnbindRes = __utils._decode_explicit<
            TheOsiUnbindRes
        >(
            () =>
                function (el: asn1.ASN1Element): TheOsiUnbindRes {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let reason: asn1.OPTIONAL<Release_response_reason>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: __utils.DecodingMap = {
                        reason: (_el: asn1.ASN1Element): void => {
                            reason = __utils._decode_explicit<
                                Release_response_reason
                            >(() => _decode_Release_response_reason)(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_TheOsiUnbindRes,
                        _extension_additions_list_spec_for_TheOsiUnbindRes,
                        _root_component_type_list_2_spec_for_TheOsiUnbindRes,
                        undefined
                    );
                    return new TheOsiUnbindRes(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ reason
                    );
                }
        );
    }
    return _cached_decoder_for_TheOsiUnbindRes(el);
}
export function _encode_TheOsiUnbindRes(
    value: TheOsiUnbindRes,
    elGetter: __utils.ASN1Encoder<TheOsiUnbindRes>
) {
    if (!_cached_encoder_for_TheOsiUnbindRes) {
        _cached_encoder_for_TheOsiUnbindRes = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            3,
            () =>
                function (
                    value: TheOsiUnbindRes,
                    elGetter: __utils.ASN1Encoder<TheOsiUnbindRes>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* IF_ABSENT  */ value.reason === undefined
                                    ? undefined
                                    : __utils._encode_explicit(
                                          asn1.ASN1TagClass.context,
                                          0,
                                          () => _encode_Release_response_reason,
                                          __utils.BER
                                      )(value.reason, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_TheOsiUnbindRes(value, elGetter);
}

export type OsiOperation_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: asn1.ASN1Element;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values: __utils.ASN1Decoder<
    OsiOperation_fully_encoded_data_Item_presentation_data_values
> | null = null;
let _cached_encoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values: __utils.ASN1Encoder<
    OsiOperation_fully_encoded_data_Item_presentation_data_values
> | null = null;
export function _decode_OsiOperation_fully_encoded_data_Item_presentation_data_values(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values = __utils._decode_inextensible_choice<
            OsiOperation_fully_encoded_data_Item_presentation_data_values
        >({
            "CONTEXT 0": [
                "single_ASN1_type",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values(
        el
    );
}
export function _encode_OsiOperation_fully_encoded_data_Item_presentation_data_values(
    value: OsiOperation_fully_encoded_data_Item_presentation_data_values,
    elGetter: __utils.ASN1Encoder<
        OsiOperation_fully_encoded_data_Item_presentation_data_values
    >
) {
    if (
        !_cached_encoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values = __utils._encode_choice<
            OsiOperation_fully_encoded_data_Item_presentation_data_values
        >(
            {
                single_ASN1_type: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}

export class OsiOperation_fully_encoded_data_Item {
    constructor(
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly presentation_data_values: OsiOperation_fully_encoded_data_Item_presentation_data_values
    ) {}
}
export const _root_component_type_list_1_spec_for_OsiOperation_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "presentation-context-identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "presentation-data-values",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiOperation_fully_encoded_data_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiOperation_fully_encoded_data_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiOperation_fully_encoded_data_Item: __utils.ASN1Decoder<
    OsiOperation_fully_encoded_data_Item
> | null = null;
let _cached_encoder_for_OsiOperation_fully_encoded_data_Item: __utils.ASN1Encoder<
    OsiOperation_fully_encoded_data_Item
> | null = null;
export function _decode_OsiOperation_fully_encoded_data_Item(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_OsiOperation_fully_encoded_data_Item) {
        _cached_decoder_for_OsiOperation_fully_encoded_data_Item = function (
            el: asn1.ASN1Element
        ): OsiOperation_fully_encoded_data_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "OsiOperation-fully-encoded-data-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "presentation-context-identifier";
            sequence[1].name = "presentation-data-values";
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiOperation_fully_encoded_data_Item_presentation_data_values;
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            presentation_data_values = _decode_OsiOperation_fully_encoded_data_Item_presentation_data_values(
                sequence[1]
            );
            // TODO: Validate values.
            return new OsiOperation_fully_encoded_data_Item(
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiOperation_fully_encoded_data_Item(el);
}
export function _encode_OsiOperation_fully_encoded_data_Item(
    value: OsiOperation_fully_encoded_data_Item,
    elGetter: __utils.ASN1Encoder<OsiOperation_fully_encoded_data_Item>
) {
    if (!_cached_encoder_for_OsiOperation_fully_encoded_data_Item) {
        _cached_encoder_for_OsiOperation_fully_encoded_data_Item = function (
            value: OsiOperation_fully_encoded_data_Item,
            elGetter: __utils.ASN1Encoder<OsiOperation_fully_encoded_data_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_OsiOperation_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OsiOperation_fully_encoded_data_Item(
        value,
        elGetter
    );
}

export type OsiOperation = {
    fully_encoded_data: OsiOperation_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiOperation: __utils.ASN1Decoder<
    OsiOperation
> | null = null;
let _cached_encoder_for_OsiOperation: __utils.ASN1Encoder<
    OsiOperation
> | null = null;
export function _decode_OsiOperation(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiOperation) {
        _cached_decoder_for_OsiOperation = __utils._decode_inextensible_choice<
            OsiOperation
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                __utils._decode_explicit<
                    OsiOperation_fully_encoded_data_Item[]
                >(() =>
                    __utils._decodeSequenceOf<
                        OsiOperation_fully_encoded_data_Item
                    >(() => _decode_OsiOperation_fully_encoded_data_Item)
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiOperation(el);
}
export function _encode_OsiOperation(
    value: OsiOperation,
    elGetter: __utils.ASN1Encoder<OsiOperation>
) {
    if (!_cached_encoder_for_OsiOperation) {
        _cached_encoder_for_OsiOperation = __utils._encode_choice<OsiOperation>(
            {
                fully_encoded_data: __utils._encode_explicit(
                    asn1.ASN1TagClass.application,
                    1,
                    () =>
                        __utils._encodeSequenceOf<
                            OsiOperation_fully_encoded_data_Item
                        >(
                            () => _encode_OsiOperation_fully_encoded_data_Item,
                            __utils.BER
                        ),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiOperation(value, elGetter);
}

export class OsiReq {
    constructor(
        readonly invokeId: InvokeId,
        readonly opcode: Code,
        readonly argument: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_OsiReq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "invokeId",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "opcode",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "argument",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiReq: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiReq: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiReq: __utils.ASN1Decoder<OsiReq> | null = null;
let _cached_encoder_for_OsiReq: __utils.ASN1Encoder<OsiReq> | null = null;
export function _decode_OsiReq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiReq) {
        _cached_decoder_for_OsiReq = __utils._decode_explicit<OsiReq>(
            () =>
                function (el: asn1.ASN1Element): OsiReq {
                    const sequence: asn1.ASN1Element[] = el.sequence;
                    if (sequence.length < 3) {
                        throw new asn1.ASN1ConstructionError(
                            "OsiReq contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
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
                    return new OsiReq(invokeId, opcode, argument);
                }
        );
    }
    return _cached_decoder_for_OsiReq(el);
}
export function _encode_OsiReq(
    value: OsiReq,
    elGetter: __utils.ASN1Encoder<OsiReq>
) {
    if (!_cached_encoder_for_OsiReq) {
        _cached_encoder_for_OsiReq = __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            1,
            () =>
                function (
                    value: OsiReq,
                    elGetter: __utils.ASN1Encoder<OsiReq>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ _encode_InvokeId(
                                    value.invokeId,
                                    __utils.BER
                                ),
                                /* REQUIRED   */ _encode_Code(
                                    value.opcode,
                                    __utils.BER
                                ),
                                /* REQUIRED   */ __utils._encodeAny(
                                    value.argument,
                                    __utils.BER
                                ),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiReq(value, elGetter);
}

export class OsiRes_result {
    constructor(readonly opcode: Code, readonly result: asn1.ASN1Element) {}
}
export const _root_component_type_list_1_spec_for_OsiRes_result: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "opcode",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiRes_result: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiRes_result: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiRes_result: __utils.ASN1Decoder<
    OsiRes_result
> | null = null;
let _cached_encoder_for_OsiRes_result: __utils.ASN1Encoder<
    OsiRes_result
> | null = null;
export function _decode_OsiRes_result(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiRes_result) {
        _cached_decoder_for_OsiRes_result = function (
            el: asn1.ASN1Element
        ): OsiRes_result {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "OsiRes-result contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "opcode";
            sequence[1].name = "result";
            let opcode!: Code;
            let result!: asn1.ASN1Element;
            opcode = _decode_Code(sequence[0]);
            result = __utils._decodeAny(sequence[1]);
            // TODO: Validate values.
            return new OsiRes_result(opcode, result);
        };
    }
    return _cached_decoder_for_OsiRes_result(el);
}
export function _encode_OsiRes_result(
    value: OsiRes_result,
    elGetter: __utils.ASN1Encoder<OsiRes_result>
) {
    if (!_cached_encoder_for_OsiRes_result) {
        _cached_encoder_for_OsiRes_result = function (
            value: OsiRes_result,
            elGetter: __utils.ASN1Encoder<OsiRes_result>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Code(
                            value.opcode,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeAny(
                            value.result,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OsiRes_result(value, elGetter);
}

export class OsiRes {
    constructor(readonly invokeId: InvokeId, readonly result: OsiRes_result) {}
}
export const _root_component_type_list_1_spec_for_OsiRes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "invokeId",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiRes: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiRes: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiRes: __utils.ASN1Decoder<OsiRes> | null = null;
let _cached_encoder_for_OsiRes: __utils.ASN1Encoder<OsiRes> | null = null;
export function _decode_OsiRes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiRes) {
        _cached_decoder_for_OsiRes = __utils._decode_explicit<OsiRes>(
            () =>
                function (el: asn1.ASN1Element): OsiRes {
                    const sequence: asn1.ASN1Element[] = el.sequence;
                    if (sequence.length < 2) {
                        throw new asn1.ASN1ConstructionError(
                            "OsiRes contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    // TODO: Validate tags.
                    sequence[0].name = "invokeId";
                    sequence[1].name = "result";
                    let invokeId!: InvokeId;
                    let result!: OsiRes_result;
                    invokeId = _decode_InvokeId(sequence[0]);
                    result = _decode_OsiRes_result(sequence[1]);
                    // TODO: Validate values.
                    return new OsiRes(invokeId, result);
                }
        );
    }
    return _cached_decoder_for_OsiRes(el);
}
export function _encode_OsiRes(
    value: OsiRes,
    elGetter: __utils.ASN1Encoder<OsiRes>
) {
    if (!_cached_encoder_for_OsiRes) {
        _cached_encoder_for_OsiRes = __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            2,
            () =>
                function (
                    value: OsiRes,
                    elGetter: __utils.ASN1Encoder<OsiRes>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ _encode_InvokeId(
                                    value.invokeId,
                                    __utils.BER
                                ),
                                /* REQUIRED   */ _encode_OsiRes_result(
                                    value.result,
                                    __utils.BER
                                ),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiRes(value, elGetter);
}

export class OsiErr {
    constructor(
        readonly invokeID: InvokeId,
        readonly errcode: asn1.ASN1Element,
        readonly error: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_OsiErr: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "invokeID",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "errcode",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "error",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiErr: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiErr: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiErr: __utils.ASN1Decoder<OsiErr> | null = null;
let _cached_encoder_for_OsiErr: __utils.ASN1Encoder<OsiErr> | null = null;
export function _decode_OsiErr(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiErr) {
        _cached_decoder_for_OsiErr = __utils._decode_explicit<OsiErr>(
            () =>
                function (el: asn1.ASN1Element): OsiErr {
                    const sequence: asn1.ASN1Element[] = el.sequence;
                    if (sequence.length < 3) {
                        throw new asn1.ASN1ConstructionError(
                            "OsiErr contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
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
                    return new OsiErr(invokeID, errcode, error);
                }
        );
    }
    return _cached_decoder_for_OsiErr(el);
}
export function _encode_OsiErr(
    value: OsiErr,
    elGetter: __utils.ASN1Encoder<OsiErr>
) {
    if (!_cached_encoder_for_OsiErr) {
        _cached_encoder_for_OsiErr = __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            3,
            () =>
                function (
                    value: OsiErr,
                    elGetter: __utils.ASN1Encoder<OsiErr>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ _encode_InvokeId(
                                    value.invokeID,
                                    __utils.BER
                                ),
                                /* REQUIRED   */ __utils._encodeAny(
                                    value.errcode,
                                    __utils.BER
                                ),
                                /* REQUIRED   */ __utils._encodeAny(
                                    value.error,
                                    __utils.BER
                                ),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiErr(value, elGetter);
}

export type GeneralProblem = asn1.INTEGER;
export const GeneralProblem_unrecognizedPDU: GeneralProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
export const unrecognizedPDU: GeneralProblem = GeneralProblem_unrecognizedPDU; /* SHORT_NAMED_INTEGER_VALUE */
export const GeneralProblem_mistypedPDU: GeneralProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
export const mistypedPDU: GeneralProblem = GeneralProblem_mistypedPDU; /* SHORT_NAMED_INTEGER_VALUE */
export const GeneralProblem_badlyStructuredPDU: GeneralProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
export const badlyStructuredPDU: GeneralProblem = GeneralProblem_badlyStructuredPDU; /* SHORT_NAMED_INTEGER_VALUE */
let _cached_decoder_for_GeneralProblem: __utils.ASN1Decoder<
    GeneralProblem
> | null = null;
let _cached_encoder_for_GeneralProblem: __utils.ASN1Encoder<
    GeneralProblem
> | null = null;
export function _decode_GeneralProblem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GeneralProblem) {
        _cached_decoder_for_GeneralProblem = __utils._decodeInteger;
    }
    return _cached_decoder_for_GeneralProblem(el);
}
export function _encode_GeneralProblem(
    value: GeneralProblem,
    elGetter: __utils.ASN1Encoder<GeneralProblem>
) {
    if (!_cached_encoder_for_GeneralProblem) {
        _cached_encoder_for_GeneralProblem = __utils._encodeInteger;
    }
    return _cached_encoder_for_GeneralProblem(value, elGetter);
}

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
let _cached_decoder_for_InvokeProblem: __utils.ASN1Decoder<
    InvokeProblem
> | null = null;
let _cached_encoder_for_InvokeProblem: __utils.ASN1Encoder<
    InvokeProblem
> | null = null;
export function _decode_InvokeProblem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_InvokeProblem) {
        _cached_decoder_for_InvokeProblem = __utils._decodeInteger;
    }
    return _cached_decoder_for_InvokeProblem(el);
}
export function _encode_InvokeProblem(
    value: InvokeProblem,
    elGetter: __utils.ASN1Encoder<InvokeProblem>
) {
    if (!_cached_encoder_for_InvokeProblem) {
        _cached_encoder_for_InvokeProblem = __utils._encodeInteger;
    }
    return _cached_encoder_for_InvokeProblem(value, elGetter);
}

export type ReturnResultProblem = asn1.INTEGER;
export const ReturnResultProblem_unrecognizedInvocation: ReturnResultProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
export const ReturnResultProblem_resultResponseUnexpected: ReturnResultProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
export const ReturnResultProblem_mistypedResult: ReturnResultProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ReturnResultProblem: __utils.ASN1Decoder<
    ReturnResultProblem
> | null = null;
let _cached_encoder_for_ReturnResultProblem: __utils.ASN1Encoder<
    ReturnResultProblem
> | null = null;
export function _decode_ReturnResultProblem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReturnResultProblem) {
        _cached_decoder_for_ReturnResultProblem = __utils._decodeInteger;
    }
    return _cached_decoder_for_ReturnResultProblem(el);
}
export function _encode_ReturnResultProblem(
    value: ReturnResultProblem,
    elGetter: __utils.ASN1Encoder<ReturnResultProblem>
) {
    if (!_cached_encoder_for_ReturnResultProblem) {
        _cached_encoder_for_ReturnResultProblem = __utils._encodeInteger;
    }
    return _cached_encoder_for_ReturnResultProblem(value, elGetter);
}

export type ReturnErrorProblem = asn1.INTEGER;
export const ReturnErrorProblem_unrecognizedInvocation: ReturnErrorProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
export const ReturnErrorProblem_errorResponseUnexpected: ReturnErrorProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
export const ReturnErrorProblem_unrecognizedError: ReturnErrorProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
export const ReturnErrorProblem_unexpectedError: ReturnErrorProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
export const ReturnErrorProblem_mistypedParameter: ReturnErrorProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ReturnErrorProblem: __utils.ASN1Decoder<
    ReturnErrorProblem
> | null = null;
let _cached_encoder_for_ReturnErrorProblem: __utils.ASN1Encoder<
    ReturnErrorProblem
> | null = null;
export function _decode_ReturnErrorProblem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReturnErrorProblem) {
        _cached_decoder_for_ReturnErrorProblem = __utils._decodeInteger;
    }
    return _cached_decoder_for_ReturnErrorProblem(el);
}
export function _encode_ReturnErrorProblem(
    value: ReturnErrorProblem,
    elGetter: __utils.ASN1Encoder<ReturnErrorProblem>
) {
    if (!_cached_encoder_for_ReturnErrorProblem) {
        _cached_encoder_for_ReturnErrorProblem = __utils._encodeInteger;
    }
    return _cached_encoder_for_ReturnErrorProblem(value, elGetter);
}

export type OsiRej_problem =
    | { general: GeneralProblem } /* CHOICE_ALT_ROOT */
    | { invoke: InvokeProblem } /* CHOICE_ALT_ROOT */
    | { returnResult: ReturnResultProblem } /* CHOICE_ALT_ROOT */
    | { returnError: ReturnErrorProblem } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_OsiRej_problem: __utils.ASN1Decoder<
    OsiRej_problem
> | null = null;
let _cached_encoder_for_OsiRej_problem: __utils.ASN1Encoder<
    OsiRej_problem
> | null = null;
export function _decode_OsiRej_problem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiRej_problem) {
        _cached_decoder_for_OsiRej_problem = __utils._decode_extensible_choice<
            OsiRej_problem
        >({
            "CONTEXT 0": [
                "general",
                __utils._decode_explicit<GeneralProblem>(
                    () => _decode_GeneralProblem
                ),
            ],
            "CONTEXT 1": [
                "invoke",
                __utils._decode_explicit<InvokeProblem>(
                    () => _decode_InvokeProblem
                ),
            ],
            "CONTEXT 2": [
                "returnResult",
                __utils._decode_explicit<ReturnResultProblem>(
                    () => _decode_ReturnResultProblem
                ),
            ],
            "CONTEXT 3": [
                "returnError",
                __utils._decode_explicit<ReturnErrorProblem>(
                    () => _decode_ReturnErrorProblem
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiRej_problem(el);
}
export function _encode_OsiRej_problem(
    value: OsiRej_problem,
    elGetter: __utils.ASN1Encoder<OsiRej_problem>
) {
    if (!_cached_encoder_for_OsiRej_problem) {
        _cached_encoder_for_OsiRej_problem = __utils._encode_choice<
            OsiRej_problem
        >(
            {
                general: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_GeneralProblem,
                    __utils.BER
                ),
                invoke: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_InvokeProblem,
                    __utils.BER
                ),
                returnResult: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => _encode_ReturnResultProblem,
                    __utils.BER
                ),
                returnError: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => _encode_ReturnErrorProblem,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiRej_problem(value, elGetter);
}

export class OsiRej {
    constructor(
        readonly invokeId: InvokeId,
        readonly problem: OsiRej_problem,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_OsiRej: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "invokeId",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "problem",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OsiRej: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OsiRej: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OsiRej: __utils.ASN1Decoder<OsiRej> | null = null;
let _cached_encoder_for_OsiRej: __utils.ASN1Encoder<OsiRej> | null = null;
export function _decode_OsiRej(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiRej) {
        _cached_decoder_for_OsiRej = __utils._decode_explicit<OsiRej>(
            () =>
                function (el: asn1.ASN1Element): OsiRej {
                    const sequence: asn1.ASN1Element[] = el.sequence;
                    if (sequence.length < 2) {
                        throw new asn1.ASN1ConstructionError(
                            "OsiRej contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    // TODO: Validate tags.
                    sequence[0].name = "invokeId";
                    sequence[1].name = "problem";
                    let invokeId!: InvokeId;
                    let problem!: OsiRej_problem;
                    invokeId = _decode_InvokeId(sequence[0]);
                    problem = _decode_OsiRej_problem(sequence[1]);
                    // TODO: Validate values.
                    return new OsiRej(invokeId, problem, sequence.slice(2));
                }
        );
    }
    return _cached_decoder_for_OsiRej(el);
}
export function _encode_OsiRej(
    value: OsiRej,
    elGetter: __utils.ASN1Encoder<OsiRej>
) {
    if (!_cached_encoder_for_OsiRej) {
        _cached_encoder_for_OsiRej = __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            4,
            () =>
                function (
                    value: OsiRej,
                    elGetter: __utils.ASN1Encoder<OsiRej>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_InvokeId(
                                        value.invokeId,
                                        __utils.BER
                                    ),
                                    /* REQUIRED   */ _encode_OsiRej_problem(
                                        value.problem,
                                        __utils.BER
                                    ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiRej(value, elGetter);
}

export type OsiDirectoryOperation =
    | { request: OsiReq } /* CHOICE_ALT_ROOT */
    | { result: OsiRes } /* CHOICE_ALT_ROOT */
    | { error: OsiErr } /* CHOICE_ALT_ROOT */
    | { reject: OsiRej } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiDirectoryOperation: __utils.ASN1Decoder<
    OsiDirectoryOperation
> | null = null;
let _cached_encoder_for_OsiDirectoryOperation: __utils.ASN1Encoder<
    OsiDirectoryOperation
> | null = null;
export function _decode_OsiDirectoryOperation(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OsiDirectoryOperation) {
        _cached_decoder_for_OsiDirectoryOperation = __utils._decode_inextensible_choice<
            OsiDirectoryOperation
        >({
            "CONTEXT 1": ["request", _decode_OsiReq],
            "CONTEXT 2": ["result", _decode_OsiRes],
            "CONTEXT 3": ["error", _decode_OsiErr],
            "CONTEXT 4": ["reject", _decode_OsiRej],
        });
    }
    return _cached_decoder_for_OsiDirectoryOperation(el);
}
export function _encode_OsiDirectoryOperation(
    value: OsiDirectoryOperation,
    elGetter: __utils.ASN1Encoder<OsiDirectoryOperation>
) {
    if (!_cached_encoder_for_OsiDirectoryOperation) {
        _cached_encoder_for_OsiDirectoryOperation = __utils._encode_choice<
            OsiDirectoryOperation
        >(
            {
                request: _encode_OsiReq,
                result: _encode_OsiRes,
                error: _encode_OsiErr,
                reject: _encode_OsiRej,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_OsiDirectoryOperation(value, elGetter);
}

export class Presentation_context_identifier_list_Item {
    constructor(
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly transfer_syntax_name: Transfer_syntax_name
    ) {}
}
export const _root_component_type_list_1_spec_for_Presentation_context_identifier_list_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "presentation-context-identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "transfer-syntax-name",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Presentation_context_identifier_list_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Presentation_context_identifier_list_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Presentation_context_identifier_list_Item: __utils.ASN1Decoder<
    Presentation_context_identifier_list_Item
> | null = null;
let _cached_encoder_for_Presentation_context_identifier_list_Item: __utils.ASN1Encoder<
    Presentation_context_identifier_list_Item
> | null = null;
export function _decode_Presentation_context_identifier_list_Item(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_Presentation_context_identifier_list_Item) {
        _cached_decoder_for_Presentation_context_identifier_list_Item = function (
            el: asn1.ASN1Element
        ): Presentation_context_identifier_list_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "Presentation-context-identifier-list-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "presentation-context-identifier";
            sequence[1].name = "transfer-syntax-name";
            let presentation_context_identifier!: Presentation_context_identifier;
            let transfer_syntax_name!: Transfer_syntax_name;
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            transfer_syntax_name = _decode_Transfer_syntax_name(sequence[1]);
            // TODO: Validate values.
            return new Presentation_context_identifier_list_Item(
                presentation_context_identifier,
                transfer_syntax_name
            );
        };
    }
    return _cached_decoder_for_Presentation_context_identifier_list_Item(el);
}
export function _encode_Presentation_context_identifier_list_Item(
    value: Presentation_context_identifier_list_Item,
    elGetter: __utils.ASN1Encoder<Presentation_context_identifier_list_Item>
) {
    if (!_cached_encoder_for_Presentation_context_identifier_list_Item) {
        _cached_encoder_for_Presentation_context_identifier_list_Item = function (
            value: Presentation_context_identifier_list_Item,
            elGetter: __utils.ASN1Encoder<
                Presentation_context_identifier_list_Item
            >
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Transfer_syntax_name(
                            value.transfer_syntax_name,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Presentation_context_identifier_list_Item(
        value,
        elGetter
    );
}

export type Presentation_context_identifier_list = Presentation_context_identifier_list_Item[]; // SequenceOfType
let _cached_decoder_for_Presentation_context_identifier_list: __utils.ASN1Decoder<
    Presentation_context_identifier_list
> | null = null;
let _cached_encoder_for_Presentation_context_identifier_list: __utils.ASN1Encoder<
    Presentation_context_identifier_list
> | null = null;
export function _decode_Presentation_context_identifier_list(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_Presentation_context_identifier_list) {
        _cached_decoder_for_Presentation_context_identifier_list = __utils._decodeSequenceOf<
            Presentation_context_identifier_list_Item
        >(() => _decode_Presentation_context_identifier_list_Item);
    }
    return _cached_decoder_for_Presentation_context_identifier_list(el);
}
export function _encode_Presentation_context_identifier_list(
    value: Presentation_context_identifier_list,
    elGetter: __utils.ASN1Encoder<Presentation_context_identifier_list>
) {
    if (!_cached_encoder_for_Presentation_context_identifier_list) {
        _cached_encoder_for_Presentation_context_identifier_list = __utils._encodeSequenceOf<
            Presentation_context_identifier_list_Item
        >(() => _encode_Presentation_context_identifier_list_Item, __utils.BER);
    }
    return _cached_encoder_for_Presentation_context_identifier_list(
        value,
        elGetter
    );
}

export type ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: asn1.ASN1Element;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: __utils.ASN1Decoder<
    ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
let _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: __utils.ASN1Encoder<
    ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
export function _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._decode_inextensible_choice<
            ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >({
            "CONTEXT 0": [
                "single_ASN1_type",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
        });
    }
    return _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        el
    );
}
export function _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    value: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
    elGetter: __utils.ASN1Encoder<
        ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    >
) {
    if (
        !_cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = __utils._encode_choice<
            ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >(
            {
                single_ASN1_type: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}

export class ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item {
    constructor(
        readonly presentation_context_identifier: Presentation_context_identifier,
        readonly presentation_data_values: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {}
}
export const _root_component_type_list_1_spec_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "presentation-context-identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "presentation-data-values",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ASN1Decoder<
    ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
let _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item: __utils.ASN1Encoder<
    ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
export function _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            el: asn1.ASN1Element
        ): ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ARU-PPDU-normal-mode-parameters-user-data-fully-encoded-data-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "presentation-context-identifier";
            sequence[1].name = "presentation-data-values";
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values;
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            presentation_data_values = _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                sequence[1]
            );
            // TODO: Validate values.
            return new ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item(
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item(
        el
    );
}
export function _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item(
    value: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item,
    elGetter: __utils.ASN1Encoder<
        ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
    >
) {
    if (
        !_cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            value: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item,
            elGetter: __utils.ASN1Encoder<
                ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
            >
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item(
        value,
        elGetter
    );
}

export type ARU_PPDU_normal_mode_parameters_user_data = {
    fully_encoded_data: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data: __utils.ASN1Decoder<
    ARU_PPDU_normal_mode_parameters_user_data
> | null = null;
let _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data: __utils.ASN1Encoder<
    ARU_PPDU_normal_mode_parameters_user_data
> | null = null;
export function _decode_ARU_PPDU_normal_mode_parameters_user_data(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data) {
        _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data = __utils._decode_inextensible_choice<
            ARU_PPDU_normal_mode_parameters_user_data
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                __utils._decode_explicit<
                    ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item[]
                >(() =>
                    __utils._decodeSequenceOf<
                        ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
                    >(
                        () =>
                            _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data(el);
}
export function _encode_ARU_PPDU_normal_mode_parameters_user_data(
    value: ARU_PPDU_normal_mode_parameters_user_data,
    elGetter: __utils.ASN1Encoder<ARU_PPDU_normal_mode_parameters_user_data>
) {
    if (!_cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data) {
        _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data = __utils._encode_choice<
            ARU_PPDU_normal_mode_parameters_user_data
        >(
            {
                fully_encoded_data: __utils._encode_explicit(
                    asn1.ASN1TagClass.application,
                    1,
                    () =>
                        __utils._encodeSequenceOf<
                            ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
                        >(
                            () =>
                                _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item,
                            __utils.BER
                        ),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data(
        value,
        elGetter
    );
}

export class ARU_PPDU_normal_mode_parameters {
    constructor(
        readonly presentation_context_identifier_list: Presentation_context_identifier_list,
        readonly user_data: ARU_PPDU_normal_mode_parameters_user_data
    ) {}
}
export const _root_component_type_list_1_spec_for_ARU_PPDU_normal_mode_parameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "presentation-context-identifier-list",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "user-data",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ARU_PPDU_normal_mode_parameters: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ARU_PPDU_normal_mode_parameters: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ARU_PPDU_normal_mode_parameters: __utils.ASN1Decoder<
    ARU_PPDU_normal_mode_parameters
> | null = null;
let _cached_encoder_for_ARU_PPDU_normal_mode_parameters: __utils.ASN1Encoder<
    ARU_PPDU_normal_mode_parameters
> | null = null;
export function _decode_ARU_PPDU_normal_mode_parameters(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ARU_PPDU_normal_mode_parameters) {
        _cached_decoder_for_ARU_PPDU_normal_mode_parameters = function (
            el: asn1.ASN1Element
        ): ARU_PPDU_normal_mode_parameters {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ARU-PPDU-normal-mode-parameters contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "presentation-context-identifier-list";
            sequence[1].name = "user-data";
            let presentation_context_identifier_list!: Presentation_context_identifier_list;
            let user_data!: ARU_PPDU_normal_mode_parameters_user_data;
            presentation_context_identifier_list = __utils._decode_explicit<
                Presentation_context_identifier_list
            >(() => _decode_Presentation_context_identifier_list)(sequence[0]);
            user_data = _decode_ARU_PPDU_normal_mode_parameters_user_data(
                sequence[1]
            );
            // TODO: Validate values.
            return new ARU_PPDU_normal_mode_parameters(
                presentation_context_identifier_list,
                user_data
            );
        };
    }
    return _cached_decoder_for_ARU_PPDU_normal_mode_parameters(el);
}
export function _encode_ARU_PPDU_normal_mode_parameters(
    value: ARU_PPDU_normal_mode_parameters,
    elGetter: __utils.ASN1Encoder<ARU_PPDU_normal_mode_parameters>
) {
    if (!_cached_encoder_for_ARU_PPDU_normal_mode_parameters) {
        _cached_encoder_for_ARU_PPDU_normal_mode_parameters = function (
            value: ARU_PPDU_normal_mode_parameters,
            elGetter: __utils.ASN1Encoder<ARU_PPDU_normal_mode_parameters>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_Presentation_context_identifier_list,
                            __utils.BER
                        )(
                            value.presentation_context_identifier_list,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_ARU_PPDU_normal_mode_parameters_user_data(
                            value.user_data,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ARU_PPDU_normal_mode_parameters(value, elGetter);
}

export type ARU_PPDU = {
    normal_mode_parameters: ARU_PPDU_normal_mode_parameters;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ARU_PPDU: __utils.ASN1Decoder<ARU_PPDU> | null = null;
let _cached_encoder_for_ARU_PPDU: __utils.ASN1Encoder<ARU_PPDU> | null = null;
export function _decode_ARU_PPDU(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ARU_PPDU) {
        _cached_decoder_for_ARU_PPDU = __utils._decode_inextensible_choice<
            ARU_PPDU
        >({
            "CONTEXT 0": [
                "normal_mode_parameters",
                __utils._decode_explicit<ARU_PPDU_normal_mode_parameters>(
                    () => _decode_ARU_PPDU_normal_mode_parameters
                ),
            ],
        });
    }
    return _cached_decoder_for_ARU_PPDU(el);
}
export function _encode_ARU_PPDU(
    value: ARU_PPDU,
    elGetter: __utils.ASN1Encoder<ARU_PPDU>
) {
    if (!_cached_encoder_for_ARU_PPDU) {
        _cached_encoder_for_ARU_PPDU = __utils._encode_choice<ARU_PPDU>(
            {
                normal_mode_parameters: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_ARU_PPDU_normal_mode_parameters,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ARU_PPDU(value, elGetter);
}

export type Abort_reason = asn1.INTEGER;
export const Abort_reason_reason_not_specified: Abort_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
export const Abort_reason_unrecognized_ppdu: Abort_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
export const Abort_reason_unexpected_ppdu: Abort_reason = 2; /* LONG_NAMED_INTEGER_VALUE */
export const Abort_reason_unexpected_session_service_primitive: Abort_reason = 3; /* LONG_NAMED_INTEGER_VALUE */
export const Abort_reason_unrecognized_ppdu_parameter: Abort_reason = 4; /* LONG_NAMED_INTEGER_VALUE */
export const Abort_reason_unexpected_ppdu_parameter: Abort_reason = 5; /* LONG_NAMED_INTEGER_VALUE */
export const Abort_reason_invalid_ppdu_parameter_value: Abort_reason = 6; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Abort_reason: __utils.ASN1Decoder<
    Abort_reason
> | null = null;
let _cached_encoder_for_Abort_reason: __utils.ASN1Encoder<
    Abort_reason
> | null = null;
export function _decode_Abort_reason(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Abort_reason) {
        _cached_decoder_for_Abort_reason = __utils._decodeInteger;
    }
    return _cached_decoder_for_Abort_reason(el);
}
export function _encode_Abort_reason(
    value: Abort_reason,
    elGetter: __utils.ASN1Encoder<Abort_reason>
) {
    if (!_cached_encoder_for_Abort_reason) {
        _cached_encoder_for_Abort_reason = __utils._encodeInteger;
    }
    return _cached_encoder_for_Abort_reason(value, elGetter);
}

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
let _cached_decoder_for_Event_identifier: __utils.ASN1Decoder<
    Event_identifier
> | null = null;
let _cached_encoder_for_Event_identifier: __utils.ASN1Encoder<
    Event_identifier
> | null = null;
export function _decode_Event_identifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Event_identifier) {
        _cached_decoder_for_Event_identifier = __utils._decodeInteger;
    }
    return _cached_decoder_for_Event_identifier(el);
}
export function _encode_Event_identifier(
    value: Event_identifier,
    elGetter: __utils.ASN1Encoder<Event_identifier>
) {
    if (!_cached_encoder_for_Event_identifier) {
        _cached_encoder_for_Event_identifier = __utils._encodeInteger;
    }
    return _cached_encoder_for_Event_identifier(value, elGetter);
}

export class ARP_PPDU {
    constructor(
        readonly provider_reason: Abort_reason | undefined,
        readonly event_identifier: Event_identifier | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_ARP_PPDU: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "provider-reason",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "event-identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ARP_PPDU: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ARP_PPDU: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ARP_PPDU: __utils.ASN1Decoder<ARP_PPDU> | null = null;
let _cached_encoder_for_ARP_PPDU: __utils.ASN1Encoder<ARP_PPDU> | null = null;
export function _decode_ARP_PPDU(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ARP_PPDU) {
        _cached_decoder_for_ARP_PPDU = function (
            el: asn1.ASN1Element
        ): ARP_PPDU {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let provider_reason: asn1.OPTIONAL<Abort_reason>;
            let event_identifier: asn1.OPTIONAL<Event_identifier>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "provider-reason": (_el: asn1.ASN1Element): void => {
                    provider_reason = __utils._decode_explicit<Abort_reason>(
                        () => _decode_Abort_reason
                    )(_el);
                },
                "event-identifier": (_el: asn1.ASN1Element): void => {
                    event_identifier = __utils._decode_explicit<
                        Event_identifier
                    >(() => _decode_Event_identifier)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ARP_PPDU,
                _extension_additions_list_spec_for_ARP_PPDU,
                _root_component_type_list_2_spec_for_ARP_PPDU,
                undefined
            );
            return new ARP_PPDU(
                /* SEQUENCE_CONSTRUCTOR_CALL */ provider_reason,
                event_identifier
            );
        };
    }
    return _cached_decoder_for_ARP_PPDU(el);
}
export function _encode_ARP_PPDU(
    value: ARP_PPDU,
    elGetter: __utils.ASN1Encoder<ARP_PPDU>
) {
    if (!_cached_encoder_for_ARP_PPDU) {
        _cached_encoder_for_ARP_PPDU = function (
            value: ARP_PPDU,
            elGetter: __utils.ASN1Encoder<ARP_PPDU>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.provider_reason === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_Abort_reason,
                                  __utils.BER
                              )(value.provider_reason, __utils.BER),
                        /* IF_ABSENT  */ value.event_identifier === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_Event_identifier,
                                  __utils.BER
                              )(value.event_identifier, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ARP_PPDU(value, elGetter);
}

export type PresentationAbort =
    | { aru_ppdu: ARU_PPDU } /* CHOICE_ALT_ROOT */
    | { arp_ppdu: ARP_PPDU } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_PresentationAbort: __utils.ASN1Decoder<
    PresentationAbort
> | null = null;
let _cached_encoder_for_PresentationAbort: __utils.ASN1Encoder<
    PresentationAbort
> | null = null;
export function _decode_PresentationAbort(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PresentationAbort) {
        _cached_decoder_for_PresentationAbort = __utils._decode_inextensible_choice<
            PresentationAbort
        >({
            "CONTEXT 0": ["aru_ppdu", _decode_ARU_PPDU],
            "UNIVERSAL 16": ["arp_ppdu", _decode_ARP_PPDU],
        });
    }
    return _cached_decoder_for_PresentationAbort(el);
}
export function _encode_PresentationAbort(
    value: PresentationAbort,
    elGetter: __utils.ASN1Encoder<PresentationAbort>
) {
    if (!_cached_encoder_for_PresentationAbort) {
        _cached_encoder_for_PresentationAbort = __utils._encode_choice<
            PresentationAbort
        >(
            {
                aru_ppdu: _encode_ARU_PPDU,
                arp_ppdu: _encode_ARP_PPDU,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_PresentationAbort(value, elGetter);
}

export type ABRT_source = asn1.INTEGER;
export const ABRT_source_acse_service_user: ABRT_source = 0; /* LONG_NAMED_INTEGER_VALUE */
export const acse_service_user: ABRT_source = ABRT_source_acse_service_user; /* SHORT_NAMED_INTEGER_VALUE */
export const ABRT_source_acse_service_provider: ABRT_source = 1; /* LONG_NAMED_INTEGER_VALUE */
export const acse_service_provider: ABRT_source = ABRT_source_acse_service_provider; /* SHORT_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ABRT_source: __utils.ASN1Decoder<
    ABRT_source
> | null = null;
let _cached_encoder_for_ABRT_source: __utils.ASN1Encoder<
    ABRT_source
> | null = null;
export function _decode_ABRT_source(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ABRT_source) {
        _cached_decoder_for_ABRT_source = __utils._decodeInteger;
    }
    return _cached_decoder_for_ABRT_source(el);
}
export function _encode_ABRT_source(
    value: ABRT_source,
    elGetter: __utils.ASN1Encoder<ABRT_source>
) {
    if (!_cached_encoder_for_ABRT_source) {
        _cached_encoder_for_ABRT_source = __utils._encodeInteger;
    }
    return _cached_encoder_for_ABRT_source(value, elGetter);
}

export class ABRT_apdu {
    constructor(readonly abort_source: ABRT_source) {}
}
export const _root_component_type_list_1_spec_for_ABRT_apdu: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "abort-source",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ABRT_apdu: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ABRT_apdu: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ABRT_apdu: __utils.ASN1Decoder<ABRT_apdu> | null = null;
let _cached_encoder_for_ABRT_apdu: __utils.ASN1Encoder<ABRT_apdu> | null = null;
export function _decode_ABRT_apdu(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ABRT_apdu) {
        _cached_decoder_for_ABRT_apdu = __utils._decode_explicit<ABRT_apdu>(
            () =>
                function (el: asn1.ASN1Element): ABRT_apdu {
                    const sequence: asn1.ASN1Element[] = el.sequence;
                    if (sequence.length < 1) {
                        throw new asn1.ASN1ConstructionError(
                            "ABRT-apdu contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    // TODO: Validate tags.
                    sequence[0].name = "abort-source";
                    let abort_source!: ABRT_source;
                    abort_source = __utils._decode_explicit<ABRT_source>(
                        () => _decode_ABRT_source
                    )(sequence[0]);
                    // TODO: Validate values.
                    return new ABRT_apdu(abort_source);
                }
        );
    }
    return _cached_decoder_for_ABRT_apdu(el);
}
export function _encode_ABRT_apdu(
    value: ABRT_apdu,
    elGetter: __utils.ASN1Encoder<ABRT_apdu>
) {
    if (!_cached_encoder_for_ABRT_apdu) {
        _cached_encoder_for_ABRT_apdu = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            4,
            () =>
                function (
                    value: ABRT_apdu,
                    elGetter: __utils.ASN1Encoder<ABRT_apdu>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ __utils._encode_explicit(
                                    asn1.ASN1TagClass.context,
                                    0,
                                    () => _encode_ABRT_source,
                                    __utils.BER
                                )(value.abort_source, __utils.BER),
                            ])
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_ABRT_apdu(value, elGetter);
}

/* END_MODULE OSIProtocolSpecification */
