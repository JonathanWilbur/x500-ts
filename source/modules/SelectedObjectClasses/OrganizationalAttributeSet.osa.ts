/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa";
import { description } from "../SelectedAttributeTypes/description.oa";
import { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
import { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa";
import { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa";
import { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa";
export { userPassword } from "../AuthenticationFramework/userPassword.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa";
export { description } from "../SelectedAttributeTypes/description.oa";
export { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
export { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa";
export { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa";
export { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa";

/* START_OF_SYMBOL_DEFINITION OrganizationalAttributeSet */
/**
 * @summary OrganizationalAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrganizationalAttributeSet ATTRIBUTE ::= {description |
 *    LocaleAttributeSet |
 *    PostalAttributeSet |
 *    TelecommunicationAttributeSet |
 *    businessCategory |
 *    seeAlso |
 *    searchGuide |
 *    userPassword}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const OrganizationalAttributeSet: ATTRIBUTE[] = [
    description,
    ...LocaleAttributeSet,
    ...PostalAttributeSet,
    ...TelecommunicationAttributeSet,
    businessCategory,
    seeAlso,
    searchGuide,
    userPassword,
];
/* END_OF_SYMBOL_DEFINITION OrganizationalAttributeSet */

/* eslint-enable */
