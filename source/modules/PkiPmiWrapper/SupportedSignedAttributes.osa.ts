/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { contentType } from "../PkiPmiWrapper/contentType.oa";
import { messageDigest } from "../PkiPmiWrapper/messageDigest.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { contentType } from "../PkiPmiWrapper/contentType.oa";
export { messageDigest } from "../PkiPmiWrapper/messageDigest.oa";

/* START_OF_SYMBOL_DEFINITION SupportedSignedAttributes */
/**
 * @summary SupportedSignedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedSignedAttributes ATTRIBUTE ::= { contentType | messageDigest }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const SupportedSignedAttributes: ATTRIBUTE[] = [
    contentType,
    messageDigest,
];
/* END_OF_SYMBOL_DEFINITION SupportedSignedAttributes */

/* eslint-enable */
