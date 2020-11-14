/**
 * @module TrustBroker
 * @summary The ASN.1 module `TrustBroker`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.trustBroker.9
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
    UTCTime,
    UTF8String,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PKCertIdentifier,
    _decode_PKCertIdentifier,
    _encode_PKCertIdentifier,
} from "./PKI-Stub";
import { Version, _decode_Version, _encode_Version } from "./Wrapper";
export {
    PKCertIdentifier,
    _decode_PKCertIdentifier,
    _encode_PKCertIdentifier,
} from "./PKI-Stub";
export {
    Version,
    Version_v1 /* IMPORTED_BIT */,
    _decode_Version,
    _encode_Version,
} from "./Wrapper";

/**
 * @summary InitializationReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationReq ::= SEQUENCE {
 *   version    Version,
 *   ... }
 * ```
 *
 * @class
 */
export class InitializationReq {
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
     * @summary Restructures an object into a InitializationReq
     * @description
     *
     * This takes an `object` and converts it to a `InitializationReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitializationReq`.
     * @returns {InitializationReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof InitializationReq]: InitializationReq[_K] }>
    ): InitializationReq {
        return new InitializationReq(
            _o.version,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of InitializationReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InitializationReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of InitializationReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InitializationReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of InitializationReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InitializationReq: $.ComponentSpec[] = [];
let _cached_decoder_for_InitializationReq: $.ASN1Decoder<
    InitializationReq
> | null = null;
let _cached_encoder_for_InitializationReq: $.ASN1Encoder<
    InitializationReq
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) InitializationReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializationReq} The decoded data structure.
 */
export function _decode_InitializationReq(el: _Element) {
    if (!_cached_decoder_for_InitializationReq) {
        _cached_decoder_for_InitializationReq = function (
            el: _Element
        ): InitializationReq {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "InitializationReq contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            let version!: Version;
            version = _decode_Version(sequence[0]);
            return new InitializationReq(version, sequence.slice(1));
        };
    }
    return _cached_decoder_for_InitializationReq(el);
}
/**
 * @summary Encodes a(n) InitializationReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializationReq, encoded as an ASN.1 Element.
 */
