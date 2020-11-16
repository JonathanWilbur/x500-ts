/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { physicalDeliveryOfficeName } from "../SelectedAttributeTypes/physicalDeliveryOfficeName.oa";
import { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa";
import { postalCode } from "../SelectedAttributeTypes/postalCode.oa";
import { postOfficeBox } from "../SelectedAttributeTypes/postOfficeBox.oa";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { physicalDeliveryOfficeName } from "../SelectedAttributeTypes/physicalDeliveryOfficeName.oa";
export { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa";
export { postalCode } from "../SelectedAttributeTypes/postalCode.oa";
export { postOfficeBox } from "../SelectedAttributeTypes/postOfficeBox.oa";
export { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa";

/* START_OF_SYMBOL_DEFINITION PostalAttributeSet */
/**
 * @summary PostalAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PostalAttributeSet ATTRIBUTE ::= {physicalDeliveryOfficeName |
 *    postalAddress |
 *    postalCode |
 *    postOfficeBox |
 *    streetAddress}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const PostalAttributeSet: ATTRIBUTE[] = [
    physicalDeliveryOfficeName,
    postalAddress,
    postalCode,
    postOfficeBox,
    streetAddress,
];
/* END_OF_SYMBOL_DEFINITION PostalAttributeSet */

/* eslint-enable */
