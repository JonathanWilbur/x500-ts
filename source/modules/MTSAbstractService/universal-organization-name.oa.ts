/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_UniversalOrganizationName,
    _encode_UniversalOrganizationName,
} from "../MTSAbstractService/UniversalOrganizationName.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    UniversalOrganizationName,
    _decode_UniversalOrganizationName,
    _encode_UniversalOrganizationName,
} from "../MTSAbstractService/UniversalOrganizationName.ta";

/* START_OF_SYMBOL_DEFINITION universal_organization_name */
/**
 * @summary universal_organization_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-organization-name EXTENSION-ATTRIBUTE ::= {
 *   UniversalOrganizationName
 *   IDENTIFIED BY  25
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_organization_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalOrganizationName,
    },
    encoderFor: {
        "&Type": _encode_UniversalOrganizationName,
    },
    "&id": 25 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_organization_name */

/* eslint-enable */
