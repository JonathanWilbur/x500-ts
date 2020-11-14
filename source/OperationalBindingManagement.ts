/**
 * @module OperationalBindingManagement
 * @summary The ASN.1 module `OperationalBindingManagement`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.opBindingManagement.9
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
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    ENUMERATED,
    GeneralizedTime,
    INTEGER,
    NULL,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    UTCTime,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ERROR,
    id_err_operationalBindingError,
    id_op_establishOperationalBinding,
    id_op_modifyOperationalBinding,
    id_op_terminateOperationalBinding,
    OPERATION,
} from "./CommonProtocolSpecification";
import {
    securityError,
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "./DirectoryAbstractService";
import { APPLICATION_CONTEXT } from "./DirectoryOSIProtocols";
import { shadowOperationalBinding } from "./DirectoryShadowAbstractService";
import {
    AccessPoint,
    dSABind,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "./DistributedOperations";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "./EnhancedSecurity";
import {
    hierarchicalOperationalBinding,
    nonSpecificHierarchicalOperationalBinding,
} from "./HierarchicalOperationalBindings";
import {
    Attribute,
    DistinguishedName,
    _decode_Attribute,
    _decode_DistinguishedName,
    _encode_Attribute,
    _encode_DistinguishedName,
} from "./InformationFramework";
export {
    ERROR,
    id_err_operationalBindingError,
    id_op_establishOperationalBinding,
    id_op_modifyOperationalBinding,
    id_op_terminateOperationalBinding,
    OPERATION,
} from "./CommonProtocolSpecification";
export {
    CommonResultsSeq,
    securityError,
    SecurityParameters,
    _decode_CommonResultsSeq,
    _decode_SecurityParameters,
    _encode_CommonResultsSeq,
    _encode_SecurityParameters,
} from "./DirectoryAbstractService";
export { APPLICATION_CONTEXT } from "./DirectoryOSIProtocols";
export { shadowOperationalBinding } from "./DirectoryShadowAbstractService";
export {
    AccessPoint,
    dSABind,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "./DistributedOperations";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "./EnhancedSecurity";
export {
    hierarchicalOperationalBinding,
    nonSpecificHierarchicalOperationalBinding,
} from "./HierarchicalOperationalBindings";
export {
    Attribute,
    DistinguishedName,
    _decode_Attribute,
    _decode_DistinguishedName,
    _encode_Attribute,
    _encode_DistinguishedName,
} from "./InformationFramework";

/**
 * @summary dSAOperationalBindingManagementBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dSAOperationalBindingManagementBind OPERATION ::= dSABind
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const dSAOperationalBindingManagementBind: OPERATION = dSABind;

/**
 * @summary OP_BINDING_COOP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OP-BINDING-COOP ::= CLASS {
 *   &applContext  APPLICATION-CONTEXT,
 *   &Operations   OPERATION OPTIONAL }
 * WITH SYNTAX {
 *                 &applContext
 *   [APPLIES TO   &Operations] }
 * ```
 *
 * @interface
 */
export interface OP_BINDING_COOP {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "OP-BINDING-COOP";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof OP_BINDING_COOP]: $.ASN1Decoder<OP_BINDING_COOP[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof OP_BINDING_COOP]: $.ASN1Encoder<OP_BINDING_COOP[_K]>;
        }
    >;
    /**
     * @summary &applContext
     */
    "&applContext"?: APPLICATION_CONTEXT;
    /**
     * @summary &Operations
     */
    "&Operations"?: OPERATION[];
}

/**
 * @summary OP_BIND_ROLE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OP-BIND-ROLE ::= CLASS {
 *   &establish                BOOLEAN DEFAULT FALSE,
 *   &EstablishParam,
 *   &modify                   BOOLEAN DEFAULT FALSE,
 *   &ModifyParam              OPTIONAL,
 *   &terminate                BOOLEAN DEFAULT FALSE,
 *   &TerminateParam           OPTIONAL }
 * WITH SYNTAX {
 *   [ESTABLISHMENT-INITIATOR  &establish]
 *   ESTABLISHMENT-PARAMETER   &EstablishParam
 *   [MODIFICATION-INITIATOR   &modify]
 *   [MODIFICATION-PARAMETER   &ModifyParam]
 *   [TERMINATION-INITIATOR    &terminate]
 *   [TERMINATION-PARAMETER    &TerminateParam] }
 * ```
 *
 * @interface
 */
export interface OP_BIND_ROLE<
    EstablishParam = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    ModifyParam = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    TerminateParam = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "OP-BIND-ROLE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof OP_BIND_ROLE<
                EstablishParam,
                ModifyParam,
                TerminateParam
            >]: $.ASN1Decoder<
                OP_BIND_ROLE<EstablishParam, ModifyParam, TerminateParam>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof OP_BIND_ROLE<
                EstablishParam,
                ModifyParam,
                TerminateParam
            >]: $.ASN1Encoder<
                OP_BIND_ROLE<EstablishParam, ModifyParam, TerminateParam>[_K]
            >;
        }
    >;
    /**
     * @summary &establish
     */
    "&establish"?: BOOLEAN;
    /**
     * @summary &EstablishParam
     */
    "&EstablishParam": EstablishParam;
    /**
     * @summary &modify
     */
    "&modify"?: BOOLEAN;
    /**
     * @summary &ModifyParam
     */
    "&ModifyParam": ModifyParam;
    /**
     * @summary &terminate
     */
    "&terminate"?: BOOLEAN;
    /**
     * @summary &TerminateParam
     */
    "&TerminateParam": TerminateParam;
}

/**
 * @summary OPERATIONAL_BINDING
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OPERATIONAL-BINDING ::= CLASS {
 *   &Agreement           ,
 *   &Cooperation         OP-BINDING-COOP,
 *   &both                OP-BIND-ROLE OPTIONAL,
 *   &roleA               OP-BIND-ROLE OPTIONAL,
 *   &roleB               OP-BIND-ROLE OPTIONAL,
 *   &id                  OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   AGREEMENT            &Agreement
 *   APPLICATION CONTEXTS &Cooperation
 *   [SYMMETRIC           &both]
 *   [ASYMMETRIC
 *     [ROLE-A              &roleA]
 *     [ROLE-B              &roleB]]
 *   ID                   &id }
 * ```
 *
 * @interface
 */
export interface OPERATIONAL_BINDING<
    Agreement = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "OPERATIONAL-BINDING";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof OPERATIONAL_BINDING<Agreement>]: $.ASN1Decoder<
                OPERATIONAL_BINDING<Agreement>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof OPERATIONAL_BINDING<Agreement>]: $.ASN1Encoder<
                OPERATIONAL_BINDING<Agreement>[_K]
            >;
        }
    >;
    /**
     * @summary &Agreement
     */
    "&Agreement": Agreement;
    /**
     * @summary &Cooperation
     */
    "&Cooperation"?: OP_BINDING_COOP[];
    /**
     * @summary &both
     */
    "&both"?: OP_BIND_ROLE;
    /**
     * @summary &roleA
     */
    "&roleA"?: OP_BIND_ROLE;
    /**
     * @summary &roleB
     */
    "&roleB"?: OP_BIND_ROLE;
    /**
     * @summary &id
     */
    "&id"?: OBJECT_IDENTIFIER;
}

/**
 * @summary OpBindingSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OpBindingSet OPERATIONAL-BINDING ::= {
 *   shadowOperationalBinding |
 *   hierarchicalOperationalBinding |
 *   nonSpecificHierarchicalOperationalBinding }
 * ```
 *
 * @constant
 * @type {OPERATIONAL_BINDING[]}
 *
 */
export const OpBindingSet: OPERATIONAL_BINDING[] = [
    shadowOperationalBinding,
    hierarchicalOperationalBinding,
    nonSpecificHierarchicalOperationalBinding,
];

/**
 * @summary OperationalBindingID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationalBindingID ::= SEQUENCE {
 *   identifier  INTEGER,
 *   version     INTEGER,
 *   ... }
 * ```
 *
 * @class
 */
