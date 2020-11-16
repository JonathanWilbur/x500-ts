/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pr } from "../UsefulDefinitions/id-pr.va";
export { id_pr } from "../UsefulDefinitions/id-pr.va";

/* START_OF_SYMBOL_DEFINITION id_pr_attributeNegationViolation */
/**
 * @summary id_pr_attributeNegationViolation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr-attributeNegationViolation          OBJECT IDENTIFIER ::= {id-pr 10}
 * ```
 *
 * @constant
 */
export const id_pr_attributeNegationViolation: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_pr
);
/* END_OF_SYMBOL_DEFINITION id_pr_attributeNegationViolation */

/* eslint-enable */
