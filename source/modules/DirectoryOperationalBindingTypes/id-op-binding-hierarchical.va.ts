/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ob } from "../UsefulDefinitions/id-ob.va";
export { id_ob } from "../UsefulDefinitions/id-ob.va";

/* START_OF_SYMBOL_DEFINITION id_op_binding_hierarchical */
/**
 * @summary id_op_binding_hierarchical
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-op-binding-hierarchical               OBJECT IDENTIFIER ::= {id-ob 2}
 * ```
 *
 * @constant
 */
export const id_op_binding_hierarchical: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_ob
);
/* END_OF_SYMBOL_DEFINITION id_op_binding_hierarchical */

/* eslint-enable */
