/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta";
import { objectClass } from "../UsefulDefinitions/objectClass.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { objectClass } from "../UsefulDefinitions/objectClass.va";

/* START_OF_SYMBOL_DEFINITION id_oc */
/**
 * @summary id_oc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc                                    ID ::= objectClass
 * ```
 *
 * @constant
 */
export const id_oc: ID = objectClass;
/* END_OF_SYMBOL_DEFINITION id_oc */

/* eslint-enable */
