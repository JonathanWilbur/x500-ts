/* eslint-disable */
import { aliasedEntryName } from "../InformationFramework/aliasedEntryName.oa";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { objectClass } from "../InformationFramework/objectClass.oa";
export { aliasedEntryName } from "../InformationFramework/aliasedEntryName.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { objectClass } from "../InformationFramework/objectClass.oa";

/* START_OF_SYMBOL_DEFINITION SupportedAttributes */
/**
 * @summary SupportedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedAttributes ATTRIBUTE ::= {objectClass | aliasedEntryName, ...}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const SupportedAttributes: ATTRIBUTE[] = [objectClass, aliasedEntryName];
/* END_OF_SYMBOL_DEFINITION SupportedAttributes */

/* eslint-enable */
