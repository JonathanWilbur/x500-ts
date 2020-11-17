/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { chained } from "../DistributedOperations/chained.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa";
export { chained } from "../DistributedOperations/chained.oa";
import { addEntry } from "../DirectoryAbstractService/addEntry.oa";
import { administerPassword } from "../DirectoryAbstractService/administerPassword.oa";
import { changePassword } from "../DirectoryAbstractService/changePassword.oa";
import { compare } from "../DirectoryAbstractService/compare.oa";
import { ldapTransport } from "../DirectoryAbstractService/ldapTransport.oa";
import { linkedLDAP } from "../DirectoryAbstractService/linkedLDAP.oa";
import { list } from "../DirectoryAbstractService/list.oa";
import { modifyDN } from "../DirectoryAbstractService/modifyDN.oa";
import { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa";
import { read } from "../DirectoryAbstractService/read.oa";
import { removeEntry } from "../DirectoryAbstractService/removeEntry.oa";
import { search } from "../DirectoryAbstractService/search.oa";

/* START_OF_SYMBOL_DEFINITION chainedModifyEntry */
/**
 * @summary chainedModifyEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedModifyEntry        OPERATION ::= chained{modifyEntry}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedModifyEntry: OPERATION = chained(modifyEntry);
/* END_OF_SYMBOL_DEFINITION chainedModifyEntry */

/* eslint-enable */
