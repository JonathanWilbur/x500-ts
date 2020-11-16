/* eslint-disable */
import { id_asx_x509SupportedPublicKeyAlgos } from "../AuthenticationFramework/id-asx-x509SupportedPublicKeyAlgos.va";
import {
    _decode_SupportedPublicKeyAlgorithms,
    _encode_SupportedPublicKeyAlgorithms,
} from "../AuthenticationFramework/SupportedPublicKeyAlgorithms.ta";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_asx_x509SupportedPublicKeyAlgos } from "../AuthenticationFramework/id-asx-x509SupportedPublicKeyAlgos.va";
export {
    SupportedPublicKeyAlgorithms,
    _decode_SupportedPublicKeyAlgorithms,
    _encode_SupportedPublicKeyAlgorithms,
} from "../AuthenticationFramework/SupportedPublicKeyAlgorithms.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION x509SupportedPublicKeyAlgos */
/**
 * @summary x509SupportedPublicKeyAlgos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x509SupportedPublicKeyAlgos SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 supported publiv key algorithms"
 *   DIRECTORY SYNTAX  SupportedPublicKeyAlgorithms
 *   ID                id-asx-x509SupportedPublicKeyAlgos }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const x509SupportedPublicKeyAlgos: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_SupportedPublicKeyAlgorithms,
    },
    encoderFor: {
        "&Type": _encode_SupportedPublicKeyAlgorithms,
    },
    "&ldapDesc":
        "X.509 supported publiv key algorithms" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_x509SupportedPublicKeyAlgos /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION x509SupportedPublicKeyAlgos */

/* eslint-enable */
