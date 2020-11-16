/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "../UsefulDefinitions/id-at.va";
export { id_at } from "../UsefulDefinitions/id-at.va";

/* START_OF_SYMBOL_DEFINITION id_at_supportedApplicationContext */
/**
 * @summary id_at_supportedApplicationContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-supportedApplicationContext         OBJECT IDENTIFIER ::= {id-at 30}
 * ```
 *
 * @constant
 */
export const id_at_supportedApplicationContext: OBJECT_IDENTIFIER = new _OID(
    [30],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_supportedApplicationContext */

/* eslint-enable */
