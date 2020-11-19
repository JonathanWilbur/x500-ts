/* eslint-disable */
import { cRLStreamIdentifier } from "../CertificateExtensions/cRLStreamIdentifier.oa";
import { id_asx_cRLStreamIdentifier } from "../ExtensionAttributes/id-asx-cRLStreamIdentifier.va";
import { id_ce_a_cRLStreamIdentifier } from "../ExtensionAttributes/id-ce-a-cRLStreamIdentifier.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { cRLStreamIdentifier } from "../CertificateExtensions/cRLStreamIdentifier.oa";
export { id_asx_cRLStreamIdentifier } from "../ExtensionAttributes/id-asx-cRLStreamIdentifier.va";
export { id_ce_a_cRLStreamIdentifier } from "../ExtensionAttributes/id-ce-a-cRLStreamIdentifier.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION a_cRLStreamIdentifier */
/**
 * @summary a_cRLStreamIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-cRLStreamIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX       cRLStreamIdentifier.&ExtnType
 *   LDAP-SYNTAX       id-asx-cRLStreamIdentifier
 *   LDAP-NAME         {"CRL stream identifier"}
 *   ID                id-ce-a-cRLStreamIdentifier}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof cRLStreamIdentifier["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof cRLStreamIdentifier["&ExtnType"]>}
 */
export const a_cRLStreamIdentifier: ATTRIBUTE<
    typeof cRLStreamIdentifier["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": cRLStreamIdentifier.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": cRLStreamIdentifier.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_cRLStreamIdentifier /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_cRLStreamIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_cRLStreamIdentifier */

/* eslint-enable */
