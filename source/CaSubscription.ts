/**
 * @module CaSubscription
 * @summary The ASN.1 module `CaSubscription`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.caSubscription.9
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
    ENUMERATED,
    INTEGER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Certificate,
    CertificateSerialNumber,
    CRLReason,
    Name,
    _decode_Certificate,
    _decode_CertificateSerialNumber,
    _decode_CRLReason,
    _decode_Name,
    _encode_Certificate,
    _encode_CertificateSerialNumber,
    _encode_CRLReason,
    _encode_Name,
    _enum_for_CRLReason,
} from "./PKI-Stub";
import { Version, _decode_Version, _encode_Version } from "./Wrapper";
export {
    Certificate,
    CertificateSerialNumber,
    CRLReason,
    CRLReason_aACompromise /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_affiliationChanged /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_cACompromise /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_certificateHold /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_cessationOfOperation /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_keyCompromise /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_privilegeWithdrawn /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_removeFromCRL /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_superseded /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_unspecified /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_weakAlgorithmOrKey /* IMPORTED_ENUMERATION_ITEM */,
    Name,
    _decode_Certificate,
    _decode_CertificateSerialNumber,
    _decode_CRLReason,
    _decode_Name,
    _encode_Certificate,
    _encode_CertificateSerialNumber,
    _encode_CRLReason,
    _encode_Name,
    _enum_for_CRLReason,
} from "./PKI-Stub";
export {
    Version,
    Version_v1 /* IMPORTED_BIT */,
    _decode_Version,
    _encode_Version,
} from "./Wrapper";

/**
 * @summary InitializationRec
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationRec ::= SEQUENCE {
 *   version    Version,
 *   ... }
 * ```
 *
 * @class
 */
export class InitializationRec {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InitializationRec
     * @description
     *
     * This takes an `object` and converts it to a `InitializationRec`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitializationRec`.
     * @returns {InitializationRec}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof InitializationRec]: InitializationRec[_K] }>
    ): InitializationRec {
        return new InitializationRec(
            _o.version,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of InitializationRec
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InitializationRec: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of InitializationRec
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InitializationRec: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of InitializationRec
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InitializationRec: $.ComponentSpec[] = [];
let _cached_decoder_for_InitializationRec: $.ASN1Decoder<
    InitializationRec
> | null = null;
let _cached_encoder_for_InitializationRec: $.ASN1Encoder<
    InitializationRec
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) InitializationRec
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializationRec} The decoded data structure.
 */
export function _decode_InitializationRec(el: _Element) {
    if (!_cached_decoder_for_InitializationRec) {
        _cached_decoder_for_InitializationRec = function (
            el: _Element
        ): InitializationRec {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "InitializationRec contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            let version!: Version;
            version = _decode_Version(sequence[0]);
            return new InitializationRec(version, sequence.slice(1));
        };
    }
    return _cached_decoder_for_InitializationRec(el);
}
/**
 * @summary Encodes a(n) InitializationRec into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializationRec, encoded as an ASN.1 Element.
 */
export function _encode_InitializationRec(
    value: InitializationRec,
    elGetter: $.ASN1Encoder<InitializationRec>
) {
    if (!_cached_encoder_for_InitializationRec) {
        _cached_encoder_for_InitializationRec = function (
            value: InitializationRec,
            elGetter: $.ASN1Encoder<InitializationRec>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Version(
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
    return _cached_encoder_for_InitializationRec(value, elGetter);
}

/**
 * @summary InitializationAcc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationAcc ::= SEQUENCE {
 *   version    Version,
 *   ... }
 * ```
 *
 * @class
 */
export class InitializationAcc {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InitializationAcc
     * @description
     *
     * This takes an `object` and converts it to a `InitializationAcc`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitializationAcc`.
     * @returns {InitializationAcc}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof InitializationAcc]: InitializationAcc[_K] }>
    ): InitializationAcc {
        return new InitializationAcc(
            _o.version,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of InitializationAcc
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InitializationAcc: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of InitializationAcc
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InitializationAcc: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of InitializationAcc
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InitializationAcc: $.ComponentSpec[] = [];
let _cached_decoder_for_InitializationAcc: $.ASN1Decoder<
    InitializationAcc
> | null = null;
let _cached_encoder_for_InitializationAcc: $.ASN1Encoder<
    InitializationAcc
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) InitializationAcc
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializationAcc} The decoded data structure.
 */
export function _decode_InitializationAcc(el: _Element) {
    if (!_cached_decoder_for_InitializationAcc) {
        _cached_decoder_for_InitializationAcc = function (
            el: _Element
        ): InitializationAcc {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "InitializationAcc contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            let version!: Version;
            version = _decode_Version(sequence[0]);
            return new InitializationAcc(version, sequence.slice(1));
        };
    }
    return _cached_decoder_for_InitializationAcc(el);
}
/**
 * @summary Encodes a(n) InitializationAcc into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializationAcc, encoded as an ASN.1 Element.
 */
export function _encode_InitializationAcc(
    value: InitializationAcc,
    elGetter: $.ASN1Encoder<InitializationAcc>
) {
    if (!_cached_encoder_for_InitializationAcc) {
        _cached_encoder_for_InitializationAcc = function (
            value: InitializationAcc,
            elGetter: $.ASN1Encoder<InitializationAcc>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Version(
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
    return _cached_encoder_for_InitializationAcc(value, elGetter);
}

/**
 * @summary InitializationRej_diag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationRej-diag ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_InitializationRej_diag {
    unsupportedVersion = 0,
}
/**
 * @summary InitializationRej_diag
 */
export type InitializationRej_diag =
    | _enum_for_InitializationRej_diag
    | ENUMERATED;
/**
 * @summary InitializationRej_diag_unsupportedVersion
 * @constant
 * @type {number}
 */
export const InitializationRej_diag_unsupportedVersion: InitializationRej_diag = 0; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_InitializationRej_diag: $.ASN1Decoder<
    InitializationRej_diag
> | null = null;
let _cached_encoder_for_InitializationRej_diag: $.ASN1Encoder<
    InitializationRej_diag
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) InitializationRej_diag
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializationRej_diag} The decoded data structure.
 */
export function _decode_InitializationRej_diag(el: _Element) {
    if (!_cached_decoder_for_InitializationRej_diag) {
        _cached_decoder_for_InitializationRej_diag = $._decodeEnumerated;
    }
    return _cached_decoder_for_InitializationRej_diag(el);
}
/**
 * @summary Encodes a(n) InitializationRej_diag into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializationRej_diag, encoded as an ASN.1 Element.
 */
export function _encode_InitializationRej_diag(
    value: InitializationRej_diag,
    elGetter: $.ASN1Encoder<InitializationRej_diag>
) {
    if (!_cached_encoder_for_InitializationRej_diag) {
        _cached_encoder_for_InitializationRej_diag = $._encodeEnumerated;
    }
    return _cached_encoder_for_InitializationRej_diag(value, elGetter);
}

/**
 * @summary InitializationRej
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationRej ::= SEQUENCE {
 *   diag        ENUMERATED {
 *     unsupportedVersion     (0),
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class InitializationRej {
    constructor(
        /**
         * @summary `diag`.
         * @public
         * @readonly
         */
        readonly diag: InitializationRej_diag,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InitializationRej
     * @description
     *
     * This takes an `object` and converts it to a `InitializationRej`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitializationRej`.
     * @returns {InitializationRej}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof InitializationRej]: InitializationRej[_K] }>
    ): InitializationRej {
        return new InitializationRej(_o.diag, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `diag`
     * @public
     * @static
     */

    public static _enum_for_diag = _enum_for_InitializationRej_diag;
}
/**
 * @summary The Leading Root Component Types of InitializationRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InitializationRej: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "diag",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of InitializationRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InitializationRej: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of InitializationRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InitializationRej: $.ComponentSpec[] = [];
let _cached_decoder_for_InitializationRej: $.ASN1Decoder<
    InitializationRej
> | null = null;
let _cached_encoder_for_InitializationRej: $.ASN1Encoder<
    InitializationRej
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) InitializationRej
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializationRej} The decoded data structure.
 */
export function _decode_InitializationRej(el: _Element) {
    if (!_cached_decoder_for_InitializationRej) {
        _cached_decoder_for_InitializationRej = function (
            el: _Element
        ): InitializationRej {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "InitializationRej contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "diag";
            let diag!: InitializationRej_diag;
            diag = _decode_InitializationRej_diag(sequence[0]);
            return new InitializationRej(diag, sequence.slice(1));
        };
    }
    return _cached_decoder_for_InitializationRej(el);
}
/**
 * @summary Encodes a(n) InitializationRej into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializationRej, encoded as an ASN.1 Element.
 */
export function _encode_InitializationRej(
    value: InitializationRej,
    elGetter: $.ASN1Encoder<InitializationRej>
) {
    if (!_cached_encoder_for_InitializationRej) {
        _cached_encoder_for_InitializationRej = function (
            value: InitializationRej,
            elGetter: $.ASN1Encoder<InitializationRej>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InitializationRej_diag(
                                value.diag,
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
    return _cached_encoder_for_InitializationRej(value, elGetter);
}

/**
 * @summary InitializationAbort_diag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationAbort-diag ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_InitializationAbort_diag {
    unsupportedVersion = 0,
    onlySingleVersionAllowed = 1,
}
/**
 * @summary InitializationAbort_diag
 */
export type InitializationAbort_diag =
    | _enum_for_InitializationAbort_diag
    | ENUMERATED;
/**
 * @summary InitializationAbort_diag_unsupportedVersion
 * @constant
 * @type {number}
 */
export const InitializationAbort_diag_unsupportedVersion: InitializationAbort_diag = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary InitializationAbort_diag_onlySingleVersionAllowed
 * @constant
 * @type {number}
 */
export const InitializationAbort_diag_onlySingleVersionAllowed: InitializationAbort_diag = 1; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_InitializationAbort_diag: $.ASN1Decoder<
    InitializationAbort_diag
> | null = null;
let _cached_encoder_for_InitializationAbort_diag: $.ASN1Encoder<
    InitializationAbort_diag
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) InitializationAbort_diag
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializationAbort_diag} The decoded data structure.
 */
export function _decode_InitializationAbort_diag(el: _Element) {
    if (!_cached_decoder_for_InitializationAbort_diag) {
        _cached_decoder_for_InitializationAbort_diag = $._decodeEnumerated;
    }
    return _cached_decoder_for_InitializationAbort_diag(el);
}
/**
 * @summary Encodes a(n) InitializationAbort_diag into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializationAbort_diag, encoded as an ASN.1 Element.
 */
export function _encode_InitializationAbort_diag(
    value: InitializationAbort_diag,
    elGetter: $.ASN1Encoder<InitializationAbort_diag>
) {
    if (!_cached_encoder_for_InitializationAbort_diag) {
        _cached_encoder_for_InitializationAbort_diag = $._encodeEnumerated;
    }
    return _cached_encoder_for_InitializationAbort_diag(value, elGetter);
}

/**
 * @summary InitializationAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationAbort ::= SEQUENCE {
 *   diag        ENUMERATED {
 *     unsupportedVersion       (0),
 *     onlySingleVersionAllowed (1),
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class InitializationAbort {
    constructor(
        /**
         * @summary `diag`.
         * @public
         * @readonly
         */
        readonly diag: InitializationAbort_diag,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InitializationAbort
     * @description
     *
     * This takes an `object` and converts it to a `InitializationAbort`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitializationAbort`.
     * @returns {InitializationAbort}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof InitializationAbort]: InitializationAbort[_K] }
        >
    ): InitializationAbort {
        return new InitializationAbort(_o.diag, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `diag`
     * @public
     * @static
     */

    public static _enum_for_diag = _enum_for_InitializationAbort_diag;
}
/**
 * @summary The Leading Root Component Types of InitializationAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InitializationAbort: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "diag",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of InitializationAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InitializationAbort: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of InitializationAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InitializationAbort: $.ComponentSpec[] = [];
let _cached_decoder_for_InitializationAbort: $.ASN1Decoder<
    InitializationAbort
> | null = null;
let _cached_encoder_for_InitializationAbort: $.ASN1Encoder<
    InitializationAbort
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) InitializationAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializationAbort} The decoded data structure.
 */
export function _decode_InitializationAbort(el: _Element) {
    if (!_cached_decoder_for_InitializationAbort) {
        _cached_decoder_for_InitializationAbort = function (
            el: _Element
        ): InitializationAbort {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "InitializationAbort contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "diag";
            let diag!: InitializationAbort_diag;
            diag = _decode_InitializationAbort_diag(sequence[0]);
            return new InitializationAbort(diag, sequence.slice(1));
        };
    }
    return _cached_decoder_for_InitializationAbort(el);
}
/**
 * @summary Encodes a(n) InitializationAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializationAbort, encoded as an ASN.1 Element.
 */
export function _encode_InitializationAbort(
    value: InitializationAbort,
    elGetter: $.ASN1Encoder<InitializationAbort>
) {
    if (!_cached_encoder_for_InitializationAbort) {
        _cached_encoder_for_InitializationAbort = function (
            value: InitializationAbort,
            elGetter: $.ASN1Encoder<InitializationAbort>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InitializationAbort_diag(
                                value.diag,
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
    return _cached_encoder_for_InitializationAbort(value, elGetter);
}

/**
 * @summary InvokeID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeID  ::=  INTEGER (0..127)
 * ```
 */
export type InvokeID = INTEGER;
let _cached_decoder_for_InvokeID: $.ASN1Decoder<InvokeID> | null = null;
let _cached_encoder_for_InvokeID: $.ASN1Encoder<InvokeID> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) InvokeID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeID} The decoded data structure.
 */
