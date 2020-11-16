/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { dnsNameMatch } from "../SelectedAttributeTypes/dnsNameMatch.oa";
import { dnsString } from "../SelectedAttributeTypes/dnsString.oa";
import {
    _decode_DomainName,
    _encode_DomainName,
} from "../SelectedAttributeTypes/DomainName.ta";
import { id_at_dnsName } from "../SelectedAttributeTypes/id-at-dnsName.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { dnsNameMatch } from "../SelectedAttributeTypes/dnsNameMatch.oa";
export { dnsString } from "../SelectedAttributeTypes/dnsString.oa";
export {
    DomainName,
    _decode_DomainName,
    _encode_DomainName,
} from "../SelectedAttributeTypes/DomainName.ta";
export { id_at_dnsName } from "../SelectedAttributeTypes/id-at-dnsName.va";

/* START_OF_SYMBOL_DEFINITION dnsName */
/**
 * @summary dnsName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dnsName ATTRIBUTE ::= {
 *   WITH SYNTAX             DomainName
 *   EQUALITY MATCHING RULE  dnsNameMatch
 *   LDAP-SYNTAX             dnsString.&id
 *   LDAP-NAME               {"DNS name"}
 *   ID                      id-at-dnsName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const dnsName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DomainName,
    },
    encoderFor: {
        "&Type": _encode_DomainName,
    },
    "&equality-match": dnsNameMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dnsString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_dnsName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dnsName */

/* eslint-enable */
