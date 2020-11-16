/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_aca } from "../UsefulDefinitions/id-aca.va";
export { id_aca } from "../UsefulDefinitions/id-aca.va";

/* START_OF_SYMBOL_DEFINITION id_aca_accessControlScheme */
/**
 * @summary id_aca_accessControlScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aca-accessControlScheme     OBJECT IDENTIFIER ::= {id-aca 1}
 * ```
 *
 * @constant
 */
export const id_aca_accessControlScheme: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_aca
);
/* END_OF_SYMBOL_DEFINITION id_aca_accessControlScheme */

/* eslint-enable */
