/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";

/* START_OF_SYMBOL_DEFINITION Error */
/**
 * @summary Error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Error{OPERATION:Operations} ::= SEQUENCE {
 *   invokeID  INTEGER,
 *   errcode   OPERATION.&Errors.&errorCode({Operations}),
 *   error     OPERATION.&Errors.&ParameterType({Operations}{@errcode}),
 *   ... }
 * ```
 *
 * @class
 */
export class Error {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: INTEGER,
        /**
         * @summary `errcode`.
         * @public
         * @readonly
         */
        readonly errcode: _Element,
        /**
         * @summary `error`.
         * @public
         * @readonly
         */
        readonly error: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Error
     * @description
     *
     * This takes an `object` and converts it to a `Error`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Error`.
     * @returns {Error}
     */
    public static _from_object(_o: { [_K in keyof Error]: Error[_K] }): Error {
        return new Error(
            _o.invokeID,
            _o.errcode,
            _o.error,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Error */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Error */
/**
 * @summary The Leading Root Component Types of Error
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Error: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("errcode", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("error", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Error */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Error */
/**
 * @summary The Trailing Root Component Types of Error
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Error: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Error */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Error */
/**
 * @summary The Extension Addition Component Types of Error
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Error: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Error */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Error */
let _cached_decoder_for_Error: $.ASN1Decoder<Error> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Error */

/* START_OF_SYMBOL_DEFINITION _decode_Error */
/**
 * @summary Decodes an ASN.1 element into a(n) Error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Error} The decoded data structure.
 */
export function _decode_Error(el: _Element) {
    if (!_cached_decoder_for_Error) {
        _cached_decoder_for_Error = function (el: _Element): Error {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "Error contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "errcode";
            sequence[2].name = "error";
            let invokeID!: INTEGER;
            let errcode!: _Element;
            let error!: _Element;
            invokeID = $._decodeInteger(sequence[0]);
            errcode = $._decodeAny(sequence[1]);
            error = $._decodeAny(sequence[2]);
            return new Error(invokeID, errcode, error, sequence.slice(3));
        };
    }
    return _cached_decoder_for_Error(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Error */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Error */
let _cached_encoder_for_Error: $.ASN1Encoder<Error> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Error */

/* START_OF_SYMBOL_DEFINITION _encode_Error */
/**
 * @summary Encodes a(n) Error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Error, encoded as an ASN.1 Element.
 */
export function _encode_Error(value: Error, elGetter: $.ASN1Encoder<Error>) {
    if (!_cached_encoder_for_Error) {
        _cached_encoder_for_Error = function (
            value: Error,
            elGetter: $.ASN1Encoder<Error>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(value.errcode, $.BER),
                            /* REQUIRED   */ $._encodeAny(value.error, $.BER),
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
    return _cached_encoder_for_Error(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Error */

/* eslint-enable */
