/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va";
export { id_ce } from "../UsefulDefinitions/id-ce.va";

/* START_OF_SYMBOL_DEFINITION id_asx_acceptableCertPolicies */
/**
 * @summary id_asx_acceptableCertPolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-acceptableCertPolicies              OBJECT IDENTIFIER ::= {id-ce 52 2}
 * ```
 *
 * @constant
 */
export const id_asx_acceptableCertPolicies: OBJECT_IDENTIFIER = new _OID(
    [52, 2],
    id_ce
);
/* END_OF_SYMBOL_DEFINITION id_asx_acceptableCertPolicies */

/* eslint-enable */
