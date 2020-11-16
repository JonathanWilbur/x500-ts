/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../AVL_management/InvokeID.ta";
export {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../AVL_management/InvokeID.ta";

/* START_OF_SYMBOL_DEFINITION CertReq */
/**
 * @summary CertReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReq ::= SEQUENCE {
 *   invokeID  InvokeID,
 *   ... }
 * ```
 *
 * @class
 */
export class CertReq {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReq
     * @description
     *
     * This takes an `object` and converts it to a `CertReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReq`.
     * @returns {CertReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertReq]: CertReq[_K] }>
    ): CertReq {
        return new CertReq(_o.invokeID, _o._unrecognizedExtensionsList);
    }
}
/* END_OF_SYMBOL_DEFINITION CertReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertReq */
/**
 * @summary The Leading Root Component Types of CertReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertReq */
/**
 * @summary The Trailing Root Component Types of CertReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertReq */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertReq */
/**
 * @summary The Extension Addition Component Types of CertReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertReq */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReq */
let _cached_decoder_for_CertReq: $.ASN1Decoder<CertReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReq */

/* START_OF_SYMBOL_DEFINITION _decode_CertReq */
/**
 * @summary Decodes an ASN.1 element into a(n) CertReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReq} The decoded data structure.
 */
export function _decode_CertReq(el: _Element) {
    if (!_cached_decoder_for_CertReq) {
        _cached_decoder_for_CertReq = function (el: _Element): CertReq {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertReq contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            let invokeID!: InvokeID;
            invokeID = _decode_InvokeID(sequence[0]);
            return new CertReq(invokeID, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertReq(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertReq */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReq */
let _cached_encoder_for_CertReq: $.ASN1Encoder<CertReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReq */

/* START_OF_SYMBOL_DEFINITION _encode_CertReq */
/**
 * @summary Encodes a(n) CertReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReq, encoded as an ASN.1 Element.
 */
export function _encode_CertReq(
    value: CertReq,
    elGetter: $.ASN1Encoder<CertReq>
) {
    if (!_cached_encoder_for_CertReq) {
        _cached_encoder_for_CertReq = function (
            value: CertReq,
            elGetter: $.ASN1Encoder<CertReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
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
    return _cached_encoder_for_CertReq(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertReq */

/* eslint-enable */
