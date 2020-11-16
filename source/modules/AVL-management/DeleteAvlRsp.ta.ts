/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DeleteAvlRsp_result,
    _decode_DeleteAvlRsp_result,
    _encode_DeleteAvlRsp_result,
} from "../AVL_management/DeleteAvlRsp-result.ta";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../AVL_management/InvokeID.ta";
export {
    DeleteAvlRsp_result,
    _decode_DeleteAvlRsp_result,
    _encode_DeleteAvlRsp_result,
} from "../AVL_management/DeleteAvlRsp-result.ta";
export {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../AVL_management/InvokeID.ta";

/* START_OF_SYMBOL_DEFINITION DeleteAvlRsp */
/**
 * @summary DeleteAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteAvlRsp ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   result       CHOICE {
 *     success [0]  DelAvlOK,
 *     failure [1]  DelAvlErr,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class DeleteAvlRsp {
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
            _o.invokeID,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
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
        "invokeID",
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
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "DeleteAvlRsp contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "result";
            let invokeID!: InvokeID;
            let result!: DeleteAvlRsp_result;
            invokeID = _decode_InvokeID(sequence[0]);
            result = _decode_DeleteAvlRsp_result(sequence[1]);
            return new DeleteAvlRsp(invokeID, result, sequence.slice(2));
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
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
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
