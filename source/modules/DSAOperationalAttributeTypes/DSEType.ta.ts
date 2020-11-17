/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION DSEType */
/**
 * @summary DSEType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSEType  ::=  BIT STRING {
 *   root           (0),  -- root DSE
 *   glue           (1),  -- represents knowledge of a name only
 *   cp             (2),  -- context prefix
 *   entry          (3),  -- object entry
 *   alias          (4),  -- alias entry
 *   subr           (5),  -- subordinate reference
 *   nssr           (6),  -- non-specific subordinate reference
 *   supr           (7),  -- superior reference
 *   xr             (8),  -- cross reference
 *   admPoint       (9),  -- administrative point
 *   subentry       (10), -- subentry
 *   shadow         (11), -- shadow copy
 *   immSupr        (13), -- immediate superior reference
 *   rhob           (14), -- rhob information
 *   sa             (15), -- subordinate reference to alias entry
 *   dsSubentry     (16), -- DSA Specific subentry
 *   familyMember   (17), -- family member
 *   ditBridge      (18)}
 * ```
 */
export type DSEType = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION DSEType */

/* START_OF_SYMBOL_DEFINITION DSEType_root */
/**
 * @summary DSEType_root
 * @constant
 */
export const DSEType_root: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_root */

/* START_OF_SYMBOL_DEFINITION root */
/**
 * @summary root
 * @constant
 */
export const root: number = DSEType_root; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION root */

/* START_OF_SYMBOL_DEFINITION DSEType_glue */
/**
 * @summary DSEType_glue
 * @constant
 */
export const DSEType_glue: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_glue */

/* START_OF_SYMBOL_DEFINITION glue */
/**
 * @summary glue
 * @constant
 */
export const glue: number = DSEType_glue; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION glue */

/* START_OF_SYMBOL_DEFINITION DSEType_cp */
/**
 * @summary DSEType_cp
 * @constant
 */
export const DSEType_cp: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_cp */

/* START_OF_SYMBOL_DEFINITION cp */
/**
 * @summary cp
 * @constant
 */
export const cp: number = DSEType_cp; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION cp */

/* START_OF_SYMBOL_DEFINITION DSEType_entry */
/**
 * @summary DSEType_entry
 * @constant
 */
export const DSEType_entry: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_entry */

/* START_OF_SYMBOL_DEFINITION entry */
/**
 * @summary entry
 * @constant
 */
export const entry: number = DSEType_entry; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION entry */

/* START_OF_SYMBOL_DEFINITION DSEType_alias */
/**
 * @summary DSEType_alias
 * @constant
 */
export const DSEType_alias: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_alias */

/* START_OF_SYMBOL_DEFINITION alias */
/**
 * @summary alias
 * @constant
 */
export const alias: number = DSEType_alias; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION alias */

/* START_OF_SYMBOL_DEFINITION DSEType_subr */
/**
 * @summary DSEType_subr
 * @constant
 */
export const DSEType_subr: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_subr */

/* START_OF_SYMBOL_DEFINITION subr */
/**
 * @summary subr
 * @constant
 */
export const subr: number = DSEType_subr; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION subr */

/* START_OF_SYMBOL_DEFINITION DSEType_nssr */
/**
 * @summary DSEType_nssr
 * @constant
 */
export const DSEType_nssr: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_nssr */

/* START_OF_SYMBOL_DEFINITION nssr */
/**
 * @summary nssr
 * @constant
 */
export const nssr: number = DSEType_nssr; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION nssr */

/* START_OF_SYMBOL_DEFINITION DSEType_supr */
/**
 * @summary DSEType_supr
 * @constant
 */
export const DSEType_supr: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_supr */

/* START_OF_SYMBOL_DEFINITION supr */
/**
 * @summary supr
 * @constant
 */
export const supr: number = DSEType_supr; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION supr */

/* START_OF_SYMBOL_DEFINITION DSEType_xr */
/**
 * @summary DSEType_xr
 * @constant
 */
export const DSEType_xr: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_xr */

/* START_OF_SYMBOL_DEFINITION xr */
/**
 * @summary xr
 * @constant
 */
export const xr: number = DSEType_xr; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION xr */

/* START_OF_SYMBOL_DEFINITION DSEType_admPoint */
/**
 * @summary DSEType_admPoint
 * @constant
 */
export const DSEType_admPoint: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_admPoint */

