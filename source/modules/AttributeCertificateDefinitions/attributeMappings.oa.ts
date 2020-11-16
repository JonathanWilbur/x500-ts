/* eslint-disable */
import {
    _decode_AttributeMappings,
    _encode_AttributeMappings,
} from "../AttributeCertificateDefinitions/AttributeMappings.ta";
import { id_ce_attributeMappings } from "../AttributeCertificateDefinitions/id-ce-attributeMappings.va";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    AttributeMappings,
    _decode_AttributeMappings,
    _encode_AttributeMappings,
} from "../AttributeCertificateDefinitions/AttributeMappings.ta";
export { id_ce_attributeMappings } from "../AttributeCertificateDefinitions/id-ce-attributeMappings.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION attributeMappings */
/**
 * @summary attributeMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeMappings EXTENSION ::= {
 *   SYNTAX         AttributeMappings
 *   IDENTIFIED BY  id-ce-attributeMappings }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const attributeMappings: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AttributeMappings,
    },
    encoderFor: {
        "&ExtnType": _encode_AttributeMappings,
    },
    "&id": id_ce_attributeMappings /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attributeMappings */

/* eslint-enable */
