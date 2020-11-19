/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_asx_pwdEncAlgDescription } from "../PasswordPolicy/id-asx-pwdEncAlgDescription.va";
import {
    PwdEncAlg,
    _decode_PwdEncAlg,
    _encode_PwdEncAlg,
} from "../PasswordPolicy/PwdEncAlg.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_asx_pwdEncAlgDescription } from "../PasswordPolicy/id-asx-pwdEncAlgDescription.va";
export {
    PwdEncAlg,
    _decode_PwdEncAlg,
    _encode_PwdEncAlg,
} from "../PasswordPolicy/PwdEncAlg.ta";

/* START_OF_SYMBOL_DEFINITION pwdEncAlgDescription */
/**
 * @summary pwdEncAlgDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdEncAlgDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Password Alphabet Description"
 *   DIRECTORY SYNTAX  PwdEncAlg
 *   ID                id-asx-pwdEncAlgDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<PwdEncAlg>}
 * @implements {SYNTAX_NAME<PwdEncAlg>}
 */
export const pwdEncAlgDescription: SYNTAX_NAME<PwdEncAlg> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_PwdEncAlg,
    },
    encoderFor: {
        "&Type": _encode_PwdEncAlg,
    },
    "&ldapDesc": "Password Alphabet Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_pwdEncAlgDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdEncAlgDescription */

/* eslint-enable */