export class OperationalBindingID {
    constructor(
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: INTEGER,
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a OperationalBindingID
     * @description
     *
     * This takes an `object` and converts it to a `OperationalBindingID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OperationalBindingID`.
     * @returns {OperationalBindingID}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof OperationalBindingID]: OperationalBindingID[_K] }
        >
    ): OperationalBindingID {
        return new OperationalBindingID(
            _o.identifier,
            _o.version,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of OperationalBindingID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OperationalBindingID: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identifier",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of OperationalBindingID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OperationalBindingID: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OperationalBindingID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OperationalBindingID: $.ComponentSpec[] = [];
let _cached_decoder_for_OperationalBindingID: $.ASN1Decoder<
    OperationalBindingID
> | null = null;
let _cached_encoder_for_OperationalBindingID: $.ASN1Encoder<
    OperationalBindingID
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OperationalBindingID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationalBindingID} The decoded data structure.
 */
export function _decode_OperationalBindingID(el: _Element) {
    if (!_cached_decoder_for_OperationalBindingID) {
        _cached_decoder_for_OperationalBindingID = function (
            el: _Element
        ): OperationalBindingID {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OperationalBindingID contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "identifier";
            sequence[1].name = "version";
            let identifier!: INTEGER;
            let version!: INTEGER;
            identifier = $._decodeInteger(sequence[0]);
            version = $._decodeInteger(sequence[1]);
            return new OperationalBindingID(
                identifier,
                version,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_OperationalBindingID(el);
}
/**
 * @summary Encodes a(n) OperationalBindingID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationalBindingID, encoded as an ASN.1 Element.
 */
export function _encode_OperationalBindingID(
    value: OperationalBindingID,
    elGetter: $.ASN1Encoder<OperationalBindingID>
) {
    if (!_cached_encoder_for_OperationalBindingID) {
        _cached_encoder_for_OperationalBindingID = function (
            value: OperationalBindingID,
            elGetter: $.ASN1Encoder<OperationalBindingID>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(
                                value.identifier,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeInteger(
                                value.version,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OperationalBindingID(value, elGetter);
}

/**
 * @summary EstablishOperationalBindingArgumentData_initiator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EstablishOperationalBindingArgumentData-initiator ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EstablishOperationalBindingArgumentData_initiator =
    | { symmetric: _Element } /* CHOICE_ALT_ROOT */
    | { roleA_initiates: _Element } /* CHOICE_ALT_ROOT */
    | { roleB_initiates: _Element } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_EstablishOperationalBindingArgumentData_initiator: $.ASN1Decoder<
    EstablishOperationalBindingArgumentData_initiator
> | null = null;
let _cached_encoder_for_EstablishOperationalBindingArgumentData_initiator: $.ASN1Encoder<
    EstablishOperationalBindingArgumentData_initiator
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EstablishOperationalBindingArgumentData_initiator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishOperationalBindingArgumentData_initiator} The decoded data structure.
 */
export function _decode_EstablishOperationalBindingArgumentData_initiator(
    el: _Element
) {
    if (
        !_cached_decoder_for_EstablishOperationalBindingArgumentData_initiator
    ) {
        _cached_decoder_for_EstablishOperationalBindingArgumentData_initiator = $._decode_inextensible_choice<
            EstablishOperationalBindingArgumentData_initiator
        >({
            "CONTEXT 3": [
                "symmetric",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
            "CONTEXT 4": [
                "roleA_initiates",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
            "CONTEXT 5": [
                "roleB_initiates",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
        });
    }
    return _cached_decoder_for_EstablishOperationalBindingArgumentData_initiator(
        el
    );
}
/**
 * @summary Encodes a(n) EstablishOperationalBindingArgumentData_initiator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishOperationalBindingArgumentData_initiator, encoded as an ASN.1 Element.
 */
export function _encode_EstablishOperationalBindingArgumentData_initiator(
    value: EstablishOperationalBindingArgumentData_initiator,
    elGetter: $.ASN1Encoder<EstablishOperationalBindingArgumentData_initiator>
) {
    if (
        !_cached_encoder_for_EstablishOperationalBindingArgumentData_initiator
    ) {
        _cached_encoder_for_EstablishOperationalBindingArgumentData_initiator = $._encode_choice<
            EstablishOperationalBindingArgumentData_initiator
        >(
            {
                symmetric: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => $._encodeAny,
                    $.BER
                ),
                roleA_initiates: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => $._encodeAny,
                    $.BER
                ),
                roleB_initiates: $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => $._encodeAny,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EstablishOperationalBindingArgumentData_initiator(
        value,
        elGetter
    );
}

/**
 * @summary Time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Time  ::=  CHOICE {
 *   utcTime          UTCTime,
 *   generalizedTime  GeneralizedTime,
 *   ... }
 * ```
 */
export type Time =
    | { utcTime: UTCTime } /* CHOICE_ALT_ROOT */
    | { generalizedTime: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Time: $.ASN1Decoder<Time> | null = null;
let _cached_encoder_for_Time: $.ASN1Encoder<Time> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Time
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Time} The decoded data structure.
 */
export function _decode_Time(el: _Element) {
    if (!_cached_decoder_for_Time) {
        _cached_decoder_for_Time = $._decode_extensible_choice<Time>({
            "UNIVERSAL 23": ["utcTime", $._decodeUTCTime],
            "UNIVERSAL 24": ["generalizedTime", $._decodeGeneralizedTime],
        });
    }
    return _cached_decoder_for_Time(el);
}
/**
 * @summary Encodes a(n) Time into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Time, encoded as an ASN.1 Element.
 */
export function _encode_Time(value: Time, elGetter: $.ASN1Encoder<Time>) {
    if (!_cached_encoder_for_Time) {
        _cached_encoder_for_Time = $._encode_choice<Time>(
            {
                utcTime: $._encodeUTCTime,
                generalizedTime: $._encodeGeneralizedTime,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Time(value, elGetter);
}

/**
 * @summary Validity_validFrom
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Validity-validFrom ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Validity_validFrom =
    | { now: NULL } /* CHOICE_ALT_ROOT */
    | { time: Time } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Validity_validFrom: $.ASN1Decoder<
    Validity_validFrom
> | null = null;
let _cached_encoder_for_Validity_validFrom: $.ASN1Encoder<
    Validity_validFrom
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Validity_validFrom
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Validity_validFrom} The decoded data structure.
 */
export function _decode_Validity_validFrom(el: _Element) {
    if (!_cached_decoder_for_Validity_validFrom) {
        _cached_decoder_for_Validity_validFrom = $._decode_extensible_choice<
            Validity_validFrom
        >({
            "CONTEXT 0": ["now", $._decode_explicit<NULL>(() => $._decodeNull)],
            "CONTEXT 1": ["time", $._decode_explicit<Time>(() => _decode_Time)],
        });
    }
    return _cached_decoder_for_Validity_validFrom(el);
}
/**
 * @summary Encodes a(n) Validity_validFrom into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Validity_validFrom, encoded as an ASN.1 Element.
 */
export function _encode_Validity_validFrom(
    value: Validity_validFrom,
    elGetter: $.ASN1Encoder<Validity_validFrom>
) {
    if (!_cached_encoder_for_Validity_validFrom) {
        _cached_encoder_for_Validity_validFrom = $._encode_choice<
            Validity_validFrom
        >(
            {
                now: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                time: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_Time,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Validity_validFrom(value, elGetter);
}

/**
 * @summary Validity_validUntil
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Validity-validUntil ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Validity_validUntil =
    | { explicitTermination: NULL } /* CHOICE_ALT_ROOT */
    | { time: Time } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Validity_validUntil: $.ASN1Decoder<
    Validity_validUntil
> | null = null;
let _cached_encoder_for_Validity_validUntil: $.ASN1Encoder<
    Validity_validUntil
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Validity_validUntil
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Validity_validUntil} The decoded data structure.
 */
export function _decode_Validity_validUntil(el: _Element) {
    if (!_cached_decoder_for_Validity_validUntil) {
        _cached_decoder_for_Validity_validUntil = $._decode_extensible_choice<
            Validity_validUntil
        >({
            "CONTEXT 0": [
                "explicitTermination",
                $._decode_explicit<NULL>(() => $._decodeNull),
            ],
            "CONTEXT 1": ["time", $._decode_explicit<Time>(() => _decode_Time)],
        });
    }
    return _cached_decoder_for_Validity_validUntil(el);
}
/**
 * @summary Encodes a(n) Validity_validUntil into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Validity_validUntil, encoded as an ASN.1 Element.
 */
export function _encode_Validity_validUntil(
    value: Validity_validUntil,
    elGetter: $.ASN1Encoder<Validity_validUntil>
) {
    if (!_cached_encoder_for_Validity_validUntil) {
        _cached_encoder_for_Validity_validUntil = $._encode_choice<
            Validity_validUntil
        >(
            {
                explicitTermination: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                time: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_Time,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Validity_validUntil(value, elGetter);
}

/**
 * @summary Validity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Validity ::= SEQUENCE {
 *   validFrom            [0]  CHOICE {
 *     now                  [0]  NULL,
 *     time                 [1]  Time,
 *     ...} DEFAULT now:NULL,
 *   validUntil           [1]  CHOICE {
 *     explicitTermination  [0]  NULL,
 *     time                 [1]  Time,
 *     ... } DEFAULT explicitTermination:NULL,
 *   ... }
 * ```
 *
 * @class
 */
export class Validity {
    constructor(
        /**
         * @summary `validFrom`.
         * @public
         * @readonly
         */
        readonly validFrom: OPTIONAL<Validity_validFrom>,
        /**
         * @summary `validUntil`.
         * @public
         * @readonly
         */
        readonly validUntil: OPTIONAL<Validity_validUntil>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Validity
     * @description
     *
     * This takes an `object` and converts it to a `Validity`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Validity`.
     * @returns {Validity}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Validity]: Validity[_K] }>
    ): Validity {
        return new Validity(
            _o.validFrom,
            _o.validUntil,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `validFrom`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_validFrom() {
        return { now: null };
    }
    /**
     * @summary Getter that returns the default value for `validUntil`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_validUntil() {
        return { explicitTermination: null };
    }
}
/**
 * @summary The Leading Root Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Validity: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "validFrom",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "validUntil",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Validity: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Validity: $.ComponentSpec[] = [];
let _cached_decoder_for_Validity: $.ASN1Decoder<Validity> | null = null;
let _cached_encoder_for_Validity: $.ASN1Encoder<Validity> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Validity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Validity} The decoded data structure.
 */
export function _decode_Validity(el: _Element) {
    if (!_cached_decoder_for_Validity) {
        _cached_decoder_for_Validity = function (el: _Element): Validity {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let validFrom: OPTIONAL<Validity_validFrom> =
                Validity._default_value_for_validFrom;
            let validUntil: OPTIONAL<Validity_validUntil> =
                Validity._default_value_for_validUntil;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                validFrom: (_el: _Element): void => {
                    validFrom = $._decode_explicit<Validity_validFrom>(
                        () => _decode_Validity_validFrom
                    )(_el);
                },
                validUntil: (_el: _Element): void => {
                    validUntil = $._decode_explicit<Validity_validUntil>(
                        () => _decode_Validity_validUntil
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Validity,
                _extension_additions_list_spec_for_Validity,
                _root_component_type_list_2_spec_for_Validity,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) Validity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Validity, encoded as an ASN.1 Element.
 */
export function _encode_Validity(
    value: Validity,
    elGetter: $.ASN1Encoder<Validity>
) {
    if (!_cached_encoder_for_Validity) {
        _cached_encoder_for_Validity = function (
            value: Validity,
            elGetter: $.ASN1Encoder<Validity>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.validFrom === undefined ||
                            $.deepEq(
                                value.validFrom,
                                Validity._default_value_for_validFrom
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Validity_validFrom,
                                      $.BER
                                  )(value.validFrom, $.BER),
                            /* IF_DEFAULT */ value.validUntil === undefined ||
                            $.deepEq(
                                value.validUntil,
                                Validity._default_value_for_validUntil
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Validity_validUntil,
                                      $.BER
                                  )(value.validUntil, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Validity(value, elGetter);
}

/**
 * @summary EstablishOperationalBindingArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EstablishOperationalBindingArgumentData ::= SEQUENCE {
 *   bindingType        [0]  OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   bindingID          [1]  OperationalBindingID OPTIONAL,
 *   accessPoint        [2]  AccessPoint,
 *                -- symmetric, Role A initiates, or Role B initiates
 *   initiator               CHOICE {
 *     symmetric          [3]  OPERATIONAL-BINDING.&both.&EstablishParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleA-initiates    [4]  OPERATIONAL-BINDING.&roleA.&EstablishParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleB-initiates    [5]  OPERATIONAL-BINDING.&roleB.&EstablishParam
 *                               ({OpBindingSet}{@bindingType})},
 *   agreement          [6]  OPERATIONAL-BINDING.&Agreement
 *                             ({OpBindingSet}{@bindingType}),
 *   valid              [7]  Validity DEFAULT {},
 *   securityParameters [8]  SecurityParameters OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class EstablishOperationalBindingArgumentData {
    constructor(
        /**
         * @summary `bindingType`.
         * @public
         * @readonly
         */
        readonly bindingType: OBJECT_IDENTIFIER,
        /**
         * @summary `bindingID`.
         * @public
         * @readonly
         */
        readonly bindingID: OPTIONAL<OperationalBindingID>,
        /**
         * @summary `accessPoint`.
         * @public
         * @readonly
         */
        readonly accessPoint: AccessPoint,
        /**
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: EstablishOperationalBindingArgumentData_initiator,
        /**
         * @summary `agreement`.
         * @public
         * @readonly
         */
        readonly agreement: _Element,
        /**
         * @summary `valid`.
         * @public
         * @readonly
         */
        readonly valid: OPTIONAL<Validity>,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EstablishOperationalBindingArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `EstablishOperationalBindingArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EstablishOperationalBindingArgumentData`.
     * @returns {EstablishOperationalBindingArgumentData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof EstablishOperationalBindingArgumentData]: EstablishOperationalBindingArgumentData[_K];
            }
        >
    ): EstablishOperationalBindingArgumentData {
        return new EstablishOperationalBindingArgumentData(
            _o.bindingType,
            _o.bindingID,
            _o.accessPoint,
            _o.initiator,
            _o.agreement,
            _o.valid,
            _o.securityParameters,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `valid`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_valid() {
        return Validity._from_object({});
    }
}
/**
 * @summary The Leading Root Component Types of EstablishOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EstablishOperationalBindingArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "bindingType",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "bindingID",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "accessPoint",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("initiator", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "agreement",
        false,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "valid",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of EstablishOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EstablishOperationalBindingArgumentData: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of EstablishOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EstablishOperationalBindingArgumentData: $.ComponentSpec[] = [];
let _cached_decoder_for_EstablishOperationalBindingArgumentData: $.ASN1Decoder<
    EstablishOperationalBindingArgumentData
> | null = null;
let _cached_encoder_for_EstablishOperationalBindingArgumentData: $.ASN1Encoder<
    EstablishOperationalBindingArgumentData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EstablishOperationalBindingArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishOperationalBindingArgumentData} The decoded data structure.
 */
export function _decode_EstablishOperationalBindingArgumentData(el: _Element) {
    if (!_cached_decoder_for_EstablishOperationalBindingArgumentData) {
        _cached_decoder_for_EstablishOperationalBindingArgumentData = function (
            el: _Element
        ): EstablishOperationalBindingArgumentData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bindingType!: OBJECT_IDENTIFIER;
            let bindingID: OPTIONAL<OperationalBindingID>;
            let accessPoint!: AccessPoint;
            let initiator!: EstablishOperationalBindingArgumentData_initiator;
            let agreement!: _Element;
            let valid: OPTIONAL<Validity> =
                EstablishOperationalBindingArgumentData._default_value_for_valid;
            let securityParameters: OPTIONAL<SecurityParameters>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                bindingType: (_el: _Element): void => {
                    bindingType = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                bindingID: (_el: _Element): void => {
                    bindingID = $._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
                accessPoint: (_el: _Element): void => {
                    accessPoint = $._decode_explicit<AccessPoint>(
                        () => _decode_AccessPoint
                    )(_el);
                },
                initiator: (_el: _Element): void => {
                    initiator = _decode_EstablishOperationalBindingArgumentData_initiator(
                        _el
                    );
                },
                agreement: (_el: _Element): void => {
                    agreement = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                valid: (_el: _Element): void => {
                    valid = $._decode_explicit<Validity>(
                        () => _decode_Validity
                    )(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EstablishOperationalBindingArgumentData,
                _extension_additions_list_spec_for_EstablishOperationalBindingArgumentData,
                _root_component_type_list_2_spec_for_EstablishOperationalBindingArgumentData,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) EstablishOperationalBindingArgumentData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishOperationalBindingArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_EstablishOperationalBindingArgumentData(
    value: EstablishOperationalBindingArgumentData,
    elGetter: $.ASN1Encoder<EstablishOperationalBindingArgumentData>
) {
    if (!_cached_encoder_for_EstablishOperationalBindingArgumentData) {
        _cached_encoder_for_EstablishOperationalBindingArgumentData = function (
            value: EstablishOperationalBindingArgumentData,
            elGetter: $.ASN1Encoder<EstablishOperationalBindingArgumentData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeObjectIdentifier,
                                $.BER
                            )(value.bindingType, $.BER),
                            /* IF_ABSENT  */ value.bindingID === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_OperationalBindingID,
                                      $.BER
                                  )(value.bindingID, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => _encode_AccessPoint,
                                $.BER
                            )(value.accessPoint, $.BER),
                            /* REQUIRED   */ _encode_EstablishOperationalBindingArgumentData_initiator(
                                value.initiator,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                6,
                                () => $._encodeAny,
                                $.BER
                            )(value.agreement, $.BER),
                            /* IF_DEFAULT */ value.valid === undefined ||
                            $.deepEq(
                                value.valid,
                                EstablishOperationalBindingArgumentData._default_value_for_valid
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_Validity,
                                      $.BER
                                  )(value.valid, $.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EstablishOperationalBindingArgumentData(
        value,
        elGetter
    );
}

export type EstablishOperationalBindingArgument<> = OPTIONALLY_PROTECTED_SEQ<
    EstablishOperationalBindingArgumentData
>; // DefinedType
let _cached_decoder_for_EstablishOperationalBindingArgument: $.ASN1Decoder<
    EstablishOperationalBindingArgument
> | null = null;
let _cached_encoder_for_EstablishOperationalBindingArgument: $.ASN1Encoder<
    EstablishOperationalBindingArgument
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EstablishOperationalBindingArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishOperationalBindingArgument} The decoded data structure.
 */
export function _decode_EstablishOperationalBindingArgument(el: _Element) {
    if (!_cached_decoder_for_EstablishOperationalBindingArgument) {
        _cached_decoder_for_EstablishOperationalBindingArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            EstablishOperationalBindingArgumentData
        >(_decode_EstablishOperationalBindingArgumentData);
    }
    return _cached_decoder_for_EstablishOperationalBindingArgument(el);
}
/**
 * @summary Encodes a(n) EstablishOperationalBindingArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishOperationalBindingArgument, encoded as an ASN.1 Element.
 */
export function _encode_EstablishOperationalBindingArgument(
    value: EstablishOperationalBindingArgument,
    elGetter: $.ASN1Encoder<EstablishOperationalBindingArgument>
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

/**
 * @summary EstablishOperationalBindingResultData_initiator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EstablishOperationalBindingResultData-initiator ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EstablishOperationalBindingResultData_initiator =
    | { symmetric: _Element } /* CHOICE_ALT_ROOT */
    | { roleA_replies: _Element } /* CHOICE_ALT_ROOT */
    | { roleB_replies: _Element } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_EstablishOperationalBindingResultData_initiator: $.ASN1Decoder<
    EstablishOperationalBindingResultData_initiator
> | null = null;
let _cached_encoder_for_EstablishOperationalBindingResultData_initiator: $.ASN1Encoder<
    EstablishOperationalBindingResultData_initiator
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EstablishOperationalBindingResultData_initiator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishOperationalBindingResultData_initiator} The decoded data structure.
 */
export function _decode_EstablishOperationalBindingResultData_initiator(
    el: _Element
) {
    if (!_cached_decoder_for_EstablishOperationalBindingResultData_initiator) {
        _cached_decoder_for_EstablishOperationalBindingResultData_initiator = $._decode_inextensible_choice<
            EstablishOperationalBindingResultData_initiator
        >({
            "CONTEXT 3": [
                "symmetric",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
            "CONTEXT 4": [
                "roleA_replies",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
            "CONTEXT 5": [
                "roleB_replies",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
        });
    }
    return _cached_decoder_for_EstablishOperationalBindingResultData_initiator(
        el
    );
}
/**
 * @summary Encodes a(n) EstablishOperationalBindingResultData_initiator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishOperationalBindingResultData_initiator, encoded as an ASN.1 Element.
 */
export function _encode_EstablishOperationalBindingResultData_initiator(
    value: EstablishOperationalBindingResultData_initiator,
    elGetter: $.ASN1Encoder<EstablishOperationalBindingResultData_initiator>
) {
    if (!_cached_encoder_for_EstablishOperationalBindingResultData_initiator) {
        _cached_encoder_for_EstablishOperationalBindingResultData_initiator = $._encode_choice<
            EstablishOperationalBindingResultData_initiator
        >(
            {
                symmetric: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => $._encodeAny,
                    $.BER
                ),
                roleA_replies: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => $._encodeAny,
                    $.BER
                ),
                roleB_replies: $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => $._encodeAny,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EstablishOperationalBindingResultData_initiator(
        value,
        elGetter
    );
}

/**
 * @summary EstablishOperationalBindingResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EstablishOperationalBindingResultData ::= SEQUENCE {
 *   bindingType   [0]  OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   bindingID     [1]  OperationalBindingID OPTIONAL,
 *   accessPoint   [2]  AccessPoint,
 *   -- symmetric, Role A replies, or Role B replies
 *   initiator          CHOICE {
 *     symmetric     [3]  OPERATIONAL-BINDING.&both.&EstablishParam
 *                          ({OpBindingSet}{@bindingType}),
 *     roleA-replies [4]  OPERATIONAL-BINDING.&roleA.&EstablishParam
 *                          ({OpBindingSet}{@bindingType}),
 *     roleB-replies [5]  OPERATIONAL-BINDING.&roleB.&EstablishParam
 *                          ({OpBindingSet}{@bindingType})},
 *   ...,
 *   ...,
 *   COMPONENTS OF      CommonResultsSeq }
 * ```
 *
 * @class
 */
export class EstablishOperationalBindingResultData {
    constructor(
        /**
         * @summary `bindingType`.
         * @public
         * @readonly
         */
        readonly bindingType: OBJECT_IDENTIFIER,
        /**
         * @summary `bindingID`.
         * @public
         * @readonly
         */
        readonly bindingID: OPTIONAL<OperationalBindingID>,
        /**
         * @summary `accessPoint`.
         * @public
         * @readonly
         */
        readonly accessPoint: AccessPoint,
        /**
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: EstablishOperationalBindingResultData_initiator,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<
            SecurityParameters
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<
            DistinguishedName
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<
            BOOLEAN
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a EstablishOperationalBindingResultData
     * @description
     *
     * This takes an `object` and converts it to a `EstablishOperationalBindingResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EstablishOperationalBindingResultData`.
     * @returns {EstablishOperationalBindingResultData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof EstablishOperationalBindingResultData]: EstablishOperationalBindingResultData[_K];
            }
        >
    ): EstablishOperationalBindingResultData {
        return new EstablishOperationalBindingResultData(
            _o.bindingType,
            _o.bindingID,
            _o.accessPoint,
            _o.initiator,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of EstablishOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EstablishOperationalBindingResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "bindingType",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "bindingID",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "accessPoint",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("initiator", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of EstablishOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EstablishOperationalBindingResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "performer",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 28),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notification",
        true,
        $.hasTag(_TagClass.context, 27),
        undefined,
        undefined
    ),
];
/**
 * @summary The Extension Addition Component Types of EstablishOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EstablishOperationalBindingResultData: $.ComponentSpec[] = [];
let _cached_decoder_for_EstablishOperationalBindingResultData: $.ASN1Decoder<
    EstablishOperationalBindingResultData
> | null = null;
let _cached_encoder_for_EstablishOperationalBindingResultData: $.ASN1Encoder<
    EstablishOperationalBindingResultData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EstablishOperationalBindingResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishOperationalBindingResultData} The decoded data structure.
 */
export function _decode_EstablishOperationalBindingResultData(el: _Element) {
    if (!_cached_decoder_for_EstablishOperationalBindingResultData) {
        _cached_decoder_for_EstablishOperationalBindingResultData = function (
            el: _Element
        ): EstablishOperationalBindingResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bindingType!: OBJECT_IDENTIFIER;
            let bindingID: OPTIONAL<OperationalBindingID>;
            let accessPoint!: AccessPoint;
            let initiator!: EstablishOperationalBindingResultData_initiator;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                EstablishOperationalBindingResultData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                bindingType: (_el: _Element): void => {
                    bindingType = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                bindingID: (_el: _Element): void => {
                    bindingID = $._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
                accessPoint: (_el: _Element): void => {
                    accessPoint = $._decode_explicit<AccessPoint>(
                        () => _decode_AccessPoint
                    )(_el);
                },
                initiator: (_el: _Element): void => {
                    initiator = _decode_EstablishOperationalBindingResultData_initiator(
                        _el
                    );
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                performer: (_el: _Element): void => {
                    performer = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: _Element): void => {
                    aliasDereferenced = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                notification: (_el: _Element): void => {
                    notification = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSequenceOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EstablishOperationalBindingResultData,
                _extension_additions_list_spec_for_EstablishOperationalBindingResultData,
                _root_component_type_list_2_spec_for_EstablishOperationalBindingResultData,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) EstablishOperationalBindingResultData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishOperationalBindingResultData, encoded as an ASN.1 Element.
 */
export function _encode_EstablishOperationalBindingResultData(
    value: EstablishOperationalBindingResultData,
    elGetter: $.ASN1Encoder<EstablishOperationalBindingResultData>
) {
    if (!_cached_encoder_for_EstablishOperationalBindingResultData) {
        _cached_encoder_for_EstablishOperationalBindingResultData = function (
            value: EstablishOperationalBindingResultData,
            elGetter: $.ASN1Encoder<EstablishOperationalBindingResultData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeObjectIdentifier,
                                $.BER
                            )(value.bindingType, $.BER),
                            /* IF_ABSENT  */ value.bindingID === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_OperationalBindingID,
                                      $.BER
                                  )(value.bindingID, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => _encode_AccessPoint,
                                $.BER
                            )(value.accessPoint, $.BER),
                            /* REQUIRED   */ _encode_EstablishOperationalBindingResultData_initiator(
                                value.initiator,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.performer, $.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                EstablishOperationalBindingResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.aliasDereferenced, $.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () =>
                                          $._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.notification, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EstablishOperationalBindingResultData(
        value,
        elGetter
    );
}

export type EstablishOperationalBindingResult<> = OPTIONALLY_PROTECTED_SEQ<
    EstablishOperationalBindingResultData
>; // DefinedType
let _cached_decoder_for_EstablishOperationalBindingResult: $.ASN1Decoder<
    EstablishOperationalBindingResult
> | null = null;
let _cached_encoder_for_EstablishOperationalBindingResult: $.ASN1Encoder<
    EstablishOperationalBindingResult
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EstablishOperationalBindingResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishOperationalBindingResult} The decoded data structure.
 */
export function _decode_EstablishOperationalBindingResult(el: _Element) {
    if (!_cached_decoder_for_EstablishOperationalBindingResult) {
        _cached_decoder_for_EstablishOperationalBindingResult = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            EstablishOperationalBindingResultData
        >(_decode_EstablishOperationalBindingResultData);
    }
    return _cached_decoder_for_EstablishOperationalBindingResult(el);
}
/**
 * @summary Encodes a(n) EstablishOperationalBindingResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishOperationalBindingResult, encoded as an ASN.1 Element.
 */
export function _encode_EstablishOperationalBindingResult(
    value: EstablishOperationalBindingResult,
    elGetter: $.ASN1Encoder<EstablishOperationalBindingResult>
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

/**
 * @summary OpBindingErrorParam_problem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OpBindingErrorParam-problem ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_OpBindingErrorParam_problem {
    invalidID = 0,
    duplicateID = 1,
    unsupportedBindingType = 2,
    notAllowedForRole = 3,
    parametersMissing = 4,
    roleAssignment = 5,
    invalidStartTime = 6,
    invalidEndTime = 7,
    invalidAgreement = 8,
    currentlyNotDecidable = 9,
    modificationNotAllowed = 10,
    invalidBindingType = 11,
    invalidNewID = 12,
}
/**
 * @summary OpBindingErrorParam_problem
 */
export type OpBindingErrorParam_problem =
    | _enum_for_OpBindingErrorParam_problem
    | ENUMERATED;
/**
 * @summary OpBindingErrorParam_problem_invalidID
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidID: OpBindingErrorParam_problem = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary OpBindingErrorParam_problem_duplicateID
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_duplicateID: OpBindingErrorParam_problem = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary OpBindingErrorParam_problem_unsupportedBindingType
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_unsupportedBindingType: OpBindingErrorParam_problem = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary OpBindingErrorParam_problem_notAllowedForRole
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_notAllowedForRole: OpBindingErrorParam_problem = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary OpBindingErrorParam_problem_parametersMissing
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_parametersMissing: OpBindingErrorParam_problem = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary OpBindingErrorParam_problem_roleAssignment
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_roleAssignment: OpBindingErrorParam_problem = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary OpBindingErrorParam_problem_invalidStartTime
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidStartTime: OpBindingErrorParam_problem = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary OpBindingErrorParam_problem_invalidEndTime
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidEndTime: OpBindingErrorParam_problem = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary OpBindingErrorParam_problem_invalidAgreement
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidAgreement: OpBindingErrorParam_problem = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary OpBindingErrorParam_problem_currentlyNotDecidable
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_currentlyNotDecidable: OpBindingErrorParam_problem = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary OpBindingErrorParam_problem_modificationNotAllowed
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_modificationNotAllowed: OpBindingErrorParam_problem = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary OpBindingErrorParam_problem_invalidBindingType
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidBindingType: OpBindingErrorParam_problem = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary OpBindingErrorParam_problem_invalidNewID
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidNewID: OpBindingErrorParam_problem = 12; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_OpBindingErrorParam_problem: $.ASN1Decoder<
    OpBindingErrorParam_problem
> | null = null;
let _cached_encoder_for_OpBindingErrorParam_problem: $.ASN1Encoder<
    OpBindingErrorParam_problem
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OpBindingErrorParam_problem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OpBindingErrorParam_problem} The decoded data structure.
 */
export function _decode_OpBindingErrorParam_problem(el: _Element) {
    if (!_cached_decoder_for_OpBindingErrorParam_problem) {
        _cached_decoder_for_OpBindingErrorParam_problem = $._decodeEnumerated;
    }
    return _cached_decoder_for_OpBindingErrorParam_problem(el);
}
/**
 * @summary Encodes a(n) OpBindingErrorParam_problem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OpBindingErrorParam_problem, encoded as an ASN.1 Element.
 */
export function _encode_OpBindingErrorParam_problem(
    value: OpBindingErrorParam_problem,
    elGetter: $.ASN1Encoder<OpBindingErrorParam_problem>
) {
    if (!_cached_encoder_for_OpBindingErrorParam_problem) {
        _cached_encoder_for_OpBindingErrorParam_problem = $._encodeEnumerated;
    }
    return _cached_encoder_for_OpBindingErrorParam_problem(value, elGetter);
}

/**
 * @summary OpBindingErrorParam
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OpBindingErrorParam ::= SEQUENCE {
 *   problem            [0]  ENUMERATED {
 *     invalidID              (0),
 *     duplicateID            (1),
 *     unsupportedBindingType (2),
 *     notAllowedForRole      (3),
 *     parametersMissing      (4),
 *     roleAssignment         (5),
 *     invalidStartTime       (6),
 *     invalidEndTime         (7),
 *     invalidAgreement       (8),
 *     currentlyNotDecidable  (9),
 *     modificationNotAllowed (10),
 *     invalidBindingType     (11),
 *     invalidNewID           (12),
 *     ... },
 *   bindingType        [1]  OPERATIONAL-BINDING.&id({OpBindingSet}) OPTIONAL,
 *   agreementProposal  [2]  OPERATIONAL-BINDING.&Agreement
 *                           ({OpBindingSet}{@bindingType}) OPTIONAL,
 *   retryAt            [3]  Time OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF           CommonResultsSeq }
 * ```
 *
 * @class
 */
export class OpBindingErrorParam {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: OpBindingErrorParam_problem,
        /**
         * @summary `bindingType`.
         * @public
         * @readonly
         */
        readonly bindingType: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `agreementProposal`.
         * @public
         * @readonly
         */
        readonly agreementProposal: OPTIONAL<_Element>,
        /**
         * @summary `retryAt`.
         * @public
         * @readonly
         */
        readonly retryAt: OPTIONAL<Time>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<
            SecurityParameters
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<
            DistinguishedName
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<
            BOOLEAN
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a OpBindingErrorParam
     * @description
     *
     * This takes an `object` and converts it to a `OpBindingErrorParam`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OpBindingErrorParam`.
     * @returns {OpBindingErrorParam}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof OpBindingErrorParam]: OpBindingErrorParam[_K] }
        >
    ): OpBindingErrorParam {
        return new OpBindingErrorParam(
            _o.problem,
            _o.bindingType,
            _o.agreementProposal,
            _o.retryAt,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
    /**
     * @summary The enum used as the type of the component `problem`
     * @public
     * @static
     */

    public static _enum_for_problem = _enum_for_OpBindingErrorParam_problem;
}
/**
 * @summary The Leading Root Component Types of OpBindingErrorParam
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OpBindingErrorParam: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "problem",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "bindingType",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "agreementProposal",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "retryAt",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of OpBindingErrorParam
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OpBindingErrorParam: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "performer",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 28),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notification",
        true,
        $.hasTag(_TagClass.context, 27),
        undefined,
        undefined
    ),
];
/**
 * @summary The Extension Addition Component Types of OpBindingErrorParam
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OpBindingErrorParam: $.ComponentSpec[] = [];
let _cached_decoder_for_OpBindingErrorParam: $.ASN1Decoder<
    OpBindingErrorParam
> | null = null;
let _cached_encoder_for_OpBindingErrorParam: $.ASN1Encoder<
    OpBindingErrorParam
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OpBindingErrorParam
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OpBindingErrorParam} The decoded data structure.
 */
export function _decode_OpBindingErrorParam(el: _Element) {
    if (!_cached_decoder_for_OpBindingErrorParam) {
        _cached_decoder_for_OpBindingErrorParam = function (
            el: _Element
        ): OpBindingErrorParam {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let problem!: OpBindingErrorParam_problem;
            let bindingType: OPTIONAL<OBJECT_IDENTIFIER>;
            let agreementProposal: OPTIONAL<_Element>;
            let retryAt: OPTIONAL<Time>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                OpBindingErrorParam._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<OpBindingErrorParam_problem>(
                        () => _decode_OpBindingErrorParam_problem
                    )(_el);
                },
                bindingType: (_el: _Element): void => {
                    bindingType = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                agreementProposal: (_el: _Element): void => {
                    agreementProposal = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                retryAt: (_el: _Element): void => {
                    retryAt = $._decode_explicit<Time>(() => _decode_Time)(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                performer: (_el: _Element): void => {
                    performer = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: _Element): void => {
                    aliasDereferenced = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                notification: (_el: _Element): void => {
                    notification = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSequenceOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OpBindingErrorParam,
                _extension_additions_list_spec_for_OpBindingErrorParam,
                _root_component_type_list_2_spec_for_OpBindingErrorParam,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) OpBindingErrorParam into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OpBindingErrorParam, encoded as an ASN.1 Element.
 */
export function _encode_OpBindingErrorParam(
    value: OpBindingErrorParam,
    elGetter: $.ASN1Encoder<OpBindingErrorParam>
) {
    if (!_cached_encoder_for_OpBindingErrorParam) {
        _cached_encoder_for_OpBindingErrorParam = function (
            value: OpBindingErrorParam,
            elGetter: $.ASN1Encoder<OpBindingErrorParam>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_OpBindingErrorParam_problem,
                                $.BER
                            )(value.problem, $.BER),
                            /* IF_ABSENT  */ value.bindingType === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.bindingType, $.BER),
                            /* IF_ABSENT  */ value.agreementProposal ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeAny,
                                      $.BER
                                  )(value.agreementProposal, $.BER),
                            /* IF_ABSENT  */ value.retryAt === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_Time,
                                      $.BER
                                  )(value.retryAt, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.performer, $.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                OpBindingErrorParam._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.aliasDereferenced, $.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () =>
                                          $._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.notification, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OpBindingErrorParam(value, elGetter);
}

/**
 * @summary operationalBindingError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * operationalBindingError ERROR ::= {
 *   PARAMETER OPTIONALLY-PROTECTED-SEQ  {OpBindingErrorParam}
 *   CODE      id-err-operationalBindingError }
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export const operationalBindingError: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            OpBindingErrorParam
        >(_decode_OpBindingErrorParam),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
            OpBindingErrorParam
        >(_encode_OpBindingErrorParam),
    },
    "&errorCode": id_err_operationalBindingError /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary establishOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * establishOperationalBinding OPERATION ::= {
 *   ARGUMENT   EstablishOperationalBindingArgument
 *   RESULT     EstablishOperationalBindingResult
 *   ERRORS     {operationalBindingError | securityError}
 *   CODE       id-op-establishOperationalBinding }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const establishOperationalBinding: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EstablishOperationalBindingArgument,
        "&ResultType": _decode_EstablishOperationalBindingResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_EstablishOperationalBindingArgument,
        "&ResultType": _encode_EstablishOperationalBindingResult,
    },
    "&Errors": [
        operationalBindingError,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_op_establishOperationalBinding /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ModifyOperationalBindingArgumentData_initiator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyOperationalBindingArgumentData-initiator ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ModifyOperationalBindingArgumentData_initiator =
    | { symmetric: _Element } /* CHOICE_ALT_ROOT */
    | { roleA_initiates: _Element } /* CHOICE_ALT_ROOT */
    | { roleB_initiates: _Element } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ModifyOperationalBindingArgumentData_initiator: $.ASN1Decoder<
    ModifyOperationalBindingArgumentData_initiator
> | null = null;
let _cached_encoder_for_ModifyOperationalBindingArgumentData_initiator: $.ASN1Encoder<
    ModifyOperationalBindingArgumentData_initiator
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyOperationalBindingArgumentData_initiator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyOperationalBindingArgumentData_initiator} The decoded data structure.
 */
export function _decode_ModifyOperationalBindingArgumentData_initiator(
    el: _Element
) {
    if (!_cached_decoder_for_ModifyOperationalBindingArgumentData_initiator) {
        _cached_decoder_for_ModifyOperationalBindingArgumentData_initiator = $._decode_inextensible_choice<
            ModifyOperationalBindingArgumentData_initiator
        >({
            "CONTEXT 3": [
                "symmetric",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
            "CONTEXT 4": [
                "roleA_initiates",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
            "CONTEXT 5": [
                "roleB_initiates",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
        });
    }
    return _cached_decoder_for_ModifyOperationalBindingArgumentData_initiator(
        el
    );
}
/**
 * @summary Encodes a(n) ModifyOperationalBindingArgumentData_initiator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyOperationalBindingArgumentData_initiator, encoded as an ASN.1 Element.
 */
export function _encode_ModifyOperationalBindingArgumentData_initiator(
    value: ModifyOperationalBindingArgumentData_initiator,
    elGetter: $.ASN1Encoder<ModifyOperationalBindingArgumentData_initiator>
) {
    if (!_cached_encoder_for_ModifyOperationalBindingArgumentData_initiator) {
        _cached_encoder_for_ModifyOperationalBindingArgumentData_initiator = $._encode_choice<
            ModifyOperationalBindingArgumentData_initiator
        >(
            {
                symmetric: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => $._encodeAny,
                    $.BER
                ),
                roleA_initiates: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => $._encodeAny,
                    $.BER
                ),
                roleB_initiates: $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => $._encodeAny,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ModifyOperationalBindingArgumentData_initiator(
        value,
        elGetter
    );
}

/**
 * @summary ModifiedValidity_validFrom
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifiedValidity-validFrom ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ModifiedValidity_validFrom =
    | { now: NULL } /* CHOICE_ALT_ROOT */
    | { time: Time } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ModifiedValidity_validFrom: $.ASN1Decoder<
    ModifiedValidity_validFrom
> | null = null;
let _cached_encoder_for_ModifiedValidity_validFrom: $.ASN1Encoder<
    ModifiedValidity_validFrom
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ModifiedValidity_validFrom
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifiedValidity_validFrom} The decoded data structure.
 */
export function _decode_ModifiedValidity_validFrom(el: _Element) {
    if (!_cached_decoder_for_ModifiedValidity_validFrom) {
        _cached_decoder_for_ModifiedValidity_validFrom = $._decode_extensible_choice<
            ModifiedValidity_validFrom
        >({
            "CONTEXT 0": ["now", $._decode_explicit<NULL>(() => $._decodeNull)],
            "CONTEXT 1": ["time", $._decode_explicit<Time>(() => _decode_Time)],
        });
    }
    return _cached_decoder_for_ModifiedValidity_validFrom(el);
}
/**
 * @summary Encodes a(n) ModifiedValidity_validFrom into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifiedValidity_validFrom, encoded as an ASN.1 Element.
 */
export function _encode_ModifiedValidity_validFrom(
    value: ModifiedValidity_validFrom,
    elGetter: $.ASN1Encoder<ModifiedValidity_validFrom>
) {
    if (!_cached_encoder_for_ModifiedValidity_validFrom) {
        _cached_encoder_for_ModifiedValidity_validFrom = $._encode_choice<
            ModifiedValidity_validFrom
        >(
            {
                now: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                time: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_Time,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ModifiedValidity_validFrom(value, elGetter);
}

/**
 * @summary ModifiedValidity_validUntil
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifiedValidity-validUntil ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ModifiedValidity_validUntil =
    | { explicitTermination: NULL } /* CHOICE_ALT_ROOT */
    | { time: Time } /* CHOICE_ALT_ROOT */
    | { unchanged: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ModifiedValidity_validUntil: $.ASN1Decoder<
    ModifiedValidity_validUntil
> | null = null;
let _cached_encoder_for_ModifiedValidity_validUntil: $.ASN1Encoder<
    ModifiedValidity_validUntil
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ModifiedValidity_validUntil
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifiedValidity_validUntil} The decoded data structure.
 */
export function _decode_ModifiedValidity_validUntil(el: _Element) {
    if (!_cached_decoder_for_ModifiedValidity_validUntil) {
        _cached_decoder_for_ModifiedValidity_validUntil = $._decode_extensible_choice<
            ModifiedValidity_validUntil
        >({
            "CONTEXT 0": [
                "explicitTermination",
                $._decode_explicit<NULL>(() => $._decodeNull),
            ],
            "CONTEXT 1": ["time", $._decode_explicit<Time>(() => _decode_Time)],
            "CONTEXT 2": [
                "unchanged",
                $._decode_explicit<NULL>(() => $._decodeNull),
            ],
        });
    }
    return _cached_decoder_for_ModifiedValidity_validUntil(el);
}
/**
 * @summary Encodes a(n) ModifiedValidity_validUntil into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifiedValidity_validUntil, encoded as an ASN.1 Element.
 */
export function _encode_ModifiedValidity_validUntil(
    value: ModifiedValidity_validUntil,
    elGetter: $.ASN1Encoder<ModifiedValidity_validUntil>
) {
    if (!_cached_encoder_for_ModifiedValidity_validUntil) {
        _cached_encoder_for_ModifiedValidity_validUntil = $._encode_choice<
            ModifiedValidity_validUntil
        >(
            {
                explicitTermination: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                time: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_Time,
                    $.BER
                ),
                unchanged: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => $._encodeNull,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ModifiedValidity_validUntil(value, elGetter);
}

/**
 * @summary ModifiedValidity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifiedValidity ::= SEQUENCE {
 *   validFrom            [0]  CHOICE {
 *     now                  [0]  NULL,
 *     time                 [1]  Time,
 *     ...} DEFAULT now:NULL,
 *   validUntil           [1]  CHOICE {
 *     explicitTermination  [0]  NULL,
 *     time                 [1]  Time,
 *     unchanged            [2]  NULL,
 *     ... } DEFAULT unchanged:NULL,
 *   ... }
 * ```
 *
 * @class
 */
export class ModifiedValidity {
    constructor(
        /**
         * @summary `validFrom`.
         * @public
         * @readonly
         */
        readonly validFrom: OPTIONAL<ModifiedValidity_validFrom>,
        /**
         * @summary `validUntil`.
         * @public
         * @readonly
         */
        readonly validUntil: OPTIONAL<ModifiedValidity_validUntil>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModifiedValidity
     * @description
     *
     * This takes an `object` and converts it to a `ModifiedValidity`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifiedValidity`.
     * @returns {ModifiedValidity}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ModifiedValidity]: ModifiedValidity[_K] }>
    ): ModifiedValidity {
        return new ModifiedValidity(
            _o.validFrom,
            _o.validUntil,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `validFrom`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_validFrom() {
        return { now: null };
    }
    /**
     * @summary Getter that returns the default value for `validUntil`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_validUntil() {
        return { unchanged: null };
    }
}
/**
 * @summary The Leading Root Component Types of ModifiedValidity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifiedValidity: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "validFrom",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "validUntil",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ModifiedValidity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifiedValidity: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ModifiedValidity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifiedValidity: $.ComponentSpec[] = [];
let _cached_decoder_for_ModifiedValidity: $.ASN1Decoder<
    ModifiedValidity
> | null = null;
let _cached_encoder_for_ModifiedValidity: $.ASN1Encoder<
    ModifiedValidity
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ModifiedValidity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifiedValidity} The decoded data structure.
 */
export function _decode_ModifiedValidity(el: _Element) {
    if (!_cached_decoder_for_ModifiedValidity) {
        _cached_decoder_for_ModifiedValidity = function (
            el: _Element
        ): ModifiedValidity {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let validFrom: OPTIONAL<ModifiedValidity_validFrom> =
                ModifiedValidity._default_value_for_validFrom;
            let validUntil: OPTIONAL<ModifiedValidity_validUntil> =
                ModifiedValidity._default_value_for_validUntil;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                validFrom: (_el: _Element): void => {
                    validFrom = $._decode_explicit<ModifiedValidity_validFrom>(
                        () => _decode_ModifiedValidity_validFrom
                    )(_el);
                },
                validUntil: (_el: _Element): void => {
                    validUntil = $._decode_explicit<
                        ModifiedValidity_validUntil
                    >(() => _decode_ModifiedValidity_validUntil)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifiedValidity,
                _extension_additions_list_spec_for_ModifiedValidity,
                _root_component_type_list_2_spec_for_ModifiedValidity,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) ModifiedValidity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifiedValidity, encoded as an ASN.1 Element.
 */
export function _encode_ModifiedValidity(
    value: ModifiedValidity,
    elGetter: $.ASN1Encoder<ModifiedValidity>
) {
    if (!_cached_encoder_for_ModifiedValidity) {
        _cached_encoder_for_ModifiedValidity = function (
            value: ModifiedValidity,
            elGetter: $.ASN1Encoder<ModifiedValidity>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.validFrom === undefined ||
                            $.deepEq(
                                value.validFrom,
                                ModifiedValidity._default_value_for_validFrom
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_ModifiedValidity_validFrom,
                                      $.BER
                                  )(value.validFrom, $.BER),
                            /* IF_DEFAULT */ value.validUntil === undefined ||
                            $.deepEq(
                                value.validUntil,
                                ModifiedValidity._default_value_for_validUntil
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_ModifiedValidity_validUntil,
                                      $.BER
                                  )(value.validUntil, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ModifiedValidity(value, elGetter);
}

/**
 * @summary ModifyOperationalBindingArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyOperationalBindingArgumentData ::= SEQUENCE {
 *   bindingType       [0]  OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   bindingID         [1]  OperationalBindingID,
 *   accessPoint       [2]  AccessPoint OPTIONAL,
 *   -- symmetric, Role A initiates, or Role B initiates
 *   initiator              CHOICE {
 *     symmetric         [3]  OPERATIONAL-BINDING.&both.&ModifyParam
 *                           ({OpBindingSet}{@bindingType}),
 *     roleA-initiates   [4]  OPERATIONAL-BINDING.&roleA.&ModifyParam
 *                           ({OpBindingSet}{@bindingType}),
 *     roleB-initiates   [5]  OPERATIONAL-BINDING.&roleB.&ModifyParam
 *                           ({OpBindingSet}{@bindingType})} OPTIONAL,
 *   newBindingID      [6]  OperationalBindingID,
 *   newAgreement      [7]  OPERATIONAL-BINDING.&Agreement
 *                        ({OpBindingSet}{@bindingType}) OPTIONAL,
 *   valid               [8]  ModifiedValidity OPTIONAL,
 *   securityParameters  [9]  SecurityParameters OPTIONAL,
 *   ...}
 * ```
 *
 * @class
 */
export class ModifyOperationalBindingArgumentData {
    constructor(
        /**
         * @summary `bindingType`.
         * @public
         * @readonly
         */
        readonly bindingType: OBJECT_IDENTIFIER,
        /**
         * @summary `bindingID`.
         * @public
         * @readonly
         */
        readonly bindingID: OperationalBindingID,
        /**
         * @summary `accessPoint`.
         * @public
         * @readonly
         */
        readonly accessPoint: OPTIONAL<AccessPoint>,
        /**
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: OPTIONAL<
            ModifyOperationalBindingArgumentData_initiator
        >,
        /**
         * @summary `newBindingID`.
         * @public
         * @readonly
         */
        readonly newBindingID: OperationalBindingID,
        /**
         * @summary `newAgreement`.
         * @public
         * @readonly
         */
        readonly newAgreement: OPTIONAL<_Element>,
        /**
         * @summary `valid`.
         * @public
         * @readonly
         */
        readonly valid: OPTIONAL<ModifiedValidity>,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModifyOperationalBindingArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `ModifyOperationalBindingArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyOperationalBindingArgumentData`.
     * @returns {ModifyOperationalBindingArgumentData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ModifyOperationalBindingArgumentData]: ModifyOperationalBindingArgumentData[_K];
            }
        >
    ): ModifyOperationalBindingArgumentData {
        return new ModifyOperationalBindingArgumentData(
            _o.bindingType,
            _o.bindingID,
            _o.accessPoint,
            _o.initiator,
            _o.newBindingID,
            _o.newAgreement,
            _o.valid,
            _o.securityParameters,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ModifyOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyOperationalBindingArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "bindingType",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "bindingID",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "accessPoint",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("initiator", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "newBindingID",
        false,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "newAgreement",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "valid",
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ModifyOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyOperationalBindingArgumentData: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ModifyOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyOperationalBindingArgumentData: $.ComponentSpec[] = [];
let _cached_decoder_for_ModifyOperationalBindingArgumentData: $.ASN1Decoder<
    ModifyOperationalBindingArgumentData
> | null = null;
let _cached_encoder_for_ModifyOperationalBindingArgumentData: $.ASN1Encoder<
    ModifyOperationalBindingArgumentData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyOperationalBindingArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyOperationalBindingArgumentData} The decoded data structure.
 */
export function _decode_ModifyOperationalBindingArgumentData(el: _Element) {
    if (!_cached_decoder_for_ModifyOperationalBindingArgumentData) {
        _cached_decoder_for_ModifyOperationalBindingArgumentData = function (
            el: _Element
        ): ModifyOperationalBindingArgumentData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bindingType!: OBJECT_IDENTIFIER;
            let bindingID!: OperationalBindingID;
            let accessPoint: OPTIONAL<AccessPoint>;
            let initiator: OPTIONAL<ModifyOperationalBindingArgumentData_initiator>;
            let newBindingID!: OperationalBindingID;
            let newAgreement: OPTIONAL<_Element>;
            let valid: OPTIONAL<ModifiedValidity>;
            let securityParameters: OPTIONAL<SecurityParameters>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                bindingType: (_el: _Element): void => {
                    bindingType = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                bindingID: (_el: _Element): void => {
                    bindingID = $._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
                accessPoint: (_el: _Element): void => {
                    accessPoint = $._decode_explicit<AccessPoint>(
                        () => _decode_AccessPoint
                    )(_el);
                },
                initiator: (_el: _Element): void => {
                    initiator = _decode_ModifyOperationalBindingArgumentData_initiator(
                        _el
                    );
                },
                newBindingID: (_el: _Element): void => {
                    newBindingID = $._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
                newAgreement: (_el: _Element): void => {
                    newAgreement = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                valid: (_el: _Element): void => {
                    valid = $._decode_explicit<ModifiedValidity>(
                        () => _decode_ModifiedValidity
                    )(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifyOperationalBindingArgumentData,
                _extension_additions_list_spec_for_ModifyOperationalBindingArgumentData,
                _root_component_type_list_2_spec_for_ModifyOperationalBindingArgumentData,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) ModifyOperationalBindingArgumentData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyOperationalBindingArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_ModifyOperationalBindingArgumentData(
    value: ModifyOperationalBindingArgumentData,
    elGetter: $.ASN1Encoder<ModifyOperationalBindingArgumentData>
) {
    if (!_cached_encoder_for_ModifyOperationalBindingArgumentData) {
        _cached_encoder_for_ModifyOperationalBindingArgumentData = function (
            value: ModifyOperationalBindingArgumentData,
            elGetter: $.ASN1Encoder<ModifyOperationalBindingArgumentData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeObjectIdentifier,
                                $.BER
                            )(value.bindingType, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_OperationalBindingID,
                                $.BER
                            )(value.bindingID, $.BER),
                            /* IF_ABSENT  */ value.accessPoint === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_AccessPoint,
                                      $.BER
                                  )(value.accessPoint, $.BER),
                            /* IF_ABSENT  */ value.initiator === undefined
                                ? undefined
                                : _encode_ModifyOperationalBindingArgumentData_initiator(
                                      value.initiator,
                                      $.BER
                                  ),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                6,
                                () => _encode_OperationalBindingID,
                                $.BER
                            )(value.newBindingID, $.BER),
                            /* IF_ABSENT  */ value.newAgreement === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => $._encodeAny,
                                      $.BER
                                  )(value.newAgreement, $.BER),
                            /* IF_ABSENT  */ value.valid === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => _encode_ModifiedValidity,
                                      $.BER
                                  )(value.valid, $.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ModifyOperationalBindingArgumentData(
        value,
        elGetter
    );
}

export type ModifyOperationalBindingArgument<> = OPTIONALLY_PROTECTED_SEQ<
    ModifyOperationalBindingArgumentData
>; // DefinedType
let _cached_decoder_for_ModifyOperationalBindingArgument: $.ASN1Decoder<
    ModifyOperationalBindingArgument
> | null = null;
let _cached_encoder_for_ModifyOperationalBindingArgument: $.ASN1Encoder<
    ModifyOperationalBindingArgument
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyOperationalBindingArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyOperationalBindingArgument} The decoded data structure.
 */
export function _decode_ModifyOperationalBindingArgument(el: _Element) {
    if (!_cached_decoder_for_ModifyOperationalBindingArgument) {
        _cached_decoder_for_ModifyOperationalBindingArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            ModifyOperationalBindingArgumentData
        >(_decode_ModifyOperationalBindingArgumentData);
    }
    return _cached_decoder_for_ModifyOperationalBindingArgument(el);
}
/**
 * @summary Encodes a(n) ModifyOperationalBindingArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyOperationalBindingArgument, encoded as an ASN.1 Element.
 */
export function _encode_ModifyOperationalBindingArgument(
    value: ModifyOperationalBindingArgument,
    elGetter: $.ASN1Encoder<ModifyOperationalBindingArgument>
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

/**
 * @summary ModifyOperationalBindingResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyOperationalBindingResultData ::= SEQUENCE {
 *     newBindingID    OperationalBindingID,
 *     bindingType     OPERATIONAL-BINDING.&id({OpBindingSet}),
 *     newAgreement    OPERATIONAL-BINDING.&Agreement ({OpBindingSet}{@.bindingType}),
 *     valid           Validity OPTIONAL,
 *     ...,
 *     ...,
 *     COMPONENTS OF   CommonResultsSeq
 *     }
 * ```
 *
 * @class
 */
export class ModifyOperationalBindingResultData {
    constructor(
        /**
         * @summary `newBindingID`.
         * @public
         * @readonly
         */
        readonly newBindingID: OperationalBindingID,
        /**
         * @summary `bindingType`.
         * @public
         * @readonly
         */
        readonly bindingType: OBJECT_IDENTIFIER,
        /**
         * @summary `newAgreement`.
         * @public
         * @readonly
         */
        readonly newAgreement: _Element,
        /**
         * @summary `valid`.
         * @public
         * @readonly
         */
        readonly valid: OPTIONAL<Validity>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<
            SecurityParameters
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<
            DistinguishedName
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<
            BOOLEAN
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a ModifyOperationalBindingResultData
     * @description
     *
     * This takes an `object` and converts it to a `ModifyOperationalBindingResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyOperationalBindingResultData`.
     * @returns {ModifyOperationalBindingResultData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ModifyOperationalBindingResultData]: ModifyOperationalBindingResultData[_K];
            }
        >
    ): ModifyOperationalBindingResultData {
        return new ModifyOperationalBindingResultData(
            _o.newBindingID,
            _o.bindingType,
            _o.newAgreement,
            _o.valid,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of ModifyOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyOperationalBindingResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "newBindingID",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "bindingType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "newAgreement",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "valid",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ModifyOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyOperationalBindingResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "performer",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 28),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notification",
        true,
        $.hasTag(_TagClass.context, 27),
        undefined,
        undefined
    ),
];
/**
 * @summary The Extension Addition Component Types of ModifyOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyOperationalBindingResultData: $.ComponentSpec[] = [];
let _cached_decoder_for_ModifyOperationalBindingResultData: $.ASN1Decoder<
    ModifyOperationalBindingResultData
> | null = null;
let _cached_encoder_for_ModifyOperationalBindingResultData: $.ASN1Encoder<
    ModifyOperationalBindingResultData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyOperationalBindingResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyOperationalBindingResultData} The decoded data structure.
 */
export function _decode_ModifyOperationalBindingResultData(el: _Element) {
    if (!_cached_decoder_for_ModifyOperationalBindingResultData) {
        _cached_decoder_for_ModifyOperationalBindingResultData = function (
            el: _Element
        ): ModifyOperationalBindingResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let newBindingID!: OperationalBindingID;
            let bindingType!: OBJECT_IDENTIFIER;
            let newAgreement!: _Element;
            let valid: OPTIONAL<Validity>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                ModifyOperationalBindingResultData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                newBindingID: (_el: _Element): void => {
                    newBindingID = _decode_OperationalBindingID(_el);
                },
                bindingType: (_el: _Element): void => {
                    bindingType = $._decodeObjectIdentifier(_el);
                },
                newAgreement: (_el: _Element): void => {
                    newAgreement = $._decodeAny(_el);
                },
                valid: (_el: _Element): void => {
                    valid = _decode_Validity(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                performer: (_el: _Element): void => {
                    performer = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: _Element): void => {
                    aliasDereferenced = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                notification: (_el: _Element): void => {
                    notification = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSequenceOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifyOperationalBindingResultData,
                _extension_additions_list_spec_for_ModifyOperationalBindingResultData,
                _root_component_type_list_2_spec_for_ModifyOperationalBindingResultData,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) ModifyOperationalBindingResultData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyOperationalBindingResultData, encoded as an ASN.1 Element.
 */
export function _encode_ModifyOperationalBindingResultData(
    value: ModifyOperationalBindingResultData,
    elGetter: $.ASN1Encoder<ModifyOperationalBindingResultData>
) {
    if (!_cached_encoder_for_ModifyOperationalBindingResultData) {
        _cached_encoder_for_ModifyOperationalBindingResultData = function (
            value: ModifyOperationalBindingResultData,
            elGetter: $.ASN1Encoder<ModifyOperationalBindingResultData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_OperationalBindingID(
                                value.newBindingID,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.bindingType,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(
                                value.newAgreement,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.valid === undefined
                                ? undefined
                                : _encode_Validity(value.valid, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.performer, $.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                ModifyOperationalBindingResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.aliasDereferenced, $.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () =>
                                          $._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.notification, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ModifyOperationalBindingResultData(
        value,
        elGetter
    );
}

/**
 * @summary ModifyOperationalBindingResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyOperationalBindingResult  ::=  CHOICE {
 *   null            NULL,
 *   protected  [1]  OPTIONALLY-PROTECTED-SEQ{ ModifyOperationalBindingResultData },
 *   ... }
 * ```
 */
export type ModifyOperationalBindingResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          protected_: OPTIONALLY_PROTECTED_SEQ<
              ModifyOperationalBindingResultData
          >;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ModifyOperationalBindingResult: $.ASN1Decoder<
    ModifyOperationalBindingResult
> | null = null;
let _cached_encoder_for_ModifyOperationalBindingResult: $.ASN1Encoder<
    ModifyOperationalBindingResult
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyOperationalBindingResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyOperationalBindingResult} The decoded data structure.
 */
export function _decode_ModifyOperationalBindingResult(el: _Element) {
    if (!_cached_decoder_for_ModifyOperationalBindingResult) {
        _cached_decoder_for_ModifyOperationalBindingResult = $._decode_extensible_choice<
            ModifyOperationalBindingResult
        >({
            "UNIVERSAL 5": ["null_", $._decodeNull],
            "CONTEXT 1": [
                "protected_",
                $._decode_explicit<
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
/**
 * @summary Encodes a(n) ModifyOperationalBindingResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyOperationalBindingResult, encoded as an ASN.1 Element.
 */
export function _encode_ModifyOperationalBindingResult(
    value: ModifyOperationalBindingResult,
    elGetter: $.ASN1Encoder<ModifyOperationalBindingResult>
) {
    if (!_cached_encoder_for_ModifyOperationalBindingResult) {
        _cached_encoder_for_ModifyOperationalBindingResult = $._encode_choice<
            ModifyOperationalBindingResult
        >(
            {
                null_: $._encodeNull,
                protected_: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
                            ModifyOperationalBindingResultData
                        >(_encode_ModifyOperationalBindingResultData),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ModifyOperationalBindingResult(value, elGetter);
}

/**
 * @summary modifyOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modifyOperationalBinding OPERATION ::= {
 *   ARGUMENT  ModifyOperationalBindingArgument
 *   RESULT    ModifyOperationalBindingResult
 *   ERRORS    {operationalBindingError | securityError}
 *   CODE      id-op-modifyOperationalBinding }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const modifyOperationalBinding: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ModifyOperationalBindingArgument,
        "&ResultType": _decode_ModifyOperationalBindingResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ModifyOperationalBindingArgument,
        "&ResultType": _encode_ModifyOperationalBindingResult,
    },
    "&Errors": [
        operationalBindingError,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_op_modifyOperationalBinding /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary TerminateOperationalBindingArgumentData_initiator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateOperationalBindingArgumentData-initiator ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TerminateOperationalBindingArgumentData_initiator =
    | { symmetric: _Element } /* CHOICE_ALT_ROOT */
    | { roleA_initiates: _Element } /* CHOICE_ALT_ROOT */
    | { roleB_initiates: _Element } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_TerminateOperationalBindingArgumentData_initiator: $.ASN1Decoder<
    TerminateOperationalBindingArgumentData_initiator
> | null = null;
let _cached_encoder_for_TerminateOperationalBindingArgumentData_initiator: $.ASN1Encoder<
    TerminateOperationalBindingArgumentData_initiator
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TerminateOperationalBindingArgumentData_initiator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateOperationalBindingArgumentData_initiator} The decoded data structure.
 */
export function _decode_TerminateOperationalBindingArgumentData_initiator(
    el: _Element
) {
    if (
        !_cached_decoder_for_TerminateOperationalBindingArgumentData_initiator
    ) {
        _cached_decoder_for_TerminateOperationalBindingArgumentData_initiator = $._decode_inextensible_choice<
            TerminateOperationalBindingArgumentData_initiator
        >({
            "CONTEXT 2": [
                "symmetric",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
            "CONTEXT 3": [
                "roleA_initiates",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
            "CONTEXT 4": [
                "roleB_initiates",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
        });
    }
    return _cached_decoder_for_TerminateOperationalBindingArgumentData_initiator(
        el
    );
}
/**
 * @summary Encodes a(n) TerminateOperationalBindingArgumentData_initiator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateOperationalBindingArgumentData_initiator, encoded as an ASN.1 Element.
 */
export function _encode_TerminateOperationalBindingArgumentData_initiator(
    value: TerminateOperationalBindingArgumentData_initiator,
    elGetter: $.ASN1Encoder<TerminateOperationalBindingArgumentData_initiator>
) {
    if (
        !_cached_encoder_for_TerminateOperationalBindingArgumentData_initiator
    ) {
        _cached_encoder_for_TerminateOperationalBindingArgumentData_initiator = $._encode_choice<
            TerminateOperationalBindingArgumentData_initiator
        >(
            {
                symmetric: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => $._encodeAny,
                    $.BER
                ),
                roleA_initiates: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => $._encodeAny,
                    $.BER
                ),
                roleB_initiates: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => $._encodeAny,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TerminateOperationalBindingArgumentData_initiator(
        value,
        elGetter
    );
}

/**
 * @summary TerminateOperationalBindingArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateOperationalBindingArgumentData ::= SEQUENCE {
 *   bindingType         [0]  OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   bindingID           [1]  OperationalBindingID,
 *   -- symmetric, Role A initiates, or Role B initiates
 *   initiator                CHOICE {
 *     symmetric           [2]  OPERATIONAL-BINDING.&both.&TerminateParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleA-initiates     [3]  OPERATIONAL-BINDING.&roleA.&TerminateParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleB-initiates     [4]  OPERATIONAL-BINDING.&roleB.&TerminateParam
 *                             ({OpBindingSet}{@bindingType})} OPTIONAL,
 *   terminateAt         [5]  Time OPTIONAL,
 *   securityParameters  [6]  SecurityParameters OPTIONAL,
 *   ...}
 * ```
 *
 * @class
 */
export class TerminateOperationalBindingArgumentData {
    constructor(
        /**
         * @summary `bindingType`.
         * @public
         * @readonly
         */
        readonly bindingType: OBJECT_IDENTIFIER,
        /**
         * @summary `bindingID`.
         * @public
         * @readonly
         */
        readonly bindingID: OperationalBindingID,
        /**
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: OPTIONAL<
            TerminateOperationalBindingArgumentData_initiator
        >,
        /**
         * @summary `terminateAt`.
         * @public
         * @readonly
         */
        readonly terminateAt: OPTIONAL<Time>,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TerminateOperationalBindingArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `TerminateOperationalBindingArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminateOperationalBindingArgumentData`.
     * @returns {TerminateOperationalBindingArgumentData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TerminateOperationalBindingArgumentData]: TerminateOperationalBindingArgumentData[_K];
            }
        >
    ): TerminateOperationalBindingArgumentData {
        return new TerminateOperationalBindingArgumentData(
            _o.bindingType,
            _o.bindingID,
            _o.initiator,
            _o.terminateAt,
            _o.securityParameters,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of TerminateOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TerminateOperationalBindingArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "bindingType",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "bindingID",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec("initiator", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "terminateAt",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TerminateOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TerminateOperationalBindingArgumentData: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TerminateOperationalBindingArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TerminateOperationalBindingArgumentData: $.ComponentSpec[] = [];
let _cached_decoder_for_TerminateOperationalBindingArgumentData: $.ASN1Decoder<
    TerminateOperationalBindingArgumentData
> | null = null;
let _cached_encoder_for_TerminateOperationalBindingArgumentData: $.ASN1Encoder<
    TerminateOperationalBindingArgumentData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TerminateOperationalBindingArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateOperationalBindingArgumentData} The decoded data structure.
 */
export function _decode_TerminateOperationalBindingArgumentData(el: _Element) {
    if (!_cached_decoder_for_TerminateOperationalBindingArgumentData) {
        _cached_decoder_for_TerminateOperationalBindingArgumentData = function (
            el: _Element
        ): TerminateOperationalBindingArgumentData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bindingType!: OBJECT_IDENTIFIER;
            let bindingID!: OperationalBindingID;
            let initiator: OPTIONAL<TerminateOperationalBindingArgumentData_initiator>;
            let terminateAt: OPTIONAL<Time>;
            let securityParameters: OPTIONAL<SecurityParameters>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                bindingType: (_el: _Element): void => {
                    bindingType = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                bindingID: (_el: _Element): void => {
                    bindingID = $._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
                initiator: (_el: _Element): void => {
                    initiator = _decode_TerminateOperationalBindingArgumentData_initiator(
                        _el
                    );
                },
                terminateAt: (_el: _Element): void => {
                    terminateAt = $._decode_explicit<Time>(() => _decode_Time)(
                        _el
                    );
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TerminateOperationalBindingArgumentData,
                _extension_additions_list_spec_for_TerminateOperationalBindingArgumentData,
                _root_component_type_list_2_spec_for_TerminateOperationalBindingArgumentData,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) TerminateOperationalBindingArgumentData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateOperationalBindingArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_TerminateOperationalBindingArgumentData(
    value: TerminateOperationalBindingArgumentData,
    elGetter: $.ASN1Encoder<TerminateOperationalBindingArgumentData>
) {
    if (!_cached_encoder_for_TerminateOperationalBindingArgumentData) {
        _cached_encoder_for_TerminateOperationalBindingArgumentData = function (
            value: TerminateOperationalBindingArgumentData,
            elGetter: $.ASN1Encoder<TerminateOperationalBindingArgumentData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeObjectIdentifier,
                                $.BER
                            )(value.bindingType, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_OperationalBindingID,
                                $.BER
                            )(value.bindingID, $.BER),
                            /* IF_ABSENT  */ value.initiator === undefined
                                ? undefined
                                : _encode_TerminateOperationalBindingArgumentData_initiator(
                                      value.initiator,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.terminateAt === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => _encode_Time,
                                      $.BER
                                  )(value.terminateAt, $.BER),
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TerminateOperationalBindingArgumentData(
        value,
        elGetter
    );
}

export type TerminateOperationalBindingArgument<> = OPTIONALLY_PROTECTED_SEQ<
    TerminateOperationalBindingArgumentData
>; // DefinedType
let _cached_decoder_for_TerminateOperationalBindingArgument: $.ASN1Decoder<
    TerminateOperationalBindingArgument
> | null = null;
let _cached_encoder_for_TerminateOperationalBindingArgument: $.ASN1Encoder<
    TerminateOperationalBindingArgument
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TerminateOperationalBindingArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateOperationalBindingArgument} The decoded data structure.
 */
export function _decode_TerminateOperationalBindingArgument(el: _Element) {
    if (!_cached_decoder_for_TerminateOperationalBindingArgument) {
        _cached_decoder_for_TerminateOperationalBindingArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            TerminateOperationalBindingArgumentData
        >(_decode_TerminateOperationalBindingArgumentData);
    }
    return _cached_decoder_for_TerminateOperationalBindingArgument(el);
}
/**
 * @summary Encodes a(n) TerminateOperationalBindingArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateOperationalBindingArgument, encoded as an ASN.1 Element.
 */
export function _encode_TerminateOperationalBindingArgument(
    value: TerminateOperationalBindingArgument,
    elGetter: $.ASN1Encoder<TerminateOperationalBindingArgument>
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

/**
 * @summary TerminateOperationalBindingResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateOperationalBindingResultData ::= SEQUENCE {
 *   bindingID       OperationalBindingID,
 *   bindingType     OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   terminateAt     GeneralizedTime OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF   CommonResultsSeq }
 * ```
 *
 * @class
 */
export class TerminateOperationalBindingResultData {
    constructor(
        /**
         * @summary `bindingID`.
         * @public
         * @readonly
         */
        readonly bindingID: OperationalBindingID,
        /**
         * @summary `bindingType`.
         * @public
         * @readonly
         */
        readonly bindingType: OBJECT_IDENTIFIER,
        /**
         * @summary `terminateAt`.
         * @public
         * @readonly
         */
        readonly terminateAt: OPTIONAL<GeneralizedTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<
            SecurityParameters
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<
            DistinguishedName
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<
            BOOLEAN
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a TerminateOperationalBindingResultData
     * @description
     *
     * This takes an `object` and converts it to a `TerminateOperationalBindingResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminateOperationalBindingResultData`.
     * @returns {TerminateOperationalBindingResultData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TerminateOperationalBindingResultData]: TerminateOperationalBindingResultData[_K];
            }
        >
    ): TerminateOperationalBindingResultData {
        return new TerminateOperationalBindingResultData(
            _o.bindingID,
            _o.bindingType,
            _o.terminateAt,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of TerminateOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TerminateOperationalBindingResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "bindingID",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "bindingType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "terminateAt",
        true,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TerminateOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TerminateOperationalBindingResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "performer",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 28),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notification",
        true,
        $.hasTag(_TagClass.context, 27),
        undefined,
        undefined
    ),
];
/**
 * @summary The Extension Addition Component Types of TerminateOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TerminateOperationalBindingResultData: $.ComponentSpec[] = [];
let _cached_decoder_for_TerminateOperationalBindingResultData: $.ASN1Decoder<
    TerminateOperationalBindingResultData
> | null = null;
let _cached_encoder_for_TerminateOperationalBindingResultData: $.ASN1Encoder<
    TerminateOperationalBindingResultData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TerminateOperationalBindingResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateOperationalBindingResultData} The decoded data structure.
 */
export function _decode_TerminateOperationalBindingResultData(el: _Element) {
    if (!_cached_decoder_for_TerminateOperationalBindingResultData) {
        _cached_decoder_for_TerminateOperationalBindingResultData = function (
            el: _Element
        ): TerminateOperationalBindingResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bindingID!: OperationalBindingID;
            let bindingType!: OBJECT_IDENTIFIER;
            let terminateAt: OPTIONAL<GeneralizedTime>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                TerminateOperationalBindingResultData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                bindingID: (_el: _Element): void => {
                    bindingID = _decode_OperationalBindingID(_el);
                },
                bindingType: (_el: _Element): void => {
                    bindingType = $._decodeObjectIdentifier(_el);
                },
                terminateAt: (_el: _Element): void => {
                    terminateAt = $._decodeGeneralizedTime(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                performer: (_el: _Element): void => {
                    performer = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: _Element): void => {
                    aliasDereferenced = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                notification: (_el: _Element): void => {
                    notification = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSequenceOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TerminateOperationalBindingResultData,
                _extension_additions_list_spec_for_TerminateOperationalBindingResultData,
                _root_component_type_list_2_spec_for_TerminateOperationalBindingResultData,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) TerminateOperationalBindingResultData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateOperationalBindingResultData, encoded as an ASN.1 Element.
 */
export function _encode_TerminateOperationalBindingResultData(
    value: TerminateOperationalBindingResultData,
    elGetter: $.ASN1Encoder<TerminateOperationalBindingResultData>
) {
    if (!_cached_encoder_for_TerminateOperationalBindingResultData) {
        _cached_encoder_for_TerminateOperationalBindingResultData = function (
            value: TerminateOperationalBindingResultData,
            elGetter: $.ASN1Encoder<TerminateOperationalBindingResultData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_OperationalBindingID(
                                value.bindingID,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.bindingType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.terminateAt === undefined
                                ? undefined
                                : $._encodeGeneralizedTime(
                                      value.terminateAt,
                                      $.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.performer, $.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                TerminateOperationalBindingResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.aliasDereferenced, $.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () =>
                                          $._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.notification, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TerminateOperationalBindingResultData(
        value,
        elGetter
    );
}

/**
 * @summary TerminateOperationalBindingResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateOperationalBindingResult  ::=  CHOICE {
 *   null            NULL,
 *   protected  [1]  OPTIONALLY-PROTECTED-SEQ{ TerminateOperationalBindingResultData },
 *   ... }
 * ```
 */
export type TerminateOperationalBindingResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          protected_: OPTIONALLY_PROTECTED_SEQ<
              TerminateOperationalBindingResultData
          >;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TerminateOperationalBindingResult: $.ASN1Decoder<
    TerminateOperationalBindingResult
> | null = null;
let _cached_encoder_for_TerminateOperationalBindingResult: $.ASN1Encoder<
    TerminateOperationalBindingResult
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TerminateOperationalBindingResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateOperationalBindingResult} The decoded data structure.
 */
export function _decode_TerminateOperationalBindingResult(el: _Element) {
    if (!_cached_decoder_for_TerminateOperationalBindingResult) {
        _cached_decoder_for_TerminateOperationalBindingResult = $._decode_extensible_choice<
            TerminateOperationalBindingResult
        >({
            "UNIVERSAL 5": ["null_", $._decodeNull],
            "CONTEXT 1": [
                "protected_",
                $._decode_explicit<
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
/**
 * @summary Encodes a(n) TerminateOperationalBindingResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateOperationalBindingResult, encoded as an ASN.1 Element.
 */
export function _encode_TerminateOperationalBindingResult(
    value: TerminateOperationalBindingResult,
    elGetter: $.ASN1Encoder<TerminateOperationalBindingResult>
) {
    if (!_cached_encoder_for_TerminateOperationalBindingResult) {
        _cached_encoder_for_TerminateOperationalBindingResult = $._encode_choice<
            TerminateOperationalBindingResult
        >(
            {
                null_: $._encodeNull,
                protected_: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
                            TerminateOperationalBindingResultData
                        >(_encode_TerminateOperationalBindingResultData),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TerminateOperationalBindingResult(
        value,
        elGetter
    );
}

/**
 * @summary terminateOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * terminateOperationalBinding OPERATION ::= {
 *   ARGUMENT  TerminateOperationalBindingArgument
 *   RESULT    TerminateOperationalBindingResult
 *   ERRORS    {operationalBindingError | securityError}
 *   CODE      id-op-terminateOperationalBinding }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const terminateOperationalBinding: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TerminateOperationalBindingArgument,
        "&ResultType": _decode_TerminateOperationalBindingResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_TerminateOperationalBindingArgument,
        "&ResultType": _encode_TerminateOperationalBindingResult,
    },
    "&Errors": [
        operationalBindingError,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_op_terminateOperationalBinding /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* END_MODULE OperationalBindingManagement */
/* eslint-enable */