/* START_OF_SYMBOL_DEFINITION admPoint */
/**
 * @summary admPoint
 * @constant
 */
export const admPoint: number = DSEType_admPoint; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION admPoint */

/* START_OF_SYMBOL_DEFINITION DSEType_subentry */
/**
 * @summary DSEType_subentry
 * @constant
 */
export const DSEType_subentry: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_subentry */

/* START_OF_SYMBOL_DEFINITION subentry */
/**
 * @summary subentry
 * @constant
 */
export const subentry: number = DSEType_subentry; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION subentry */

/* START_OF_SYMBOL_DEFINITION DSEType_shadow */
/**
 * @summary DSEType_shadow
 * @constant
 */
export const DSEType_shadow: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_shadow */

/* START_OF_SYMBOL_DEFINITION shadow */
/**
 * @summary shadow
 * @constant
 */
export const shadow: number = DSEType_shadow; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION shadow */

/* START_OF_SYMBOL_DEFINITION DSEType_immSupr */
/**
 * @summary DSEType_immSupr
 * @constant
 */
export const DSEType_immSupr: number = 13; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_immSupr */

/* START_OF_SYMBOL_DEFINITION immSupr */
/**
 * @summary immSupr
 * @constant
 */
export const immSupr: number = DSEType_immSupr; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION immSupr */

/* START_OF_SYMBOL_DEFINITION DSEType_rhob */
/**
 * @summary DSEType_rhob
 * @constant
 */
export const DSEType_rhob: number = 14; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_rhob */

/* START_OF_SYMBOL_DEFINITION rhob */
/**
 * @summary rhob
 * @constant
 */
export const rhob: number = DSEType_rhob; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION rhob */

/* START_OF_SYMBOL_DEFINITION DSEType_sa */
/**
 * @summary DSEType_sa
 * @constant
 */
export const DSEType_sa: number = 15; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_sa */

/* START_OF_SYMBOL_DEFINITION sa */
/**
 * @summary sa
 * @constant
 */
export const sa: number = DSEType_sa; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION sa */

/* START_OF_SYMBOL_DEFINITION DSEType_dsSubentry */
/**
 * @summary DSEType_dsSubentry
 * @constant
 */
export const DSEType_dsSubentry: number = 16; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_dsSubentry */

/* START_OF_SYMBOL_DEFINITION dsSubentry */
/**
 * @summary dsSubentry
 * @constant
 */
export const dsSubentry: number = DSEType_dsSubentry; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION dsSubentry */

/* START_OF_SYMBOL_DEFINITION DSEType_familyMember */
/**
 * @summary DSEType_familyMember
 * @constant
 */
export const DSEType_familyMember: number = 17; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_familyMember */

/* START_OF_SYMBOL_DEFINITION familyMember */
/**
 * @summary familyMember
 * @constant
 */
export const familyMember: number = DSEType_familyMember; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION familyMember */

/* START_OF_SYMBOL_DEFINITION DSEType_ditBridge */
/**
 * @summary DSEType_ditBridge
 * @constant
 */
export const DSEType_ditBridge: number = 18; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DSEType_ditBridge */

/* START_OF_SYMBOL_DEFINITION ditBridge */
/**
 * @summary ditBridge
 * @constant
 */
export const ditBridge: number = DSEType_ditBridge; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ditBridge */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DSEType */
let _cached_decoder_for_DSEType: $.ASN1Decoder<DSEType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DSEType */

/* START_OF_SYMBOL_DEFINITION _decode_DSEType */
/**
 * @summary Decodes an ASN.1 element into a(n) DSEType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSEType} The decoded data structure.
 */
export function _decode_DSEType(el: _Element) {
    if (!_cached_decoder_for_DSEType) {
        _cached_decoder_for_DSEType = $._decodeBitString;
    }
    return _cached_decoder_for_DSEType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DSEType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DSEType */
let _cached_encoder_for_DSEType: $.ASN1Encoder<DSEType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DSEType */

/* START_OF_SYMBOL_DEFINITION _encode_DSEType */
/**
 * @summary Encodes a(n) DSEType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSEType, encoded as an ASN.1 Element.
 */
export function _encode_DSEType(
    value: DSEType,
    elGetter: $.ASN1Encoder<DSEType>
) {
    if (!_cached_encoder_for_DSEType) {
        _cached_encoder_for_DSEType = $._encodeBitString;
    }
    return _cached_encoder_for_DSEType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DSEType */

/* eslint-enable */
