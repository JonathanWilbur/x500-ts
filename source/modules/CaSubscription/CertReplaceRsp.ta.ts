/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertReplaceRsp_result,
    _decode_CertReplaceRsp_result,
    _encode_CertReplaceRsp_result,
} from "../CaSubscription/CertReplaceRsp-result.ta";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../CaSubscription/InvokeID.ta";
export {
    CertReplaceRsp_result,
    _decode_CertReplaceRsp_result,
    _encode_CertReplaceRsp_result,
} from "../CaSubscription/CertReplaceRsp-result.ta";
export {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../CaSubscription/InvokeID.ta";

/* START_OF_SYMBOL_DEFINITION CertReplaceRsp */
/**
 * @summary CertReplaceRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   result        CHOICE {
 *     success       [0]  CertReplaceOK,
 *     failure       [1]  CertReplaceErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertReplaceRsp {
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
        readonly result: CertReplaceRsp_result,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceRsp
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceRsp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceRsp`.
     * @returns {CertReplaceRsp}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertReplaceRsp]: CertReplaceRsp[_K] }>
    ): CertReplaceRsp {
        return new CertReplaceRsp(
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CertReplaceRsp */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertReplaceRsp */
/**
 * @summary The Leading Root Component Types of CertReplaceRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceRsp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertReplaceRsp */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertReplaceRsp */
/**
 * @summary The Trailing Root Component Types of CertReplaceRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceRsp: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertReplaceRsp */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertReplaceRsp */
/**
 * @summary The Extension Addition Component Types of CertReplaceRsp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceRsp: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertReplaceRsp */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceRsp */
let _cached_decoder_for_CertReplaceRsp: $.ASN1Decoder<
    CertReplaceRsp
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceRsp */

/* START_OF_SYMBOL_DEFINITION _decode_CertReplaceRsp */
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceRsp} The decoded data structure.
 */
export function _decode_CertReplaceRsp(el: _Element) {
    if (!_cached_decoder_for_CertReplaceRsp) {
        _cached_decoder_for_CertReplaceRsp = function (
            el: _Element
        ): CertReplaceRsp {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertReplaceRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: CertReplaceRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_CertReplaceRsp_result(sequence[1]);
            return new CertReplaceRsp(invokeID, result, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertReplaceRsp(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertReplaceRsp */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceRsp */
let _cached_encoder_for_CertReplaceRsp: $.ASN1Encoder<
    CertReplaceRsp
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceRsp */

/* START_OF_SYMBOL_DEFINITION _encode_CertReplaceRsp */
/**
 * @summary Encodes a(n) CertReplaceRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceRsp, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceRsp(
    value: CertReplaceRsp,
    elGetter: $.ASN1Encoder<CertReplaceRsp>
) {
    if (!_cached_encoder_for_CertReplaceRsp) {
        _cached_encoder_for_CertReplaceRsp = function (
            value: CertReplaceRsp,
            elGetter: $.ASN1Encoder<CertReplaceRsp>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertReplaceRsp_result(
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
    return _cached_encoder_for_CertReplaceRsp(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertReplaceRsp */

/* eslint-enable */
