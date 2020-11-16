/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import { id_ce_invalidityDate } from "../CertificateExtensions/id-ce-invalidityDate.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_invalidityDate } from "../CertificateExtensions/id-ce-invalidityDate.va";

/* START_OF_SYMBOL_DEFINITION invalidityDate */
/**
 * @summary invalidityDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * invalidityDate EXTENSION ::= {
 *   SYNTAX         GeneralizedTime
 *   IDENTIFIED BY  id-ce-invalidityDate }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const invalidityDate: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&ExtnType": $._encodeGeneralizedTime,
    },
    "&id": id_ce_invalidityDate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION invalidityDate */

/* eslint-enable */
