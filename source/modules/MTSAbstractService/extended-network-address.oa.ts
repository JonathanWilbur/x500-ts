/* eslint-disable */
import {
    _decode_ExtendedNetworkAddress,
    _encode_ExtendedNetworkAddress,
} from "../MTSAbstractService/ExtendedNetworkAddress.ta";
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    ExtendedNetworkAddress,
    _decode_ExtendedNetworkAddress,
    _encode_ExtendedNetworkAddress,
} from "../MTSAbstractService/ExtendedNetworkAddress.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION extended_network_address */
/**
 * @summary extended_network_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extended-network-address EXTENSION-ATTRIBUTE ::= {
 *   ExtendedNetworkAddress
 *   IDENTIFIED BY  22
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const extended_network_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ExtendedNetworkAddress,
    },
    encoderFor: {
        "&Type": _encode_ExtendedNetworkAddress,
    },
    "&id": 22 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION extended_network_address */

/* eslint-enable */
