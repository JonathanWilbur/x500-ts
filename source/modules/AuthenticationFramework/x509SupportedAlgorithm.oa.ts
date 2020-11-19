/* eslint-disable */
import { id_lsx_x509SupportedAlgorithm } from "../AuthenticationFramework/id-lsx-x509SupportedAlgorithm.va";
import {
    SupportedAlgorithm,
    _decode_SupportedAlgorithm,
    _encode_SupportedAlgorithm,
} from "../AuthenticationFramework/SupportedAlgorithm.ta";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_x509SupportedAlgorithm } from "../AuthenticationFramework/id-lsx-x509SupportedAlgorithm.va";
export {
    SupportedAlgorithm,
    _decode_SupportedAlgorithm,
    _encode_SupportedAlgorithm,
} from "../AuthenticationFramework/SupportedAlgorithm.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION x509SupportedAlgorithm */
/**
 * @summary x509SupportedAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x509SupportedAlgorithm SYNTAX-NAME ::= {
 *   LDAP-DESC         "X.509 Supported Algorithm"
 *   DIRECTORY SYNTAX  SupportedAlgorithm
 *   ID                id-lsx-x509SupportedAlgorithm }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<SupportedAlgorithm>}
 * @implements {SYNTAX_NAME<SupportedAlgorithm>}
 */
export const x509SupportedAlgorithm: SYNTAX_NAME<SupportedAlgorithm> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_SupportedAlgorithm,
    },
    encoderFor: {
        "&Type": _encode_SupportedAlgorithm,
    },
    "&ldapDesc": "X.509 Supported Algorithm" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_x509SupportedAlgorithm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION x509SupportedAlgorithm */

/* eslint-enable */
