/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from "../CommonProtocolSpecification/InvokeId.ta";
import {
    OsiRej_problem,
    _decode_OsiRej_problem,
    _encode_OsiRej_problem,
} from "../OSIProtocolSpecification/OsiRej-problem.ta";
export {
    InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from "../CommonProtocolSpecification/InvokeId.ta";
export {
    OsiRej_problem,
    _decode_OsiRej_problem,
    _encode_OsiRej_problem,
} from "../OSIProtocolSpecification/OsiRej-problem.ta";

/* START_OF_SYMBOL_DEFINITION OsiRej */
/**
 * @summary OsiRej
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiRej ::= [4] IMPLICIT SEQUENCE {
 *   invokeId          InvokeId,
 *   problem           CHOICE {
 *     general      [0]  IMPLICIT GeneralProblem,
 *     invoke       [1]  IMPLICIT InvokeProblem,
 *     returnResult [2]  IMPLICIT ReturnResultProblem,
 *     returnError  [3]  IMPLICIT ReturnErrorProblem,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class OsiRej {
    constructor(
        /**
         * @summary `invokeId`.
         * @public
         * @readonly
         */
        readonly invokeId: InvokeId,
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: OsiRej_problem,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a OsiRej
     * @description
     *
     * This takes an `object` and converts it to a `OsiRej`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiRej`.
     * @returns {OsiRej}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof OsiRej]: OsiRej[_K] }>
    ): OsiRej {
        return new OsiRej(
            _o.invokeId,
            _o.problem,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION OsiRej */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OsiRej */
/**
 * @summary The Leading Root Component Types of OsiRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiRej: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeId", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("problem", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OsiRej */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OsiRej */
/**
 * @summary The Trailing Root Component Types of OsiRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiRej: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OsiRej */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OsiRej */
/**
 * @summary The Extension Addition Component Types of OsiRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiRej: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OsiRej */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiRej */
let _cached_decoder_for_OsiRej: $.ASN1Decoder<OsiRej> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiRej */

/* START_OF_SYMBOL_DEFINITION _decode_OsiRej */
/**
 * @summary Decodes an ASN.1 element into a(n) OsiRej
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiRej} The decoded data structure.
 */
export function _decode_OsiRej(el: _Element) {
    if (!_cached_decoder_for_OsiRej) {
        _cached_decoder_for_OsiRej = $._decode_explicit<OsiRej>(
            () =>
                function (el: _Element): OsiRej {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 2) {
                        throw new _ConstructionError(
                            "OsiRej contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "invokeId";
                    sequence[1].name = "problem";
                    let invokeId!: InvokeId;
                    let problem!: OsiRej_problem;
                    invokeId = _decode_InvokeId(sequence[0]);
                    problem = _decode_OsiRej_problem(sequence[1]);
                    return new OsiRej(invokeId, problem, sequence.slice(2));
                }
        );
    }
    return _cached_decoder_for_OsiRej(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OsiRej */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiRej */
let _cached_encoder_for_OsiRej: $.ASN1Encoder<OsiRej> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiRej */

/* START_OF_SYMBOL_DEFINITION _encode_OsiRej */
/**
 * @summary Encodes a(n) OsiRej into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiRej, encoded as an ASN.1 Element.
 */
export function _encode_OsiRej(value: OsiRej, elGetter: $.ASN1Encoder<OsiRej>) {
    if (!_cached_encoder_for_OsiRej) {
        _cached_encoder_for_OsiRej = $._encode_explicit(
            _TagClass.context,
            4,
            () =>
                function (
                    value: OsiRej,
                    elGetter: $.ASN1Encoder<OsiRej>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_InvokeId(
                                        value.invokeId,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_OsiRej_problem(
                                        value.problem,
                                        $.BER
                                    ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_OsiRej(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OsiRej */

/* eslint-enable */
