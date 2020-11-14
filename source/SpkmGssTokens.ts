/**
 * @module SpkmGssTokens
 * @summary The ASN.1 module `SpkmGssTokens`.
 * @description
 *
 * OID: iso.identified-organization.dod.internet.security.mechanisms.spkm.spkmGssTokens
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
    BOOLEAN,
    INTEGER,
    NULL,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    UTCTime,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    Certificate,
    CertificateList,
    CertificatePair,
    Validity,
    _decode_AlgorithmIdentifier,
    _decode_Certificate,
    _decode_CertificateList,
    _decode_CertificatePair,
    _decode_Validity,
    _encode_AlgorithmIdentifier,
    _encode_Certificate,
    _encode_CertificateList,
    _encode_CertificatePair,
    _encode_Validity,
} from "./AuthenticationFramework";
import { Name, _decode_Name, _encode_Name } from "./InformationFramework";
export {
    AlgorithmIdentifier,
    Certificate,
    CertificateList,
    CertificatePair,
    SupportedAlgorithms,
    Validity,
    _decode_AlgorithmIdentifier,
    _decode_Certificate,
    _decode_CertificateList,
    _decode_CertificatePair,
    _decode_Validity,
    _encode_AlgorithmIdentifier,
    _encode_Certificate,
    _encode_CertificateList,
    _encode_CertificatePair,
    _encode_Validity,
} from "./AuthenticationFramework";
export { Name, _decode_Name, _encode_Name } from "./InformationFramework";

export type MechType<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_MechType: $.ASN1Decoder<MechType> | null = null;
let _cached_encoder_for_MechType: $.ASN1Encoder<MechType> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MechType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MechType} The decoded data structure.
 */
export function _decode_MechType(el: _Element) {
    if (!_cached_decoder_for_MechType) {
        _cached_decoder_for_MechType = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_MechType(el);
}
/**
 * @summary Encodes a(n) MechType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MechType, encoded as an ASN.1 Element.
 */
export function _encode_MechType(
    value: MechType,
    elGetter: $.ASN1Encoder<MechType>
) {
    if (!_cached_encoder_for_MechType) {
        _cached_encoder_for_MechType = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_MechType(value, elGetter);
}

/**
 * @summary Random_Integer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Random-Integer  ::=  BIT STRING
 * ```
 */
export type Random_Integer = BIT_STRING;
let _cached_decoder_for_Random_Integer: $.ASN1Decoder<
    Random_Integer
> | null = null;
let _cached_encoder_for_Random_Integer: $.ASN1Encoder<
    Random_Integer
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Random_Integer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Random_Integer} The decoded data structure.
 */
export function _decode_Random_Integer(el: _Element) {
    if (!_cached_decoder_for_Random_Integer) {
        _cached_decoder_for_Random_Integer = $._decodeBitString;
    }
    return _cached_decoder_for_Random_Integer(el);
}
/**
 * @summary Encodes a(n) Random_Integer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Random_Integer, encoded as an ASN.1 Element.
 */
export function _encode_Random_Integer(
    value: Random_Integer,
    elGetter: $.ASN1Encoder<Random_Integer>
) {
    if (!_cached_encoder_for_Random_Integer) {
        _cached_encoder_for_Random_Integer = $._encodeBitString;
    }
    return _cached_encoder_for_Random_Integer(value, elGetter);
}

export type ChannelId<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_ChannelId: $.ASN1Decoder<ChannelId> | null = null;
let _cached_encoder_for_ChannelId: $.ASN1Encoder<ChannelId> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ChannelId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChannelId} The decoded data structure.
 */
export function _decode_ChannelId(el: _Element) {
    if (!_cached_decoder_for_ChannelId) {
        _cached_decoder_for_ChannelId = $._decodeOctetString;
    }
    return _cached_decoder_for_ChannelId(el);
}
/**
 * @summary Encodes a(n) ChannelId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChannelId, encoded as an ASN.1 Element.
 */
export function _encode_ChannelId(
    value: ChannelId,
    elGetter: $.ASN1Encoder<ChannelId>
) {
    if (!_cached_encoder_for_ChannelId) {
        _cached_encoder_for_ChannelId = $._encodeOctetString;
    }
    return _cached_encoder_for_ChannelId(value, elGetter);
}

/**
 * @summary Options
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Options  ::=  BIT STRING {
 *   delegation-state(0), mutual-state(1), replay-det-state(2), sequence-state(3),
 *   conf-avail(4), integ-avail(5), target-certif-data-required(6)}
 * ```
 */
export type Options = BIT_STRING;
/**
 * @summary Options_delegation_state
 * @constant
 */
export const Options_delegation_state: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary Options_mutual_state
 * @constant
 */
export const Options_mutual_state: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary Options_replay_det_state
 * @constant
 */
export const Options_replay_det_state: number = 2; /* LONG_NAMED_BIT */
/**
 * @summary Options_sequence_state
 * @constant
 */
export const Options_sequence_state: number = 3; /* LONG_NAMED_BIT */
/**
 * @summary Options_conf_avail
 * @constant
 */
export const Options_conf_avail: number = 4; /* LONG_NAMED_BIT */
/**
 * @summary Options_integ_avail
 * @constant
 */
export const Options_integ_avail: number = 5; /* LONG_NAMED_BIT */
/**
 * @summary Options_target_certif_data_required
 * @constant
 */
export const Options_target_certif_data_required: number = 6; /* LONG_NAMED_BIT */
let _cached_decoder_for_Options: $.ASN1Decoder<Options> | null = null;
let _cached_encoder_for_Options: $.ASN1Encoder<Options> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Options
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Options} The decoded data structure.
 */
export function _decode_Options(el: _Element) {
    if (!_cached_decoder_for_Options) {
        _cached_decoder_for_Options = $._decodeBitString;
    }
    return _cached_decoder_for_Options(el);
}
/**
 * @summary Encodes a(n) Options into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Options, encoded as an ASN.1 Element.
 */
export function _encode_Options(
    value: Options,
    elGetter: $.ASN1Encoder<Options>
) {
    if (!_cached_encoder_for_Options) {
        _cached_encoder_for_Options = $._encodeBitString;
    }
    return _cached_encoder_for_Options(value, elGetter);
}

/**
 * @summary Conf_Algs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Conf-Algs  ::=  CHOICE {
 *   algs  [0]  SEQUENCE OF AlgorithmIdentifier{{SupportedAlgorithms}},
 *   null  [1]  NULL
 * }
 * ```
 */
export type Conf_Algs =
    | { algs: AlgorithmIdentifier[] } /* CHOICE_ALT_ROOT */
    | { null_: NULL } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_Conf_Algs: $.ASN1Decoder<Conf_Algs> | null = null;
let _cached_encoder_for_Conf_Algs: $.ASN1Encoder<Conf_Algs> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Conf_Algs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Conf_Algs} The decoded data structure.
 */
export function _decode_Conf_Algs(el: _Element) {
    if (!_cached_decoder_for_Conf_Algs) {
        _cached_decoder_for_Conf_Algs = $._decode_inextensible_choice<
            Conf_Algs
        >({
            "CONTEXT 0": [
                "algs",
                $._decode_implicit<AlgorithmIdentifier[]>(() =>
                    $._decodeSequenceOf<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )
                ),
            ],
            "CONTEXT 1": [
                "null_",
                $._decode_implicit<NULL>(() => $._decodeNull),
            ],
        });
    }
    return _cached_decoder_for_Conf_Algs(el);
}
/**
 * @summary Encodes a(n) Conf_Algs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Conf_Algs, encoded as an ASN.1 Element.
 */
export function _encode_Conf_Algs(
    value: Conf_Algs,
    elGetter: $.ASN1Encoder<Conf_Algs>
) {
    if (!_cached_encoder_for_Conf_Algs) {
        _cached_encoder_for_Conf_Algs = $._encode_choice<Conf_Algs>(
            {
                algs: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        $._encodeSequenceOf<AlgorithmIdentifier>(
                            () => _encode_AlgorithmIdentifier,
                            $.BER
                        ),
                    $.BER
                ),
                null_: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeNull,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Conf_Algs(value, elGetter);
}

export type Intg_Algs<> = AlgorithmIdentifier[]; // SequenceOfType
let _cached_decoder_for_Intg_Algs: $.ASN1Decoder<Intg_Algs> | null = null;
let _cached_encoder_for_Intg_Algs: $.ASN1Encoder<Intg_Algs> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Intg_Algs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Intg_Algs} The decoded data structure.
 */
export function _decode_Intg_Algs(el: _Element) {
    if (!_cached_decoder_for_Intg_Algs) {
        _cached_decoder_for_Intg_Algs = $._decodeSequenceOf<
            AlgorithmIdentifier
        >(() => _decode_AlgorithmIdentifier);
    }
    return _cached_decoder_for_Intg_Algs(el);
}
/**
 * @summary Encodes a(n) Intg_Algs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Intg_Algs, encoded as an ASN.1 Element.
 */
export function _encode_Intg_Algs(
    value: Intg_Algs,
    elGetter: $.ASN1Encoder<Intg_Algs>
) {
    if (!_cached_encoder_for_Intg_Algs) {
        _cached_encoder_for_Intg_Algs = $._encodeSequenceOf<
            AlgorithmIdentifier
        >(() => _encode_AlgorithmIdentifier, $.BER);
    }
    return _cached_encoder_for_Intg_Algs(value, elGetter);
}

export type OWF_Algs<> = AlgorithmIdentifier[]; // SequenceOfType
let _cached_decoder_for_OWF_Algs: $.ASN1Decoder<OWF_Algs> | null = null;
let _cached_encoder_for_OWF_Algs: $.ASN1Encoder<OWF_Algs> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OWF_Algs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OWF_Algs} The decoded data structure.
 */
export function _decode_OWF_Algs(el: _Element) {
    if (!_cached_decoder_for_OWF_Algs) {
        _cached_decoder_for_OWF_Algs = $._decodeSequenceOf<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
        );
    }
    return _cached_decoder_for_OWF_Algs(el);
}
/**
 * @summary Encodes a(n) OWF_Algs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OWF_Algs, encoded as an ASN.1 Element.
 */
export function _encode_OWF_Algs(
    value: OWF_Algs,
    elGetter: $.ASN1Encoder<OWF_Algs>
) {
    if (!_cached_encoder_for_OWF_Algs) {
        _cached_encoder_for_OWF_Algs = $._encodeSequenceOf<AlgorithmIdentifier>(
            () => _encode_AlgorithmIdentifier,
            $.BER
        );
    }
    return _cached_encoder_for_OWF_Algs(value, elGetter);
}

/**
 * @summary Context_Data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context-Data ::= SEQUENCE {
 *   channelId   ChannelId OPTIONAL,
 *   seq-number  INTEGER OPTIONAL,
 *   options     Options,
 *   conf-alg    Conf-Algs,
 *   intg-alg    Intg-Algs,
 *   owf-alg     OWF-Algs
 * }
 * ```
 *
 * @class
 */
export class Context_Data {
    constructor(
        /**
         * @summary `channelId`.
         * @public
         * @readonly
         */
        readonly channelId: OPTIONAL<ChannelId>,
        /**
         * @summary `seq_number`.
         * @public
         * @readonly
         */
        readonly seq_number: OPTIONAL<INTEGER>,
        /**
         * @summary `options`.
         * @public
         * @readonly
         */
        readonly options: Options,
        /**
         * @summary `conf_alg`.
         * @public
         * @readonly
         */
        readonly conf_alg: Conf_Algs,
        /**
         * @summary `intg_alg`.
         * @public
         * @readonly
         */
        readonly intg_alg: Intg_Algs,
        /**
         * @summary `owf_alg`.
         * @public
         * @readonly
         */
        readonly owf_alg: OWF_Algs
    ) {}

