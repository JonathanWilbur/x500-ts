/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificateList,
    _decode_CertificateList,
    _encode_CertificateList,
} from "../AuthenticationFramework/CertificateList.ta";
import {
    CertificationPath,
    _decode_CertificationPath,
    _encode_CertificationPath,
} from "../SpkmGssTokens/CertificationPath.ta";
export {
    CertificateList,
    _decode_CertificateList,
    _encode_CertificateList,
} from "../AuthenticationFramework/CertificateList.ta";
export {
    CertificationPath,
    _decode_CertificationPath,
    _encode_CertificationPath,
} from "../SpkmGssTokens/CertificationPath.ta";

/* START_OF_SYMBOL_DEFINITION CertificationData */
/**
 * @summary CertificationData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificationData ::= SEQUENCE {
 *   certificationPath          [0]  CertificationPath OPTIONAL,
 *   certificateRevocationList  [1]  CertificateList OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CertificationData {
    constructor(
        /**
         * @summary `certificationPath`.
         * @public
         * @readonly
         */
        readonly certificationPath: OPTIONAL<CertificationPath>,
        /**
         * @summary `certificateRevocationList`.
         * @public
         * @readonly
         */
        readonly certificateRevocationList: OPTIONAL<CertificateList>
    ) {}

    /**
     * @summary Restructures an object into a CertificationData
     * @description
     *
     * This takes an `object` and converts it to a `CertificationData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificationData`.
     * @returns {CertificationData}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertificationData]: CertificationData[_K] }>
    ): CertificationData {
        return new CertificationData(
            _o.certificationPath,
            _o.certificateRevocationList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CertificationData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificationData */
/**
 * @summary The Leading Root Component Types of CertificationData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificationData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certificationPath",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certificateRevocationList",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificationData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificationData */
/**
 * @summary The Trailing Root Component Types of CertificationData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificationData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificationData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificationData */
/**
 * @summary The Extension Addition Component Types of CertificationData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificationData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificationData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificationData */
let _cached_decoder_for_CertificationData: $.ASN1Decoder<CertificationData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificationData */

/* START_OF_SYMBOL_DEFINITION _decode_CertificationData */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificationData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificationData} The decoded data structure.
 */
export function _decode_CertificationData(el: _Element) {
    if (!_cached_decoder_for_CertificationData) {
        _cached_decoder_for_CertificationData = function (
            el: _Element
        ): CertificationData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certificationPath: OPTIONAL<CertificationPath>;
            let certificateRevocationList: OPTIONAL<CertificateList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                certificationPath: (_el: _Element): void => {
                    certificationPath = $._decode_implicit<CertificationPath>(
                        () => _decode_CertificationPath
                    )(_el);
                },
                certificateRevocationList: (_el: _Element): void => {
                    certificateRevocationList = $._decode_implicit<CertificateList>(
                        () => _decode_CertificateList
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificationData,
                _extension_additions_list_spec_for_CertificationData,
                _root_component_type_list_2_spec_for_CertificationData,
                undefined
            );
            return new CertificationData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ certificationPath,
                certificateRevocationList
            );
        };
    }
    return _cached_decoder_for_CertificationData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificationData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificationData */
let _cached_encoder_for_CertificationData: $.ASN1Encoder<CertificationData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificationData */

/* START_OF_SYMBOL_DEFINITION _encode_CertificationData */
/**
 * @summary Encodes a(n) CertificationData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificationData, encoded as an ASN.1 Element.
 */
export function _encode_CertificationData(
    value: CertificationData,
    elGetter: $.ASN1Encoder<CertificationData>
) {
    if (!_cached_encoder_for_CertificationData) {
        _cached_encoder_for_CertificationData = function (
            value: CertificationData,
            elGetter: $.ASN1Encoder<CertificationData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.certificationPath === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_CertificationPath,
                                  $.BER
                              )(value.certificationPath, $.BER),
                        /* IF_ABSENT  */ value.certificateRevocationList ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_CertificateList,
                                  $.BER
                              )(value.certificateRevocationList, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CertificationData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificationData */

/* eslint-enable */
