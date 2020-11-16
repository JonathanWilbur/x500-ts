/* eslint-disable */
import { attributeCertificateExactMatch } from "../AttributeCertificateDefinitions/attributeCertificateExactMatch.oa";
import { id_at_attributeCertificate } from "../AttributeCertificateDefinitions/id-at-attributeCertificate.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeCertificate,
    _get_decoder_for_AttributeCertificate,
    _get_encoder_for_AttributeCertificate,
} from "../AttributeCertificateDefinitions/AttributeCertificate.ta";
export { attributeCertificateExactMatch } from "../AttributeCertificateDefinitions/attributeCertificateExactMatch.oa";
export { id_at_attributeCertificate } from "../AttributeCertificateDefinitions/id-at-attributeCertificate.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION attributeCertificateAttribute */
/**
 * @summary attributeCertificateAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeCertificateAttribute ATTRIBUTE ::= {
 *   WITH SYNTAX             AttributeCertificate
 *   EQUALITY MATCHING RULE  attributeCertificateExactMatch
 *   ID                      id-at-attributeCertificate }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const attributeCertificateAttribute: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeCertificate,
    },
    encoderFor: {
        "&Type": _encode_AttributeCertificate,
    },
    "&equality-match": attributeCertificateExactMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_attributeCertificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attributeCertificateAttribute */

/* eslint-enable */
