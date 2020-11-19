/* eslint-disable */
import { id_opcode_search } from "../CommonProtocolSpecification/id-opcode-search.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { abandoned } from "../DirectoryAbstractService/abandoned.oa";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa";
import { nameError } from "../DirectoryAbstractService/nameError.oa";
import { referral } from "../DirectoryAbstractService/referral.oa";
import {
    SearchArgument,
    _decode_SearchArgument,
    _encode_SearchArgument,
} from "../DirectoryAbstractService/SearchArgument.ta";
import {
    SearchResult,
    _decode_SearchResult,
    _encode_SearchResult,
} from "../DirectoryAbstractService/SearchResult.ta";
import { securityError } from "../DirectoryAbstractService/securityError.oa";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { id_opcode_search } from "../CommonProtocolSpecification/id-opcode-search.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { abandoned } from "../DirectoryAbstractService/abandoned.oa";
export { attributeError } from "../DirectoryAbstractService/attributeError.oa";
export { nameError } from "../DirectoryAbstractService/nameError.oa";
export { referral } from "../DirectoryAbstractService/referral.oa";
export {
    SearchArgument,
    _decode_SearchArgument,
    _encode_SearchArgument,
} from "../DirectoryAbstractService/SearchArgument.ta";
export {
    SearchResult,
    _decode_SearchResult,
    _encode_SearchResult,
} from "../DirectoryAbstractService/SearchResult.ta";
export { securityError } from "../DirectoryAbstractService/securityError.oa";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa";

/* START_OF_SYMBOL_DEFINITION search */
/**
 * @summary search
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * search OPERATION ::= {
 *   ARGUMENT  SearchArgument
 *   RESULT    SearchResult
 *   ERRORS    {attributeError |
 *              nameError |
 *              serviceError |
 *              referral |
 *              abandoned |
 *              securityError}
 *   CODE      id-opcode-search }
 * ```
 *
 * @constant
 * @type {OPERATION<SearchArgument, SearchResult>}
 * @implements {OPERATION<SearchArgument, SearchResult>}
 */
export const search: OPERATION<SearchArgument, SearchResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SearchArgument,
        "&ResultType": _decode_SearchResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SearchArgument,
        "&ResultType": _encode_SearchResult,
    },
    "&Errors": [
        attributeError,
        nameError,
        serviceError,
        referral,
        abandoned,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_search /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION search */

/* eslint-enable */
