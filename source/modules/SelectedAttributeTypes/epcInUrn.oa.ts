/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
import { id_at_epcInUrn } from "../SelectedAttributeTypes/id-at-epcInUrn.va";
import { urn } from "../SelectedAttributeTypes/urn.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
export { id_at_epcInUrn } from "../SelectedAttributeTypes/id-at-epcInUrn.va";
export { urn } from "../SelectedAttributeTypes/urn.oa";

/* START_OF_SYMBOL_DEFINITION epcInUrn */
/**
 * @summary epcInUrn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcInUrn ATTRIBUTE ::= {
 *   SUBTYPE OF               urn
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"epcInUrn"}
 *   ID                       id-at-epcInUrn }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const epcInUrn: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": urn /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_epcInUrn /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION epcInUrn */

/* eslint-enable */
