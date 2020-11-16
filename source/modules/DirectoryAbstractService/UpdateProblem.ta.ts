/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION UpdateProblem */
/**
 * @summary UpdateProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateProblem  ::=  INTEGER {
 *   namingViolation                   (1),
 *   objectClassViolation              (2),
 *   notAllowedOnNonLeaf               (3),
 *   notAllowedOnRDN                   (4),
 *   entryAlreadyExists                (5),
 *   affectsMultipleDSAs               (6),
 *   objectClassModificationProhibited (7),
 *   noSuchSuperior                    (8),
 *   notAncestor                       (9),
 *   parentNotAncestor                 (10),
 *   hierarchyRuleViolation            (11),
 *   familyRuleViolation               (12),
 *   insufficientPasswordQuality       (13),
 *   passwordInHistory                 (14),
 *   noPasswordSlot                    (15) }
 * ```
 */
export type UpdateProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION UpdateProblem */

/* START_OF_SYMBOL_DEFINITION UpdateProblem_namingViolation */
/**
 * @summary UpdateProblem_namingViolation
 * @constant
 * @type {number}
 */
export const UpdateProblem_namingViolation: UpdateProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION UpdateProblem_namingViolation */

/* START_OF_SYMBOL_DEFINITION UpdateProblem_objectClassViolation */
/**
 * @summary UpdateProblem_objectClassViolation
 * @constant
 * @type {number}
 */
export const UpdateProblem_objectClassViolation: UpdateProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION UpdateProblem_objectClassViolation */

/* START_OF_SYMBOL_DEFINITION UpdateProblem_notAllowedOnNonLeaf */
/**
 * @summary UpdateProblem_notAllowedOnNonLeaf
 * @constant
 * @type {number}
 */
export const UpdateProblem_notAllowedOnNonLeaf: UpdateProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION UpdateProblem_notAllowedOnNonLeaf */

/* START_OF_SYMBOL_DEFINITION UpdateProblem_notAllowedOnRDN */
/**
 * @summary UpdateProblem_notAllowedOnRDN
 * @constant
 * @type {number}
 */
export const UpdateProblem_notAllowedOnRDN: UpdateProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION UpdateProblem_notAllowedOnRDN */

/* START_OF_SYMBOL_DEFINITION UpdateProblem_entryAlreadyExists */
/**
 * @summary UpdateProblem_entryAlreadyExists
 * @constant
 * @type {number}
 */
export const UpdateProblem_entryAlreadyExists: UpdateProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION UpdateProblem_entryAlreadyExists */

/* START_OF_SYMBOL_DEFINITION UpdateProblem_affectsMultipleDSAs */
/**
 * @summary UpdateProblem_affectsMultipleDSAs
 * @constant
 * @type {number}
 */
export const UpdateProblem_affectsMultipleDSAs: UpdateProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION UpdateProblem_affectsMultipleDSAs */

/* START_OF_SYMBOL_DEFINITION UpdateProblem_objectClassModificationProhibited */
/**
 * @summary UpdateProblem_objectClassModificationProhibited
 * @constant
 * @type {number}
 */
export const UpdateProblem_objectClassModificationProhibited: UpdateProblem = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION UpdateProblem_objectClassModificationProhibited */

/* START_OF_SYMBOL_DEFINITION UpdateProblem_noSuchSuperior */
/**
 * @summary UpdateProblem_noSuchSuperior
 * @constant
 * @type {number}
 */
export const UpdateProblem_noSuchSuperior: UpdateProblem = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION UpdateProblem_noSuchSuperior */

/* START_OF_SYMBOL_DEFINITION UpdateProblem_notAncestor */
/**
 * @summary UpdateProblem_notAncestor
 * @constant
 * @type {number}
 */
export const UpdateProblem_notAncestor: UpdateProblem = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION UpdateProblem_notAncestor */

/* START_OF_SYMBOL_DEFINITION UpdateProblem_parentNotAncestor */
/**
 * @summary UpdateProblem_parentNotAncestor
 * @constant
 * @type {number}
 */
export const UpdateProblem_parentNotAncestor: UpdateProblem = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION UpdateProblem_parentNotAncestor */

/* START_OF_SYMBOL_DEFINITION UpdateProblem_hierarchyRuleViolation */
/**
 * @summary UpdateProblem_hierarchyRuleViolation
 * @constant
 * @type {number}
 */
export const UpdateProblem_hierarchyRuleViolation: UpdateProblem = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION UpdateProblem_hierarchyRuleViolation */

/* START_OF_SYMBOL_DEFINITION UpdateProblem_familyRuleViolation */
/**
 * @summary UpdateProblem_familyRuleViolation
 * @constant
 * @type {number}
 */
export const UpdateProblem_familyRuleViolation: UpdateProblem = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION UpdateProblem_familyRuleViolation */

/* START_OF_SYMBOL_DEFINITION UpdateProblem_insufficientPasswordQuality */
/**
 * @summary UpdateProblem_insufficientPasswordQuality
 * @constant
 * @type {number}
 */
export const UpdateProblem_insufficientPasswordQuality: UpdateProblem = 13; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION UpdateProblem_insufficientPasswordQuality */

/* START_OF_SYMBOL_DEFINITION UpdateProblem_passwordInHistory */
/**
 * @summary UpdateProblem_passwordInHistory
 * @constant
 * @type {number}
 */
export const UpdateProblem_passwordInHistory: UpdateProblem = 14; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION UpdateProblem_passwordInHistory */

/* START_OF_SYMBOL_DEFINITION UpdateProblem_noPasswordSlot */
/**
 * @summary UpdateProblem_noPasswordSlot
 * @constant
 * @type {number}
 */
export const UpdateProblem_noPasswordSlot: UpdateProblem = 15; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION UpdateProblem_noPasswordSlot */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UpdateProblem */
let _cached_decoder_for_UpdateProblem: $.ASN1Decoder<
    UpdateProblem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UpdateProblem */

/* START_OF_SYMBOL_DEFINITION _decode_UpdateProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) UpdateProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateProblem} The decoded data structure.
 */
export function _decode_UpdateProblem(el: _Element) {
    if (!_cached_decoder_for_UpdateProblem) {
        _cached_decoder_for_UpdateProblem = $._decodeInteger;
    }
    return _cached_decoder_for_UpdateProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UpdateProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UpdateProblem */
let _cached_encoder_for_UpdateProblem: $.ASN1Encoder<
    UpdateProblem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UpdateProblem */

/* START_OF_SYMBOL_DEFINITION _encode_UpdateProblem */
/**
 * @summary Encodes a(n) UpdateProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateProblem, encoded as an ASN.1 Element.
 */
export function _encode_UpdateProblem(
    value: UpdateProblem,
    elGetter: $.ASN1Encoder<UpdateProblem>
) {
    if (!_cached_encoder_for_UpdateProblem) {
        _cached_encoder_for_UpdateProblem = $._encodeInteger;
    }
    return _cached_encoder_for_UpdateProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UpdateProblem */

/* eslint-enable */
