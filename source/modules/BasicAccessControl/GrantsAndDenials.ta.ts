/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials */
/**
 * @summary GrantsAndDenials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GrantsAndDenials  ::=  BIT STRING {
 *   -- permissions that may be used in conjunction
 *   -- with any component of ProtectedItems
 *   grantAdd             (0),
 *   denyAdd              (1),
 *   grantDiscloseOnError (2),
 *   denyDiscloseOnError  (3),
 *   grantRead            (4),
 *   denyRead             (5),
 *   grantRemove          (6),
 *   denyRemove           (7),
 *   -- permissions that may be used only in conjunction
 *   -- with the entry component
 *   grantBrowse          (8),
 *   denyBrowse           (9),
 *   grantExport          (10),
 *   denyExport           (11),
 *   grantImport          (12),
 *   denyImport           (13),
 *   grantModify          (14),
 *   denyModify           (15),
 *   grantRename          (16),
 *   denyRename           (17),
 *   grantReturnDN        (18),
 *   denyReturnDN         (19),
 *   -- permissions that may be used in conjunction
 *   -- with any component, except entry, of ProtectedItems
 *   grantCompare         (20),
 *   denyCompare          (21),
 *   grantFilterMatch     (22),
 *   denyFilterMatch      (23),
 *   grantInvoke          (24),
 *   denyInvoke           (25) }
 * ```
 */
export type GrantsAndDenials = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_grantAdd */
/**
 * @summary GrantsAndDenials_grantAdd
 * @constant
 */
export const GrantsAndDenials_grantAdd: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_grantAdd */

/* START_OF_SYMBOL_DEFINITION grantAdd */
/**
 * @summary grantAdd
 * @constant
 */
export const grantAdd: number = GrantsAndDenials_grantAdd; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION grantAdd */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_denyAdd */
/**
 * @summary GrantsAndDenials_denyAdd
 * @constant
 */
export const GrantsAndDenials_denyAdd: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_denyAdd */

/* START_OF_SYMBOL_DEFINITION denyAdd */
/**
 * @summary denyAdd
 * @constant
 */
export const denyAdd: number = GrantsAndDenials_denyAdd; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION denyAdd */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_grantDiscloseOnError */
/**
 * @summary GrantsAndDenials_grantDiscloseOnError
 * @constant
 */
export const GrantsAndDenials_grantDiscloseOnError: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_grantDiscloseOnError */

/* START_OF_SYMBOL_DEFINITION grantDiscloseOnError */
/**
 * @summary grantDiscloseOnError
 * @constant
 */
export const grantDiscloseOnError: number = GrantsAndDenials_grantDiscloseOnError; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION grantDiscloseOnError */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_denyDiscloseOnError */
/**
 * @summary GrantsAndDenials_denyDiscloseOnError
 * @constant
 */
export const GrantsAndDenials_denyDiscloseOnError: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_denyDiscloseOnError */

/* START_OF_SYMBOL_DEFINITION denyDiscloseOnError */
/**
 * @summary denyDiscloseOnError
 * @constant
 */
export const denyDiscloseOnError: number = GrantsAndDenials_denyDiscloseOnError; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION denyDiscloseOnError */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_grantRead */
/**
 * @summary GrantsAndDenials_grantRead
 * @constant
 */
export const GrantsAndDenials_grantRead: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_grantRead */

/* START_OF_SYMBOL_DEFINITION grantRead */
/**
 * @summary grantRead
 * @constant
 */
export const grantRead: number = GrantsAndDenials_grantRead; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION grantRead */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_denyRead */
/**
 * @summary GrantsAndDenials_denyRead
 * @constant
 */
export const GrantsAndDenials_denyRead: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_denyRead */

/* START_OF_SYMBOL_DEFINITION denyRead */
/**
 * @summary denyRead
 * @constant
 */
export const denyRead: number = GrantsAndDenials_denyRead; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION denyRead */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_grantRemove */
/**
 * @summary GrantsAndDenials_grantRemove
 * @constant
 */
export const GrantsAndDenials_grantRemove: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_grantRemove */

/* START_OF_SYMBOL_DEFINITION grantRemove */
/**
 * @summary grantRemove
 * @constant
 */
export const grantRemove: number = GrantsAndDenials_grantRemove; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION grantRemove */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_denyRemove */
/**
 * @summary GrantsAndDenials_denyRemove
 * @constant
 */
export const GrantsAndDenials_denyRemove: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_denyRemove */

