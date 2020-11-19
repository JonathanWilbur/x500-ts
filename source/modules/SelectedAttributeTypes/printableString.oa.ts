/* eslint-disable */
import { PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_printableString } from "../SelectedAttributeTypes/id-lsx-printableString.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_printableString } from "../SelectedAttributeTypes/id-lsx-printableString.va";

/* START_OF_SYMBOL_DEFINITION printableString */
/**
 * @summary printableString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * printableString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Printable String"
 *   DIRECTORY SYNTAX  PrintableString
 *   ID                id-lsx-printableString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<PrintableString>}
 * @implements {SYNTAX_NAME<PrintableString>}
 */
export const printableString: SYNTAX_NAME<PrintableString> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&ldapDesc": "Printable String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_printableString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION printableString */

/* eslint-enable */
