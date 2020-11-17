/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertRsp_result,
    _decode_CertRsp_result,
    _encode_CertRsp_result,
} from "../AVL-management/CertRsp-result.ta";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../AVL-management/InvokeID.ta";
export {
    CertRsp_result,
    _decode_CertRsp_result,
    _encode_CertRsp_result,
} from "../AVL-management/CertRsp-result.ta";
export {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../AVL-management/InvokeID.ta";

/* START_OF_SYMBOL_DEFINITION CertRsp */
/**
 * @summary CertRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   result       CHOICE {
 *     success [0]  CertOK,
 *     failure [1]  CertErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertRsp {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: CertRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertRsp`.
     * @returns {CertRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertRsp]: CertRsp[_K] }>
    ): CertRsp {
        return new CertRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CertRsp */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertRsp */
/**
 * @summary The Leading Root Component Types of CertRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertRsp */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertRsp */
/**
 * @summary The Trailing Root Component Types of CertRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertRsp: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertRsp */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertRsp */
/**
 * @summary The Extension Addition Component Types of CertRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertRsp: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertRsp */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertRsp */
let _cached_decoder_for_CertRsp: $.ASN1Decoder<CertRsp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertRsp */

/* START_OF_SYMBOL_DEFINITION _decode_CertRsp */
/**
 * @summary Decodes an ASN.1 element into a(n) CertRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertRsp} The decoded data structure.
 */
export function _decode_CertRsp(el: _Element) {
    if (!_cached_decoder_for_CertRsp) {
        _cached_decoder_for_CertRsp = function (el: _Element): CertRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: CertRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_CertRsp_result(sequence[1]);
            return new CertRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertRsp(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertRsp */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertRsp */
let _cached_encoder_for_CertRsp: $.ASN1Encoder<CertRsp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertRsp */

/* START_OF_SYMBOL_DEFINITION _encode_CertRsp */
/**
 * @summary Encodes a(n) CertRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertRsp(
    value: CertRsp,
    elGetter: $.ASN1Encoder<CertRsp>
) {
    if (!_cached_encoder_for_CertRsp) {
        _cached_encoder_for_CertRsp = function (
            value: CertRsp,
            elGetter: $.ASN1Encoder<CertRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertRsp_result(
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
    return _cached_encoder_for_CertRsp(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertRsp */

/* eslint-enable */
