/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION HierarchySelections */
/**
 * @summary HierarchySelections
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HierarchySelections  ::=  BIT STRING {
 *   self                  (0),
 *   children              (1),
 *   parent                (2),
 *   hierarchy             (3),
 *   top                   (4),
 *   subtree               (5),
 *   siblings              (6),
 *   siblingChildren       (7),
 *   siblingSubtree        (8),
 *   all                   (9) }
 * ```
 */
export type HierarchySelections = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION HierarchySelections */

/* START_OF_SYMBOL_DEFINITION HierarchySelections_self */
/**
 * @summary HierarchySelections_self
 * @constant
 */
export const HierarchySelections_self: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION HierarchySelections_self */

/* START_OF_SYMBOL_DEFINITION self */
/**
 * @summary self
 * @constant
 */
export const self: number = HierarchySelections_self; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION self */

/* START_OF_SYMBOL_DEFINITION HierarchySelections_children */
/**
 * @summary HierarchySelections_children
 * @constant
 */
export const HierarchySelections_children: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION HierarchySelections_children */

/* START_OF_SYMBOL_DEFINITION children */
/**
 * @summary children
 * @constant
 */
export const children: number = HierarchySelections_children; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION children */

/* START_OF_SYMBOL_DEFINITION HierarchySelections_parent */
/**
 * @summary HierarchySelections_parent
 * @constant
 */
export const HierarchySelections_parent: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION HierarchySelections_parent */

/* START_OF_SYMBOL_DEFINITION parent */
/**
 * @summary parent
 * @constant
 */
export const parent: number = HierarchySelections_parent; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION parent */

/* START_OF_SYMBOL_DEFINITION HierarchySelections_hierarchy */
/**
 * @summary HierarchySelections_hierarchy
 * @constant
 */
export const HierarchySelections_hierarchy: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION HierarchySelections_hierarchy */

/* START_OF_SYMBOL_DEFINITION hierarchy */
/**
 * @summary hierarchy
 * @constant
 */
export const hierarchy: number = HierarchySelections_hierarchy; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION hierarchy */

/* START_OF_SYMBOL_DEFINITION HierarchySelections_top */
/**
 * @summary HierarchySelections_top
 * @constant
 */
export const HierarchySelections_top: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION HierarchySelections_top */

/* START_OF_SYMBOL_DEFINITION top */
/**
 * @summary top
 * @constant
 */
export const top: number = HierarchySelections_top; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION top */

/* START_OF_SYMBOL_DEFINITION HierarchySelections_subtree */
/**
 * @summary HierarchySelections_subtree
 * @constant
 */
export const HierarchySelections_subtree: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION HierarchySelections_subtree */

/* START_OF_SYMBOL_DEFINITION subtree */
/**
 * @summary subtree
 * @constant
 */
export const subtree: number = HierarchySelections_subtree; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION subtree */

/* START_OF_SYMBOL_DEFINITION HierarchySelections_siblings */
/**
 * @summary HierarchySelections_siblings
 * @constant
 */
export const HierarchySelections_siblings: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION HierarchySelections_siblings */

/* START_OF_SYMBOL_DEFINITION siblings */
/**
 * @summary siblings
 * @constant
 */
export const siblings: number = HierarchySelections_siblings; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION siblings */

/* START_OF_SYMBOL_DEFINITION HierarchySelections_siblingChildren */
/**
 * @summary HierarchySelections_siblingChildren
 * @constant
 */
export const HierarchySelections_siblingChildren: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION HierarchySelections_siblingChildren */

/* START_OF_SYMBOL_DEFINITION siblingChildren */
/**
 * @summary siblingChildren
 * @constant
 */
export const siblingChildren: number = HierarchySelections_siblingChildren; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION siblingChildren */

/* START_OF_SYMBOL_DEFINITION HierarchySelections_siblingSubtree */
/**
 * @summary HierarchySelections_siblingSubtree
 * @constant
 */
export const HierarchySelections_siblingSubtree: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION HierarchySelections_siblingSubtree */

/* START_OF_SYMBOL_DEFINITION siblingSubtree */
/**
 * @summary siblingSubtree
 * @constant
 */
export const siblingSubtree: number = HierarchySelections_siblingSubtree; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION siblingSubtree */

/* START_OF_SYMBOL_DEFINITION HierarchySelections_all */
/**
 * @summary HierarchySelections_all
 * @constant
 */
export const HierarchySelections_all: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION HierarchySelections_all */

/* START_OF_SYMBOL_DEFINITION all */
/**
 * @summary all
 * @constant
 */
export const all: number = HierarchySelections_all; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION all */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HierarchySelections */
let _cached_decoder_for_HierarchySelections: $.ASN1Decoder<HierarchySelections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HierarchySelections */

/* START_OF_SYMBOL_DEFINITION _decode_HierarchySelections */
/**
 * @summary Decodes an ASN.1 element into a(n) HierarchySelections
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HierarchySelections} The decoded data structure.
 */
export function _decode_HierarchySelections(el: _Element) {
    if (!_cached_decoder_for_HierarchySelections) {
        _cached_decoder_for_HierarchySelections = $._decodeBitString;
    }
    return _cached_decoder_for_HierarchySelections(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HierarchySelections */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HierarchySelections */
let _cached_encoder_for_HierarchySelections: $.ASN1Encoder<HierarchySelections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HierarchySelections */

/* START_OF_SYMBOL_DEFINITION _encode_HierarchySelections */
/**
 * @summary Encodes a(n) HierarchySelections into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HierarchySelections, encoded as an ASN.1 Element.
 */
export function _encode_HierarchySelections(
    value: HierarchySelections,
    elGetter: $.ASN1Encoder<HierarchySelections>
) {
    if (!_cached_encoder_for_HierarchySelections) {
        _cached_encoder_for_HierarchySelections = $._encodeBitString;
    }
    return _cached_encoder_for_HierarchySelections(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HierarchySelections */

/* eslint-enable */
