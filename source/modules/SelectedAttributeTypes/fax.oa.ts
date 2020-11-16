/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_fax } from "../SelectedAttributeTypes/id-lsx-fax.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_fax } from "../SelectedAttributeTypes/id-lsx-fax.va";

/* START_OF_SYMBOL_DEFINITION fax */
/**
 * @summary fax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fax SYNTAX-NAME ::= {
 *   LDAP-DESC         "Fax"
 *   DIRECTORY SYNTAX  NULL
 *   ID                id-lsx-fax }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const fax: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&ldapDesc": "Fax" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_fax /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION fax */

/* eslint-enable */
