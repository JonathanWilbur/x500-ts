/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_oc } from "../UsefulDefinitions/id-oc.va";
export { id_oc } from "../UsefulDefinitions/id-oc.va";

/* START_OF_SYMBOL_DEFINITION id_oc_organizationalPerson */
/**
 * @summary id_oc_organizationalPerson
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-organizationalPerson     OBJECT IDENTIFIER ::= {id-oc 7}
 * ```
 *
 * @constant
 */
export const id_oc_organizationalPerson: OBJECT_IDENTIFIER = new _OID(
    [7],
    id_oc
);
/* END_OF_SYMBOL_DEFINITION id_oc_organizationalPerson */

/* eslint-enable */
