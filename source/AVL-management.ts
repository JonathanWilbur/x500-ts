/**
 * @module AVL_management
 * @summary The ASN.1 module `AVL-management`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.avl-management.9
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
    NULL,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Attribute,
    AvlSerialNumber,
    CertAVL,
    Certificate,
    _decode_Attribute,
    _decode_AvlSerialNumber,
    _decode_CertAVL,
    _decode_Certificate,
    _encode_Attribute,
    _encode_AvlSerialNumber,
    _encode_CertAVL,
    _encode_Certificate,
} from "./PKI-Stub";
import { Version, _decode_Version, _encode_Version } from "./Wrapper";
export {
    Attribute,
    AvlSerialNumber,
    CertAVL,
    Certificate,
    SupportedAttributes,
    _decode_Attribute,
    _decode_AvlSerialNumber,
    _decode_CertAVL,
    _decode_Certificate,
    _encode_Attribute,
    _encode_AvlSerialNumber,
    _encode_CertAVL,
    _encode_Certificate,
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
 * @summary CertReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReq ::= SEQUENCE {
 *   invokeID  InvokeID,
 *   ... }
 * ```
 *
 * @class
 */
export class CertReq {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReq
     * @description
     *
     * This takes an `object` and converts it to a `CertReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReq`.
     * @returns {CertReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertReq]: CertReq[_K] }>
    ): CertReq {
        return new CertReq(_o.invokeID, _o._unrecognizedExtensionsList);
    }
}
/**
 * @summary The Leading Root Component Types of CertReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReq: $.ComponentSpec[] = [];
let _cached_decoder_for_CertReq: $.ASN1Decoder<CertReq> | null = null;
let _cached_encoder_for_CertReq: $.ASN1Encoder<CertReq> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReq} The decoded data structure.
 */