    /**
     * @summary Restructures an object into a Context_Data
     * @description
     *
     * This takes an `object` and converts it to a `Context_Data`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Context_Data`.
     * @returns {Context_Data}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Context_Data]: Context_Data[_K] }>
    ): Context_Data {
        return new Context_Data(
            _o.channelId,
            _o.seq_number,
            _o.options,
            _o.conf_alg,
            _o.intg_alg,
            _o.owf_alg
        );
    }
}
/**
 * @summary The Leading Root Component Types of Context_Data
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Context_Data: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "channelId",
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "seq-number",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "options",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec("conf-alg", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "intg-alg",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "owf-alg",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Context_Data
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Context_Data: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Context_Data
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Context_Data: $.ComponentSpec[] = [];
let _cached_decoder_for_Context_Data: $.ASN1Decoder<Context_Data> | null = null;
let _cached_encoder_for_Context_Data: $.ASN1Encoder<Context_Data> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Context_Data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Context_Data} The decoded data structure.
 */
export function _decode_Context_Data(el: _Element) {
    if (!_cached_decoder_for_Context_Data) {
        _cached_decoder_for_Context_Data = function (
            el: _Element
        ): Context_Data {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let channelId: OPTIONAL<ChannelId>;
            let seq_number: OPTIONAL<INTEGER>;
            let options!: Options;
            let conf_alg!: Conf_Algs;
            let intg_alg!: Intg_Algs;
            let owf_alg!: OWF_Algs;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                channelId: (_el: _Element): void => {
                    channelId = _decode_ChannelId(_el);
                },
                "seq-number": (_el: _Element): void => {
                    seq_number = $._decodeInteger(_el);
                },
                options: (_el: _Element): void => {
                    options = _decode_Options(_el);
                },
                "conf-alg": (_el: _Element): void => {
                    conf_alg = _decode_Conf_Algs(_el);
                },
                "intg-alg": (_el: _Element): void => {
                    intg_alg = _decode_Intg_Algs(_el);
                },
                "owf-alg": (_el: _Element): void => {
                    owf_alg = _decode_OWF_Algs(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Context_Data,
                _extension_additions_list_spec_for_Context_Data,
                _root_component_type_list_2_spec_for_Context_Data,
                undefined
            );
            return new Context_Data(
                /* SEQUENCE_CONSTRUCTOR_CALL */ channelId,
                seq_number,
                options,
                conf_alg,
                intg_alg,
                owf_alg
            );
        };
    }
    return _cached_decoder_for_Context_Data(el);
}
/**
 * @summary Encodes a(n) Context_Data into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Context_Data, encoded as an ASN.1 Element.
 */
export function _encode_Context_Data(
    value: Context_Data,
    elGetter: $.ASN1Encoder<Context_Data>
) {
    if (!_cached_encoder_for_Context_Data) {
        _cached_encoder_for_Context_Data = function (
            value: Context_Data,
            elGetter: $.ASN1Encoder<Context_Data>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.channelId === undefined
                            ? undefined
                            : _encode_ChannelId(value.channelId, $.BER),
                        /* IF_ABSENT  */ value.seq_number === undefined
                            ? undefined
                            : $._encodeInteger(value.seq_number, $.BER),
                        /* REQUIRED   */ _encode_Options(value.options, $.BER),
                        /* REQUIRED   */ _encode_Conf_Algs(
                            value.conf_alg,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Intg_Algs(
                            value.intg_alg,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_OWF_Algs(value.owf_alg, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Context_Data(value, elGetter);
}

export type Key_Estb_Algs<> = AlgorithmIdentifier[]; // SequenceOfType
let _cached_decoder_for_Key_Estb_Algs: $.ASN1Decoder<
    Key_Estb_Algs
> | null = null;
let _cached_encoder_for_Key_Estb_Algs: $.ASN1Encoder<
    Key_Estb_Algs
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Key_Estb_Algs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Key_Estb_Algs} The decoded data structure.
 */
export function _decode_Key_Estb_Algs(el: _Element) {
    if (!_cached_decoder_for_Key_Estb_Algs) {
        _cached_decoder_for_Key_Estb_Algs = $._decodeSequenceOf<
            AlgorithmIdentifier
        >(() => _decode_AlgorithmIdentifier);
    }
    return _cached_decoder_for_Key_Estb_Algs(el);
}
/**
 * @summary Encodes a(n) Key_Estb_Algs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Key_Estb_Algs, encoded as an ASN.1 Element.
 */
export function _encode_Key_Estb_Algs(
    value: Key_Estb_Algs,
    elGetter: $.ASN1Encoder<Key_Estb_Algs>
) {
    if (!_cached_encoder_for_Key_Estb_Algs) {
        _cached_encoder_for_Key_Estb_Algs = $._encodeSequenceOf<
            AlgorithmIdentifier
        >(() => _encode_AlgorithmIdentifier, $.BER);
    }
    return _cached_encoder_for_Key_Estb_Algs(value, elGetter);
}

/**
 * @summary Req_contents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Req-contents ::= SEQUENCE {
 *   tok-id        INTEGER(256), -- shall contain 0100 (hex)
 *   context-id    Random-Integer,
 *   pvno          BIT STRING,
 *   timestamp     UTCTime OPTIONAL, -- mandatory for SPKM-2
 *   randSrc       Random-Integer,
 *   targ-name     Name,
 *   src-name      [0]  Name OPTIONAL,
 *   req-data      Context-Data,
 *   validity      [1]  Validity OPTIONAL,
 *   key-estb-set  Key-Estb-Algs,
 *   key-estb-req  BIT STRING OPTIONAL,
 *   key-src-bind  OCTET STRING OPTIONAL
 *   -- This field must be present for the case of SPKM-2
 *   -- unilateral authen. if the K-ALG in use does not provide
 *   -- such a binding (but is optional for all other cases).
 *   -- The octet string holds the result of applying the
 *   -- mandatory hashing procedure (in MANDATORY I-ALG;
 *   -- see Section 2.1) as follows:  MD5(src || context_key),
 *   -- where "src" is the DER-encoded octets of src-name,
 *   -- "context-key" is the symmetric key (i.e., the
 *   -- unprotected version of what is transmitted in
 *   -- key-estb-req), and "||" is the concatenation operation.
 * }
 * ```
 *
 * @class
 */
export class Req_contents {
    constructor(
        /**
         * @summary `tok_id`.
         * @public
         * @readonly
         */
        readonly tok_id: INTEGER,
        /**
         * @summary `context_id`.
         * @public
         * @readonly
         */
        readonly context_id: Random_Integer,
        /**
         * @summary `pvno`.
         * @public
         * @readonly
         */
        readonly pvno: BIT_STRING,
        /**
         * @summary `timestamp`.
         * @public
         * @readonly
         */
        readonly timestamp: OPTIONAL<UTCTime>,
        /**
         * @summary `randSrc`.
         * @public
         * @readonly
         */
        readonly randSrc: Random_Integer,
        /**
         * @summary `targ_name`.
         * @public
         * @readonly
         */
        readonly targ_name: Name,
        /**
         * @summary `src_name`.
         * @public
         * @readonly
         */
        readonly src_name: OPTIONAL<Name>,
        /**
         * @summary `req_data`.
         * @public
         * @readonly
         */
        readonly req_data: Context_Data,
        /**
         * @summary `validity`.
         * @public
         * @readonly
         */
        readonly validity: OPTIONAL<Validity>,
        /**
         * @summary `key_estb_set`.
         * @public
         * @readonly
         */
        readonly key_estb_set: Key_Estb_Algs,
        /**
         * @summary `key_estb_req`.
         * @public
         * @readonly
         */
        readonly key_estb_req: OPTIONAL<BIT_STRING>,
        /**
         * @summary `key_src_bind`.
         * @public
         * @readonly
         */
        readonly key_src_bind: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a Req_contents
     * @description
     *
     * This takes an `object` and converts it to a `Req_contents`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Req_contents`.
     * @returns {Req_contents}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Req_contents]: Req_contents[_K] }>
    ): Req_contents {
        return new Req_contents(
            _o.tok_id,
            _o.context_id,
            _o.pvno,
            _o.timestamp,
            _o.randSrc,
            _o.targ_name,
            _o.src_name,
            _o.req_data,
            _o.validity,
            _o.key_estb_set,
            _o.key_estb_req,
            _o.key_src_bind
        );
    }
}
/**
 * @summary The Leading Root Component Types of Req_contents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Req_contents: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "tok-id",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "context-id",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pvno",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timestamp",
        true,
        $.hasTag(_TagClass.universal, 23),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "randSrc",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec("targ-name", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "src-name",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "req-data",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "validity",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "key-estb-set",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "key-estb-req",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "key-src-bind",
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Req_contents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Req_contents: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Req_contents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Req_contents: $.ComponentSpec[] = [];
let _cached_decoder_for_Req_contents: $.ASN1Decoder<Req_contents> | null = null;
let _cached_encoder_for_Req_contents: $.ASN1Encoder<Req_contents> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Req_contents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Req_contents} The decoded data structure.
 */
export function _decode_Req_contents(el: _Element) {
    if (!_cached_decoder_for_Req_contents) {
        _cached_decoder_for_Req_contents = function (
            el: _Element
        ): Req_contents {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let tok_id!: INTEGER;
            let context_id!: Random_Integer;
            let pvno!: BIT_STRING;
            let timestamp: OPTIONAL<UTCTime>;
            let randSrc!: Random_Integer;
            let targ_name!: Name;
            let src_name: OPTIONAL<Name>;
            let req_data!: Context_Data;
            let validity: OPTIONAL<Validity>;
            let key_estb_set!: Key_Estb_Algs;
            let key_estb_req: OPTIONAL<BIT_STRING>;
            let key_src_bind: OPTIONAL<OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "tok-id": (_el: _Element): void => {
                    tok_id = $._decodeInteger(_el);
                },
                "context-id": (_el: _Element): void => {
                    context_id = _decode_Random_Integer(_el);
                },
                pvno: (_el: _Element): void => {
                    pvno = $._decodeBitString(_el);
                },
                timestamp: (_el: _Element): void => {
                    timestamp = $._decodeUTCTime(_el);
                },
                randSrc: (_el: _Element): void => {
                    randSrc = _decode_Random_Integer(_el);
                },
                "targ-name": (_el: _Element): void => {
                    targ_name = _decode_Name(_el);
                },
                "src-name": (_el: _Element): void => {
                    src_name = $._decode_implicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                "req-data": (_el: _Element): void => {
                    req_data = _decode_Context_Data(_el);
                },
                validity: (_el: _Element): void => {
                    validity = $._decode_implicit<Validity>(
                        () => _decode_Validity
                    )(_el);
                },
                "key-estb-set": (_el: _Element): void => {
                    key_estb_set = _decode_Key_Estb_Algs(_el);
                },
                "key-estb-req": (_el: _Element): void => {
                    key_estb_req = $._decodeBitString(_el);
                },
                "key-src-bind": (_el: _Element): void => {
                    key_src_bind = $._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Req_contents,
                _extension_additions_list_spec_for_Req_contents,
                _root_component_type_list_2_spec_for_Req_contents,
                undefined
            );
            return new Req_contents(
                /* SEQUENCE_CONSTRUCTOR_CALL */ tok_id,
                context_id,
                pvno,
                timestamp,
                randSrc,
                targ_name,
                src_name,
                req_data,
                validity,
                key_estb_set,
                key_estb_req,
                key_src_bind
            );
        };
    }
    return _cached_decoder_for_Req_contents(el);
}
/**
 * @summary Encodes a(n) Req_contents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Req_contents, encoded as an ASN.1 Element.
 */
export function _encode_Req_contents(
    value: Req_contents,
    elGetter: $.ASN1Encoder<Req_contents>
) {
    if (!_cached_encoder_for_Req_contents) {
        _cached_encoder_for_Req_contents = function (
            value: Req_contents,
            elGetter: $.ASN1Encoder<Req_contents>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.tok_id, $.BER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.context_id,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(value.pvno, $.BER),
                        /* IF_ABSENT  */ value.timestamp === undefined
                            ? undefined
                            : $._encodeUTCTime(value.timestamp, $.BER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.randSrc,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Name(value.targ_name, $.BER),
                        /* IF_ABSENT  */ value.src_name === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Name,
                                  $.BER
                              )(value.src_name, $.BER),
                        /* REQUIRED   */ _encode_Context_Data(
                            value.req_data,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.validity === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Validity,
                                  $.BER
                              )(value.validity, $.BER),
                        /* REQUIRED   */ _encode_Key_Estb_Algs(
                            value.key_estb_set,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.key_estb_req === undefined
                            ? undefined
                            : $._encodeBitString(value.key_estb_req, $.BER),
                        /* IF_ABSENT  */ value.key_src_bind === undefined
                            ? undefined
                            : $._encodeOctetString(value.key_src_bind, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Req_contents(value, elGetter);
}

/**
 * @summary Integrity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Integrity  ::=  BIT STRING
 * ```
 */
export type Integrity = BIT_STRING;
let _cached_decoder_for_Integrity: $.ASN1Decoder<Integrity> | null = null;
let _cached_encoder_for_Integrity: $.ASN1Encoder<Integrity> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Integrity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Integrity} The decoded data structure.
 */
export function _decode_Integrity(el: _Element) {
    if (!_cached_decoder_for_Integrity) {
        _cached_decoder_for_Integrity = $._decodeBitString;
    }
    return _cached_decoder_for_Integrity(el);
}
/**
 * @summary Encodes a(n) Integrity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Integrity, encoded as an ASN.1 Element.
 */
export function _encode_Integrity(
    value: Integrity,
    elGetter: $.ASN1Encoder<Integrity>
) {
    if (!_cached_encoder_for_Integrity) {
        _cached_encoder_for_Integrity = $._encodeBitString;
    }
    return _cached_encoder_for_Integrity(value, elGetter);
}

/**
 * @summary REQ_TOKEN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * REQ-TOKEN ::= SEQUENCE {
 *   req-contents   Req-contents,
 *   algId          AlgorithmIdentifier{{SupportedAlgorithms}},
 *   req-integrity  Integrity -- "token" is Req-contents
 * }
 * ```
 *
 * @class
 */
export class REQ_TOKEN {
    constructor(
        /**
         * @summary `req_contents`.
         * @public
         * @readonly
         */
        readonly req_contents: Req_contents,
        /**
         * @summary `algId`.
         * @public
         * @readonly
         */
        readonly algId: AlgorithmIdentifier,
        /**
         * @summary `req_integrity`.
         * @public
         * @readonly
         */
        readonly req_integrity: Integrity
    ) {}

    /**
     * @summary Restructures an object into a REQ_TOKEN
     * @description
     *
     * This takes an `object` and converts it to a `REQ_TOKEN`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `REQ_TOKEN`.
     * @returns {REQ_TOKEN}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof REQ_TOKEN]: REQ_TOKEN[_K] }>
    ): REQ_TOKEN {
        return new REQ_TOKEN(_o.req_contents, _o.algId, _o.req_integrity);
    }
}
/**
 * @summary The Leading Root Component Types of REQ_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_REQ_TOKEN: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "req-contents",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "algId",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "req-integrity",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of REQ_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_REQ_TOKEN: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of REQ_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_REQ_TOKEN: $.ComponentSpec[] = [];
let _cached_decoder_for_REQ_TOKEN: $.ASN1Decoder<REQ_TOKEN> | null = null;
let _cached_encoder_for_REQ_TOKEN: $.ASN1Encoder<REQ_TOKEN> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) REQ_TOKEN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {REQ_TOKEN} The decoded data structure.
 */
export function _decode_REQ_TOKEN(el: _Element) {
    if (!_cached_decoder_for_REQ_TOKEN) {
        _cached_decoder_for_REQ_TOKEN = function (el: _Element): REQ_TOKEN {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "REQ-TOKEN contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "req-contents";
            sequence[1].name = "algId";
            sequence[2].name = "req-integrity";
            let req_contents!: Req_contents;
            let algId!: AlgorithmIdentifier;
            let req_integrity!: Integrity;
            req_contents = _decode_Req_contents(sequence[0]);
            algId = _decode_AlgorithmIdentifier(sequence[1]);
            req_integrity = _decode_Integrity(sequence[2]);
            return new REQ_TOKEN(req_contents, algId, req_integrity);
        };
    }
    return _cached_decoder_for_REQ_TOKEN(el);
}
/**
 * @summary Encodes a(n) REQ_TOKEN into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The REQ_TOKEN, encoded as an ASN.1 Element.
 */
export function _encode_REQ_TOKEN(
    value: REQ_TOKEN,
    elGetter: $.ASN1Encoder<REQ_TOKEN>
) {
    if (!_cached_encoder_for_REQ_TOKEN) {
        _cached_encoder_for_REQ_TOKEN = function (
            value: REQ_TOKEN,
            elGetter: $.ASN1Encoder<REQ_TOKEN>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Req_contents(
                            value.req_contents,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Integrity(
                            value.req_integrity,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_REQ_TOKEN(value, elGetter);
}

/**
 * @summary CertificationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificationPath ::= SEQUENCE {
 *   userKeyId          [0]  OCTET STRING OPTIONAL,
 *   userCertif         [1]  Certificate OPTIONAL,
 *   verifKeyId         [2]  OCTET STRING OPTIONAL,
 *   userVerifCertif    [3]  Certificate OPTIONAL,
 *   theCACertificates  [4]  SEQUENCE OF CertificatePair OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CertificationPath {
    constructor(
        /**
         * @summary `userKeyId`.
         * @public
         * @readonly
         */
        readonly userKeyId: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `userCertif`.
         * @public
         * @readonly
         */
        readonly userCertif: OPTIONAL<Certificate>,
        /**
         * @summary `verifKeyId`.
         * @public
         * @readonly
         */
        readonly verifKeyId: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `userVerifCertif`.
         * @public
         * @readonly
         */
        readonly userVerifCertif: OPTIONAL<Certificate>,
        /**
         * @summary `theCACertificates`.
         * @public
         * @readonly
         */
        readonly theCACertificates: OPTIONAL<CertificatePair[]>
    ) {}

    /**
     * @summary Restructures an object into a CertificationPath
     * @description
     *
     * This takes an `object` and converts it to a `CertificationPath`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificationPath`.
     * @returns {CertificationPath}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertificationPath]: CertificationPath[_K] }>
    ): CertificationPath {
        return new CertificationPath(
            _o.userKeyId,
            _o.userCertif,
            _o.verifKeyId,
            _o.userVerifCertif,
            _o.theCACertificates
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificationPath: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "userKeyId",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "userCertif",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "verifKeyId",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "userVerifCertif",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "theCACertificates",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificationPath: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificationPath: $.ComponentSpec[] = [];
let _cached_decoder_for_CertificationPath: $.ASN1Decoder<
    CertificationPath
> | null = null;
let _cached_encoder_for_CertificationPath: $.ASN1Encoder<
    CertificationPath
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificationPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificationPath} The decoded data structure.
 */
export function _decode_CertificationPath(el: _Element) {
    if (!_cached_decoder_for_CertificationPath) {
        _cached_decoder_for_CertificationPath = function (
            el: _Element
        ): CertificationPath {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let userKeyId: OPTIONAL<OCTET_STRING>;
            let userCertif: OPTIONAL<Certificate>;
            let verifKeyId: OPTIONAL<OCTET_STRING>;
            let userVerifCertif: OPTIONAL<Certificate>;
            let theCACertificates: OPTIONAL<CertificatePair[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                userKeyId: (_el: _Element): void => {
                    userKeyId = $._decode_implicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                userCertif: (_el: _Element): void => {
                    userCertif = $._decode_implicit<Certificate>(
                        () => _decode_Certificate
                    )(_el);
                },
                verifKeyId: (_el: _Element): void => {
                    verifKeyId = $._decode_implicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                userVerifCertif: (_el: _Element): void => {
                    userVerifCertif = $._decode_implicit<Certificate>(
                        () => _decode_Certificate
                    )(_el);
                },
                theCACertificates: (_el: _Element): void => {
                    theCACertificates = $._decode_implicit<CertificatePair[]>(
                        () =>
                            $._decodeSequenceOf<CertificatePair>(
                                () => _decode_CertificatePair
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificationPath,
                _extension_additions_list_spec_for_CertificationPath,
                _root_component_type_list_2_spec_for_CertificationPath,
                undefined
            );
            return new CertificationPath(
                /* SEQUENCE_CONSTRUCTOR_CALL */ userKeyId,
                userCertif,
                verifKeyId,
                userVerifCertif,
                theCACertificates
            );
        };
    }
    return _cached_decoder_for_CertificationPath(el);
}
/**
 * @summary Encodes a(n) CertificationPath into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificationPath, encoded as an ASN.1 Element.
 */
export function _encode_CertificationPath(
    value: CertificationPath,
    elGetter: $.ASN1Encoder<CertificationPath>
) {
    if (!_cached_encoder_for_CertificationPath) {
        _cached_encoder_for_CertificationPath = function (
            value: CertificationPath,
            elGetter: $.ASN1Encoder<CertificationPath>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.userKeyId === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeOctetString,
                                  $.BER
                              )(value.userKeyId, $.BER),
                        /* IF_ABSENT  */ value.userCertif === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Certificate,
                                  $.BER
                              )(value.userCertif, $.BER),
                        /* IF_ABSENT  */ value.verifKeyId === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeOctetString,
                                  $.BER
                              )(value.verifKeyId, $.BER),
                        /* IF_ABSENT  */ value.userVerifCertif === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_Certificate,
                                  $.BER
                              )(value.userVerifCertif, $.BER),
                        /* IF_ABSENT  */ value.theCACertificates === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () =>
                                      $._encodeSequenceOf<CertificatePair>(
                                          () => _encode_CertificatePair,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.theCACertificates, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CertificationPath(value, elGetter);
}

/**
 * @summary CertificationData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificationData ::= SEQUENCE {
 *   certificationPath          [0]  CertificationPath OPTIONAL,
 *   certificateRevocationList  [1]  CertificateList OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CertificationData {
    constructor(
        /**
         * @summary `certificationPath`.
         * @public
         * @readonly
         */
        readonly certificationPath: OPTIONAL<CertificationPath>,
        /**
         * @summary `certificateRevocationList`.
         * @public
         * @readonly
         */
        readonly certificateRevocationList: OPTIONAL<CertificateList>
    ) {}

    /**
     * @summary Restructures an object into a CertificationData
     * @description
     *
     * This takes an `object` and converts it to a `CertificationData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificationData`.
     * @returns {CertificationData}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertificationData]: CertificationData[_K] }>
    ): CertificationData {
        return new CertificationData(
            _o.certificationPath,
            _o.certificateRevocationList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CertificationData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificationData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certificationPath",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certificateRevocationList",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CertificationData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificationData: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CertificationData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificationData: $.ComponentSpec[] = [];
let _cached_decoder_for_CertificationData: $.ASN1Decoder<
    CertificationData
> | null = null;
let _cached_encoder_for_CertificationData: $.ASN1Encoder<
    CertificationData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertificationData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificationData} The decoded data structure.
 */
export function _decode_CertificationData(el: _Element) {
    if (!_cached_decoder_for_CertificationData) {
        _cached_decoder_for_CertificationData = function (
            el: _Element
        ): CertificationData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certificationPath: OPTIONAL<CertificationPath>;
            let certificateRevocationList: OPTIONAL<CertificateList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                certificationPath: (_el: _Element): void => {
                    certificationPath = $._decode_implicit<CertificationPath>(
                        () => _decode_CertificationPath
                    )(_el);
                },
                certificateRevocationList: (_el: _Element): void => {
                    certificateRevocationList = $._decode_implicit<
                        CertificateList
                    >(() => _decode_CertificateList)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificationData,
                _extension_additions_list_spec_for_CertificationData,
                _root_component_type_list_2_spec_for_CertificationData,
                undefined
            );
            return new CertificationData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ certificationPath,
                certificateRevocationList
            );
        };
    }
    return _cached_decoder_for_CertificationData(el);
}
/**
 * @summary Encodes a(n) CertificationData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificationData, encoded as an ASN.1 Element.
 */
export function _encode_CertificationData(
    value: CertificationData,
    elGetter: $.ASN1Encoder<CertificationData>
) {
    if (!_cached_encoder_for_CertificationData) {
        _cached_encoder_for_CertificationData = function (
            value: CertificationData,
            elGetter: $.ASN1Encoder<CertificationData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.certificationPath === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_CertificationPath,
                                  $.BER
                              )(value.certificationPath, $.BER),
                        /* IF_ABSENT  */ value.certificateRevocationList ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_CertificateList,
                                  $.BER
                              )(value.certificateRevocationList, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CertificationData(value, elGetter);
}

/**
 * @summary AuthorizationData_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizationData-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AuthorizationData_Item {
    constructor(
        /**
         * @summary `ad_type`.
         * @public
         * @readonly
         */
        readonly ad_type: INTEGER,
        /**
         * @summary `ad_data`.
         * @public
         * @readonly
         */
        readonly ad_data: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a AuthorizationData_Item
     * @description
     *
     * This takes an `object` and converts it to a `AuthorizationData_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthorizationData_Item`.
     * @returns {AuthorizationData_Item}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof AuthorizationData_Item]: AuthorizationData_Item[_K] }
        >
    ): AuthorizationData_Item {
        return new AuthorizationData_Item(_o.ad_type, _o.ad_data);
    }
}
/**
 * @summary The Leading Root Component Types of AuthorizationData_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AuthorizationData_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ad-type",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "ad-data",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AuthorizationData_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AuthorizationData_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AuthorizationData_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AuthorizationData_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_AuthorizationData_Item: $.ASN1Decoder<
    AuthorizationData_Item
> | null = null;
let _cached_encoder_for_AuthorizationData_Item: $.ASN1Encoder<
    AuthorizationData_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationData_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizationData_Item} The decoded data structure.
 */
export function _decode_AuthorizationData_Item(el: _Element) {
    if (!_cached_decoder_for_AuthorizationData_Item) {
        _cached_decoder_for_AuthorizationData_Item = function (
            el: _Element
        ): AuthorizationData_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AuthorizationData-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "ad-type";
            sequence[1].name = "ad-data";
            let ad_type!: INTEGER;
            let ad_data!: OCTET_STRING;
            ad_type = $._decodeInteger(sequence[0]);
            ad_data = $._decodeOctetString(sequence[1]);
            return new AuthorizationData_Item(ad_type, ad_data);
        };
    }
    return _cached_decoder_for_AuthorizationData_Item(el);
}
/**
 * @summary Encodes a(n) AuthorizationData_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationData_Item, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizationData_Item(
    value: AuthorizationData_Item,
    elGetter: $.ASN1Encoder<AuthorizationData_Item>
) {
    if (!_cached_encoder_for_AuthorizationData_Item) {
        _cached_encoder_for_AuthorizationData_Item = function (
            value: AuthorizationData_Item,
            elGetter: $.ASN1Encoder<AuthorizationData_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.ad_type, $.BER),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.ad_data,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AuthorizationData_Item(value, elGetter);
}

export type AuthorizationData<> = AuthorizationData_Item[]; // SequenceOfType
let _cached_decoder_for_AuthorizationData: $.ASN1Decoder<
    AuthorizationData
> | null = null;
let _cached_encoder_for_AuthorizationData: $.ASN1Encoder<
    AuthorizationData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizationData} The decoded data structure.
 */
export function _decode_AuthorizationData(el: _Element) {
    if (!_cached_decoder_for_AuthorizationData) {
        _cached_decoder_for_AuthorizationData = $._decodeSequenceOf<
            AuthorizationData_Item
        >(() => _decode_AuthorizationData_Item);
    }
    return _cached_decoder_for_AuthorizationData(el);
}
/**
 * @summary Encodes a(n) AuthorizationData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationData, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizationData(
    value: AuthorizationData,
    elGetter: $.ASN1Encoder<AuthorizationData>
) {
    if (!_cached_encoder_for_AuthorizationData) {
        _cached_encoder_for_AuthorizationData = $._encodeSequenceOf<
            AuthorizationData_Item
        >(() => _encode_AuthorizationData_Item, $.BER);
    }
    return _cached_encoder_for_AuthorizationData(value, elGetter);
}

/**
 * @summary SPKM_REQ
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-REQ ::= SEQUENCE {
 *   requestToken  REQ-TOKEN,
 *   certif-data   [0]  CertificationData OPTIONAL,
 *   auth-data     [1]  AuthorizationData OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SPKM_REQ {
    constructor(
        /**
         * @summary `requestToken`.
         * @public
         * @readonly
         */
        readonly requestToken: REQ_TOKEN,
        /**
         * @summary `certif_data`.
         * @public
         * @readonly
         */
        readonly certif_data: OPTIONAL<CertificationData>,
        /**
         * @summary `auth_data`.
         * @public
         * @readonly
         */
        readonly auth_data: OPTIONAL<AuthorizationData>
    ) {}

    /**
     * @summary Restructures an object into a SPKM_REQ
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_REQ`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_REQ`.
     * @returns {SPKM_REQ}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SPKM_REQ]: SPKM_REQ[_K] }>
    ): SPKM_REQ {
        return new SPKM_REQ(_o.requestToken, _o.certif_data, _o.auth_data);
    }
}
/**
 * @summary The Leading Root Component Types of SPKM_REQ
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_REQ: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "requestToken",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certif-data",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "auth-data",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SPKM_REQ
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_REQ: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SPKM_REQ
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_REQ: $.ComponentSpec[] = [];
let _cached_decoder_for_SPKM_REQ: $.ASN1Decoder<SPKM_REQ> | null = null;
let _cached_encoder_for_SPKM_REQ: $.ASN1Encoder<SPKM_REQ> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_REQ
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_REQ} The decoded data structure.
 */
export function _decode_SPKM_REQ(el: _Element) {
    if (!_cached_decoder_for_SPKM_REQ) {
        _cached_decoder_for_SPKM_REQ = function (el: _Element): SPKM_REQ {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let requestToken!: REQ_TOKEN;
            let certif_data: OPTIONAL<CertificationData>;
            let auth_data: OPTIONAL<AuthorizationData>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                requestToken: (_el: _Element): void => {
                    requestToken = _decode_REQ_TOKEN(_el);
                },
                "certif-data": (_el: _Element): void => {
                    certif_data = $._decode_implicit<CertificationData>(
                        () => _decode_CertificationData
                    )(_el);
                },
                "auth-data": (_el: _Element): void => {
                    auth_data = $._decode_implicit<AuthorizationData>(
                        () => _decode_AuthorizationData
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SPKM_REQ,
                _extension_additions_list_spec_for_SPKM_REQ,
                _root_component_type_list_2_spec_for_SPKM_REQ,
                undefined
            );
            return new SPKM_REQ(
                /* SEQUENCE_CONSTRUCTOR_CALL */ requestToken,
                certif_data,
                auth_data
            );
        };
    }
    return _cached_decoder_for_SPKM_REQ(el);
}
/**
 * @summary Encodes a(n) SPKM_REQ into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_REQ, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_REQ(
    value: SPKM_REQ,
    elGetter: $.ASN1Encoder<SPKM_REQ>
) {
    if (!_cached_encoder_for_SPKM_REQ) {
        _cached_encoder_for_SPKM_REQ = function (
            value: SPKM_REQ,
            elGetter: $.ASN1Encoder<SPKM_REQ>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_REQ_TOKEN(
                            value.requestToken,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.certif_data === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_CertificationData,
                                  $.BER
                              )(value.certif_data, $.BER),
                        /* IF_ABSENT  */ value.auth_data === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_AuthorizationData,
                                  $.BER
                              )(value.auth_data, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SPKM_REQ(value, elGetter);
}

/**
 * @summary Rep_ti_contents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Rep-ti-contents ::= SEQUENCE {
 *   tok-id        INTEGER(512), -- shall contain 0200 (hex)
 *   context-id    Random-Integer,
 *   pvno          [0]  BIT STRING OPTIONAL,
 *   timestamp     UTCTime OPTIONAL, -- mandatory for SPKM-2
 *   randTarg      Random-Integer,
 *   src-name      [1]  Name OPTIONAL,
 *   targ-name     Name,
 *   randSrc       Random-Integer,
 *   rep-data      Context-Data,
 *   validity      [2]  Validity OPTIONAL,
 *   key-estb-id   AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *   key-estb-str  BIT STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Rep_ti_contents {
    constructor(
        /**
         * @summary `tok_id`.
         * @public
         * @readonly
         */
        readonly tok_id: INTEGER,
        /**
         * @summary `context_id`.
         * @public
         * @readonly
         */
        readonly context_id: Random_Integer,
        /**
         * @summary `pvno`.
         * @public
         * @readonly
         */
        readonly pvno: OPTIONAL<BIT_STRING>,
        /**
         * @summary `timestamp`.
         * @public
         * @readonly
         */
        readonly timestamp: OPTIONAL<UTCTime>,
        /**
         * @summary `randTarg`.
         * @public
         * @readonly
         */
        readonly randTarg: Random_Integer,
        /**
         * @summary `src_name`.
         * @public
         * @readonly
         */
        readonly src_name: OPTIONAL<Name>,
        /**
         * @summary `targ_name`.
         * @public
         * @readonly
         */
        readonly targ_name: Name,
        /**
         * @summary `randSrc`.
         * @public
         * @readonly
         */
        readonly randSrc: Random_Integer,
        /**
         * @summary `rep_data`.
         * @public
         * @readonly
         */
        readonly rep_data: Context_Data,
        /**
         * @summary `validity`.
         * @public
         * @readonly
         */
        readonly validity: OPTIONAL<Validity>,
        /**
         * @summary `key_estb_id`.
         * @public
         * @readonly
         */
        readonly key_estb_id: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `key_estb_str`.
         * @public
         * @readonly
         */
        readonly key_estb_str: OPTIONAL<BIT_STRING>
    ) {}

    /**
     * @summary Restructures an object into a Rep_ti_contents
     * @description
     *
     * This takes an `object` and converts it to a `Rep_ti_contents`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Rep_ti_contents`.
     * @returns {Rep_ti_contents}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Rep_ti_contents]: Rep_ti_contents[_K] }>
    ): Rep_ti_contents {
        return new Rep_ti_contents(
            _o.tok_id,
            _o.context_id,
            _o.pvno,
            _o.timestamp,
            _o.randTarg,
            _o.src_name,
            _o.targ_name,
            _o.randSrc,
            _o.rep_data,
            _o.validity,
            _o.key_estb_id,
            _o.key_estb_str
        );
    }
}
/**
 * @summary The Leading Root Component Types of Rep_ti_contents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Rep_ti_contents: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "tok-id",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "context-id",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pvno",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timestamp",
        true,
        $.hasTag(_TagClass.universal, 23),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "randTarg",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "src-name",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec("targ-name", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "randSrc",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "rep-data",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "validity",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "key-estb-id",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "key-estb-str",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Rep_ti_contents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Rep_ti_contents: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Rep_ti_contents
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Rep_ti_contents: $.ComponentSpec[] = [];
let _cached_decoder_for_Rep_ti_contents: $.ASN1Decoder<
    Rep_ti_contents
> | null = null;
let _cached_encoder_for_Rep_ti_contents: $.ASN1Encoder<
    Rep_ti_contents
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Rep_ti_contents
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Rep_ti_contents} The decoded data structure.
 */
export function _decode_Rep_ti_contents(el: _Element) {
    if (!_cached_decoder_for_Rep_ti_contents) {
        _cached_decoder_for_Rep_ti_contents = function (
            el: _Element
        ): Rep_ti_contents {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let tok_id!: INTEGER;
            let context_id!: Random_Integer;
            let pvno: OPTIONAL<BIT_STRING>;
            let timestamp: OPTIONAL<UTCTime>;
            let randTarg!: Random_Integer;
            let src_name: OPTIONAL<Name>;
            let targ_name!: Name;
            let randSrc!: Random_Integer;
            let rep_data!: Context_Data;
            let validity: OPTIONAL<Validity>;
            let key_estb_id: OPTIONAL<AlgorithmIdentifier>;
            let key_estb_str: OPTIONAL<BIT_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "tok-id": (_el: _Element): void => {
                    tok_id = $._decodeInteger(_el);
                },
                "context-id": (_el: _Element): void => {
                    context_id = _decode_Random_Integer(_el);
                },
                pvno: (_el: _Element): void => {
                    pvno = $._decode_implicit<BIT_STRING>(
                        () => $._decodeBitString
                    )(_el);
                },
                timestamp: (_el: _Element): void => {
                    timestamp = $._decodeUTCTime(_el);
                },
                randTarg: (_el: _Element): void => {
                    randTarg = _decode_Random_Integer(_el);
                },
                "src-name": (_el: _Element): void => {
                    src_name = $._decode_implicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                "targ-name": (_el: _Element): void => {
                    targ_name = _decode_Name(_el);
                },
                randSrc: (_el: _Element): void => {
                    randSrc = _decode_Random_Integer(_el);
                },
                "rep-data": (_el: _Element): void => {
                    rep_data = _decode_Context_Data(_el);
                },
                validity: (_el: _Element): void => {
                    validity = $._decode_implicit<Validity>(
                        () => _decode_Validity
                    )(_el);
                },
                "key-estb-id": (_el: _Element): void => {
                    key_estb_id = _decode_AlgorithmIdentifier(_el);
                },
                "key-estb-str": (_el: _Element): void => {
                    key_estb_str = $._decodeBitString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Rep_ti_contents,
                _extension_additions_list_spec_for_Rep_ti_contents,
                _root_component_type_list_2_spec_for_Rep_ti_contents,
                undefined
            );
            return new Rep_ti_contents(
                /* SEQUENCE_CONSTRUCTOR_CALL */ tok_id,
                context_id,
                pvno,
                timestamp,
                randTarg,
                src_name,
                targ_name,
                randSrc,
                rep_data,
                validity,
                key_estb_id,
                key_estb_str
            );
        };
    }
    return _cached_decoder_for_Rep_ti_contents(el);
}
/**
 * @summary Encodes a(n) Rep_ti_contents into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Rep_ti_contents, encoded as an ASN.1 Element.
 */
export function _encode_Rep_ti_contents(
    value: Rep_ti_contents,
    elGetter: $.ASN1Encoder<Rep_ti_contents>
) {
    if (!_cached_encoder_for_Rep_ti_contents) {
        _cached_encoder_for_Rep_ti_contents = function (
            value: Rep_ti_contents,
            elGetter: $.ASN1Encoder<Rep_ti_contents>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.tok_id, $.BER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.context_id,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.pvno === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeBitString,
                                  $.BER
                              )(value.pvno, $.BER),
                        /* IF_ABSENT  */ value.timestamp === undefined
                            ? undefined
                            : $._encodeUTCTime(value.timestamp, $.BER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.randTarg,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.src_name === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Name,
                                  $.BER
                              )(value.src_name, $.BER),
                        /* REQUIRED   */ _encode_Name(value.targ_name, $.BER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.randSrc,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Context_Data(
                            value.rep_data,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.validity === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_Validity,
                                  $.BER
                              )(value.validity, $.BER),
                        /* IF_ABSENT  */ value.key_estb_id === undefined
                            ? undefined
                            : _encode_AlgorithmIdentifier(
                                  value.key_estb_id,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.key_estb_str === undefined
                            ? undefined
                            : $._encodeBitString(value.key_estb_str, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Rep_ti_contents(value, elGetter);
}

/**
 * @summary REP_TI_TOKEN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * REP-TI-TOKEN ::= SEQUENCE {
 *   rep-ti-contents  Rep-ti-contents,
 *   algId            AlgorithmIdentifier{{SupportedAlgorithms}},
 *   rep-ti-integ     Integrity -- "token" is Rep-ti-contents
 * }
 * ```
 *
 * @class
 */
export class REP_TI_TOKEN {
    constructor(
        /**
         * @summary `rep_ti_contents`.
         * @public
         * @readonly
         */
        readonly rep_ti_contents: Rep_ti_contents,
        /**
         * @summary `algId`.
         * @public
         * @readonly
         */
        readonly algId: AlgorithmIdentifier,
        /**
         * @summary `rep_ti_integ`.
         * @public
         * @readonly
         */
        readonly rep_ti_integ: Integrity
    ) {}

    /**
     * @summary Restructures an object into a REP_TI_TOKEN
     * @description
     *
     * This takes an `object` and converts it to a `REP_TI_TOKEN`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `REP_TI_TOKEN`.
     * @returns {REP_TI_TOKEN}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof REP_TI_TOKEN]: REP_TI_TOKEN[_K] }>
    ): REP_TI_TOKEN {
        return new REP_TI_TOKEN(_o.rep_ti_contents, _o.algId, _o.rep_ti_integ);
    }
}
/**
 * @summary The Leading Root Component Types of REP_TI_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_REP_TI_TOKEN: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "rep-ti-contents",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "algId",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "rep-ti-integ",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of REP_TI_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_REP_TI_TOKEN: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of REP_TI_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_REP_TI_TOKEN: $.ComponentSpec[] = [];
let _cached_decoder_for_REP_TI_TOKEN: $.ASN1Decoder<REP_TI_TOKEN> | null = null;
let _cached_encoder_for_REP_TI_TOKEN: $.ASN1Encoder<REP_TI_TOKEN> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) REP_TI_TOKEN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {REP_TI_TOKEN} The decoded data structure.
 */
export function _decode_REP_TI_TOKEN(el: _Element) {
    if (!_cached_decoder_for_REP_TI_TOKEN) {
        _cached_decoder_for_REP_TI_TOKEN = function (
            el: _Element
        ): REP_TI_TOKEN {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "REP-TI-TOKEN contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "rep-ti-contents";
            sequence[1].name = "algId";
            sequence[2].name = "rep-ti-integ";
            let rep_ti_contents!: Rep_ti_contents;
            let algId!: AlgorithmIdentifier;
            let rep_ti_integ!: Integrity;
            rep_ti_contents = _decode_Rep_ti_contents(sequence[0]);
            algId = _decode_AlgorithmIdentifier(sequence[1]);
            rep_ti_integ = _decode_Integrity(sequence[2]);
            return new REP_TI_TOKEN(rep_ti_contents, algId, rep_ti_integ);
        };
    }
    return _cached_decoder_for_REP_TI_TOKEN(el);
}
/**
 * @summary Encodes a(n) REP_TI_TOKEN into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The REP_TI_TOKEN, encoded as an ASN.1 Element.
 */
export function _encode_REP_TI_TOKEN(
    value: REP_TI_TOKEN,
    elGetter: $.ASN1Encoder<REP_TI_TOKEN>
) {
    if (!_cached_encoder_for_REP_TI_TOKEN) {
        _cached_encoder_for_REP_TI_TOKEN = function (
            value: REP_TI_TOKEN,
            elGetter: $.ASN1Encoder<REP_TI_TOKEN>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Rep_ti_contents(
                            value.rep_ti_contents,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Integrity(
                            value.rep_ti_integ,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_REP_TI_TOKEN(value, elGetter);
}

/**
 * @summary SPKM_REP_TI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-REP-TI ::= SEQUENCE {
 *   responseToken  REP-TI-TOKEN,
 *   certif-data    CertificationData OPTIONAL
 *   -- present if target-certif-data-required option was
 * }
 * ```
 *
 * @class
 */
export class SPKM_REP_TI {
    constructor(
        /**
         * @summary `responseToken`.
         * @public
         * @readonly
         */
        readonly responseToken: REP_TI_TOKEN,
        /**
         * @summary `certif_data`.
         * @public
         * @readonly
         */
        readonly certif_data: OPTIONAL<CertificationData>
    ) {}

    /**
     * @summary Restructures an object into a SPKM_REP_TI
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_REP_TI`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_REP_TI`.
     * @returns {SPKM_REP_TI}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SPKM_REP_TI]: SPKM_REP_TI[_K] }>
    ): SPKM_REP_TI {
        return new SPKM_REP_TI(_o.responseToken, _o.certif_data);
    }
}
/**
 * @summary The Leading Root Component Types of SPKM_REP_TI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_REP_TI: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "responseToken",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certif-data",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SPKM_REP_TI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_REP_TI: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SPKM_REP_TI
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_REP_TI: $.ComponentSpec[] = [];
let _cached_decoder_for_SPKM_REP_TI: $.ASN1Decoder<SPKM_REP_TI> | null = null;
let _cached_encoder_for_SPKM_REP_TI: $.ASN1Encoder<SPKM_REP_TI> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_REP_TI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_REP_TI} The decoded data structure.
 */
export function _decode_SPKM_REP_TI(el: _Element) {
    if (!_cached_decoder_for_SPKM_REP_TI) {
        _cached_decoder_for_SPKM_REP_TI = function (el: _Element): SPKM_REP_TI {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let responseToken!: REP_TI_TOKEN;
            let certif_data: OPTIONAL<CertificationData>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                responseToken: (_el: _Element): void => {
                    responseToken = _decode_REP_TI_TOKEN(_el);
                },
                "certif-data": (_el: _Element): void => {
                    certif_data = _decode_CertificationData(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SPKM_REP_TI,
                _extension_additions_list_spec_for_SPKM_REP_TI,
                _root_component_type_list_2_spec_for_SPKM_REP_TI,
                undefined
            );
            return new SPKM_REP_TI(
                /* SEQUENCE_CONSTRUCTOR_CALL */ responseToken,
                certif_data
            );
        };
    }
    return _cached_decoder_for_SPKM_REP_TI(el);
}
/**
 * @summary Encodes a(n) SPKM_REP_TI into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_REP_TI, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_REP_TI(
    value: SPKM_REP_TI,
    elGetter: $.ASN1Encoder<SPKM_REP_TI>
) {
    if (!_cached_encoder_for_SPKM_REP_TI) {
        _cached_encoder_for_SPKM_REP_TI = function (
            value: SPKM_REP_TI,
            elGetter: $.ASN1Encoder<SPKM_REP_TI>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_REP_TI_TOKEN(
                            value.responseToken,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.certif_data === undefined
                            ? undefined
                            : _encode_CertificationData(
                                  value.certif_data,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SPKM_REP_TI(value, elGetter);
}

/**
 * @summary REP_IT_TOKEN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * REP-IT-TOKEN ::= SEQUENCE {
 *   tok-id        INTEGER(768), -- shall contain 0300 (hex)
 *   context-id    Random-Integer,
 *   randSrc       Random-Integer,
 *   randTarg      Random-Integer,
 *   targ-name     Name,
 *   src-name      Name OPTIONAL,
 *   key-estb-rep  BIT STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class REP_IT_TOKEN {
    constructor(
        /**
         * @summary `tok_id`.
         * @public
         * @readonly
         */
        readonly tok_id: INTEGER,
        /**
         * @summary `context_id`.
         * @public
         * @readonly
         */
        readonly context_id: Random_Integer,
        /**
         * @summary `randSrc`.
         * @public
         * @readonly
         */
        readonly randSrc: Random_Integer,
        /**
         * @summary `randTarg`.
         * @public
         * @readonly
         */
        readonly randTarg: Random_Integer,
        /**
         * @summary `targ_name`.
         * @public
         * @readonly
         */
        readonly targ_name: Name,
        /**
         * @summary `src_name`.
         * @public
         * @readonly
         */
        readonly src_name: OPTIONAL<Name>,
        /**
         * @summary `key_estb_rep`.
         * @public
         * @readonly
         */
        readonly key_estb_rep: OPTIONAL<BIT_STRING>
    ) {}

    /**
     * @summary Restructures an object into a REP_IT_TOKEN
     * @description
     *
     * This takes an `object` and converts it to a `REP_IT_TOKEN`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `REP_IT_TOKEN`.
     * @returns {REP_IT_TOKEN}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof REP_IT_TOKEN]: REP_IT_TOKEN[_K] }>
    ): REP_IT_TOKEN {
        return new REP_IT_TOKEN(
            _o.tok_id,
            _o.context_id,
            _o.randSrc,
            _o.randTarg,
            _o.targ_name,
            _o.src_name,
            _o.key_estb_rep
        );
    }
}
/**
 * @summary The Leading Root Component Types of REP_IT_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_REP_IT_TOKEN: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "tok-id",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "context-id",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "randSrc",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "randTarg",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec("targ-name", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("src-name", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "key-estb-rep",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of REP_IT_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_REP_IT_TOKEN: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of REP_IT_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_REP_IT_TOKEN: $.ComponentSpec[] = [];
let _cached_decoder_for_REP_IT_TOKEN: $.ASN1Decoder<REP_IT_TOKEN> | null = null;
let _cached_encoder_for_REP_IT_TOKEN: $.ASN1Encoder<REP_IT_TOKEN> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) REP_IT_TOKEN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {REP_IT_TOKEN} The decoded data structure.
 */
export function _decode_REP_IT_TOKEN(el: _Element) {
    if (!_cached_decoder_for_REP_IT_TOKEN) {
        _cached_decoder_for_REP_IT_TOKEN = function (
            el: _Element
        ): REP_IT_TOKEN {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let tok_id!: INTEGER;
            let context_id!: Random_Integer;
            let randSrc!: Random_Integer;
            let randTarg!: Random_Integer;
            let targ_name!: Name;
            let src_name: OPTIONAL<Name>;
            let key_estb_rep: OPTIONAL<BIT_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "tok-id": (_el: _Element): void => {
                    tok_id = $._decodeInteger(_el);
                },
                "context-id": (_el: _Element): void => {
                    context_id = _decode_Random_Integer(_el);
                },
                randSrc: (_el: _Element): void => {
                    randSrc = _decode_Random_Integer(_el);
                },
                randTarg: (_el: _Element): void => {
                    randTarg = _decode_Random_Integer(_el);
                },
                "targ-name": (_el: _Element): void => {
                    targ_name = _decode_Name(_el);
                },
                "src-name": (_el: _Element): void => {
                    src_name = _decode_Name(_el);
                },
                "key-estb-rep": (_el: _Element): void => {
                    key_estb_rep = $._decodeBitString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_REP_IT_TOKEN,
                _extension_additions_list_spec_for_REP_IT_TOKEN,
                _root_component_type_list_2_spec_for_REP_IT_TOKEN,
                undefined
            );
            return new REP_IT_TOKEN(
                /* SEQUENCE_CONSTRUCTOR_CALL */ tok_id,
                context_id,
                randSrc,
                randTarg,
                targ_name,
                src_name,
                key_estb_rep
            );
        };
    }
    return _cached_decoder_for_REP_IT_TOKEN(el);
}
/**
 * @summary Encodes a(n) REP_IT_TOKEN into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The REP_IT_TOKEN, encoded as an ASN.1 Element.
 */
export function _encode_REP_IT_TOKEN(
    value: REP_IT_TOKEN,
    elGetter: $.ASN1Encoder<REP_IT_TOKEN>
) {
    if (!_cached_encoder_for_REP_IT_TOKEN) {
        _cached_encoder_for_REP_IT_TOKEN = function (
            value: REP_IT_TOKEN,
            elGetter: $.ASN1Encoder<REP_IT_TOKEN>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.tok_id, $.BER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.context_id,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.randSrc,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.randTarg,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Name(value.targ_name, $.BER),
                        /* IF_ABSENT  */ value.src_name === undefined
                            ? undefined
                            : _encode_Name(value.src_name, $.BER),
                        /* IF_ABSENT  */ value.key_estb_rep === undefined
                            ? undefined
                            : $._encodeBitString(value.key_estb_rep, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_REP_IT_TOKEN(value, elGetter);
}

/**
 * @summary SPKM_REP_IT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-REP-IT ::= SEQUENCE {
 *   responseToken  REP-IT-TOKEN,
 *   algId          AlgorithmIdentifier{{SupportedAlgorithms}},
 *   rep-it-integ   Integrity -- "token" is REP-IT-TOKEN
 * }
 * ```
 *
 * @class
 */
export class SPKM_REP_IT {
    constructor(
        /**
         * @summary `responseToken`.
         * @public
         * @readonly
         */
        readonly responseToken: REP_IT_TOKEN,
        /**
         * @summary `algId`.
         * @public
         * @readonly
         */
        readonly algId: AlgorithmIdentifier,
        /**
         * @summary `rep_it_integ`.
         * @public
         * @readonly
         */
        readonly rep_it_integ: Integrity
    ) {}

    /**
     * @summary Restructures an object into a SPKM_REP_IT
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_REP_IT`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_REP_IT`.
     * @returns {SPKM_REP_IT}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SPKM_REP_IT]: SPKM_REP_IT[_K] }>
    ): SPKM_REP_IT {
        return new SPKM_REP_IT(_o.responseToken, _o.algId, _o.rep_it_integ);
    }
}
/**
 * @summary The Leading Root Component Types of SPKM_REP_IT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_REP_IT: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "responseToken",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "algId",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "rep-it-integ",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SPKM_REP_IT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_REP_IT: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SPKM_REP_IT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_REP_IT: $.ComponentSpec[] = [];
let _cached_decoder_for_SPKM_REP_IT: $.ASN1Decoder<SPKM_REP_IT> | null = null;
let _cached_encoder_for_SPKM_REP_IT: $.ASN1Encoder<SPKM_REP_IT> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_REP_IT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_REP_IT} The decoded data structure.
 */
export function _decode_SPKM_REP_IT(el: _Element) {
    if (!_cached_decoder_for_SPKM_REP_IT) {
        _cached_decoder_for_SPKM_REP_IT = function (el: _Element): SPKM_REP_IT {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "SPKM-REP-IT contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "responseToken";
            sequence[1].name = "algId";
            sequence[2].name = "rep-it-integ";
            let responseToken!: REP_IT_TOKEN;
            let algId!: AlgorithmIdentifier;
            let rep_it_integ!: Integrity;
            responseToken = _decode_REP_IT_TOKEN(sequence[0]);
            algId = _decode_AlgorithmIdentifier(sequence[1]);
            rep_it_integ = _decode_Integrity(sequence[2]);
            return new SPKM_REP_IT(responseToken, algId, rep_it_integ);
        };
    }
    return _cached_decoder_for_SPKM_REP_IT(el);
}
/**
 * @summary Encodes a(n) SPKM_REP_IT into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_REP_IT, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_REP_IT(
    value: SPKM_REP_IT,
    elGetter: $.ASN1Encoder<SPKM_REP_IT>
) {
    if (!_cached_encoder_for_SPKM_REP_IT) {
        _cached_encoder_for_SPKM_REP_IT = function (
            value: SPKM_REP_IT,
            elGetter: $.ASN1Encoder<SPKM_REP_IT>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_REP_IT_TOKEN(
                            value.responseToken,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Integrity(
                            value.rep_it_integ,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SPKM_REP_IT(value, elGetter);
}

/**
 * @summary ERROR_TOKEN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ERROR-TOKEN ::= SEQUENCE {
 *   tok-id      INTEGER(1024), -- shall contain 0400 (hex)
 *   context-id  Random-Integer
 * }
 * ```
 *
 * @class
 */
export class ERROR_TOKEN {
    constructor(
        /**
         * @summary `tok_id`.
         * @public
         * @readonly
         */
        readonly tok_id: INTEGER,
        /**
         * @summary `context_id`.
         * @public
         * @readonly
         */
        readonly context_id: Random_Integer
    ) {}

    /**
     * @summary Restructures an object into a ERROR_TOKEN
     * @description
     *
     * This takes an `object` and converts it to a `ERROR_TOKEN`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ERROR_TOKEN`.
     * @returns {ERROR_TOKEN}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ERROR_TOKEN]: ERROR_TOKEN[_K] }>
    ): ERROR_TOKEN {
        return new ERROR_TOKEN(_o.tok_id, _o.context_id);
    }
}
/**
 * @summary The Leading Root Component Types of ERROR_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ERROR_TOKEN: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "tok-id",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "context-id",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ERROR_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ERROR_TOKEN: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ERROR_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ERROR_TOKEN: $.ComponentSpec[] = [];
let _cached_decoder_for_ERROR_TOKEN: $.ASN1Decoder<ERROR_TOKEN> | null = null;
let _cached_encoder_for_ERROR_TOKEN: $.ASN1Encoder<ERROR_TOKEN> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ERROR_TOKEN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ERROR_TOKEN} The decoded data structure.
 */
export function _decode_ERROR_TOKEN(el: _Element) {
    if (!_cached_decoder_for_ERROR_TOKEN) {
        _cached_decoder_for_ERROR_TOKEN = function (el: _Element): ERROR_TOKEN {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ERROR-TOKEN contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "tok-id";
            sequence[1].name = "context-id";
            let tok_id!: INTEGER;
            let context_id!: Random_Integer;
            tok_id = $._decodeInteger(sequence[0]);
            context_id = _decode_Random_Integer(sequence[1]);
            return new ERROR_TOKEN(tok_id, context_id);
        };
    }
    return _cached_decoder_for_ERROR_TOKEN(el);
}
/**
 * @summary Encodes a(n) ERROR_TOKEN into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ERROR_TOKEN, encoded as an ASN.1 Element.
 */
export function _encode_ERROR_TOKEN(
    value: ERROR_TOKEN,
    elGetter: $.ASN1Encoder<ERROR_TOKEN>
) {
    if (!_cached_encoder_for_ERROR_TOKEN) {
        _cached_encoder_for_ERROR_TOKEN = function (
            value: ERROR_TOKEN,
            elGetter: $.ASN1Encoder<ERROR_TOKEN>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.tok_id, $.BER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.context_id,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ERROR_TOKEN(value, elGetter);
}

/**
 * @summary SPKM_ERROR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-ERROR ::= SEQUENCE {
 *   errorToken  ERROR-TOKEN,
 *   algId       AlgorithmIdentifier{{SupportedAlgorithms}},
 *   integrity   Integrity -- "token" is ERROR-TOKEN
 * }
 * ```
 *
 * @class
 */
export class SPKM_ERROR {
    constructor(
        /**
         * @summary `errorToken`.
         * @public
         * @readonly
         */
        readonly errorToken: ERROR_TOKEN,
        /**
         * @summary `algId`.
         * @public
         * @readonly
         */
        readonly algId: AlgorithmIdentifier,
        /**
         * @summary `integrity`.
         * @public
         * @readonly
         */
        readonly integrity: Integrity
    ) {}

    /**
     * @summary Restructures an object into a SPKM_ERROR
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_ERROR`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_ERROR`.
     * @returns {SPKM_ERROR}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SPKM_ERROR]: SPKM_ERROR[_K] }>
    ): SPKM_ERROR {
        return new SPKM_ERROR(_o.errorToken, _o.algId, _o.integrity);
    }
}
/**
 * @summary The Leading Root Component Types of SPKM_ERROR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_ERROR: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "errorToken",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "algId",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "integrity",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SPKM_ERROR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_ERROR: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SPKM_ERROR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_ERROR: $.ComponentSpec[] = [];
let _cached_decoder_for_SPKM_ERROR: $.ASN1Decoder<SPKM_ERROR> | null = null;
let _cached_encoder_for_SPKM_ERROR: $.ASN1Encoder<SPKM_ERROR> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_ERROR
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_ERROR} The decoded data structure.
 */
export function _decode_SPKM_ERROR(el: _Element) {
    if (!_cached_decoder_for_SPKM_ERROR) {
        _cached_decoder_for_SPKM_ERROR = function (el: _Element): SPKM_ERROR {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "SPKM-ERROR contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "errorToken";
            sequence[1].name = "algId";
            sequence[2].name = "integrity";
            let errorToken!: ERROR_TOKEN;
            let algId!: AlgorithmIdentifier;
            let integrity!: Integrity;
            errorToken = _decode_ERROR_TOKEN(sequence[0]);
            algId = _decode_AlgorithmIdentifier(sequence[1]);
            integrity = _decode_Integrity(sequence[2]);
            return new SPKM_ERROR(errorToken, algId, integrity);
        };
    }
    return _cached_decoder_for_SPKM_ERROR(el);
}
/**
 * @summary Encodes a(n) SPKM_ERROR into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_ERROR, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_ERROR(
    value: SPKM_ERROR,
    elGetter: $.ASN1Encoder<SPKM_ERROR>
) {
    if (!_cached_encoder_for_SPKM_ERROR) {
        _cached_encoder_for_SPKM_ERROR = function (
            value: SPKM_ERROR,
            elGetter: $.ASN1Encoder<SPKM_ERROR>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ERROR_TOKEN(
                            value.errorToken,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Integrity(
                            value.integrity,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SPKM_ERROR(value, elGetter);
}

/**
 * @summary SeqNum
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SeqNum ::= SEQUENCE {num      INTEGER,
 *                      dir-ind  BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class SeqNum {
    constructor(
        /**
         * @summary `num`.
         * @public
         * @readonly
         */
        readonly num: INTEGER,
        /**
         * @summary `dir_ind`.
         * @public
         * @readonly
         */
        readonly dir_ind: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a SeqNum
     * @description
     *
     * This takes an `object` and converts it to a `SeqNum`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SeqNum`.
     * @returns {SeqNum}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SeqNum]: SeqNum[_K] }>
    ): SeqNum {
        return new SeqNum(_o.num, _o.dir_ind);
    }
}
/**
 * @summary The Leading Root Component Types of SeqNum
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SeqNum: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "num",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "dir-ind",
        false,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SeqNum
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SeqNum: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SeqNum
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SeqNum: $.ComponentSpec[] = [];
let _cached_decoder_for_SeqNum: $.ASN1Decoder<SeqNum> | null = null;
let _cached_encoder_for_SeqNum: $.ASN1Encoder<SeqNum> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SeqNum
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SeqNum} The decoded data structure.
 */
export function _decode_SeqNum(el: _Element) {
    if (!_cached_decoder_for_SeqNum) {
        _cached_decoder_for_SeqNum = function (el: _Element): SeqNum {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SeqNum contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "num";
            sequence[1].name = "dir-ind";
            let num!: INTEGER;
            let dir_ind!: BOOLEAN;
            num = $._decodeInteger(sequence[0]);
            dir_ind = $._decodeBoolean(sequence[1]);
            return new SeqNum(num, dir_ind);
        };
    }
    return _cached_decoder_for_SeqNum(el);
}
/**
 * @summary Encodes a(n) SeqNum into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SeqNum, encoded as an ASN.1 Element.
 */
export function _encode_SeqNum(value: SeqNum, elGetter: $.ASN1Encoder<SeqNum>) {
    if (!_cached_encoder_for_SeqNum) {
        _cached_encoder_for_SeqNum = function (
            value: SeqNum,
            elGetter: $.ASN1Encoder<SeqNum>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.num, $.BER),
                        /* REQUIRED   */ $._encodeBoolean(value.dir_ind, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SeqNum(value, elGetter);
}

/**
 * @summary Mic_Header
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Mic-Header ::= SEQUENCE {
 *   tok-id      INTEGER(257), -- shall contain 0101 (hex)
 *   context-id  Random-Integer,
 *   int-alg     [0]  AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *   snd-seq     [1]  SeqNum OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Mic_Header {
    constructor(
        /**
         * @summary `tok_id`.
         * @public
         * @readonly
         */
        readonly tok_id: INTEGER,
        /**
         * @summary `context_id`.
         * @public
         * @readonly
         */
        readonly context_id: Random_Integer,
        /**
         * @summary `int_alg`.
         * @public
         * @readonly
         */
        readonly int_alg: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `snd_seq`.
         * @public
         * @readonly
         */
        readonly snd_seq: OPTIONAL<SeqNum>
    ) {}

    /**
     * @summary Restructures an object into a Mic_Header
     * @description
     *
     * This takes an `object` and converts it to a `Mic_Header`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Mic_Header`.
     * @returns {Mic_Header}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Mic_Header]: Mic_Header[_K] }>
    ): Mic_Header {
        return new Mic_Header(_o.tok_id, _o.context_id, _o.int_alg, _o.snd_seq);
    }
}
/**
 * @summary The Leading Root Component Types of Mic_Header
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Mic_Header: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "tok-id",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "context-id",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "int-alg",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "snd-seq",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Mic_Header
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Mic_Header: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Mic_Header
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Mic_Header: $.ComponentSpec[] = [];
let _cached_decoder_for_Mic_Header: $.ASN1Decoder<Mic_Header> | null = null;
let _cached_encoder_for_Mic_Header: $.ASN1Encoder<Mic_Header> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Mic_Header
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Mic_Header} The decoded data structure.
 */
export function _decode_Mic_Header(el: _Element) {
    if (!_cached_decoder_for_Mic_Header) {
        _cached_decoder_for_Mic_Header = function (el: _Element): Mic_Header {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let tok_id!: INTEGER;
            let context_id!: Random_Integer;
            let int_alg: OPTIONAL<AlgorithmIdentifier>;
            let snd_seq: OPTIONAL<SeqNum>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "tok-id": (_el: _Element): void => {
                    tok_id = $._decodeInteger(_el);
                },
                "context-id": (_el: _Element): void => {
                    context_id = _decode_Random_Integer(_el);
                },
                "int-alg": (_el: _Element): void => {
                    int_alg = $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                "snd-seq": (_el: _Element): void => {
                    snd_seq = $._decode_implicit<SeqNum>(() => _decode_SeqNum)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Mic_Header,
                _extension_additions_list_spec_for_Mic_Header,
                _root_component_type_list_2_spec_for_Mic_Header,
                undefined
            );
            return new Mic_Header(
                /* SEQUENCE_CONSTRUCTOR_CALL */ tok_id,
                context_id,
                int_alg,
                snd_seq
            );
        };
    }
    return _cached_decoder_for_Mic_Header(el);
}
/**
 * @summary Encodes a(n) Mic_Header into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Mic_Header, encoded as an ASN.1 Element.
 */
export function _encode_Mic_Header(
    value: Mic_Header,
    elGetter: $.ASN1Encoder<Mic_Header>
) {
    if (!_cached_encoder_for_Mic_Header) {
        _cached_encoder_for_Mic_Header = function (
            value: Mic_Header,
            elGetter: $.ASN1Encoder<Mic_Header>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.tok_id, $.BER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.context_id,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.int_alg === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AlgorithmIdentifier,
                                  $.BER
                              )(value.int_alg, $.BER),
                        /* IF_ABSENT  */ value.snd_seq === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_SeqNum,
                                  $.BER
                              )(value.snd_seq, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Mic_Header(value, elGetter);
}

/**
 * @summary SPKM_MIC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-MIC ::= SEQUENCE {mic-header  Mic-Header,
 *                        int-cksum   BIT STRING
 * }
 * ```
 *
 * @class
 */
export class SPKM_MIC {
    constructor(
        /**
         * @summary `mic_header`.
         * @public
         * @readonly
         */
        readonly mic_header: Mic_Header,
        /**
         * @summary `int_cksum`.
         * @public
         * @readonly
         */
        readonly int_cksum: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a SPKM_MIC
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_MIC`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_MIC`.
     * @returns {SPKM_MIC}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SPKM_MIC]: SPKM_MIC[_K] }>
    ): SPKM_MIC {
        return new SPKM_MIC(_o.mic_header, _o.int_cksum);
    }
}
/**
 * @summary The Leading Root Component Types of SPKM_MIC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_MIC: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mic-header",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "int-cksum",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SPKM_MIC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_MIC: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SPKM_MIC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_MIC: $.ComponentSpec[] = [];
let _cached_decoder_for_SPKM_MIC: $.ASN1Decoder<SPKM_MIC> | null = null;
let _cached_encoder_for_SPKM_MIC: $.ASN1Encoder<SPKM_MIC> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_MIC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_MIC} The decoded data structure.
 */
export function _decode_SPKM_MIC(el: _Element) {
    if (!_cached_decoder_for_SPKM_MIC) {
        _cached_decoder_for_SPKM_MIC = function (el: _Element): SPKM_MIC {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SPKM-MIC contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "mic-header";
            sequence[1].name = "int-cksum";
            let mic_header!: Mic_Header;
            let int_cksum!: BIT_STRING;
            mic_header = _decode_Mic_Header(sequence[0]);
            int_cksum = $._decodeBitString(sequence[1]);
            return new SPKM_MIC(mic_header, int_cksum);
        };
    }
    return _cached_decoder_for_SPKM_MIC(el);
}
/**
 * @summary Encodes a(n) SPKM_MIC into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_MIC, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_MIC(
    value: SPKM_MIC,
    elGetter: $.ASN1Encoder<SPKM_MIC>
) {
    if (!_cached_encoder_for_SPKM_MIC) {
        _cached_encoder_for_SPKM_MIC = function (
            value: SPKM_MIC,
            elGetter: $.ASN1Encoder<SPKM_MIC>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Mic_Header(
                            value.mic_header,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.int_cksum,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SPKM_MIC(value, elGetter);
}

/**
 * @summary Conf_Alg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Conf-Alg  ::=  CHOICE {
 *   algId  [0]  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   null   [1]  NULL
 * }
 * ```
 */
export type Conf_Alg =
    | { algId: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */
    | { null_: NULL } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_Conf_Alg: $.ASN1Decoder<Conf_Alg> | null = null;
let _cached_encoder_for_Conf_Alg: $.ASN1Encoder<Conf_Alg> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Conf_Alg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Conf_Alg} The decoded data structure.
 */
export function _decode_Conf_Alg(el: _Element) {
    if (!_cached_decoder_for_Conf_Alg) {
        _cached_decoder_for_Conf_Alg = $._decode_inextensible_choice<Conf_Alg>({
            "CONTEXT 0": [
                "algId",
                $._decode_implicit<AlgorithmIdentifier>(
                    () => _decode_AlgorithmIdentifier
                ),
            ],
            "CONTEXT 1": [
                "null_",
                $._decode_implicit<NULL>(() => $._decodeNull),
            ],
        });
    }
    return _cached_decoder_for_Conf_Alg(el);
}
/**
 * @summary Encodes a(n) Conf_Alg into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Conf_Alg, encoded as an ASN.1 Element.
 */
export function _encode_Conf_Alg(
    value: Conf_Alg,
    elGetter: $.ASN1Encoder<Conf_Alg>
) {
    if (!_cached_encoder_for_Conf_Alg) {
        _cached_encoder_for_Conf_Alg = $._encode_choice<Conf_Alg>(
            {
                algId: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AlgorithmIdentifier,
                    $.BER
                ),
                null_: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeNull,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Conf_Alg(value, elGetter);
}

/**
 * @summary Wrap_Header
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Wrap-Header ::= SEQUENCE {
 *   tok-id      INTEGER(513), -- shall contain 0201 (hex)
 *   context-id  Random-Integer,
 *   int-alg     [0]  AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *   conf-alg    [1]  Conf-Alg OPTIONAL,
 *   snd-seq     [2]  SeqNum OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Wrap_Header {
    constructor(
        /**
         * @summary `tok_id`.
         * @public
         * @readonly
         */
        readonly tok_id: INTEGER,
        /**
         * @summary `context_id`.
         * @public
         * @readonly
         */
        readonly context_id: Random_Integer,
        /**
         * @summary `int_alg`.
         * @public
         * @readonly
         */
        readonly int_alg: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `conf_alg`.
         * @public
         * @readonly
         */
        readonly conf_alg: OPTIONAL<Conf_Alg>,
        /**
         * @summary `snd_seq`.
         * @public
         * @readonly
         */
        readonly snd_seq: OPTIONAL<SeqNum>
    ) {}

    /**
     * @summary Restructures an object into a Wrap_Header
     * @description
     *
     * This takes an `object` and converts it to a `Wrap_Header`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Wrap_Header`.
     * @returns {Wrap_Header}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Wrap_Header]: Wrap_Header[_K] }>
    ): Wrap_Header {
        return new Wrap_Header(
            _o.tok_id,
            _o.context_id,
            _o.int_alg,
            _o.conf_alg,
            _o.snd_seq
        );
    }
}
/**
 * @summary The Leading Root Component Types of Wrap_Header
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Wrap_Header: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "tok-id",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "context-id",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "int-alg",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "conf-alg",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "snd-seq",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Wrap_Header
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Wrap_Header: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Wrap_Header
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Wrap_Header: $.ComponentSpec[] = [];
let _cached_decoder_for_Wrap_Header: $.ASN1Decoder<Wrap_Header> | null = null;
let _cached_encoder_for_Wrap_Header: $.ASN1Encoder<Wrap_Header> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Wrap_Header
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Wrap_Header} The decoded data structure.
 */
export function _decode_Wrap_Header(el: _Element) {
    if (!_cached_decoder_for_Wrap_Header) {
        _cached_decoder_for_Wrap_Header = function (el: _Element): Wrap_Header {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let tok_id!: INTEGER;
            let context_id!: Random_Integer;
            let int_alg: OPTIONAL<AlgorithmIdentifier>;
            let conf_alg: OPTIONAL<Conf_Alg>;
            let snd_seq: OPTIONAL<SeqNum>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "tok-id": (_el: _Element): void => {
                    tok_id = $._decodeInteger(_el);
                },
                "context-id": (_el: _Element): void => {
                    context_id = _decode_Random_Integer(_el);
                },
                "int-alg": (_el: _Element): void => {
                    int_alg = $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                "conf-alg": (_el: _Element): void => {
                    conf_alg = $._decode_implicit<Conf_Alg>(
                        () => _decode_Conf_Alg
                    )(_el);
                },
                "snd-seq": (_el: _Element): void => {
                    snd_seq = $._decode_implicit<SeqNum>(() => _decode_SeqNum)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Wrap_Header,
                _extension_additions_list_spec_for_Wrap_Header,
                _root_component_type_list_2_spec_for_Wrap_Header,
                undefined
            );
            return new Wrap_Header(
                /* SEQUENCE_CONSTRUCTOR_CALL */ tok_id,
                context_id,
                int_alg,
                conf_alg,
                snd_seq
            );
        };
    }
    return _cached_decoder_for_Wrap_Header(el);
}
/**
 * @summary Encodes a(n) Wrap_Header into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Wrap_Header, encoded as an ASN.1 Element.
 */
export function _encode_Wrap_Header(
    value: Wrap_Header,
    elGetter: $.ASN1Encoder<Wrap_Header>
) {
    if (!_cached_encoder_for_Wrap_Header) {
        _cached_encoder_for_Wrap_Header = function (
            value: Wrap_Header,
            elGetter: $.ASN1Encoder<Wrap_Header>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.tok_id, $.BER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.context_id,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.int_alg === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AlgorithmIdentifier,
                                  $.BER
                              )(value.int_alg, $.BER),
                        /* IF_ABSENT  */ value.conf_alg === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Conf_Alg,
                                  $.BER
                              )(value.conf_alg, $.BER),
                        /* IF_ABSENT  */ value.snd_seq === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_SeqNum,
                                  $.BER
                              )(value.snd_seq, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Wrap_Header(value, elGetter);
}

/**
 * @summary Wrap_Body
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Wrap-Body ::= SEQUENCE {int-cksum  BIT STRING,
 *                         data       BIT STRING
 * }
 * ```
 *
 * @class
 */
export class Wrap_Body {
    constructor(
        /**
         * @summary `int_cksum`.
         * @public
         * @readonly
         */
        readonly int_cksum: BIT_STRING,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a Wrap_Body
     * @description
     *
     * This takes an `object` and converts it to a `Wrap_Body`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Wrap_Body`.
     * @returns {Wrap_Body}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Wrap_Body]: Wrap_Body[_K] }>
    ): Wrap_Body {
        return new Wrap_Body(_o.int_cksum, _o.data);
    }
}
/**
 * @summary The Leading Root Component Types of Wrap_Body
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Wrap_Body: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "int-cksum",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "data",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Wrap_Body
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Wrap_Body: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Wrap_Body
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Wrap_Body: $.ComponentSpec[] = [];
let _cached_decoder_for_Wrap_Body: $.ASN1Decoder<Wrap_Body> | null = null;
let _cached_encoder_for_Wrap_Body: $.ASN1Encoder<Wrap_Body> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Wrap_Body
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Wrap_Body} The decoded data structure.
 */
export function _decode_Wrap_Body(el: _Element) {
    if (!_cached_decoder_for_Wrap_Body) {
        _cached_decoder_for_Wrap_Body = function (el: _Element): Wrap_Body {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "Wrap-Body contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "int-cksum";
            sequence[1].name = "data";
            let int_cksum!: BIT_STRING;
            let data!: BIT_STRING;
            int_cksum = $._decodeBitString(sequence[0]);
            data = $._decodeBitString(sequence[1]);
            return new Wrap_Body(int_cksum, data);
        };
    }
    return _cached_decoder_for_Wrap_Body(el);
}
/**
 * @summary Encodes a(n) Wrap_Body into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Wrap_Body, encoded as an ASN.1 Element.
 */
export function _encode_Wrap_Body(
    value: Wrap_Body,
    elGetter: $.ASN1Encoder<Wrap_Body>
) {
    if (!_cached_encoder_for_Wrap_Body) {
        _cached_encoder_for_Wrap_Body = function (
            value: Wrap_Body,
            elGetter: $.ASN1Encoder<Wrap_Body>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeBitString(
                            value.int_cksum,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(value.data, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Wrap_Body(value, elGetter);
}

/**
 * @summary SPKM_WRAP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-WRAP ::= SEQUENCE {wrap-header  Wrap-Header,
 *                         wrap-body    Wrap-Body
 * }
 * ```
 *
 * @class
 */
export class SPKM_WRAP {
    constructor(
        /**
         * @summary `wrap_header`.
         * @public
         * @readonly
         */
        readonly wrap_header: Wrap_Header,
        /**
         * @summary `wrap_body`.
         * @public
         * @readonly
         */
        readonly wrap_body: Wrap_Body
    ) {}

    /**
     * @summary Restructures an object into a SPKM_WRAP
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_WRAP`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_WRAP`.
     * @returns {SPKM_WRAP}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SPKM_WRAP]: SPKM_WRAP[_K] }>
    ): SPKM_WRAP {
        return new SPKM_WRAP(_o.wrap_header, _o.wrap_body);
    }
}
/**
 * @summary The Leading Root Component Types of SPKM_WRAP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_WRAP: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "wrap-header",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "wrap-body",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SPKM_WRAP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_WRAP: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SPKM_WRAP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_WRAP: $.ComponentSpec[] = [];
let _cached_decoder_for_SPKM_WRAP: $.ASN1Decoder<SPKM_WRAP> | null = null;
let _cached_encoder_for_SPKM_WRAP: $.ASN1Encoder<SPKM_WRAP> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_WRAP
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_WRAP} The decoded data structure.
 */
export function _decode_SPKM_WRAP(el: _Element) {
    if (!_cached_decoder_for_SPKM_WRAP) {
        _cached_decoder_for_SPKM_WRAP = function (el: _Element): SPKM_WRAP {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SPKM-WRAP contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "wrap-header";
            sequence[1].name = "wrap-body";
            let wrap_header!: Wrap_Header;
            let wrap_body!: Wrap_Body;
            wrap_header = _decode_Wrap_Header(sequence[0]);
            wrap_body = _decode_Wrap_Body(sequence[1]);
            return new SPKM_WRAP(wrap_header, wrap_body);
        };
    }
    return _cached_decoder_for_SPKM_WRAP(el);
}
/**
 * @summary Encodes a(n) SPKM_WRAP into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_WRAP, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_WRAP(
    value: SPKM_WRAP,
    elGetter: $.ASN1Encoder<SPKM_WRAP>
) {
    if (!_cached_encoder_for_SPKM_WRAP) {
        _cached_encoder_for_SPKM_WRAP = function (
            value: SPKM_WRAP,
            elGetter: $.ASN1Encoder<SPKM_WRAP>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Wrap_Header(
                            value.wrap_header,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Wrap_Body(
                            value.wrap_body,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SPKM_WRAP(value, elGetter);
}

/**
 * @summary Del_Header
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Del-Header ::= SEQUENCE {
 *   tok-id      INTEGER(769), -- shall contain 0301 (hex)
 *   context-id  Random-Integer,
 *   int-alg     [0]  AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *   snd-seq     [1]  SeqNum OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Del_Header {
    constructor(
        /**
         * @summary `tok_id`.
         * @public
         * @readonly
         */
        readonly tok_id: INTEGER,
        /**
         * @summary `context_id`.
         * @public
         * @readonly
         */
        readonly context_id: Random_Integer,
        /**
         * @summary `int_alg`.
         * @public
         * @readonly
         */
        readonly int_alg: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `snd_seq`.
         * @public
         * @readonly
         */
        readonly snd_seq: OPTIONAL<SeqNum>
    ) {}

    /**
     * @summary Restructures an object into a Del_Header
     * @description
     *
     * This takes an `object` and converts it to a `Del_Header`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Del_Header`.
     * @returns {Del_Header}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Del_Header]: Del_Header[_K] }>
    ): Del_Header {
        return new Del_Header(_o.tok_id, _o.context_id, _o.int_alg, _o.snd_seq);
    }
}
/**
 * @summary The Leading Root Component Types of Del_Header
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Del_Header: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "tok-id",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "context-id",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "int-alg",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "snd-seq",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Del_Header
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Del_Header: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Del_Header
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Del_Header: $.ComponentSpec[] = [];
let _cached_decoder_for_Del_Header: $.ASN1Decoder<Del_Header> | null = null;
let _cached_encoder_for_Del_Header: $.ASN1Encoder<Del_Header> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Del_Header
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Del_Header} The decoded data structure.
 */
export function _decode_Del_Header(el: _Element) {
    if (!_cached_decoder_for_Del_Header) {
        _cached_decoder_for_Del_Header = function (el: _Element): Del_Header {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let tok_id!: INTEGER;
            let context_id!: Random_Integer;
            let int_alg: OPTIONAL<AlgorithmIdentifier>;
            let snd_seq: OPTIONAL<SeqNum>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "tok-id": (_el: _Element): void => {
                    tok_id = $._decodeInteger(_el);
                },
                "context-id": (_el: _Element): void => {
                    context_id = _decode_Random_Integer(_el);
                },
                "int-alg": (_el: _Element): void => {
                    int_alg = $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                "snd-seq": (_el: _Element): void => {
                    snd_seq = $._decode_implicit<SeqNum>(() => _decode_SeqNum)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Del_Header,
                _extension_additions_list_spec_for_Del_Header,
                _root_component_type_list_2_spec_for_Del_Header,
                undefined
            );
            return new Del_Header(
                /* SEQUENCE_CONSTRUCTOR_CALL */ tok_id,
                context_id,
                int_alg,
                snd_seq
            );
        };
    }
    return _cached_decoder_for_Del_Header(el);
}
/**
 * @summary Encodes a(n) Del_Header into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Del_Header, encoded as an ASN.1 Element.
 */
export function _encode_Del_Header(
    value: Del_Header,
    elGetter: $.ASN1Encoder<Del_Header>
) {
    if (!_cached_encoder_for_Del_Header) {
        _cached_encoder_for_Del_Header = function (
            value: Del_Header,
            elGetter: $.ASN1Encoder<Del_Header>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.tok_id, $.BER),
                        /* REQUIRED   */ _encode_Random_Integer(
                            value.context_id,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.int_alg === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AlgorithmIdentifier,
                                  $.BER
                              )(value.int_alg, $.BER),
                        /* IF_ABSENT  */ value.snd_seq === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_SeqNum,
                                  $.BER
                              )(value.snd_seq, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Del_Header(value, elGetter);
}

/**
 * @summary SPKM_DEL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-DEL ::= SEQUENCE {del-header  Del-Header,
 *                        int-cksum   BIT STRING
 * }
 * ```
 *
 * @class
 */
export class SPKM_DEL {
    constructor(
        /**
         * @summary `del_header`.
         * @public
         * @readonly
         */
        readonly del_header: Del_Header,
        /**
         * @summary `int_cksum`.
         * @public
         * @readonly
         */
        readonly int_cksum: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a SPKM_DEL
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_DEL`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_DEL`.
     * @returns {SPKM_DEL}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SPKM_DEL]: SPKM_DEL[_K] }>
    ): SPKM_DEL {
        return new SPKM_DEL(_o.del_header, _o.int_cksum);
    }
}
/**
 * @summary The Leading Root Component Types of SPKM_DEL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_DEL: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "del-header",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "int-cksum",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SPKM_DEL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_DEL: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SPKM_DEL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_DEL: $.ComponentSpec[] = [];
let _cached_decoder_for_SPKM_DEL: $.ASN1Decoder<SPKM_DEL> | null = null;
let _cached_encoder_for_SPKM_DEL: $.ASN1Encoder<SPKM_DEL> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_DEL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_DEL} The decoded data structure.
 */
export function _decode_SPKM_DEL(el: _Element) {
    if (!_cached_decoder_for_SPKM_DEL) {
        _cached_decoder_for_SPKM_DEL = function (el: _Element): SPKM_DEL {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SPKM-DEL contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "del-header";
            sequence[1].name = "int-cksum";
            let del_header!: Del_Header;
            let int_cksum!: BIT_STRING;
            del_header = _decode_Del_Header(sequence[0]);
            int_cksum = $._decodeBitString(sequence[1]);
            return new SPKM_DEL(del_header, int_cksum);
        };
    }
    return _cached_decoder_for_SPKM_DEL(el);
}
/**
 * @summary Encodes a(n) SPKM_DEL into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_DEL, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_DEL(
    value: SPKM_DEL,
    elGetter: $.ASN1Encoder<SPKM_DEL>
) {
    if (!_cached_encoder_for_SPKM_DEL) {
        _cached_encoder_for_SPKM_DEL = function (
            value: SPKM_DEL,
            elGetter: $.ASN1Encoder<SPKM_DEL>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Del_Header(
                            value.del_header,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.int_cksum,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SPKM_DEL(value, elGetter);
}

/**
 * @summary SPKMInnerContextToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKMInnerContextToken  ::=  CHOICE {
 *   req     [0]  SPKM-REQ,
 *   rep-ti  [1]  SPKM-REP-TI,
 *   rep-it  [2]  SPKM-REP-IT,
 *   error   [3]  SPKM-ERROR,
 *   mic     [4]  SPKM-MIC,
 *   wrap    [5]  SPKM-WRAP,
 *   del     [6]  SPKM-DEL
 * }
 * ```
 */
export type SPKMInnerContextToken =
    | { req: SPKM_REQ } /* CHOICE_ALT_ROOT */
    | { rep_ti: SPKM_REP_TI } /* CHOICE_ALT_ROOT */
    | { rep_it: SPKM_REP_IT } /* CHOICE_ALT_ROOT */
    | { error: SPKM_ERROR } /* CHOICE_ALT_ROOT */
    | { mic: SPKM_MIC } /* CHOICE_ALT_ROOT */
    | { wrap: SPKM_WRAP } /* CHOICE_ALT_ROOT */
    | { del: SPKM_DEL } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_SPKMInnerContextToken: $.ASN1Decoder<
    SPKMInnerContextToken
> | null = null;
let _cached_encoder_for_SPKMInnerContextToken: $.ASN1Encoder<
    SPKMInnerContextToken
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SPKMInnerContextToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKMInnerContextToken} The decoded data structure.
 */
export function _decode_SPKMInnerContextToken(el: _Element) {
    if (!_cached_decoder_for_SPKMInnerContextToken) {
        _cached_decoder_for_SPKMInnerContextToken = $._decode_inextensible_choice<
            SPKMInnerContextToken
        >({
            "CONTEXT 0": [
                "req",
                $._decode_implicit<SPKM_REQ>(() => _decode_SPKM_REQ),
            ],
            "CONTEXT 1": [
                "rep_ti",
                $._decode_implicit<SPKM_REP_TI>(() => _decode_SPKM_REP_TI),
            ],
            "CONTEXT 2": [
                "rep_it",
                $._decode_implicit<SPKM_REP_IT>(() => _decode_SPKM_REP_IT),
            ],
            "CONTEXT 3": [
                "error",
                $._decode_implicit<SPKM_ERROR>(() => _decode_SPKM_ERROR),
            ],
            "CONTEXT 4": [
                "mic",
                $._decode_implicit<SPKM_MIC>(() => _decode_SPKM_MIC),
            ],
            "CONTEXT 5": [
                "wrap",
                $._decode_implicit<SPKM_WRAP>(() => _decode_SPKM_WRAP),
            ],
            "CONTEXT 6": [
                "del",
                $._decode_implicit<SPKM_DEL>(() => _decode_SPKM_DEL),
            ],
        });
    }
    return _cached_decoder_for_SPKMInnerContextToken(el);
}
/**
 * @summary Encodes a(n) SPKMInnerContextToken into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKMInnerContextToken, encoded as an ASN.1 Element.
 */
export function _encode_SPKMInnerContextToken(
    value: SPKMInnerContextToken,
    elGetter: $.ASN1Encoder<SPKMInnerContextToken>
) {
    if (!_cached_encoder_for_SPKMInnerContextToken) {
        _cached_encoder_for_SPKMInnerContextToken = $._encode_choice<
            SPKMInnerContextToken
        >(
            {
                req: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_SPKM_REQ,
                    $.BER
                ),
                rep_ti: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_SPKM_REP_TI,
                    $.BER
                ),
                rep_it: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_SPKM_REP_IT,
                    $.BER
                ),
                error: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_SPKM_ERROR,
                    $.BER
                ),
                mic: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_SPKM_MIC,
                    $.BER
                ),
                wrap: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_SPKM_WRAP,
                    $.BER
                ),
                del: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_SPKM_DEL,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SPKMInnerContextToken(value, elGetter);
}

/**
 * @summary InitialContextToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitialContextToken ::= [APPLICATION 0] IMPLICIT SEQUENCE {
 *   thisMech           MechType,
 *   innerContextToken  SPKMInnerContextToken
 * }
 * ```
 *
 * @class
 */
export class InitialContextToken {
    constructor(
        /**
         * @summary `thisMech`.
         * @public
         * @readonly
         */
        readonly thisMech: MechType,
        /**
         * @summary `innerContextToken`.
         * @public
         * @readonly
         */
        readonly innerContextToken: SPKMInnerContextToken
    ) {}

    /**
     * @summary Restructures an object into a InitialContextToken
     * @description
     *
     * This takes an `object` and converts it to a `InitialContextToken`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitialContextToken`.
     * @returns {InitialContextToken}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof InitialContextToken]: InitialContextToken[_K] }
        >
    ): InitialContextToken {
        return new InitialContextToken(_o.thisMech, _o.innerContextToken);
    }
}
/**
 * @summary The Leading Root Component Types of InitialContextToken
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InitialContextToken: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "thisMech",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "innerContextToken",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of InitialContextToken
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InitialContextToken: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of InitialContextToken
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InitialContextToken: $.ComponentSpec[] = [];
let _cached_decoder_for_InitialContextToken: $.ASN1Decoder<
    InitialContextToken
> | null = null;
let _cached_encoder_for_InitialContextToken: $.ASN1Encoder<
    InitialContextToken
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) InitialContextToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitialContextToken} The decoded data structure.
 */
export function _decode_InitialContextToken(el: _Element) {
    if (!_cached_decoder_for_InitialContextToken) {
        _cached_decoder_for_InitialContextToken = $._decode_implicit<
            InitialContextToken
        >(
            () =>
                function (el: _Element): InitialContextToken {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 2) {
                        throw new _ConstructionError(
                            "InitialContextToken contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "thisMech";
                    sequence[1].name = "innerContextToken";
                    let thisMech!: MechType;
                    let innerContextToken!: SPKMInnerContextToken;
                    thisMech = _decode_MechType(sequence[0]);
                    innerContextToken = _decode_SPKMInnerContextToken(
                        sequence[1]
                    );
                    return new InitialContextToken(thisMech, innerContextToken);
                }
        );
    }
    return _cached_decoder_for_InitialContextToken(el);
}
/**
 * @summary Encodes a(n) InitialContextToken into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitialContextToken, encoded as an ASN.1 Element.
 */
export function _encode_InitialContextToken(
    value: InitialContextToken,
    elGetter: $.ASN1Encoder<InitialContextToken>
) {
    if (!_cached_encoder_for_InitialContextToken) {
        _cached_encoder_for_InitialContextToken = $._encode_implicit(
            _TagClass.application,
            0,
            () =>
                function (
                    value: InitialContextToken,
                    elGetter: $.ASN1Encoder<InitialContextToken>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ _encode_MechType(
                                    value.thisMech,
                                    $.BER
                                ),
                                /* REQUIRED   */ _encode_SPKMInnerContextToken(
                                    value.innerContextToken,
                                    $.BER
                                ),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_InitialContextToken(value, elGetter);
}

/**
 * @summary md5_DES_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * md5-DES-CBC OBJECT IDENTIFIER ::= {iso(1) identified-organization(3) dod(6) internet(1) security(5)
 *    integrity(3) md5-DES-CBC(1)}
 * ```
 *
 * @constant
 */
export const md5_DES_CBC: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* integrity */ 3,
    /* md5-DES-CBC */ 1,
]);

/**
 * @summary sum64_DES_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sum64-DES-CBC OBJECT IDENTIFIER ::= {iso(1) identified-organization(3) dod(6) internet(1) security(5)
 *    integrity(3) sum64-DES-CBC(2)}
 * ```
 *
 * @constant
 */
export const sum64_DES_CBC: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* integrity */ 3,
    /* sum64-DES-CBC */ 2,
]);

/**
 * @summary spkm_1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * spkm-1 OBJECT IDENTIFIER ::= {iso(1) identified-organization(3) dod(6) internet(1) security(5)
 *    mechanisms(5) spkm(1) spkm-1(1)}
 * ```
 *
 * @constant
 */
export const spkm_1: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* spkm */ 1,
    /* spkm-1 */ 1,
]);

/**
 * @summary spkm_2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * spkm-2 OBJECT IDENTIFIER ::= {iso(1) identified-organization(3) dod(6) internet(1) security(5)
 *    mechanisms(5) spkm(1) spkm-2(2)}
 * ```
 *
 * @constant
 */
export const spkm_2: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* spkm */ 1,
    /* spkm-2 */ 2,
]);

/* END_MODULE SpkmGssTokens */
/* eslint-enable */
