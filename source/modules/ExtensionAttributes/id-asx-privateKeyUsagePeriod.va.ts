/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va";
export { id_ce } from "../UsefulDefinitions/id-ce.va";

/* START_OF_SYMBOL_DEFINITION id_asx_privateKeyUsagePeriod */
/**
 * @summary id_asx_privateKeyUsagePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-privateKeyUsagePeriod               OBJECT IDENTIFIER ::= {id-ce 16 2}
 * ```
 *
 * @constant
 */
export const id_asx_privateKeyUsagePeriod: OBJECT_IDENTIFIER = new _OID(
    [16, 2],
    id_ce
);
/* END_OF_SYMBOL_DEFINITION id_asx_privateKeyUsagePeriod */

/* eslint-enable */
