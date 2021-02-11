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
    CASPversion_v1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_CASPversion,
    _encode_CASPversion,
    _enum_for_CASPversion,
} from "../PkiPMIProtocolSpecifications/CASPversion.ta";
import {
    CertSubscribeRsp_result,
    _decode_CertSubscribeRsp_result,
    _encode_CertSubscribeRsp_result,
} from "../PkiPMIProtocolSpecifications/CertSubscribeRsp-result.ta";
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
    CASPversion_v1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASPversion_v2 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASPversion_v3 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    v1 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    v2 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    v3 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_CASPversion,
    _encode_CASPversion,
    _enum_for_CASPversion,
} from "../PkiPMIProtocolSpecifications/CASPversion.ta";
export {
    CertSubscribeRsp_result,
    _decode_CertSubscribeRsp_result,
    _encode_CertSubscribeRsp_result,
} from "../PkiPMIProtocolSpecifications/CertSubscribeRsp-result.ta";

/* START_OF_SYMBOL_DEFINITION CertSubscribeRsp */
/**
 * @summary CertSubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeRsp ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
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
        _o: { [_K in keyof CertSubscribeRsp]: CertSubscribeRsp[_K] }
    ): CertSubscribeRsp {
        return new CertSubscribeRsp(
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
/* END_OF_SYMBOL_DEFINITION CertSubscribeRsp */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertSubscribeRsp */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertSubscribeRsp */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertSubscribeRsp */
/**
 * @summary The Trailing Root Component Types of CertSubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeRsp: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertSubscribeRsp */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertSubscribeRsp */
/**
 * @summary The Extension Addition Component Types of CertSubscribeRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeRsp: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertSubscribeRsp */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeRsp */
let _cached_decoder_for_CertSubscribeRsp: $.ASN1Decoder<CertSubscribeRsp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeRsp */

/* START_OF_SYMBOL_DEFINITION _decode_CertSubscribeRsp */
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
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<CASPversion> =
                CertSubscribeRsp._default_value_for_version;
            let sequence!: CASPsequence;
            let result!: CertSubscribeRsp_result;
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
                    result = _decode_CertSubscribeRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertSubscribeRsp,
                _extension_additions_list_spec_for_CertSubscribeRsp,
                _root_component_type_list_2_spec_for_CertSubscribeRsp,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertSubscribeRsp(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sequence,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertSubscribeRsp(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertSubscribeRsp */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeRsp */
let _cached_encoder_for_CertSubscribeRsp: $.ASN1Encoder<CertSubscribeRsp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeRsp */

/* START_OF_SYMBOL_DEFINITION _encode_CertSubscribeRsp */
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
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                CertSubscribeRsp._default_value_for_version
                            )
                                ? undefined
                                : _encode_CASPversion(value.version, $.BER),
                            /* REQUIRED   */ _encode_CASPsequence(
                                value.sequence,
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

/* END_OF_SYMBOL_DEFINITION _encode_CertSubscribeRsp */

/* eslint-enable */
