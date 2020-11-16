/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "../UsefulDefinitions/id-at.va";
export { id_at } from "../UsefulDefinitions/id-at.va";

/* START_OF_SYMBOL_DEFINITION id_at_collectiveOrganizationName */
/**
 * @summary id_at_collectiveOrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectiveOrganizationName          OBJECT IDENTIFIER ::= {id-at 10 1}
 * ```
 *
 * @constant
 */
export const id_at_collectiveOrganizationName: OBJECT_IDENTIFIER = new _OID(
    [10, 1],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_collectiveOrganizationName */

/* eslint-enable */
