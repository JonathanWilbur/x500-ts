/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va";
export { id_ce } from "../UsefulDefinitions/id-ce.va";

/* START_OF_SYMBOL_DEFINITION id_asx_invalidityDate */
/**
 * @summary id_asx_invalidityDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-invalidityDate                      OBJECT IDENTIFIER ::= {id-ce 24 2}
 * ```
 *
 * @constant
 */
export const id_asx_invalidityDate: OBJECT_IDENTIFIER = new _OID(
    [24, 2],
    id_ce
);
/* END_OF_SYMBOL_DEFINITION id_asx_invalidityDate */

/* eslint-enable */
