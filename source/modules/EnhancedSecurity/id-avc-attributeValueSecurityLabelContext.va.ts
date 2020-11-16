/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_avc } from "../UsefulDefinitions/id-avc.va";
export { id_avc } from "../UsefulDefinitions/id-avc.va";

/* START_OF_SYMBOL_DEFINITION id_avc_attributeValueSecurityLabelContext */
/**
 * @summary id_avc_attributeValueSecurityLabelContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avc-attributeValueSecurityLabelContext OBJECT IDENTIFIER ::= {id-avc 3}
 * ```
 *
 * @constant
 */
export const id_avc_attributeValueSecurityLabelContext: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_avc
);
/* END_OF_SYMBOL_DEFINITION id_avc_attributeValueSecurityLabelContext */

/* eslint-enable */
