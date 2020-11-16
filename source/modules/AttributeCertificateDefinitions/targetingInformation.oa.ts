/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { id_ce_targetingInformation } from "../AttributeCertificateDefinitions/id-ce-targetingInformation.va";
import {
    Targets,
    _decode_Targets,
    _encode_Targets,
} from "../AttributeCertificateDefinitions/Targets.ta";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_targetingInformation } from "../AttributeCertificateDefinitions/id-ce-targetingInformation.va";
export {
    Targets,
    _decode_Targets,
    _encode_Targets,
} from "../AttributeCertificateDefinitions/Targets.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";

/* START_OF_SYMBOL_DEFINITION targetingInformation */
/**
 * @summary targetingInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * targetingInformation EXTENSION ::= {
 *   SYNTAX         SEQUENCE SIZE (1..MAX) OF Targets
 *   IDENTIFIED BY  id-ce-targetingInformation }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const targetingInformation: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeSequenceOf<Targets>(() => _decode_Targets),
    },
    encoderFor: {
        "&ExtnType": $._encodeSequenceOf<Targets>(() => _encode_Targets, $.BER),
    },
    "&id": id_ce_targetingInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION targetingInformation */

/* eslint-enable */
