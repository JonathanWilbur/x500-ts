/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_avc } from "../UsefulDefinitions/id-avc.va";
export { id_avc } from "../UsefulDefinitions/id-avc.va";

/* START_OF_SYMBOL_DEFINITION id_avc_attributeValueIntegrityInfoContext */
/**
 * @summary id_avc_attributeValueIntegrityInfoContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avc-attributeValueIntegrityInfoContext OBJECT IDENTIFIER ::= {id-avc 4}
 * ```
 *
 * @constant
 */
export const id_avc_attributeValueIntegrityInfoContext: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_avc
);
/* END_OF_SYMBOL_DEFINITION id_avc_attributeValueIntegrityInfoContext */

/* eslint-enable */
