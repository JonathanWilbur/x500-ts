/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ds } from "../UsefulDefinitions/ds.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION abstractSyntax */
/**
 * @summary abstractSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * abstractSyntax                           ID ::= {ds 9}
 * ```
 *
 * @constant
 */
export const abstractSyntax: ID = new _OID([9], ds);
/* END_OF_SYMBOL_DEFINITION abstractSyntax */

/* eslint-enable */
