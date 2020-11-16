/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { id_ce_userNotice } from "../AttributeCertificateDefinitions/id-ce-userNotice.va";
import {
    UserNotice,
    _decode_UserNotice,
    _encode_UserNotice,
} from "../AttributeCertificateDefinitions/UserNotice.ta";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_userNotice } from "../AttributeCertificateDefinitions/id-ce-userNotice.va";
export {
    UserNotice,
    _decode_UserNotice,
    _encode_UserNotice,
} from "../AttributeCertificateDefinitions/UserNotice.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION userNotice */
/**
 * @summary userNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userNotice EXTENSION ::= {
 *   SYNTAX         SEQUENCE SIZE (1..MAX) OF UserNotice
 *   IDENTIFIED BY  id-ce-userNotice }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const userNotice: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeSequenceOf<UserNotice>(() => _decode_UserNotice),
    },
    encoderFor: {
        "&ExtnType": $._encodeSequenceOf<UserNotice>(
            () => _encode_UserNotice,
            $.BER
        ),
    },
    "&id": id_ce_userNotice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION userNotice */

/* eslint-enable */