export function _decode_InvokeID(el: _Element) {
    if (!_cached_decoder_for_InvokeID) {
        _cached_decoder_for_InvokeID = $._decodeInteger;
    }
    return _cached_decoder_for_InvokeID(el);
}
/**
 * @summary Encodes a(n) InvokeID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeID, encoded as an ASN.1 Element.
 */
export function _encode_InvokeID(
    value: InvokeID,
    elGetter: $.ASN1Encoder<InvokeID>
) {
    if (!_cached_encoder_for_InvokeID) {
        _cached_encoder_for_InvokeID = $._encodeInteger;
    }
    return _cached_encoder_for_InvokeID(value, elGetter);
}

/**
 * @summary CertSubscribeReq_certs_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeReq-certs-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertSubscribeReq_certs_Item {
    constructor(
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeReq_certs_Item
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeReq_certs_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeReq_certs_Item`.
     * @returns {CertSubscribeReq_certs_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertSubscribeReq_certs_Item]: CertSubscribeReq_certs_Item[_K];
            }
        >
    ): CertSubscribeReq_certs_Item {
        return new CertSubscribeReq_certs_Item(
            _o.subject,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertSubscribeReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeReq_certs_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("subject", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertSubscribeReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeReq_certs_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertSubscribeReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeReq_certs_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeReq_certs_Item: $.ASN1Decoder<
    CertSubscribeReq_certs_Item
> | null = null;
let _cached_encoder_for_CertSubscribeReq_certs_Item: $.ASN1Encoder<
    CertSubscribeReq_certs_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeReq_certs_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeReq_certs_Item} The decoded data structure.
 */
export function _decode_CertSubscribeReq_certs_Item(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeReq_certs_Item) {
        _cached_decoder_for_CertSubscribeReq_certs_Item = function (
            el: _Element
        ): CertSubscribeReq_certs_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertSubscribeReq-certs-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            return new CertSubscribeReq_certs_Item(
                subject,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertSubscribeReq_certs_Item(el);
}
/**
 * @summary Encodes a(n) CertSubscribeReq_certs_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeReq_certs_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeReq_certs_Item(
    value: CertSubscribeReq_certs_Item,
    elGetter: $.ASN1Encoder<CertSubscribeReq_certs_Item>
) {
    if (!_cached_encoder_for_CertSubscribeReq_certs_Item) {
        _cached_encoder_for_CertSubscribeReq_certs_Item = function (
            value: CertSubscribeReq_certs_Item,
            elGetter: $.ASN1Encoder<CertSubscribeReq_certs_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.subject, $.BER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
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
    return _cached_encoder_for_CertSubscribeReq_certs_Item(value, elGetter);
}

/**
 * @summary CertSubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeReq ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   certs        SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     subject      Name,
 *     serialNumber CertificateSerialNumber,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertSubscribeReq {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: CertSubscribeReq_certs_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeReq
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeReq`.
     * @returns {CertSubscribeReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertSubscribeReq]: CertSubscribeReq[_K] }>
    ): CertSubscribeReq {
        return new CertSubscribeReq(
            _o.invokeID,
            _o.certs,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertSubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certs",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertSubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertSubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeReq: $.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeReq: $.ASN1Decoder<
    CertSubscribeReq
> | null = null;
let _cached_encoder_for_CertSubscribeReq: $.ASN1Encoder<
    CertSubscribeReq
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeReq} The decoded data structure.
 */
export function _decode_CertSubscribeReq(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeReq) {
        _cached_decoder_for_CertSubscribeReq = function (
            el: _Element
        ): CertSubscribeReq {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertSubscribeReq contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "certs";
            let invokeID!: InvokeID;
            let certs!: CertSubscribeReq_certs_Item[];
            invokeID = _decode_InvokeID(sequence[0]);
            certs = $._decodeSequenceOf<CertSubscribeReq_certs_Item>(
                () => _decode_CertSubscribeReq_certs_Item
            )(sequence[1]);
            return new CertSubscribeReq(invokeID, certs, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertSubscribeReq(el);
}
/**
 * @summary Encodes a(n) CertSubscribeReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeReq, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeReq(
    value: CertSubscribeReq,
    elGetter: $.ASN1Encoder<CertSubscribeReq>
) {
    if (!_cached_encoder_for_CertSubscribeReq) {
        _cached_encoder_for_CertSubscribeReq = function (
            value: CertSubscribeReq,
            elGetter: $.ASN1Encoder<CertSubscribeReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<
                                CertSubscribeReq_certs_Item
                            >(() => _encode_CertSubscribeReq_certs_Item, $.BER)(
                                value.certs,
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
    return _cached_encoder_for_CertSubscribeReq(value, elGetter);
}

/**
 * @summary CertStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertStatus ::= ENUMERATED {
 *   good    (0),
 *   revoked (1),
 *   on-hold (2),
 *   expired (3),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_CertStatus {
    good = 0,
    revoked = 1,
    on_hold = 2,
    expired = 3,
}
/**
 * @summary CertStatus
 */
export type CertStatus = _enum_for_CertStatus | ENUMERATED;
/**
 * @summary CertStatus_good
 * @constant
 * @type {number}
 */
export const CertStatus_good: CertStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CertStatus_revoked
 * @constant
 * @type {number}
 */
export const CertStatus_revoked: CertStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CertStatus_on_hold
 * @constant
 * @type {number}
 */
export const CertStatus_on_hold: CertStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CertStatus_expired
 * @constant
 * @type {number}
 */
export const CertStatus_expired: CertStatus = 3; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CertStatus: $.ASN1Decoder<CertStatus> | null = null;
let _cached_encoder_for_CertStatus: $.ASN1Encoder<CertStatus> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertStatus} The decoded data structure.
 */
export function _decode_CertStatus(el: _Element) {
    if (!_cached_decoder_for_CertStatus) {
        _cached_decoder_for_CertStatus = $._decodeEnumerated;
    }
    return _cached_decoder_for_CertStatus(el);
}
/**
 * @summary Encodes a(n) CertStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertStatus, encoded as an ASN.1 Element.
 */
export function _encode_CertStatus(
    value: CertStatus,
    elGetter: $.ASN1Encoder<CertStatus>
) {
    if (!_cached_encoder_for_CertStatus) {
        _cached_encoder_for_CertStatus = $._encodeEnumerated;
    }
    return _cached_encoder_for_CertStatus(value, elGetter);
}

/**
 * @summary CertSubscribeOK_Item_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeOK-Item-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertSubscribeOK_Item_ok {
    constructor(
        /**
         * @summary `cert`.
         * @public
         * @readonly
         */
        readonly cert: Certificate,
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: CertStatus,
        /**
         * @summary `revokeReason`.
         * @public
         * @readonly
         */
        readonly revokeReason: OPTIONAL<CRLReason>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeOK_Item_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeOK_Item_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeOK_Item_ok`.
     * @returns {CertSubscribeOK_Item_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertSubscribeOK_Item_ok]: CertSubscribeOK_Item_ok[_K];
            }
        >
    ): CertSubscribeOK_Item_ok {
        return new CertSubscribeOK_Item_ok(
            _o.cert,
            _o.status,
            _o.revokeReason,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `status`
     * @public
     * @static
     */

    public static _enum_for_status = _enum_for_CertStatus;
    /**
     * @summary The enum used as the type of the component `revokeReason`
     * @public
     * @static
     */

    public static _enum_for_revokeReason = _enum_for_CRLReason;
}
/**
 * @summary The Leading Root Component Types of CertSubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeOK_Item_ok: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "cert",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "revokeReason",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertSubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeOK_Item_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertSubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeOK_Item_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeOK_Item_ok: $.ASN1Decoder<
    CertSubscribeOK_Item_ok
> | null = null;
let _cached_encoder_for_CertSubscribeOK_Item_ok: $.ASN1Encoder<
    CertSubscribeOK_Item_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeOK_Item_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeOK_Item_ok} The decoded data structure.
 */
export function _decode_CertSubscribeOK_Item_ok(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeOK_Item_ok) {
        _cached_decoder_for_CertSubscribeOK_Item_ok = function (
            el: _Element
        ): CertSubscribeOK_Item_ok {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let cert!: Certificate;
            let status!: CertStatus;
            let revokeReason: OPTIONAL<CRLReason>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                cert: (_el: _Element): void => {
                    cert = _decode_Certificate(_el);
                },
                status: (_el: _Element): void => {
                    status = _decode_CertStatus(_el);
                },
                revokeReason: (_el: _Element): void => {
                    revokeReason = _decode_CRLReason(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertSubscribeOK_Item_ok,
                _extension_additions_list_spec_for_CertSubscribeOK_Item_ok,
                _root_component_type_list_2_spec_for_CertSubscribeOK_Item_ok,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertSubscribeOK_Item_ok(
                /* SEQUENCE_CONSTRUCTOR_CALL */ cert,
                status,
                revokeReason,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertSubscribeOK_Item_ok(el);
}
/**
 * @summary Encodes a(n) CertSubscribeOK_Item_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeOK_Item_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeOK_Item_ok(
    value: CertSubscribeOK_Item_ok,
    elGetter: $.ASN1Encoder<CertSubscribeOK_Item_ok>
) {
    if (!_cached_encoder_for_CertSubscribeOK_Item_ok) {
        _cached_encoder_for_CertSubscribeOK_Item_ok = function (
            value: CertSubscribeOK_Item_ok,
            elGetter: $.ASN1Encoder<CertSubscribeOK_Item_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Certificate(
                                value.cert,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertStatus(
                                value.status,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.revokeReason === undefined
                                ? undefined
                                : _encode_CRLReason(value.revokeReason, $.BER),
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
    return _cached_encoder_for_CertSubscribeOK_Item_ok(value, elGetter);
}

/**
 * @summary CASP_CertStatusCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASP-CertStatusCode ::= ENUMERATED {
 *   noReason       (1),
 *   unknownCert    (2),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_CASP_CertStatusCode {
    noReason = 1,
    unknownCert = 2,
}
/**
 * @summary CASP_CertStatusCode
 */
export type CASP_CertStatusCode = _enum_for_CASP_CertStatusCode | ENUMERATED;
/**
 * @summary CASP_CertStatusCode_noReason
 * @constant
 * @type {number}
 */
export const CASP_CertStatusCode_noReason: CASP_CertStatusCode = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_CertStatusCode_unknownCert
 * @constant
 * @type {number}
 */
export const CASP_CertStatusCode_unknownCert: CASP_CertStatusCode = 2; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CASP_CertStatusCode: $.ASN1Decoder<
    CASP_CertStatusCode
> | null = null;
let _cached_encoder_for_CASP_CertStatusCode: $.ASN1Encoder<
    CASP_CertStatusCode
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CASP_CertStatusCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CASP_CertStatusCode} The decoded data structure.
 */
export function _decode_CASP_CertStatusCode(el: _Element) {
    if (!_cached_decoder_for_CASP_CertStatusCode) {
        _cached_decoder_for_CASP_CertStatusCode = $._decodeEnumerated;
    }
    return _cached_decoder_for_CASP_CertStatusCode(el);
}
/**
 * @summary Encodes a(n) CASP_CertStatusCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CASP_CertStatusCode, encoded as an ASN.1 Element.
 */
export function _encode_CASP_CertStatusCode(
    value: CASP_CertStatusCode,
    elGetter: $.ASN1Encoder<CASP_CertStatusCode>
) {
    if (!_cached_encoder_for_CASP_CertStatusCode) {
        _cached_encoder_for_CASP_CertStatusCode = $._encodeEnumerated;
    }
    return _cached_encoder_for_CASP_CertStatusCode(value, elGetter);
}

/**
 * @summary CertSubscribeOK_Item_not_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeOK-Item-not-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertSubscribeOK_Item_not_ok {
    constructor(
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: CASP_CertStatusCode,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeOK_Item_not_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeOK_Item_not_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeOK_Item_not_ok`.
     * @returns {CertSubscribeOK_Item_not_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertSubscribeOK_Item_not_ok]: CertSubscribeOK_Item_not_ok[_K];
            }
        >
    ): CertSubscribeOK_Item_not_ok {
        return new CertSubscribeOK_Item_not_ok(
            _o.status,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `status`
     * @public
     * @static
     */

    public static _enum_for_status = _enum_for_CASP_CertStatusCode;
}
/**
 * @summary The Leading Root Component Types of CertSubscribeOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeOK_Item_not_ok: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertSubscribeOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeOK_Item_not_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertSubscribeOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeOK_Item_not_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeOK_Item_not_ok: $.ASN1Decoder<
    CertSubscribeOK_Item_not_ok
> | null = null;
let _cached_encoder_for_CertSubscribeOK_Item_not_ok: $.ASN1Encoder<
    CertSubscribeOK_Item_not_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeOK_Item_not_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeOK_Item_not_ok} The decoded data structure.
 */
export function _decode_CertSubscribeOK_Item_not_ok(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeOK_Item_not_ok) {
        _cached_decoder_for_CertSubscribeOK_Item_not_ok = function (
            el: _Element
        ): CertSubscribeOK_Item_not_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertSubscribeOK-Item-not-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "status";
            let status!: CASP_CertStatusCode;
            status = _decode_CASP_CertStatusCode(sequence[0]);
            return new CertSubscribeOK_Item_not_ok(status, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertSubscribeOK_Item_not_ok(el);
}
/**
 * @summary Encodes a(n) CertSubscribeOK_Item_not_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeOK_Item_not_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeOK_Item_not_ok(
    value: CertSubscribeOK_Item_not_ok,
    elGetter: $.ASN1Encoder<CertSubscribeOK_Item_not_ok>
) {
    if (!_cached_encoder_for_CertSubscribeOK_Item_not_ok) {
        _cached_encoder_for_CertSubscribeOK_Item_not_ok = function (
            value: CertSubscribeOK_Item_not_ok,
            elGetter: $.ASN1Encoder<CertSubscribeOK_Item_not_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_CertStatusCode(
                                value.status,
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
    return _cached_encoder_for_CertSubscribeOK_Item_not_ok(value, elGetter);
}

/**
 * @summary CertSubscribeOK_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeOK-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertSubscribeOK_Item =
    | { ok: CertSubscribeOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertSubscribeOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertSubscribeOK_Item: $.ASN1Decoder<
    CertSubscribeOK_Item
> | null = null;
let _cached_encoder_for_CertSubscribeOK_Item: $.ASN1Encoder<
    CertSubscribeOK_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeOK_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeOK_Item} The decoded data structure.
 */
export function _decode_CertSubscribeOK_Item(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeOK_Item) {
        _cached_decoder_for_CertSubscribeOK_Item = $._decode_extensible_choice<
            CertSubscribeOK_Item
        >({
            "CONTEXT 0": [
                "ok",
                $._decode_implicit<CertSubscribeOK_Item_ok>(
                    () => _decode_CertSubscribeOK_Item_ok
                ),
            ],
            "CONTEXT 1": [
                "not_ok",
                $._decode_implicit<CertSubscribeOK_Item_not_ok>(
                    () => _decode_CertSubscribeOK_Item_not_ok
                ),
            ],
        });
    }
    return _cached_decoder_for_CertSubscribeOK_Item(el);
}
/**
 * @summary Encodes a(n) CertSubscribeOK_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeOK_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeOK_Item(
    value: CertSubscribeOK_Item,
    elGetter: $.ASN1Encoder<CertSubscribeOK_Item>
) {
    if (!_cached_encoder_for_CertSubscribeOK_Item) {
        _cached_encoder_for_CertSubscribeOK_Item = $._encode_choice<
            CertSubscribeOK_Item
        >(
            {
                ok: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertSubscribeOK_Item_ok,
                    $.BER
                ),
                not_ok: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertSubscribeOK_Item_not_ok,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertSubscribeOK_Item(value, elGetter);
}

export type CertSubscribeOK<> = CertSubscribeOK_Item[]; // SequenceOfType
let _cached_decoder_for_CertSubscribeOK: $.ASN1Decoder<
    CertSubscribeOK
> | null = null;
let _cached_encoder_for_CertSubscribeOK: $.ASN1Encoder<
    CertSubscribeOK
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeOK} The decoded data structure.
 */
export function _decode_CertSubscribeOK(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeOK) {
        _cached_decoder_for_CertSubscribeOK = $._decodeSequenceOf<
            CertSubscribeOK_Item
        >(() => _decode_CertSubscribeOK_Item);
    }
    return _cached_decoder_for_CertSubscribeOK(el);
}
/**
 * @summary Encodes a(n) CertSubscribeOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeOK, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeOK(
    value: CertSubscribeOK,
    elGetter: $.ASN1Encoder<CertSubscribeOK>
) {
    if (!_cached_encoder_for_CertSubscribeOK) {
        _cached_encoder_for_CertSubscribeOK = $._encodeSequenceOf<
            CertSubscribeOK_Item
        >(() => _encode_CertSubscribeOK_Item, $.BER);
    }
    return _cached_encoder_for_CertSubscribeOK(value, elGetter);
}

/**
 * @summary CASP_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASP-error ::= ENUMERATED {
 *   noReason                      (0),
 *   unknownContentType            (1),
 *   unsupportedWLMPversion        (2),
 *   missingContent                (3),
 *   missingContentComponent       (4),
 *   invalidContentComponent       (5),
 *   sequenceError                 (6),
 *   unknownSubject                (7),
 *   unknownCert                   (8),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_CASP_error {
    noReason = 0,
    unknownContentType = 1,
    unsupportedWLMPversion = 2,
    missingContent = 3,
    missingContentComponent = 4,
    invalidContentComponent = 5,
    sequenceError = 6,
    unknownSubject = 7,
    unknownCert = 8,
}
/**
 * @summary CASP_error
 */
