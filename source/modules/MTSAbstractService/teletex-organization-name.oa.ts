/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
import {
    TeletexOrganizationName,
    _decode_TeletexOrganizationName,
    _encode_TeletexOrganizationName,
} from "../MTSAbstractService/TeletexOrganizationName.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    TeletexOrganizationName,
    _decode_TeletexOrganizationName,
    _encode_TeletexOrganizationName,
} from "../MTSAbstractService/TeletexOrganizationName.ta";

/* START_OF_SYMBOL_DEFINITION teletex_organization_name */
/**
 * @summary teletex_organization_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-organization-name EXTENSION-ATTRIBUTE ::= {
 *   TeletexOrganizationName
 *   IDENTIFIED BY  3
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<TeletexOrganizationName>}
 * @implements {EXTENSION_ATTRIBUTE<TeletexOrganizationName>}
 */
export const teletex_organization_name: EXTENSION_ATTRIBUTE<TeletexOrganizationName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TeletexOrganizationName,
    },
    encoderFor: {
        "&Type": _encode_TeletexOrganizationName,
    },
    "&id": 3 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION teletex_organization_name */

/* eslint-enable */
