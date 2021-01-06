/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SubSchemaSyntax_Item,
    _decode_SubSchemaSyntax_Item,
    _encode_SubSchemaSyntax_Item,
} from "../DirectoryManagement/SubSchemaSyntax-Item.ta";
export {
    SubSchemaSyntax_Item,
    _decode_SubSchemaSyntax_Item,
    _encode_SubSchemaSyntax_Item,
} from "../DirectoryManagement/SubSchemaSyntax-Item.ta";

/* START_OF_SYMBOL_DEFINITION SubSchemaSyntax */
/**
 * @summary SubSchemaSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubSchemaSyntax  ::=
 *   SEQUENCE OF
 *     SEQUENCE {name       [1]  Name, --  Name of the subschema subentry for the subschema
 *               subSchema
 *                 [2]  SEQUENCE {structureRules
 *                                  [1]  SEQUENCE OF DITStructureRuleDescription
 *                                    OPTIONAL,
 *                                contentRules
 *                                  [2]  SEQUENCE OF DITContentRuleDescription
 *                                    OPTIONAL,
 *                                matchingRules
 *                                  [3]  SEQUENCE OF MatchingRuleDescription
 *                                    OPTIONAL,
 *                                attributeTypes
 *                                  [4]  SEQUENCE OF AttributeTypeDescription
 *                                    OPTIONAL,
 *                                objectClasses
 *                                  [5]  SEQUENCE OF ObjectClassDescription
 *                                    OPTIONAL,
 *                                nameForms
 *                                  [6]  SEQUENCE OF NameFormDescription OPTIONAL,
 *                                matchRuleUses
 *                                  [7]  SEQUENCE OF MatchingRuleUseDescription
 *                                    OPTIONAL}}
 * ```
 */
export type SubSchemaSyntax = SubSchemaSyntax_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SubSchemaSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubSchemaSyntax */
let _cached_decoder_for_SubSchemaSyntax: $.ASN1Decoder<SubSchemaSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubSchemaSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_SubSchemaSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) SubSchemaSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubSchemaSyntax} The decoded data structure.
 */
export function _decode_SubSchemaSyntax(el: _Element) {
    if (!_cached_decoder_for_SubSchemaSyntax) {
        _cached_decoder_for_SubSchemaSyntax = $._decodeSequenceOf<SubSchemaSyntax_Item>(
            () => _decode_SubSchemaSyntax_Item
        );
    }
    return _cached_decoder_for_SubSchemaSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubSchemaSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubSchemaSyntax */
let _cached_encoder_for_SubSchemaSyntax: $.ASN1Encoder<SubSchemaSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubSchemaSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_SubSchemaSyntax */
/**
 * @summary Encodes a(n) SubSchemaSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubSchemaSyntax, encoded as an ASN.1 Element.
 */
export function _encode_SubSchemaSyntax(
    value: SubSchemaSyntax,
    elGetter: $.ASN1Encoder<SubSchemaSyntax>
) {
    if (!_cached_encoder_for_SubSchemaSyntax) {
        _cached_encoder_for_SubSchemaSyntax = $._encodeSequenceOf<SubSchemaSyntax_Item>(
            () => _encode_SubSchemaSyntax_Item,
            $.BER
        );
    }
    return _cached_encoder_for_SubSchemaSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubSchemaSyntax */

/* eslint-enable */
