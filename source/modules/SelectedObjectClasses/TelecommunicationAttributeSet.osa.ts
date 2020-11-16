/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { destinationIndicator } from "../SelectedAttributeTypes/destinationIndicator.oa";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa";
import { internationalISDNNumber } from "../SelectedAttributeTypes/internationalISDNNumber.oa";
import { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa";
import { registeredAddress } from "../SelectedAttributeTypes/registeredAddress.oa";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa";
import { telexNumber } from "../SelectedAttributeTypes/telexNumber.oa";
import { x121Address } from "../SelectedAttributeTypes/x121Address.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { destinationIndicator } from "../SelectedAttributeTypes/destinationIndicator.oa";
export { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa";
export { internationalISDNNumber } from "../SelectedAttributeTypes/internationalISDNNumber.oa";
export { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa";
export { registeredAddress } from "../SelectedAttributeTypes/registeredAddress.oa";
export { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa";
export { telexNumber } from "../SelectedAttributeTypes/telexNumber.oa";
export { x121Address } from "../SelectedAttributeTypes/x121Address.oa";

/* START_OF_SYMBOL_DEFINITION TelecommunicationAttributeSet */
/**
 * @summary TelecommunicationAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TelecommunicationAttributeSet ATTRIBUTE ::= {facsimileTelephoneNumber |
 *    internationalISDNNumber |
 *    telephoneNumber |
 *    telexNumber |
 *    preferredDeliveryMethod |
 *    destinationIndicator |
 *    registeredAddress |
 *    x121Address}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const TelecommunicationAttributeSet: ATTRIBUTE[] = [
    facsimileTelephoneNumber,
    internationalISDNNumber,
    telephoneNumber,
    telexNumber,
    preferredDeliveryMethod,
    destinationIndicator,
    registeredAddress,
    x121Address,
];
/* END_OF_SYMBOL_DEFINITION TelecommunicationAttributeSet */

/* eslint-enable */
