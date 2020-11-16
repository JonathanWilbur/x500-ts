/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { facsimileNumberMatch } from "../SelectedAttributeTypes/facsimileNumberMatch.oa";
import { facsimileNumberSubstringsMatch } from "../SelectedAttributeTypes/facsimileNumberSubstringsMatch.oa";
import { facsimileTelephoneNr } from "../SelectedAttributeTypes/facsimileTelephoneNr.oa";
import {
    _decode_FacsimileTelephoneNumber,
    _encode_FacsimileTelephoneNumber,
} from "../SelectedAttributeTypes/FacsimileTelephoneNumber.ta";
import { id_at_facsimileTelephoneNumber } from "../SelectedAttributeTypes/id-at-facsimileTelephoneNumber.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { facsimileNumberMatch } from "../SelectedAttributeTypes/facsimileNumberMatch.oa";
export { facsimileNumberSubstringsMatch } from "../SelectedAttributeTypes/facsimileNumberSubstringsMatch.oa";
export { facsimileTelephoneNr } from "../SelectedAttributeTypes/facsimileTelephoneNr.oa";
export {
    FacsimileTelephoneNumber,
    _decode_FacsimileTelephoneNumber,
    _encode_FacsimileTelephoneNumber,
} from "../SelectedAttributeTypes/FacsimileTelephoneNumber.ta";
export { id_at_facsimileTelephoneNumber } from "../SelectedAttributeTypes/id-at-facsimileTelephoneNumber.va";

/* START_OF_SYMBOL_DEFINITION facsimileTelephoneNumber */
/**
 * @summary facsimileTelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * facsimileTelephoneNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              FacsimileTelephoneNumber
 *   EQUALITY MATCHING RULE   facsimileNumberMatch
 *   SUBSTRINGS MATCHING RULE facsimileNumberSubstringsMatch
 *   LDAP-SYNTAX              facsimileTelephoneNr.&id
 *   LDAP-NAME                {"facsimileTelephoneNumber"}
 *   ID                       id-at-facsimileTelephoneNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const facsimileTelephoneNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_FacsimileTelephoneNumber,
    },
    encoderFor: {
        "&Type": _encode_FacsimileTelephoneNumber,
    },
    "&equality-match": facsimileNumberMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": facsimileNumberSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": facsimileTelephoneNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_facsimileTelephoneNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION facsimileTelephoneNumber */

/* eslint-enable */
