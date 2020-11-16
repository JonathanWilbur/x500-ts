/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "../UsefulDefinitions/id-at.va";
export { id_at } from "../UsefulDefinitions/id-at.va";

/* START_OF_SYMBOL_DEFINITION id_at_organizationIdentifier */
/**
 * @summary id_at_organizationIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-organizationIdentifier              OBJECT IDENTIFIER ::= {id-at 97}
 * ```
 *
 * @constant
 */
export const id_at_organizationIdentifier: OBJECT_IDENTIFIER = new _OID(
    [97],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_organizationIdentifier */

/* eslint-enable */
