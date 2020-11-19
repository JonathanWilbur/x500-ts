/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    ExtensionORAddressComponents,
    _decode_ExtensionORAddressComponents,
    _encode_ExtensionORAddressComponents,
} from "../PkiPmiExternalDataTypes/ExtensionORAddressComponents.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    ExtensionORAddressComponents,
    _decode_ExtensionORAddressComponents,
    _encode_ExtensionORAddressComponents,
} from "../PkiPmiExternalDataTypes/ExtensionORAddressComponents.ta";

/* START_OF_SYMBOL_DEFINITION extension_OR_address_components */
/**
 * @summary extension_OR_address_components
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extension-OR-address-components EXTENSION-ATTRIBUTE ::= {
 *                  ExtensionORAddressComponents
 *   IDENTIFIED BY  12 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<ExtensionORAddressComponents>}
 * @implements {EXTENSION_ATTRIBUTE<ExtensionORAddressComponents>}
 */
export const extension_OR_address_components: EXTENSION_ATTRIBUTE<ExtensionORAddressComponents> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ExtensionORAddressComponents,
    },
    encoderFor: {
        "&Type": _encode_ExtensionORAddressComponents,
    },
    "&id": 12 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION extension_OR_address_components */

/* eslint-enable */
