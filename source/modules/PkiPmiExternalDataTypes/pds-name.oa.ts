/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    PDSName,
    _decode_PDSName,
    _encode_PDSName,
} from "../PkiPmiExternalDataTypes/PDSName.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    PDSName,
    _decode_PDSName,
    _encode_PDSName,
} from "../PkiPmiExternalDataTypes/PDSName.ta";

/* START_OF_SYMBOL_DEFINITION pds_name */
/**
 * @summary pds_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pds-name EXTENSION-ATTRIBUTE ::= {
 *                  PDSName
 *   IDENTIFIED BY  7 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PDSName>}
 * @implements {EXTENSION_ATTRIBUTE<PDSName>}
 */
export const pds_name: EXTENSION_ATTRIBUTE<PDSName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PDSName,
    },
    encoderFor: {
        "&Type": _encode_PDSName,
    },
    "&id": 7 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pds_name */

/* eslint-enable */
