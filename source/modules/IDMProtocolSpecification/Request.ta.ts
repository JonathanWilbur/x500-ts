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

/* START_OF_SYMBOL_DEFINITION Request */
/**
 * @summary Request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Request{OPERATION:Operations} ::= SEQUENCE {
 *   invokeID  INTEGER,
 *   opcode    OPERATION.&operationCode({Operations}),
 *   argument  OPERATION.&ArgumentType({Operations}{@opcode}),
 *   ... }
 * ```
 *
 * @class
 */
export class Request {
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
         * @summary `argument`.
         * @public
         * @readonly
         */
        readonly argument: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Request
     * @description
     *
     * This takes an `object` and converts it to a `Request`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Request`.
     * @returns {Request}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Request]: Request[_K] }>
    ): Request {
        return new Request(
            _o.invokeID,
            _o.opcode,
            _o.argument,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Request */
/**
 * @summary The Leading Root Component Types of Request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Request: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("opcode", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("argument", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Request */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Request */
/**
 * @summary The Trailing Root Component Types of Request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Request */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Request */
/**
 * @summary The Extension Addition Component Types of Request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Request: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Request */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Request */
let _cached_decoder_for_Request: $.ASN1Decoder<Request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Request */

/* START_OF_SYMBOL_DEFINITION _decode_Request */
/**
 * @summary Decodes an ASN.1 element into a(n) Request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Request} The decoded data structure.
 */
export function _decode_Request(el: _Element) {
    if (!_cached_decoder_for_Request) {
        _cached_decoder_for_Request = function (el: _Element): Request {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "Request contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "opcode";
            sequence[2].name = "argument";
            let invokeID!: INTEGER;
            let opcode!: Code;
            let argument!: _Element;
            invokeID = $._decodeInteger(sequence[0]);
            opcode = _decode_Code(sequence[1]);
            argument = $._decodeAny(sequence[2]);
            return new Request(invokeID, opcode, argument, sequence.slice(3));
        };
    }
    return _cached_decoder_for_Request(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Request */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Request */
let _cached_encoder_for_Request: $.ASN1Encoder<Request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Request */

/* START_OF_SYMBOL_DEFINITION _encode_Request */
/**
 * @summary Encodes a(n) Request into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Request, encoded as an ASN.1 Element.
 */
export function _encode_Request(
    value: Request,
    elGetter: $.ASN1Encoder<Request>
) {
    if (!_cached_encoder_for_Request) {
        _cached_encoder_for_Request = function (
            value: Request,
            elGetter: $.ASN1Encoder<Request>
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
                            /* REQUIRED   */ $._encodeAny(
                                value.argument,
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
    return _cached_encoder_for_Request(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Request */

/* eslint-enable */
