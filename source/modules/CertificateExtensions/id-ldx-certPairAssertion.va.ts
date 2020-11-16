/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ldx } from "../UsefulDefinitions/id-ldx.va";
export { id_ldx } from "../UsefulDefinitions/id-ldx.va";

/* START_OF_SYMBOL_DEFINITION id_ldx_certPairAssertion */
/**
 * @summary id_ldx_certPairAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ldx-certPairAssertion          OBJECT IDENTIFIER ::= {id-ldx 4}
 * ```
 *
 * @constant
 */
export const id_ldx_certPairAssertion: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_ldx
);
/* END_OF_SYMBOL_DEFINITION id_ldx_certPairAssertion */

/* eslint-enable */
