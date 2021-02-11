/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca";

/* START_OF_SYMBOL_DEFINITION WrappedProt */
/**
 * @summary WrappedProt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WrappedProt {WRAPPED-PROT:SupportedProtSet} ::= SEQUENCE {
 *   id    WRAPPED-PROT.&id({SupportedProtSet}),
 *   prot  WRAPPED-PROT.&Type({SupportedProtSet}{@id}),
 *   ... }
 * ```
 *
 * @class
 */
export class WrappedProt {
    constructor(
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: OBJECT_IDENTIFIER,
        /**
         * @summary `prot`.
         * @public
         * @readonly
         */
        readonly prot: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a WrappedProt
     * @description
     *
     * This takes an `object` and converts it to a `WrappedProt`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WrappedProt`.
     * @returns {WrappedProt}
     */
    public static _from_object(
        _o: { [_K in keyof WrappedProt]: WrappedProt[_K] }
    ): WrappedProt {
        return new WrappedProt(_o.id, _o.prot, _o._unrecognizedExtensionsList);
    }
}
/* END_OF_SYMBOL_DEFINITION WrappedProt */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_WrappedProt */
/**
 * @summary The Leading Root Component Types of WrappedProt
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_WrappedProt: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "id",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("prot", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_WrappedProt */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_WrappedProt */
/**
 * @summary The Trailing Root Component Types of WrappedProt
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_WrappedProt: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_WrappedProt */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_WrappedProt */
/**
 * @summary The Extension Addition Component Types of WrappedProt
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_WrappedProt: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_WrappedProt */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WrappedProt */
let _cached_decoder_for_WrappedProt: $.ASN1Decoder<WrappedProt> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WrappedProt */

/* START_OF_SYMBOL_DEFINITION _decode_WrappedProt */
/**
 * @summary Decodes an ASN.1 element into a(n) WrappedProt
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WrappedProt} The decoded data structure.
 */
export function _decode_WrappedProt(el: _Element) {
    if (!_cached_decoder_for_WrappedProt) {
        _cached_decoder_for_WrappedProt = function (el: _Element): WrappedProt {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "WrappedProt contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "id";
            sequence[1].name = "prot";
            let id!: OBJECT_IDENTIFIER;
            let prot!: _Element;
            id = $._decodeObjectIdentifier(sequence[0]);
            prot = $._decodeAny(sequence[1]);
            return new WrappedProt(id, prot, sequence.slice(2));
        };
    }
    return _cached_decoder_for_WrappedProt(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WrappedProt */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WrappedProt */
let _cached_encoder_for_WrappedProt: $.ASN1Encoder<WrappedProt> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WrappedProt */

/* START_OF_SYMBOL_DEFINITION _encode_WrappedProt */
/**
 * @summary Encodes a(n) WrappedProt into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WrappedProt, encoded as an ASN.1 Element.
 */
export function _encode_WrappedProt(
    value: WrappedProt,
    elGetter: $.ASN1Encoder<WrappedProt>
) {
    if (!_cached_encoder_for_WrappedProt) {
        _cached_encoder_for_WrappedProt = function (
            value: WrappedProt,
            elGetter: $.ASN1Encoder<WrappedProt>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.id,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(value.prot, $.BER),
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
    return _cached_encoder_for_WrappedProt(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WrappedProt */

/* eslint-enable */
