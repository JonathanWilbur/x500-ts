/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ProtocolInformation */
/**
 * @summary ProtocolInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolInformation ::= SEQUENCE {
 *   nAddress  OCTET STRING,
 *   profiles  SET OF OBJECT IDENTIFIER }
 * ```
 *
 * @class
 */
export class ProtocolInformation {
    constructor(
        /**
         * @summary `nAddress`.
         * @public
         * @readonly
         */
        readonly nAddress: OCTET_STRING,
        /**
         * @summary `profiles`.
         * @public
         * @readonly
         */
        readonly profiles: OBJECT_IDENTIFIER[]
    ) {}

    /**
     * @summary Restructures an object into a ProtocolInformation
     * @description
     *
     * This takes an `object` and converts it to a `ProtocolInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtocolInformation`.
     * @returns {ProtocolInformation}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ProtocolInformation]: ProtocolInformation[_K] }
        >
    ): ProtocolInformation {
        return new ProtocolInformation(_o.nAddress, _o.profiles);
    }
}
/* END_OF_SYMBOL_DEFINITION ProtocolInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtocolInformation */
/**
 * @summary The Leading Root Component Types of ProtocolInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtocolInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "nAddress",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "profiles",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtocolInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtocolInformation */
/**
 * @summary The Trailing Root Component Types of ProtocolInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtocolInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtocolInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtocolInformation */
/**
 * @summary The Extension Addition Component Types of ProtocolInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtocolInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtocolInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtocolInformation */
let _cached_decoder_for_ProtocolInformation: $.ASN1Decoder<
    ProtocolInformation
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtocolInformation */

/* START_OF_SYMBOL_DEFINITION _decode_ProtocolInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtocolInformation} The decoded data structure.
 */
export function _decode_ProtocolInformation(el: _Element) {
    if (!_cached_decoder_for_ProtocolInformation) {
        _cached_decoder_for_ProtocolInformation = function (
            el: _Element
        ): ProtocolInformation {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ProtocolInformation contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "nAddress";
            sequence[1].name = "profiles";
            let nAddress!: OCTET_STRING;
            let profiles!: OBJECT_IDENTIFIER[];
            nAddress = $._decodeOctetString(sequence[0]);
            profiles = $._decodeSetOf<OBJECT_IDENTIFIER>(
                () => $._decodeObjectIdentifier
            )(sequence[1]);
            return new ProtocolInformation(nAddress, profiles);
        };
    }
    return _cached_decoder_for_ProtocolInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtocolInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtocolInformation */
let _cached_encoder_for_ProtocolInformation: $.ASN1Encoder<
    ProtocolInformation
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtocolInformation */

/* START_OF_SYMBOL_DEFINITION _encode_ProtocolInformation */
/**
 * @summary Encodes a(n) ProtocolInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolInformation, encoded as an ASN.1 Element.
 */
export function _encode_ProtocolInformation(
    value: ProtocolInformation,
    elGetter: $.ASN1Encoder<ProtocolInformation>
) {
    if (!_cached_encoder_for_ProtocolInformation) {
        _cached_encoder_for_ProtocolInformation = function (
            value: ProtocolInformation,
            elGetter: $.ASN1Encoder<ProtocolInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeOctetString(
                            value.nAddress,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._encodeObjectIdentifier,
                            $.BER
                        )(value.profiles, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtocolInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtocolInformation */

/* eslint-enable */
