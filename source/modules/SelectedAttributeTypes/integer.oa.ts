/* eslint-disable */
import { INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_integer } from "../SelectedAttributeTypes/id-lsx-integer.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_integer } from "../SelectedAttributeTypes/id-lsx-integer.va";

/* START_OF_SYMBOL_DEFINITION integer */
/**
 * @summary integer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * integer SYNTAX-NAME ::= {
 *   LDAP-DESC         "INTEGER"
 *   DIRECTORY SYNTAX  INTEGER
 *   ID                id-lsx-integer }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<INTEGER>}
 * @implements {SYNTAX_NAME<INTEGER>}
 */
export const integer: SYNTAX_NAME<INTEGER> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&ldapDesc": "INTEGER" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_integer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION integer */

/* eslint-enable */
