/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import {
    AuthorityInfoAccessSyntax,
    _decode_AuthorityInfoAccessSyntax,
    _encode_AuthorityInfoAccessSyntax,
} from "../PkiPmiExternalDataTypes/AuthorityInfoAccessSyntax.ta";
import { id_pe_authorityInfoAccess } from "../PkiPmiExternalDataTypes/id-pe-authorityInfoAccess.va";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export {
    AuthorityInfoAccessSyntax,
    _decode_AuthorityInfoAccessSyntax,
    _encode_AuthorityInfoAccessSyntax,
} from "../PkiPmiExternalDataTypes/AuthorityInfoAccessSyntax.ta";
export { id_pe_authorityInfoAccess } from "../PkiPmiExternalDataTypes/id-pe-authorityInfoAccess.va";

/* START_OF_SYMBOL_DEFINITION authorityInfoAccess */
/**
 * @summary authorityInfoAccess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorityInfoAccess EXTENSION ::= {
 *   SYNTAX         AuthorityInfoAccessSyntax
 *   IDENTIFIED BY  id-pe-authorityInfoAccess }
 * ```
 *
 * @constant
 * @type {EXTENSION<AuthorityInfoAccessSyntax>}
 * @implements {EXTENSION<AuthorityInfoAccessSyntax>}
 */
export const authorityInfoAccess: EXTENSION<AuthorityInfoAccessSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AuthorityInfoAccessSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AuthorityInfoAccessSyntax,
    },
    "&id": id_pe_authorityInfoAccess /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION authorityInfoAccess */

/* eslint-enable */
