/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { id_ce_noAssertion } from "../AttributeCertificateDefinitions/id-ce-noAssertion.va";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_noAssertion } from "../AttributeCertificateDefinitions/id-ce-noAssertion.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION noAssertion */
/**
 * @summary noAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noAssertion EXTENSION ::= {
 *   SYNTAX         NULL
 *   IDENTIFIED BY  id-ce-noAssertion }
 * ```
 *
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export const noAssertion: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_ce_noAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION noAssertion */

/* eslint-enable */
