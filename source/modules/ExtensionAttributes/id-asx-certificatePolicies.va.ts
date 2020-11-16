/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va";
export { id_ce } from "../UsefulDefinitions/id-ce.va";

/* START_OF_SYMBOL_DEFINITION id_asx_certificatePolicies */
/**
 * @summary id_asx_certificatePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-certificatePolicies                 OBJECT IDENTIFIER ::= {id-ce 32 2}
 * ```
 *
 * @constant
 */
export const id_asx_certificatePolicies: OBJECT_IDENTIFIER = new _OID(
    [32, 2],
    id_ce
);
/* END_OF_SYMBOL_DEFINITION id_asx_certificatePolicies */

/* eslint-enable */
