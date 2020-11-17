/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SaslCredentials,
    _decode_SaslCredentials,
    _encode_SaslCredentials,
} from "../Lightweight-Directory-Access-Protocol-V3/SaslCredentials.ta";
export {
    SaslCredentials,
    _decode_SaslCredentials,
    _encode_SaslCredentials,
} from "../Lightweight-Directory-Access-Protocol-V3/SaslCredentials.ta";

/* START_OF_SYMBOL_DEFINITION AuthenticationChoice */
/**
 * @summary AuthenticationChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationChoice  ::=  CHOICE {
 *   simple  [0]  OCTET STRING,
 *   -- 1 and 2 reserved
 *   sasl    [3]  SaslCredentials,
 *   ...
 * }
 * ```
 */
export type AuthenticationChoice =
    | { simple: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { sasl: SaslCredentials } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION AuthenticationChoice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationChoice */
let _cached_decoder_for_AuthenticationChoice: $.ASN1Decoder<
    AuthenticationChoice
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticationChoice */

/* START_OF_SYMBOL_DEFINITION _decode_AuthenticationChoice */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticationChoice} The decoded data structure.
 */
export function _decode_AuthenticationChoice(el: _Element) {
    if (!_cached_decoder_for_AuthenticationChoice) {
        _cached_decoder_for_AuthenticationChoice = $._decode_extensible_choice<
            AuthenticationChoice
        >({
            "CONTEXT 0": [
                "simple",
                $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString),
            ],
            "CONTEXT 3": [
                "sasl",
                $._decode_implicit<SaslCredentials>(
                    () => _decode_SaslCredentials
                ),
            ],
        });
    }
    return _cached_decoder_for_AuthenticationChoice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthenticationChoice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationChoice */
let _cached_encoder_for_AuthenticationChoice: $.ASN1Encoder<
    AuthenticationChoice
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticationChoice */

/* START_OF_SYMBOL_DEFINITION _encode_AuthenticationChoice */
/**
 * @summary Encodes a(n) AuthenticationChoice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationChoice, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticationChoice(
    value: AuthenticationChoice,
    elGetter: $.ASN1Encoder<AuthenticationChoice>
) {
    if (!_cached_encoder_for_AuthenticationChoice) {
        _cached_encoder_for_AuthenticationChoice = $._encode_choice<
            AuthenticationChoice
        >(
            {
                simple: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeOctetString,
                    $.BER
                ),
                sasl: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_SaslCredentials,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AuthenticationChoice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthenticationChoice */

/* eslint-enable */
