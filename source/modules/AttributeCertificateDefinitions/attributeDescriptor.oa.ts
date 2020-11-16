/* eslint-disable */
import {
    _decode_AttributeDescriptorSyntax,
    _encode_AttributeDescriptorSyntax,
} from "../AttributeCertificateDefinitions/AttributeDescriptorSyntax.ta";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    AttributeDescriptorSyntax,
    _decode_AttributeDescriptorSyntax,
    _encode_AttributeDescriptorSyntax,
} from "../AttributeCertificateDefinitions/AttributeDescriptorSyntax.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION attributeDescriptor */
/**
 * @summary attributeDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeDescriptor EXTENSION ::= {
 *   SYNTAX         AttributeDescriptorSyntax
 *   IDENTIFIED BY  {id-ce-attributeDescriptor} }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const attributeDescriptor: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AttributeDescriptorSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AttributeDescriptorSyntax,
    },
    "&id": undefined,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attributeDescriptor */

/* eslint-enable */
