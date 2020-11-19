/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_jpeg } from "../SelectedAttributeTypes/id-lsx-jpeg.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_jpeg } from "../SelectedAttributeTypes/id-lsx-jpeg.va";

/* START_OF_SYMBOL_DEFINITION jpeg */
/**
 * @summary jpeg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * jpeg SYNTAX-NAME ::= {
 *   LDAP-DESC         "JPEG"
 *   DIRECTORY SYNTAX  NULL
 *   ID                id-lsx-jpeg }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<NULL>}
 * @implements {SYNTAX_NAME<NULL>}
 */
export const jpeg: SYNTAX_NAME<NULL> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&ldapDesc": "JPEG" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_jpeg /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION jpeg */

/* eslint-enable */
