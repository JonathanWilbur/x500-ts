/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_substringAssertion } from "../SelectedAttributeTypes/id-lsx-substringAssertion.va";
import {
    SubstringAssertion,
    _decode_SubstringAssertion,
    _encode_SubstringAssertion,
} from "../SelectedAttributeTypes/SubstringAssertion.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_substringAssertion } from "../SelectedAttributeTypes/id-lsx-substringAssertion.va";
export {
    SubstringAssertion,
    _decode_SubstringAssertion,
    _encode_SubstringAssertion,
} from "../SelectedAttributeTypes/SubstringAssertion.ta";

/* START_OF_SYMBOL_DEFINITION substringAssertion */
/**
 * @summary substringAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * substringAssertion SYNTAX-NAME ::= {
 *   LDAP-DESC         "Substring Assertion"
 *   DIRECTORY SYNTAX  SubstringAssertion
 *   ID                id-lsx-substringAssertion }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<SubstringAssertion>}
 * @implements {SYNTAX_NAME<SubstringAssertion>}
 */
export const substringAssertion: SYNTAX_NAME<SubstringAssertion> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&Type": _encode_SubstringAssertion,
    },
    "&ldapDesc": "Substring Assertion" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_substringAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION substringAssertion */

/* eslint-enable */
