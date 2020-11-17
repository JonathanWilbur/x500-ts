/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgoInvoke,
    _decode_AlgoInvoke,
    _encode_AlgoInvoke,
} from "../PKI-Stub/AlgoInvoke.ta";
export {
    AlgoInvoke,
    _decode_AlgoInvoke,
    _encode_AlgoInvoke,
} from "../PKI-Stub/AlgoInvoke.ta";

/* START_OF_SYMBOL_DEFINITION ICV_Invoke */
/**
 * @summary ICV_Invoke
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ICV-Invoke{ToBeProtected} ::= SEQUENCE {
 *   toBeProtected      ToBeProtected,
 *   dynParms       [0] AlgoInvoke{{SupportedIcvAlgorithms}} OPTIONAL,
 *   icv                BIT STRING,
 *   ... }
 * ```
 *
 * @class
 */
export class ICV_Invoke<ToBeProtected> {
    constructor(
        /**
         * @summary `toBeProtected`.
         * @public
         * @readonly
         */
        readonly toBeProtected: ToBeProtected,
        /**
         * @summary `dynParms`.
         * @public
         * @readonly
         */
        readonly dynParms: OPTIONAL<AlgoInvoke>,
        /**
         * @summary `icv`.
         * @public
         * @readonly
         */
        readonly icv: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ICV_Invoke
     * @description
     *
     * This takes an `object` and converts it to a `ICV_Invoke`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ICV_Invoke`.
     * @returns {ICV_Invoke}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ICV_Invoke<any>]: ICV_Invoke<any>[_K] }>
    ): ICV_Invoke<any> {
        return new ICV_Invoke(
            _o.toBeProtected,
            _o.dynParms,
            _o.icv,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ICV_Invoke */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ICV_Invoke */
/**
 * @summary The Leading Root Component Types of ICV_Invoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ICV_Invoke: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "toBeProtected",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "dynParms",
        true,
        $.hasTag(_TagClass.context, 0),
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ICV_Invoke */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ICV_Invoke */
/**
 * @summary The Trailing Root Component Types of ICV_Invoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ICV_Invoke: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ICV_Invoke */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ICV_Invoke */
/**
 * @summary The Extension Addition Component Types of ICV_Invoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ICV_Invoke: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ICV_Invoke */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_ICV_Invoke */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ICV_Invoke
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_ICV_Invoke<ToBeProtected>(
    _decode_ToBeProtected: $.ASN1Decoder<ToBeProtected>
) {
    return function (el: _Element): ICV_Invoke<ToBeProtected> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let toBeProtected!: ToBeProtected;
        let dynParms: OPTIONAL<AlgoInvoke>;
        let icv!: BIT_STRING;
        let _unrecognizedExtensionsList: _Element[] = [];
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: $.DecodingMap = {
            toBeProtected: (_el: _Element): void => {
                toBeProtected = _decode_ToBeProtected(_el);
            },
            dynParms: (_el: _Element): void => {
                dynParms = $._decode_implicit<AlgoInvoke>(
                    () => _decode_AlgoInvoke
                )(_el);
            },
            icv: (_el: _Element): void => {
                icv = $._decodeBitString(_el);
            },
        };
        /* END_OF_CALLBACKS_MAP */
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_ICV_Invoke,
            _extension_additions_list_spec_for_ICV_Invoke,
            _root_component_type_list_2_spec_for_ICV_Invoke,
            (ext: _Element): void => {
                _unrecognizedExtensionsList.push(ext);
            }
        );
        return new ICV_Invoke /* SEQUENCE_CONSTRUCTOR_CALL */(
            toBeProtected,
            dynParms,
            icv,
            _unrecognizedExtensionsList
        );
    };
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_ICV_Invoke */


/* START_OF_SYMBOL_DEFINITION _get_encoder_for_ICV_Invoke */
/**
 * @summary Returns a function that will encode a(n) ICV_Invoke into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ICV_Invoke as an ASN.1 element.
 */
export function _get_encoder_for_ICV_Invoke<ToBeProtected>(
    _encode_ToBeProtected: $.ASN1Encoder<ToBeProtected>
) {
    return function (
        value: ICV_Invoke<ToBeProtected>,
        elGetter: $.ASN1Encoder<ICV_Invoke<ToBeProtected>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_ToBeProtected(
                            value.toBeProtected,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.dynParms === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AlgoInvoke,
                                  $.BER
                              )(value.dynParms, $.BER),
                        /* REQUIRED   */ $._encodeBitString(value.icv, $.BER),
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
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_ICV_Invoke */

/* eslint-enable */