export type CASP_error = _enum_for_CASP_error | ENUMERATED;
/**
 * @summary CASP_error_noReason
 * @constant
 * @type {number}
 */
export const CASP_error_noReason: CASP_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_unknownContentType
 * @constant
 * @type {number}
 */
export const CASP_error_unknownContentType: CASP_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_unsupportedWLMPversion
 * @constant
 * @type {number}
 */
export const CASP_error_unsupportedWLMPversion: CASP_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_missingContent
 * @constant
 * @type {number}
 */
export const CASP_error_missingContent: CASP_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_missingContentComponent
 * @constant
 * @type {number}
 */
export const CASP_error_missingContentComponent: CASP_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_invalidContentComponent
 * @constant
 * @type {number}
 */
export const CASP_error_invalidContentComponent: CASP_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_sequenceError
 * @constant
 * @type {number}
 */
export const CASP_error_sequenceError: CASP_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_unknownSubject
 * @constant
 * @type {number}
 */
export const CASP_error_unknownSubject: CASP_error = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CASP_error_unknownCert
 * @constant
 * @type {number}
 */
export const CASP_error_unknownCert: CASP_error = 8; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CASP_error: $.ASN1Decoder<CASP_error> | null = null;
let _cached_encoder_for_CASP_error: $.ASN1Encoder<CASP_error> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CASP_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CASP_error} The decoded data structure.
 */
export function _decode_CASP_error(el: _Element) {
    if (!_cached_decoder_for_CASP_error) {
        _cached_decoder_for_CASP_error = $._decodeEnumerated;
    }
    return _cached_decoder_for_CASP_error(el);
}
/**
 * @summary Encodes a(n) CASP_error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CASP_error, encoded as an ASN.1 Element.
 */
export function _encode_CASP_error(
    value: CASP_error,
    elGetter: $.ASN1Encoder<CASP_error>
) {
    if (!_cached_encoder_for_CASP_error) {
        _cached_encoder_for_CASP_error = $._encodeEnumerated;
    }
    return _cached_encoder_for_CASP_error(value, elGetter);
}

/**
 * @summary CertSubscribeErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeErr ::= SEQUENCE {
 *   code       CASP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class CertSubscribeErr {
    constructor(
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: CASP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeErr
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeErr`.
     * @returns {CertSubscribeErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertSubscribeErr]: CertSubscribeErr[_K] }>
    ): CertSubscribeErr {
        return new CertSubscribeErr(_o.code, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `code`
     * @public
     * @static
     */

    public static _enum_for_code = _enum_for_CASP_error;
}
/**
 * @summary The Leading Root Component Types of CertSubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "code",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertSubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertSubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeErr: $.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeErr: $.ASN1Decoder<
    CertSubscribeErr
> | null = null;
let _cached_encoder_for_CertSubscribeErr: $.ASN1Encoder<
    CertSubscribeErr
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeErr} The decoded data structure.
 */
export function _decode_CertSubscribeErr(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeErr) {
        _cached_decoder_for_CertSubscribeErr = function (
            el: _Element
        ): CertSubscribeErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertSubscribeErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "code";
            let code!: CASP_error;
            code = _decode_CASP_error(sequence[0]);
            return new CertSubscribeErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertSubscribeErr(el);
}
/**
 * @summary Encodes a(n) CertSubscribeErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeErr, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeErr(
    value: CertSubscribeErr,
    elGetter: $.ASN1Encoder<CertSubscribeErr>
) {
    if (!_cached_encoder_for_CertSubscribeErr) {
        _cached_encoder_for_CertSubscribeErr = function (
            value: CertSubscribeErr,
            elGetter: $.ASN1Encoder<CertSubscribeErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_error(
                                value.code,
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
    return _cached_encoder_for_CertSubscribeErr(value, elGetter);
}

/**
 * @summary CertSubscribeRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertSubscribeRsp_result =
    | { success: CertSubscribeOK } /* CHOICE_ALT_ROOT */
    | { failure: CertSubscribeErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertSubscribeRsp_result: $.ASN1Decoder<
    CertSubscribeRsp_result
> | null = null;
let _cached_encoder_for_CertSubscribeRsp_result: $.ASN1Encoder<
    CertSubscribeRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeRsp_result} The decoded data structure.
 */
export function _decode_CertSubscribeRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeRsp_result) {
        _cached_decoder_for_CertSubscribeRsp_result = $._decode_extensible_choice<
            CertSubscribeRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_implicit<CertSubscribeOK>(
                    () => _decode_CertSubscribeOK
                ),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_implicit<CertSubscribeErr>(
                    () => _decode_CertSubscribeErr
                ),
            ],
        });
    }
    return _cached_decoder_for_CertSubscribeRsp_result(el);
}
/**
 * @summary Encodes a(n) CertSubscribeRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeRsp_result(
    value: CertSubscribeRsp_result,
    elGetter: $.ASN1Encoder<CertSubscribeRsp_result>
) {
    if (!_cached_encoder_for_CertSubscribeRsp_result) {
        _cached_encoder_for_CertSubscribeRsp_result = $._encode_choice<
            CertSubscribeRsp_result
        >(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertSubscribeOK,
                    $.BER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertSubscribeErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertSubscribeRsp_result(value, elGetter);
}

/**
 * @summary CertSubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   result       CHOICE {
 *     success       [0]  CertSubscribeOK,
 *     failure       [1]  CertSubscribeErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertSubscribeRsp {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: CertSubscribeRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeRsp`.
     * @returns {CertSubscribeRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertSubscribeRsp]: CertSubscribeRsp[_K] }>
    ): CertSubscribeRsp {
        return new CertSubscribeRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertSubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of CertSubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertSubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_CertSubscribeRsp: $.ASN1Decoder<
    CertSubscribeRsp
> | null = null;
let _cached_encoder_for_CertSubscribeRsp: $.ASN1Encoder<
    CertSubscribeRsp
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeRsp} The decoded data structure.
 */
