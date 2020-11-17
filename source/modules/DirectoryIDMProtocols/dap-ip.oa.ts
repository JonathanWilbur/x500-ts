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
import { id_idm_dap } from "../DirectoryIDMProtocols/id-idm-dap.va";
import { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
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
export { id_idm_dap } from "../DirectoryIDMProtocols/id-idm-dap.va";
export { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca";

/* START_OF_SYMBOL_DEFINITION dap_ip */
/**
 * @summary dap_ip
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dap-ip IDM-PROTOCOL ::= {
 *   BIND-OPERATION  directoryBind
 *   OPERATIONS      {read |
 *                    compare |
 *                    abandon |
 *                    list |
 *                    search |
 *                    addEntry |
 *                    removeEntry |
 *                    modifyEntry |
 *                    modifyDN |
 *                    administerPassword |
 *                    changePassword }
 *   ID              id-idm-dap }
 * ```
 *
 * @constant
 * @type {IDM_PROTOCOL}
 * @implements {IDM_PROTOCOL}
 */
export const dap_ip: IDM_PROTOCOL = {
    class: "IDM-PROTOCOL",
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
    "&id": id_idm_dap /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dap_ip */

/* eslint-enable */
