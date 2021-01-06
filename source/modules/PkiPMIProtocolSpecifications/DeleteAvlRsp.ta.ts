/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
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
import {
    DeleteAvlRsp_result,
    _decode_DeleteAvlRsp_result,
    _encode_DeleteAvlRsp_result,
} from "../PkiPMIProtocolSpecifications/DeleteAvlRsp-result.ta";
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
export {
    DeleteAvlRsp_result,
    _decode_DeleteAvlRsp_result,
    _encode_DeleteAvlRsp_result,
} from "../PkiPMIProtocolSpecifications/DeleteAvlRsp-result.ta";

/* START_OF_SYMBOL_DEFINITION DeleteAvlRsp */
/**
 * @summary DeleteAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteAvlRsp ::= SEQUENCE {
 *   COMPONENTS OF AVMPcommonComponents,
 *   result        CHOICE {
 *     success       [0]  DelAvlOK,
 *     failure       [1]  DelAvlErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class DeleteAvlRsp {
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
            _o.version,
            _o.timeStamp,
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
        return AVMPversion_v1;
    }
    /**
     * @summary The enum used as the type of the component `version`
     * @public
     * @static
     */

    public static _enum_for_version = _enum_for_AVMPversion;
}
/* END_OF_SYMBOL_DEFINITION DeleteAvlRsp */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeleteAvlRsp */
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
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeleteAvlRsp */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeleteAvlRsp */
/**
 * @summary The Trailing Root Component Types of DeleteAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteAvlRsp: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeleteAvlRsp */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeleteAvlRsp */
/**
 * @summary The Extension Addition Component Types of DeleteAvlRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteAvlRsp: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeleteAvlRsp */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteAvlRsp */
let _cached_decoder_for_DeleteAvlRsp: $.ASN1Decoder<DeleteAvlRsp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteAvlRsp */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteAvlRsp */
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
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<AVMPversion> =
                DeleteAvlRsp._default_value_for_version;
            let timeStamp!: GeneralizedTime;
            let sequence!: AVMPsequence;
            let result!: DeleteAvlRsp_result;
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
                result: (_el: _Element): void => {
                    result = _decode_DeleteAvlRsp_result(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeleteAvlRsp,
                _extension_additions_list_spec_for_DeleteAvlRsp,
                _root_component_type_list_2_spec_for_DeleteAvlRsp,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DeleteAvlRsp(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                timeStamp,
                sequence,
                result,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DeleteAvlRsp(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteAvlRsp */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteAvlRsp */
let _cached_encoder_for_DeleteAvlRsp: $.ASN1Encoder<DeleteAvlRsp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteAvlRsp */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteAvlRsp */
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
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                DeleteAvlRsp._default_value_for_version
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

/* END_OF_SYMBOL_DEFINITION _encode_DeleteAvlRsp */

/* eslint-enable */
