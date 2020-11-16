/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
import { id_at_collectiveLocalityName } from "../SelectedAttributeTypes/id-at-collectiveLocalityName.va";
import { localityName } from "../SelectedAttributeTypes/localityName.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
export { id_at_collectiveLocalityName } from "../SelectedAttributeTypes/id-at-collectiveLocalityName.va";
export { localityName } from "../SelectedAttributeTypes/localityName.oa";

/* START_OF_SYMBOL_DEFINITION collectiveLocalityName */
/**
 * @summary collectiveLocalityName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveLocalityName ATTRIBUTE ::= {
 *   SUBTYPE OF              localityName
 *   COLLECTIVE              TRUE
 *   LDAP-SYNTAX             directoryString.&id
 *   LDAP-NAME               {"c-l"}
 *   ID                      id-at-collectiveLocalityName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const collectiveLocalityName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": localityName /* OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_collectiveLocalityName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION collectiveLocalityName */

/* eslint-enable */