export function _decode_CertReq(el: _Element) {
    if (!_cached_decoder_for_CertReq) {
        _cached_decoder_for_CertReq = function (el: _Element): CertReq {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertReq contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            let invokeID!: InvokeID;
            invokeID = _decode_InvokeID(sequence[0]);
            return new CertReq(invokeID, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertReq(el);
}
/**
 * @summary Encodes a(n) CertReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReq, encoded as an ASN.1 Element.
 */
export function _encode_CertReq(
    value: CertReq,
    elGetter: $.ASN1Encoder<CertReq>
) {
    if (!_cached_encoder_for_CertReq) {
        _cached_encoder_for_CertReq = function (
            value: CertReq,
            elGetter: $.ASN1Encoder<CertReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
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
    return _cached_encoder_for_CertReq(value, elGetter);
}

/**
 * @summary CertOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertOK ::= SEQUENCE {
 *   dhCert  Certificate,
 *   ... }
 * ```
 *
 * @class
 */
export class CertOK {
    constructor(
        /**
         * @summary `dhCert`.
         * @public
         * @readonly
         */
        readonly dhCert: Certificate,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertOK
     * @description
     *
     * This takes an `object` and converts it to a `CertOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertOK`.
     * @returns {CertOK}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertOK]: CertOK[_K] }>
    ): CertOK {
        return new CertOK(_o.dhCert, _o._unrecognizedExtensionsList);
    }
}
/**
 * @summary The Leading Root Component Types of CertOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "dhCert",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertOK: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertOK: $.ComponentSpec[] = [];
let _cached_decoder_for_CertOK: $.ASN1Decoder<CertOK> | null = null;
let _cached_encoder_for_CertOK: $.ASN1Encoder<CertOK> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertOK} The decoded data structure.
 */
export function _decode_CertOK(el: _Element) {
    if (!_cached_decoder_for_CertOK) {
        _cached_decoder_for_CertOK = function (el: _Element): CertOK {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "dhCert";
            let dhCert!: Certificate;
            dhCert = _decode_Certificate(sequence[0]);
            return new CertOK(dhCert, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertOK(el);
}
/**
 * @summary Encodes a(n) CertOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertOK, encoded as an ASN.1 Element.
 */
export function _encode_CertOK(value: CertOK, elGetter: $.ASN1Encoder<CertOK>) {
    if (!_cached_encoder_for_CertOK) {
        _cached_encoder_for_CertOK = function (
            value: CertOK,
            elGetter: $.ASN1Encoder<CertOK>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Certificate(
                                value.dhCert,
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
    return _cached_encoder_for_CertOK(value, elGetter);
}

/**
 * @summary AVMP_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AVMP-error ::= ENUMERATED {
 *   noReason                           (0),
 *   protocolError                      (1),
 *   duplicateAVL                       (2),
 *   missingAvlComponent                (3),
 *   invalidAvlVersion                  (4),
 *   notAllowedForConstrainedAVLEntity  (5),
 *   constrainedRequired                (6),
 *   nonConstrainedRequired             (7),
 *   unsupportedCriticalEntryExtenssion (8),
 *   unsupportedCriticalExtenssion      (9),
 *   maxAVLsExceeded                    (10),
 *   unknownAVL                         (11),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_AVMP_error {
    noReason = 0,
    protocolError = 1,
    duplicateAVL = 2,
    missingAvlComponent = 3,
    invalidAvlVersion = 4,
    notAllowedForConstrainedAVLEntity = 5,
    constrainedRequired = 6,
    nonConstrainedRequired = 7,
    unsupportedCriticalEntryExtenssion = 8,
    unsupportedCriticalExtenssion = 9,
    maxAVLsExceeded = 10,
    unknownAVL = 11,
}
/**
 * @summary AVMP_error
 */
export type AVMP_error = _enum_for_AVMP_error | ENUMERATED;
/**
 * @summary AVMP_error_noReason
 * @constant
 * @type {number}
 */
export const AVMP_error_noReason: AVMP_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_protocolError
 * @constant
 * @type {number}
 */
export const AVMP_error_protocolError: AVMP_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_duplicateAVL
 * @constant
 * @type {number}
 */
export const AVMP_error_duplicateAVL: AVMP_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_missingAvlComponent
 * @constant
 * @type {number}
 */
export const AVMP_error_missingAvlComponent: AVMP_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_invalidAvlVersion
 * @constant
 * @type {number}
 */
export const AVMP_error_invalidAvlVersion: AVMP_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_notAllowedForConstrainedAVLEntity
 * @constant
 * @type {number}
 */
export const AVMP_error_notAllowedForConstrainedAVLEntity: AVMP_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_constrainedRequired
 * @constant
 * @type {number}
 */
export const AVMP_error_constrainedRequired: AVMP_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_nonConstrainedRequired
 * @constant
 * @type {number}
 */
export const AVMP_error_nonConstrainedRequired: AVMP_error = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_unsupportedCriticalEntryExtenssion
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalEntryExtenssion: AVMP_error = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_unsupportedCriticalExtenssion
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalExtenssion: AVMP_error = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_maxAVLsExceeded
 * @constant
 * @type {number}
 */
export const AVMP_error_maxAVLsExceeded: AVMP_error = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary AVMP_error_unknownAVL
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownAVL: AVMP_error = 11; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_AVMP_error: $.ASN1Decoder<AVMP_error> | null = null;
let _cached_encoder_for_AVMP_error: $.ASN1Encoder<AVMP_error> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AVMP_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AVMP_error} The decoded data structure.
 */
export function _decode_AVMP_error(el: _Element) {
    if (!_cached_decoder_for_AVMP_error) {
        _cached_decoder_for_AVMP_error = $._decodeEnumerated;
    }
    return _cached_decoder_for_AVMP_error(el);
}
/**
 * @summary Encodes a(n) AVMP_error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AVMP_error, encoded as an ASN.1 Element.
 */
export function _encode_AVMP_error(
    value: AVMP_error,
    elGetter: $.ASN1Encoder<AVMP_error>
) {
    if (!_cached_encoder_for_AVMP_error) {
        _cached_encoder_for_AVMP_error = $._encodeEnumerated;
    }
    return _cached_encoder_for_AVMP_error(value, elGetter);
}

export type Notifications<> = Attribute[]; // SequenceOfType
let _cached_decoder_for_Notifications: $.ASN1Decoder<
    Notifications
> | null = null;
let _cached_encoder_for_Notifications: $.ASN1Encoder<
    Notifications
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Notifications
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Notifications} The decoded data structure.
 */
export function _decode_Notifications(el: _Element) {
    if (!_cached_decoder_for_Notifications) {
        _cached_decoder_for_Notifications = $._decodeSequenceOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_Notifications(el);
}
/**
 * @summary Encodes a(n) Notifications into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Notifications, encoded as an ASN.1 Element.
 */
export function _encode_Notifications(
    value: Notifications,
    elGetter: $.ASN1Encoder<Notifications>
) {
    if (!_cached_encoder_for_Notifications) {
        _cached_encoder_for_Notifications = $._encodeSequenceOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_Notifications(value, elGetter);
}

/**
 * @summary CertErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertErr ::= SEQUENCE {
 *   notOK  AVMP-error,
 *   note   Notifications OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class CertErr {
    constructor(
        /**
         * @summary `notOK`.
         * @public
         * @readonly
         */
        readonly notOK: AVMP_error,
        /**
         * @summary `note`.
         * @public
         * @readonly
         */
        readonly note: OPTIONAL<Notifications>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertErr
     * @description
     *
     * This takes an `object` and converts it to a `CertErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertErr`.
     * @returns {CertErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertErr]: CertErr[_K] }>
    ): CertErr {
        return new CertErr(_o.notOK, _o.note, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `notOK`
     * @public
     * @static
     */

    public static _enum_for_notOK = _enum_for_AVMP_error;
}
/**
 * @summary The Leading Root Component Types of CertErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notOK",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "note",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertErr: $.ComponentSpec[] = [];
let _cached_decoder_for_CertErr: $.ASN1Decoder<CertErr> | null = null;
let _cached_encoder_for_CertErr: $.ASN1Encoder<CertErr> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertErr} The decoded data structure.
 */
export function _decode_CertErr(el: _Element) {
    if (!_cached_decoder_for_CertErr) {
        _cached_decoder_for_CertErr = function (el: _Element): CertErr {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let notOK!: AVMP_error;
            let note: OPTIONAL<Notifications>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                notOK: (_el: _Element): void => {
                    notOK = _decode_AVMP_error(_el);
                },
                note: (_el: _Element): void => {
                    note = _decode_Notifications(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertErr,
                _extension_additions_list_spec_for_CertErr,
                _root_component_type_list_2_spec_for_CertErr,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertErr(
                /* SEQUENCE_CONSTRUCTOR_CALL */ notOK,
                note,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertErr(el);
}
/**
 * @summary Encodes a(n) CertErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertErr, encoded as an ASN.1 Element.
 */
export function _encode_CertErr(
    value: CertErr,
    elGetter: $.ASN1Encoder<CertErr>
) {
    if (!_cached_encoder_for_CertErr) {
        _cached_encoder_for_CertErr = function (
            value: CertErr,
            elGetter: $.ASN1Encoder<CertErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.notOK,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.note === undefined
                                ? undefined
                                : _encode_Notifications(value.note, $.BER),
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
    return _cached_encoder_for_CertErr(value, elGetter);
}

/**
 * @summary CertRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertRsp_result =
    | { success: CertOK } /* CHOICE_ALT_ROOT */
    | { failure: CertErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertRsp_result: $.ASN1Decoder<
    CertRsp_result
> | null = null;
let _cached_encoder_for_CertRsp_result: $.ASN1Encoder<
    CertRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertRsp_result} The decoded data structure.
 */
export function _decode_CertRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertRsp_result) {
        _cached_decoder_for_CertRsp_result = $._decode_extensible_choice<
            CertRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_implicit<CertOK>(() => _decode_CertOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_implicit<CertErr>(() => _decode_CertErr),
            ],
        });
    }
    return _cached_decoder_for_CertRsp_result(el);
}
/**
 * @summary Encodes a(n) CertRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertRsp_result(
    value: CertRsp_result,
    elGetter: $.ASN1Encoder<CertRsp_result>
) {
    if (!_cached_encoder_for_CertRsp_result) {
        _cached_encoder_for_CertRsp_result = $._encode_choice<CertRsp_result>(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertOK,
                    $.BER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertRsp_result(value, elGetter);
}

/**
 * @summary CertRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   result       CHOICE {
 *     success [0]  CertOK,
 *     failure [1]  CertErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertRsp {
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
        readonly result: CertRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertRsp`.
     * @returns {CertRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertRsp]: CertRsp[_K] }>
    ): CertRsp {
        return new CertRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertRsp: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of CertRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_CertRsp: $.ASN1Decoder<CertRsp> | null = null;
let _cached_encoder_for_CertRsp: $.ASN1Encoder<CertRsp> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertRsp} The decoded data structure.
 */
export function _decode_CertRsp(el: _Element) {
    if (!_cached_decoder_for_CertRsp) {
        _cached_decoder_for_CertRsp = function (el: _Element): CertRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: CertRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_CertRsp_result(sequence[1]);
            return new CertRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertRsp(el);
}
/**
 * @summary Encodes a(n) CertRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertRsp(
    value: CertRsp,
    elGetter: $.ASN1Encoder<CertRsp>
) {
    if (!_cached_encoder_for_CertRsp) {
        _cached_encoder_for_CertRsp = function (
            value: CertRsp,
            elGetter: $.ASN1Encoder<CertRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertRsp_result(
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
    return _cached_encoder_for_CertRsp(value, elGetter);
}

/**
 * @summary AddAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlReq ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   certlist     CertAVL,
 *   ... }
 * ```
 *
 * @class
 */
export class AddAvlReq {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `certlist`.
         * @public
         * @readonly
         */
        readonly certlist: CertAVL,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AddAvlReq
     * @description
     *
     * This takes an `object` and converts it to a `AddAvlReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddAvlReq`.
     * @returns {AddAvlReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AddAvlReq]: AddAvlReq[_K] }>
    ): AddAvlReq {
        return new AddAvlReq(
            _o.invokeID,
            _o.certlist,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AddAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddAvlReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certlist",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AddAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddAvlReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AddAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddAvlReq: $.ComponentSpec[] = [];
let _cached_decoder_for_AddAvlReq: $.ASN1Decoder<AddAvlReq> | null = null;
let _cached_encoder_for_AddAvlReq: $.ASN1Encoder<AddAvlReq> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlReq} The decoded data structure.
 */
export function _decode_AddAvlReq(el: _Element) {
    if (!_cached_decoder_for_AddAvlReq) {
        _cached_decoder_for_AddAvlReq = function (el: _Element): AddAvlReq {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AddAvlReq contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "certlist";
            let invokeID!: InvokeID;
            let certlist!: CertAVL;
            invokeID = _decode_InvokeID(sequence[0]);
            certlist = _decode_CertAVL(sequence[1]);
            return new AddAvlReq(invokeID, certlist, sequence.slice(2));
        };
    }
    return _cached_decoder_for_AddAvlReq(el);
}
/**
 * @summary Encodes a(n) AddAvlReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlReq, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlReq(
    value: AddAvlReq,
    elGetter: $.ASN1Encoder<AddAvlReq>
) {
    if (!_cached_encoder_for_AddAvlReq) {
        _cached_encoder_for_AddAvlReq = function (
            value: AddAvlReq,
            elGetter: $.ASN1Encoder<AddAvlReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertAVL(
                                value.certlist,
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
    return _cached_encoder_for_AddAvlReq(value, elGetter);
}

/**
 * @summary AddAvlOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlOK ::= SEQUENCE {
 *   ok     NULL,
 *   ... }
 * ```
 *
 * @class
 */
export class AddAvlOK {
    constructor(
        /**
         * @summary `ok`.
         * @public
         * @readonly
         */
        readonly ok: NULL,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AddAvlOK
     * @description
     *
     * This takes an `object` and converts it to a `AddAvlOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddAvlOK`.
     * @returns {AddAvlOK}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AddAvlOK]: AddAvlOK[_K] }>
    ): AddAvlOK {
        return new AddAvlOK(_o.ok, _o._unrecognizedExtensionsList);
    }
}
/**
 * @summary The Leading Root Component Types of AddAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddAvlOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ok",
        false,
        $.hasTag(_TagClass.universal, 5),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AddAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddAvlOK: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AddAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddAvlOK: $.ComponentSpec[] = [];
let _cached_decoder_for_AddAvlOK: $.ASN1Decoder<AddAvlOK> | null = null;
let _cached_encoder_for_AddAvlOK: $.ASN1Encoder<AddAvlOK> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlOK} The decoded data structure.
 */
export function _decode_AddAvlOK(el: _Element) {
    if (!_cached_decoder_for_AddAvlOK) {
        _cached_decoder_for_AddAvlOK = function (el: _Element): AddAvlOK {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "AddAvlOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "ok";
            let ok!: NULL;
            ok = $._decodeNull(sequence[0]);
            return new AddAvlOK(ok, sequence.slice(1));
        };
    }
    return _cached_decoder_for_AddAvlOK(el);
}
/**
 * @summary Encodes a(n) AddAvlOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlOK, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlOK(
    value: AddAvlOK,
    elGetter: $.ASN1Encoder<AddAvlOK>
) {
    if (!_cached_encoder_for_AddAvlOK) {
        _cached_encoder_for_AddAvlOK = function (
            value: AddAvlOK,
            elGetter: $.ASN1Encoder<AddAvlOK>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [/* REQUIRED   */ $._encodeNull(value.ok, $.BER)],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AddAvlOK(value, elGetter);
}

/**
 * @summary AddAvlErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlErr ::= SEQUENCE {
 *   notOK  AVMP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class AddAvlErr {
    constructor(
        /**
         * @summary `notOK`.
         * @public
         * @readonly
         */
        readonly notOK: AVMP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AddAvlErr
     * @description
     *
     * This takes an `object` and converts it to a `AddAvlErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddAvlErr`.
     * @returns {AddAvlErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AddAvlErr]: AddAvlErr[_K] }>
    ): AddAvlErr {
        return new AddAvlErr(_o.notOK, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `notOK`
     * @public
     * @static
     */

    public static _enum_for_notOK = _enum_for_AVMP_error;
}
/**
 * @summary The Leading Root Component Types of AddAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddAvlErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notOK",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AddAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddAvlErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AddAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddAvlErr: $.ComponentSpec[] = [];
let _cached_decoder_for_AddAvlErr: $.ASN1Decoder<AddAvlErr> | null = null;
let _cached_encoder_for_AddAvlErr: $.ASN1Encoder<AddAvlErr> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlErr} The decoded data structure.
 */
export function _decode_AddAvlErr(el: _Element) {
    if (!_cached_decoder_for_AddAvlErr) {
        _cached_decoder_for_AddAvlErr = function (el: _Element): AddAvlErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "AddAvlErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "notOK";
            let notOK!: AVMP_error;
            notOK = _decode_AVMP_error(sequence[0]);
            return new AddAvlErr(notOK, sequence.slice(1));
        };
    }
    return _cached_decoder_for_AddAvlErr(el);
}
/**
 * @summary Encodes a(n) AddAvlErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlErr, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlErr(
    value: AddAvlErr,
    elGetter: $.ASN1Encoder<AddAvlErr>
) {
    if (!_cached_encoder_for_AddAvlErr) {
        _cached_encoder_for_AddAvlErr = function (
            value: AddAvlErr,
            elGetter: $.ASN1Encoder<AddAvlErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.notOK,
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
    return _cached_encoder_for_AddAvlErr(value, elGetter);
}

/**
 * @summary AddAvlRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AddAvlRsp_result =
    | { success: AddAvlOK } /* CHOICE_ALT_ROOT */
    | { failure: AddAvlErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AddAvlRsp_result: $.ASN1Decoder<
    AddAvlRsp_result
> | null = null;
let _cached_encoder_for_AddAvlRsp_result: $.ASN1Encoder<
    AddAvlRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlRsp_result} The decoded data structure.
 */
export function _decode_AddAvlRsp_result(el: _Element) {
    if (!_cached_decoder_for_AddAvlRsp_result) {
        _cached_decoder_for_AddAvlRsp_result = $._decode_extensible_choice<
            AddAvlRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_implicit<AddAvlOK>(() => _decode_AddAvlOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_implicit<AddAvlErr>(() => _decode_AddAvlErr),
            ],
        });
    }
    return _cached_decoder_for_AddAvlRsp_result(el);
}
/**
 * @summary Encodes a(n) AddAvlRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlRsp_result(
    value: AddAvlRsp_result,
    elGetter: $.ASN1Encoder<AddAvlRsp_result>
) {
    if (!_cached_encoder_for_AddAvlRsp_result) {
        _cached_encoder_for_AddAvlRsp_result = $._encode_choice<
            AddAvlRsp_result
        >(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AddAvlOK,
                    $.BER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AddAvlErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AddAvlRsp_result(value, elGetter);
}

/**
 * @summary AddAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   result       CHOICE {
 *     success [0]  AddAvlOK,
 *     failure [1]  AddAvlErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class AddAvlRsp {
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
        readonly result: AddAvlRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AddAvlRsp
     * @description
     *
     * This takes an `object` and converts it to a `AddAvlRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddAvlRsp`.
     * @returns {AddAvlRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AddAvlRsp]: AddAvlRsp[_K] }>
    ): AddAvlRsp {
        return new AddAvlRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AddAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddAvlRsp: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of AddAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddAvlRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AddAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddAvlRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_AddAvlRsp: $.ASN1Decoder<AddAvlRsp> | null = null;
let _cached_encoder_for_AddAvlRsp: $.ASN1Encoder<AddAvlRsp> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlRsp} The decoded data structure.
 */
export function _decode_AddAvlRsp(el: _Element) {
    if (!_cached_decoder_for_AddAvlRsp) {
        _cached_decoder_for_AddAvlRsp = function (el: _Element): AddAvlRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AddAvlRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: AddAvlRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_AddAvlRsp_result(sequence[1]);
            return new AddAvlRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_AddAvlRsp(el);
}
/**
 * @summary Encodes a(n) AddAvlRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlRsp, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlRsp(
    value: AddAvlRsp,
    elGetter: $.ASN1Encoder<AddAvlRsp>
) {
    if (!_cached_encoder_for_AddAvlRsp) {
        _cached_encoder_for_AddAvlRsp = function (
            value: AddAvlRsp,
            elGetter: $.ASN1Encoder<AddAvlRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AddAvlRsp_result(
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
    return _cached_encoder_for_AddAvlRsp(value, elGetter);
}

/**
 * @summary ReplaceAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplaceAvlReq ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   old          AvlSerialNumber OPTIONAL,
 *   new          CertAVL,
 *   ... }
 * ```
 *
 * @class
 */
export class ReplaceAvlReq {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `old`.
         * @public
         * @readonly
         */
        readonly old: OPTIONAL<AvlSerialNumber>,
        /**
         * @summary `new_`.
         * @public
         * @readonly
         */
        readonly new_: CertAVL,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReplaceAvlReq
     * @description
     *
     * This takes an `object` and converts it to a `ReplaceAvlReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReplaceAvlReq`.
     * @returns {ReplaceAvlReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ReplaceAvlReq]: ReplaceAvlReq[_K] }>
    ): ReplaceAvlReq {
        return new ReplaceAvlReq(
            _o.invokeID,
            _o.old,
            _o.new_,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ReplaceAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReplaceAvlReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "old",
        true,
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
 * @summary The Trailing Root Component Types of ReplaceAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReplaceAvlReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ReplaceAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReplaceAvlReq: $.ComponentSpec[] = [];
let _cached_decoder_for_ReplaceAvlReq: $.ASN1Decoder<
    ReplaceAvlReq
> | null = null;
let _cached_encoder_for_ReplaceAvlReq: $.ASN1Encoder<
    ReplaceAvlReq
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ReplaceAvlReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplaceAvlReq} The decoded data structure.
 */
export function _decode_ReplaceAvlReq(el: _Element) {
    if (!_cached_decoder_for_ReplaceAvlReq) {
        _cached_decoder_for_ReplaceAvlReq = function (
            el: _Element
        ): ReplaceAvlReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokeID!: InvokeID;
            let old: OPTIONAL<AvlSerialNumber>;
            let new_!: CertAVL;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                invokeID: (_el: _Element): void => {
                    invokeID = _decode_InvokeID(_el);
                },
                old: (_el: _Element): void => {
                    old = _decode_AvlSerialNumber(_el);
                },
                new: (_el: _Element): void => {
                    new_ = _decode_CertAVL(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReplaceAvlReq,
                _extension_additions_list_spec_for_ReplaceAvlReq,
                _root_component_type_list_2_spec_for_ReplaceAvlReq,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ReplaceAvlReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ invokeID,
                old,
                new_,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ReplaceAvlReq(el);
}
/**
 * @summary Encodes a(n) ReplaceAvlReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplaceAvlReq, encoded as an ASN.1 Element.
 */
export function _encode_ReplaceAvlReq(
    value: ReplaceAvlReq,
    elGetter: $.ASN1Encoder<ReplaceAvlReq>
) {
    if (!_cached_encoder_for_ReplaceAvlReq) {
        _cached_encoder_for_ReplaceAvlReq = function (
            value: ReplaceAvlReq,
            elGetter: $.ASN1Encoder<ReplaceAvlReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.old === undefined
                                ? undefined
                                : _encode_AvlSerialNumber(value.old, $.BER),
                            /* REQUIRED   */ _encode_CertAVL(value.new_, $.BER),
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
    return _cached_encoder_for_ReplaceAvlReq(value, elGetter);
}

/**
 * @summary RepAvlOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepAvlOK ::= SEQUENCE {
 *   ok     NULL,
 *   ... }
 * ```
 *
 * @class
 */
export class RepAvlOK {
    constructor(
        /**
         * @summary `ok`.
         * @public
         * @readonly
         */
        readonly ok: NULL,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RepAvlOK
     * @description
     *
     * This takes an `object` and converts it to a `RepAvlOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RepAvlOK`.
     * @returns {RepAvlOK}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof RepAvlOK]: RepAvlOK[_K] }>
    ): RepAvlOK {
        return new RepAvlOK(_o.ok, _o._unrecognizedExtensionsList);
    }
}
/**
 * @summary The Leading Root Component Types of RepAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RepAvlOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ok",
        false,
        $.hasTag(_TagClass.universal, 5),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of RepAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RepAvlOK: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of RepAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RepAvlOK: $.ComponentSpec[] = [];
let _cached_decoder_for_RepAvlOK: $.ASN1Decoder<RepAvlOK> | null = null;
let _cached_encoder_for_RepAvlOK: $.ASN1Encoder<RepAvlOK> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RepAvlOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepAvlOK} The decoded data structure.
 */
export function _decode_RepAvlOK(el: _Element) {
    if (!_cached_decoder_for_RepAvlOK) {
        _cached_decoder_for_RepAvlOK = function (el: _Element): RepAvlOK {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "RepAvlOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "ok";
            let ok!: NULL;
            ok = $._decodeNull(sequence[0]);
            return new RepAvlOK(ok, sequence.slice(1));
        };
    }
    return _cached_decoder_for_RepAvlOK(el);
}
/**
 * @summary Encodes a(n) RepAvlOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepAvlOK, encoded as an ASN.1 Element.
 */
export function _encode_RepAvlOK(
    value: RepAvlOK,
    elGetter: $.ASN1Encoder<RepAvlOK>
) {
    if (!_cached_encoder_for_RepAvlOK) {
        _cached_encoder_for_RepAvlOK = function (
            value: RepAvlOK,
            elGetter: $.ASN1Encoder<RepAvlOK>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [/* REQUIRED   */ $._encodeNull(value.ok, $.BER)],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RepAvlOK(value, elGetter);
}

/**
 * @summary RepAvlErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepAvlErr ::= SEQUENCE {
 *   notOK  AVMP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class RepAvlErr {
    constructor(
        /**
         * @summary `notOK`.
         * @public
         * @readonly
         */
        readonly notOK: AVMP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RepAvlErr
     * @description
     *
     * This takes an `object` and converts it to a `RepAvlErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RepAvlErr`.
     * @returns {RepAvlErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof RepAvlErr]: RepAvlErr[_K] }>
    ): RepAvlErr {
        return new RepAvlErr(_o.notOK, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `notOK`
     * @public
     * @static
     */

    public static _enum_for_notOK = _enum_for_AVMP_error;
}
/**
 * @summary The Leading Root Component Types of RepAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RepAvlErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notOK",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of RepAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RepAvlErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of RepAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RepAvlErr: $.ComponentSpec[] = [];
let _cached_decoder_for_RepAvlErr: $.ASN1Decoder<RepAvlErr> | null = null;
let _cached_encoder_for_RepAvlErr: $.ASN1Encoder<RepAvlErr> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RepAvlErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepAvlErr} The decoded data structure.
 */
export function _decode_RepAvlErr(el: _Element) {
    if (!_cached_decoder_for_RepAvlErr) {
        _cached_decoder_for_RepAvlErr = function (el: _Element): RepAvlErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "RepAvlErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "notOK";
            let notOK!: AVMP_error;
            notOK = _decode_AVMP_error(sequence[0]);
            return new RepAvlErr(notOK, sequence.slice(1));
        };
    }
    return _cached_decoder_for_RepAvlErr(el);
}
/**
 * @summary Encodes a(n) RepAvlErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepAvlErr, encoded as an ASN.1 Element.
 */
export function _encode_RepAvlErr(
    value: RepAvlErr,
    elGetter: $.ASN1Encoder<RepAvlErr>
) {
    if (!_cached_encoder_for_RepAvlErr) {
        _cached_encoder_for_RepAvlErr = function (
            value: RepAvlErr,
            elGetter: $.ASN1Encoder<RepAvlErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.notOK,
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
    return _cached_encoder_for_RepAvlErr(value, elGetter);
}

/**
 * @summary ReplaceAvlRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplaceAvlRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ReplaceAvlRsp_result =
    | { success: RepAvlOK } /* CHOICE_ALT_ROOT */
    | { failure: RepAvlErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ReplaceAvlRsp_result: $.ASN1Decoder<
    ReplaceAvlRsp_result
> | null = null;
let _cached_encoder_for_ReplaceAvlRsp_result: $.ASN1Encoder<
    ReplaceAvlRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ReplaceAvlRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplaceAvlRsp_result} The decoded data structure.
 */
export function _decode_ReplaceAvlRsp_result(el: _Element) {
    if (!_cached_decoder_for_ReplaceAvlRsp_result) {
        _cached_decoder_for_ReplaceAvlRsp_result = $._decode_extensible_choice<
            ReplaceAvlRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_implicit<RepAvlOK>(() => _decode_RepAvlOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_implicit<RepAvlErr>(() => _decode_RepAvlErr),
            ],
        });
    }
    return _cached_decoder_for_ReplaceAvlRsp_result(el);
}
/**
 * @summary Encodes a(n) ReplaceAvlRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplaceAvlRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_ReplaceAvlRsp_result(
    value: ReplaceAvlRsp_result,
    elGetter: $.ASN1Encoder<ReplaceAvlRsp_result>
) {
    if (!_cached_encoder_for_ReplaceAvlRsp_result) {
        _cached_encoder_for_ReplaceAvlRsp_result = $._encode_choice<
            ReplaceAvlRsp_result
        >(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_RepAvlOK,
                    $.BER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_RepAvlErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ReplaceAvlRsp_result(value, elGetter);
}

/**
 * @summary ReplaceAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplaceAvlRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   result       CHOICE {
 *     success [0]  RepAvlOK,
 *     failure [1]  RepAvlErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class ReplaceAvlRsp {
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
        readonly result: ReplaceAvlRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReplaceAvlRsp
     * @description
     *
     * This takes an `object` and converts it to a `ReplaceAvlRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReplaceAvlRsp`.
     * @returns {ReplaceAvlRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ReplaceAvlRsp]: ReplaceAvlRsp[_K] }>
    ): ReplaceAvlRsp {
        return new ReplaceAvlRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ReplaceAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReplaceAvlRsp: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of ReplaceAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReplaceAvlRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ReplaceAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReplaceAvlRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_ReplaceAvlRsp: $.ASN1Decoder<
    ReplaceAvlRsp
> | null = null;
let _cached_encoder_for_ReplaceAvlRsp: $.ASN1Encoder<
    ReplaceAvlRsp
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ReplaceAvlRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplaceAvlRsp} The decoded data structure.
 */
export function _decode_ReplaceAvlRsp(el: _Element) {
    if (!_cached_decoder_for_ReplaceAvlRsp) {
        _cached_decoder_for_ReplaceAvlRsp = function (
            el: _Element
        ): ReplaceAvlRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ReplaceAvlRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: ReplaceAvlRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_ReplaceAvlRsp_result(sequence[1]);
            return new ReplaceAvlRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_ReplaceAvlRsp(el);
}
/**
 * @summary Encodes a(n) ReplaceAvlRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplaceAvlRsp, encoded as an ASN.1 Element.
 */
export function _encode_ReplaceAvlRsp(
    value: ReplaceAvlRsp,
    elGetter: $.ASN1Encoder<ReplaceAvlRsp>
) {
    if (!_cached_encoder_for_ReplaceAvlRsp) {
        _cached_encoder_for_ReplaceAvlRsp = function (
            value: ReplaceAvlRsp,
            elGetter: $.ASN1Encoder<ReplaceAvlRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_ReplaceAvlRsp_result(
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
    return _cached_encoder_for_ReplaceAvlRsp(value, elGetter);
}

/**
 * @summary DeleteAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteAvlReq ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   avl-Id       AvlSerialNumber OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DeleteAvlReq {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `avl_Id`.
         * @public
         * @readonly
         */
        readonly avl_Id: OPTIONAL<AvlSerialNumber>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DeleteAvlReq
     * @description
     *
     * This takes an `object` and converts it to a `DeleteAvlReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteAvlReq`.
     * @returns {DeleteAvlReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DeleteAvlReq]: DeleteAvlReq[_K] }>
    ): DeleteAvlReq {
        return new DeleteAvlReq(
            _o.invokeID,
            _o.avl_Id,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of DeleteAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeleteAvlReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "avl-Id",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DeleteAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteAvlReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DeleteAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteAvlReq: $.ComponentSpec[] = [];
let _cached_decoder_for_DeleteAvlReq: $.ASN1Decoder<DeleteAvlReq> | null = null;
let _cached_encoder_for_DeleteAvlReq: $.ASN1Encoder<DeleteAvlReq> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteAvlReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteAvlReq} The decoded data structure.
 */
export function _decode_DeleteAvlReq(el: _Element) {
    if (!_cached_decoder_for_DeleteAvlReq) {
        _cached_decoder_for_DeleteAvlReq = function (
            el: _Element
        ): DeleteAvlReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokeID!: InvokeID;
            let avl_Id: OPTIONAL<AvlSerialNumber>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                invokeID: (_el: _Element): void => {
                    invokeID = _decode_InvokeID(_el);
                },
                "avl-Id": (_el: _Element): void => {
                    avl_Id = _decode_AvlSerialNumber(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeleteAvlReq,
                _extension_additions_list_spec_for_DeleteAvlReq,
                _root_component_type_list_2_spec_for_DeleteAvlReq,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DeleteAvlReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ invokeID,
                avl_Id,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DeleteAvlReq(el);
}
/**
 * @summary Encodes a(n) DeleteAvlReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteAvlReq, encoded as an ASN.1 Element.
 */
export function _encode_DeleteAvlReq(
    value: DeleteAvlReq,
    elGetter: $.ASN1Encoder<DeleteAvlReq>
) {
    if (!_cached_encoder_for_DeleteAvlReq) {
        _cached_encoder_for_DeleteAvlReq = function (
            value: DeleteAvlReq,
            elGetter: $.ASN1Encoder<DeleteAvlReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.avl_Id === undefined
                                ? undefined
                                : _encode_AvlSerialNumber(value.avl_Id, $.BER),
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
    return _cached_encoder_for_DeleteAvlReq(value, elGetter);
}

/**
 * @summary DelAvlOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DelAvlOK ::= SEQUENCE {
 *   ok     NULL,
 *   ... }
 * ```
 *
 * @class
 */
export class DelAvlOK {
    constructor(
        /**
         * @summary `ok`.
         * @public
         * @readonly
         */
        readonly ok: NULL,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DelAvlOK
     * @description
     *
     * This takes an `object` and converts it to a `DelAvlOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DelAvlOK`.
     * @returns {DelAvlOK}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DelAvlOK]: DelAvlOK[_K] }>
    ): DelAvlOK {
        return new DelAvlOK(_o.ok, _o._unrecognizedExtensionsList);
    }
}
/**
 * @summary The Leading Root Component Types of DelAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DelAvlOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ok",
        false,
        $.hasTag(_TagClass.universal, 5),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DelAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DelAvlOK: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DelAvlOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DelAvlOK: $.ComponentSpec[] = [];
let _cached_decoder_for_DelAvlOK: $.ASN1Decoder<DelAvlOK> | null = null;
let _cached_encoder_for_DelAvlOK: $.ASN1Encoder<DelAvlOK> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DelAvlOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DelAvlOK} The decoded data structure.
 */
export function _decode_DelAvlOK(el: _Element) {
    if (!_cached_decoder_for_DelAvlOK) {
        _cached_decoder_for_DelAvlOK = function (el: _Element): DelAvlOK {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "DelAvlOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "ok";
            let ok!: NULL;
            ok = $._decodeNull(sequence[0]);
            return new DelAvlOK(ok, sequence.slice(1));
        };
    }
    return _cached_decoder_for_DelAvlOK(el);
}
/**
 * @summary Encodes a(n) DelAvlOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelAvlOK, encoded as an ASN.1 Element.
 */
export function _encode_DelAvlOK(
    value: DelAvlOK,
    elGetter: $.ASN1Encoder<DelAvlOK>
) {
    if (!_cached_encoder_for_DelAvlOK) {
        _cached_encoder_for_DelAvlOK = function (
            value: DelAvlOK,
            elGetter: $.ASN1Encoder<DelAvlOK>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [/* REQUIRED   */ $._encodeNull(value.ok, $.BER)],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DelAvlOK(value, elGetter);
}

/**
 * @summary DelAvlErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DelAvlErr ::= SEQUENCE {
 *   notOK  AVMP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class DelAvlErr {
    constructor(
        /**
         * @summary `notOK`.
         * @public
         * @readonly
         */
        readonly notOK: AVMP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DelAvlErr
     * @description
     *
     * This takes an `object` and converts it to a `DelAvlErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DelAvlErr`.
     * @returns {DelAvlErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DelAvlErr]: DelAvlErr[_K] }>
    ): DelAvlErr {
        return new DelAvlErr(_o.notOK, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `notOK`
     * @public
     * @static
     */

    public static _enum_for_notOK = _enum_for_AVMP_error;
}
/**
 * @summary The Leading Root Component Types of DelAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DelAvlErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notOK",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DelAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DelAvlErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DelAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DelAvlErr: $.ComponentSpec[] = [];
let _cached_decoder_for_DelAvlErr: $.ASN1Decoder<DelAvlErr> | null = null;
let _cached_encoder_for_DelAvlErr: $.ASN1Encoder<DelAvlErr> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DelAvlErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DelAvlErr} The decoded data structure.
 */
export function _decode_DelAvlErr(el: _Element) {
    if (!_cached_decoder_for_DelAvlErr) {
        _cached_decoder_for_DelAvlErr = function (el: _Element): DelAvlErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "DelAvlErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "notOK";
            let notOK!: AVMP_error;
            notOK = _decode_AVMP_error(sequence[0]);
            return new DelAvlErr(notOK, sequence.slice(1));
        };
    }
    return _cached_decoder_for_DelAvlErr(el);
}
/**
 * @summary Encodes a(n) DelAvlErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelAvlErr, encoded as an ASN.1 Element.
 */
export function _encode_DelAvlErr(
    value: DelAvlErr,
    elGetter: $.ASN1Encoder<DelAvlErr>
) {
    if (!_cached_encoder_for_DelAvlErr) {
        _cached_encoder_for_DelAvlErr = function (
            value: DelAvlErr,
            elGetter: $.ASN1Encoder<DelAvlErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.notOK,
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
    return _cached_encoder_for_DelAvlErr(value, elGetter);
}

/**
 * @summary DeleteAvlRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteAvlRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DeleteAvlRsp_result =
    | { success: DelAvlOK } /* CHOICE_ALT_ROOT */
    | { failure: DelAvlErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_DeleteAvlRsp_result: $.ASN1Decoder<
    DeleteAvlRsp_result
> | null = null;
let _cached_encoder_for_DeleteAvlRsp_result: $.ASN1Encoder<
    DeleteAvlRsp_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteAvlRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteAvlRsp_result} The decoded data structure.
 */
export function _decode_DeleteAvlRsp_result(el: _Element) {
    if (!_cached_decoder_for_DeleteAvlRsp_result) {
        _cached_decoder_for_DeleteAvlRsp_result = $._decode_extensible_choice<
            DeleteAvlRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_implicit<DelAvlOK>(() => _decode_DelAvlOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_implicit<DelAvlErr>(() => _decode_DelAvlErr),
            ],
        });
    }
    return _cached_decoder_for_DeleteAvlRsp_result(el);
}
/**
 * @summary Encodes a(n) DeleteAvlRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteAvlRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_DeleteAvlRsp_result(
    value: DeleteAvlRsp_result,
    elGetter: $.ASN1Encoder<DeleteAvlRsp_result>
) {
    if (!_cached_encoder_for_DeleteAvlRsp_result) {
        _cached_encoder_for_DeleteAvlRsp_result = $._encode_choice<
            DeleteAvlRsp_result
        >(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_DelAvlOK,
                    $.BER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_DelAvlErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DeleteAvlRsp_result(value, elGetter);
}

/**
 * @summary DeleteAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteAvlRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   result       CHOICE {
 *     success [0]  DelAvlOK,
 *     failure [1]  DelAvlErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class DeleteAvlRsp {
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
        readonly result: DeleteAvlRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DeleteAvlRsp
     * @description
     *
     * This takes an `object` and converts it to a `DeleteAvlRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteAvlRsp`.
     * @returns {DeleteAvlRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DeleteAvlRsp]: DeleteAvlRsp[_K] }>
    ): DeleteAvlRsp {
        return new DeleteAvlRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of DeleteAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeleteAvlRsp: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of DeleteAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteAvlRsp: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DeleteAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteAvlRsp: $.ComponentSpec[] = [];
let _cached_decoder_for_DeleteAvlRsp: $.ASN1Decoder<DeleteAvlRsp> | null = null;
let _cached_encoder_for_DeleteAvlRsp: $.ASN1Encoder<DeleteAvlRsp> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteAvlRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteAvlRsp} The decoded data structure.
 */
export function _decode_DeleteAvlRsp(el: _Element) {
    if (!_cached_decoder_for_DeleteAvlRsp) {
        _cached_decoder_for_DeleteAvlRsp = function (
            el: _Element
        ): DeleteAvlRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "DeleteAvlRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: DeleteAvlRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_DeleteAvlRsp_result(sequence[1]);
            return new DeleteAvlRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_DeleteAvlRsp(el);
}
/**
 * @summary Encodes a(n) DeleteAvlRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteAvlRsp, encoded as an ASN.1 Element.
 */
export function _encode_DeleteAvlRsp(
    value: DeleteAvlRsp,
    elGetter: $.ASN1Encoder<DeleteAvlRsp>
) {
    if (!_cached_encoder_for_DeleteAvlRsp) {
        _cached_encoder_for_DeleteAvlRsp = function (
            value: DeleteAvlRsp,
            elGetter: $.ASN1Encoder<DeleteAvlRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_DeleteAvlRsp_result(
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
    return _cached_encoder_for_DeleteAvlRsp(value, elGetter);
}

/**
 * @summary AbortAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbortAVL ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   reason       AVMP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class AbortAVL {
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
        readonly reason: AVMP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AbortAVL
     * @description
     *
     * This takes an `object` and converts it to a `AbortAVL`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AbortAVL`.
     * @returns {AbortAVL}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AbortAVL]: AbortAVL[_K] }>
    ): AbortAVL {
        return new AbortAVL(
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

    public static _enum_for_reason = _enum_for_AVMP_error;
}
/**
 * @summary The Leading Root Component Types of AbortAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AbortAVL: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of AbortAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AbortAVL: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AbortAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AbortAVL: $.ComponentSpec[] = [];
let _cached_decoder_for_AbortAVL: $.ASN1Decoder<AbortAVL> | null = null;
let _cached_encoder_for_AbortAVL: $.ASN1Encoder<AbortAVL> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AbortAVL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AbortAVL} The decoded data structure.
 */
export function _decode_AbortAVL(el: _Element) {
    if (!_cached_decoder_for_AbortAVL) {
        _cached_decoder_for_AbortAVL = function (el: _Element): AbortAVL {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AbortAVL contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "reason";
            let invokeID!: InvokeID;
            let reason!: AVMP_error;
            invokeID = _decode_InvokeID(sequence[0]);
            reason = _decode_AVMP_error(sequence[1]);
            return new AbortAVL(invokeID, reason, sequence.slice(2));
        };
    }
    return _cached_decoder_for_AbortAVL(el);
}
/**
 * @summary Encodes a(n) AbortAVL into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbortAVL, encoded as an ASN.1 Element.
 */
export function _encode_AbortAVL(
    value: AbortAVL,
    elGetter: $.ASN1Encoder<AbortAVL>
) {
    if (!_cached_encoder_for_AbortAVL) {
        _cached_encoder_for_AbortAVL = function (
            value: AbortAVL,
            elGetter: $.ASN1Encoder<AbortAVL>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMP_error(
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
    return _cached_encoder_for_AbortAVL(value, elGetter);
}

/**
 * @summary AvlProt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AvlProt  ::=  CHOICE {
 *   initReq       [0]  InitializationRec,
 *   initAcc       [1]  InitializationAcc,
 *   initRej       [2]  InitializationRej,
 *   initAbt       [3]  InitializationAbort,
 *   certReq       [4]  CertReq,
 *   certRsp       [5]  CertRsp,
 *   addAvlReq     [6]  AddAvlReq,
 *   addAvlRsp     [7]  AddAvlRsp,
 *   replaceAvlReq [8]  ReplaceAvlReq,
 *   replaceAvlRsp [9]  ReplaceAvlRsp,
 *   deleteAvlReq  [10] DeleteAvlReq,
 *   deleteAvlRsp  [11] DeleteAvlRsp,
 *   abortAVL      [12] AbortAVL,
 *   ... }
 * ```
 */
export type AvlProt =
    | { initReq: InitializationRec } /* CHOICE_ALT_ROOT */
    | { initAcc: InitializationAcc } /* CHOICE_ALT_ROOT */
    | { initRej: InitializationRej } /* CHOICE_ALT_ROOT */
    | { initAbt: InitializationAbort } /* CHOICE_ALT_ROOT */
    | { certReq: CertReq } /* CHOICE_ALT_ROOT */
    | { certRsp: CertRsp } /* CHOICE_ALT_ROOT */
    | { addAvlReq: AddAvlReq } /* CHOICE_ALT_ROOT */
    | { addAvlRsp: AddAvlRsp } /* CHOICE_ALT_ROOT */
    | { replaceAvlReq: ReplaceAvlReq } /* CHOICE_ALT_ROOT */
    | { replaceAvlRsp: ReplaceAvlRsp } /* CHOICE_ALT_ROOT */
    | { deleteAvlReq: DeleteAvlReq } /* CHOICE_ALT_ROOT */
    | { deleteAvlRsp: DeleteAvlRsp } /* CHOICE_ALT_ROOT */
    | { abortAVL: AbortAVL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AvlProt: $.ASN1Decoder<AvlProt> | null = null;
let _cached_encoder_for_AvlProt: $.ASN1Encoder<AvlProt> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AvlProt
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AvlProt} The decoded data structure.
 */
export function _decode_AvlProt(el: _Element) {
    if (!_cached_decoder_for_AvlProt) {
        _cached_decoder_for_AvlProt = $._decode_extensible_choice<AvlProt>({
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
                "certReq",
                $._decode_implicit<CertReq>(() => _decode_CertReq),
            ],
            "CONTEXT 5": [
                "certRsp",
                $._decode_implicit<CertRsp>(() => _decode_CertRsp),
            ],
            "CONTEXT 6": [
                "addAvlReq",
                $._decode_implicit<AddAvlReq>(() => _decode_AddAvlReq),
            ],
            "CONTEXT 7": [
                "addAvlRsp",
                $._decode_implicit<AddAvlRsp>(() => _decode_AddAvlRsp),
            ],
            "CONTEXT 8": [
                "replaceAvlReq",
                $._decode_implicit<ReplaceAvlReq>(() => _decode_ReplaceAvlReq),
            ],
            "CONTEXT 9": [
                "replaceAvlRsp",
                $._decode_implicit<ReplaceAvlRsp>(() => _decode_ReplaceAvlRsp),
            ],
            "CONTEXT 10": [
                "deleteAvlReq",
                $._decode_implicit<DeleteAvlReq>(() => _decode_DeleteAvlReq),
            ],
            "CONTEXT 11": [
                "deleteAvlRsp",
                $._decode_implicit<DeleteAvlRsp>(() => _decode_DeleteAvlRsp),
            ],
            "CONTEXT 12": [
                "abortAVL",
                $._decode_implicit<AbortAVL>(() => _decode_AbortAVL),
            ],
        });
    }
    return _cached_decoder_for_AvlProt(el);
}
/**
 * @summary Encodes a(n) AvlProt into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvlProt, encoded as an ASN.1 Element.
 */
export function _encode_AvlProt(
    value: AvlProt,
    elGetter: $.ASN1Encoder<AvlProt>
) {
    if (!_cached_encoder_for_AvlProt) {
        _cached_encoder_for_AvlProt = $._encode_choice<AvlProt>(
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
                certReq: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_CertReq,
                    $.BER
                ),
                certRsp: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_CertRsp,
                    $.BER
                ),
                addAvlReq: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_AddAvlReq,
                    $.BER
                ),
                addAvlRsp: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => _encode_AddAvlRsp,
                    $.BER
                ),
                replaceAvlReq: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () => _encode_ReplaceAvlReq,
                    $.BER
                ),
                replaceAvlRsp: $._encode_implicit(
                    _TagClass.context,
                    9,
                    () => _encode_ReplaceAvlRsp,
                    $.BER
                ),
                deleteAvlReq: $._encode_implicit(
                    _TagClass.context,
                    10,
                    () => _encode_DeleteAvlReq,
                    $.BER
                ),
                deleteAvlRsp: $._encode_implicit(
                    _TagClass.context,
                    11,
                    () => _encode_DeleteAvlRsp,
                    $.BER
                ),
                abortAVL: $._encode_implicit(
                    _TagClass.context,
                    12,
                    () => _encode_AbortAVL,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AvlProt(value, elGetter);
}

/* END_MODULE AVL-management */
/* eslint-enable */
