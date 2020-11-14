/**
 * @module CryptoTools
 * @summary The ASN.1 module `CryptoTools`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.cryptoTools.9
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
    BIT_STRING,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { id_algo_mca } from "./GenAlgo";
import {
    AlgoInvoke,
    ALGORITHM,
    AlgorithmIdentifier,
    AlgorithmWithInvoke,
    _decode_AlgoInvoke,
    _decode_AlgorithmIdentifier,
    _decode_AlgorithmWithInvoke,
    _encode_AlgoInvoke,
    _encode_AlgorithmIdentifier,
    _encode_AlgorithmWithInvoke,
} from "./PKI-Stub";
export { id_algo_mca } from "./GenAlgo";
export {
    AlgoInvoke,
    ALGORITHM,
    AlgorithmIdentifier,
    AlgorithmWithInvoke,
    _decode_AlgoInvoke,
    _decode_AlgorithmIdentifier,
    _decode_AlgorithmWithInvoke,
    _encode_AlgoInvoke,
    _encode_AlgorithmIdentifier,
    _encode_AlgorithmWithInvoke,
} from "./PKI-Stub";

/**
 * @summary SupportedSignatureAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedSignatureAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedSignatureAlgorithms: ALGORITHM[] = [];

export type MultipleSymmetricKeyAlgo<> = AlgorithmIdentifier[]; // SequenceOfType
let _cached_decoder_for_MultipleSymmetricKeyAlgo: $.ASN1Decoder<
    MultipleSymmetricKeyAlgo
> | null = null;
let _cached_encoder_for_MultipleSymmetricKeyAlgo: $.ASN1Encoder<
    MultipleSymmetricKeyAlgo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MultipleSymmetricKeyAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleSymmetricKeyAlgo} The decoded data structure.
 */
export function _decode_MultipleSymmetricKeyAlgo(el: _Element) {
    if (!_cached_decoder_for_MultipleSymmetricKeyAlgo) {
        _cached_decoder_for_MultipleSymmetricKeyAlgo = $._decodeSequenceOf<
            AlgorithmIdentifier
        >(() => _decode_AlgorithmIdentifier);
    }
    return _cached_decoder_for_MultipleSymmetricKeyAlgo(el);
}
/**
 * @summary Encodes a(n) MultipleSymmetricKeyAlgo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleSymmetricKeyAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultipleSymmetricKeyAlgo(
    value: MultipleSymmetricKeyAlgo,
    elGetter: $.ASN1Encoder<MultipleSymmetricKeyAlgo>
) {
    if (!_cached_encoder_for_MultipleSymmetricKeyAlgo) {
        _cached_encoder_for_MultipleSymmetricKeyAlgo = $._encodeSequenceOf<
            AlgorithmIdentifier
        >(() => _encode_AlgorithmIdentifier, $.BER);
    }
    return _cached_encoder_for_MultipleSymmetricKeyAlgo(value, elGetter);
}

/**
 * @summary id_algo_multipleSymmetricKeyAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-multipleSymmetricKeyAlgo    OBJECT IDENTIFIER ::= {id-algo-mca 2}
 * ```
 *
 * @constant
 */
export const id_algo_multipleSymmetricKeyAlgo: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_algo_mca
);

/**
 * @summary multipleSymmetricKeyAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleSymmetricKeyAlgo ALGORITHM ::= {
 *   PARMS         MultipleSymmetricKeyAlgo
 *   IDENTIFIED BY id-algo-multipleSymmetricKeyAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const multipleSymmetricKeyAlgo: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultipleSymmetricKeyAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultipleSymmetricKeyAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multipleSymmetricKeyAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary SupportedSymmetricKeyAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedSymmetricKeyAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedSymmetricKeyAlgorithms: ALGORITHM[] = [];

export type MultiplePublicKeyAlgo<> = AlgorithmIdentifier[]; // SequenceOfType
let _cached_decoder_for_MultiplePublicKeyAlgo: $.ASN1Decoder<
    MultiplePublicKeyAlgo
> | null = null;
let _cached_encoder_for_MultiplePublicKeyAlgo: $.ASN1Encoder<
    MultiplePublicKeyAlgo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MultiplePublicKeyAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultiplePublicKeyAlgo} The decoded data structure.
 */
