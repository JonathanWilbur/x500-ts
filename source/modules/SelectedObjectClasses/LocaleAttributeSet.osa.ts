/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { localityName } from "../SelectedAttributeTypes/localityName.oa";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { localityName } from "../SelectedAttributeTypes/localityName.oa";
export { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa";
export { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa";

/* START_OF_SYMBOL_DEFINITION LocaleAttributeSet */
/**
 * @summary LocaleAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocaleAttributeSet ATTRIBUTE ::= {localityName |
 *    stateOrProvinceName |
 *    streetAddress}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const LocaleAttributeSet: ATTRIBUTE[] = [
    localityName,
    stateOrProvinceName,
    streetAddress,
];
/* END_OF_SYMBOL_DEFINITION LocaleAttributeSet */

/* eslint-enable */
