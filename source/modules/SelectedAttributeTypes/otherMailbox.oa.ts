/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_otherMailbox } from "../SelectedAttributeTypes/id-lsx-otherMailbox.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_otherMailbox } from "../SelectedAttributeTypes/id-lsx-otherMailbox.va";

/* START_OF_SYMBOL_DEFINITION otherMailbox */
/**
 * @summary otherMailbox
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * otherMailbox SYNTAX-NAME ::= {
 *   LDAP-DESC        "Other Mailbox"
 *   DIRECTORY SYNTAX  NULL
 *   ID                id-lsx-otherMailbox }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const otherMailbox: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&ldapDesc": "Other Mailbox" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_otherMailbox /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION otherMailbox */

/* eslint-enable */