/* START_OF_SYMBOL_DEFINITION denyRemove */
/**
 * @summary denyRemove
 * @constant
 */
export const denyRemove: number = GrantsAndDenials_denyRemove; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION denyRemove */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_grantBrowse */
/**
 * @summary GrantsAndDenials_grantBrowse
 * @constant
 */
export const GrantsAndDenials_grantBrowse: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_grantBrowse */

/* START_OF_SYMBOL_DEFINITION grantBrowse */
/**
 * @summary grantBrowse
 * @constant
 */
export const grantBrowse: number = GrantsAndDenials_grantBrowse; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION grantBrowse */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_denyBrowse */
/**
 * @summary GrantsAndDenials_denyBrowse
 * @constant
 */
export const GrantsAndDenials_denyBrowse: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_denyBrowse */

/* START_OF_SYMBOL_DEFINITION denyBrowse */
/**
 * @summary denyBrowse
 * @constant
 */
export const denyBrowse: number = GrantsAndDenials_denyBrowse; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION denyBrowse */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_grantExport */
/**
 * @summary GrantsAndDenials_grantExport
 * @constant
 */
export const GrantsAndDenials_grantExport: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_grantExport */

/* START_OF_SYMBOL_DEFINITION grantExport */
/**
 * @summary grantExport
 * @constant
 */
export const grantExport: number = GrantsAndDenials_grantExport; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION grantExport */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_denyExport */
/**
 * @summary GrantsAndDenials_denyExport
 * @constant
 */
export const GrantsAndDenials_denyExport: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_denyExport */

/* START_OF_SYMBOL_DEFINITION denyExport */
/**
 * @summary denyExport
 * @constant
 */
export const denyExport: number = GrantsAndDenials_denyExport; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION denyExport */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_grantImport */
/**
 * @summary GrantsAndDenials_grantImport
 * @constant
 */
export const GrantsAndDenials_grantImport: number = 12; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_grantImport */

/* START_OF_SYMBOL_DEFINITION grantImport */
/**
 * @summary grantImport
 * @constant
 */
export const grantImport: number = GrantsAndDenials_grantImport; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION grantImport */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_denyImport */
/**
 * @summary GrantsAndDenials_denyImport
 * @constant
 */
export const GrantsAndDenials_denyImport: number = 13; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_denyImport */

/* START_OF_SYMBOL_DEFINITION denyImport */
/**
 * @summary denyImport
 * @constant
 */
export const denyImport: number = GrantsAndDenials_denyImport; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION denyImport */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_grantModify */
/**
 * @summary GrantsAndDenials_grantModify
 * @constant
 */
export const GrantsAndDenials_grantModify: number = 14; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_grantModify */

/* START_OF_SYMBOL_DEFINITION grantModify */
/**
 * @summary grantModify
 * @constant
 */
export const grantModify: number = GrantsAndDenials_grantModify; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION grantModify */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_denyModify */
/**
 * @summary GrantsAndDenials_denyModify
 * @constant
 */
export const GrantsAndDenials_denyModify: number = 15; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_denyModify */

/* START_OF_SYMBOL_DEFINITION denyModify */
/**
 * @summary denyModify
 * @constant
 */
export const denyModify: number = GrantsAndDenials_denyModify; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION denyModify */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_grantRename */
/**
 * @summary GrantsAndDenials_grantRename
 * @constant
 */
export const GrantsAndDenials_grantRename: number = 16; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_grantRename */

/* START_OF_SYMBOL_DEFINITION grantRename */
/**
 * @summary grantRename
 * @constant
 */
export const grantRename: number = GrantsAndDenials_grantRename; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION grantRename */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_denyRename */
/**
 * @summary GrantsAndDenials_denyRename
 * @constant
 */
export const GrantsAndDenials_denyRename: number = 17; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_denyRename */

/* START_OF_SYMBOL_DEFINITION denyRename */
/**
 * @summary denyRename
 * @constant
 */
export const denyRename: number = GrantsAndDenials_denyRename; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION denyRename */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_grantReturnDN */
/**
 * @summary GrantsAndDenials_grantReturnDN
 * @constant
 */
export const GrantsAndDenials_grantReturnDN: number = 18; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_grantReturnDN */

/* START_OF_SYMBOL_DEFINITION grantReturnDN */
/**
 * @summary grantReturnDN
 * @constant
 */
export const grantReturnDN: number = GrantsAndDenials_grantReturnDN; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION grantReturnDN */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_denyReturnDN */
/**
 * @summary GrantsAndDenials_denyReturnDN
 * @constant
 */