export function _decode_MultiplePublicKeyAlgo(el: _Element) {
    if (!_cached_decoder_for_MultiplePublicKeyAlgo) {
        _cached_decoder_for_MultiplePublicKeyAlgo = $._decodeSequenceOf<
            AlgorithmIdentifier
        >(() => _decode_AlgorithmIdentifier);
    }
    return _cached_decoder_for_MultiplePublicKeyAlgo(el);
}
/**
 * @summary Encodes a(n) MultiplePublicKeyAlgo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultiplePublicKeyAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultiplePublicKeyAlgo(
    value: MultiplePublicKeyAlgo,
    elGetter: $.ASN1Encoder<MultiplePublicKeyAlgo>
) {
    if (!_cached_encoder_for_MultiplePublicKeyAlgo) {
        _cached_encoder_for_MultiplePublicKeyAlgo = $._encodeSequenceOf<
            AlgorithmIdentifier
        >(() => _encode_AlgorithmIdentifier, $.BER);
    }
    return _cached_encoder_for_MultiplePublicKeyAlgo(value, elGetter);
}

/**
 * @summary id_algo_multiplePublicKeyAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-multiplePublicKeyAlgo       OBJECT IDENTIFIER ::= {id-algo-mca 3}
 * ```
 *
 * @constant
 */
export const id_algo_multiplePublicKeyAlgo: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_algo_mca
);

/**
 * @summary multiplePublicKeyAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multiplePublicKeyAlgo ALGORITHM ::= {
 *   PARMS         MultiplePublicKeyAlgo
 *   IDENTIFIED BY id-algo-multiplePublicKeyAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const multiplePublicKeyAlgo: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultiplePublicKeyAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultiplePublicKeyAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multiplePublicKeyAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary SupportedPublicKeyAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedPublicKeyAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedPublicKeyAlgorithms: ALGORITHM[] = [];

export type MultipleHashAlgo<> = AlgorithmIdentifier[]; // SequenceOfType
let _cached_decoder_for_MultipleHashAlgo: $.ASN1Decoder<
    MultipleHashAlgo
> | null = null;
let _cached_encoder_for_MultipleHashAlgo: $.ASN1Encoder<
    MultipleHashAlgo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MultipleHashAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleHashAlgo} The decoded data structure.
 */
export function _decode_MultipleHashAlgo(el: _Element) {
    if (!_cached_decoder_for_MultipleHashAlgo) {
        _cached_decoder_for_MultipleHashAlgo = $._decodeSequenceOf<
            AlgorithmIdentifier
        >(() => _decode_AlgorithmIdentifier);
    }
    return _cached_decoder_for_MultipleHashAlgo(el);
}
/**
 * @summary Encodes a(n) MultipleHashAlgo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleHashAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultipleHashAlgo(
    value: MultipleHashAlgo,
    elGetter: $.ASN1Encoder<MultipleHashAlgo>
) {
    if (!_cached_encoder_for_MultipleHashAlgo) {
        _cached_encoder_for_MultipleHashAlgo = $._encodeSequenceOf<
            AlgorithmIdentifier
        >(() => _encode_AlgorithmIdentifier, $.BER);
    }
    return _cached_encoder_for_MultipleHashAlgo(value, elGetter);
}

/**
 * @summary id_algo_multipleHashAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-multipleHashAlgo            OBJECT IDENTIFIER ::= {id-algo-mca 4}
 * ```
 *
 * @constant
 */
export const id_algo_multipleHashAlgo: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_algo_mca
);

/**
 * @summary multipleHashAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleHashAlgo ALGORITHM ::= {
 *   PARMS         MultipleHashAlgo
 *   IDENTIFIED BY id-algo-multipleHashAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const multipleHashAlgo: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultipleHashAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultipleHashAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multipleHashAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary SupportedHashAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedHashAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedHashAlgorithms: ALGORITHM[] = [];

export type MultipleAuthenEncryptAlgo<> = AlgorithmIdentifier[]; // SequenceOfType
let _cached_decoder_for_MultipleAuthenEncryptAlgo: $.ASN1Decoder<
    MultipleAuthenEncryptAlgo
> | null = null;
let _cached_encoder_for_MultipleAuthenEncryptAlgo: $.ASN1Encoder<
    MultipleAuthenEncryptAlgo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MultipleAuthenEncryptAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleAuthenEncryptAlgo} The decoded data structure.
 */
export function _decode_MultipleAuthenEncryptAlgo(el: _Element) {
    if (!_cached_decoder_for_MultipleAuthenEncryptAlgo) {
        _cached_decoder_for_MultipleAuthenEncryptAlgo = $._decodeSequenceOf<
            AlgorithmIdentifier
        >(() => _decode_AlgorithmIdentifier);
    }
    return _cached_decoder_for_MultipleAuthenEncryptAlgo(el);
}
/**
 * @summary Encodes a(n) MultipleAuthenEncryptAlgo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleAuthenEncryptAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultipleAuthenEncryptAlgo(
    value: MultipleAuthenEncryptAlgo,
    elGetter: $.ASN1Encoder<MultipleAuthenEncryptAlgo>
) {
    if (!_cached_encoder_for_MultipleAuthenEncryptAlgo) {
        _cached_encoder_for_MultipleAuthenEncryptAlgo = $._encodeSequenceOf<
            AlgorithmIdentifier
        >(() => _encode_AlgorithmIdentifier, $.BER);
    }
    return _cached_encoder_for_MultipleAuthenEncryptAlgo(value, elGetter);
}

/**
 * @summary id_algo_multipleAuthenEncryptAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-multipleAuthenEncryptAlgo   OBJECT IDENTIFIER ::= {id-algo-mca 5}
 * ```
 *
 * @constant
 */
