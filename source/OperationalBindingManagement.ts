/*
    BEGIN_MODULE OperationalBindingManagement
    OID: joint-iso-itu-t.ds.module.opBindingManagement.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "./DirectoryAbstractService";
import {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "./DistributedOperations";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "./EnhancedSecurity";
import {
    Attribute,
    DistinguishedName,
    _decode_Attribute,
    _decode_DistinguishedName,
    _encode_Attribute,
    _encode_DistinguishedName,
} from "./InformationFramework";
import * as __utils from "./__utils";
export {
    id_err_operationalBindingError,
    id_op_establishOperationalBinding,
    id_op_modifyOperationalBinding,
    id_op_terminateOperationalBinding,
} from "./CommonProtocolSpecification";
export {
    CommonResultsSeq,
    SecurityParameters,
    _decode_CommonResultsSeq,
    _decode_SecurityParameters,
    _encode_CommonResultsSeq,
    _encode_SecurityParameters,
} from "./DirectoryAbstractService";
export {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "./DistributedOperations";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "./EnhancedSecurity";
export {
    commonProtocolSpecification,
    directoryAbstractService,
    directoryOSIProtocols,
    directoryShadowAbstractService,
    distributedOperations,
    enhancedSecurity,
    hierarchicalOperationalBindings,
} from "./UsefulDefinitions";

// TODO: ObjectAssignment: dSAOperationalBindingManagementBind

// TODO: ObjectClassAssignment: OP-BINDING-COOP

// TODO: ObjectClassAssignment: OP-BIND-ROLE

// TODO: ObjectClassAssignment: OPERATIONAL-BINDING

// TODO: ObjectAssignment: establishOperationalBinding

export class OperationalBindingID {
    constructor(
        readonly identifier: asn1.INTEGER,
        readonly version: asn1.INTEGER,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_OperationalBindingID: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OperationalBindingID: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OperationalBindingID: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OperationalBindingID: __utils.ASN1Decoder<
    OperationalBindingID
> | null = null;
let _cached_encoder_for_OperationalBindingID: __utils.ASN1Encoder<
    OperationalBindingID
> | null = null;
export function _decode_OperationalBindingID(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OperationalBindingID) {
        _cached_decoder_for_OperationalBindingID = function (
            el: asn1.ASN1Element
        ): OperationalBindingID {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "OperationalBindingID contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "identifier";
            sequence[1].name = "version";
            let identifier!: asn1.INTEGER;
            let version!: asn1.INTEGER;
            identifier = __utils._decodeInteger(sequence[0]);
            version = __utils._decodeInteger(sequence[1]);
            // TODO: Validate values.
            return new OperationalBindingID(
                identifier,
                version,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_OperationalBindingID(el);
}
export function _encode_OperationalBindingID(
    value: OperationalBindingID,
    elGetter: __utils.ASN1Encoder<OperationalBindingID>
) {
    if (!_cached_encoder_for_OperationalBindingID) {
        _cached_encoder_for_OperationalBindingID = function (
            value: OperationalBindingID,
            elGetter: __utils.ASN1Encoder<OperationalBindingID>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeInteger(
                                value.identifier,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeInteger(
                                value.version,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OperationalBindingID(value, elGetter);
}

export type EstablishOperationalBindingArgumentData_initiator =
    | { symmetric: asn1.ASN1Element } /* CHOICE_ALT_ROOT */
    | { roleA_initiates: asn1.ASN1Element } /* CHOICE_ALT_ROOT */
    | { roleB_initiates: asn1.ASN1Element } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_EstablishOperationalBindingArgumentData_initiator: __utils.ASN1Decoder<
    EstablishOperationalBindingArgumentData_initiator
> | null = null;
let _cached_encoder_for_EstablishOperationalBindingArgumentData_initiator: __utils.ASN1Encoder<
    EstablishOperationalBindingArgumentData_initiator
