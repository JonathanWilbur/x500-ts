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
    CertUnsubscribeRsp_result,
    _decode_CertUnsubscribeRsp_result,
    _encode_CertUnsubscribeRsp_result,
} from "../PkiPMIProtocolSpecifications/CertUnsubscribeRsp-result.ta";
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
    CertUnsubscribeRsp_result,
    _decode_CertUnsubscribeRsp_result,
    _encode_CertUnsubscribeRsp_result,
} from "../PkiPMIProtocolSpecifications/CertUnsubscribeRsp-result.ta";

/* START_OF_SYMBOL_DEFINITION CertUnsubscribeRsp */
/**
 * @summary CertUnsubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeRsp ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
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
            _o.version,
            _o.sequence,
            _o.result,
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
/* END_OF_SYMBOL_DEFINITION CertUnsubscribeRsp */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertUnsubscribeRsp */
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
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertUnsubscribeRsp */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertUnsubscribeRsp */
/**
 * @summary The Trailing Root Component Types of CertUnsubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeRsp: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertUnsubscribeRsp */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertUnsubscribeRsp */
/**
 * @summary The Extension Addition Component Types of CertUnsubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeRsp: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertUnsubscribeRsp */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUnsubscribeRsp */
let _cached_decoder_for_CertUnsubscribeRsp: $.ASN1Decoder<
    CertUnsubscribeRsp
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUnsubscribeRsp */

/* START_OF_SYMBOL_DEFINITION _decode_CertUnsubscribeRsp */
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
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                CertUnsubscribeRsp._default_value_for_version;
            let sequence!: CASPsequence;
            let result!: CertUnsubscribeRsp_result;
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
                result: (_el: _Element): void => {
                    result = _decode_CertUnsubscribeRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertUnsubscribeRsp,
                _extension_additions_list_spec_for_CertUnsubscribeRsp,
                _root_component_type_list_2_spec_for_CertUnsubscribeRsp,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertUnsubscribeRsp /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                sequence,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertUnsubscribeRsp(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertUnsubscribeRsp */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUnsubscribeRsp */
let _cached_encoder_for_CertUnsubscribeRsp: $.ASN1Encoder<
    CertUnsubscribeRsp
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUnsubscribeRsp */

/* START_OF_SYMBOL_DEFINITION _encode_CertUnsubscribeRsp */
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
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertUnsubscribeRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.BER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
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

/* END_OF_SYMBOL_DEFINITION _encode_CertUnsubscribeRsp */

/* eslint-enable */
