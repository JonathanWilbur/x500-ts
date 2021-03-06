/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_package } from "../UsefulDefinitions/id-package.va";
export { id_package } from "../UsefulDefinitions/id-package.va";

/* START_OF_SYMBOL_DEFINITION id_package_shadowConsumer */
/**
 * @summary id_package_shadowConsumer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-shadowConsumer OBJECT IDENTIFIER ::= {id-package 7}
 * ```
 *
 * @constant
 */
export const id_package_shadowConsumer: OBJECT_IDENTIFIER = new _OID(
    [7],
    id_package
);
/* END_OF_SYMBOL_DEFINITION id_package_shadowConsumer */

/* eslint-enable */
