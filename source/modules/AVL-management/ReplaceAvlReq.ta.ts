/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../AVL-management/InvokeID.ta";
import {
    AvlSerialNumber,
    _decode_AvlSerialNumber,
    _encode_AvlSerialNumber,
} from "../PKI-Stub/AvlSerialNumber.ta";
import {
    CertAVL,
    _decode_CertAVL,
    _encode_CertAVL,
} from "../PKI-Stub/CertAVL.ta";
export {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../AVL-management/InvokeID.ta";
export {
    AvlSerialNumber,
    _decode_AvlSerialNumber,
    _encode_AvlSerialNumber,
} from "../PKI-Stub/AvlSerialNumber.ta";
export {
    CertAVL,
    _decode_CertAVL,
    _encode_CertAVL,
} from "../PKI-Stub/CertAVL.ta";

/* START_OF_SYMBOL_DEFINITION ReplaceAvlReq */
/**
 * @summary ReplaceAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplaceAvlReq ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   old          AvlSerialNumber OPTIONAL,
 *   new          CertAVL,
 *   ... }
 * ```
 *
 * @class
 */
export class ReplaceAvlReq {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `old`.
         * @public
         * @readonly
         */
        readonly old: OPTIONAL<AvlSerialNumber>,
        /**
         * @summary `new_`.
         * @public
         * @readonly
         */
        readonly new_: CertAVL,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReplaceAvlReq
     * @description
     *
     * This takes an `object` and converts it to a `ReplaceAvlReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReplaceAvlReq`.
     * @returns {ReplaceAvlReq}
     */
    public static _from_object(
        _o: { [_K in keyof ReplaceAvlReq]: ReplaceAvlReq[_K] }
    ): ReplaceAvlReq {
        return new ReplaceAvlReq(
            _o.invokeID,
            _o.old,
            _o.new_,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ReplaceAvlReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReplaceAvlReq */
/**
 * @summary The Leading Root Component Types of ReplaceAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReplaceAvlReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "old",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "new",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReplaceAvlReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReplaceAvlReq */
/**
 * @summary The Trailing Root Component Types of ReplaceAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReplaceAvlReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReplaceAvlReq */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReplaceAvlReq */
/**
 * @summary The Extension Addition Component Types of ReplaceAvlReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReplaceAvlReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReplaceAvlReq */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplaceAvlReq */
let _cached_decoder_for_ReplaceAvlReq: $.ASN1Decoder<ReplaceAvlReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplaceAvlReq */

/* START_OF_SYMBOL_DEFINITION _decode_ReplaceAvlReq */
/**
 * @summary Decodes an ASN.1 element into a(n) ReplaceAvlReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplaceAvlReq} The decoded data structure.
 */
export function _decode_ReplaceAvlReq(el: _Element) {
    if (!_cached_decoder_for_ReplaceAvlReq) {
        _cached_decoder_for_ReplaceAvlReq = function (
            el: _Element
        ): ReplaceAvlReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokeID!: InvokeID;
            let old: OPTIONAL<AvlSerialNumber>;
            let new_!: CertAVL;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                invokeID: (_el: _Element): void => {
                    invokeID = _decode_InvokeID(_el);
                },
                old: (_el: _Element): void => {
                    old = _decode_AvlSerialNumber(_el);
                },
                new: (_el: _Element): void => {
                    new_ = _decode_CertAVL(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReplaceAvlReq,
                _extension_additions_list_spec_for_ReplaceAvlReq,
                _root_component_type_list_2_spec_for_ReplaceAvlReq,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ReplaceAvlReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ invokeID,
                old,
                new_,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ReplaceAvlReq(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReplaceAvlReq */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplaceAvlReq */
let _cached_encoder_for_ReplaceAvlReq: $.ASN1Encoder<ReplaceAvlReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplaceAvlReq */

/* START_OF_SYMBOL_DEFINITION _encode_ReplaceAvlReq */
/**
 * @summary Encodes a(n) ReplaceAvlReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplaceAvlReq, encoded as an ASN.1 Element.
 */
export function _encode_ReplaceAvlReq(
    value: ReplaceAvlReq,
    elGetter: $.ASN1Encoder<ReplaceAvlReq>
) {
    if (!_cached_encoder_for_ReplaceAvlReq) {
        _cached_encoder_for_ReplaceAvlReq = function (
            value: ReplaceAvlReq,
            elGetter: $.ASN1Encoder<ReplaceAvlReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.old === undefined
                                ? undefined
                                : _encode_AvlSerialNumber(value.old, $.BER),
                            /* REQUIRED   */ _encode_CertAVL(value.new_, $.BER),
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
    return _cached_encoder_for_ReplaceAvlReq(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReplaceAvlReq */

/* eslint-enable */
