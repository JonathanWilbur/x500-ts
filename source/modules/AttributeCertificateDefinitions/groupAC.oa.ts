/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { id_ce_groupAC } from "../AttributeCertificateDefinitions/id-ce-groupAC.va";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_groupAC } from "../AttributeCertificateDefinitions/id-ce-groupAC.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION groupAC */
/**
 * @summary groupAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * groupAC EXTENSION ::= {
 *   SYNTAX         NULL
 *   IDENTIFIED BY  id-ce-groupAC }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const groupAC: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_ce_groupAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION groupAC */

/* eslint-enable */
