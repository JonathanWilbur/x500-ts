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

export const _decode_OperationalBindingID = function (
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
    return new OperationalBindingID(identifier, version, sequence.slice(2));
};
export const _encode_OperationalBindingID = function (
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

export type EstablishOperationalBindingArgumentData_initiator =
    | { symmetric: asn1.ASN1Element }
    | { roleA_initiates: asn1.ASN1Element }
    | { roleB_initiates: asn1.ASN1Element };
export const _decode_EstablishOperationalBindingArgumentData_initiator = __utils._decode_inextensible_choice<
    EstablishOperationalBindingArgumentData_initiator
>({
    "CONTEXT 3": [
        "symmetric",
        __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny),
    ],
    "CONTEXT 4": [
        "roleA_initiates",
        __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny),
    ],
    "CONTEXT 5": [
        "roleB_initiates",
        __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny),
    ],
});
export const _encode_EstablishOperationalBindingArgumentData_initiator = __utils._encode_choice<
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

export type Time =
    | { utcTime: asn1.UTCTime }
    | { generalizedTime: asn1.GeneralizedTime }
    | asn1.ASN1Element;
export const _decode_Time = __utils._decode_extensible_choice<Time>({
    "UNIVERSAL 23": ["utcTime", __utils._decodeUTCTime],
    "UNIVERSAL 24": ["generalizedTime", __utils._decodeGeneralizedTime],
});
export const _encode_Time = __utils._encode_choice<Time>(
    {
        utcTime: __utils._encodeUTCTime,
        generalizedTime: __utils._encodeGeneralizedTime,
    },
    __utils.BER
);

export type Validity_validFrom =
    | { now: asn1.NULL }
    | { time: Time }
    | asn1.ASN1Element;
export const _decode_Validity_validFrom = __utils._decode_extensible_choice<
    Validity_validFrom
>({
    "CONTEXT 0": [
        "now",
        __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull),
    ],
    "CONTEXT 1": ["time", __utils._decode_explicit<Time>(() => _decode_Time)],
});
export const _encode_Validity_validFrom = __utils._encode_choice<
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

export type Validity_validUntil =
    | { explicitTermination: asn1.NULL }
    | { time: Time }
    | asn1.ASN1Element;
export const _decode_Validity_validUntil = __utils._decode_extensible_choice<
    Validity_validUntil
>({
    "CONTEXT 0": [
        "explicitTermination",
        __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull),
    ],
    "CONTEXT 1": ["time", __utils._decode_explicit<Time>(() => _decode_Time)],
});
export const _encode_Validity_validUntil = __utils._encode_choice<
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

