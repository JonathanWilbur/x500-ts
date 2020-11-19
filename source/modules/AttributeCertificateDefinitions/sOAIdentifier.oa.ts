/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { id_ce_sOAIdentifier } from "../AttributeCertificateDefinitions/id-ce-sOAIdentifier.va";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_sOAIdentifier } from "../AttributeCertificateDefinitions/id-ce-sOAIdentifier.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION sOAIdentifier */
/**
 * @summary sOAIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sOAIdentifier EXTENSION ::= {
 *   SYNTAX         NULL
 *   IDENTIFIED BY  id-ce-sOAIdentifier }
 * ```
 *
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export const sOAIdentifier: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_ce_sOAIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sOAIdentifier */

/* eslint-enable */
