/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { Code, _encode_Code, _decode_Code } from "../CommonProtocolSpecification/Code.ta";

/* START_OF_SYMBOL_DEFINITION IdmResult */
/**
 * @summary IdmResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmResult{OPERATION:Operations} ::= SEQUENCE {
 *   invokeID  INTEGER,
 *   opcode    OPERATION.&operationCode({Operations}),
 *   result    OPERATION.&ResultType({Operations}{@opcode}),
 *   ... }
 * ```
 *
 * @class
 */
export class IdmResult {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: INTEGER,
        /**
         * @summary `opcode`.
         * @public
         * @readonly
         */
        readonly opcode: Code,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IdmResult
     * @description
     *
     * This takes an `object` and converts it to a `IdmResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IdmResult`.
     * @returns {IdmResult}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof IdmResult]: IdmResult[_K] }>
    ): IdmResult {
        return new IdmResult(
            _o.invokeID,
            _o.opcode,
            _o.result,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION IdmResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IdmResult */
/**
 * @summary The Leading Root Component Types of IdmResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IdmResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("opcode", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IdmResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IdmResult */
/**
 * @summary The Trailing Root Component Types of IdmResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IdmResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IdmResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IdmResult */
/**
 * @summary The Extension Addition Component Types of IdmResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IdmResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IdmResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IdmResult */
let _cached_decoder_for_IdmResult: $.ASN1Decoder<IdmResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IdmResult */

/* START_OF_SYMBOL_DEFINITION _decode_IdmResult */
/**
 * @summary Decodes an ASN.1 element into a(n) IdmResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmResult} The decoded data structure.
 */
export function _decode_IdmResult(el: _Element) {
    if (!_cached_decoder_for_IdmResult) {
        _cached_decoder_for_IdmResult = function (el: _Element): IdmResult {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "IdmResult contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "opcode";
            sequence[2].name = "result";
            let invokeID!: INTEGER;
            let opcode!: Code;
            let result!: _Element;
            invokeID = $._decodeInteger(sequence[0]);
            opcode = _decode_Code(sequence[1]);
            result = $._decodeAny(sequence[2]);
            return new IdmResult(invokeID, opcode, result, sequence.slice(3));
        };
    }
    return _cached_decoder_for_IdmResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IdmResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IdmResult */
let _cached_encoder_for_IdmResult: $.ASN1Encoder<IdmResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IdmResult */

/* START_OF_SYMBOL_DEFINITION _encode_IdmResult */
/**
 * @summary Encodes a(n) IdmResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmResult, encoded as an ASN.1 Element.
 */
export function _encode_IdmResult(
    value: IdmResult,
    elGetter: $.ASN1Encoder<IdmResult>
) {
    if (!_cached_encoder_for_IdmResult) {
        _cached_encoder_for_IdmResult = function (
            value: IdmResult,
            elGetter: $.ASN1Encoder<IdmResult>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Code(value.opcode, $.BER),
                            /* REQUIRED   */ $._encodeAny(value.result, $.BER),
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
    return _cached_encoder_for_IdmResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IdmResult */

/* eslint-enable */
