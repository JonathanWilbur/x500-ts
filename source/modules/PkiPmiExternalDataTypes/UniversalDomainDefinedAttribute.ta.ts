/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../PkiPmiExternalDataTypes/UniversalOrBMPString.ta";
export { ub_domain_defined_attribute_type_length } from "../PkiPmiExternalDataTypes/ub-domain-defined-attribute-type-length.va";
export { ub_domain_defined_attribute_value_length } from "../PkiPmiExternalDataTypes/ub-domain-defined-attribute-value-length.va";
export {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../PkiPmiExternalDataTypes/UniversalOrBMPString.ta";

/* START_OF_SYMBOL_DEFINITION UniversalDomainDefinedAttribute */
/**
 * @summary UniversalDomainDefinedAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalDomainDefinedAttribute ::= SEQUENCE {
 *   type   UniversalOrBMPString{ub-domain-defined-attribute-type-length},
 *   value  UniversalOrBMPString{ub-domain-defined-attribute-value-length} }
 * ```
 *
 * @class
 */
export class UniversalDomainDefinedAttribute {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: UniversalOrBMPString,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: UniversalOrBMPString
    ) {}

    /**
     * @summary Restructures an object into a UniversalDomainDefinedAttribute
     * @description
     *
     * This takes an `object` and converts it to a `UniversalDomainDefinedAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UniversalDomainDefinedAttribute`.
     * @returns {UniversalDomainDefinedAttribute}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof UniversalDomainDefinedAttribute]: UniversalDomainDefinedAttribute[_K];
            }
        >
    ): UniversalDomainDefinedAttribute {
        return new UniversalDomainDefinedAttribute(_o.type_, _o.value);
    }
}
/* END_OF_SYMBOL_DEFINITION UniversalDomainDefinedAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UniversalDomainDefinedAttribute */
/**
 * @summary The Leading Root Component Types of UniversalDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UniversalDomainDefinedAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "value",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UniversalDomainDefinedAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UniversalDomainDefinedAttribute */
/**
 * @summary The Trailing Root Component Types of UniversalDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UniversalDomainDefinedAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UniversalDomainDefinedAttribute */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UniversalDomainDefinedAttribute */
/**
 * @summary The Extension Addition Component Types of UniversalDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UniversalDomainDefinedAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UniversalDomainDefinedAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalDomainDefinedAttribute */
let _cached_decoder_for_UniversalDomainDefinedAttribute: $.ASN1Decoder<UniversalDomainDefinedAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalDomainDefinedAttribute */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalDomainDefinedAttribute */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalDomainDefinedAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalDomainDefinedAttribute} The decoded data structure.
 */
export function _decode_UniversalDomainDefinedAttribute(el: _Element) {
    if (!_cached_decoder_for_UniversalDomainDefinedAttribute) {
        _cached_decoder_for_UniversalDomainDefinedAttribute = function (
            el: _Element
        ): UniversalDomainDefinedAttribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "UniversalDomainDefinedAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: UniversalOrBMPString;
            let value!: UniversalOrBMPString;
            type_ = _decode_UniversalOrBMPString(sequence[0]);
            value = _decode_UniversalOrBMPString(sequence[1]);
            return new UniversalDomainDefinedAttribute(type_, value);
        };
    }
    return _cached_decoder_for_UniversalDomainDefinedAttribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalDomainDefinedAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalDomainDefinedAttribute */
let _cached_encoder_for_UniversalDomainDefinedAttribute: $.ASN1Encoder<UniversalDomainDefinedAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalDomainDefinedAttribute */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalDomainDefinedAttribute */
/**
 * @summary Encodes a(n) UniversalDomainDefinedAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalDomainDefinedAttribute, encoded as an ASN.1 Element.
 */
export function _encode_UniversalDomainDefinedAttribute(
    value: UniversalDomainDefinedAttribute,
    elGetter: $.ASN1Encoder<UniversalDomainDefinedAttribute>
) {
    if (!_cached_encoder_for_UniversalDomainDefinedAttribute) {
        _cached_encoder_for_UniversalDomainDefinedAttribute = function (
            value: UniversalDomainDefinedAttribute,
            elGetter: $.ASN1Encoder<UniversalDomainDefinedAttribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_UniversalOrBMPString(
                            value.type_,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_UniversalOrBMPString(
                            value.value,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UniversalDomainDefinedAttribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalDomainDefinedAttribute */

/* eslint-enable */
