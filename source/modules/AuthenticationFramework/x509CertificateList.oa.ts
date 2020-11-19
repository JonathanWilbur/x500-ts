/* eslint-disable */
import {
    CertificateList,
    _decode_CertificateList,
    _encode_CertificateList,
} from "../AuthenticationFramework/CertificateList.ta";
import { id_lsx_x509CertificateList } from "../AuthenticationFramework/id-lsx-x509CertificateList.va";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    CertificateList,
    _decode_CertificateList,
    _encode_CertificateList,
} from "../AuthenticationFramework/CertificateList.ta";
export { id_lsx_x509CertificateList } from "../AuthenticationFramework/id-lsx-x509CertificateList.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION x509CertificateList */
/**
 * @summary x509CertificateList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x509CertificateList SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Certificate List"
 *   DIRECTORY SYNTAX  CertificateList
 *   ID                id-lsx-x509CertificateList }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<CertificateList>}
 * @implements {SYNTAX_NAME<CertificateList>}
 */
export const x509CertificateList: SYNTAX_NAME<CertificateList> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_CertificateList,
    },
    encoderFor: {
        "&Type": _encode_CertificateList,
    },
    "&ldapDesc": "X.509 Certificate List" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_x509CertificateList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION x509CertificateList */

/* eslint-enable */
