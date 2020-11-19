/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_ldapSyntaxDescription } from "../SelectedAttributeTypes/id-lsx-ldapSyntaxDescription.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_ldapSyntaxDescription } from "../SelectedAttributeTypes/id-lsx-ldapSyntaxDescription.va";

/* START_OF_SYMBOL_DEFINITION ldapSyntaxDescription */
/**
 * @summary ldapSyntaxDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapSyntaxDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "LDAP Syntax Description"
 *   DIRECTORY SYNTAX  NULL
 *   ID                id-lsx-ldapSyntaxDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<NULL>}
 * @implements {SYNTAX_NAME<NULL>}
 */
export const ldapSyntaxDescription: SYNTAX_NAME<NULL> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&ldapDesc": "LDAP Syntax Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_ldapSyntaxDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ldapSyntaxDescription */

/* eslint-enable */
