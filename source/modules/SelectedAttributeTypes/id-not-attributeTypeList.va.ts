/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_not } from "../UsefulDefinitions/id-not.va";
export { id_not } from "../UsefulDefinitions/id-not.va";

/* START_OF_SYMBOL_DEFINITION id_not_attributeTypeList */
/**
 * @summary id_not_attributeTypeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not-attributeTypeList                  OBJECT IDENTIFIER ::= {id-not 3}
 * ```
 *
 * @constant
 */
export const id_not_attributeTypeList: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_not
);
/* END_OF_SYMBOL_DEFINITION id_not_attributeTypeList */

/* eslint-enable */
