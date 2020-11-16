/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AuthorizationData,
    _decode_AuthorizationData,
    _encode_AuthorizationData,
} from "../SpkmGssTokens/AuthorizationData.ta";
import {
    CertificationData,
    _decode_CertificationData,
    _encode_CertificationData,
} from "../SpkmGssTokens/CertificationData.ta";
import {
    REQ_TOKEN,
    _decode_REQ_TOKEN,
    _encode_REQ_TOKEN,
} from "../SpkmGssTokens/REQ-TOKEN.ta";
export {
    AuthorizationData,
    _decode_AuthorizationData,
    _encode_AuthorizationData,
} from "../SpkmGssTokens/AuthorizationData.ta";
export {
    CertificationData,
    _decode_CertificationData,
    _encode_CertificationData,
} from "../SpkmGssTokens/CertificationData.ta";
export {
    REQ_TOKEN,
    _decode_REQ_TOKEN,
    _encode_REQ_TOKEN,
} from "../SpkmGssTokens/REQ-TOKEN.ta";

/* START_OF_SYMBOL_DEFINITION SPKM_REQ */
/**
 * @summary SPKM_REQ
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPKM-REQ ::= SEQUENCE {
 *   requestToken  REQ-TOKEN,
 *   certif-data   [0]  CertificationData OPTIONAL,
 *   auth-data     [1]  AuthorizationData OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SPKM_REQ {
    constructor(
        /**
         * @summary `requestToken`.
         * @public
         * @readonly
         */
        readonly requestToken: REQ_TOKEN,
        /**
         * @summary `certif_data`.
         * @public
         * @readonly
         */
        readonly certif_data: OPTIONAL<CertificationData>,
        /**
         * @summary `auth_data`.
         * @public
         * @readonly
         */
        readonly auth_data: OPTIONAL<AuthorizationData>
    ) {}

    /**
     * @summary Restructures an object into a SPKM_REQ
     * @description
     *
     * This takes an `object` and converts it to a `SPKM_REQ`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPKM_REQ`.
     * @returns {SPKM_REQ}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SPKM_REQ]: SPKM_REQ[_K] }>
    ): SPKM_REQ {
        return new SPKM_REQ(_o.requestToken, _o.certif_data, _o.auth_data);
    }
}
/* END_OF_SYMBOL_DEFINITION SPKM_REQ */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SPKM_REQ */
/**
 * @summary The Leading Root Component Types of SPKM_REQ
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SPKM_REQ: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "requestToken",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certif-data",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "auth-data",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SPKM_REQ */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SPKM_REQ */
/**
 * @summary The Trailing Root Component Types of SPKM_REQ
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SPKM_REQ: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SPKM_REQ */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SPKM_REQ */
/**
 * @summary The Extension Addition Component Types of SPKM_REQ
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SPKM_REQ: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SPKM_REQ */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SPKM_REQ */
let _cached_decoder_for_SPKM_REQ: $.ASN1Decoder<SPKM_REQ> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SPKM_REQ */

/* START_OF_SYMBOL_DEFINITION _decode_SPKM_REQ */
/**
 * @summary Decodes an ASN.1 element into a(n) SPKM_REQ
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPKM_REQ} The decoded data structure.
 */
export function _decode_SPKM_REQ(el: _Element) {
    if (!_cached_decoder_for_SPKM_REQ) {
        _cached_decoder_for_SPKM_REQ = function (el: _Element): SPKM_REQ {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let requestToken!: REQ_TOKEN;
            let certif_data: OPTIONAL<CertificationData>;
            let auth_data: OPTIONAL<AuthorizationData>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                requestToken: (_el: _Element): void => {
                    requestToken = _decode_REQ_TOKEN(_el);
                },
                "certif-data": (_el: _Element): void => {
                    certif_data = $._decode_implicit<CertificationData>(
                        () => _decode_CertificationData
                    )(_el);
                },
                "auth-data": (_el: _Element): void => {
                    auth_data = $._decode_implicit<AuthorizationData>(
                        () => _decode_AuthorizationData
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SPKM_REQ,
                _extension_additions_list_spec_for_SPKM_REQ,
                _root_component_type_list_2_spec_for_SPKM_REQ,
                undefined
            );
            return new SPKM_REQ /* SEQUENCE_CONSTRUCTOR_CALL */(
                requestToken,
                certif_data,
                auth_data
            );
        };
    }
    return _cached_decoder_for_SPKM_REQ(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SPKM_REQ */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SPKM_REQ */
let _cached_encoder_for_SPKM_REQ: $.ASN1Encoder<SPKM_REQ> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SPKM_REQ */

/* START_OF_SYMBOL_DEFINITION _encode_SPKM_REQ */
/**
 * @summary Encodes a(n) SPKM_REQ into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPKM_REQ, encoded as an ASN.1 Element.
 */
export function _encode_SPKM_REQ(
    value: SPKM_REQ,
    elGetter: $.ASN1Encoder<SPKM_REQ>
) {
    if (!_cached_encoder_for_SPKM_REQ) {
        _cached_encoder_for_SPKM_REQ = function (
            value: SPKM_REQ,
            elGetter: $.ASN1Encoder<SPKM_REQ>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_REQ_TOKEN(
                            value.requestToken,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.certif_data === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_CertificationData,
                                  $.BER
                              )(value.certif_data, $.BER),
                        /* IF_ABSENT  */ value.auth_data === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_AuthorizationData,
                                  $.BER
                              )(value.auth_data, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SPKM_REQ(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SPKM_REQ */

/* eslint-enable */
