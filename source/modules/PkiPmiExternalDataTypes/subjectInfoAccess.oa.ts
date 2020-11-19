/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import { id_pe_subjectInfoAccess } from "../PkiPmiExternalDataTypes/id-pe-subjectInfoAccess.va";
import {
    SubjectInfoAccessSyntax,
    _decode_SubjectInfoAccessSyntax,
    _encode_SubjectInfoAccessSyntax,
} from "../PkiPmiExternalDataTypes/SubjectInfoAccessSyntax.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_pe_subjectInfoAccess } from "../PkiPmiExternalDataTypes/id-pe-subjectInfoAccess.va";
export {
    SubjectInfoAccessSyntax,
    _decode_SubjectInfoAccessSyntax,
    _encode_SubjectInfoAccessSyntax,
} from "../PkiPmiExternalDataTypes/SubjectInfoAccessSyntax.ta";

/* START_OF_SYMBOL_DEFINITION subjectInfoAccess */
/**
 * @summary subjectInfoAccess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subjectInfoAccess EXTENSION ::= {
 *   SYNTAX         SubjectInfoAccessSyntax
 *   IDENTIFIED BY  id-pe-subjectInfoAccess }
 * ```
 *
 * @constant
 * @type {EXTENSION<SubjectInfoAccessSyntax>}
 * @implements {EXTENSION<SubjectInfoAccessSyntax>}
 */
export const subjectInfoAccess: EXTENSION<SubjectInfoAccessSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_SubjectInfoAccessSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_SubjectInfoAccessSyntax,
    },
    "&id": id_pe_subjectInfoAccess /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subjectInfoAccess */

/* eslint-enable */
