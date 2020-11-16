/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { id_ce_noRevAvail } from "../AttributeCertificateDefinitions/id-ce-noRevAvail.va";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_noRevAvail } from "../AttributeCertificateDefinitions/id-ce-noRevAvail.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION noRevAvail */
/**
 * @summary noRevAvail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noRevAvail EXTENSION ::= {
 *   SYNTAX         NULL
 *   IDENTIFIED BY  id-ce-noRevAvail }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const noRevAvail: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_ce_noRevAvail /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION noRevAvail */

/* eslint-enable */
