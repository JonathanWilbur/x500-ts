/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { chained } from "../DistributedOperations/chained.oa";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { chained } from "../DistributedOperations/chained.oa";
import { ldapTransport } from "../DirectoryAbstractService/ldapTransport.oa";

/* START_OF_SYMBOL_DEFINITION chainedLdapTransport */
/**
 * @summary chainedLdapTransport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedLdapTransport      OPERATION ::= chained{ldapTransport}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedLdapTransport: OPERATION = chained(ldapTransport);
/* END_OF_SYMBOL_DEFINITION chainedLdapTransport */

/* eslint-enable */
