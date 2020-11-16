/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertSubscribeRsp_result,
    _decode_CertSubscribeRsp_result,
    _encode_CertSubscribeRsp_result,
} from "../CaSubscription/CertSubscribeRsp-result.ta";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../CaSubscription/InvokeID.ta";
export {
    CertSubscribeRsp_result,
    _decode_CertSubscribeRsp_result,
    _encode_CertSubscribeRsp_result,
} from "../CaSubscription/CertSubscribeRsp-result.ta";
export {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../CaSubscription/InvokeID.ta";

/* START_OF_SYMBOL_DEFINITION CertSubscribeRsp */
/**
 * @summary CertSubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
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
        _o: Partial<{ [_K in keyof CertSubscribeRsp]: CertSubscribeRsp[_K] }>
    ): CertSubscribeRsp {
        return new CertSubscribeRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
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
        "invokeID",
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
let _cached_decoder_for_CertSubscribeRsp: $.ASN1Decoder<
    CertSubscribeRsp
> | null = null;
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
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertSubscribeRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: CertSubscribeRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_CertSubscribeRsp_result(sequence[1]);
            return new CertSubscribeRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertSubscribeRsp(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertSubscribeRsp */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeRsp */
let _cached_encoder_for_CertSubscribeRsp: $.ASN1Encoder<
    CertSubscribeRsp
> | null = null;
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
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
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
