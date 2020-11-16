/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_lat } from "../UsefulDefinitions/id-lat.va";
export { id_lat } from "../UsefulDefinitions/id-lat.va";

/* START_OF_SYMBOL_DEFINITION id_lat_supportedExtension */
/**
 * @summary id_lat_supportedExtension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lat-supportedExtension                 OBJECT IDENTIFIER ::= {id-lat 7}
 * ```
 *
 * @constant
 */
export const id_lat_supportedExtension: OBJECT_IDENTIFIER = new _OID(
    [7],
    id_lat
);
/* END_OF_SYMBOL_DEFINITION id_lat_supportedExtension */

/* eslint-enable */
