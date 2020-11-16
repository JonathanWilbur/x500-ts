/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_oat } from "../UsefulDefinitions/id-oat.va";
export { id_oat } from "../UsefulDefinitions/id-oat.va";

/* START_OF_SYMBOL_DEFINITION id_oat_supportedFeatures */
/**
 * @summary id_oat_supportedFeatures
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oat-supportedFeatures                  OBJECT IDENTIFIER ::= {id-oat 5}
 * ```
 *
 * @constant
 */
export const id_oat_supportedFeatures: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_oat
);
/* END_OF_SYMBOL_DEFINITION id_oat_supportedFeatures */

/* eslint-enable */
