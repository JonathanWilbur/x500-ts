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
    CertSubscribeReq_certs_Item,
    _decode_CertSubscribeReq_certs_Item,
    _encode_CertSubscribeReq_certs_Item,
} from "../PkiPMIProtocolSpecifications/CertSubscribeReq-certs-Item.ta";
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
    CertSubscribeReq_certs_Item,
    _decode_CertSubscribeReq_certs_Item,
    _encode_CertSubscribeReq_certs_Item,
} from "../PkiPMIProtocolSpecifications/CertSubscribeReq-certs-Item.ta";

/* START_OF_SYMBOL_DEFINITION CertSubscribeReq */
/**
 * @summary CertSubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeReq ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   certs   SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
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
/* END_OF_SYMBOL_DEFINITION CertSubscribeReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertSubscribeReq */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertSubscribeReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertSubscribeReq */
/**
 * @summary The Trailing Root Component Types of CertSubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertSubscribeReq */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertSubscribeReq */
/**
 * @summary The Extension Addition Component Types of CertSubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertSubscribeReq */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeReq */
let _cached_decoder_for_CertSubscribeReq: $.ASN1Decoder<
    CertSubscribeReq
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeReq */

/* START_OF_SYMBOL_DEFINITION _decode_CertSubscribeReq */
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
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                CertSubscribeReq._default_value_for_version;
            let sequence!: CASPsequence;
            let certs!: CertSubscribeReq_certs_Item[];
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
                    certs = $._decodeSequenceOf<CertSubscribeReq_certs_Item>(
                        () => _decode_CertSubscribeReq_certs_Item
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertSubscribeReq,
                _extension_additions_list_spec_for_CertSubscribeReq,
                _root_component_type_list_2_spec_for_CertSubscribeReq,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertSubscribeReq /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                sequence,
                certs,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertSubscribeReq(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertSubscribeReq */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeReq */
let _cached_encoder_for_CertSubscribeReq: $.ASN1Encoder<
    CertSubscribeReq
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeReq */

/* START_OF_SYMBOL_DEFINITION _encode_CertSubscribeReq */
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
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertSubscribeReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.BER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
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

/* END_OF_SYMBOL_DEFINITION _encode_CertSubscribeReq */

/* eslint-enable */
