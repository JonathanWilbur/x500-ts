/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_rosObject } from "../UsefulDefinitions/id-rosObject.va";
export { id_rosObject } from "../UsefulDefinitions/id-rosObject.va";

/* START_OF_SYMBOL_DEFINITION id_rosObject_directory */
/**
 * @summary id_rosObject_directory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rosObject-directory OBJECT IDENTIFIER ::= {id-rosObject 2}
 * ```
 *
 * @constant
 */
export const id_rosObject_directory: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_rosObject
);
/* END_OF_SYMBOL_DEFINITION id_rosObject_directory */

/* eslint-enable */
