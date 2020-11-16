/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa";
import {
    _decode_CommunicationsService,
    _encode_CommunicationsService,
} from "../SelectedAttributeTypes/CommunicationsService.ta";
import { id_at_communicationsService } from "../SelectedAttributeTypes/id-at-communicationsService.va";
import { oid } from "../SelectedAttributeTypes/oid.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa";
export {
    CommunicationsService,
    _decode_CommunicationsService,
    _encode_CommunicationsService,
} from "../SelectedAttributeTypes/CommunicationsService.ta";
export { id_at_communicationsService } from "../SelectedAttributeTypes/id-at-communicationsService.va";
export { oid } from "../SelectedAttributeTypes/oid.oa";

/* START_OF_SYMBOL_DEFINITION communicationsService */
/**
 * @summary communicationsService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * communicationsService ATTRIBUTE ::= {
 *   WITH SYNTAX              CommunicationsService
 *   EQUALITY MATCHING RULE   objectIdentifierMatch
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"communicationsService"}
 *   ID                       id-at-communicationsService }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const communicationsService: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CommunicationsService,
    },
    encoderFor: {
        "&Type": _encode_CommunicationsService,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_communicationsService /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION communicationsService */

/* eslint-enable */