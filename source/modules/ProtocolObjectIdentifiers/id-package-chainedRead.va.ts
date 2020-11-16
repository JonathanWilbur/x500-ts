/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_package } from "../UsefulDefinitions/id-package.va";
export { id_package } from "../UsefulDefinitions/id-package.va";

/* START_OF_SYMBOL_DEFINITION id_package_chainedRead */
/**
 * @summary id_package_chainedRead
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-chainedRead OBJECT IDENTIFIER ::= {id-package 4}
 * ```
 *
 * @constant
 */
export const id_package_chainedRead: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_package
);
/* END_OF_SYMBOL_DEFINITION id_package_chainedRead */

/* eslint-enable */
