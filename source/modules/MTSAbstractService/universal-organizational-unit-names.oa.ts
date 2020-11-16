/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_UniversalOrganizationalUnitNames,
    _encode_UniversalOrganizationalUnitNames,
} from "../MTSAbstractService/UniversalOrganizationalUnitNames.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    UniversalOrganizationalUnitNames,
    _decode_UniversalOrganizationalUnitNames,
    _encode_UniversalOrganizationalUnitNames,
} from "../MTSAbstractService/UniversalOrganizationalUnitNames.ta";

/* START_OF_SYMBOL_DEFINITION universal_organizational_unit_names */
/**
 * @summary universal_organizational_unit_names
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-organizational-unit-names EXTENSION-ATTRIBUTE ::= {
 *   UniversalOrganizationalUnitNames
 *   IDENTIFIED BY  27
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_organizational_unit_names: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalOrganizationalUnitNames,
    },
    encoderFor: {
        "&Type": _encode_UniversalOrganizationalUnitNames,
    },
    "&id": 27 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_organizational_unit_names */

/* eslint-enable */
