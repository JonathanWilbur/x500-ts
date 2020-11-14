/**
 * @module GenAlgo
 * @summary The ASN.1 module `GenAlgo`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.genAlgo.9
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
    INTEGER,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ALGORITHM, id_algo } from "./PKI-Stub";
export { ALGORITHM, id_algo } from "./PKI-Stub";

/**
 * @summary id_algo_mca
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-mca  OBJECT IDENTIFIER ::= {id-algo 1}
 * ```
 *
 * @constant
 */
export const id_algo_mca: OBJECT_IDENTIFIER = new _OID([1], id_algo);

/**
 * @summary id_algo_ska
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-ska  OBJECT IDENTIFIER ::= {id-algo 2}
 * ```
 *
 * @constant
 */
export const id_algo_ska: OBJECT_IDENTIFIER = new _OID([2], id_algo);

/**
 * @summary id_algo_aead
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-aead OBJECT IDENTIFIER ::= {id-algo 3}
 * ```
 *
 * @constant
 */
export const id_algo_aead: OBJECT_IDENTIFIER = new _OID([3], id_algo);

/**
 * @summary id_algo_pka
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-pka  OBJECT IDENTIFIER ::= {id-algo 4}
 * ```
 *
 * @constant
 */
export const id_algo_pka: OBJECT_IDENTIFIER = new _OID([4], id_algo);

/**
 * @summary id_algo_ha
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-ha   OBJECT IDENTIFIER ::= {id-algo 5}
 * ```
 *
 * @constant
 */
export const id_algo_ha: OBJECT_IDENTIFIER = new _OID([5], id_algo);

/**
 * @summary id_algo_dsa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-dsa  OBJECT IDENTIFIER ::= {id-algo 6}
 * ```
 *
 * @constant
 */
export const id_algo_dsa: OBJECT_IDENTIFIER = new _OID([6], id_algo);

/**
 * @summary Group14
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Group14  ::=  INTEGER (14)
 * ```
 */
export type Group14 = INTEGER;
let _cached_decoder_for_Group14: $.ASN1Decoder<Group14> | null = null;
let _cached_encoder_for_Group14: $.ASN1Encoder<Group14> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Group14
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Group14} The decoded data structure.
 */
export function _decode_Group14(el: _Element) {
    if (!_cached_decoder_for_Group14) {
        _cached_decoder_for_Group14 = $._decodeInteger;
    }
    return _cached_decoder_for_Group14(el);
}
/**
 * @summary Encodes a(n) Group14 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Group14, encoded as an ASN.1 Element.
 */
export function _encode_Group14(
    value: Group14,
    elGetter: $.ASN1Encoder<Group14>
) {
    if (!_cached_encoder_for_Group14) {
        _cached_encoder_for_Group14 = $._encodeInteger;
    }
    return _cached_encoder_for_Group14(value, elGetter);
}

/**
 * @summary Payload14
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Payload14 ::= SEQUENCE {
 *   dhPublicKey OCTET STRING (SIZE (256)),
 *   nonce       OCTET STRING (SIZE (32)),
 *   ... }
 * ```
 *
 * @class
 */
