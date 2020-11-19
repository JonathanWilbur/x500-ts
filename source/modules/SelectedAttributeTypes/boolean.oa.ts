/* eslint-disable */
import { BOOLEAN } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_boolean } from "../SelectedAttributeTypes/id-lsx-boolean.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_boolean } from "../SelectedAttributeTypes/id-lsx-boolean.va";

/* START_OF_SYMBOL_DEFINITION boolean_ */
/**
 * @summary boolean_
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * boolean SYNTAX-NAME ::= {
 *   LDAP-DESC         "Boolean"
 *   DIRECTORY SYNTAX  BOOLEAN
 *   ID                id-lsx-boolean }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<BOOLEAN>}
 * @implements {SYNTAX_NAME<BOOLEAN>}
 */
export const boolean_: SYNTAX_NAME<BOOLEAN> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&ldapDesc": "Boolean" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_boolean /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION boolean_ */

/* eslint-enable */
