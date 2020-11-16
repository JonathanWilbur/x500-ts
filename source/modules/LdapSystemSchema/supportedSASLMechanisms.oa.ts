/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_lat_supportedSASLMechanisms } from "../LdapSystemSchema/id-lat-supportedSASLMechanisms.va";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
import {
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "../SelectedAttributeTypes/DirectoryString.ta";
export { ub_saslMechanism } from "../DirectoryAbstractService/ub-saslMechanism.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_lat_supportedSASLMechanisms } from "../LdapSystemSchema/id-lat-supportedSASLMechanisms.va";
export { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
export {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "../SelectedAttributeTypes/DirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION supportedSASLMechanisms */
/**
 * @summary supportedSASLMechanisms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedSASLMechanisms ATTRIBUTE ::= {
 *   WITH SYNTAX              DirectoryString{ub-saslMechanism}
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"supportedSASLMechanisms"}
 *   ID                       id-lat-supportedSASLMechanisms }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const supportedSASLMechanisms: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DirectoryString,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_lat_supportedSASLMechanisms /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION supportedSASLMechanisms */

/* eslint-enable */
