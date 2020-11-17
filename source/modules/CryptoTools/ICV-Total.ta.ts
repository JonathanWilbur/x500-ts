/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmWithInvoke,
    _decode_AlgorithmWithInvoke,
    _encode_AlgorithmWithInvoke,
} from "../PKI-Stub/AlgorithmWithInvoke.ta";
export {
    AlgorithmWithInvoke,
    _decode_AlgorithmWithInvoke,
    _encode_AlgorithmWithInvoke,
} from "../PKI-Stub/AlgorithmWithInvoke.ta";

/* START_OF_SYMBOL_DEFINITION ICV_Total */
/**
 * @summary ICV_Total
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ICV-Total{ToBeProtected} ::= SEQUENCE {
 *   toBeProtected               ToBeProtected,
 *   algorithmIdentifier         AlgorithmWithInvoke{{SupportedIcvAlgorithms}},
 *   icv                         BIT STRING,
 *   altAlgorithmIdentifier  [0] AlgorithmWithInvoke{{SupportedIcvAlgorithms}} OPTIONAL,
 *   altIcv                  [1] BIT STRING OPTIONAL,
 *   ... }
 *    (WITH COMPONENTS {..., altAlgorithmIdentifier PRESENT, altIcv PRESENT } |
 *     WITH COMPONENTS {..., altAlgorithmIdentifier ABSENT,  altIcv ABSENT } )
 * ```
 *
 * @class
 */
export class ICV_Total<ToBeProtected> {
    constructor(
        /**
         * @summary `toBeProtected`.
         * @public
         * @readonly
         */
        readonly toBeProtected: ToBeProtected,
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmWithInvoke,
        /**
         * @summary `icv`.
         * @public
         * @readonly
         */
        readonly icv: BIT_STRING,
        /**
         * @summary `altAlgorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly altAlgorithmIdentifier: OPTIONAL<AlgorithmWithInvoke>,
        /**
         * @summary `altIcv`.
         * @public
         * @readonly
         */
        readonly altIcv: OPTIONAL<BIT_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ICV_Total
     * @description
     *
     * This takes an `object` and converts it to a `ICV_Total`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ICV_Total`.
     * @returns {ICV_Total}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ICV_Total<any>]: ICV_Total<any>[_K] }>
    ): ICV_Total<any> {
        return new ICV_Total(
            _o.toBeProtected,
            _o.algorithmIdentifier,
            _o.icv,
            _o.altAlgorithmIdentifier,
            _o.altIcv,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ICV_Total */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ICV_Total */
/**
 * @summary The Leading Root Component Types of ICV_Total
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ICV_Total: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "toBeProtected",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "algorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "icv",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "altAlgorithmIdentifier",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "altIcv",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ICV_Total */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ICV_Total */
/**
 * @summary The Trailing Root Component Types of ICV_Total
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ICV_Total: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ICV_Total */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ICV_Total */
/**
 * @summary The Extension Addition Component Types of ICV_Total
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ICV_Total: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ICV_Total */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_ICV_Total */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ICV_Total
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_ICV_Total<ToBeProtected>(
    _decode_ToBeProtected: $.ASN1Decoder<ToBeProtected>
) {
    return function (el: _Element): ICV_Total<ToBeProtected> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let toBeProtected!: ToBeProtected;
        let algorithmIdentifier!: AlgorithmWithInvoke;
        let icv!: BIT_STRING;
        let altAlgorithmIdentifier: OPTIONAL<AlgorithmWithInvoke>;
        let altIcv: OPTIONAL<BIT_STRING>;
        let _unrecognizedExtensionsList: _Element[] = [];
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: $.DecodingMap = {
            toBeProtected: (_el: _Element): void => {
                toBeProtected = _decode_ToBeProtected(_el);
            },
            algorithmIdentifier: (_el: _Element): void => {
                algorithmIdentifier = _decode_AlgorithmWithInvoke(_el);
            },
            icv: (_el: _Element): void => {
                icv = $._decodeBitString(_el);
            },
            altAlgorithmIdentifier: (_el: _Element): void => {
                altAlgorithmIdentifier = $._decode_implicit<
                    AlgorithmWithInvoke
                >(() => _decode_AlgorithmWithInvoke)(_el);
            },
            altIcv: (_el: _Element): void => {
                altIcv = $._decode_implicit<BIT_STRING>(
                    () => $._decodeBitString
                )(_el);
            },
        };
        /* END_OF_CALLBACKS_MAP */
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_ICV_Total,
            _extension_additions_list_spec_for_ICV_Total,
            _root_component_type_list_2_spec_for_ICV_Total,
            (ext: _Element): void => {
                _unrecognizedExtensionsList.push(ext);
            }
        );
        return new ICV_Total /* SEQUENCE_CONSTRUCTOR_CALL */(
            toBeProtected,
            algorithmIdentifier,
            icv,
            altAlgorithmIdentifier,
            altIcv,
            _unrecognizedExtensionsList
        );
    };
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_ICV_Total */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_ICV_Total */
/**
 * @summary Returns a function that will encode a(n) ICV_Total into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ICV_Total as an ASN.1 element.
 */
export function _get_encoder_for_ICV_Total<ToBeProtected>(
    _encode_ToBeProtected: $.ASN1Encoder<ToBeProtected>
) {
    return function (
        value: ICV_Total<ToBeProtected>,
        elGetter: $.ASN1Encoder<ICV_Total<ToBeProtected>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_ToBeProtected(
                            value.toBeProtected,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmWithInvoke(
                            value.algorithmIdentifier,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(value.icv, $.BER),
                        /* IF_ABSENT  */ value.altAlgorithmIdentifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AlgorithmWithInvoke,
                                  $.BER
                              )(value.altAlgorithmIdentifier, $.BER),
                        /* IF_ABSENT  */ value.altIcv === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeBitString,
                                  $.BER
                              )(value.altIcv, $.BER),
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
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_ICV_Total */

/* eslint-enable */
