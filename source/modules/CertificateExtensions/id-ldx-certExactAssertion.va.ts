/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ldx } from "../UsefulDefinitions/id-ldx.va";
export { id_ldx } from "../UsefulDefinitions/id-ldx.va";

/* START_OF_SYMBOL_DEFINITION id_ldx_certExactAssertion */
/**
 * @summary id_ldx_certExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ldx-certExactAssertion         OBJECT IDENTIFIER ::= {id-ldx 1}
 * ```
 *
 * @constant
 */
export const id_ldx_certExactAssertion: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_ldx
);
/* END_OF_SYMBOL_DEFINITION id_ldx_certExactAssertion */

/* eslint-enable */
