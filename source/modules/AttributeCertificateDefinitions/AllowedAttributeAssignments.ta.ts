/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AllowedAttributeAssignments_Item,
    _decode_AllowedAttributeAssignments_Item,
    _encode_AllowedAttributeAssignments_Item,
} from "../AttributeCertificateDefinitions/AllowedAttributeAssignments-Item.ta";
export {
    AllowedAttributeAssignments_Item,
    _decode_AllowedAttributeAssignments_Item,
    _encode_AllowedAttributeAssignments_Item,
} from "../AttributeCertificateDefinitions/AllowedAttributeAssignments-Item.ta";

/* START_OF_SYMBOL_DEFINITION AllowedAttributeAssignments */
/**
 * @summary AllowedAttributeAssignments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AllowedAttributeAssignments  ::=  SET OF SEQUENCE {
 *   attributes              [0]  SET OF CHOICE {
 *     attributeType           [0]  AttributeType,
 *     attributeTypeandValues  [1]  Attribute{{SupportedAttributes}},
 *     ... },
 *   holderDomain            [1]  GeneralName,
 *   ... }
 * ```
 */
export type AllowedAttributeAssignments = AllowedAttributeAssignments_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AllowedAttributeAssignments */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AllowedAttributeAssignments */
let _cached_decoder_for_AllowedAttributeAssignments: $.ASN1Decoder<
    AllowedAttributeAssignments
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AllowedAttributeAssignments */

/* START_OF_SYMBOL_DEFINITION _decode_AllowedAttributeAssignments */
/**
 * @summary Decodes an ASN.1 element into a(n) AllowedAttributeAssignments
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AllowedAttributeAssignments} The decoded data structure.
 */
export function _decode_AllowedAttributeAssignments(el: _Element) {
    if (!_cached_decoder_for_AllowedAttributeAssignments) {
        _cached_decoder_for_AllowedAttributeAssignments = $._decodeSetOf<
            AllowedAttributeAssignments_Item
        >(() => _decode_AllowedAttributeAssignments_Item);
    }
    return _cached_decoder_for_AllowedAttributeAssignments(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AllowedAttributeAssignments */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AllowedAttributeAssignments */
let _cached_encoder_for_AllowedAttributeAssignments: $.ASN1Encoder<
    AllowedAttributeAssignments
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AllowedAttributeAssignments */

/* START_OF_SYMBOL_DEFINITION _encode_AllowedAttributeAssignments */
/**
 * @summary Encodes a(n) AllowedAttributeAssignments into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllowedAttributeAssignments, encoded as an ASN.1 Element.
 */
export function _encode_AllowedAttributeAssignments(
    value: AllowedAttributeAssignments,
    elGetter: $.ASN1Encoder<AllowedAttributeAssignments>
) {
    if (!_cached_encoder_for_AllowedAttributeAssignments) {
        _cached_encoder_for_AllowedAttributeAssignments = $._encodeSetOf<
            AllowedAttributeAssignments_Item
        >(() => _encode_AllowedAttributeAssignments_Item, $.BER);
    }
    return _cached_encoder_for_AllowedAttributeAssignments(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AllowedAttributeAssignments */

/* eslint-enable */
