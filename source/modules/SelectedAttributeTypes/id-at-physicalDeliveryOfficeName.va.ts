/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "../UsefulDefinitions/id-at.va";
export { id_at } from "../UsefulDefinitions/id-at.va";

/* START_OF_SYMBOL_DEFINITION id_at_physicalDeliveryOfficeName */
/**
 * @summary id_at_physicalDeliveryOfficeName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-physicalDeliveryOfficeName          OBJECT IDENTIFIER ::= {id-at 19}
 * ```
 *
 * @constant
 */
export const id_at_physicalDeliveryOfficeName: OBJECT_IDENTIFIER = new _OID(
    [19],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_physicalDeliveryOfficeName */

/* eslint-enable */
