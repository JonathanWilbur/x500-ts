/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CASPsequence,
    _decode_CASPsequence,
    _encode_CASPsequence,
} from "../PkiPMIProtocolSpecifications/CASPsequence.ta";
import {
    CASPversion,
    CASPversion_v1 /* IMPORTED_ENUMERATION_ITEM */,
    _decode_CASPversion,
    _encode_CASPversion,
    _enum_for_CASPversion,
} from "../PkiPMIProtocolSpecifications/CASPversion.ta";
import {
    CertReplaceReq_certs_Item,
    _decode_CertReplaceReq_certs_Item,
    _encode_CertReplaceReq_certs_Item,
} from "../PkiPMIProtocolSpecifications/CertReplaceReq-certs-Item.ta";
export {
    CASPcommonComponents,
    _decode_CASPcommonComponents,
    _encode_CASPcommonComponents,
} from "../PkiPMIProtocolSpecifications/CASPcommonComponents.ta";
export {
    CASPsequence,
    _decode_CASPsequence,
    _encode_CASPsequence,
} from "../PkiPMIProtocolSpecifications/CASPsequence.ta";
export {
    CASPversion,
    CASPversion_v1 /* IMPORTED_ENUMERATION_ITEM */,
    CASPversion_v2 /* IMPORTED_ENUMERATION_ITEM */,
    CASPversion_v3 /* IMPORTED_ENUMERATION_ITEM */,
    _decode_CASPversion,
    _encode_CASPversion,
    _enum_for_CASPversion,
} from "../PkiPMIProtocolSpecifications/CASPversion.ta";
export {
    CertReplaceReq_certs_Item,
    _decode_CertReplaceReq_certs_Item,
    _encode_CertReplaceReq_certs_Item,
} from "../PkiPMIProtocolSpecifications/CertReplaceReq-certs-Item.ta";

/* START_OF_SYMBOL_DEFINITION CertReplaceReq */
/**
 * @summary CertReplaceReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceReq ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
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
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<CASPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: CASPsequence /* REPLICATED_COMPONENT */,
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
            _o.version,
            _o.sequence,
            _o.certs,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return CASPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_CASPversion;
}
/* END_OF_SYMBOL_DEFINITION CertReplaceReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertReplaceReq */
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
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sequence",
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertReplaceReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertReplaceReq */
/**
 * @summary The Trailing Root Component Types of CertReplaceReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertReplaceReq */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertReplaceReq */
/**
 * @summary The Extension Addition Component Types of CertReplaceReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertReplaceReq */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceReq */
let _cached_decoder_for_CertReplaceReq: $.ASN1Decoder<
    CertReplaceReq
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceReq */

/* START_OF_SYMBOL_DEFINITION _decode_CertReplaceReq */
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
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                CertReplaceReq._default_value_for_version;
            let sequence!: CASPsequence;
            let certs!: CertReplaceReq_certs_Item[];
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CASPversion(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_CASPsequence(_el);
                },
                certs: (_el: _Element): void => {
                    certs = $._decodeSequenceOf<CertReplaceReq_certs_Item>(
                        () => _decode_CertReplaceReq_certs_Item
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertReplaceReq,
                _extension_additions_list_spec_for_CertReplaceReq,
                _root_component_type_list_2_spec_for_CertReplaceReq,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertReplaceReq /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                sequence,
                certs,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertReplaceReq(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertReplaceReq */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceReq */
let _cached_encoder_for_CertReplaceReq: $.ASN1Encoder<
    CertReplaceReq
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceReq */

/* START_OF_SYMBOL_DEFINITION _encode_CertReplaceReq */
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
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertReplaceReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.BER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
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

/* END_OF_SYMBOL_DEFINITION _encode_CertReplaceReq */

/* eslint-enable */
