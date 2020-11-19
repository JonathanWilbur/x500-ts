/* eslint-disable */
import { id_ce_issuedOnBehalfOf } from "../AttributeCertificateDefinitions/id-ce-issuedOnBehalfOf.va";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
export { id_ce_issuedOnBehalfOf } from "../AttributeCertificateDefinitions/id-ce-issuedOnBehalfOf.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";

/* START_OF_SYMBOL_DEFINITION issuedOnBehalfOf */
/**
 * @summary issuedOnBehalfOf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * issuedOnBehalfOf EXTENSION ::= {
 *   SYNTAX         GeneralName
 *   IDENTIFIED BY  id-ce-issuedOnBehalfOf }
 * ```
 *
 * @constant
 * @type {EXTENSION<GeneralName>}
 * @implements {EXTENSION<GeneralName>}
 */
export const issuedOnBehalfOf: EXTENSION<GeneralName> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_GeneralName,
    },
    encoderFor: {
        "&ExtnType": _encode_GeneralName,
    },
    "&id": id_ce_issuedOnBehalfOf /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION issuedOnBehalfOf */

/* eslint-enable */
