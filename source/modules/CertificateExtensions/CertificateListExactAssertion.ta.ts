/* eslint-disable */
import { ASN1Element as _Element, OPTIONAL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../AuthenticationFramework/Time.ta";
import {
    DistributionPointName,
    _decode_DistributionPointName,
    _encode_DistributionPointName,
} from "../CertificateExtensions/DistributionPointName.ta";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    Time,
    _decode_Time,
    _encode_Time,
} from "../AuthenticationFramework/Time.ta";
export {
    DistributionPointName,
    _decode_DistributionPointName,
    _encode_DistributionPointName,
} from "../CertificateExtensions/DistributionPointName.ta";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";

/* START_OF_SYMBOL_DEFINITION CertificateListExactAssertion */
/**
 * @summary CertificateListExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateListExactAssertion ::= SEQUENCE {
 *   issuer             Name,
 *   thisUpdate         Time,
 *   distributionPoint  DistributionPointName OPTIONAL }
 * ```
 *
 * @class
 */
export class CertificateListExactAssertion {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `thisUpdate`.
         * @public
         * @readonly
         */
        readonly thisUpdate: Time,
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>
    ) {}

    /**
     * @summary Restructures an object into a CertificateListExactAssertion
     * @description
     *
     * This takes an `object` and converts it to a `CertificateListExactAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateListExactAssertion`.
     * @returns {CertificateListExactAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertificateListExactAssertion]: CertificateListExactAssertion[_K];
            }
        >
    ): CertificateListExactAssertion {
        return new CertificateListExactAssertion(
            _o.issuer,
            _o.thisUpdate,
            _o.distributionPoint
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CertificateListExactAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificateListExactAssertion */
/**
 * @summary The Leading Root Component Types of CertificateListExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateListExactAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("thisUpdate", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "distributionPoint",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificateListExactAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificateListExactAssertion */
/**
 * @summary The Trailing Root Component Types of CertificateListExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateListExactAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificateListExactAssertion */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificateListExactAssertion */
/**
 * @summary The Extension Addition Component Types of CertificateListExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateListExactAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificateListExactAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateListExactAssertion */
let _cached_decoder_for_CertificateListExactAssertion: $.ASN1Decoder<
    CertificateListExactAssertion
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateListExactAssertion */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateListExactAssertion */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateListExactAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateListExactAssertion} The decoded data structure.
 */
export function _decode_CertificateListExactAssertion(el: _Element) {
    if (!_cached_decoder_for_CertificateListExactAssertion) {
        _cached_decoder_for_CertificateListExactAssertion = function (
            el: _Element
        ): CertificateListExactAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuer!: Name;
            let thisUpdate!: Time;
            let distributionPoint: OPTIONAL<DistributionPointName>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                issuer: (_el: _Element): void => {
                    issuer = _decode_Name(_el);
                },
                thisUpdate: (_el: _Element): void => {
                    thisUpdate = _decode_Time(_el);
                },
                distributionPoint: (_el: _Element): void => {
                    distributionPoint = _decode_DistributionPointName(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificateListExactAssertion,
                _extension_additions_list_spec_for_CertificateListExactAssertion,
                _root_component_type_list_2_spec_for_CertificateListExactAssertion,
                undefined
            );
            return new CertificateListExactAssertion /* SEQUENCE_CONSTRUCTOR_CALL */(
                issuer,
                thisUpdate,
                distributionPoint
            );
        };
    }
    return _cached_decoder_for_CertificateListExactAssertion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateListExactAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateListExactAssertion */
let _cached_encoder_for_CertificateListExactAssertion: $.ASN1Encoder<
    CertificateListExactAssertion
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateListExactAssertion */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateListExactAssertion */
/**
 * @summary Encodes a(n) CertificateListExactAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateListExactAssertion, encoded as an ASN.1 Element.
 */
export function _encode_CertificateListExactAssertion(
    value: CertificateListExactAssertion,
    elGetter: $.ASN1Encoder<CertificateListExactAssertion>
) {
    if (!_cached_encoder_for_CertificateListExactAssertion) {
        _cached_encoder_for_CertificateListExactAssertion = function (
            value: CertificateListExactAssertion,
            elGetter: $.ASN1Encoder<CertificateListExactAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
                        /* REQUIRED   */ _encode_Time(value.thisUpdate, $.BER),
                        /* IF_ABSENT  */ value.distributionPoint === undefined
                            ? undefined
                            : _encode_DistributionPointName(
                                  value.distributionPoint,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CertificateListExactAssertion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateListExactAssertion */

/* eslint-enable */