export const id_algo_multipleAuthenEncryptAlgo: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_algo_mca
);

/**
 * @summary multipleAuthenEncryptAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleAuthenEncryptAlgo ALGORITHM ::= {
 *   PARMS         MultipleAuthenEncryptAlgo
 *   IDENTIFIED BY id-algo-multipleAuthenEncryptAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const multipleAuthenEncryptAlgo: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultipleAuthenEncryptAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultipleAuthenEncryptAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multipleAuthenEncryptAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary SupportedAuthenEncryptAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedAuthenEncryptAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedAuthenEncryptAlgorithms: ALGORITHM[] = [];

export type MultipleIcvAlgo<> = AlgorithmIdentifier[]; // SequenceOfType
let _cached_decoder_for_MultipleIcvAlgo: $.ASN1Decoder<
    MultipleIcvAlgo
> | null = null;
let _cached_encoder_for_MultipleIcvAlgo: $.ASN1Encoder<
    MultipleIcvAlgo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MultipleIcvAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleIcvAlgo} The decoded data structure.
 */
export function _decode_MultipleIcvAlgo(el: _Element) {
    if (!_cached_decoder_for_MultipleIcvAlgo) {
        _cached_decoder_for_MultipleIcvAlgo = $._decodeSequenceOf<
            AlgorithmIdentifier
        >(() => _decode_AlgorithmIdentifier);
    }
    return _cached_decoder_for_MultipleIcvAlgo(el);
}
/**
 * @summary Encodes a(n) MultipleIcvAlgo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleIcvAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultipleIcvAlgo(
    value: MultipleIcvAlgo,
    elGetter: $.ASN1Encoder<MultipleIcvAlgo>
) {
    if (!_cached_encoder_for_MultipleIcvAlgo) {
        _cached_encoder_for_MultipleIcvAlgo = $._encodeSequenceOf<
            AlgorithmIdentifier
        >(() => _encode_AlgorithmIdentifier, $.BER);
    }
    return _cached_encoder_for_MultipleIcvAlgo(value, elGetter);
}

/**
 * @summary id_algo_multipleIcvAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-multipleIcvAlgo             OBJECT IDENTIFIER ::= {id-algo-mca 6}
 * ```
 *
 * @constant
 */
export const id_algo_multipleIcvAlgo: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_algo_mca
);

/**
 * @summary multipleIcvAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleIcvAlgo ALGORITHM ::= {
 *   PARMS         MultipleIcvAlgo
 *   IDENTIFIED BY id-algo-multipleIcvAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const multipleIcvAlgo: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultipleIcvAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultipleIcvAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multipleIcvAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary SupportedIcvAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedIcvAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedIcvAlgorithms: ALGORITHM[] = [];

export type MultipleSignaturesAlgo<> = AlgorithmIdentifier[]; // SequenceOfType
let _cached_decoder_for_MultipleSignaturesAlgo: $.ASN1Decoder<
    MultipleSignaturesAlgo
> | null = null;
let _cached_encoder_for_MultipleSignaturesAlgo: $.ASN1Encoder<
    MultipleSignaturesAlgo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MultipleSignaturesAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleSignaturesAlgo} The decoded data structure.
 */
export function _decode_MultipleSignaturesAlgo(el: _Element) {
    if (!_cached_decoder_for_MultipleSignaturesAlgo) {
        _cached_decoder_for_MultipleSignaturesAlgo = $._decodeSequenceOf<
            AlgorithmIdentifier
        >(() => _decode_AlgorithmIdentifier);
    }
    return _cached_decoder_for_MultipleSignaturesAlgo(el);
}
/**
 * @summary Encodes a(n) MultipleSignaturesAlgo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleSignaturesAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultipleSignaturesAlgo(
    value: MultipleSignaturesAlgo,
    elGetter: $.ASN1Encoder<MultipleSignaturesAlgo>
) {
    if (!_cached_encoder_for_MultipleSignaturesAlgo) {
        _cached_encoder_for_MultipleSignaturesAlgo = $._encodeSequenceOf<
            AlgorithmIdentifier
        >(() => _encode_AlgorithmIdentifier, $.BER);
    }
    return _cached_encoder_for_MultipleSignaturesAlgo(value, elGetter);
}

/**
 * @summary id_algo_multipleSignaturesAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-multipleSignaturesAlgo      OBJECT IDENTIFIER ::= {id-algo-mca 1}
 * ```
 *
 * @constant
 */