export function _encode_InitializationReq(
    value: InitializationReq,
    elGetter: $.ASN1Encoder<InitializationReq>
) {
    if (!_cached_encoder_for_InitializationReq) {
        _cached_encoder_for_InitializationReq = function (
            value: InitializationReq,
            elGetter: $.ASN1Encoder<InitializationReq>
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
    return _cached_encoder_for_InitializationReq(value, elGetter);
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
    unsupportedVersions = 0,
}
/**
 * @summary InitializationRej_diag
 */
export type InitializationRej_diag =
    | _enum_for_InitializationRej_diag
    | ENUMERATED;
/**
 * @summary InitializationRej_diag_unsupportedVersions
 * @constant
 * @type {number}
 */
export const InitializationRej_diag_unsupportedVersions: InitializationRej_diag = 0; /* LONG_NAMED_ENUMERATED_VALUE */
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
 *     unsupportedVersions     (0),
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
 * @summary TBrequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBrequest  ::=  CHOICE {
 *   caCert      [0] PKCertIdentifier,
 *   subjectCert [1] PKCertIdentifier,
 *   ... }
 * ```
 */
export type TBrequest =
    | { caCert: PKCertIdentifier } /* CHOICE_ALT_ROOT */
    | { subjectCert: PKCertIdentifier } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TBrequest: $.ASN1Decoder<TBrequest> | null = null;
let _cached_encoder_for_TBrequest: $.ASN1Encoder<TBrequest> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBrequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBrequest} The decoded data structure.
 */
export function _decode_TBrequest(el: _Element) {
    if (!_cached_decoder_for_TBrequest) {
        _cached_decoder_for_TBrequest = $._decode_extensible_choice<TBrequest>({
            "CONTEXT 0": [
                "caCert",
                $._decode_implicit<PKCertIdentifier>(
                    () => _decode_PKCertIdentifier
                ),
            ],
            "CONTEXT 1": [
                "subjectCert",
                $._decode_implicit<PKCertIdentifier>(
                    () => _decode_PKCertIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_TBrequest(el);
}
/**
 * @summary Encodes a(n) TBrequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBrequest, encoded as an ASN.1 Element.
 */
export function _encode_TBrequest(
    value: TBrequest,
    elGetter: $.ASN1Encoder<TBrequest>
) {
    if (!_cached_encoder_for_TBrequest) {
        _cached_encoder_for_TBrequest = $._encode_choice<TBrequest>(
            {
                caCert: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_PKCertIdentifier,
                    $.BER
                ),
                subjectCert: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_PKCertIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TBrequest(value, elGetter);
}

/**
 * @summary TBOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBOK ::= SEQUENCE {
 *   levelOfAssurance  [0]  INTEGER (0..100),
 *   confidenceLevel   [1]  INTEGER (0..100),
 *   validationTime    [2]  UTCTime,
 *   info              [3]  UTF8String  OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class TBOK {
    constructor(
        /**
         * @summary `levelOfAssurance`.
         * @public
         * @readonly
         */
        readonly levelOfAssurance: INTEGER,
        /**
         * @summary `confidenceLevel`.
         * @public
         * @readonly
         */
        readonly confidenceLevel: INTEGER,
        /**
         * @summary `validationTime`.
         * @public
         * @readonly
         */
        readonly validationTime: UTCTime,
        /**
         * @summary `info`.
         * @public
         * @readonly
         */
        readonly info: OPTIONAL<UTF8String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TBOK
     * @description
     *
     * This takes an `object` and converts it to a `TBOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBOK`.
     * @returns {TBOK}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TBOK]: TBOK[_K] }>
    ): TBOK {
        return new TBOK(
            _o.levelOfAssurance,
            _o.confidenceLevel,
            _o.validationTime,
            _o.info,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of TBOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "levelOfAssurance",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "confidenceLevel",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "validationTime",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "info",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TBOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBOK: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TBOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBOK: $.ComponentSpec[] = [];
let _cached_decoder_for_TBOK: $.ASN1Decoder<TBOK> | null = null;
let _cached_encoder_for_TBOK: $.ASN1Encoder<TBOK> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBOK} The decoded data structure.
 */
export function _decode_TBOK(el: _Element) {
    if (!_cached_decoder_for_TBOK) {
        _cached_decoder_for_TBOK = function (el: _Element): TBOK {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let levelOfAssurance!: INTEGER;
            let confidenceLevel!: INTEGER;
            let validationTime!: UTCTime;
            let info: OPTIONAL<UTF8String>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                levelOfAssurance: (_el: _Element): void => {
                    levelOfAssurance = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                confidenceLevel: (_el: _Element): void => {
                    confidenceLevel = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                validationTime: (_el: _Element): void => {
                    validationTime = $._decode_implicit<UTCTime>(
                        () => $._decodeUTCTime
                    )(_el);
                },
                info: (_el: _Element): void => {
                    info = $._decode_implicit<UTF8String>(
                        () => $._decodeUTF8String
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBOK,
                _extension_additions_list_spec_for_TBOK,
                _root_component_type_list_2_spec_for_TBOK,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBOK(
                /* SEQUENCE_CONSTRUCTOR_CALL */ levelOfAssurance,
                confidenceLevel,
                validationTime,
                info,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TBOK(el);
}
/**
 * @summary Encodes a(n) TBOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBOK, encoded as an ASN.1 Element.
 */
export function _encode_TBOK(value: TBOK, elGetter: $.ASN1Encoder<TBOK>) {
    if (!_cached_encoder_for_TBOK) {
        _cached_encoder_for_TBOK = function (
            value: TBOK,
            elGetter: $.ASN1Encoder<TBOK>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => $._encodeInteger,
                                $.BER
                            )(value.levelOfAssurance, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => $._encodeInteger,
                                $.BER
                            )(value.confidenceLevel, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                2,
                                () => $._encodeUTCTime,
                                $.BER
                            )(value.validationTime, $.BER),
                            /* IF_ABSENT  */ value.info === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeUTF8String,
                                      $.BER
                                  )(value.info, $.BER),
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
    return _cached_encoder_for_TBOK(value, elGetter);
}

/**
 * @summary TBerror_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBerror-code ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_TBerror_code {
    caCertInvalid = 1,
    unknownCert = 2,
    unknownCertStatus = 3,
    subjectCertRevoked = 4,
    incorrectCert = 5,
    contractExpired = 6,
    pathValidationFailed = 7,
    timeOut = 8,
    other = 99,
}
/**
 * @summary TBerror_code
 */
export type TBerror_code = _enum_for_TBerror_code | ENUMERATED;
/**
 * @summary TBerror_code_caCertInvalid
 * @constant
 * @type {number}
 */
export const TBerror_code_caCertInvalid: TBerror_code = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_unknownCert
 * @constant
 * @type {number}
 */
export const TBerror_code_unknownCert: TBerror_code = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_unknownCertStatus
 * @constant
 * @type {number}
 */
export const TBerror_code_unknownCertStatus: TBerror_code = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_subjectCertRevoked
 * @constant
 * @type {number}
 */
export const TBerror_code_subjectCertRevoked: TBerror_code = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_incorrectCert
 * @constant
 * @type {number}
 */
export const TBerror_code_incorrectCert: TBerror_code = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_contractExpired
 * @constant
 * @type {number}
 */
export const TBerror_code_contractExpired: TBerror_code = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_pathValidationFailed
 * @constant
 * @type {number}
 */
export const TBerror_code_pathValidationFailed: TBerror_code = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_timeOut
 * @constant
 * @type {number}
 */
export const TBerror_code_timeOut: TBerror_code = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary TBerror_code_other
 * @constant
 * @type {number}
 */
export const TBerror_code_other: TBerror_code = 99; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_TBerror_code: $.ASN1Decoder<TBerror_code> | null = null;
let _cached_encoder_for_TBerror_code: $.ASN1Encoder<TBerror_code> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBerror_code
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBerror_code} The decoded data structure.
 */
export function _decode_TBerror_code(el: _Element) {
    if (!_cached_decoder_for_TBerror_code) {
        _cached_decoder_for_TBerror_code = $._decodeEnumerated;
    }
    return _cached_decoder_for_TBerror_code(el);
}
/**
 * @summary Encodes a(n) TBerror_code into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBerror_code, encoded as an ASN.1 Element.
 */
export function _encode_TBerror_code(
    value: TBerror_code,
    elGetter: $.ASN1Encoder<TBerror_code>
) {
    if (!_cached_encoder_for_TBerror_code) {
        _cached_encoder_for_TBerror_code = $._encodeEnumerated;
    }
    return _cached_encoder_for_TBerror_code(value, elGetter);
}

/**
 * @summary TBerror
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBerror ::= SEQUENCE {
 *   code        ENUMERATED {
 *     caCertInvalid        (1),
 *     unknownCert          (2),
 *     unknownCertStatus    (3),
 *     subjectCertRevoked   (4),
 *     incorrectCert        (5),
 *     contractExpired      (6),
 *     pathValidationFailed (7),
 *     timeOut              (8),
 *     other                (99),
 *     ... },
 *   diagnostic  UTF8String OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class TBerror {
    constructor(
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: TBerror_code,
        /**
         * @summary `diagnostic`.
         * @public
         * @readonly
         */
        readonly diagnostic: OPTIONAL<UTF8String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TBerror
     * @description
     *
     * This takes an `object` and converts it to a `TBerror`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBerror`.
     * @returns {TBerror}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TBerror]: TBerror[_K] }>
    ): TBerror {
        return new TBerror(
            _o.code,
            _o.diagnostic,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `code`
     * @public
     * @static
     */

    public static _enum_for_code = _enum_for_TBerror_code;
}
/**
 * @summary The Leading Root Component Types of TBerror
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBerror: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "code",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "diagnostic",
        true,
        $.hasTag(_TagClass.universal, 12),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TBerror
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBerror: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TBerror
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBerror: $.ComponentSpec[] = [];
let _cached_decoder_for_TBerror: $.ASN1Decoder<TBerror> | null = null;
let _cached_encoder_for_TBerror: $.ASN1Encoder<TBerror> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBerror
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBerror} The decoded data structure.
 */
export function _decode_TBerror(el: _Element) {
    if (!_cached_decoder_for_TBerror) {
        _cached_decoder_for_TBerror = function (el: _Element): TBerror {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let code!: TBerror_code;
            let diagnostic: OPTIONAL<UTF8String>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                code: (_el: _Element): void => {
                    code = _decode_TBerror_code(_el);
                },
                diagnostic: (_el: _Element): void => {
                    diagnostic = $._decodeUTF8String(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBerror,
                _extension_additions_list_spec_for_TBerror,
                _root_component_type_list_2_spec_for_TBerror,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBerror(
                /* SEQUENCE_CONSTRUCTOR_CALL */ code,
                diagnostic,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TBerror(el);
}
/**
 * @summary Encodes a(n) TBerror into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBerror, encoded as an ASN.1 Element.
 */
export function _encode_TBerror(
    value: TBerror,
    elGetter: $.ASN1Encoder<TBerror>
) {
    if (!_cached_encoder_for_TBerror) {
        _cached_encoder_for_TBerror = function (
            value: TBerror,
            elGetter: $.ASN1Encoder<TBerror>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_TBerror_code(
                                value.code,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.diagnostic === undefined
                                ? undefined
                                : $._encodeUTF8String(value.diagnostic, $.BER),
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
    return _cached_encoder_for_TBerror(value, elGetter);
}

/**
 * @summary TBresponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBresponse  ::=  CHOICE {
 *   success [0]  TBOK,
 *   failure [1]  TBerror,
 *   ... }
 * ```
 */
export type TBresponse =
    | { success: TBOK } /* CHOICE_ALT_ROOT */
    | { failure: TBerror } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TBresponse: $.ASN1Decoder<TBresponse> | null = null;
let _cached_encoder_for_TBresponse: $.ASN1Encoder<TBresponse> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBresponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBresponse} The decoded data structure.
 */
export function _decode_TBresponse(el: _Element) {
    if (!_cached_decoder_for_TBresponse) {
        _cached_decoder_for_TBresponse = $._decode_extensible_choice<
            TBresponse
        >({
            "CONTEXT 0": [
                "success",
                $._decode_implicit<TBOK>(() => _decode_TBOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_implicit<TBerror>(() => _decode_TBerror),
            ],
        });
    }
    return _cached_decoder_for_TBresponse(el);
}
/**
 * @summary Encodes a(n) TBresponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBresponse, encoded as an ASN.1 Element.
 */
export function _encode_TBresponse(
    value: TBresponse,
    elGetter: $.ASN1Encoder<TBresponse>
) {
    if (!_cached_encoder_for_TBresponse) {
        _cached_encoder_for_TBresponse = $._encode_choice<TBresponse>(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_TBOK,
                    $.BER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_TBerror,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TBresponse(value, elGetter);
}

/**
 * @summary TBprot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBprot  ::=  CHOICE {
 *   initReq     [0] InitializationReq,
 *   initAcc     [1] InitializationAcc,
 *   initRej     [2] InitializationRej,
 *   initAbt     [3] InitializationAbort,
 *   tBrequest   [4] TBrequest,
 *   tBresponse  [5] TBresponse,
 *   ... }
 * ```
 */
export type TBprot =
    | { initReq: InitializationReq } /* CHOICE_ALT_ROOT */
    | { initAcc: InitializationAcc } /* CHOICE_ALT_ROOT */
    | { initRej: InitializationRej } /* CHOICE_ALT_ROOT */
    | { initAbt: InitializationAbort } /* CHOICE_ALT_ROOT */
    | { tBrequest: TBrequest } /* CHOICE_ALT_ROOT */
    | { tBresponse: TBresponse } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TBprot: $.ASN1Decoder<TBprot> | null = null;
let _cached_encoder_for_TBprot: $.ASN1Encoder<TBprot> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBprot
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBprot} The decoded data structure.
 */
export function _decode_TBprot(el: _Element) {
    if (!_cached_decoder_for_TBprot) {
        _cached_decoder_for_TBprot = $._decode_extensible_choice<TBprot>({
            "CONTEXT 0": [
                "initReq",
                $._decode_implicit<InitializationReq>(
                    () => _decode_InitializationReq
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
                "tBrequest",
                $._decode_implicit<TBrequest>(() => _decode_TBrequest),
            ],
            "CONTEXT 5": [
                "tBresponse",
                $._decode_implicit<TBresponse>(() => _decode_TBresponse),
            ],
        });
    }
    return _cached_decoder_for_TBprot(el);
}
/**
 * @summary Encodes a(n) TBprot into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBprot, encoded as an ASN.1 Element.
 */
export function _encode_TBprot(value: TBprot, elGetter: $.ASN1Encoder<TBprot>) {
    if (!_cached_encoder_for_TBprot) {
        _cached_encoder_for_TBprot = $._encode_choice<TBprot>(
            {
                initReq: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_InitializationReq,
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
                tBrequest: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_TBrequest,
                    $.BER
                ),
                tBresponse: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_TBresponse,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TBprot(value, elGetter);
}

/* END_MODULE TrustBroker */
/* eslint-enable */