export class Validity {
    constructor(
        readonly validFrom: Validity_validFrom | undefined,
        readonly validUntil: Validity_validUntil | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_Validity__validFrom = { now: null };
export const _default_value_for_Validity__validUntil = {
    explicitTermination: null,
};
export const _decode_Validity = function (el: asn1.ASN1Element): Validity {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let validFrom: asn1.OPTIONAL<Validity_validFrom> = _default_value_for_Validity__validFrom;
    let validUntil: asn1.OPTIONAL<Validity_validUntil> = _default_value_for_Validity__validUntil;
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
export const _encode_Validity = function (
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
                        _default_value_for_Validity__validFrom
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
                        _default_value_for_Validity__validUntil
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
export const _default_value_for_EstablishOperationalBindingArgumentData__valid = new Validity(
    undefined,
    undefined
);
export const _decode_EstablishOperationalBindingArgumentData = function (
    el: asn1.ASN1Element
): EstablishOperationalBindingArgumentData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let bindingType!: asn1.OBJECT_IDENTIFIER;
    let bindingID: asn1.OPTIONAL<OperationalBindingID>;
    let accessPoint!: AccessPoint;
    let initiator!: EstablishOperationalBindingArgumentData_initiator;
    let agreement!: asn1.ASN1Element;
    let valid: asn1.OPTIONAL<Validity> = _default_value_for_EstablishOperationalBindingArgumentData__valid;
    let securityParameters: asn1.OPTIONAL<SecurityParameters>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        bindingType: (_el: asn1.ASN1Element): void => {
            bindingType = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
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
            valid = __utils._decode_explicit<Validity>(() => _decode_Validity)(
                _el
            );
        },
        securityParameters: (_el: asn1.ASN1Element): void => {
            securityParameters = __utils._decode_explicit<SecurityParameters>(
                () => _decode_SecurityParameters
            )(_el);
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
export const _encode_EstablishOperationalBindingArgumentData = function (
    value: EstablishOperationalBindingArgumentData,
    elGetter: __utils.ASN1Encoder<EstablishOperationalBindingArgumentData>
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
                        _default_value_for_EstablishOperationalBindingArgumentData__valid
                    )
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              7,
                              () => _encode_Validity,
                              __utils.BER
                          )(value.valid, __utils.BER),
                    /* IF_ABSENT  */ value.securityParameters === undefined
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

export type EstablishOperationalBindingArgument = OPTIONALLY_PROTECTED_SEQ<
    EstablishOperationalBindingArgumentData
>; // DefinedType
export const _decode_EstablishOperationalBindingArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
    EstablishOperationalBindingArgumentData
>(_decode_EstablishOperationalBindingArgumentData);
export const _encode_EstablishOperationalBindingArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
    EstablishOperationalBindingArgumentData
>(_encode_EstablishOperationalBindingArgumentData);

// TODO: ObjectSetAssignment: OpBindingSet

export type EstablishOperationalBindingResultData_initiator =
    | { symmetric: asn1.ASN1Element }
    | { roleA_replies: asn1.ASN1Element }
    | { roleB_replies: asn1.ASN1Element };
export const _decode_EstablishOperationalBindingResultData_initiator = __utils._decode_inextensible_choice<
    EstablishOperationalBindingResultData_initiator
>({
    "CONTEXT 3": [
        "symmetric",
        __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny),
    ],
    "CONTEXT 4": [
        "roleA_replies",
        __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny),
    ],
    "CONTEXT 5": [
        "roleB_replies",
        __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny),
    ],
});
export const _encode_EstablishOperationalBindingResultData_initiator = __utils._encode_choice<
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
export const _default_value_for_EstablishOperationalBindingResultData__aliasDereferenced = false;
export const _decode_EstablishOperationalBindingResultData = function (
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
    let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_EstablishOperationalBindingResultData__aliasDereferenced;
    let notification: asn1.OPTIONAL<Attribute[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        bindingType: (_el: asn1.ASN1Element): void => {
            bindingType = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
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
            securityParameters = __utils._decode_explicit<SecurityParameters>(
                () => _decode_SecurityParameters
            )(_el);
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
                __utils._decodeSequenceOf<Attribute>(() => _decode_Attribute)
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
export const _encode_EstablishOperationalBindingResultData = function (
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
                    /* IF_ABSENT  */ value.securityParameters === undefined
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
                    /* IF_DEFAULT */ value.aliasDereferenced === undefined ||
                    __utils.deepEq(
                        value.aliasDereferenced,
                        _default_value_for_EstablishOperationalBindingResultData__aliasDereferenced
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

export type EstablishOperationalBindingResult = OPTIONALLY_PROTECTED_SEQ<
    EstablishOperationalBindingResultData
>; // DefinedType
export const _decode_EstablishOperationalBindingResult = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
    EstablishOperationalBindingResultData
>(_decode_EstablishOperationalBindingResultData);
export const _encode_EstablishOperationalBindingResult = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
    EstablishOperationalBindingResultData
>(_encode_EstablishOperationalBindingResultData);

// TODO: ObjectAssignment: modifyOperationalBinding

export type ModifyOperationalBindingArgumentData_initiator =
    | { symmetric: asn1.ASN1Element }
    | { roleA_initiates: asn1.ASN1Element }
    | { roleB_initiates: asn1.ASN1Element };
export const _decode_ModifyOperationalBindingArgumentData_initiator = __utils._decode_inextensible_choice<
    ModifyOperationalBindingArgumentData_initiator
>({
    "CONTEXT 3": [
        "symmetric",
        __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny),
    ],
    "CONTEXT 4": [
        "roleA_initiates",
        __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny),
    ],
    "CONTEXT 5": [
        "roleB_initiates",
        __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny),
    ],
});
export const _encode_ModifyOperationalBindingArgumentData_initiator = __utils._encode_choice<
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

export type ModifiedValidity_validFrom =
    | { now: asn1.NULL }
    | { time: Time }
    | asn1.ASN1Element;
export const _decode_ModifiedValidity_validFrom = __utils._decode_extensible_choice<
    ModifiedValidity_validFrom
>({
    "CONTEXT 0": [
        "now",
        __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull),
    ],
    "CONTEXT 1": ["time", __utils._decode_explicit<Time>(() => _decode_Time)],
});
export const _encode_ModifiedValidity_validFrom = __utils._encode_choice<
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

export type ModifiedValidity_validUntil =
    | { explicitTermination: asn1.NULL }
    | { time: Time }
    | { unchanged: asn1.NULL }
    | asn1.ASN1Element;
export const _decode_ModifiedValidity_validUntil = __utils._decode_extensible_choice<
    ModifiedValidity_validUntil
>({
    "CONTEXT 0": [
        "explicitTermination",
        __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull),
    ],
    "CONTEXT 1": ["time", __utils._decode_explicit<Time>(() => _decode_Time)],
    "CONTEXT 2": [
        "unchanged",
        __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull),
    ],
});
export const _encode_ModifiedValidity_validUntil = __utils._encode_choice<
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