export const id_algo_multipleSignaturesAlgo: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_algo_mca
);

/**
 * @summary multipleSignaturesAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multipleSignaturesAlgo ALGORITHM ::= {
 *   PARMS         MultipleSignaturesAlgo
 *   IDENTIFIED BY id-algo-multipleSignaturesAlgo }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const multipleSignaturesAlgo: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_MultipleSignaturesAlgo,
        "&DynParms": undefined,
    },
    encoderFor: {
        "&Type": _encode_MultipleSignaturesAlgo,
        "&DynParms": undefined,
    },
    "&id": id_algo_multipleSignaturesAlgo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynParms": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary MULTY_SIGNED_parmeters_sign
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MULTY-SIGNED-parmeters-sign ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class MULTY_SIGNED_parmeters_sign<ToBeSigned> {
    constructor(
        /**
         * @summary `algo`.
         * @public
         * @readonly
         */
        readonly algo: AlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MULTY_SIGNED_parmeters_sign
     * @description
     *
     * This takes an `object` and converts it to a `MULTY_SIGNED_parmeters_sign`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MULTY_SIGNED_parmeters_sign`.
     * @returns {MULTY_SIGNED_parmeters_sign}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof MULTY_SIGNED_parmeters_sign<
                    any
                >]: MULTY_SIGNED_parmeters_sign<any>[_K];
            }
        >
    ): MULTY_SIGNED_parmeters_sign<any> {
        return new MULTY_SIGNED_parmeters_sign(
            _o.algo,
            _o.signature,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of MULTY_SIGNED_parmeters_sign
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MULTY_SIGNED_parmeters_sign: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algo",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of MULTY_SIGNED_parmeters_sign
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MULTY_SIGNED_parmeters_sign: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of MULTY_SIGNED_parmeters_sign
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MULTY_SIGNED_parmeters_sign: $.ComponentSpec[] = [];
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) MULTY_SIGNED_parmeters_sign
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_MULTY_SIGNED_parmeters_sign<ToBeSigned>(
    _decode_ToBeSigned: $.ASN1Decoder<ToBeSigned>
) {
    return function <ToBeSigned>(
        el: _Element
    ): MULTY_SIGNED_parmeters_sign<ToBeSigned> {
        const sequence: _Element[] = el.sequence;
        if (sequence.length < 2) {
            throw new _ConstructionError(
                "MULTY-SIGNED-parmeters-sign contained only " +
                    sequence.length.toString() +
                    " elements."
            );
        }
        sequence[0].name = "algo";
        sequence[1].name = "signature";
        let algo!: AlgorithmIdentifier;
        let signature!: BIT_STRING;
        algo = _decode_AlgorithmIdentifier(sequence[0]);
        signature = $._decodeBitString(sequence[1]);
        return new MULTY_SIGNED_parmeters_sign<ToBeSigned>(
            algo,
            signature,
            sequence.slice(2)
        );
    };
}
/**
 * @summary Returns a function that will encode a(n) MULTY_SIGNED_parmeters_sign into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) MULTY_SIGNED_parmeters_sign as an ASN.1 element.
 */
export function _get_encoder_for_MULTY_SIGNED_parmeters_sign<ToBeSigned>(
    _encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>
) {
    return function (
        value: MULTY_SIGNED_parmeters_sign<ToBeSigned>,
        elGetter: $.ASN1Encoder<MULTY_SIGNED_parmeters_sign<ToBeSigned>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algo,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.signature,
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

/**
 * @summary MULTY_SIGNED
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MULTY-SIGNED{ToBeSigned} ::= SEQUENCE {
 *   toBeSigned  ToBeSigned,
 *   algorithm   ALGORITHM.&id({multipleSignaturesAlgo}),
 *   parmeters     SEQUENCE SIZE (1..MAX) OF
 *     sign          SEQUENCE {
 *       algo          AlgorithmIdentifier{{SupportedSignatureAlgorithms}},
 *       signature     BIT STRING,
 *       ... },
 *   ... }
 * ```
 *
 * @class
 */
