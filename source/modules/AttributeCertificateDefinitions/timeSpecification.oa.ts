/* eslint-disable */
import { id_ce_timeSpecification } from "../AttributeCertificateDefinitions/id-ce-timeSpecification.va";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    _decode_TimeSpecification,
    _encode_TimeSpecification,
} from "../SelectedAttributeTypes/TimeSpecification.ta";
export { id_ce_timeSpecification } from "../AttributeCertificateDefinitions/id-ce-timeSpecification.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    TimeSpecification,
    _decode_TimeSpecification,
    _encode_TimeSpecification,
} from "../SelectedAttributeTypes/TimeSpecification.ta";

/* START_OF_SYMBOL_DEFINITION timeSpecification */
/**
 * @summary timeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * timeSpecification EXTENSION ::= {
 *   SYNTAX         TimeSpecification
 *   IDENTIFIED BY  id-ce-timeSpecification }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const timeSpecification: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_TimeSpecification,
    },
    encoderFor: {
        "&ExtnType": _encode_TimeSpecification,
    },
    "&id": id_ce_timeSpecification /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION timeSpecification */

/* eslint-enable */
