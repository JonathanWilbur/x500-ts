/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ModifyDNArgumentData,
    _decode_ModifyDNArgumentData,
    _encode_ModifyDNArgumentData,
} from "../DirectoryAbstractService/ModifyDNArgumentData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    ModifyDNArgumentData,
    _decode_ModifyDNArgumentData,
    _encode_ModifyDNArgumentData,
} from "../DirectoryAbstractService/ModifyDNArgumentData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION ModifyDNArgument */
/**
 * @summary ModifyDNArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyDNArgument  ::=  OPTIONALLY-PROTECTED { ModifyDNArgumentData }
 * ```
 */
export type ModifyDNArgument = OPTIONALLY_PROTECTED<ModifyDNArgumentData>; // DefinedType
/* END_OF_SYMBOL_DEFINITION ModifyDNArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyDNArgument */
let _cached_decoder_for_ModifyDNArgument: $.ASN1Decoder<
    ModifyDNArgument
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyDNArgument */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyDNArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyDNArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyDNArgument} The decoded data structure.
 */
export function _decode_ModifyDNArgument(el: _Element) {
    if (!_cached_decoder_for_ModifyDNArgument) {
        _cached_decoder_for_ModifyDNArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            ModifyDNArgumentData
        >(_decode_ModifyDNArgumentData);
    }
    return _cached_decoder_for_ModifyDNArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyDNArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyDNArgument */
let _cached_encoder_for_ModifyDNArgument: $.ASN1Encoder<
    ModifyDNArgument
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyDNArgument */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyDNArgument */
/**
 * @summary Encodes a(n) ModifyDNArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyDNArgument, encoded as an ASN.1 Element.
 */
export function _encode_ModifyDNArgument(
    value: ModifyDNArgument,
    elGetter: $.ASN1Encoder<ModifyDNArgument>
) {
    if (!_cached_encoder_for_ModifyDNArgument) {
        _cached_encoder_for_ModifyDNArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            ModifyDNArgumentData
        >(_encode_ModifyDNArgumentData);
    }
    return _cached_encoder_for_ModifyDNArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyDNArgument */

/* eslint-enable */