export class MULTY_SIGNED<ToBeSigned> {
    constructor(
        /**
         * @summary `toBeSigned`.
         * @public
         * @readonly
         */
        readonly toBeSigned: ToBeSigned,
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OBJECT_IDENTIFIER,
        /**
         * @summary `parmeters`.
         * @public
         * @readonly
         */
        readonly parmeters: MULTY_SIGNED_parmeters_sign<ToBeSigned>[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MULTY_SIGNED
     * @description
     *
     * This takes an `object` and converts it to a `MULTY_SIGNED`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MULTY_SIGNED`.
     * @returns {MULTY_SIGNED}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof MULTY_SIGNED<any>]: MULTY_SIGNED<any>[_K] }>
    ): MULTY_SIGNED<any> {
        return new MULTY_SIGNED(
            _o.toBeSigned,
            _o.algorithm,
            _o.parmeters,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of MULTY_SIGNED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MULTY_SIGNED: $.ComponentSpec[] = [
    new $.ComponentSpec("toBeSigned", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "parmeters",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of MULTY_SIGNED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MULTY_SIGNED: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of MULTY_SIGNED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MULTY_SIGNED: $.ComponentSpec[] = [];
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) MULTY_SIGNED
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_MULTY_SIGNED<ToBeSigned>(
    _decode_ToBeSigned: $.ASN1Decoder<ToBeSigned>
) {
    return function (el: _Element): MULTY_SIGNED<ToBeSigned> {
        const sequence: _Element[] = el.sequence;
        if (sequence.length < 3) {
            throw new _ConstructionError(
                "MULTY-SIGNED contained only " +
                    sequence.length.toString() +
                    " elements."
            );
        }
        sequence[0].name = "toBeSigned";
        sequence[1].name = "algorithm";
        sequence[2].name = "parmeters";
        let toBeSigned!: ToBeSigned;
        let algorithm!: OBJECT_IDENTIFIER;
        let parmeters!: MULTY_SIGNED_parmeters_sign<ToBeSigned>[];
        toBeSigned = _decode_ToBeSigned(sequence[0]);
        algorithm = $._decodeObjectIdentifier(sequence[1]);
        parmeters = $._decodeSequenceOf<
            MULTY_SIGNED_parmeters_sign<ToBeSigned>
        >(() =>
            _get_decoder_for_MULTY_SIGNED_parmeters_sign<ToBeSigned>(
                _decode_ToBeSigned
            )
        )(sequence[2]);
        return new MULTY_SIGNED<ToBeSigned>(
            toBeSigned,
            algorithm,
            parmeters,
            sequence.slice(3)
        );
    };
}
/**
 * @summary Returns a function that will encode a(n) MULTY_SIGNED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) MULTY_SIGNED as an ASN.1 element.
 */
export function _get_encoder_for_MULTY_SIGNED<ToBeSigned>(
    _encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>
) {
    return function (
        value: MULTY_SIGNED<ToBeSigned>,
        elGetter: $.ASN1Encoder<MULTY_SIGNED<ToBeSigned>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_ToBeSigned(
                            value.toBeSigned,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.algorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSequenceOf<
                            MULTY_SIGNED_parmeters_sign<ToBeSigned>
                        >(
                            () =>
                                _get_encoder_for_MULTY_SIGNED_parmeters_sign<
                                    ToBeSigned
                                >(_encode_ToBeSigned),
                            $.BER
                        )(value.parmeters, $.BER),
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

/**
 * @summary Signed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Signed{ToBeSigned} ::= SEQUENCE {
 *   toBeSigned   ToBeSigned,
 *   signature    BIT STRING,
 *   altSignature BIT STRING OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class Signed<ToBeSigned> {
    constructor(
        /**
         * @summary `toBeSigned`.
         * @public
         * @readonly
         */
        readonly toBeSigned: ToBeSigned,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: BIT_STRING,
        /**
         * @summary `altSignature`.
         * @public
         * @readonly
         */
        readonly altSignature: OPTIONAL<BIT_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Signed
     * @description
     *
     * This takes an `object` and converts it to a `Signed`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Signed`.
     * @returns {Signed}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Signed<any>]: Signed<any>[_K] }>
    ): Signed<any> {
        return new Signed(
            _o.toBeSigned,
            _o.signature,
            _o.altSignature,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of Signed
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Signed: $.ComponentSpec[] = [
    new $.ComponentSpec("toBeSigned", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "altSignature",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Signed
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Signed: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Signed
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Signed: $.ComponentSpec[] = [];
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) Signed
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_Signed<ToBeSigned>(
    _decode_ToBeSigned: $.ASN1Decoder<ToBeSigned>
) {
    return function (el: _Element): Signed<ToBeSigned> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let toBeSigned!: ToBeSigned;
        let signature!: BIT_STRING;
        let altSignature: OPTIONAL<BIT_STRING>;
        let _unrecognizedExtensionsList: _Element[] = [];
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: $.DecodingMap = {
            toBeSigned: (_el: _Element): void => {
                toBeSigned = _decode_ToBeSigned(_el);
            },
            signature: (_el: _Element): void => {
                signature = $._decodeBitString(_el);
            },
            altSignature: (_el: _Element): void => {
                altSignature = $._decodeBitString(_el);
            },
        };
        /* END_OF_CALLBACKS_MAP */
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_Signed,
            _extension_additions_list_spec_for_Signed,
            _root_component_type_list_2_spec_for_Signed,
            (ext: _Element): void => {
                _unrecognizedExtensionsList.push(ext);
            }
        );
        return new Signed(
            /* SEQUENCE_CONSTRUCTOR_CALL */ toBeSigned,
            signature,
            altSignature,
            _unrecognizedExtensionsList
        );
    };
}
/**
 * @summary Returns a function that will encode a(n) Signed into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) Signed as an ASN.1 element.
 */
export function _get_encoder_for_Signed<ToBeSigned>(
    _encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>
) {
    return function (
        value: Signed<ToBeSigned>,
        elGetter: $.ASN1Encoder<Signed<ToBeSigned>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_ToBeSigned(
                            value.toBeSigned,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.signature,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.altSignature === undefined
                            ? undefined
                            : $._encodeBitString(value.altSignature, $.BER),
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

/**
 * @summary ICV_Total
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ICV-Total{ToBeProtected} ::= SEQUENCE {
 *   toBeProtected               ToBeProtected,
 *   algorithmIdentifier         AlgorithmWithInvoke{{SupportedIcvAlgorithms}},
 *   icv                         BIT STRING,
 *   altAlgorithmIdentifier  [0] AlgorithmWithInvoke{{SupportedIcvAlgorithms}} OPTIONAL,
 *   altIcv                  [1] BIT STRING OPTIONAL,
 *   ... }
 *    (WITH COMPONENTS {..., altAlgorithmIdentifier PRESENT, altIcv PRESENT } |
 *     WITH COMPONENTS {..., altAlgorithmIdentifier ABSENT,  altIcv ABSENT } )
 * ```
 *
 * @class
 */
export class ICV_Total<ToBeProtected> {
    constructor(
        /**
         * @summary `toBeProtected`.
         * @public
         * @readonly
         */
        readonly toBeProtected: ToBeProtected,
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmWithInvoke,
        /**
         * @summary `icv`.
         * @public
         * @readonly
         */
        readonly icv: BIT_STRING,
        /**
         * @summary `altAlgorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly altAlgorithmIdentifier: OPTIONAL<AlgorithmWithInvoke>,
        /**
         * @summary `altIcv`.
         * @public
         * @readonly
         */
        readonly altIcv: OPTIONAL<BIT_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ICV_Total
     * @description
     *
     * This takes an `object` and converts it to a `ICV_Total`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ICV_Total`.
     * @returns {ICV_Total}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ICV_Total<any>]: ICV_Total<any>[_K] }>
    ): ICV_Total<any> {
        return new ICV_Total(
            _o.toBeProtected,
            _o.algorithmIdentifier,
            _o.icv,
            _o.altAlgorithmIdentifier,
            _o.altIcv,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ICV_Total
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ICV_Total: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "toBeProtected",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "algorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "icv",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "altAlgorithmIdentifier",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "altIcv",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ICV_Total
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ICV_Total: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ICV_Total
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ICV_Total: $.ComponentSpec[] = [];
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ICV_Total
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_ICV_Total<ToBeProtected>(
    _decode_ToBeProtected: $.ASN1Decoder<ToBeProtected>
) {
    return function (el: _Element): ICV_Total<ToBeProtected> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let toBeProtected!: ToBeProtected;
        let algorithmIdentifier!: AlgorithmWithInvoke;
        let icv!: BIT_STRING;
        let altAlgorithmIdentifier: OPTIONAL<AlgorithmWithInvoke>;
        let altIcv: OPTIONAL<BIT_STRING>;
        let _unrecognizedExtensionsList: _Element[] = [];
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: $.DecodingMap = {
            toBeProtected: (_el: _Element): void => {
                toBeProtected = _decode_ToBeProtected(_el);
            },
            algorithmIdentifier: (_el: _Element): void => {
                algorithmIdentifier = _decode_AlgorithmWithInvoke(_el);
            },
            icv: (_el: _Element): void => {
                icv = $._decodeBitString(_el);
            },
            altAlgorithmIdentifier: (_el: _Element): void => {
                altAlgorithmIdentifier = $._decode_implicit<
                    AlgorithmWithInvoke
                >(() => _decode_AlgorithmWithInvoke)(_el);
            },
            altIcv: (_el: _Element): void => {
                altIcv = $._decode_implicit<BIT_STRING>(
                    () => $._decodeBitString
                )(_el);
            },
        };
        /* END_OF_CALLBACKS_MAP */
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_ICV_Total,
            _extension_additions_list_spec_for_ICV_Total,
            _root_component_type_list_2_spec_for_ICV_Total,
            (ext: _Element): void => {
                _unrecognizedExtensionsList.push(ext);
            }
        );
        return new ICV_Total(
            /* SEQUENCE_CONSTRUCTOR_CALL */ toBeProtected,
            algorithmIdentifier,
            icv,
            altAlgorithmIdentifier,
            altIcv,
            _unrecognizedExtensionsList
        );
    };
}
/**
 * @summary Returns a function that will encode a(n) ICV_Total into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ICV_Total as an ASN.1 element.
 */
export function _get_encoder_for_ICV_Total<ToBeProtected>(
    _encode_ToBeProtected: $.ASN1Encoder<ToBeProtected>
) {
    return function (
        value: ICV_Total<ToBeProtected>,
        elGetter: $.ASN1Encoder<ICV_Total<ToBeProtected>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_ToBeProtected(
                            value.toBeProtected,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmWithInvoke(
                            value.algorithmIdentifier,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(value.icv, $.BER),
                        /* IF_ABSENT  */ value.altAlgorithmIdentifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AlgorithmWithInvoke,
                                  $.BER
                              )(value.altAlgorithmIdentifier, $.BER),
                        /* IF_ABSENT  */ value.altIcv === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeBitString,
                                  $.BER
                              )(value.altIcv, $.BER),
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

/**
 * @summary ICV_Invoke
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ICV-Invoke{ToBeProtected} ::= SEQUENCE {
 *   toBeProtected      ToBeProtected,
 *   dynParms       [0] AlgoInvoke{{SupportedIcvAlgorithms}} OPTIONAL,
 *   icv                BIT STRING,
 *   ... }
 * ```
 *
 * @class
 */
export class ICV_Invoke<ToBeProtected> {
    constructor(
        /**
         * @summary `toBeProtected`.
         * @public
         * @readonly
         */
        readonly toBeProtected: ToBeProtected,
        /**
         * @summary `dynParms`.
         * @public
         * @readonly
         */
        readonly dynParms: OPTIONAL<AlgoInvoke>,
        /**
         * @summary `icv`.
         * @public
         * @readonly
         */
        readonly icv: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ICV_Invoke
     * @description
     *
     * This takes an `object` and converts it to a `ICV_Invoke`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ICV_Invoke`.
     * @returns {ICV_Invoke}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ICV_Invoke<any>]: ICV_Invoke<any>[_K] }>
    ): ICV_Invoke<any> {
        return new ICV_Invoke(
            _o.toBeProtected,
            _o.dynParms,
            _o.icv,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ICV_Invoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ICV_Invoke: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "toBeProtected",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "dynParms",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "icv",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ICV_Invoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ICV_Invoke: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ICV_Invoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ICV_Invoke: $.ComponentSpec[] = [];
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ICV_Invoke
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_ICV_Invoke<ToBeProtected>(
    _decode_ToBeProtected: $.ASN1Decoder<ToBeProtected>
) {
    return function (el: _Element): ICV_Invoke<ToBeProtected> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let toBeProtected!: ToBeProtected;
        let dynParms: OPTIONAL<AlgoInvoke>;
        let icv!: BIT_STRING;
        let _unrecognizedExtensionsList: _Element[] = [];
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: $.DecodingMap = {
            toBeProtected: (_el: _Element): void => {
                toBeProtected = _decode_ToBeProtected(_el);
            },
            dynParms: (_el: _Element): void => {
                dynParms = $._decode_implicit<AlgoInvoke>(
                    () => _decode_AlgoInvoke
                )(_el);
            },
            icv: (_el: _Element): void => {
                icv = $._decodeBitString(_el);
            },
        };
        /* END_OF_CALLBACKS_MAP */
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_ICV_Invoke,
            _extension_additions_list_spec_for_ICV_Invoke,
            _root_component_type_list_2_spec_for_ICV_Invoke,
            (ext: _Element): void => {
                _unrecognizedExtensionsList.push(ext);
            }
        );
        return new ICV_Invoke(
            /* SEQUENCE_CONSTRUCTOR_CALL */ toBeProtected,
            dynParms,
            icv,
            _unrecognizedExtensionsList
        );
    };
}
/**
 * @summary Returns a function that will encode a(n) ICV_Invoke into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ICV_Invoke as an ASN.1 element.
 */
export function _get_encoder_for_ICV_Invoke<ToBeProtected>(
    _encode_ToBeProtected: $.ASN1Encoder<ToBeProtected>
) {
    return function (
        value: ICV_Invoke<ToBeProtected>,
        elGetter: $.ASN1Encoder<ICV_Invoke<ToBeProtected>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_ToBeProtected(
                            value.toBeProtected,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.dynParms === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AlgoInvoke,
                                  $.BER
                              )(value.dynParms, $.BER),
                        /* REQUIRED   */ $._encodeBitString(value.icv, $.BER),
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

export type ENCIPHERED<ToBeEnciphered> = OCTET_STRING; // OctetStringType
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ENCIPHERED
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_ENCIPHERED<ToBeEnciphered>(
    _decode_ToBeEnciphered: $.ASN1Decoder<ToBeEnciphered>
) {
    return $._decodeOctetString;
}
/**
 * @summary Returns a function that will encode a(n) ENCIPHERED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ENCIPHERED as an ASN.1 element.
 */
export function _get_encoder_for_ENCIPHERED<ToBeEnciphered>(
    _encode_ToBeEnciphered: $.ASN1Encoder<ToBeEnciphered>
) {
    return $._encodeOctetString;
}

/**
 * @summary AUTHEN_ENCRYPT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AUTHEN-ENCRYPT{ToBeAuth, ToBeEnciphered} ::= SEQUENCE {
 *   aad  [0] ToBeAuth OPTIONAL,
 *   encr [1] ToBeEnciphered,
 *   ... }
 * ```
 *
 * @class
 */
export class AUTHEN_ENCRYPT<ToBeAuth, ToBeEnciphered> {
    constructor(
        /**
         * @summary `aad`.
         * @public
         * @readonly
         */
        readonly aad: OPTIONAL<ToBeAuth>,
        /**
         * @summary `encr`.
         * @public
         * @readonly
         */
        readonly encr: ToBeEnciphered,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AUTHEN_ENCRYPT
     * @description
     *
     * This takes an `object` and converts it to a `AUTHEN_ENCRYPT`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AUTHEN_ENCRYPT`.
     * @returns {AUTHEN_ENCRYPT}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AUTHEN_ENCRYPT<any, any>]: AUTHEN_ENCRYPT<
                    any,
                    any
                >[_K];
            }
        >
    ): AUTHEN_ENCRYPT<any, any> {
        return new AUTHEN_ENCRYPT(
            _o.aad,
            _o.encr,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AUTHEN_ENCRYPT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AUTHEN_ENCRYPT: $.ComponentSpec[] = [
    ,/* FIXME: aad COULD_NOT_RESOLVE_TYPE_DEF */
/* FIXME: encr COULD_NOT_RESOLVE_TYPE_DEF */
];
/**
 * @summary The Trailing Root Component Types of AUTHEN_ENCRYPT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AUTHEN_ENCRYPT: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AUTHEN_ENCRYPT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AUTHEN_ENCRYPT: $.ComponentSpec[] = [];
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) AUTHEN_ENCRYPT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_AUTHEN_ENCRYPT<ToBeAuth, ToBeEnciphered>(
    _decode_ToBeAuth: $.ASN1Decoder<ToBeAuth>,
    _decode_ToBeEnciphered: $.ASN1Decoder<ToBeEnciphered>
) {
    return function (el: _Element): AUTHEN_ENCRYPT<ToBeAuth, ToBeEnciphered> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let aad: OPTIONAL<ToBeAuth>;
        let encr!: ToBeEnciphered;
        let _unrecognizedExtensionsList: _Element[] = [];
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: $.DecodingMap = {
            aad: (_el: _Element): void => {
                aad = $._decode_implicit<ToBeAuth>(() => _decode_ToBeAuth)(_el);
            },
            encr: (_el: _Element): void => {
                encr = $._decode_implicit<ToBeEnciphered>(
                    () => _decode_ToBeEnciphered
                )(_el);
            },
        };
        /* END_OF_CALLBACKS_MAP */
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_AUTHEN_ENCRYPT,
            _extension_additions_list_spec_for_AUTHEN_ENCRYPT,
            _root_component_type_list_2_spec_for_AUTHEN_ENCRYPT,
            (ext: _Element): void => {
                _unrecognizedExtensionsList.push(ext);
            }
        );
        return new AUTHEN_ENCRYPT(
            /* SEQUENCE_CONSTRUCTOR_CALL */ aad,
            encr,
            _unrecognizedExtensionsList
        );
    };
}
/**
 * @summary Returns a function that will encode a(n) AUTHEN_ENCRYPT into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) AUTHEN_ENCRYPT as an ASN.1 element.
 */
export function _get_encoder_for_AUTHEN_ENCRYPT<ToBeAuth, ToBeEnciphered>(
    _encode_ToBeAuth: $.ASN1Encoder<ToBeAuth>,
    _encode_ToBeEnciphered: $.ASN1Encoder<ToBeEnciphered>
) {
    return function (
        value: AUTHEN_ENCRYPT<ToBeAuth, ToBeEnciphered>,
        elGetter: $.ASN1Encoder<AUTHEN_ENCRYPT<ToBeAuth, ToBeEnciphered>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* IF_ABSENT  */ value.aad === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_ToBeAuth,
                                  $.BER
                              )(value.aad, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_ToBeEnciphered,
                            $.BER
                        )(value.encr, $.BER),
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

/* END_MODULE CryptoTools */
/* eslint-enable */
