/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { SupportedPduSet } from "../PkiPmiWrapper/SupportedPduSet.osa";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION WrappedPDUInfo */
/**
 * @summary WrappedPDUInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WrappedPDUInfo ::= SEQUENCE {
 *   pduType      WRAPPED-PDU.&id ({SupportedPduSet}),
 *   pduInfo      WRAPPED-PDU.&Type ({SupportedPduSet}{@pduType}),
 *   ... }
 * ```
 *
 * @class
 */
export class WrappedPDUInfo {
    constructor(
        /**
         * @summary `pduType`.
         * @public
         * @readonly
         */
        readonly pduType: OBJECT_IDENTIFIER,
        /**
         * @summary `pduInfo`.
         * @public
         * @readonly
         */
        readonly pduInfo: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a WrappedPDUInfo
     * @description
     *
     * This takes an `object` and converts it to a `WrappedPDUInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WrappedPDUInfo`.
     * @returns {WrappedPDUInfo}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof WrappedPDUInfo]: WrappedPDUInfo[_K] }>
    ): WrappedPDUInfo {
        return new WrappedPDUInfo(
            _o.pduType,
            _o.pduInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION WrappedPDUInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_WrappedPDUInfo */
/**
 * @summary The Leading Root Component Types of WrappedPDUInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_WrappedPDUInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "pduType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("pduInfo", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_WrappedPDUInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_WrappedPDUInfo */
/**
 * @summary The Trailing Root Component Types of WrappedPDUInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_WrappedPDUInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_WrappedPDUInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_WrappedPDUInfo */
/**
 * @summary The Extension Addition Component Types of WrappedPDUInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_WrappedPDUInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_WrappedPDUInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WrappedPDUInfo */
let _cached_decoder_for_WrappedPDUInfo: $.ASN1Decoder<WrappedPDUInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WrappedPDUInfo */

/* START_OF_SYMBOL_DEFINITION _decode_WrappedPDUInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) WrappedPDUInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WrappedPDUInfo} The decoded data structure.
 */
export function _decode_WrappedPDUInfo(el: _Element) {
    if (!_cached_decoder_for_WrappedPDUInfo) {
        _cached_decoder_for_WrappedPDUInfo = function (
            el: _Element
        ): WrappedPDUInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "WrappedPDUInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "pduType";
            sequence[1].name = "pduInfo";
            let pduType!: OBJECT_IDENTIFIER;
            let pduInfo!: _Element;
            pduType = $._decodeObjectIdentifier(sequence[0]);
            pduInfo = $._decodeAny(sequence[1]);
            return new WrappedPDUInfo(pduType, pduInfo, sequence.slice(2));
        };
    }
    return _cached_decoder_for_WrappedPDUInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WrappedPDUInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WrappedPDUInfo */
let _cached_encoder_for_WrappedPDUInfo: $.ASN1Encoder<WrappedPDUInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WrappedPDUInfo */

/* START_OF_SYMBOL_DEFINITION _encode_WrappedPDUInfo */
/**
 * @summary Encodes a(n) WrappedPDUInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WrappedPDUInfo, encoded as an ASN.1 Element.
 */
export function _encode_WrappedPDUInfo(
    value: WrappedPDUInfo,
    elGetter: $.ASN1Encoder<WrappedPDUInfo>
) {
    if (!_cached_encoder_for_WrappedPDUInfo) {
        _cached_encoder_for_WrappedPDUInfo = function (
            value: WrappedPDUInfo,
            elGetter: $.ASN1Encoder<WrappedPDUInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.pduType,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(value.pduInfo, $.BER),
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
    return _cached_encoder_for_WrappedPDUInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WrappedPDUInfo */

/* eslint-enable */