export function _decode_CertSubscribeRsp(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeRsp) {
        _cached_decoder_for_CertSubscribeRsp = function (
            el: _Element
        ): CertSubscribeRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertSubscribeRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: CertSubscribeRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_CertSubscribeRsp_result(sequence[1]);
            return new CertSubscribeRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertSubscribeRsp(el);
}
/**
 * @summary Encodes a(n) CertSubscribeRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeRsp(
    value: CertSubscribeRsp,
    elGetter: $.ASN1Encoder<CertSubscribeRsp>
) {
    if (!_cached_encoder_for_CertSubscribeRsp) {
        _cached_encoder_for_CertSubscribeRsp = function (
            value: CertSubscribeRsp,
            elGetter: $.ASN1Encoder<CertSubscribeRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertSubscribeRsp_result(
                                value.result,
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
    return _cached_encoder_for_CertSubscribeRsp(value, elGetter);
}

/**
 * @summary CertUnsubscribeReq_certs_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeReq-certs-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertUnsubscribeReq_certs_Item {
    constructor(
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeReq_certs_Item
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeReq_certs_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeReq_certs_Item`.
     * @returns {CertUnsubscribeReq_certs_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertUnsubscribeReq_certs_Item]: CertUnsubscribeReq_certs_Item[_K];
            }
        >
    ): CertUnsubscribeReq_certs_Item {
        return new CertUnsubscribeReq_certs_Item(
            _o.subject,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertUnsubscribeReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeReq_certs_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("subject", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUnsubscribeReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeReq_certs_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUnsubscribeReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeReq_certs_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeReq_certs_Item: $.ASN1Decoder<
    CertUnsubscribeReq_certs_Item
> | null = null;
let _cached_encoder_for_CertUnsubscribeReq_certs_Item: $.ASN1Encoder<
    CertUnsubscribeReq_certs_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeReq_certs_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeReq_certs_Item} The decoded data structure.
 */
