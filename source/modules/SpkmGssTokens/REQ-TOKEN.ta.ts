/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
import {
    Integrity,
    _decode_Integrity,
    _encode_Integrity,
} from "../SpkmGssTokens/Integrity.ta";
import {
    Req_contents,
    _decode_Req_contents,
    _encode_Req_contents,
} from "../SpkmGssTokens/Req-contents.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
export {
    Integrity,
    _decode_Integrity,
    _encode_Integrity,
} from "../SpkmGssTokens/Integrity.ta";
export {
    Req_contents,
    _decode_Req_contents,
    _encode_Req_contents,
} from "../SpkmGssTokens/Req-contents.ta";

/* START_OF_SYMBOL_DEFINITION REQ_TOKEN */
/**
 * @summary REQ_TOKEN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * REQ-TOKEN ::= SEQUENCE {
 *   req-contents   Req-contents,
 *   algId          AlgorithmIdentifier{{SupportedAlgorithms}},
 *   req-integrity  Integrity -- "token" is Req-contents
 * }
 * ```
 *
 * @class
 */
export class REQ_TOKEN {
    constructor(
        /**
         * @summary `req_contents`.
         * @public
         * @readonly
         */
        readonly req_contents: Req_contents,
        /**
         * @summary `algId`.
         * @public
         * @readonly
         */
        readonly algId: AlgorithmIdentifier,
        /**
         * @summary `req_integrity`.
         * @public
         * @readonly
         */
        readonly req_integrity: Integrity
    ) {}

    /**
     * @summary Restructures an object into a REQ_TOKEN
     * @description
     *
     * This takes an `object` and converts it to a `REQ_TOKEN`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `REQ_TOKEN`.
     * @returns {REQ_TOKEN}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof REQ_TOKEN]: REQ_TOKEN[_K] }>
    ): REQ_TOKEN {
        return new REQ_TOKEN(_o.req_contents, _o.algId, _o.req_integrity);
    }
}
/* END_OF_SYMBOL_DEFINITION REQ_TOKEN */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_REQ_TOKEN */
/**
 * @summary The Leading Root Component Types of REQ_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_REQ_TOKEN: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "req-contents",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "algId",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "req-integrity",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_REQ_TOKEN */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_REQ_TOKEN */
/**
 * @summary The Trailing Root Component Types of REQ_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_REQ_TOKEN: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_REQ_TOKEN */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_REQ_TOKEN */
/**
 * @summary The Extension Addition Component Types of REQ_TOKEN
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_REQ_TOKEN: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_REQ_TOKEN */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_REQ_TOKEN */
let _cached_decoder_for_REQ_TOKEN: $.ASN1Decoder<REQ_TOKEN> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_REQ_TOKEN */

/* START_OF_SYMBOL_DEFINITION _decode_REQ_TOKEN */
/**
 * @summary Decodes an ASN.1 element into a(n) REQ_TOKEN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {REQ_TOKEN} The decoded data structure.
 */
export function _decode_REQ_TOKEN(el: _Element) {
    if (!_cached_decoder_for_REQ_TOKEN) {
        _cached_decoder_for_REQ_TOKEN = function (el: _Element): REQ_TOKEN {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "REQ-TOKEN contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "req-contents";
            sequence[1].name = "algId";
            sequence[2].name = "req-integrity";
            let req_contents!: Req_contents;
            let algId!: AlgorithmIdentifier;
            let req_integrity!: Integrity;
            req_contents = _decode_Req_contents(sequence[0]);
            algId = _decode_AlgorithmIdentifier(sequence[1]);
            req_integrity = _decode_Integrity(sequence[2]);
            return new REQ_TOKEN(req_contents, algId, req_integrity);
        };
    }
    return _cached_decoder_for_REQ_TOKEN(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_REQ_TOKEN */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_REQ_TOKEN */
let _cached_encoder_for_REQ_TOKEN: $.ASN1Encoder<REQ_TOKEN> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_REQ_TOKEN */

/* START_OF_SYMBOL_DEFINITION _encode_REQ_TOKEN */
/**
 * @summary Encodes a(n) REQ_TOKEN into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The REQ_TOKEN, encoded as an ASN.1 Element.
 */
export function _encode_REQ_TOKEN(
    value: REQ_TOKEN,
    elGetter: $.ASN1Encoder<REQ_TOKEN>
) {
    if (!_cached_encoder_for_REQ_TOKEN) {
        _cached_encoder_for_REQ_TOKEN = function (
            value: REQ_TOKEN,
            elGetter: $.ASN1Encoder<REQ_TOKEN>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Req_contents(
                            value.req_contents,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Integrity(
                            value.req_integrity,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_REQ_TOKEN(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_REQ_TOKEN */

/* eslint-enable */
