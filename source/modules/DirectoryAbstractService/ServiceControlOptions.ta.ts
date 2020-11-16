/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions */
/**
 * @summary ServiceControlOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceControlOptions  ::=  BIT STRING {
 *   preferChaining          (0),
 *   chainingProhibited      (1),
 *   localScope              (2),
 *   dontUseCopy             (3),
 *   dontDereferenceAliases  (4),
 *   subentries              (5),
 *   copyShallDo             (6),
 *   partialNameResolution   (7),
 *   manageDSAIT             (8),
 *   noSubtypeMatch          (9),
 *   noSubtypeSelection      (10),
 *   countFamily             (11),
 *   dontSelectFriends       (12),
 *   dontMatchFriends        (13),
 *   allowWriteableCopy      (14)}
 * ```
 */
export type ServiceControlOptions = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions */

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions_preferChaining */
/**
 * @summary ServiceControlOptions_preferChaining
 * @constant
 */
export const ServiceControlOptions_preferChaining: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions_preferChaining */

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions_chainingProhibited */
/**
 * @summary ServiceControlOptions_chainingProhibited
 * @constant
 */
export const ServiceControlOptions_chainingProhibited: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions_chainingProhibited */

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions_localScope */
/**
 * @summary ServiceControlOptions_localScope
 * @constant
 */
export const ServiceControlOptions_localScope: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions_localScope */

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions_dontUseCopy */
/**
 * @summary ServiceControlOptions_dontUseCopy
 * @constant
 */
export const ServiceControlOptions_dontUseCopy: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions_dontUseCopy */

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions_dontDereferenceAliases */
/**
 * @summary ServiceControlOptions_dontDereferenceAliases
 * @constant
 */
export const ServiceControlOptions_dontDereferenceAliases: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions_dontDereferenceAliases */

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions_subentries */
/**
 * @summary ServiceControlOptions_subentries
 * @constant
 */
export const ServiceControlOptions_subentries: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions_subentries */

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions_copyShallDo */
/**
 * @summary ServiceControlOptions_copyShallDo
 * @constant
 */
export const ServiceControlOptions_copyShallDo: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions_copyShallDo */

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions_partialNameResolution */
/**
 * @summary ServiceControlOptions_partialNameResolution
 * @constant
 */
export const ServiceControlOptions_partialNameResolution: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions_partialNameResolution */

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions_manageDSAIT */
/**
 * @summary ServiceControlOptions_manageDSAIT
 * @constant
 */
export const ServiceControlOptions_manageDSAIT: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions_manageDSAIT */

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions_noSubtypeMatch */
/**
 * @summary ServiceControlOptions_noSubtypeMatch
 * @constant
 */
export const ServiceControlOptions_noSubtypeMatch: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions_noSubtypeMatch */

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions_noSubtypeSelection */
/**
 * @summary ServiceControlOptions_noSubtypeSelection
 * @constant
 */
export const ServiceControlOptions_noSubtypeSelection: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions_noSubtypeSelection */

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions_countFamily */
/**
 * @summary ServiceControlOptions_countFamily
 * @constant
 */
export const ServiceControlOptions_countFamily: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions_countFamily */

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions_dontSelectFriends */
/**
 * @summary ServiceControlOptions_dontSelectFriends
 * @constant
 */
export const ServiceControlOptions_dontSelectFriends: number = 12; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions_dontSelectFriends */

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions_dontMatchFriends */
/**
 * @summary ServiceControlOptions_dontMatchFriends
 * @constant
 */
export const ServiceControlOptions_dontMatchFriends: number = 13; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions_dontMatchFriends */

/* START_OF_SYMBOL_DEFINITION ServiceControlOptions_allowWriteableCopy */
/**
 * @summary ServiceControlOptions_allowWriteableCopy
 * @constant
 */
export const ServiceControlOptions_allowWriteableCopy: number = 14; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ServiceControlOptions_allowWriteableCopy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceControlOptions */
let _cached_decoder_for_ServiceControlOptions: $.ASN1Decoder<
    ServiceControlOptions
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceControlOptions */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceControlOptions */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceControlOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceControlOptions} The decoded data structure.
 */
export function _decode_ServiceControlOptions(el: _Element) {
    if (!_cached_decoder_for_ServiceControlOptions) {
        _cached_decoder_for_ServiceControlOptions = $._decodeBitString;
    }
    return _cached_decoder_for_ServiceControlOptions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceControlOptions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceControlOptions */
let _cached_encoder_for_ServiceControlOptions: $.ASN1Encoder<
    ServiceControlOptions
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceControlOptions */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceControlOptions */
/**
 * @summary Encodes a(n) ServiceControlOptions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceControlOptions, encoded as an ASN.1 Element.
 */
export function _encode_ServiceControlOptions(
    value: ServiceControlOptions,
    elGetter: $.ASN1Encoder<ServiceControlOptions>
) {
    if (!_cached_encoder_for_ServiceControlOptions) {
        _cached_encoder_for_ServiceControlOptions = $._encodeBitString;
    }
    return _cached_encoder_for_ServiceControlOptions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceControlOptions */

/* eslint-enable */