export class ModifiedValidity {
    constructor(
        readonly validFrom: ModifiedValidity_validFrom | undefined,
        readonly validUntil: ModifiedValidity_validUntil | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _default_value_for_ModifiedValidity__validFrom = { now: null };
export const _default_value_for_ModifiedValidity__validUntil = {
    unchanged: null,
};
export const _decode_ModifiedValidity = function (
    el: asn1.ASN1Element
): ModifiedValidity {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let validFrom: asn1.OPTIONAL<ModifiedValidity_validFrom> = _default_value_for_ModifiedValidity__validFrom;
    let validUntil: asn1.OPTIONAL<ModifiedValidity_validUntil> = _default_value_for_ModifiedValidity__validUntil;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        validFrom: (_el: asn1.ASN1Element): void => {
            validFrom = __utils._decode_explicit<ModifiedValidity_validFrom>(
                () => _decode_ModifiedValidity_validFrom
            )(_el);
        },
        validUntil: (_el: asn1.ASN1Element): void => {
            validUntil = __utils._decode_explicit<ModifiedValidity_validUntil>(
                () => _decode_ModifiedValidity_validUntil
            )(_el);
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
export const _encode_ModifiedValidity = function (
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
                        _default_value_for_ModifiedValidity__validFrom
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
                        _default_value_for_ModifiedValidity__validUntil
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

export const _decode_ModifyOperationalBindingArgumentData = function (
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
            bindingType = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
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
            newBindingID = __utils._decode_explicit<OperationalBindingID>(
                () => _decode_OperationalBindingID
            )(_el);
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
            securityParameters = __utils._decode_explicit<SecurityParameters>(
                () => _decode_SecurityParameters
            )(_el);
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
export const _encode_ModifyOperationalBindingArgumentData = function (
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
                    /* IF_ABSENT  */ value.securityParameters === undefined
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

export type ModifyOperationalBindingArgument = OPTIONALLY_PROTECTED_SEQ<
    ModifyOperationalBindingArgumentData
>; // DefinedType
export const _decode_ModifyOperationalBindingArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
    ModifyOperationalBindingArgumentData
>(_decode_ModifyOperationalBindingArgumentData);
export const _encode_ModifyOperationalBindingArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
    ModifyOperationalBindingArgumentData
>(_encode_ModifyOperationalBindingArgumentData);

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
export const _default_value_for_ModifyOperationalBindingResultData__aliasDereferenced = false;
export const _decode_ModifyOperationalBindingResultData = function (
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
    let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_ModifyOperationalBindingResultData__aliasDereferenced;
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
            securityParameters = __utils._decode_explicit<SecurityParameters>(
                () => _decode_SecurityParameters
            )(_el);
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
                __utils._decodeSequenceOf<Attribute>(() => _decode_Attribute)
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
export const _encode_ModifyOperationalBindingResultData = function (
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
                    /* IF_ABSENT  */ value.securityParameters === undefined
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
                    /* IF_DEFAULT */ value.aliasDereferenced === undefined ||
                    __utils.deepEq(
                        value.aliasDereferenced,
                        _default_value_for_ModifyOperationalBindingResultData__aliasDereferenced
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

export type ModifyOperationalBindingResult =
    | { null_: asn1.NULL }
    | {
          protected_: OPTIONALLY_PROTECTED_SEQ<
              ModifyOperationalBindingResultData
          >;
      }
    | asn1.ASN1Element;
export const _decode_ModifyOperationalBindingResult = __utils._decode_extensible_choice<
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
export const _encode_ModifyOperationalBindingResult = __utils._encode_choice<
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

// TODO: ObjectAssignment: terminateOperationalBinding

export type TerminateOperationalBindingArgumentData_initiator =
    | { symmetric: asn1.ASN1Element }
    | { roleA_initiates: asn1.ASN1Element }
    | { roleB_initiates: asn1.ASN1Element };
export const _decode_TerminateOperationalBindingArgumentData_initiator = __utils._decode_inextensible_choice<
    TerminateOperationalBindingArgumentData_initiator
>({
    "CONTEXT 2": [
        "symmetric",
        __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny),
    ],
    "CONTEXT 3": [
        "roleA_initiates",
        __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny),
    ],
    "CONTEXT 4": [
        "roleB_initiates",
        __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny),
    ],
});
export const _encode_TerminateOperationalBindingArgumentData_initiator = __utils._encode_choice<
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

export const _decode_TerminateOperationalBindingArgumentData = function (
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
            bindingType = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
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
            terminateAt = __utils._decode_explicit<Time>(() => _decode_Time)(
                _el
            );
        },
        securityParameters: (_el: asn1.ASN1Element): void => {
            securityParameters = __utils._decode_explicit<SecurityParameters>(
                () => _decode_SecurityParameters
            )(_el);
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
export const _encode_TerminateOperationalBindingArgumentData = function (
    value: TerminateOperationalBindingArgumentData,
    elGetter: __utils.ASN1Encoder<TerminateOperationalBindingArgumentData>
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
                    /* IF_ABSENT  */ value.securityParameters === undefined
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

export type TerminateOperationalBindingArgument = OPTIONALLY_PROTECTED_SEQ<
    TerminateOperationalBindingArgumentData
>; // DefinedType
export const _decode_TerminateOperationalBindingArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
    TerminateOperationalBindingArgumentData
>(_decode_TerminateOperationalBindingArgumentData);
export const _encode_TerminateOperationalBindingArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
    TerminateOperationalBindingArgumentData
>(_encode_TerminateOperationalBindingArgumentData);

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
export const _default_value_for_TerminateOperationalBindingResultData__aliasDereferenced = false;
export const _decode_TerminateOperationalBindingResultData = function (
    el: asn1.ASN1Element
): TerminateOperationalBindingResultData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let bindingID!: OperationalBindingID;
    let bindingType!: asn1.OBJECT_IDENTIFIER;
    let terminateAt: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    let securityParameters: asn1.OPTIONAL<SecurityParameters>;
    let performer: asn1.OPTIONAL<DistinguishedName>;
    let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_TerminateOperationalBindingResultData__aliasDereferenced;
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
            securityParameters = __utils._decode_explicit<SecurityParameters>(
                () => _decode_SecurityParameters
            )(_el);
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
                __utils._decodeSequenceOf<Attribute>(() => _decode_Attribute)
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
export const _encode_TerminateOperationalBindingResultData = function (
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
                    /* IF_ABSENT  */ value.securityParameters === undefined
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
                    /* IF_DEFAULT */ value.aliasDereferenced === undefined ||
                    __utils.deepEq(
                        value.aliasDereferenced,
                        _default_value_for_TerminateOperationalBindingResultData__aliasDereferenced
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

export type TerminateOperationalBindingResult =
    | { null_: asn1.NULL }
    | {
          protected_: OPTIONALLY_PROTECTED_SEQ<
              TerminateOperationalBindingResultData
          >;
      }
    | asn1.ASN1Element;
export const _decode_TerminateOperationalBindingResult = __utils._decode_extensible_choice<
    TerminateOperationalBindingResult
>({
    "UNIVERSAL 5": ["null_", __utils._decodeNull],
    "CONTEXT 1": [
        "protected_",
        __utils._decode_explicit<
            OPTIONALLY_PROTECTED_SEQ<TerminateOperationalBindingResultData>
        >(() =>
            _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
                TerminateOperationalBindingResultData
            >(_decode_TerminateOperationalBindingResultData)
        ),
    ],
});
export const _encode_TerminateOperationalBindingResult = __utils._encode_choice<
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
export const _decode_OpBindingErrorParam_problem = __utils._decodeEnumerated;
export const _encode_OpBindingErrorParam_problem = __utils._encodeEnumerated;

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
export const _default_value_for_OpBindingErrorParam__aliasDereferenced = false;
export const _decode_OpBindingErrorParam = function (
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
    let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_OpBindingErrorParam__aliasDereferenced;
    let notification: asn1.OPTIONAL<Attribute[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        problem: (_el: asn1.ASN1Element): void => {
            problem = __utils._decode_explicit<OpBindingErrorParam_problem>(
                () => _decode_OpBindingErrorParam_problem
            )(_el);
        },
        bindingType: (_el: asn1.ASN1Element): void => {
            bindingType = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
        },
        agreementProposal: (_el: asn1.ASN1Element): void => {
            agreementProposal = __utils._decode_explicit<asn1.ASN1Element>(
                () => __utils._decodeAny
            )(_el);
        },
        retryAt: (_el: asn1.ASN1Element): void => {
            retryAt = __utils._decode_explicit<Time>(() => _decode_Time)(_el);
        },
        securityParameters: (_el: asn1.ASN1Element): void => {
            securityParameters = __utils._decode_explicit<SecurityParameters>(
                () => _decode_SecurityParameters
            )(_el);
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
                __utils._decodeSequenceOf<Attribute>(() => _decode_Attribute)
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
export const _encode_OpBindingErrorParam = function (
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
                    /* IF_ABSENT  */ value.agreementProposal === undefined
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
                    /* IF_ABSENT  */ value.securityParameters === undefined
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
                    /* IF_DEFAULT */ value.aliasDereferenced === undefined ||
                    __utils.deepEq(
                        value.aliasDereferenced,
                        _default_value_for_OpBindingErrorParam__aliasDereferenced
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

/* END_MODULE OperationalBindingManagement */
