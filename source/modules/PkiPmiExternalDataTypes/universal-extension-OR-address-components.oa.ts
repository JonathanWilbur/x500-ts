/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    UniversalExtensionORAddressComponents,
    _decode_UniversalExtensionORAddressComponents,
    _encode_UniversalExtensionORAddressComponents,
} from "../PkiPmiExternalDataTypes/UniversalExtensionORAddressComponents.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    UniversalExtensionORAddressComponents,
    _decode_UniversalExtensionORAddressComponents,
    _encode_UniversalExtensionORAddressComponents,
} from "../PkiPmiExternalDataTypes/UniversalExtensionORAddressComponents.ta";

/* START_OF_SYMBOL_DEFINITION universal_extension_OR_address_components */
/**
 * @summary universal_extension_OR_address_components
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-extension-OR-address-components EXTENSION-ATTRIBUTE ::= {
 *                  UniversalExtensionORAddressComponents
 *   IDENTIFIED BY  31 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalExtensionORAddressComponents>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalExtensionORAddressComponents>}
 */
export const universal_extension_OR_address_components: EXTENSION_ATTRIBUTE<UniversalExtensionORAddressComponents> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalExtensionORAddressComponents,
    },
    encoderFor: {
        "&Type": _encode_UniversalExtensionORAddressComponents,
    },
    "&id": 31 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_extension_OR_address_components */

/* eslint-enable */
