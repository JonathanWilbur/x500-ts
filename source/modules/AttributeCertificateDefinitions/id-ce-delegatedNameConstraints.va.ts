/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va";
export { id_ce } from "../UsefulDefinitions/id-ce.va";

/* START_OF_SYMBOL_DEFINITION id_ce_delegatedNameConstraints */
/**
 * @summary id_ce_delegatedNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-delegatedNameConstraints           OBJECT IDENTIFIER ::= {id-ce 42}
 * ```
 *
 * @constant
 */
export const id_ce_delegatedNameConstraints: OBJECT_IDENTIFIER = new _OID(
    [42],
    id_ce
);
/* END_OF_SYMBOL_DEFINITION id_ce_delegatedNameConstraints */

/* eslint-enable */