> | null = null;
export function _decode_EstablishOperationalBindingArgumentData_initiator(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_EstablishOperationalBindingArgumentData_initiator
    ) {
        _cached_decoder_for_EstablishOperationalBindingArgumentData_initiator = __utils._decode_inextensible_choice<
            EstablishOperationalBindingArgumentData_initiator
        >({
            "CONTEXT 3": [
                "symmetric",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
            "CONTEXT 4": [
                "roleA_initiates",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
            "CONTEXT 5": [
                "roleB_initiates",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
        });
    }
    return _cached_decoder_for_EstablishOperationalBindingArgumentData_initiator(
        el
    );
}
export function _encode_EstablishOperationalBindingArgumentData_initiator(
    value: EstablishOperationalBindingArgumentData_initiator,
    elGetter: __utils.ASN1Encoder<
        EstablishOperationalBindingArgumentData_initiator
    >
) {
    if (
        !_cached_encoder_for_EstablishOperationalBindingArgumentData_initiator
    ) {
        _cached_encoder_for_EstablishOperationalBindingArgumentData_initiator = __utils._encode_choice<
            EstablishOperationalBindingArgumentData_initiator
        >(
            {
                symmetric: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
                roleA_initiates: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    4,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
                roleB_initiates: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    5,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_EstablishOperationalBindingArgumentData_initiator(
        value,
        elGetter
    );
}

export type Time =
    | { utcTime: asn1.UTCTime } /* CHOICE_ALT_ROOT */
    | { generalizedTime: asn1.GeneralizedTime } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Time: __utils.ASN1Decoder<Time> | null = null;
let _cached_encoder_for_Time: __utils.ASN1Encoder<Time> | null = null;
export function _decode_Time(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Time) {
        _cached_decoder_for_Time = __utils._decode_extensible_choice<Time>({
            "UNIVERSAL 23": ["utcTime", __utils._decodeUTCTime],
            "UNIVERSAL 24": ["generalizedTime", __utils._decodeGeneralizedTime],
        });
    }
    return _cached_decoder_for_Time(el);
}
export function _encode_Time(value: Time, elGetter: __utils.ASN1Encoder<Time>) {
    if (!_cached_encoder_for_Time) {
        _cached_encoder_for_Time = __utils._encode_choice<Time>(
            {
                utcTime: __utils._encodeUTCTime,
                generalizedTime: __utils._encodeGeneralizedTime,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Time(value, elGetter);
}

export type Validity_validFrom =
    | { now: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { time: Time } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Validity_validFrom: __utils.ASN1Decoder<
    Validity_validFrom
> | null = null;
let _cached_encoder_for_Validity_validFrom: __utils.ASN1Encoder<
    Validity_validFrom
> | null = null;
export function _decode_Validity_validFrom(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Validity_validFrom) {
        _cached_decoder_for_Validity_validFrom = __utils._decode_extensible_choice<
            Validity_validFrom
        >({
            "CONTEXT 0": [
                "now",
                __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull),
            ],
            "CONTEXT 1": [
                "time",
                __utils._decode_explicit<Time>(() => _decode_Time),
            ],
        });
    }
    return _cached_decoder_for_Validity_validFrom(el);
}
export function _encode_Validity_validFrom(
    value: Validity_validFrom,
    elGetter: __utils.ASN1Encoder<Validity_validFrom>
) {
    if (!_cached_encoder_for_Validity_validFrom) {
        _cached_encoder_for_Validity_validFrom = __utils._encode_choice<
            Validity_validFrom
        >(
            {
                now: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeNull,
                    __utils.BER
                ),
                time: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_Time,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Validity_validFrom(value, elGetter);
}

export type Validity_validUntil =
    | { explicitTermination: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { time: Time } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Validity_validUntil: __utils.ASN1Decoder<
    Validity_validUntil
> | null = null;
let _cached_encoder_for_Validity_validUntil: __utils.ASN1Encoder<
    Validity_validUntil
> | null = null;
export function _decode_Validity_validUntil(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Validity_validUntil) {
        _cached_decoder_for_Validity_validUntil = __utils._decode_extensible_choice<
            Validity_validUntil
        >({
            "CONTEXT 0": [
                "explicitTermination",
                __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull),
            ],
            "CONTEXT 1": [
                "time",
                __utils._decode_explicit<Time>(() => _decode_Time),
            ],
        });
    }
    return _cached_decoder_for_Validity_validUntil(el);
}
export function _encode_Validity_validUntil(
    value: Validity_validUntil,
    elGetter: __utils.ASN1Encoder<Validity_validUntil>
) {
    if (!_cached_encoder_for_Validity_validUntil) {
        _cached_encoder_for_Validity_validUntil = __utils._encode_choice<
            Validity_validUntil
        >(
            {
                explicitTermination: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeNull,
                    __utils.BER
                ),
                time: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_Time,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Validity_validUntil(value, elGetter);
}

export class Validity {
    constructor(
        readonly validFrom: Validity_validFrom | undefined,
        readonly validUntil: Validity_validUntil | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_validFrom() {
        return { now: null };
    }
    public static get _default_value_for_validUntil() {
        return { explicitTermination: null };
    }
}
export const _root_component_type_list_1_spec_for_Validity: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "validFrom",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "validUntil",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Validity: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Validity: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Validity: __utils.ASN1Decoder<Validity> | null = null;
let _cached_encoder_for_Validity: __utils.ASN1Encoder<Validity> | null = null;
export function _decode_Validity(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Validity) {
        _cached_decoder_for_Validity = function (
            el: asn1.ASN1Element
        ): Validity {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let validFrom: asn1.OPTIONAL<Validity_validFrom> =
                Validity._default_value_for_validFrom;
            let validUntil: asn1.OPTIONAL<Validity_validUntil> =
                Validity._default_value_for_validUntil;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                validFrom: (_el: asn1.ASN1Element): void => {
                    validFrom = __utils._decode_explicit<Validity_validFrom>(
                        () => _decode_Validity_validFrom
                    )(_el);
                },
                validUntil: (_el: asn1.ASN1Element): void => {
                    validUntil = __utils._decode_explicit<Validity_validUntil>(
                        () => _decode_Validity_validUntil
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Validity,
                _extension_additions_list_spec_for_Validity,
                _root_component_type_list_2_spec_for_Validity,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Validity(
                /* SEQUENCE_CONSTRUCTOR_CALL */ validFrom,
                validUntil,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Validity(el);
}
export function _encode_Validity(
    value: Validity,
    elGetter: __utils.ASN1Encoder<Validity>
) {
    if (!_cached_encoder_for_Validity) {
        _cached_encoder_for_Validity = function (
            value: Validity,
            elGetter: __utils.ASN1Encoder<Validity>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.validFrom === undefined ||
                            __utils.deepEq(
                                value.validFrom,
                                Validity._default_value_for_validFrom
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_Validity_validFrom,
                                      __utils.BER
                                  )(value.validFrom, __utils.BER),
                            /* IF_DEFAULT */ value.validUntil === undefined ||
                            __utils.deepEq(
                                value.validUntil,
                                Validity._default_value_for_validUntil
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_Validity_validUntil,
                                      __utils.BER
                                  )(value.validUntil, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Validity(value, elGetter);
}

export class EstablishOperationalBindingArgumentData {
    constructor(
        readonly bindingType: asn1.OBJECT_IDENTIFIER,
        readonly bindingID: OperationalBindingID | undefined,
        readonly accessPoint: AccessPoint,
        readonly initiator: EstablishOperationalBindingArgumentData_initiator,
        readonly agreement: asn1.ASN1Element,
        readonly valid: Validity | undefined,
        readonly securityParameters: SecurityParameters | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_valid() {
        return new Validity(undefined, undefined);
    }
}
export const _root_component_type_list_1_spec_for_EstablishOperationalBindingArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "bindingType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "bindingID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "accessPoint",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "initiator",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "agreement",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "valid",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EstablishOperationalBindingArgumentData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EstablishOperationalBindingArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EstablishOperationalBindingArgumentData: __utils.ASN1Decoder<
    EstablishOperationalBindingArgumentData
> | null = null;
let _cached_encoder_for_EstablishOperationalBindingArgumentData: __utils.ASN1Encoder<
    EstablishOperationalBindingArgumentData
> | null = null;
export function _decode_EstablishOperationalBindingArgumentData(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_EstablishOperationalBindingArgumentData) {
        _cached_decoder_for_EstablishOperationalBindingArgumentData = function (
            el: asn1.ASN1Element
        ): EstablishOperationalBindingArgumentData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bindingType!: asn1.OBJECT_IDENTIFIER;
            let bindingID: asn1.OPTIONAL<OperationalBindingID>;
            let accessPoint!: AccessPoint;
            let initiator!: EstablishOperationalBindingArgumentData_initiator;
            let agreement!: asn1.ASN1Element;
            let valid: asn1.OPTIONAL<Validity> =
                EstablishOperationalBindingArgumentData._default_value_for_valid;
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                bindingType: (_el: asn1.ASN1Element): void => {
                    bindingType = __utils._decode_explicit<
                        asn1.OBJECT_IDENTIFIER
                    >(() => __utils._decodeObjectIdentifier)(_el);
                },
                bindingID: (_el: asn1.ASN1Element): void => {
                    bindingID = __utils._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
                accessPoint: (_el: asn1.ASN1Element): void => {
                    accessPoint = __utils._decode_explicit<AccessPoint>(
                        () => _decode_AccessPoint
                    )(_el);
                },
                initiator: (_el: asn1.ASN1Element): void => {
                    initiator = _decode_EstablishOperationalBindingArgumentData_initiator(
                        _el
                    );
                },
                agreement: (_el: asn1.ASN1Element): void => {
                    agreement = __utils._decode_explicit<asn1.ASN1Element>(
                        () => __utils._decodeAny
                    )(_el);
                },
                valid: (_el: asn1.ASN1Element): void => {
                    valid = __utils._decode_explicit<Validity>(
                        () => _decode_Validity
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EstablishOperationalBindingArgumentData,
                _extension_additions_list_spec_for_EstablishOperationalBindingArgumentData,
                _root_component_type_list_2_spec_for_EstablishOperationalBindingArgumentData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EstablishOperationalBindingArgumentData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ bindingType,
                bindingID,
                accessPoint,
                initiator,
                agreement,
                valid,
                securityParameters,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EstablishOperationalBindingArgumentData(el);
}
export function _encode_EstablishOperationalBindingArgumentData(
    value: EstablishOperationalBindingArgumentData,
    elGetter: __utils.ASN1Encoder<EstablishOperationalBindingArgumentData>
) {
    if (!_cached_encoder_for_EstablishOperationalBindingArgumentData) {
        _cached_encoder_for_EstablishOperationalBindingArgumentData = function (
            value: EstablishOperationalBindingArgumentData,
            elGetter: __utils.ASN1Encoder<
                EstablishOperationalBindingArgumentData
            >
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => __utils._encodeObjectIdentifier,
                                __utils.BER
                            )(value.bindingType, __utils.BER),
                            /* IF_ABSENT  */ value.bindingID === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_OperationalBindingID,
                                      __utils.BER
                                  )(value.bindingID, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                2,
                                () => _encode_AccessPoint,
                                __utils.BER
                            )(value.accessPoint, __utils.BER),
                            /* REQUIRED   */ _encode_EstablishOperationalBindingArgumentData_initiator(
                                value.initiator,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                6,
                                () => __utils._encodeAny,
                                __utils.BER
                            )(value.agreement, __utils.BER),
                            /* IF_DEFAULT */ value.valid === undefined ||
                            __utils.deepEq(
                                value.valid,
                                EstablishOperationalBindingArgumentData._default_value_for_valid
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      7,
                                      () => _encode_Validity,
                                      __utils.BER
                                  )(value.valid, __utils.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      8,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EstablishOperationalBindingArgumentData(
        value,
        elGetter
    );
}

export type EstablishOperationalBindingArgument = OPTIONALLY_PROTECTED_SEQ<
    EstablishOperationalBindingArgumentData
>; // DefinedType
let _cached_decoder_for_EstablishOperationalBindingArgument: __utils.ASN1Decoder<
    EstablishOperationalBindingArgument
> | null = null;
let _cached_encoder_for_EstablishOperationalBindingArgument: __utils.ASN1Encoder<
    EstablishOperationalBindingArgument
> | null = null;
export function _decode_EstablishOperationalBindingArgument(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_EstablishOperationalBindingArgument) {
        _cached_decoder_for_EstablishOperationalBindingArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            EstablishOperationalBindingArgumentData
        >(_decode_EstablishOperationalBindingArgumentData);
    }
    return _cached_decoder_for_EstablishOperationalBindingArgument(el);
}
export function _encode_EstablishOperationalBindingArgument(
    value: EstablishOperationalBindingArgument,
    elGetter: __utils.ASN1Encoder<EstablishOperationalBindingArgument>
) {
    if (!_cached_encoder_for_EstablishOperationalBindingArgument) {
        _cached_encoder_for_EstablishOperationalBindingArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
            EstablishOperationalBindingArgumentData
        >(_encode_EstablishOperationalBindingArgumentData);
    }
    return _cached_encoder_for_EstablishOperationalBindingArgument(
        value,
        elGetter
    );
}

// TODO: ObjectSetAssignment: OpBindingSet

export type EstablishOperationalBindingResultData_initiator =
    | { symmetric: asn1.ASN1Element } /* CHOICE_ALT_ROOT */
    | { roleA_replies: asn1.ASN1Element } /* CHOICE_ALT_ROOT */
    | { roleB_replies: asn1.ASN1Element } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_EstablishOperationalBindingResultData_initiator: __utils.ASN1Decoder<
    EstablishOperationalBindingResultData_initiator
> | null = null;
let _cached_encoder_for_EstablishOperationalBindingResultData_initiator: __utils.ASN1Encoder<
    EstablishOperationalBindingResultData_initiator
> | null = null;
export function _decode_EstablishOperationalBindingResultData_initiator(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_EstablishOperationalBindingResultData_initiator) {
        _cached_decoder_for_EstablishOperationalBindingResultData_initiator = __utils._decode_inextensible_choice<
            EstablishOperationalBindingResultData_initiator
        >({
            "CONTEXT 3": [
                "symmetric",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
            "CONTEXT 4": [
                "roleA_replies",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
            "CONTEXT 5": [
                "roleB_replies",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
        });
    }
    return _cached_decoder_for_EstablishOperationalBindingResultData_initiator(
        el
    );
}
export function _encode_EstablishOperationalBindingResultData_initiator(
    value: EstablishOperationalBindingResultData_initiator,
    elGetter: __utils.ASN1Encoder<
        EstablishOperationalBindingResultData_initiator
    >
) {
    if (!_cached_encoder_for_EstablishOperationalBindingResultData_initiator) {
        _cached_encoder_for_EstablishOperationalBindingResultData_initiator = __utils._encode_choice<
            EstablishOperationalBindingResultData_initiator
        >(
            {
                symmetric: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
                roleA_replies: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    4,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
                roleB_replies: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    5,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_EstablishOperationalBindingResultData_initiator(
        value,
        elGetter
    );
}

export class EstablishOperationalBindingResultData {
    constructor(
        readonly bindingType: asn1.OBJECT_IDENTIFIER,
        readonly bindingID: OperationalBindingID | undefined,
        readonly accessPoint: AccessPoint,
        readonly initiator: EstablishOperationalBindingResultData_initiator,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_EstablishOperationalBindingResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "bindingType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "bindingID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "accessPoint",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "initiator",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EstablishOperationalBindingResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_EstablishOperationalBindingResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EstablishOperationalBindingResultData: __utils.ASN1Decoder<
    EstablishOperationalBindingResultData
> | null = null;
let _cached_encoder_for_EstablishOperationalBindingResultData: __utils.ASN1Encoder<
    EstablishOperationalBindingResultData
> | null = null;
export function _decode_EstablishOperationalBindingResultData(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_EstablishOperationalBindingResultData) {
        _cached_decoder_for_EstablishOperationalBindingResultData = function (
            el: asn1.ASN1Element
        ): EstablishOperationalBindingResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bindingType!: asn1.OBJECT_IDENTIFIER;
            let bindingID: asn1.OPTIONAL<OperationalBindingID>;
            let accessPoint!: AccessPoint;
            let initiator!: EstablishOperationalBindingResultData_initiator;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                EstablishOperationalBindingResultData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                bindingType: (_el: asn1.ASN1Element): void => {
                    bindingType = __utils._decode_explicit<
                        asn1.OBJECT_IDENTIFIER
                    >(() => __utils._decodeObjectIdentifier)(_el);
                },
                bindingID: (_el: asn1.ASN1Element): void => {
                    bindingID = __utils._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
                accessPoint: (_el: asn1.ASN1Element): void => {
                    accessPoint = __utils._decode_explicit<AccessPoint>(
                        () => _decode_AccessPoint
                    )(_el);
                },
                initiator: (_el: asn1.ASN1Element): void => {
                    initiator = _decode_EstablishOperationalBindingResultData_initiator(
                        _el
                    );
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EstablishOperationalBindingResultData,
                _extension_additions_list_spec_for_EstablishOperationalBindingResultData,
                _root_component_type_list_2_spec_for_EstablishOperationalBindingResultData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EstablishOperationalBindingResultData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ bindingType,
                bindingID,
                accessPoint,
                initiator,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_EstablishOperationalBindingResultData(el);
}
export function _encode_EstablishOperationalBindingResultData(
    value: EstablishOperationalBindingResultData,
    elGetter: __utils.ASN1Encoder<EstablishOperationalBindingResultData>
) {
    if (!_cached_encoder_for_EstablishOperationalBindingResultData) {
        _cached_encoder_for_EstablishOperationalBindingResultData = function (
            value: EstablishOperationalBindingResultData,
            elGetter: __utils.ASN1Encoder<EstablishOperationalBindingResultData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => __utils._encodeObjectIdentifier,
                                __utils.BER
                            )(value.bindingType, __utils.BER),
                            /* IF_ABSENT  */ value.bindingID === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_OperationalBindingID,
                                      __utils.BER
                                  )(value.bindingID, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                2,
                                () => _encode_AccessPoint,
                                __utils.BER
                            )(value.accessPoint, __utils.BER),
                            /* REQUIRED   */ _encode_EstablishOperationalBindingResultData_initiator(
                                value.initiator,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                EstablishOperationalBindingResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EstablishOperationalBindingResultData(
        value,
        elGetter
    );
}

export type EstablishOperationalBindingResult = OPTIONALLY_PROTECTED_SEQ<
    EstablishOperationalBindingResultData
>; // DefinedType
let _cached_decoder_for_EstablishOperationalBindingResult: __utils.ASN1Decoder<
    EstablishOperationalBindingResult
> | null = null;
let _cached_encoder_for_EstablishOperationalBindingResult: __utils.ASN1Encoder<
    EstablishOperationalBindingResult
> | null = null;
export function _decode_EstablishOperationalBindingResult(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_EstablishOperationalBindingResult) {
        _cached_decoder_for_EstablishOperationalBindingResult = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            EstablishOperationalBindingResultData
        >(_decode_EstablishOperationalBindingResultData);
    }
    return _cached_decoder_for_EstablishOperationalBindingResult(el);
}
export function _encode_EstablishOperationalBindingResult(
    value: EstablishOperationalBindingResult,
    elGetter: __utils.ASN1Encoder<EstablishOperationalBindingResult>
) {
    if (!_cached_encoder_for_EstablishOperationalBindingResult) {
        _cached_encoder_for_EstablishOperationalBindingResult = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
            EstablishOperationalBindingResultData
        >(_encode_EstablishOperationalBindingResultData);
    }
    return _cached_encoder_for_EstablishOperationalBindingResult(
        value,
        elGetter
    );
}

// TODO: ObjectAssignment: modifyOperationalBinding

export type ModifyOperationalBindingArgumentData_initiator =
    | { symmetric: asn1.ASN1Element } /* CHOICE_ALT_ROOT */
    | { roleA_initiates: asn1.ASN1Element } /* CHOICE_ALT_ROOT */
    | { roleB_initiates: asn1.ASN1Element } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ModifyOperationalBindingArgumentData_initiator: __utils.ASN1Decoder<
    ModifyOperationalBindingArgumentData_initiator
> | null = null;
let _cached_encoder_for_ModifyOperationalBindingArgumentData_initiator: __utils.ASN1Encoder<
    ModifyOperationalBindingArgumentData_initiator
> | null = null;
export function _decode_ModifyOperationalBindingArgumentData_initiator(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ModifyOperationalBindingArgumentData_initiator) {
        _cached_decoder_for_ModifyOperationalBindingArgumentData_initiator = __utils._decode_inextensible_choice<
            ModifyOperationalBindingArgumentData_initiator
        >({
            "CONTEXT 3": [
                "symmetric",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
            "CONTEXT 4": [
                "roleA_initiates",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
            "CONTEXT 5": [
                "roleB_initiates",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
        });
    }
    return _cached_decoder_for_ModifyOperationalBindingArgumentData_initiator(
        el
    );
}
export function _encode_ModifyOperationalBindingArgumentData_initiator(
    value: ModifyOperationalBindingArgumentData_initiator,
    elGetter: __utils.ASN1Encoder<
        ModifyOperationalBindingArgumentData_initiator
    >
) {
    if (!_cached_encoder_for_ModifyOperationalBindingArgumentData_initiator) {
        _cached_encoder_for_ModifyOperationalBindingArgumentData_initiator = __utils._encode_choice<
            ModifyOperationalBindingArgumentData_initiator
        >(
            {
                symmetric: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
                roleA_initiates: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    4,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
                roleB_initiates: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    5,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ModifyOperationalBindingArgumentData_initiator(
        value,
        elGetter
    );
}

export type ModifiedValidity_validFrom =
    | { now: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { time: Time } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ModifiedValidity_validFrom: __utils.ASN1Decoder<
    ModifiedValidity_validFrom
> | null = null;
let _cached_encoder_for_ModifiedValidity_validFrom: __utils.ASN1Encoder<
    ModifiedValidity_validFrom
> | null = null;
export function _decode_ModifiedValidity_validFrom(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifiedValidity_validFrom) {
        _cached_decoder_for_ModifiedValidity_validFrom = __utils._decode_extensible_choice<
            ModifiedValidity_validFrom
        >({
            "CONTEXT 0": [
                "now",
                __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull),
            ],
            "CONTEXT 1": [
                "time",
                __utils._decode_explicit<Time>(() => _decode_Time),
            ],
        });
    }
    return _cached_decoder_for_ModifiedValidity_validFrom(el);
}
export function _encode_ModifiedValidity_validFrom(
    value: ModifiedValidity_validFrom,
    elGetter: __utils.ASN1Encoder<ModifiedValidity_validFrom>
) {
    if (!_cached_encoder_for_ModifiedValidity_validFrom) {
        _cached_encoder_for_ModifiedValidity_validFrom = __utils._encode_choice<
            ModifiedValidity_validFrom
        >(
            {
                now: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeNull,
                    __utils.BER
                ),
                time: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_Time,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ModifiedValidity_validFrom(value, elGetter);
}

export type ModifiedValidity_validUntil =
    | { explicitTermination: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { time: Time } /* CHOICE_ALT_ROOT */
    | { unchanged: asn1.NULL } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ModifiedValidity_validUntil: __utils.ASN1Decoder<
    ModifiedValidity_validUntil
> | null = null;
let _cached_encoder_for_ModifiedValidity_validUntil: __utils.ASN1Encoder<
    ModifiedValidity_validUntil
> | null = null;
export function _decode_ModifiedValidity_validUntil(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifiedValidity_validUntil) {
        _cached_decoder_for_ModifiedValidity_validUntil = __utils._decode_extensible_choice<
            ModifiedValidity_validUntil
        >({
            "CONTEXT 0": [
                "explicitTermination",
                __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull),
            ],
            "CONTEXT 1": [
                "time",
                __utils._decode_explicit<Time>(() => _decode_Time),
            ],
            "CONTEXT 2": [
                "unchanged",
                __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull),
            ],
        });
    }
    return _cached_decoder_for_ModifiedValidity_validUntil(el);
}
export function _encode_ModifiedValidity_validUntil(
    value: ModifiedValidity_validUntil,
    elGetter: __utils.ASN1Encoder<ModifiedValidity_validUntil>
) {
    if (!_cached_encoder_for_ModifiedValidity_validUntil) {
        _cached_encoder_for_ModifiedValidity_validUntil = __utils._encode_choice<
            ModifiedValidity_validUntil
        >(
            {
                explicitTermination: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeNull,
                    __utils.BER
                ),
                time: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_Time,
                    __utils.BER
                ),
                unchanged: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => __utils._encodeNull,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ModifiedValidity_validUntil(value, elGetter);
}

export class ModifiedValidity {
    constructor(
        readonly validFrom: ModifiedValidity_validFrom | undefined,
        readonly validUntil: ModifiedValidity_validUntil | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_validFrom() {
        return { now: null };
    }
    public static get _default_value_for_validUntil() {
        return { unchanged: null };
    }
}
export const _root_component_type_list_1_spec_for_ModifiedValidity: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "validFrom",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "validUntil",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ModifiedValidity: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ModifiedValidity: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ModifiedValidity: __utils.ASN1Decoder<
    ModifiedValidity
> | null = null;
let _cached_encoder_for_ModifiedValidity: __utils.ASN1Encoder<
    ModifiedValidity
> | null = null;
export function _decode_ModifiedValidity(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifiedValidity) {
        _cached_decoder_for_ModifiedValidity = function (
            el: asn1.ASN1Element
        ): ModifiedValidity {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let validFrom: asn1.OPTIONAL<ModifiedValidity_validFrom> =
                ModifiedValidity._default_value_for_validFrom;
            let validUntil: asn1.OPTIONAL<ModifiedValidity_validUntil> =
                ModifiedValidity._default_value_for_validUntil;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                validFrom: (_el: asn1.ASN1Element): void => {
                    validFrom = __utils._decode_explicit<
                        ModifiedValidity_validFrom
                    >(() => _decode_ModifiedValidity_validFrom)(_el);
                },
                validUntil: (_el: asn1.ASN1Element): void => {
                    validUntil = __utils._decode_explicit<
                        ModifiedValidity_validUntil
                    >(() => _decode_ModifiedValidity_validUntil)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifiedValidity,
                _extension_additions_list_spec_for_ModifiedValidity,
                _root_component_type_list_2_spec_for_ModifiedValidity,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ModifiedValidity(
                /* SEQUENCE_CONSTRUCTOR_CALL */ validFrom,
                validUntil,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ModifiedValidity(el);
}
export function _encode_ModifiedValidity(
    value: ModifiedValidity,
    elGetter: __utils.ASN1Encoder<ModifiedValidity>
) {
    if (!_cached_encoder_for_ModifiedValidity) {
        _cached_encoder_for_ModifiedValidity = function (
            value: ModifiedValidity,
            elGetter: __utils.ASN1Encoder<ModifiedValidity>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.validFrom === undefined ||
                            __utils.deepEq(
                                value.validFrom,
                                ModifiedValidity._default_value_for_validFrom
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_ModifiedValidity_validFrom,
                                      __utils.BER
                                  )(value.validFrom, __utils.BER),
                            /* IF_DEFAULT */ value.validUntil === undefined ||
                            __utils.deepEq(
                                value.validUntil,
                                ModifiedValidity._default_value_for_validUntil
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_ModifiedValidity_validUntil,
                                      __utils.BER
                                  )(value.validUntil, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ModifiedValidity(value, elGetter);
}

export class ModifyOperationalBindingArgumentData {
    constructor(
        readonly bindingType: asn1.OBJECT_IDENTIFIER,
        readonly bindingID: OperationalBindingID,
        readonly accessPoint: AccessPoint | undefined,
        readonly initiator:
            | ModifyOperationalBindingArgumentData_initiator
            | undefined,
        readonly newBindingID: OperationalBindingID,
        readonly newAgreement: asn1.ASN1Element | undefined,
        readonly valid: ModifiedValidity | undefined,
        readonly securityParameters: SecurityParameters | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ModifyOperationalBindingArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "bindingType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "bindingID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "accessPoint",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "initiator",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "newBindingID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "newAgreement",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "valid",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ModifyOperationalBindingArgumentData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ModifyOperationalBindingArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ModifyOperationalBindingArgumentData: __utils.ASN1Decoder<
    ModifyOperationalBindingArgumentData
> | null = null;
let _cached_encoder_for_ModifyOperationalBindingArgumentData: __utils.ASN1Encoder<
    ModifyOperationalBindingArgumentData
> | null = null;
export function _decode_ModifyOperationalBindingArgumentData(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ModifyOperationalBindingArgumentData) {
        _cached_decoder_for_ModifyOperationalBindingArgumentData = function (
            el: asn1.ASN1Element
        ): ModifyOperationalBindingArgumentData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bindingType!: asn1.OBJECT_IDENTIFIER;
            let bindingID!: OperationalBindingID;
            let accessPoint: asn1.OPTIONAL<AccessPoint>;
            let initiator: asn1.OPTIONAL<ModifyOperationalBindingArgumentData_initiator>;
            let newBindingID!: OperationalBindingID;
            let newAgreement: asn1.OPTIONAL<asn1.ASN1Element>;
            let valid: asn1.OPTIONAL<ModifiedValidity>;
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                bindingType: (_el: asn1.ASN1Element): void => {
                    bindingType = __utils._decode_explicit<
                        asn1.OBJECT_IDENTIFIER
                    >(() => __utils._decodeObjectIdentifier)(_el);
                },
                bindingID: (_el: asn1.ASN1Element): void => {
                    bindingID = __utils._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
                accessPoint: (_el: asn1.ASN1Element): void => {
                    accessPoint = __utils._decode_explicit<AccessPoint>(
                        () => _decode_AccessPoint
                    )(_el);
                },
                initiator: (_el: asn1.ASN1Element): void => {
                    initiator = _decode_ModifyOperationalBindingArgumentData_initiator(
                        _el
                    );
                },
                newBindingID: (_el: asn1.ASN1Element): void => {
                    newBindingID = __utils._decode_explicit<
                        OperationalBindingID
                    >(() => _decode_OperationalBindingID)(_el);
                },
                newAgreement: (_el: asn1.ASN1Element): void => {
                    newAgreement = __utils._decode_explicit<asn1.ASN1Element>(
                        () => __utils._decodeAny
                    )(_el);
                },
                valid: (_el: asn1.ASN1Element): void => {
                    valid = __utils._decode_explicit<ModifiedValidity>(
                        () => _decode_ModifiedValidity
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifyOperationalBindingArgumentData,
                _extension_additions_list_spec_for_ModifyOperationalBindingArgumentData,
                _root_component_type_list_2_spec_for_ModifyOperationalBindingArgumentData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ModifyOperationalBindingArgumentData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ bindingType,
                bindingID,
                accessPoint,
                initiator,
                newBindingID,
                newAgreement,
                valid,
                securityParameters,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ModifyOperationalBindingArgumentData(el);
}
export function _encode_ModifyOperationalBindingArgumentData(
    value: ModifyOperationalBindingArgumentData,
    elGetter: __utils.ASN1Encoder<ModifyOperationalBindingArgumentData>
) {
    if (!_cached_encoder_for_ModifyOperationalBindingArgumentData) {
        _cached_encoder_for_ModifyOperationalBindingArgumentData = function (
            value: ModifyOperationalBindingArgumentData,
            elGetter: __utils.ASN1Encoder<ModifyOperationalBindingArgumentData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => __utils._encodeObjectIdentifier,
                                __utils.BER
                            )(value.bindingType, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => _encode_OperationalBindingID,
                                __utils.BER
                            )(value.bindingID, __utils.BER),
                            /* IF_ABSENT  */ value.accessPoint === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_AccessPoint,
                                      __utils.BER
                                  )(value.accessPoint, __utils.BER),
                            /* IF_ABSENT  */ value.initiator === undefined
                                ? undefined
                                : _encode_ModifyOperationalBindingArgumentData_initiator(
                                      value.initiator,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                6,
                                () => _encode_OperationalBindingID,
                                __utils.BER
                            )(value.newBindingID, __utils.BER),
                            /* IF_ABSENT  */ value.newAgreement === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      7,
                                      () => __utils._encodeAny,
                                      __utils.BER
                                  )(value.newAgreement, __utils.BER),
                            /* IF_ABSENT  */ value.valid === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      8,
                                      () => _encode_ModifiedValidity,
                                      __utils.BER
                                  )(value.valid, __utils.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      9,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ModifyOperationalBindingArgumentData(
        value,
        elGetter
    );
}

export type ModifyOperationalBindingArgument = OPTIONALLY_PROTECTED_SEQ<
    ModifyOperationalBindingArgumentData
>; // DefinedType
let _cached_decoder_for_ModifyOperationalBindingArgument: __utils.ASN1Decoder<
    ModifyOperationalBindingArgument
> | null = null;
let _cached_encoder_for_ModifyOperationalBindingArgument: __utils.ASN1Encoder<
    ModifyOperationalBindingArgument
> | null = null;
export function _decode_ModifyOperationalBindingArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifyOperationalBindingArgument) {
        _cached_decoder_for_ModifyOperationalBindingArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            ModifyOperationalBindingArgumentData
        >(_decode_ModifyOperationalBindingArgumentData);
    }
    return _cached_decoder_for_ModifyOperationalBindingArgument(el);
}
export function _encode_ModifyOperationalBindingArgument(
    value: ModifyOperationalBindingArgument,
    elGetter: __utils.ASN1Encoder<ModifyOperationalBindingArgument>
) {
    if (!_cached_encoder_for_ModifyOperationalBindingArgument) {
        _cached_encoder_for_ModifyOperationalBindingArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
            ModifyOperationalBindingArgumentData
        >(_encode_ModifyOperationalBindingArgumentData);
    }
    return _cached_encoder_for_ModifyOperationalBindingArgument(
        value,
        elGetter
    );
}

export class ModifyOperationalBindingResultData {
    constructor(
        readonly newBindingID: OperationalBindingID,
        readonly bindingType: asn1.OBJECT_IDENTIFIER,
        readonly newAgreement: asn1.ASN1Element,
        readonly valid: Validity | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_ModifyOperationalBindingResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "newBindingID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "bindingType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "newAgreement",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "valid",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ModifyOperationalBindingResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_ModifyOperationalBindingResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ModifyOperationalBindingResultData: __utils.ASN1Decoder<
    ModifyOperationalBindingResultData
> | null = null;
let _cached_encoder_for_ModifyOperationalBindingResultData: __utils.ASN1Encoder<
    ModifyOperationalBindingResultData
> | null = null;
export function _decode_ModifyOperationalBindingResultData(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ModifyOperationalBindingResultData) {
        _cached_decoder_for_ModifyOperationalBindingResultData = function (
            el: asn1.ASN1Element
        ): ModifyOperationalBindingResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let newBindingID!: OperationalBindingID;
            let bindingType!: asn1.OBJECT_IDENTIFIER;
            let newAgreement!: asn1.ASN1Element;
            let valid: asn1.OPTIONAL<Validity>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                ModifyOperationalBindingResultData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                newBindingID: (_el: asn1.ASN1Element): void => {
                    newBindingID = _decode_OperationalBindingID(_el);
                },
                bindingType: (_el: asn1.ASN1Element): void => {
                    bindingType = __utils._decodeObjectIdentifier(_el);
                },
                newAgreement: (_el: asn1.ASN1Element): void => {
                    newAgreement = __utils._decodeAny(_el);
                },
                valid: (_el: asn1.ASN1Element): void => {
                    valid = _decode_Validity(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifyOperationalBindingResultData,
                _extension_additions_list_spec_for_ModifyOperationalBindingResultData,
                _root_component_type_list_2_spec_for_ModifyOperationalBindingResultData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ModifyOperationalBindingResultData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ newBindingID,
                bindingType,
                newAgreement,
                valid,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ModifyOperationalBindingResultData(el);
}
export function _encode_ModifyOperationalBindingResultData(
    value: ModifyOperationalBindingResultData,
    elGetter: __utils.ASN1Encoder<ModifyOperationalBindingResultData>
) {
    if (!_cached_encoder_for_ModifyOperationalBindingResultData) {
        _cached_encoder_for_ModifyOperationalBindingResultData = function (
            value: ModifyOperationalBindingResultData,
            elGetter: __utils.ASN1Encoder<ModifyOperationalBindingResultData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_OperationalBindingID(
                                value.newBindingID,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.bindingType,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeAny(
                                value.newAgreement,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.valid === undefined
                                ? undefined
                                : _encode_Validity(value.valid, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                ModifyOperationalBindingResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ModifyOperationalBindingResultData(
        value,
        elGetter
    );
}

export type ModifyOperationalBindingResult =
    | { null_: asn1.NULL } /* CHOICE_ALT_ROOT */
    | {
          protected_: OPTIONALLY_PROTECTED_SEQ<
              ModifyOperationalBindingResultData
          >;
      } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ModifyOperationalBindingResult: __utils.ASN1Decoder<
    ModifyOperationalBindingResult
> | null = null;
let _cached_encoder_for_ModifyOperationalBindingResult: __utils.ASN1Encoder<
    ModifyOperationalBindingResult
> | null = null;
export function _decode_ModifyOperationalBindingResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModifyOperationalBindingResult) {
        _cached_decoder_for_ModifyOperationalBindingResult = __utils._decode_extensible_choice<
            ModifyOperationalBindingResult
        >({
            "UNIVERSAL 5": ["null_", __utils._decodeNull],
            "CONTEXT 1": [
                "protected_",
                __utils._decode_explicit<
                    OPTIONALLY_PROTECTED_SEQ<ModifyOperationalBindingResultData>
                >(() =>
                    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
                        ModifyOperationalBindingResultData
                    >(_decode_ModifyOperationalBindingResultData)
                ),
            ],
        });
    }
    return _cached_decoder_for_ModifyOperationalBindingResult(el);
}
export function _encode_ModifyOperationalBindingResult(
    value: ModifyOperationalBindingResult,
    elGetter: __utils.ASN1Encoder<ModifyOperationalBindingResult>
) {
    if (!_cached_encoder_for_ModifyOperationalBindingResult) {
        _cached_encoder_for_ModifyOperationalBindingResult = __utils._encode_choice<
            ModifyOperationalBindingResult
        >(
            {
                null_: __utils._encodeNull,
                protected_: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () =>
                        _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
                            ModifyOperationalBindingResultData
                        >(_encode_ModifyOperationalBindingResultData),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ModifyOperationalBindingResult(value, elGetter);
}

// TODO: ObjectAssignment: terminateOperationalBinding

export type TerminateOperationalBindingArgumentData_initiator =
    | { symmetric: asn1.ASN1Element } /* CHOICE_ALT_ROOT */
    | { roleA_initiates: asn1.ASN1Element } /* CHOICE_ALT_ROOT */
    | { roleB_initiates: asn1.ASN1Element } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_TerminateOperationalBindingArgumentData_initiator: __utils.ASN1Decoder<
    TerminateOperationalBindingArgumentData_initiator
> | null = null;
let _cached_encoder_for_TerminateOperationalBindingArgumentData_initiator: __utils.ASN1Encoder<
    TerminateOperationalBindingArgumentData_initiator
> | null = null;
export function _decode_TerminateOperationalBindingArgumentData_initiator(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_TerminateOperationalBindingArgumentData_initiator
    ) {
        _cached_decoder_for_TerminateOperationalBindingArgumentData_initiator = __utils._decode_inextensible_choice<
            TerminateOperationalBindingArgumentData_initiator
        >({
            "CONTEXT 2": [
                "symmetric",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
            "CONTEXT 3": [
                "roleA_initiates",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
            "CONTEXT 4": [
                "roleB_initiates",
                __utils._decode_explicit<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
        });
    }
    return _cached_decoder_for_TerminateOperationalBindingArgumentData_initiator(
        el
    );
}
export function _encode_TerminateOperationalBindingArgumentData_initiator(
    value: TerminateOperationalBindingArgumentData_initiator,
    elGetter: __utils.ASN1Encoder<
        TerminateOperationalBindingArgumentData_initiator
    >
) {
    if (
        !_cached_encoder_for_TerminateOperationalBindingArgumentData_initiator
    ) {
        _cached_encoder_for_TerminateOperationalBindingArgumentData_initiator = __utils._encode_choice<
            TerminateOperationalBindingArgumentData_initiator
        >(
            {
                symmetric: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
                roleA_initiates: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
                roleB_initiates: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    4,
                    () => __utils._encodeAny,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_TerminateOperationalBindingArgumentData_initiator(
        value,
        elGetter
    );
}

export class TerminateOperationalBindingArgumentData {
    constructor(
        readonly bindingType: asn1.OBJECT_IDENTIFIER,
        readonly bindingID: OperationalBindingID,
        readonly initiator:
            | TerminateOperationalBindingArgumentData_initiator
            | undefined,
        readonly terminateAt: Time | undefined,
        readonly securityParameters: SecurityParameters | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_TerminateOperationalBindingArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "bindingType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "bindingID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "initiator",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "terminateAt",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TerminateOperationalBindingArgumentData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TerminateOperationalBindingArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TerminateOperationalBindingArgumentData: __utils.ASN1Decoder<
    TerminateOperationalBindingArgumentData
> | null = null;
let _cached_encoder_for_TerminateOperationalBindingArgumentData: __utils.ASN1Encoder<
    TerminateOperationalBindingArgumentData
> | null = null;
export function _decode_TerminateOperationalBindingArgumentData(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_TerminateOperationalBindingArgumentData) {
        _cached_decoder_for_TerminateOperationalBindingArgumentData = function (
            el: asn1.ASN1Element
        ): TerminateOperationalBindingArgumentData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bindingType!: asn1.OBJECT_IDENTIFIER;
            let bindingID!: OperationalBindingID;
            let initiator: asn1.OPTIONAL<TerminateOperationalBindingArgumentData_initiator>;
            let terminateAt: asn1.OPTIONAL<Time>;
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                bindingType: (_el: asn1.ASN1Element): void => {
                    bindingType = __utils._decode_explicit<
                        asn1.OBJECT_IDENTIFIER
                    >(() => __utils._decodeObjectIdentifier)(_el);
                },
                bindingID: (_el: asn1.ASN1Element): void => {
                    bindingID = __utils._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
                initiator: (_el: asn1.ASN1Element): void => {
                    initiator = _decode_TerminateOperationalBindingArgumentData_initiator(
                        _el
                    );
                },
                terminateAt: (_el: asn1.ASN1Element): void => {
                    terminateAt = __utils._decode_explicit<Time>(
                        () => _decode_Time
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TerminateOperationalBindingArgumentData,
                _extension_additions_list_spec_for_TerminateOperationalBindingArgumentData,
                _root_component_type_list_2_spec_for_TerminateOperationalBindingArgumentData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TerminateOperationalBindingArgumentData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ bindingType,
                bindingID,
                initiator,
                terminateAt,
                securityParameters,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TerminateOperationalBindingArgumentData(el);
}
export function _encode_TerminateOperationalBindingArgumentData(
    value: TerminateOperationalBindingArgumentData,
    elGetter: __utils.ASN1Encoder<TerminateOperationalBindingArgumentData>
) {
    if (!_cached_encoder_for_TerminateOperationalBindingArgumentData) {
        _cached_encoder_for_TerminateOperationalBindingArgumentData = function (
            value: TerminateOperationalBindingArgumentData,
            elGetter: __utils.ASN1Encoder<
                TerminateOperationalBindingArgumentData
            >
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => __utils._encodeObjectIdentifier,
                                __utils.BER
                            )(value.bindingType, __utils.BER),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => _encode_OperationalBindingID,
                                __utils.BER
                            )(value.bindingID, __utils.BER),
                            /* IF_ABSENT  */ value.initiator === undefined
                                ? undefined
                                : _encode_TerminateOperationalBindingArgumentData_initiator(
                                      value.initiator,
                                      __utils.BER
                                  ),
                            /* IF_ABSENT  */ value.terminateAt === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      5,
                                      () => _encode_Time,
                                      __utils.BER
                                  )(value.terminateAt, __utils.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      6,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TerminateOperationalBindingArgumentData(
        value,
        elGetter
    );
}

export type TerminateOperationalBindingArgument = OPTIONALLY_PROTECTED_SEQ<
    TerminateOperationalBindingArgumentData
>; // DefinedType
let _cached_decoder_for_TerminateOperationalBindingArgument: __utils.ASN1Decoder<
    TerminateOperationalBindingArgument
> | null = null;
let _cached_encoder_for_TerminateOperationalBindingArgument: __utils.ASN1Encoder<
    TerminateOperationalBindingArgument
> | null = null;
export function _decode_TerminateOperationalBindingArgument(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_TerminateOperationalBindingArgument) {
        _cached_decoder_for_TerminateOperationalBindingArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            TerminateOperationalBindingArgumentData
        >(_decode_TerminateOperationalBindingArgumentData);
    }
    return _cached_decoder_for_TerminateOperationalBindingArgument(el);
}
export function _encode_TerminateOperationalBindingArgument(
    value: TerminateOperationalBindingArgument,
    elGetter: __utils.ASN1Encoder<TerminateOperationalBindingArgument>
) {
    if (!_cached_encoder_for_TerminateOperationalBindingArgument) {
        _cached_encoder_for_TerminateOperationalBindingArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
            TerminateOperationalBindingArgumentData
        >(_encode_TerminateOperationalBindingArgumentData);
    }
    return _cached_encoder_for_TerminateOperationalBindingArgument(
        value,
        elGetter
    );
}

export class TerminateOperationalBindingResultData {
    constructor(
        readonly bindingID: OperationalBindingID,
        readonly bindingType: asn1.OBJECT_IDENTIFIER,
        readonly terminateAt: asn1.GeneralizedTime | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_TerminateOperationalBindingResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "bindingID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "bindingType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "terminateAt",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TerminateOperationalBindingResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_TerminateOperationalBindingResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TerminateOperationalBindingResultData: __utils.ASN1Decoder<
    TerminateOperationalBindingResultData
> | null = null;
let _cached_encoder_for_TerminateOperationalBindingResultData: __utils.ASN1Encoder<
    TerminateOperationalBindingResultData
> | null = null;
export function _decode_TerminateOperationalBindingResultData(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_TerminateOperationalBindingResultData) {
        _cached_decoder_for_TerminateOperationalBindingResultData = function (
            el: asn1.ASN1Element
        ): TerminateOperationalBindingResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bindingID!: OperationalBindingID;
            let bindingType!: asn1.OBJECT_IDENTIFIER;
            let terminateAt: asn1.OPTIONAL<asn1.GeneralizedTime>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                TerminateOperationalBindingResultData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                bindingID: (_el: asn1.ASN1Element): void => {
                    bindingID = _decode_OperationalBindingID(_el);
                },
                bindingType: (_el: asn1.ASN1Element): void => {
                    bindingType = __utils._decodeObjectIdentifier(_el);
                },
                terminateAt: (_el: asn1.ASN1Element): void => {
                    terminateAt = __utils._decodeGeneralizedTime(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TerminateOperationalBindingResultData,
                _extension_additions_list_spec_for_TerminateOperationalBindingResultData,
                _root_component_type_list_2_spec_for_TerminateOperationalBindingResultData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TerminateOperationalBindingResultData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ bindingID,
                bindingType,
                terminateAt,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_TerminateOperationalBindingResultData(el);
}
export function _encode_TerminateOperationalBindingResultData(
    value: TerminateOperationalBindingResultData,
    elGetter: __utils.ASN1Encoder<TerminateOperationalBindingResultData>
) {
    if (!_cached_encoder_for_TerminateOperationalBindingResultData) {
        _cached_encoder_for_TerminateOperationalBindingResultData = function (
            value: TerminateOperationalBindingResultData,
            elGetter: __utils.ASN1Encoder<TerminateOperationalBindingResultData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_OperationalBindingID(
                                value.bindingID,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.bindingType,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.terminateAt === undefined
                                ? undefined
                                : __utils._encodeGeneralizedTime(
                                      value.terminateAt,
                                      __utils.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                TerminateOperationalBindingResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TerminateOperationalBindingResultData(
        value,
        elGetter
    );
}

export type TerminateOperationalBindingResult =
    | { null_: asn1.NULL } /* CHOICE_ALT_ROOT */
    | {
          protected_: OPTIONALLY_PROTECTED_SEQ<
              TerminateOperationalBindingResultData
          >;
      } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TerminateOperationalBindingResult: __utils.ASN1Decoder<
    TerminateOperationalBindingResult
> | null = null;
let _cached_encoder_for_TerminateOperationalBindingResult: __utils.ASN1Encoder<
    TerminateOperationalBindingResult
> | null = null;
export function _decode_TerminateOperationalBindingResult(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_TerminateOperationalBindingResult) {
        _cached_decoder_for_TerminateOperationalBindingResult = __utils._decode_extensible_choice<
            TerminateOperationalBindingResult
        >({
            "UNIVERSAL 5": ["null_", __utils._decodeNull],
            "CONTEXT 1": [
                "protected_",
                __utils._decode_explicit<
                    OPTIONALLY_PROTECTED_SEQ<
                        TerminateOperationalBindingResultData
                    >
                >(() =>
                    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
                        TerminateOperationalBindingResultData
                    >(_decode_TerminateOperationalBindingResultData)
                ),
            ],
        });
    }
    return _cached_decoder_for_TerminateOperationalBindingResult(el);
}
export function _encode_TerminateOperationalBindingResult(
    value: TerminateOperationalBindingResult,
    elGetter: __utils.ASN1Encoder<TerminateOperationalBindingResult>
) {
    if (!_cached_encoder_for_TerminateOperationalBindingResult) {
        _cached_encoder_for_TerminateOperationalBindingResult = __utils._encode_choice<
            TerminateOperationalBindingResult
        >(
            {
                null_: __utils._encodeNull,
                protected_: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () =>
                        _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
                            TerminateOperationalBindingResultData
                        >(_encode_TerminateOperationalBindingResultData),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_TerminateOperationalBindingResult(
        value,
        elGetter
    );
}

// TODO: ObjectAssignment: operationalBindingError

export type OpBindingErrorParam_problem = asn1.ENUMERATED;
export const OpBindingErrorParam_problem_invalidID: OpBindingErrorParam_problem = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidID: OpBindingErrorParam_problem = OpBindingErrorParam_problem_invalidID; /* SHORT_NAMED_ENUMERATED_VALUE */
export const OpBindingErrorParam_problem_duplicateID: OpBindingErrorParam_problem = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const duplicateID: OpBindingErrorParam_problem = OpBindingErrorParam_problem_duplicateID; /* SHORT_NAMED_ENUMERATED_VALUE */
export const OpBindingErrorParam_problem_unsupportedBindingType: OpBindingErrorParam_problem = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const unsupportedBindingType: OpBindingErrorParam_problem = OpBindingErrorParam_problem_unsupportedBindingType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const OpBindingErrorParam_problem_notAllowedForRole: OpBindingErrorParam_problem = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const notAllowedForRole: OpBindingErrorParam_problem = OpBindingErrorParam_problem_notAllowedForRole; /* SHORT_NAMED_ENUMERATED_VALUE */
export const OpBindingErrorParam_problem_parametersMissing: OpBindingErrorParam_problem = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const parametersMissing: OpBindingErrorParam_problem = OpBindingErrorParam_problem_parametersMissing; /* SHORT_NAMED_ENUMERATED_VALUE */
export const OpBindingErrorParam_problem_roleAssignment: OpBindingErrorParam_problem = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const roleAssignment: OpBindingErrorParam_problem = OpBindingErrorParam_problem_roleAssignment; /* SHORT_NAMED_ENUMERATED_VALUE */
export const OpBindingErrorParam_problem_invalidStartTime: OpBindingErrorParam_problem = 6; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidStartTime: OpBindingErrorParam_problem = OpBindingErrorParam_problem_invalidStartTime; /* SHORT_NAMED_ENUMERATED_VALUE */
export const OpBindingErrorParam_problem_invalidEndTime: OpBindingErrorParam_problem = 7; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidEndTime: OpBindingErrorParam_problem = OpBindingErrorParam_problem_invalidEndTime; /* SHORT_NAMED_ENUMERATED_VALUE */
export const OpBindingErrorParam_problem_invalidAgreement: OpBindingErrorParam_problem = 8; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidAgreement: OpBindingErrorParam_problem = OpBindingErrorParam_problem_invalidAgreement; /* SHORT_NAMED_ENUMERATED_VALUE */
export const OpBindingErrorParam_problem_currentlyNotDecidable: OpBindingErrorParam_problem = 9; /* LONG_NAMED_ENUMERATED_VALUE */
export const currentlyNotDecidable: OpBindingErrorParam_problem = OpBindingErrorParam_problem_currentlyNotDecidable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const OpBindingErrorParam_problem_modificationNotAllowed: OpBindingErrorParam_problem = 10; /* LONG_NAMED_ENUMERATED_VALUE */
export const modificationNotAllowed: OpBindingErrorParam_problem = OpBindingErrorParam_problem_modificationNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */
export const OpBindingErrorParam_problem_invalidBindingType: OpBindingErrorParam_problem = 11; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidBindingType: OpBindingErrorParam_problem = OpBindingErrorParam_problem_invalidBindingType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const OpBindingErrorParam_problem_invalidNewID: OpBindingErrorParam_problem = 12; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidNewID: OpBindingErrorParam_problem = OpBindingErrorParam_problem_invalidNewID; /* SHORT_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_OpBindingErrorParam_problem: __utils.ASN1Decoder<
    OpBindingErrorParam_problem
> | null = null;
let _cached_encoder_for_OpBindingErrorParam_problem: __utils.ASN1Encoder<
    OpBindingErrorParam_problem
> | null = null;
export function _decode_OpBindingErrorParam_problem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OpBindingErrorParam_problem) {
        _cached_decoder_for_OpBindingErrorParam_problem =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_OpBindingErrorParam_problem(el);
}
export function _encode_OpBindingErrorParam_problem(
    value: OpBindingErrorParam_problem,
    elGetter: __utils.ASN1Encoder<OpBindingErrorParam_problem>
) {
    if (!_cached_encoder_for_OpBindingErrorParam_problem) {
        _cached_encoder_for_OpBindingErrorParam_problem =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_OpBindingErrorParam_problem(value, elGetter);
}

export class OpBindingErrorParam {
    constructor(
        readonly problem: OpBindingErrorParam_problem,
        readonly bindingType: asn1.OBJECT_IDENTIFIER | undefined,
        readonly agreementProposal: asn1.ASN1Element | undefined,
        readonly retryAt: Time | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_OpBindingErrorParam: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "problem",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "bindingType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "agreementProposal",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "retryAt",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OpBindingErrorParam: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_OpBindingErrorParam: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OpBindingErrorParam: __utils.ASN1Decoder<
    OpBindingErrorParam
> | null = null;
let _cached_encoder_for_OpBindingErrorParam: __utils.ASN1Encoder<
    OpBindingErrorParam
> | null = null;
export function _decode_OpBindingErrorParam(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OpBindingErrorParam) {
        _cached_decoder_for_OpBindingErrorParam = function (
            el: asn1.ASN1Element
        ): OpBindingErrorParam {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let problem!: OpBindingErrorParam_problem;
            let bindingType: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
            let agreementProposal: asn1.OPTIONAL<asn1.ASN1Element>;
            let retryAt: asn1.OPTIONAL<Time>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                OpBindingErrorParam._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                problem: (_el: asn1.ASN1Element): void => {
                    problem = __utils._decode_explicit<
                        OpBindingErrorParam_problem
                    >(() => _decode_OpBindingErrorParam_problem)(_el);
                },
                bindingType: (_el: asn1.ASN1Element): void => {
                    bindingType = __utils._decode_explicit<
                        asn1.OBJECT_IDENTIFIER
                    >(() => __utils._decodeObjectIdentifier)(_el);
                },
                agreementProposal: (_el: asn1.ASN1Element): void => {
                    agreementProposal = __utils._decode_explicit<
                        asn1.ASN1Element
                    >(() => __utils._decodeAny)(_el);
                },
                retryAt: (_el: asn1.ASN1Element): void => {
                    retryAt = __utils._decode_explicit<Time>(
                        () => _decode_Time
                    )(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OpBindingErrorParam,
                _extension_additions_list_spec_for_OpBindingErrorParam,
                _root_component_type_list_2_spec_for_OpBindingErrorParam,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new OpBindingErrorParam(
                /* SEQUENCE_CONSTRUCTOR_CALL */ problem,
                bindingType,
                agreementProposal,
                retryAt,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_OpBindingErrorParam(el);
}
export function _encode_OpBindingErrorParam(
    value: OpBindingErrorParam,
    elGetter: __utils.ASN1Encoder<OpBindingErrorParam>
) {
    if (!_cached_encoder_for_OpBindingErrorParam) {
        _cached_encoder_for_OpBindingErrorParam = function (
            value: OpBindingErrorParam,
            elGetter: __utils.ASN1Encoder<OpBindingErrorParam>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_OpBindingErrorParam_problem,
                                __utils.BER
                            )(value.problem, __utils.BER),
                            /* IF_ABSENT  */ value.bindingType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => __utils._encodeObjectIdentifier,
                                      __utils.BER
                                  )(value.bindingType, __utils.BER),
                            /* IF_ABSENT  */ value.agreementProposal ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => __utils._encodeAny,
                                      __utils.BER
                                  )(value.agreementProposal, __utils.BER),
                            /* IF_ABSENT  */ value.retryAt === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => _encode_Time,
                                      __utils.BER
                                  )(value.retryAt, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                OpBindingErrorParam._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OpBindingErrorParam(value, elGetter);
}

/* END_MODULE OperationalBindingManagement */
