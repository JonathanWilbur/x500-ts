/* eslint-disable */
import { id_sc_subentry } from "../InformationFramework/id-sc-subentry.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { subtreeSpecification } from "../InformationFramework/subtreeSpecification.oa";
import { commonName } from "../SelectedAttributeTypes/commonName.oa";
export { id_sc_subentry } from "../InformationFramework/id-sc-subentry.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { subtreeSpecification } from "../InformationFramework/subtreeSpecification.oa";
export { commonName } from "../SelectedAttributeTypes/commonName.oa";

/* START_OF_SYMBOL_DEFINITION subentry */
/**
 * @summary subentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subentry OBJECT-CLASS ::= {
 *   SUBCLASS OF      {top}
 *   KIND             structural
 *   MUST CONTAIN     {commonName |
 *                     subtreeSpecification}
 *   LDAP-NAME        {"subentry"}
 *   ID               id-sc-subentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const subentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind": ObjectClassKind_structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [
        commonName,
        subtreeSpecification,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_sc_subentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subentry */

/* eslint-enable */
