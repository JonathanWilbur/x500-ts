/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ChainingArguments,
    _decode_ChainingArguments,
    _encode_ChainingArguments,
} from "../DistributedOperations/ChainingArguments.ta";
export {
    ChainingArguments,
    _decode_ChainingArguments,
    _encode_ChainingArguments,
} from "../DistributedOperations/ChainingArguments.ta";

/* START_OF_SYMBOL_DEFINITION Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */
/**
 * @summary Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Chained-ArgumentType-OPTIONALLY-PROTECTED-Parameter1 {OPERATION:operation} ::= SET {
 *     chainedArgument      ChainingArguments,
 *     argument        [0]  operation.&ArgumentType }
 * ```
 *
 * @class
 */
export class Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 {
    constructor(
        /**
         * @summary `chainedArgument`.
         * @public
         * @readonly
         */
        readonly chainedArgument: ChainingArguments,
        /**
         * @summary `argument`.
         * @public
         * @readonly
         */
        readonly argument: _Element
    ) {}

    /**
     * @summary Restructures an object into a Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
     * @description
     *
     * This takes an `object` and converts it to a `Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1`.
     * @returns {Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1]: Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1[_K];
            }
        >
    ): Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 {
        return new Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1(
            _o.chainedArgument,
            _o.argument
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */
/**
 * @summary The Leading Root Component Types of Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "chainedArgument",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "argument",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */
/**
 * @summary The Trailing Root Component Types of Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */
/**
 * @summary The Extension Addition Component Types of Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */
let _cached_decoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1: $.ASN1Decoder<
    Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */

/* START_OF_SYMBOL_DEFINITION _decode_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */
/**
 * @summary Decodes an ASN.1 element into a(n) Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1} The decoded data structure.
 */
export function _decode_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1(
    el: _Element
) {
    if (
        !_cached_decoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
    ) {
        _cached_decoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 = function (
            el: _Element
        ): Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let chainedArgument!: ChainingArguments;
            let argument!: _Element;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                chainedArgument: (_el: _Element): void => {
                    chainedArgument = _decode_ChainingArguments(_el);
                },
                argument: (_el: _Element): void => {
                    argument = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1,
                _extension_additions_list_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1,
                _root_component_type_list_2_spec_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1,
                undefined
            );
            return new Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 /* SET_CONSTRUCTOR_CALL */(
                chainedArgument,
                argument
            );
        };
    }
    return _cached_decoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */
let _cached_encoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1: $.ASN1Encoder<
    Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */

/* START_OF_SYMBOL_DEFINITION _encode_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */
/**
 * @summary Encodes a(n) Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1, encoded as an ASN.1 Element.
 */
export function _encode_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1(
    value: Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1,
    elGetter: $.ASN1Encoder<
        Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
    >
) {
    if (
        !_cached_encoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
    ) {
        _cached_encoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 = function (
            value: Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1,
            elGetter: $.ASN1Encoder<
                Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
            >
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ChainingArguments(
                            value.chainedArgument,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeAny,
                            $.BER
                        )(value.argument, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 */

/* eslint-enable */
