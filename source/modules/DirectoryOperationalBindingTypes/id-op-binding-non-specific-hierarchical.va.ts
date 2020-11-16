/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ob } from "../UsefulDefinitions/id-ob.va";
export { id_ob } from "../UsefulDefinitions/id-ob.va";

/* START_OF_SYMBOL_DEFINITION id_op_binding_non_specific_hierarchical */
/**
 * @summary id_op_binding_non_specific_hierarchical
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-op-binding-non-specific-hierarchical  OBJECT IDENTIFIER ::= {id-ob 3}
 * ```
 *
 * @constant
 */
export const id_op_binding_non_specific_hierarchical: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_ob
);
/* END_OF_SYMBOL_DEFINITION id_op_binding_non_specific_hierarchical */

/* eslint-enable */