export function _decode_CertUnsubscribeReq_certs_Item(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeReq_certs_Item) {
        _cached_decoder_for_CertUnsubscribeReq_certs_Item = function (
            el: _Element
        ): CertUnsubscribeReq_certs_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUnsubscribeReq-certs-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            return new CertUnsubscribeReq_certs_Item(
                subject,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertUnsubscribeReq_certs_Item(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeReq_certs_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeReq_certs_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeReq_certs_Item(
    value: CertUnsubscribeReq_certs_Item,
    elGetter: $.ASN1Encoder<CertUnsubscribeReq_certs_Item>
) {
    if (!_cached_encoder_for_CertUnsubscribeReq_certs_Item) {
        _cached_encoder_for_CertUnsubscribeReq_certs_Item = function (
            value: CertUnsubscribeReq_certs_Item,
            elGetter: $.ASN1Encoder<CertUnsubscribeReq_certs_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.subject, $.BER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
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
    return _cached_encoder_for_CertUnsubscribeReq_certs_Item(value, elGetter);
}

/**
 * @summary CertUnsubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeReq ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   certs  SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     subject      Name,
 *     serialNumber CertificateSerialNumber,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertUnsubscribeReq {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: CertUnsubscribeReq_certs_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeReq
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeReq`.
     * @returns {CertUnsubscribeReq}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof CertUnsubscribeReq]: CertUnsubscribeReq[_K] }
        >
    ): CertUnsubscribeReq {
        return new CertUnsubscribeReq(
            _o.invokeID,
            _o.certs,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertUnsubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certs",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUnsubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUnsubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeReq: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeReq: $.ASN1Decoder<
    CertUnsubscribeReq
> | null = null;
let _cached_encoder_for_CertUnsubscribeReq: $.ASN1Encoder<
    CertUnsubscribeReq
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeReq} The decoded data structure.
 */
export function _decode_CertUnsubscribeReq(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeReq) {
        _cached_decoder_for_CertUnsubscribeReq = function (
            el: _Element
        ): CertUnsubscribeReq {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUnsubscribeReq contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "certs";
            let invokeID!: InvokeID;
            let certs!: CertUnsubscribeReq_certs_Item[];
            invokeID = _decode_InvokeID(sequence[0]);
            certs = $._decodeSequenceOf<CertUnsubscribeReq_certs_Item>(
                () => _decode_CertUnsubscribeReq_certs_Item
            )(sequence[1]);
            return new CertUnsubscribeReq(invokeID, certs, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertUnsubscribeReq(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeReq, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeReq(
    value: CertUnsubscribeReq,
    elGetter: $.ASN1Encoder<CertUnsubscribeReq>
) {
    if (!_cached_encoder_for_CertUnsubscribeReq) {
        _cached_encoder_for_CertUnsubscribeReq = function (
            value: CertUnsubscribeReq,
            elGetter: $.ASN1Encoder<CertUnsubscribeReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<
                                CertUnsubscribeReq_certs_Item
                            >(
                                () => _encode_CertUnsubscribeReq_certs_Item,
                                $.BER
                            )(value.certs, $.BER),
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
    return _cached_encoder_for_CertUnsubscribeReq(value, elGetter);
}

/**
 * @summary CertUnsubscribeOK_Item_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeOK-Item-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertUnsubscribeOK_Item_ok {
    constructor(
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeOK_Item_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeOK_Item_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeOK_Item_ok`.
     * @returns {CertUnsubscribeOK_Item_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertUnsubscribeOK_Item_ok]: CertUnsubscribeOK_Item_ok[_K];
            }
        >
    ): CertUnsubscribeOK_Item_ok {
        return new CertUnsubscribeOK_Item_ok(
            _o.subject,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertUnsubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeOK_Item_ok: $.ComponentSpec[] = [
    new $.ComponentSpec("subject", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUnsubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeOK_Item_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUnsubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeOK_Item_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeOK_Item_ok: $.ASN1Decoder<
    CertUnsubscribeOK_Item_ok
> | null = null;
let _cached_encoder_for_CertUnsubscribeOK_Item_ok: $.ASN1Encoder<
    CertUnsubscribeOK_Item_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeOK_Item_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeOK_Item_ok} The decoded data structure.
 */
export function _decode_CertUnsubscribeOK_Item_ok(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeOK_Item_ok) {
        _cached_decoder_for_CertUnsubscribeOK_Item_ok = function (
            el: _Element
        ): CertUnsubscribeOK_Item_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUnsubscribeOK-Item-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            return new CertUnsubscribeOK_Item_ok(
                subject,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertUnsubscribeOK_Item_ok(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeOK_Item_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeOK_Item_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeOK_Item_ok(
    value: CertUnsubscribeOK_Item_ok,
    elGetter: $.ASN1Encoder<CertUnsubscribeOK_Item_ok>
) {
    if (!_cached_encoder_for_CertUnsubscribeOK_Item_ok) {
        _cached_encoder_for_CertUnsubscribeOK_Item_ok = function (
            value: CertUnsubscribeOK_Item_ok,
            elGetter: $.ASN1Encoder<CertUnsubscribeOK_Item_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.subject, $.BER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
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
    return _cached_encoder_for_CertUnsubscribeOK_Item_ok(value, elGetter);
}

/**
 * @summary CertUnsubscribeOK_Item_not_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeOK-Item-not-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertUnsubscribeOK_Item_not_ok {
    constructor(
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: CASP_CertStatusCode,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeOK_Item_not_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeOK_Item_not_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeOK_Item_not_ok`.
     * @returns {CertUnsubscribeOK_Item_not_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertUnsubscribeOK_Item_not_ok]: CertUnsubscribeOK_Item_not_ok[_K];
            }
        >
    ): CertUnsubscribeOK_Item_not_ok {
        return new CertUnsubscribeOK_Item_not_ok(
            _o.status,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `status`
     * @public
     * @static
     */

    public static _enum_for_status = _enum_for_CASP_CertStatusCode;
}
/**
 * @summary The Leading Root Component Types of CertUnsubscribeOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeOK_Item_not_ok: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUnsubscribeOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeOK_Item_not_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUnsubscribeOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeOK_Item_not_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeOK_Item_not_ok: $.ASN1Decoder<
    CertUnsubscribeOK_Item_not_ok
> | null = null;
let _cached_encoder_for_CertUnsubscribeOK_Item_not_ok: $.ASN1Encoder<
    CertUnsubscribeOK_Item_not_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeOK_Item_not_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeOK_Item_not_ok} The decoded data structure.
 */
export function _decode_CertUnsubscribeOK_Item_not_ok(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeOK_Item_not_ok) {
        _cached_decoder_for_CertUnsubscribeOK_Item_not_ok = function (
            el: _Element
        ): CertUnsubscribeOK_Item_not_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertUnsubscribeOK-Item-not-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "status";
            let status!: CASP_CertStatusCode;
            status = _decode_CASP_CertStatusCode(sequence[0]);
            return new CertUnsubscribeOK_Item_not_ok(status, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertUnsubscribeOK_Item_not_ok(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeOK_Item_not_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeOK_Item_not_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeOK_Item_not_ok(
    value: CertUnsubscribeOK_Item_not_ok,
    elGetter: $.ASN1Encoder<CertUnsubscribeOK_Item_not_ok>
) {
    if (!_cached_encoder_for_CertUnsubscribeOK_Item_not_ok) {
        _cached_encoder_for_CertUnsubscribeOK_Item_not_ok = function (
            value: CertUnsubscribeOK_Item_not_ok,
            elGetter: $.ASN1Encoder<CertUnsubscribeOK_Item_not_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_CertStatusCode(
                                value.status,
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
    return _cached_encoder_for_CertUnsubscribeOK_Item_not_ok(value, elGetter);
}

/**
 * @summary CertUnsubscribeOK_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeOK-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertUnsubscribeOK_Item =
    | { ok: CertUnsubscribeOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertUnsubscribeOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertUnsubscribeOK_Item: $.ASN1Decoder<
    CertUnsubscribeOK_Item
> | null = null;
let _cached_encoder_for_CertUnsubscribeOK_Item: $.ASN1Encoder<
    CertUnsubscribeOK_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeOK_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeOK_Item} The decoded data structure.
 */
export function _decode_CertUnsubscribeOK_Item(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeOK_Item) {
        _cached_decoder_for_CertUnsubscribeOK_Item = $._decode_extensible_choice<
            CertUnsubscribeOK_Item
        >({
            "CONTEXT 0": [
                "ok",
                $._decode_implicit<CertUnsubscribeOK_Item_ok>(
                    () => _decode_CertUnsubscribeOK_Item_ok
                ),
            ],
            "CONTEXT 1": [
                "not_ok",
                $._decode_implicit<CertUnsubscribeOK_Item_not_ok>(
                    () => _decode_CertUnsubscribeOK_Item_not_ok
                ),
            ],
        });
    }
    return _cached_decoder_for_CertUnsubscribeOK_Item(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeOK_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeOK_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeOK_Item(
    value: CertUnsubscribeOK_Item,
    elGetter: $.ASN1Encoder<CertUnsubscribeOK_Item>
) {
    if (!_cached_encoder_for_CertUnsubscribeOK_Item) {
        _cached_encoder_for_CertUnsubscribeOK_Item = $._encode_choice<
            CertUnsubscribeOK_Item
        >(
            {
                ok: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertUnsubscribeOK_Item_ok,
                    $.BER
                ),
                not_ok: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertUnsubscribeOK_Item_not_ok,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertUnsubscribeOK_Item(value, elGetter);
}

export type CertUnsubscribeOK<> = CertUnsubscribeOK_Item[]; // SequenceOfType
let _cached_decoder_for_CertUnsubscribeOK: $.ASN1Decoder<
    CertUnsubscribeOK
> | null = null;
let _cached_encoder_for_CertUnsubscribeOK: $.ASN1Encoder<
    CertUnsubscribeOK
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeOK} The decoded data structure.
 */
export function _decode_CertUnsubscribeOK(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeOK) {
        _cached_decoder_for_CertUnsubscribeOK = $._decodeSequenceOf<
            CertUnsubscribeOK_Item
        >(() => _decode_CertUnsubscribeOK_Item);
    }
    return _cached_decoder_for_CertUnsubscribeOK(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeOK, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeOK(
    value: CertUnsubscribeOK,
    elGetter: $.ASN1Encoder<CertUnsubscribeOK>
) {
    if (!_cached_encoder_for_CertUnsubscribeOK) {
        _cached_encoder_for_CertUnsubscribeOK = $._encodeSequenceOf<
            CertUnsubscribeOK_Item
        >(() => _encode_CertUnsubscribeOK_Item, $.BER);
    }
    return _cached_encoder_for_CertUnsubscribeOK(value, elGetter);
}

/**
 * @summary CertUnsubscribeErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeErr ::= SEQUENCE {
 *   code         CASP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class CertUnsubscribeErr {
    constructor(
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: CASP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeErr
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeErr`.
     * @returns {CertUnsubscribeErr}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof CertUnsubscribeErr]: CertUnsubscribeErr[_K] }
        >
    ): CertUnsubscribeErr {
        return new CertUnsubscribeErr(_o.code, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `code`
     * @public
     * @static
     */

    public static _enum_for_code = _enum_for_CASP_error;
}
/**
 * @summary The Leading Root Component Types of CertUnsubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "code",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUnsubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUnsubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeErr: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeErr: $.ASN1Decoder<
    CertUnsubscribeErr
> | null = null;
let _cached_encoder_for_CertUnsubscribeErr: $.ASN1Encoder<
    CertUnsubscribeErr
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeErr} The decoded data structure.
 */
export function _decode_CertUnsubscribeErr(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeErr) {
        _cached_decoder_for_CertUnsubscribeErr = function (
            el: _Element
        ): CertUnsubscribeErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertUnsubscribeErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "code";
            let code!: CASP_error;
            code = _decode_CASP_error(sequence[0]);
            return new CertUnsubscribeErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertUnsubscribeErr(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeErr, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeErr(
    value: CertUnsubscribeErr,
    elGetter: $.ASN1Encoder<CertUnsubscribeErr>
) {
    if (!_cached_encoder_for_CertUnsubscribeErr) {
        _cached_encoder_for_CertUnsubscribeErr = function (
            value: CertUnsubscribeErr,
            elGetter: $.ASN1Encoder<CertUnsubscribeErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_error(
                                value.code,
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
    return _cached_encoder_for_CertUnsubscribeErr(value, elGetter);
}

/**
 * @summary CertUnsubscribeRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertUnsubscribeRsp_result =
    | { success: CertUnsubscribeOK } /* CHOICE_ALT_ROOT */
    | { failure: CertUnsubscribeErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertUnsubscribeRsp_result: $.ASN1Decoder<
    CertUnsubscribeRsp_result
> | null = null;
let _cached_encoder_for_CertUnsubscribeRsp_result: $.ASN1Encoder<
    CertUnsubscribeRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeRsp_result} The decoded data structure.
 */
export function _decode_CertUnsubscribeRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeRsp_result) {
        _cached_decoder_for_CertUnsubscribeRsp_result = $._decode_extensible_choice<
            CertUnsubscribeRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_implicit<CertUnsubscribeOK>(
                    () => _decode_CertUnsubscribeOK
                ),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_implicit<CertUnsubscribeErr>(
                    () => _decode_CertUnsubscribeErr
                ),
            ],
        });
    }
    return _cached_decoder_for_CertUnsubscribeRsp_result(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeRsp_result(
    value: CertUnsubscribeRsp_result,
    elGetter: $.ASN1Encoder<CertUnsubscribeRsp_result>
) {
    if (!_cached_encoder_for_CertUnsubscribeRsp_result) {
        _cached_encoder_for_CertUnsubscribeRsp_result = $._encode_choice<
            CertUnsubscribeRsp_result
        >(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertUnsubscribeOK,
                    $.BER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertUnsubscribeErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertUnsubscribeRsp_result(value, elGetter);
}

/**
 * @summary CertUnsubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   result       CHOICE {
 *     success       [0]  CertUnsubscribeOK,
 *     failure       [1]  CertUnsubscribeErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertUnsubscribeRsp {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: CertUnsubscribeRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeRsp`.
     * @returns {CertUnsubscribeRsp}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof CertUnsubscribeRsp]: CertUnsubscribeRsp[_K] }
        >
    ): CertUnsubscribeRsp {
        return new CertUnsubscribeRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertUnsubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of CertUnsubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUnsubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUnsubscribeRsp: $.ASN1Decoder<
    CertUnsubscribeRsp
> | null = null;
let _cached_encoder_for_CertUnsubscribeRsp: $.ASN1Encoder<
    CertUnsubscribeRsp
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeRsp} The decoded data structure.
 */
export function _decode_CertUnsubscribeRsp(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeRsp) {
        _cached_decoder_for_CertUnsubscribeRsp = function (
            el: _Element
        ): CertUnsubscribeRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUnsubscribeRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: CertUnsubscribeRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_CertUnsubscribeRsp_result(sequence[1]);
            return new CertUnsubscribeRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertUnsubscribeRsp(el);
}
/**
 * @summary Encodes a(n) CertUnsubscribeRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeRsp(
    value: CertUnsubscribeRsp,
    elGetter: $.ASN1Encoder<CertUnsubscribeRsp>
) {
    if (!_cached_encoder_for_CertUnsubscribeRsp) {
        _cached_encoder_for_CertUnsubscribeRsp = function (
            value: CertUnsubscribeRsp,
            elGetter: $.ASN1Encoder<CertUnsubscribeRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertUnsubscribeRsp_result(
                                value.result,
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
    return _cached_encoder_for_CertUnsubscribeRsp(value, elGetter);
}

/**
 * @summary CertReplaceReq_certs_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceReq-certs-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertReplaceReq_certs_Item {
    constructor(
        /**
         * @summary `old`.
         * @public
         * @readonly
         */
        readonly old: CertificateSerialNumber,
        /**
         * @summary `new_`.
         * @public
         * @readonly
         */
        readonly new_: Certificate,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceReq_certs_Item
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceReq_certs_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceReq_certs_Item`.
     * @returns {CertReplaceReq_certs_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertReplaceReq_certs_Item]: CertReplaceReq_certs_Item[_K];
            }
        >
    ): CertReplaceReq_certs_Item {
        return new CertReplaceReq_certs_Item(
            _o.old,
            _o.new_,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertReplaceReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceReq_certs_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "old",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "new",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertReplaceReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceReq_certs_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertReplaceReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceReq_certs_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceReq_certs_Item: $.ASN1Decoder<
    CertReplaceReq_certs_Item
> | null = null;
let _cached_encoder_for_CertReplaceReq_certs_Item: $.ASN1Encoder<
    CertReplaceReq_certs_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceReq_certs_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceReq_certs_Item} The decoded data structure.
 */
export function _decode_CertReplaceReq_certs_Item(el: _Element) {
    if (!_cached_decoder_for_CertReplaceReq_certs_Item) {
        _cached_decoder_for_CertReplaceReq_certs_Item = function (
            el: _Element
        ): CertReplaceReq_certs_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertReplaceReq-certs-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "old";
            sequence[1].name = "new";
            let old!: CertificateSerialNumber;
            let new_!: Certificate;
            old = _decode_CertificateSerialNumber(sequence[0]);
            new_ = _decode_Certificate(sequence[1]);
            return new CertReplaceReq_certs_Item(old, new_, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertReplaceReq_certs_Item(el);
}
/**
 * @summary Encodes a(n) CertReplaceReq_certs_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceReq_certs_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceReq_certs_Item(
    value: CertReplaceReq_certs_Item,
    elGetter: $.ASN1Encoder<CertReplaceReq_certs_Item>
) {
    if (!_cached_encoder_for_CertReplaceReq_certs_Item) {
        _cached_encoder_for_CertReplaceReq_certs_Item = function (
            value: CertReplaceReq_certs_Item,
            elGetter: $.ASN1Encoder<CertReplaceReq_certs_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.old,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Certificate(
                                value.new_,
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
    return _cached_encoder_for_CertReplaceReq_certs_Item(value, elGetter);
}

/**
 * @summary CertReplaceReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceReq ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   certs         SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     old           CertificateSerialNumber,
 *     new           Certificate,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertReplaceReq {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: CertReplaceReq_certs_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceReq
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceReq`.
     * @returns {CertReplaceReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertReplaceReq]: CertReplaceReq[_K] }>
    ): CertReplaceReq {
        return new CertReplaceReq(
            _o.invokeID,
            _o.certs,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertReplaceReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certs",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertReplaceReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertReplaceReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceReq: $.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceReq: $.ASN1Decoder<
    CertReplaceReq
> | null = null;
let _cached_encoder_for_CertReplaceReq: $.ASN1Encoder<
    CertReplaceReq
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceReq} The decoded data structure.
 */
export function _decode_CertReplaceReq(el: _Element) {
    if (!_cached_decoder_for_CertReplaceReq) {
        _cached_decoder_for_CertReplaceReq = function (
            el: _Element
        ): CertReplaceReq {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertReplaceReq contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "certs";
            let invokeID!: InvokeID;
            let certs!: CertReplaceReq_certs_Item[];
            invokeID = _decode_InvokeID(sequence[0]);
            certs = $._decodeSequenceOf<CertReplaceReq_certs_Item>(
                () => _decode_CertReplaceReq_certs_Item
            )(sequence[1]);
            return new CertReplaceReq(invokeID, certs, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertReplaceReq(el);
}
/**
 * @summary Encodes a(n) CertReplaceReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceReq, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceReq(
    value: CertReplaceReq,
    elGetter: $.ASN1Encoder<CertReplaceReq>
) {
    if (!_cached_encoder_for_CertReplaceReq) {
        _cached_encoder_for_CertReplaceReq = function (
            value: CertReplaceReq,
            elGetter: $.ASN1Encoder<CertReplaceReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<
                                CertReplaceReq_certs_Item
                            >(() => _encode_CertReplaceReq_certs_Item, $.BER)(
                                value.certs,
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
    return _cached_encoder_for_CertReplaceReq(value, elGetter);
}

/**
 * @summary CertReplaceOK_Item_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceOK-Item-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertReplaceOK_Item_ok {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceOK_Item_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceOK_Item_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceOK_Item_ok`.
     * @returns {CertReplaceOK_Item_ok}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof CertReplaceOK_Item_ok]: CertReplaceOK_Item_ok[_K] }
        >
    ): CertReplaceOK_Item_ok {
        return new CertReplaceOK_Item_ok(
            _o.issuer,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertReplaceOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceOK_Item_ok: $.ComponentSpec[] = [
    new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertReplaceOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceOK_Item_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertReplaceOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceOK_Item_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceOK_Item_ok: $.ASN1Decoder<
    CertReplaceOK_Item_ok
> | null = null;
let _cached_encoder_for_CertReplaceOK_Item_ok: $.ASN1Encoder<
    CertReplaceOK_Item_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceOK_Item_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceOK_Item_ok} The decoded data structure.
 */
export function _decode_CertReplaceOK_Item_ok(el: _Element) {
    if (!_cached_decoder_for_CertReplaceOK_Item_ok) {
        _cached_decoder_for_CertReplaceOK_Item_ok = function (
            el: _Element
        ): CertReplaceOK_Item_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertReplaceOK-Item-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "issuer";
            sequence[1].name = "serialNumber";
            let issuer!: Name;
            let serialNumber!: CertificateSerialNumber;
            issuer = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            return new CertReplaceOK_Item_ok(
                issuer,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertReplaceOK_Item_ok(el);
}
/**
 * @summary Encodes a(n) CertReplaceOK_Item_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceOK_Item_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceOK_Item_ok(
    value: CertReplaceOK_Item_ok,
    elGetter: $.ASN1Encoder<CertReplaceOK_Item_ok>
) {
    if (!_cached_encoder_for_CertReplaceOK_Item_ok) {
        _cached_encoder_for_CertReplaceOK_Item_ok = function (
            value: CertReplaceOK_Item_ok,
            elGetter: $.ASN1Encoder<CertReplaceOK_Item_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
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
    return _cached_encoder_for_CertReplaceOK_Item_ok(value, elGetter);
}

/**
 * @summary CertReplaceOK_Item_not_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceOK-Item-not-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertReplaceOK_Item_not_ok {
    constructor(
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: CASP_CertStatusCode,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceOK_Item_not_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceOK_Item_not_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceOK_Item_not_ok`.
     * @returns {CertReplaceOK_Item_not_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertReplaceOK_Item_not_ok]: CertReplaceOK_Item_not_ok[_K];
            }
        >
    ): CertReplaceOK_Item_not_ok {
        return new CertReplaceOK_Item_not_ok(
            _o.status,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `status`
     * @public
     * @static
     */

    public static _enum_for_status = _enum_for_CASP_CertStatusCode;
}
/**
 * @summary The Leading Root Component Types of CertReplaceOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceOK_Item_not_ok: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertReplaceOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceOK_Item_not_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertReplaceOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceOK_Item_not_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceOK_Item_not_ok: $.ASN1Decoder<
    CertReplaceOK_Item_not_ok
> | null = null;
let _cached_encoder_for_CertReplaceOK_Item_not_ok: $.ASN1Encoder<
    CertReplaceOK_Item_not_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceOK_Item_not_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceOK_Item_not_ok} The decoded data structure.
 */
export function _decode_CertReplaceOK_Item_not_ok(el: _Element) {
    if (!_cached_decoder_for_CertReplaceOK_Item_not_ok) {
        _cached_decoder_for_CertReplaceOK_Item_not_ok = function (
            el: _Element
        ): CertReplaceOK_Item_not_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertReplaceOK-Item-not-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "status";
            let status!: CASP_CertStatusCode;
            status = _decode_CASP_CertStatusCode(sequence[0]);
            return new CertReplaceOK_Item_not_ok(status, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertReplaceOK_Item_not_ok(el);
}
/**
 * @summary Encodes a(n) CertReplaceOK_Item_not_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceOK_Item_not_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceOK_Item_not_ok(
    value: CertReplaceOK_Item_not_ok,
    elGetter: $.ASN1Encoder<CertReplaceOK_Item_not_ok>
) {
    if (!_cached_encoder_for_CertReplaceOK_Item_not_ok) {
        _cached_encoder_for_CertReplaceOK_Item_not_ok = function (
            value: CertReplaceOK_Item_not_ok,
            elGetter: $.ASN1Encoder<CertReplaceOK_Item_not_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_CertStatusCode(
                                value.status,
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
    return _cached_encoder_for_CertReplaceOK_Item_not_ok(value, elGetter);
}

/**
 * @summary CertReplaceOK_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceOK-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertReplaceOK_Item =
    | { ok: CertReplaceOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertReplaceOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertReplaceOK_Item: $.ASN1Decoder<
    CertReplaceOK_Item
> | null = null;
let _cached_encoder_for_CertReplaceOK_Item: $.ASN1Encoder<
    CertReplaceOK_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceOK_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceOK_Item} The decoded data structure.
 */
export function _decode_CertReplaceOK_Item(el: _Element) {
    if (!_cached_decoder_for_CertReplaceOK_Item) {
        _cached_decoder_for_CertReplaceOK_Item = $._decode_extensible_choice<
            CertReplaceOK_Item
        >({
            "CONTEXT 0": [
                "ok",
                $._decode_implicit<CertReplaceOK_Item_ok>(
                    () => _decode_CertReplaceOK_Item_ok
                ),
            ],
            "CONTEXT 1": [
                "not_ok",
                $._decode_implicit<CertReplaceOK_Item_not_ok>(
                    () => _decode_CertReplaceOK_Item_not_ok
                ),
            ],
        });
    }
    return _cached_decoder_for_CertReplaceOK_Item(el);
}
/**
 * @summary Encodes a(n) CertReplaceOK_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceOK_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceOK_Item(
    value: CertReplaceOK_Item,
    elGetter: $.ASN1Encoder<CertReplaceOK_Item>
) {
    if (!_cached_encoder_for_CertReplaceOK_Item) {
        _cached_encoder_for_CertReplaceOK_Item = $._encode_choice<
            CertReplaceOK_Item
        >(
            {
                ok: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertReplaceOK_Item_ok,
                    $.BER
                ),
                not_ok: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertReplaceOK_Item_not_ok,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertReplaceOK_Item(value, elGetter);
}

export type CertReplaceOK<> = CertReplaceOK_Item[]; // SequenceOfType
let _cached_decoder_for_CertReplaceOK: $.ASN1Decoder<
    CertReplaceOK
> | null = null;
let _cached_encoder_for_CertReplaceOK: $.ASN1Encoder<
    CertReplaceOK
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceOK} The decoded data structure.
 */
export function _decode_CertReplaceOK(el: _Element) {
    if (!_cached_decoder_for_CertReplaceOK) {
        _cached_decoder_for_CertReplaceOK = $._decodeSequenceOf<
            CertReplaceOK_Item
        >(() => _decode_CertReplaceOK_Item);
    }
    return _cached_decoder_for_CertReplaceOK(el);
}
/**
 * @summary Encodes a(n) CertReplaceOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceOK, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceOK(
    value: CertReplaceOK,
    elGetter: $.ASN1Encoder<CertReplaceOK>
) {
    if (!_cached_encoder_for_CertReplaceOK) {
        _cached_encoder_for_CertReplaceOK = $._encodeSequenceOf<
            CertReplaceOK_Item
        >(() => _encode_CertReplaceOK_Item, $.BER);
    }
    return _cached_encoder_for_CertReplaceOK(value, elGetter);
}

/**
 * @summary CertReplaceErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceErr ::= SEQUENCE {
 *   code          CASP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class CertReplaceErr {
    constructor(
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: CASP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceErr
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceErr`.
     * @returns {CertReplaceErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertReplaceErr]: CertReplaceErr[_K] }>
    ): CertReplaceErr {
        return new CertReplaceErr(_o.code, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `code`
     * @public
     * @static
     */

    public static _enum_for_code = _enum_for_CASP_error;
}
/**
 * @summary The Leading Root Component Types of CertReplaceErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "code",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertReplaceErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertReplaceErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceErr: $.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceErr: $.ASN1Decoder<
    CertReplaceErr
> | null = null;
let _cached_encoder_for_CertReplaceErr: $.ASN1Encoder<
    CertReplaceErr
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceErr} The decoded data structure.
 */
export function _decode_CertReplaceErr(el: _Element) {
    if (!_cached_decoder_for_CertReplaceErr) {
        _cached_decoder_for_CertReplaceErr = function (
            el: _Element
        ): CertReplaceErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertReplaceErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "code";
            let code!: CASP_error;
            code = _decode_CASP_error(sequence[0]);
            return new CertReplaceErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertReplaceErr(el);
}
/**
 * @summary Encodes a(n) CertReplaceErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceErr, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceErr(
    value: CertReplaceErr,
    elGetter: $.ASN1Encoder<CertReplaceErr>
) {
    if (!_cached_encoder_for_CertReplaceErr) {
        _cached_encoder_for_CertReplaceErr = function (
            value: CertReplaceErr,
            elGetter: $.ASN1Encoder<CertReplaceErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_error(
                                value.code,
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
    return _cached_encoder_for_CertReplaceErr(value, elGetter);
}

/**
 * @summary CertReplaceRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertReplaceRsp_result =
    | { success: CertReplaceOK } /* CHOICE_ALT_ROOT */
    | { failure: CertReplaceErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertReplaceRsp_result: $.ASN1Decoder<
    CertReplaceRsp_result
> | null = null;
let _cached_encoder_for_CertReplaceRsp_result: $.ASN1Encoder<
    CertReplaceRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceRsp_result} The decoded data structure.
 */
export function _decode_CertReplaceRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertReplaceRsp_result) {
        _cached_decoder_for_CertReplaceRsp_result = $._decode_extensible_choice<
            CertReplaceRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_implicit<CertReplaceOK>(() => _decode_CertReplaceOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_implicit<CertReplaceErr>(
                    () => _decode_CertReplaceErr
                ),
            ],
        });
    }
    return _cached_decoder_for_CertReplaceRsp_result(el);
}
/**
 * @summary Encodes a(n) CertReplaceRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceRsp_result(
    value: CertReplaceRsp_result,
    elGetter: $.ASN1Encoder<CertReplaceRsp_result>
) {
    if (!_cached_encoder_for_CertReplaceRsp_result) {
        _cached_encoder_for_CertReplaceRsp_result = $._encode_choice<
            CertReplaceRsp_result
        >(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertReplaceOK,
                    $.BER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertReplaceErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertReplaceRsp_result(value, elGetter);
}

/**
 * @summary CertReplaceRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   result        CHOICE {
 *     success       [0]  CertReplaceOK,
 *     failure       [1]  CertReplaceErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertReplaceRsp {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: CertReplaceRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceRsp`.
     * @returns {CertReplaceRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertReplaceRsp]: CertReplaceRsp[_K] }>
    ): CertReplaceRsp {
        return new CertReplaceRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertReplaceRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of CertReplaceRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertReplaceRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_CertReplaceRsp: $.ASN1Decoder<
    CertReplaceRsp
> | null = null;
let _cached_encoder_for_CertReplaceRsp: $.ASN1Encoder<
    CertReplaceRsp
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceRsp} The decoded data structure.
 */
export function _decode_CertReplaceRsp(el: _Element) {
    if (!_cached_decoder_for_CertReplaceRsp) {
        _cached_decoder_for_CertReplaceRsp = function (
            el: _Element
        ): CertReplaceRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertReplaceRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: CertReplaceRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_CertReplaceRsp_result(sequence[1]);
            return new CertReplaceRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertReplaceRsp(el);
}
/**
 * @summary Encodes a(n) CertReplaceRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceRsp(
    value: CertReplaceRsp,
    elGetter: $.ASN1Encoder<CertReplaceRsp>
) {
    if (!_cached_encoder_for_CertReplaceRsp) {
        _cached_encoder_for_CertReplaceRsp = function (
            value: CertReplaceRsp,
            elGetter: $.ASN1Encoder<CertReplaceRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertReplaceRsp_result(
                                value.result,
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
    return _cached_encoder_for_CertReplaceRsp(value, elGetter);
}

/**
 * @summary CertUpdateReq_certs_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateReq-certs-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertUpdateReq_certs_Item {
    constructor(
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `certStatus`.
         * @public
         * @readonly
         */
        readonly certStatus: CertStatus,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateReq_certs_Item
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateReq_certs_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateReq_certs_Item`.
     * @returns {CertUpdateReq_certs_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertUpdateReq_certs_Item]: CertUpdateReq_certs_Item[_K];
            }
        >
    ): CertUpdateReq_certs_Item {
        return new CertUpdateReq_certs_Item(
            _o.subject,
            _o.serialNumber,
            _o.certStatus,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `certStatus`
     * @public
     * @static
     */

    public static _enum_for_certStatus = _enum_for_CertStatus;
}
/**
 * @summary The Leading Root Component Types of CertUpdateReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateReq_certs_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("subject", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certStatus",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUpdateReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateReq_certs_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUpdateReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateReq_certs_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateReq_certs_Item: $.ASN1Decoder<
    CertUpdateReq_certs_Item
> | null = null;
let _cached_encoder_for_CertUpdateReq_certs_Item: $.ASN1Encoder<
    CertUpdateReq_certs_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateReq_certs_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateReq_certs_Item} The decoded data structure.
 */
export function _decode_CertUpdateReq_certs_Item(el: _Element) {
    if (!_cached_decoder_for_CertUpdateReq_certs_Item) {
        _cached_decoder_for_CertUpdateReq_certs_Item = function (
            el: _Element
        ): CertUpdateReq_certs_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "CertUpdateReq-certs-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            sequence[2].name = "certStatus";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            let certStatus!: CertStatus;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            certStatus = _decode_CertStatus(sequence[2]);
            return new CertUpdateReq_certs_Item(
                subject,
                serialNumber,
                certStatus,
                sequence.slice(3)
            );
        };
    }
    return _cached_decoder_for_CertUpdateReq_certs_Item(el);
}
/**
 * @summary Encodes a(n) CertUpdateReq_certs_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateReq_certs_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateReq_certs_Item(
    value: CertUpdateReq_certs_Item,
    elGetter: $.ASN1Encoder<CertUpdateReq_certs_Item>
) {
    if (!_cached_encoder_for_CertUpdateReq_certs_Item) {
        _cached_encoder_for_CertUpdateReq_certs_Item = function (
            value: CertUpdateReq_certs_Item,
            elGetter: $.ASN1Encoder<CertUpdateReq_certs_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.subject, $.BER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertStatus(
                                value.certStatus,
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
    return _cached_encoder_for_CertUpdateReq_certs_Item(value, elGetter);
}

/**
 * @summary CertUpdateReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateReq ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   certs  SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     subject      Name,
 *     serialNumber CertificateSerialNumber,
 *     certStatus   CertStatus,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertUpdateReq {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: CertUpdateReq_certs_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateReq
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateReq`.
     * @returns {CertUpdateReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertUpdateReq]: CertUpdateReq[_K] }>
    ): CertUpdateReq {
        return new CertUpdateReq(
            _o.invokeID,
            _o.certs,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertUpdateReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certs",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUpdateReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUpdateReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateReq: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateReq: $.ASN1Decoder<
    CertUpdateReq
> | null = null;
let _cached_encoder_for_CertUpdateReq: $.ASN1Encoder<
    CertUpdateReq
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateReq} The decoded data structure.
 */
export function _decode_CertUpdateReq(el: _Element) {
    if (!_cached_decoder_for_CertUpdateReq) {
        _cached_decoder_for_CertUpdateReq = function (
            el: _Element
        ): CertUpdateReq {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUpdateReq contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "certs";
            let invokeID!: InvokeID;
            let certs!: CertUpdateReq_certs_Item[];
            invokeID = _decode_InvokeID(sequence[0]);
            certs = $._decodeSequenceOf<CertUpdateReq_certs_Item>(
                () => _decode_CertUpdateReq_certs_Item
            )(sequence[1]);
            return new CertUpdateReq(invokeID, certs, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertUpdateReq(el);
}
/**
 * @summary Encodes a(n) CertUpdateReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateReq, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateReq(
    value: CertUpdateReq,
    elGetter: $.ASN1Encoder<CertUpdateReq>
) {
    if (!_cached_encoder_for_CertUpdateReq) {
        _cached_encoder_for_CertUpdateReq = function (
            value: CertUpdateReq,
            elGetter: $.ASN1Encoder<CertUpdateReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<
                                CertUpdateReq_certs_Item
                            >(() => _encode_CertUpdateReq_certs_Item, $.BER)(
                                value.certs,
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
    return _cached_encoder_for_CertUpdateReq(value, elGetter);
}

/**
 * @summary CertUpdateOK_Item_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateOK-Item-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertUpdateOK_Item_ok {
    constructor(
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateOK_Item_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateOK_Item_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateOK_Item_ok`.
     * @returns {CertUpdateOK_Item_ok}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof CertUpdateOK_Item_ok]: CertUpdateOK_Item_ok[_K] }
        >
    ): CertUpdateOK_Item_ok {
        return new CertUpdateOK_Item_ok(
            _o.subject,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertUpdateOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateOK_Item_ok: $.ComponentSpec[] = [
    new $.ComponentSpec("subject", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUpdateOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateOK_Item_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUpdateOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateOK_Item_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateOK_Item_ok: $.ASN1Decoder<
    CertUpdateOK_Item_ok
> | null = null;
let _cached_encoder_for_CertUpdateOK_Item_ok: $.ASN1Encoder<
    CertUpdateOK_Item_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateOK_Item_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateOK_Item_ok} The decoded data structure.
 */
export function _decode_CertUpdateOK_Item_ok(el: _Element) {
    if (!_cached_decoder_for_CertUpdateOK_Item_ok) {
        _cached_decoder_for_CertUpdateOK_Item_ok = function (
            el: _Element
        ): CertUpdateOK_Item_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUpdateOK-Item-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "subject";
            sequence[1].name = "serialNumber";
            let subject!: Name;
            let serialNumber!: CertificateSerialNumber;
            subject = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            return new CertUpdateOK_Item_ok(
                subject,
                serialNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertUpdateOK_Item_ok(el);
}
/**
 * @summary Encodes a(n) CertUpdateOK_Item_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateOK_Item_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateOK_Item_ok(
    value: CertUpdateOK_Item_ok,
    elGetter: $.ASN1Encoder<CertUpdateOK_Item_ok>
) {
    if (!_cached_encoder_for_CertUpdateOK_Item_ok) {
        _cached_encoder_for_CertUpdateOK_Item_ok = function (
            value: CertUpdateOK_Item_ok,
            elGetter: $.ASN1Encoder<CertUpdateOK_Item_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.subject, $.BER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
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
    return _cached_encoder_for_CertUpdateOK_Item_ok(value, elGetter);
}

/**
 * @summary CertUpdateOK_Item_not_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateOK-Item-not-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertUpdateOK_Item_not_ok {
    constructor(
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: CASP_CertStatusCode,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateOK_Item_not_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateOK_Item_not_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateOK_Item_not_ok`.
     * @returns {CertUpdateOK_Item_not_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertUpdateOK_Item_not_ok]: CertUpdateOK_Item_not_ok[_K];
            }
        >
    ): CertUpdateOK_Item_not_ok {
        return new CertUpdateOK_Item_not_ok(
            _o.status,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `status`
     * @public
     * @static
     */

    public static _enum_for_status = _enum_for_CASP_CertStatusCode;
}
/**
 * @summary The Leading Root Component Types of CertUpdateOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateOK_Item_not_ok: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUpdateOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateOK_Item_not_ok: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUpdateOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateOK_Item_not_ok: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateOK_Item_not_ok: $.ASN1Decoder<
    CertUpdateOK_Item_not_ok
> | null = null;
let _cached_encoder_for_CertUpdateOK_Item_not_ok: $.ASN1Encoder<
    CertUpdateOK_Item_not_ok
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateOK_Item_not_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateOK_Item_not_ok} The decoded data structure.
 */
export function _decode_CertUpdateOK_Item_not_ok(el: _Element) {
    if (!_cached_decoder_for_CertUpdateOK_Item_not_ok) {
        _cached_decoder_for_CertUpdateOK_Item_not_ok = function (
            el: _Element
        ): CertUpdateOK_Item_not_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertUpdateOK-Item-not-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "status";
            let status!: CASP_CertStatusCode;
            status = _decode_CASP_CertStatusCode(sequence[0]);
            return new CertUpdateOK_Item_not_ok(status, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertUpdateOK_Item_not_ok(el);
}
/**
 * @summary Encodes a(n) CertUpdateOK_Item_not_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateOK_Item_not_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateOK_Item_not_ok(
    value: CertUpdateOK_Item_not_ok,
    elGetter: $.ASN1Encoder<CertUpdateOK_Item_not_ok>
) {
    if (!_cached_encoder_for_CertUpdateOK_Item_not_ok) {
        _cached_encoder_for_CertUpdateOK_Item_not_ok = function (
            value: CertUpdateOK_Item_not_ok,
            elGetter: $.ASN1Encoder<CertUpdateOK_Item_not_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_CertStatusCode(
                                value.status,
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
    return _cached_encoder_for_CertUpdateOK_Item_not_ok(value, elGetter);
}

/**
 * @summary CertUpdateOK_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateOK-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertUpdateOK_Item =
    | { ok: CertUpdateOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertUpdateOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertUpdateOK_Item: $.ASN1Decoder<
    CertUpdateOK_Item
> | null = null;
let _cached_encoder_for_CertUpdateOK_Item: $.ASN1Encoder<
    CertUpdateOK_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateOK_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateOK_Item} The decoded data structure.
 */
export function _decode_CertUpdateOK_Item(el: _Element) {
    if (!_cached_decoder_for_CertUpdateOK_Item) {
        _cached_decoder_for_CertUpdateOK_Item = $._decode_extensible_choice<
            CertUpdateOK_Item
        >({
            "CONTEXT 0": [
                "ok",
                $._decode_implicit<CertUpdateOK_Item_ok>(
                    () => _decode_CertUpdateOK_Item_ok
                ),
            ],
            "CONTEXT 1": [
                "not_ok",
                $._decode_implicit<CertUpdateOK_Item_not_ok>(
                    () => _decode_CertUpdateOK_Item_not_ok
                ),
            ],
        });
    }
    return _cached_decoder_for_CertUpdateOK_Item(el);
}
/**
 * @summary Encodes a(n) CertUpdateOK_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateOK_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateOK_Item(
    value: CertUpdateOK_Item,
    elGetter: $.ASN1Encoder<CertUpdateOK_Item>
) {
    if (!_cached_encoder_for_CertUpdateOK_Item) {
        _cached_encoder_for_CertUpdateOK_Item = $._encode_choice<
            CertUpdateOK_Item
        >(
            {
                ok: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertUpdateOK_Item_ok,
                    $.BER
                ),
                not_ok: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertUpdateOK_Item_not_ok,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertUpdateOK_Item(value, elGetter);
}

export type CertUpdateOK<> = CertUpdateOK_Item[]; // SequenceOfType
let _cached_decoder_for_CertUpdateOK: $.ASN1Decoder<CertUpdateOK> | null = null;
let _cached_encoder_for_CertUpdateOK: $.ASN1Encoder<CertUpdateOK> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateOK} The decoded data structure.
 */
export function _decode_CertUpdateOK(el: _Element) {
    if (!_cached_decoder_for_CertUpdateOK) {
        _cached_decoder_for_CertUpdateOK = $._decodeSequenceOf<
            CertUpdateOK_Item
        >(() => _decode_CertUpdateOK_Item);
    }
    return _cached_decoder_for_CertUpdateOK(el);
}
/**
 * @summary Encodes a(n) CertUpdateOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateOK, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateOK(
    value: CertUpdateOK,
    elGetter: $.ASN1Encoder<CertUpdateOK>
) {
    if (!_cached_encoder_for_CertUpdateOK) {
        _cached_encoder_for_CertUpdateOK = $._encodeSequenceOf<
            CertUpdateOK_Item
        >(() => _encode_CertUpdateOK_Item, $.BER);
    }
    return _cached_encoder_for_CertUpdateOK(value, elGetter);
}

/**
 * @summary CertUpdateErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateErr ::= SEQUENCE {
 *   code          CASP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class CertUpdateErr {
    constructor(
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: CASP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateErr
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateErr`.
     * @returns {CertUpdateErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertUpdateErr]: CertUpdateErr[_K] }>
    ): CertUpdateErr {
        return new CertUpdateErr(_o.code, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `code`
     * @public
     * @static
     */

    public static _enum_for_code = _enum_for_CASP_error;
}
/**
 * @summary The Leading Root Component Types of CertUpdateErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "code",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertUpdateErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUpdateErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateErr: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateErr: $.ASN1Decoder<
    CertUpdateErr
> | null = null;
let _cached_encoder_for_CertUpdateErr: $.ASN1Encoder<
    CertUpdateErr
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateErr} The decoded data structure.
 */
export function _decode_CertUpdateErr(el: _Element) {
    if (!_cached_decoder_for_CertUpdateErr) {
        _cached_decoder_for_CertUpdateErr = function (
            el: _Element
        ): CertUpdateErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertUpdateErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "code";
            let code!: CASP_error;
            code = _decode_CASP_error(sequence[0]);
            return new CertUpdateErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertUpdateErr(el);
}
/**
 * @summary Encodes a(n) CertUpdateErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateErr, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateErr(
    value: CertUpdateErr,
    elGetter: $.ASN1Encoder<CertUpdateErr>
) {
    if (!_cached_encoder_for_CertUpdateErr) {
        _cached_encoder_for_CertUpdateErr = function (
            value: CertUpdateErr,
            elGetter: $.ASN1Encoder<CertUpdateErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_error(
                                value.code,
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
    return _cached_encoder_for_CertUpdateErr(value, elGetter);
}

/**
 * @summary CertUpdateRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertUpdateRsp_result =
    | { success: CertUpdateOK } /* CHOICE_ALT_ROOT */
    | { failure: CertUpdateErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertUpdateRsp_result: $.ASN1Decoder<
    CertUpdateRsp_result
> | null = null;
let _cached_encoder_for_CertUpdateRsp_result: $.ASN1Encoder<
    CertUpdateRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateRsp_result} The decoded data structure.
 */
export function _decode_CertUpdateRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertUpdateRsp_result) {
        _cached_decoder_for_CertUpdateRsp_result = $._decode_extensible_choice<
            CertUpdateRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_implicit<CertUpdateOK>(() => _decode_CertUpdateOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_implicit<CertUpdateErr>(() => _decode_CertUpdateErr),
            ],
        });
    }
    return _cached_decoder_for_CertUpdateRsp_result(el);
}
/**
 * @summary Encodes a(n) CertUpdateRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateRsp_result(
    value: CertUpdateRsp_result,
    elGetter: $.ASN1Encoder<CertUpdateRsp_result>
) {
    if (!_cached_encoder_for_CertUpdateRsp_result) {
        _cached_encoder_for_CertUpdateRsp_result = $._encode_choice<
            CertUpdateRsp_result
        >(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertUpdateOK,
                    $.BER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertUpdateErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertUpdateRsp_result(value, elGetter);
}

/**
 * @summary CertUpdateRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateRsp ::= SEQUENCE {
 *   invokeID      InvokeID,
 *   result        CHOICE {
 *     success       [0]  CertUpdateOK,
 *     failure       [1]  CertUpdateErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertUpdateRsp {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: CertUpdateRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateRsp`.
     * @returns {CertUpdateRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertUpdateRsp]: CertUpdateRsp[_K] }>
    ): CertUpdateRsp {
        return new CertUpdateRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertUpdateRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of CertUpdateRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertUpdateRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_CertUpdateRsp: $.ASN1Decoder<
    CertUpdateRsp
> | null = null;
let _cached_encoder_for_CertUpdateRsp: $.ASN1Encoder<
    CertUpdateRsp
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateRsp} The decoded data structure.
 */
export function _decode_CertUpdateRsp(el: _Element) {
    if (!_cached_decoder_for_CertUpdateRsp) {
        _cached_decoder_for_CertUpdateRsp = function (
            el: _Element
        ): CertUpdateRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUpdateRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: CertUpdateRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_CertUpdateRsp_result(sequence[1]);
            return new CertUpdateRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertUpdateRsp(el);
}
/**
 * @summary Encodes a(n) CertUpdateRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateRsp(
    value: CertUpdateRsp,
    elGetter: $.ASN1Encoder<CertUpdateRsp>
) {
    if (!_cached_encoder_for_CertUpdateRsp) {
        _cached_encoder_for_CertUpdateRsp = function (
            value: CertUpdateRsp,
            elGetter: $.ASN1Encoder<CertUpdateRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertUpdateRsp_result(
                                value.result,
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
    return _cached_encoder_for_CertUpdateRsp(value, elGetter);
}

/**
 * @summary CAsubscribeAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CAsubscribeAbort ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   reason       CASP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class CAsubscribeAbort {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: CASP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CAsubscribeAbort
     * @description
     *
     * This takes an `object` and converts it to a `CAsubscribeAbort`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CAsubscribeAbort`.
     * @returns {CAsubscribeAbort}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CAsubscribeAbort]: CAsubscribeAbort[_K] }>
    ): CAsubscribeAbort {
        return new CAsubscribeAbort(
            _o.invokeID,
            _o.reason,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `reason`
     * @public
     * @static
     */

    public static _enum_for_reason = _enum_for_CASP_error;
}
/**
 * @summary The Leading Root Component Types of CAsubscribeAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CAsubscribeAbort: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reason",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CAsubscribeAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CAsubscribeAbort: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CAsubscribeAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CAsubscribeAbort: $.ComponentSpec[] = [];
let _cached_decoder_for_CAsubscribeAbort: $.ASN1Decoder<
    CAsubscribeAbort
> | null = null;
let _cached_encoder_for_CAsubscribeAbort: $.ASN1Encoder<
    CAsubscribeAbort
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CAsubscribeAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CAsubscribeAbort} The decoded data structure.
 */
export function _decode_CAsubscribeAbort(el: _Element) {
    if (!_cached_decoder_for_CAsubscribeAbort) {
        _cached_decoder_for_CAsubscribeAbort = function (
            el: _Element
        ): CAsubscribeAbort {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CAsubscribeAbort contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "reason";
            let invokeID!: InvokeID;
            let reason!: CASP_error;
            invokeID = _decode_InvokeID(sequence[0]);
            reason = _decode_CASP_error(sequence[1]);
            return new CAsubscribeAbort(invokeID, reason, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CAsubscribeAbort(el);
}
/**
 * @summary Encodes a(n) CAsubscribeAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAsubscribeAbort, encoded as an ASN.1 Element.
 */
export function _encode_CAsubscribeAbort(
    value: CAsubscribeAbort,
    elGetter: $.ASN1Encoder<CAsubscribeAbort>
) {
    if (!_cached_encoder_for_CAsubscribeAbort) {
        _cached_encoder_for_CAsubscribeAbort = function (
            value: CAsubscribeAbort,
            elGetter: $.ASN1Encoder<CAsubscribeAbort>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CASP_error(
                                value.reason,
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
    return _cached_encoder_for_CAsubscribeAbort(value, elGetter);
}

/**
 * @summary CasubProt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CasubProt  ::=  CHOICE {
 *   initReq             [0]  InitializationRec,
 *   initAcc             [1]  InitializationAcc,
 *   initRej             [2]  InitializationRej,
 *   initAbt             [3]  InitializationAbort,
 *   certSubscribeReq    [4]  CertSubscribeReq,
 *   certSubscribeRsp    [5]  CertSubscribeRsp,
 *   certUnsubscribeReq  [6]  CertUnsubscribeReq,
 *   certUnsubscribeRsp  [7]  CertUnsubscribeRsp,
 *   certReplaceReq      [8]  CertReplaceReq,
 *   certReplaceRsp      [9]  CertReplaceRsp,
 *   certUpdateReq       [10] CertUpdateReq,
 *   certUpdateRsp       [11] CertUpdateRsp,
 *   cAsubscribeAbort    [12] CAsubscribeAbort,
 *   ... }
 * ```
 */
export type CasubProt =
    | { initReq: InitializationRec } /* CHOICE_ALT_ROOT */
    | { initAcc: InitializationAcc } /* CHOICE_ALT_ROOT */
    | { initRej: InitializationRej } /* CHOICE_ALT_ROOT */
    | { initAbt: InitializationAbort } /* CHOICE_ALT_ROOT */
    | { certSubscribeReq: CertSubscribeReq } /* CHOICE_ALT_ROOT */
    | { certSubscribeRsp: CertSubscribeRsp } /* CHOICE_ALT_ROOT */
    | { certUnsubscribeReq: CertUnsubscribeReq } /* CHOICE_ALT_ROOT */
    | { certUnsubscribeRsp: CertUnsubscribeRsp } /* CHOICE_ALT_ROOT */
    | { certReplaceReq: CertReplaceReq } /* CHOICE_ALT_ROOT */
    | { certReplaceRsp: CertReplaceRsp } /* CHOICE_ALT_ROOT */
    | { certUpdateReq: CertUpdateReq } /* CHOICE_ALT_ROOT */
    | { certUpdateRsp: CertUpdateRsp } /* CHOICE_ALT_ROOT */
    | { cAsubscribeAbort: CAsubscribeAbort } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CasubProt: $.ASN1Decoder<CasubProt> | null = null;
let _cached_encoder_for_CasubProt: $.ASN1Encoder<CasubProt> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CasubProt
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CasubProt} The decoded data structure.
 */
export function _decode_CasubProt(el: _Element) {
    if (!_cached_decoder_for_CasubProt) {
        _cached_decoder_for_CasubProt = $._decode_extensible_choice<CasubProt>({
            "CONTEXT 0": [
                "initReq",
                $._decode_implicit<InitializationRec>(
                    () => _decode_InitializationRec
                ),
            ],
            "CONTEXT 1": [
                "initAcc",
                $._decode_implicit<InitializationAcc>(
                    () => _decode_InitializationAcc
                ),
            ],
            "CONTEXT 2": [
                "initRej",
                $._decode_implicit<InitializationRej>(
                    () => _decode_InitializationRej
                ),
            ],
            "CONTEXT 3": [
                "initAbt",
                $._decode_implicit<InitializationAbort>(
                    () => _decode_InitializationAbort
                ),
            ],
            "CONTEXT 4": [
                "certSubscribeReq",
                $._decode_implicit<CertSubscribeReq>(
                    () => _decode_CertSubscribeReq
                ),
            ],
            "CONTEXT 5": [
                "certSubscribeRsp",
                $._decode_implicit<CertSubscribeRsp>(
                    () => _decode_CertSubscribeRsp
                ),
            ],
            "CONTEXT 6": [
                "certUnsubscribeReq",
                $._decode_implicit<CertUnsubscribeReq>(
                    () => _decode_CertUnsubscribeReq
                ),
            ],
            "CONTEXT 7": [
                "certUnsubscribeRsp",
                $._decode_implicit<CertUnsubscribeRsp>(
                    () => _decode_CertUnsubscribeRsp
                ),
            ],
            "CONTEXT 8": [
                "certReplaceReq",
                $._decode_implicit<CertReplaceReq>(
                    () => _decode_CertReplaceReq
                ),
            ],
            "CONTEXT 9": [
                "certReplaceRsp",
                $._decode_implicit<CertReplaceRsp>(
                    () => _decode_CertReplaceRsp
                ),
            ],
            "CONTEXT 10": [
                "certUpdateReq",
                $._decode_implicit<CertUpdateReq>(() => _decode_CertUpdateReq),
            ],
            "CONTEXT 11": [
                "certUpdateRsp",
                $._decode_implicit<CertUpdateRsp>(() => _decode_CertUpdateRsp),
            ],
            "CONTEXT 12": [
                "cAsubscribeAbort",
                $._decode_implicit<CAsubscribeAbort>(
                    () => _decode_CAsubscribeAbort
                ),
            ],
        });
    }
    return _cached_decoder_for_CasubProt(el);
}
/**
 * @summary Encodes a(n) CasubProt into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CasubProt, encoded as an ASN.1 Element.
 */
export function _encode_CasubProt(
    value: CasubProt,
    elGetter: $.ASN1Encoder<CasubProt>
) {
    if (!_cached_encoder_for_CasubProt) {
        _cached_encoder_for_CasubProt = $._encode_choice<CasubProt>(
            {
                initReq: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_InitializationRec,
                    $.BER
                ),
                initAcc: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_InitializationAcc,
                    $.BER
                ),
                initRej: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_InitializationRej,
                    $.BER
                ),
                initAbt: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_InitializationAbort,
                    $.BER
                ),
                certSubscribeReq: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_CertSubscribeReq,
                    $.BER
                ),
                certSubscribeRsp: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_CertSubscribeRsp,
                    $.BER
                ),
                certUnsubscribeReq: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_CertUnsubscribeReq,
                    $.BER
                ),
                certUnsubscribeRsp: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => _encode_CertUnsubscribeRsp,
                    $.BER
                ),
                certReplaceReq: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () => _encode_CertReplaceReq,
                    $.BER
                ),
                certReplaceRsp: $._encode_implicit(
                    _TagClass.context,
                    9,
                    () => _encode_CertReplaceRsp,
                    $.BER
                ),
                certUpdateReq: $._encode_implicit(
                    _TagClass.context,
                    10,
                    () => _encode_CertUpdateReq,
                    $.BER
                ),
                certUpdateRsp: $._encode_implicit(
                    _TagClass.context,
                    11,
                    () => _encode_CertUpdateRsp,
                    $.BER
                ),
                cAsubscribeAbort: $._encode_implicit(
                    _TagClass.context,
                    12,
                    () => _encode_CAsubscribeAbort,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CasubProt(value, elGetter);
}

/* END_MODULE CaSubscription */
/* eslint-enable */