export class Payload14 {
    constructor(
        /**
         * @summary `dhPublicKey`.
         * @public
         * @readonly
         */
        readonly dhPublicKey: OCTET_STRING,
        /**
         * @summary `nonce`.
         * @public
         * @readonly
         */
        readonly nonce: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Payload14
     * @description
     *
     * This takes an `object` and converts it to a `Payload14`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Payload14`.
     * @returns {Payload14}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Payload14]: Payload14[_K] }>
    ): Payload14 {
        return new Payload14(
            _o.dhPublicKey,
            _o.nonce,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of Payload14
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Payload14: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "dhPublicKey",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nonce",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Payload14
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Payload14: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Payload14
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Payload14: $.ComponentSpec[] = [];
let _cached_decoder_for_Payload14: $.ASN1Decoder<Payload14> | null = null;
let _cached_encoder_for_Payload14: $.ASN1Encoder<Payload14> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Payload14
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Payload14} The decoded data structure.
 */
export function _decode_Payload14(el: _Element) {
    if (!_cached_decoder_for_Payload14) {
        _cached_decoder_for_Payload14 = function (el: _Element): Payload14 {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "Payload14 contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "dhPublicKey";
            sequence[1].name = "nonce";
            let dhPublicKey!: OCTET_STRING;
            let nonce!: OCTET_STRING;
            dhPublicKey = $._decodeOctetString(sequence[0]);
            nonce = $._decodeOctetString(sequence[1]);
            return new Payload14(dhPublicKey, nonce, sequence.slice(2));
        };
    }
    return _cached_decoder_for_Payload14(el);
}
/**
 * @summary Encodes a(n) Payload14 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Payload14, encoded as an ASN.1 Element.
 */
export function _encode_Payload14(
    value: Payload14,
    elGetter: $.ASN1Encoder<Payload14>
) {
    if (!_cached_encoder_for_Payload14) {
        _cached_encoder_for_Payload14 = function (
            value: Payload14,
            elGetter: $.ASN1Encoder<Payload14>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeOctetString(
                                value.dhPublicKey,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeOctetString(
                                value.nonce,
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
    return _cached_encoder_for_Payload14(value, elGetter);
}

/**
 * @summary id_algo_kea
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-kea  OBJECT IDENTIFIER ::= {id-algo 7}
 * ```
 *
 * @constant
 */
export const id_algo_kea: OBJECT_IDENTIFIER = new _OID([7], id_algo);

/**
 * @summary id_algo_dhModpGr14Hkdf256Algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-dhModpGr14Hkdf256Algo       OBJECT IDENTIFIER ::= {id-algo-kea 1}
 * ```
 *
 * @constant
 */
export const id_algo_dhModpGr14Hkdf256Algo: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_algo_kea
);

/**
 * @summary dhModpGr14Hkdf256Algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhModpGr14Hkdf256Algo ALGORITHM ::= {
 *   PARMS         Group14
 *   DYN-PARMS     Payload14
 *   IDENTIFIED BY id-algo-dhModpGr14Hkdf256Algo }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const dhModpGr14Hkdf256Algo: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_Group14,
        "&DynParms": _decode_Payload14,
    },
    encoderFor: {
        "&Type": _encode_Group14,
        "&DynParms": _encode_Payload14,
    },
    "&id": id_algo_dhModpGr14Hkdf256Algo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary Group23
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Group23  ::=  INTEGER (23)
 * ```
 */
export type Group23 = INTEGER;
let _cached_decoder_for_Group23: $.ASN1Decoder<Group23> | null = null;
let _cached_encoder_for_Group23: $.ASN1Encoder<Group23> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Group23
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Group23} The decoded data structure.
 */
export function _decode_Group23(el: _Element) {
    if (!_cached_decoder_for_Group23) {
        _cached_decoder_for_Group23 = $._decodeInteger;
    }
    return _cached_decoder_for_Group23(el);
}
/**
 * @summary Encodes a(n) Group23 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Group23, encoded as an ASN.1 Element.
 */
export function _encode_Group23(
    value: Group23,
    elGetter: $.ASN1Encoder<Group23>
) {
    if (!_cached_encoder_for_Group23) {
        _cached_encoder_for_Group23 = $._encodeInteger;
    }
    return _cached_encoder_for_Group23(value, elGetter);
}

/**
 * @summary Payload23
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Payload23 ::= SEQUENCE {
 *   dhPublicKey OCTET STRING (SIZE (512)),
 *   nonce       OCTET STRING (SIZE (32)),
 *   ... }
 * ```
 *
 * @class
 */
