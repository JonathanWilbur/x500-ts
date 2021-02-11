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
export {
    InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from "../CommonProtocolSpecification/InvokeId.ta";

/* START_OF_SYMBOL_DEFINITION AbandonArgumentData */
/**
 * @summary AbandonArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonArgumentData ::= SEQUENCE {
 *   invokeID  [0]  InvokeId,
 *   ... }
 * ```
 *
 * @class
 */
export class AbandonArgumentData {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeId,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AbandonArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `AbandonArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AbandonArgumentData`.
     * @returns {AbandonArgumentData}
     */
    public static _from_object(
        _o: { [_K in keyof AbandonArgumentData]: AbandonArgumentData[_K] }
    ): AbandonArgumentData {
        return new AbandonArgumentData(
            _o.invokeID,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AbandonArgumentData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AbandonArgumentData */
/**
 * @summary The Leading Root Component Types of AbandonArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AbandonArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AbandonArgumentData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AbandonArgumentData */
/**
 * @summary The Trailing Root Component Types of AbandonArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AbandonArgumentData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AbandonArgumentData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AbandonArgumentData */
/**
 * @summary The Extension Addition Component Types of AbandonArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AbandonArgumentData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AbandonArgumentData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AbandonArgumentData */
let _cached_decoder_for_AbandonArgumentData: $.ASN1Decoder<AbandonArgumentData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AbandonArgumentData */

/* START_OF_SYMBOL_DEFINITION _decode_AbandonArgumentData */
/**
 * @summary Decodes an ASN.1 element into a(n) AbandonArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AbandonArgumentData} The decoded data structure.
 */
export function _decode_AbandonArgumentData(el: _Element) {
    if (!_cached_decoder_for_AbandonArgumentData) {
        _cached_decoder_for_AbandonArgumentData = function (
            el: _Element
        ): AbandonArgumentData {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "AbandonArgumentData contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            let invokeID!: InvokeId;
            invokeID = $._decode_explicit<InvokeId>(() => _decode_InvokeId)(
                sequence[0]
            );
            return new AbandonArgumentData(invokeID, sequence.slice(1));
        };
    }
    return _cached_decoder_for_AbandonArgumentData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AbandonArgumentData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AbandonArgumentData */
let _cached_encoder_for_AbandonArgumentData: $.ASN1Encoder<AbandonArgumentData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AbandonArgumentData */

/* START_OF_SYMBOL_DEFINITION _encode_AbandonArgumentData */
/**
 * @summary Encodes a(n) AbandonArgumentData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbandonArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_AbandonArgumentData(
    value: AbandonArgumentData,
    elGetter: $.ASN1Encoder<AbandonArgumentData>
) {
    if (!_cached_encoder_for_AbandonArgumentData) {
        _cached_encoder_for_AbandonArgumentData = function (
            value: AbandonArgumentData,
            elGetter: $.ASN1Encoder<AbandonArgumentData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_InvokeId,
                                $.BER
                            )(value.invokeID, $.BER),
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
    return _cached_encoder_for_AbandonArgumentData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AbandonArgumentData */

/* eslint-enable */
