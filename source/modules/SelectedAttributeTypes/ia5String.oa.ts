/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_ia5String } from "../SelectedAttributeTypes/id-lsx-ia5String.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_ia5String } from "../SelectedAttributeTypes/id-lsx-ia5String.va";

/* START_OF_SYMBOL_DEFINITION ia5String */
/**
 * @summary ia5String
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ia5String SYNTAX-NAME ::= {
 *   LDAP-DESC         "IA5 String"
 *   DIRECTORY SYNTAX  IA5String
 *   ID                id-lsx-ia5String }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const ia5String: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&ldapDesc": "IA5 String" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_ia5String /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ia5String */

/* eslint-enable */
