/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_lat } from "../UsefulDefinitions/id-lat.va";
export { id_lat } from "../UsefulDefinitions/id-lat.va";

/* START_OF_SYMBOL_DEFINITION id_lat_supportedControl */
/**
 * @summary id_lat_supportedControl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lat-supportedControl                   OBJECT IDENTIFIER ::= {id-lat 13}
 * ```
 *
 * @constant
 */
export const id_lat_supportedControl: OBJECT_IDENTIFIER = new _OID(
    [13],
    id_lat
);
/* END_OF_SYMBOL_DEFINITION id_lat_supportedControl */

/* eslint-enable */
