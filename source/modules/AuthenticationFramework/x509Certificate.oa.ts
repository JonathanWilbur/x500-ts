/* eslint-disable */
import {
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta";
import { id_lsx_x509Certificate } from "../AuthenticationFramework/id-lsx-x509Certificate.va";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta";
export { id_lsx_x509Certificate } from "../AuthenticationFramework/id-lsx-x509Certificate.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION x509Certificate */
/**
 * @summary x509Certificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x509Certificate SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate"
 *   DIRECTORY SYNTAX  Certificate
 *   ID                id-lsx-x509Certificate }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const x509Certificate: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_Certificate,
    },
    encoderFor: {
        "&Type": _encode_Certificate,
    },
    "&ldapDesc": "X.509 Certificate" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_x509Certificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION x509Certificate */

/* eslint-enable */