export class Payload23 {
    constructor(
        /**
         * @summary `dhPublicKey`.
         * @public
         * @readonly
         */
        readonly dhPublicKey: OCTET_STRING,
        /**
         * @summary `nonce`.
         * @public
         * @readonly
         */
        readonly nonce: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Payload23
     * @description
     *
     * This takes an `object` and converts it to a `Payload23`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Payload23`.
     * @returns {Payload23}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Payload23]: Payload23[_K] }>
    ): Payload23 {
        return new Payload23(
            _o.dhPublicKey,
            _o.nonce,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of Payload23
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Payload23: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "dhPublicKey",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nonce",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Payload23
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Payload23: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Payload23
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Payload23: $.ComponentSpec[] = [];
let _cached_decoder_for_Payload23: $.ASN1Decoder<Payload23> | null = null;
let _cached_encoder_for_Payload23: $.ASN1Encoder<Payload23> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Payload23
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Payload23} The decoded data structure.
 */
export function _decode_Payload23(el: _Element) {
    if (!_cached_decoder_for_Payload23) {
        _cached_decoder_for_Payload23 = function (el: _Element): Payload23 {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "Payload23 contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "dhPublicKey";
            sequence[1].name = "nonce";
            let dhPublicKey!: OCTET_STRING;
            let nonce!: OCTET_STRING;
            dhPublicKey = $._decodeOctetString(sequence[0]);
            nonce = $._decodeOctetString(sequence[1]);
            return new Payload23(dhPublicKey, nonce, sequence.slice(2));
        };
    }
    return _cached_decoder_for_Payload23(el);
}
/**
 * @summary Encodes a(n) Payload23 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Payload23, encoded as an ASN.1 Element.
 */
export function _encode_Payload23(
    value: Payload23,
    elGetter: $.ASN1Encoder<Payload23>
) {
    if (!_cached_encoder_for_Payload23) {
        _cached_encoder_for_Payload23 = function (
            value: Payload23,
            elGetter: $.ASN1Encoder<Payload23>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeOctetString(
                                value.dhPublicKey,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeOctetString(
                                value.nonce,
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
    return _cached_encoder_for_Payload23(value, elGetter);
}

/**
 * @summary id_algo_dhModpGr23Hkdf256Algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-dhModpGr23Hkdf256Algo       OBJECT IDENTIFIER ::= {id-algo-kea 10}
 * ```
 *
 * @constant
 */
export const id_algo_dhModpGr23Hkdf256Algo: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_algo_kea
);

/**
 * @summary dhModpGr23Hkdf256Algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhModpGr23Hkdf256Algo ALGORITHM ::= {
 *   PARMS         Group23
 *   DYN-PARMS     Payload23
 *   IDENTIFIED BY id-algo-dhModpGr23Hkdf256Algo }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const dhModpGr23Hkdf256Algo: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_Group23,
        "&DynParms": _decode_Payload23,
    },
    encoderFor: {
        "&Type": _encode_Group23,
        "&DynParms": _encode_Payload23,
    },
    "&id": id_algo_dhModpGr23Hkdf256Algo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary Group28
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Group28  ::=  INTEGER (28)
 * ```
 */
export type Group28 = INTEGER;
let _cached_decoder_for_Group28: $.ASN1Decoder<Group28> | null = null;
let _cached_encoder_for_Group28: $.ASN1Encoder<Group28> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Group28
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Group28} The decoded data structure.
 */
export function _decode_Group28(el: _Element) {
    if (!_cached_decoder_for_Group28) {
        _cached_decoder_for_Group28 = $._decodeInteger;
    }
    return _cached_decoder_for_Group28(el);
}
/**
 * @summary Encodes a(n) Group28 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Group28, encoded as an ASN.1 Element.
 */
export function _encode_Group28(
    value: Group28,
    elGetter: $.ASN1Encoder<Group28>
) {
    if (!_cached_encoder_for_Group28) {
        _cached_encoder_for_Group28 = $._encodeInteger;
    }
    return _cached_encoder_for_Group28(value, elGetter);
}

/**
 * @summary Payload28
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Payload28 ::= SEQUENCE {
 *   dhPublicKey OCTET STRING (SIZE (512)),
 *   nonce       OCTET STRING (SIZE (32)),
 *   ... }
 * ```
 *
 * @class
 */
