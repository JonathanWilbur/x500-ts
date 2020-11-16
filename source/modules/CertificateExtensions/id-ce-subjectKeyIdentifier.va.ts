/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va";
export { id_ce } from "../UsefulDefinitions/id-ce.va";

/* START_OF_SYMBOL_DEFINITION id_ce_subjectKeyIdentifier */
/**
 * @summary id_ce_subjectKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-subjectKeyIdentifier               OBJECT IDENTIFIER ::= {id-ce 14}
 * ```
 *
 * @constant
 */
export const id_ce_subjectKeyIdentifier: OBJECT_IDENTIFIER = new _OID(
    [14],
    id_ce
);
/* END_OF_SYMBOL_DEFINITION id_ce_subjectKeyIdentifier */

/* eslint-enable */
