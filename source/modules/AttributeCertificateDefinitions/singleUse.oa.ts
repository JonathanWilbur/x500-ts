/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { id_ce_singleUse } from "../AttributeCertificateDefinitions/id-ce-singleUse.va";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_singleUse } from "../AttributeCertificateDefinitions/id-ce-singleUse.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION singleUse */
/**
 * @summary singleUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * singleUse EXTENSION ::= {
 *   SYNTAX         NULL
 *   IDENTIFIED BY  id-ce-singleUse }
 * ```
 *
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export const singleUse: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_ce_singleUse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION singleUse */

/* eslint-enable */