export const GrantsAndDenials_denyReturnDN: number = 19; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_denyReturnDN */

/* START_OF_SYMBOL_DEFINITION denyReturnDN */
/**
 * @summary denyReturnDN
 * @constant
 */
export const denyReturnDN: number = GrantsAndDenials_denyReturnDN; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION denyReturnDN */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_grantCompare */
/**
 * @summary GrantsAndDenials_grantCompare
 * @constant
 */
export const GrantsAndDenials_grantCompare: number = 20; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_grantCompare */

/* START_OF_SYMBOL_DEFINITION grantCompare */
/**
 * @summary grantCompare
 * @constant
 */
export const grantCompare: number = GrantsAndDenials_grantCompare; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION grantCompare */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_denyCompare */
/**
 * @summary GrantsAndDenials_denyCompare
 * @constant
 */
export const GrantsAndDenials_denyCompare: number = 21; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_denyCompare */

/* START_OF_SYMBOL_DEFINITION denyCompare */
/**
 * @summary denyCompare
 * @constant
 */
export const denyCompare: number = GrantsAndDenials_denyCompare; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION denyCompare */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_grantFilterMatch */
/**
 * @summary GrantsAndDenials_grantFilterMatch
 * @constant
 */
export const GrantsAndDenials_grantFilterMatch: number = 22; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_grantFilterMatch */

/* START_OF_SYMBOL_DEFINITION grantFilterMatch */
/**
 * @summary grantFilterMatch
 * @constant
 */
export const grantFilterMatch: number = GrantsAndDenials_grantFilterMatch; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION grantFilterMatch */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_denyFilterMatch */
/**
 * @summary GrantsAndDenials_denyFilterMatch
 * @constant
 */
export const GrantsAndDenials_denyFilterMatch: number = 23; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_denyFilterMatch */

/* START_OF_SYMBOL_DEFINITION denyFilterMatch */
/**
 * @summary denyFilterMatch
 * @constant
 */
export const denyFilterMatch: number = GrantsAndDenials_denyFilterMatch; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION denyFilterMatch */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_grantInvoke */
/**
 * @summary GrantsAndDenials_grantInvoke
 * @constant
 */
export const GrantsAndDenials_grantInvoke: number = 24; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_grantInvoke */

/* START_OF_SYMBOL_DEFINITION grantInvoke */
/**
 * @summary grantInvoke
 * @constant
 */
export const grantInvoke: number = GrantsAndDenials_grantInvoke; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION grantInvoke */

/* START_OF_SYMBOL_DEFINITION GrantsAndDenials_denyInvoke */
/**
 * @summary GrantsAndDenials_denyInvoke
 * @constant
 */
export const GrantsAndDenials_denyInvoke: number = 25; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION GrantsAndDenials_denyInvoke */

/* START_OF_SYMBOL_DEFINITION denyInvoke */
/**
 * @summary denyInvoke
 * @constant
 */
export const denyInvoke: number = GrantsAndDenials_denyInvoke; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION denyInvoke */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GrantsAndDenials */
let _cached_decoder_for_GrantsAndDenials: $.ASN1Decoder<
    GrantsAndDenials
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GrantsAndDenials */

/* START_OF_SYMBOL_DEFINITION _decode_GrantsAndDenials */
/**
 * @summary Decodes an ASN.1 element into a(n) GrantsAndDenials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GrantsAndDenials} The decoded data structure.
 */
export function _decode_GrantsAndDenials(el: _Element) {
    if (!_cached_decoder_for_GrantsAndDenials) {
        _cached_decoder_for_GrantsAndDenials = $._decodeBitString;
    }
    return _cached_decoder_for_GrantsAndDenials(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GrantsAndDenials */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GrantsAndDenials */
let _cached_encoder_for_GrantsAndDenials: $.ASN1Encoder<
    GrantsAndDenials
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GrantsAndDenials */

/* START_OF_SYMBOL_DEFINITION _encode_GrantsAndDenials */
/**
 * @summary Encodes a(n) GrantsAndDenials into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GrantsAndDenials, encoded as an ASN.1 Element.
 */
export function _encode_GrantsAndDenials(
    value: GrantsAndDenials,
    elGetter: $.ASN1Encoder<GrantsAndDenials>
) {
    if (!_cached_encoder_for_GrantsAndDenials) {
        _cached_encoder_for_GrantsAndDenials = $._encodeBitString;
    }
    return _cached_encoder_for_GrantsAndDenials(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GrantsAndDenials */

/* eslint-enable */
