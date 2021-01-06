/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { SymmetricEncryptionAlgorithms } from "../PkiPmiWrapper/SymmetricEncryptionAlgorithms.osa";

/* START_OF_SYMBOL_DEFINITION EncryptedPduInfo_pduEncryptionAlgorithm */
/**
 * @summary EncryptedPduInfo_pduEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedPduInfo-pduEncryptionAlgorithm ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class EncryptedPduInfo_pduEncryptionAlgorithm {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OBJECT_IDENTIFIER,
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: _Element
    ) {}

    /**
     * @summary Restructures an object into a EncryptedPduInfo_pduEncryptionAlgorithm
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedPduInfo_pduEncryptionAlgorithm`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedPduInfo_pduEncryptionAlgorithm`.
     * @returns {EncryptedPduInfo_pduEncryptionAlgorithm}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof EncryptedPduInfo_pduEncryptionAlgorithm]: EncryptedPduInfo_pduEncryptionAlgorithm[_K];
            }
        >
    ): EncryptedPduInfo_pduEncryptionAlgorithm {
        return new EncryptedPduInfo_pduEncryptionAlgorithm(
            _o.algorithm,
            _o.parameter
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EncryptedPduInfo_pduEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm */
/**
 * @summary The Leading Root Component Types of EncryptedPduInfo_pduEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("parameter", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm */
/**
 * @summary The Trailing Root Component Types of EncryptedPduInfo_pduEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm */
/**
 * @summary The Extension Addition Component Types of EncryptedPduInfo_pduEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedPduInfo_pduEncryptionAlgorithm */
let _cached_decoder_for_EncryptedPduInfo_pduEncryptionAlgorithm: $.ASN1Decoder<EncryptedPduInfo_pduEncryptionAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedPduInfo_pduEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedPduInfo_pduEncryptionAlgorithm */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedPduInfo_pduEncryptionAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedPduInfo_pduEncryptionAlgorithm} The decoded data structure.
 */
export function _decode_EncryptedPduInfo_pduEncryptionAlgorithm(el: _Element) {
    if (!_cached_decoder_for_EncryptedPduInfo_pduEncryptionAlgorithm) {
        _cached_decoder_for_EncryptedPduInfo_pduEncryptionAlgorithm = function (
            el: _Element
        ): EncryptedPduInfo_pduEncryptionAlgorithm {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "EncryptedPduInfo-pduEncryptionAlgorithm contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algorithm";
            sequence[1].name = "parameter";
            let algorithm!: OBJECT_IDENTIFIER;
            let parameter!: _Element;
            algorithm = $._decodeObjectIdentifier(sequence[0]);
            parameter = $._decodeAny(sequence[1]);
            return new EncryptedPduInfo_pduEncryptionAlgorithm(
                algorithm,
                parameter
            );
        };
    }
    return _cached_decoder_for_EncryptedPduInfo_pduEncryptionAlgorithm(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedPduInfo_pduEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedPduInfo_pduEncryptionAlgorithm */
let _cached_encoder_for_EncryptedPduInfo_pduEncryptionAlgorithm: $.ASN1Encoder<EncryptedPduInfo_pduEncryptionAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedPduInfo_pduEncryptionAlgorithm */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedPduInfo_pduEncryptionAlgorithm */
/**
 * @summary Encodes a(n) EncryptedPduInfo_pduEncryptionAlgorithm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedPduInfo_pduEncryptionAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedPduInfo_pduEncryptionAlgorithm(
    value: EncryptedPduInfo_pduEncryptionAlgorithm,
    elGetter: $.ASN1Encoder<EncryptedPduInfo_pduEncryptionAlgorithm>
) {
    if (!_cached_encoder_for_EncryptedPduInfo_pduEncryptionAlgorithm) {
        _cached_encoder_for_EncryptedPduInfo_pduEncryptionAlgorithm = function (
            value: EncryptedPduInfo_pduEncryptionAlgorithm,
            elGetter: $.ASN1Encoder<EncryptedPduInfo_pduEncryptionAlgorithm>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.algorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.parameter, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedPduInfo_pduEncryptionAlgorithm(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedPduInfo_pduEncryptionAlgorithm */

/* eslint-enable */