export class Payload28 {
    constructor(
        /**
         * @summary `dhPublicKey`.
         * @public
         * @readonly
         */
        readonly dhPublicKey: OCTET_STRING,
        /**
         * @summary `nonce`.
         * @public
         * @readonly
         */
        readonly nonce: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Payload28
     * @description
     *
     * This takes an `object` and converts it to a `Payload28`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Payload28`.
     * @returns {Payload28}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Payload28]: Payload28[_K] }>
    ): Payload28 {
        return new Payload28(
            _o.dhPublicKey,
            _o.nonce,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of Payload28
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Payload28: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "dhPublicKey",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nonce",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Payload28
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Payload28: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Payload28
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Payload28: $.ComponentSpec[] = [];
let _cached_decoder_for_Payload28: $.ASN1Decoder<Payload28> | null = null;
let _cached_encoder_for_Payload28: $.ASN1Encoder<Payload28> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Payload28
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Payload28} The decoded data structure.
 */
export function _decode_Payload28(el: _Element) {
    if (!_cached_decoder_for_Payload28) {
        _cached_decoder_for_Payload28 = function (el: _Element): Payload28 {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "Payload28 contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "dhPublicKey";
            sequence[1].name = "nonce";
            let dhPublicKey!: OCTET_STRING;
            let nonce!: OCTET_STRING;
            dhPublicKey = $._decodeOctetString(sequence[0]);
            nonce = $._decodeOctetString(sequence[1]);
            return new Payload28(dhPublicKey, nonce, sequence.slice(2));
        };
    }
    return _cached_decoder_for_Payload28(el);
}
/**
 * @summary Encodes a(n) Payload28 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Payload28, encoded as an ASN.1 Element.
 */
export function _encode_Payload28(
    value: Payload28,
    elGetter: $.ASN1Encoder<Payload28>
) {
    if (!_cached_encoder_for_Payload28) {
        _cached_encoder_for_Payload28 = function (
            value: Payload28,
            elGetter: $.ASN1Encoder<Payload28>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeOctetString(
                                value.dhPublicKey,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeOctetString(
                                value.nonce,
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
    return _cached_encoder_for_Payload28(value, elGetter);
}

/**
 * @summary id_algo_dhModpGr28Hkdf256Algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-dhModpGr28Hkdf256Algo       OBJECT IDENTIFIER ::= {id-algo-kea 15}
 * ```
 *
 * @constant
 */
export const id_algo_dhModpGr28Hkdf256Algo: OBJECT_IDENTIFIER = new _OID(
    [15],
    id_algo_kea
);

/**
 * @summary dhModpGr28Hkdf256Algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhModpGr28Hkdf256Algo ALGORITHM ::= {
 *   PARMS         Group28
 *   DYN-PARMS     Payload28
 *   IDENTIFIED BY id-algo-dhModpGr28Hkdf256Algo }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const dhModpGr28Hkdf256Algo: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_Group28,
        "&DynParms": _decode_Payload28,
    },
    encoderFor: {
        "&Type": _encode_Group28,
        "&DynParms": _encode_Payload28,
    },
    "&id": id_algo_dhModpGr28Hkdf256Algo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_algo_dhModpGr15Hkdf384Algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-dhModpGr15Hkdf384Algo       OBJECT IDENTIFIER ::= {id-algo-kea 2}
 * ```
 *
 * @constant
 */
export const id_algo_dhModpGr15Hkdf384Algo: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_algo_kea
);

/**
 * @summary id_algo_dhModpGr16Hkdf512Algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-dhModpGr16Hkdf512Algo       OBJECT IDENTIFIER ::= {id-algo-kea 3}
 * ```
 *
 * @constant
 */
export const id_algo_dhModpGr16Hkdf512Algo: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_algo_kea
);

/**
 * @summary id_algo_dhModpGr17Hkdf768Algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-dhModpGr17Hkdf768Algo       OBJECT IDENTIFIER ::= {id-algo-kea 4}
 * ```
 *
 * @constant
 */
export const id_algo_dhModpGr17Hkdf768Algo: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_algo_kea
);

/**
 * @summary id_algo_dhModpGr18Hkdf1024Algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-dhModpGr18Hkdf1024Algo      OBJECT IDENTIFIER ::= {id-algo-kea 5}
 * ```
 *
 * @constant
 */
export const id_algo_dhModpGr18Hkdf1024Algo: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_algo_kea
);

/* END_MODULE GenAlgo */
/* eslint-enable */
