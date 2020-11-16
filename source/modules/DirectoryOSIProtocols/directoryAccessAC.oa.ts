/* eslint-disable */
import { abandon } from "../DirectoryAbstractService/abandon.oa";
import { addEntry } from "../DirectoryAbstractService/addEntry.oa";
import { administerPassword } from "../DirectoryAbstractService/administerPassword.oa";
import { changePassword } from "../DirectoryAbstractService/changePassword.oa";
import { compare } from "../DirectoryAbstractService/compare.oa";
import { directoryBind } from "../DirectoryAbstractService/directoryBind.oa";
import { list } from "../DirectoryAbstractService/list.oa";
import { modifyDN } from "../DirectoryAbstractService/modifyDN.oa";
import { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa";
import { read } from "../DirectoryAbstractService/read.oa";
import { removeEntry } from "../DirectoryAbstractService/removeEntry.oa";
import { search } from "../DirectoryAbstractService/search.oa";
import { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca";
import { id_ac_directoryAccessAC } from "../DirectoryOSIProtocols/id-ac-directoryAccessAC.va";
export { abandon } from "../DirectoryAbstractService/abandon.oa";
export { addEntry } from "../DirectoryAbstractService/addEntry.oa";
export { administerPassword } from "../DirectoryAbstractService/administerPassword.oa";
export { changePassword } from "../DirectoryAbstractService/changePassword.oa";
export { compare } from "../DirectoryAbstractService/compare.oa";
export { directoryBind } from "../DirectoryAbstractService/directoryBind.oa";
export { list } from "../DirectoryAbstractService/list.oa";
export { modifyDN } from "../DirectoryAbstractService/modifyDN.oa";
export { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa";
export { read } from "../DirectoryAbstractService/read.oa";
export { removeEntry } from "../DirectoryAbstractService/removeEntry.oa";
export { search } from "../DirectoryAbstractService/search.oa";
export { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca";
export { id_ac_directoryAccessAC } from "../DirectoryOSIProtocols/id-ac-directoryAccessAC.va";

/* START_OF_SYMBOL_DEFINITION directoryAccessAC */
/**
 * @summary directoryAccessAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryAccessAC APPLICATION-CONTEXT ::= {
 *   BIND-OPERATION            directoryBind
 *   OPERATIONS                {read |
 *                              compare |
 *                              abandon |
 *                              list |
 *                              search |
 *                              addEntry |
 *                              removeEntry |
 *                              modifyEntry |
 *                              modifyDN |
 *                              administerPassword |
 *                              changePassword }
 *   APPLICATION CONTEXT NAME  id-ac-directoryAccessAC }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const directoryAccessAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": directoryBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        read,
        compare,
        abandon,
        list,
        search,
        addEntry,
        removeEntry,
        modifyEntry,
        modifyDN,
        administerPassword,
        changePassword,
    ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_directoryAccessAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION directoryAccessAC */

/* eslint-enable */
