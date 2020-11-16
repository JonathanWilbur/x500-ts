/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_lat } from "../UsefulDefinitions/id-lat.va";
export { id_lat } from "../UsefulDefinitions/id-lat.va";

/* START_OF_SYMBOL_DEFINITION id_lat_supportedSASLMechanisms */
/**
 * @summary id_lat_supportedSASLMechanisms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lat-supportedSASLMechanisms            OBJECT IDENTIFIER ::= {id-lat 14}
 * ```
 *
 * @constant
 */
export const id_lat_supportedSASLMechanisms: OBJECT_IDENTIFIER = new _OID(
    [14],
    id_lat
);
/* END_OF_SYMBOL_DEFINITION id_lat_supportedSASLMechanisms */

/* eslint-enable */
