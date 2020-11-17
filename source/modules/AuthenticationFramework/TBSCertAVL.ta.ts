/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
import {
    AvlSerialNumber,
    _decode_AvlSerialNumber,
    _encode_AvlSerialNumber,
} from "../AuthenticationFramework/AvlSerialNumber.ta";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "../AuthenticationFramework/Extensions.ta";
import {
    TBSCertAVL_entries_Item,
    _decode_TBSCertAVL_entries_Item,
    _encode_TBSCertAVL_entries_Item,
} from "../AuthenticationFramework/TBSCertAVL-entries-Item.ta";
import {
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    Version,
    _decode_Version,
    _encode_Version,
} from "../AuthenticationFramework/Version.ta";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
export {
    AvlSerialNumber,
    _decode_AvlSerialNumber,
    _encode_AvlSerialNumber,
} from "../AuthenticationFramework/AvlSerialNumber.ta";
export {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "../AuthenticationFramework/Extensions.ta";
export {
    TBSCertAVL_entries_Item,
    _decode_TBSCertAVL_entries_Item,
    _encode_TBSCertAVL_entries_Item,
} from "../AuthenticationFramework/TBSCertAVL-entries-Item.ta";
export {
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v2 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v3 /* IMPORTED_SHORT_NAMED_INTEGER */,
    Version,
    Version_v1 /* IMPORTED_LONG_NAMED_INTEGER */,
    Version_v2 /* IMPORTED_LONG_NAMED_INTEGER */,
    Version_v3 /* IMPORTED_LONG_NAMED_INTEGER */,
    _decode_Version,
    _encode_Version,
} from "../AuthenticationFramework/Version.ta";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";

/* START_OF_SYMBOL_DEFINITION TBSCertAVL */
/**
 * @summary TBSCertAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSCertAVL ::= SEQUENCE {
 *   version               [0]  IMPLICIT Version DEFAULT v1,
 *   serialNumber               AvlSerialNumber OPTIONAL,
 *   signature                  AlgorithmIdentifier {{SupportedAlgorithms}},
 *   issuer                     Name,
 *   constrained                BOOLEAN,
 *   entries                    SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     idType                     CHOICE {
 *       certIdentifier        [0]  PKCertIdentifier,
 *       entityGroup                DistinguishedName, -- only for constrained = FALSE
 *       ... },
 *     entryExtensions       [1]  IMPLICIT Extensions OPTIONAL,
 *     ... },
 *   ...,
 *   ...,
 *   avlExtensions              Extensions OPTIONAL }
 * ```
 *
 * @class
 */
export class TBSCertAVL {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: OPTIONAL<AvlSerialNumber>,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: AlgorithmIdentifier,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `constrained`.
         * @public
         * @readonly
         */
        readonly constrained: BOOLEAN,
        /**
         * @summary `entries`.
         * @public
         * @readonly
         */
        readonly entries: TBSCertAVL_entries_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `avlExtensions`.
         * @public
         * @readonly
         */
        readonly avlExtensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a TBSCertAVL
     * @description
     *
     * This takes an `object` and converts it to a `TBSCertAVL`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSCertAVL`.
     * @returns {TBSCertAVL}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TBSCertAVL]: TBSCertAVL[_K] }>
    ): TBSCertAVL {
        return new TBSCertAVL(
            _o.version,
            _o.serialNumber,
            _o.signature,
            _o.issuer,
            _o.constrained,
            _o.entries,
            _o._unrecognizedExtensionsList,
            _o.avlExtensions
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return v1;
    }
}
/* END_OF_SYMBOL_DEFINITION TBSCertAVL */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSCertAVL */
/**
 * @summary The Leading Root Component Types of TBSCertAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSCertAVL: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serialNumber",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "constrained",
        false,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entries",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSCertAVL */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSCertAVL */
/**
 * @summary The Trailing Root Component Types of TBSCertAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSCertAVL: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "avlExtensions",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSCertAVL */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSCertAVL */
/**
 * @summary The Extension Addition Component Types of TBSCertAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSCertAVL: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSCertAVL */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSCertAVL */
let _cached_decoder_for_TBSCertAVL: $.ASN1Decoder<TBSCertAVL> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSCertAVL */

/* START_OF_SYMBOL_DEFINITION _decode_TBSCertAVL */
/**
 * @summary Decodes an ASN.1 element into a(n) TBSCertAVL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSCertAVL} The decoded data structure.
 */
export function _decode_TBSCertAVL(el: _Element) {
    if (!_cached_decoder_for_TBSCertAVL) {
        _cached_decoder_for_TBSCertAVL = function (el: _Element): TBSCertAVL {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<Version> =
                TBSCertAVL._default_value_for_version;
            let serialNumber: OPTIONAL<AvlSerialNumber>;
            let signature!: AlgorithmIdentifier;
            let issuer!: Name;
            let constrained!: BOOLEAN;
            let entries!: TBSCertAVL_entries_Item[];
            let _unrecognizedExtensionsList: _Element[] = [];
            let avlExtensions: OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = $._decode_explicit<Version>(
                        () => _decode_Version
                    )(_el);
                },
                serialNumber: (_el: _Element): void => {
                    serialNumber = _decode_AvlSerialNumber(_el);
                },
                signature: (_el: _Element): void => {
                    signature = _decode_AlgorithmIdentifier(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = _decode_Name(_el);
                },
                constrained: (_el: _Element): void => {
                    constrained = $._decodeBoolean(_el);
                },
                entries: (_el: _Element): void => {
                    entries = $._decodeSequenceOf<TBSCertAVL_entries_Item>(
                        () => _decode_TBSCertAVL_entries_Item
                    )(_el);
                },
                avlExtensions: (_el: _Element): void => {
                    avlExtensions = _decode_Extensions(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBSCertAVL,
                _extension_additions_list_spec_for_TBSCertAVL,
                _root_component_type_list_2_spec_for_TBSCertAVL,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBSCertAVL /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                serialNumber,
                signature,
                issuer,
                constrained,
                entries,
                _unrecognizedExtensionsList,
                avlExtensions
            );
        };
    }
    return _cached_decoder_for_TBSCertAVL(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TBSCertAVL */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSCertAVL */
let _cached_encoder_for_TBSCertAVL: $.ASN1Encoder<TBSCertAVL> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSCertAVL */

/* START_OF_SYMBOL_DEFINITION _encode_TBSCertAVL */
/**
 * @summary Encodes a(n) TBSCertAVL into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCertAVL, encoded as an ASN.1 Element.
 */
export function _encode_TBSCertAVL(
    value: TBSCertAVL,
    elGetter: $.ASN1Encoder<TBSCertAVL>
) {
    if (!_cached_encoder_for_TBSCertAVL) {
        _cached_encoder_for_TBSCertAVL = function (
            value: TBSCertAVL,
            elGetter: $.ASN1Encoder<TBSCertAVL>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                TBSCertAVL._default_value_for_version
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Version,
                                      $.BER
                                  )(value.version, $.BER),
                            /* IF_ABSENT  */ value.serialNumber === undefined
                                ? undefined
                                : _encode_AvlSerialNumber(
                                      value.serialNumber,
                                      $.BER
                                  ),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.signature,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
                            /* REQUIRED   */ $._encodeBoolean(
                                value.constrained,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<
                                TBSCertAVL_entries_Item
                            >(() => _encode_TBSCertAVL_entries_Item, $.BER)(
                                value.entries,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.avlExtensions === undefined
                                ? undefined
                                : _encode_Extensions(
                                      value.avlExtensions,
                                      $.BER
                                  ),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TBSCertAVL(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TBSCertAVL */

/* eslint-enable */
