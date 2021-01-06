/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertAVL,
    _decode_CertAVL,
    _encode_CertAVL,
} from "../AuthenticationFramework/CertAVL.ta";
import {
    AVMPsequence,
    _decode_AVMPsequence,
    _encode_AVMPsequence,
} from "../PkiPMIProtocolSpecifications/AVMPsequence.ta";
import {
    AVMPversion,
    AVMPversion_v1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_AVMPversion,
    _encode_AVMPversion,
    _enum_for_AVMPversion,
} from "../PkiPMIProtocolSpecifications/AVMPversion.ta";
export {
    CertAVL,
    _decode_CertAVL,
    _encode_CertAVL,
} from "../AuthenticationFramework/CertAVL.ta";
export {
    AVMPcommonComponents,
    _decode_AVMPcommonComponents,
    _encode_AVMPcommonComponents,
} from "../PkiPMIProtocolSpecifications/AVMPcommonComponents.ta";
export {
    AVMPsequence,
    _decode_AVMPsequence,
    _encode_AVMPsequence,
} from "../PkiPMIProtocolSpecifications/AVMPsequence.ta";
export {
    AVMPversion,
    AVMPversion_v1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMPversion_v2 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMPversion_v3 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    v1 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    v2 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    v3 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AVMPversion,
    _encode_AVMPversion,
    _enum_for_AVMPversion,
} from "../PkiPMIProtocolSpecifications/AVMPversion.ta";

/* START_OF_SYMBOL_DEFINITION AddAvlReq */
/**
 * @summary AddAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlReq ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   certlist      CertAVL,
 *   ... }
 * ```
 *
 * @class
 */
export class AddAvlReq {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<AVMPversion> /* REPLICATED_COMPONENT */,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: GeneralizedTime /* REPLICATED_COMPONENT */,
        /**
         * @summary `sequence`.
         * @public
         * @readonly
         */
        readonly sequence: AVMPsequence /* REPLICATED_COMPONENT */,
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
            _o.version,
            _o.timeStamp,
            _o.sequence,
            _o.certlist,
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
        return AVMPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_AVMPversion;
}
/* END_OF_SYMBOL_DEFINITION AddAvlReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddAvlReq */
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
        "version",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "timeStamp",
        false,
        $.hasTag(_TagClass.universal, 24),
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
        "certlist",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddAvlReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddAvlReq */
/**
 * @summary The Trailing Root Component Types of AddAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddAvlReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddAvlReq */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddAvlReq */
/**
 * @summary The Extension Addition Component Types of AddAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddAvlReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddAvlReq */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddAvlReq */
let _cached_decoder_for_AddAvlReq: $.ASN1Decoder<AddAvlReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddAvlReq */

/* START_OF_SYMBOL_DEFINITION _decode_AddAvlReq */
/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlReq} The decoded data structure.
 */
export function _decode_AddAvlReq(el: _Element) {
    if (!_cached_decoder_for_AddAvlReq) {
        _cached_decoder_for_AddAvlReq = function (el: _Element): AddAvlReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<AVMPversion> =
                AddAvlReq._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let certlist!: CertAVL;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AVMPversion(_el);
                },
                timeStamp: (_el: _Element): void => {
                    timeStamp = $._decodeGeneralizedTime(_el);
                },
                sequence: (_el: _Element): void => {
                    sequence = _decode_AVMPsequence(_el);
                },
                certlist: (_el: _Element): void => {
                    certlist = _decode_CertAVL(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AddAvlReq,
                _extension_additions_list_spec_for_AddAvlReq,
                _root_component_type_list_2_spec_for_AddAvlReq,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AddAvlReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                timeStamp,
                sequence,
                certlist,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AddAvlReq(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddAvlReq */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddAvlReq */
let _cached_encoder_for_AddAvlReq: $.ASN1Encoder<AddAvlReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddAvlReq */

/* START_OF_SYMBOL_DEFINITION _encode_AddAvlReq */
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
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                AddAvlReq._default_value_for_version
                            )
                                ? undefined
                                : _encode_AVMPversion(value.version, $.BER),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.timeStamp,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMPsequence(
                                value.sequence,
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

/* END_OF_SYMBOL_DEFINITION _encode_AddAvlReq */

/* eslint-enable */
