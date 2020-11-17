/* eslint-disable */
import { id_idm_dsp } from "../DirectoryIDMProtocols/id-idm-dsp.va";
import { chainedAbandon } from "../DistributedOperations/chainedAbandon.oa";
import { chainedAddEntry } from "../DistributedOperations/chainedAddEntry.oa";
import { chainedAdministerPassword } from "../DistributedOperations/chainedAdministerPassword.oa";
import { chainedChangePassword } from "../DistributedOperations/chainedChangePassword.oa";
import { chainedCompare } from "../DistributedOperations/chainedCompare.oa";
import { chainedLdapTransport } from "../DistributedOperations/chainedLdapTransport.oa";
import { chainedLinkedLDAP } from "../DistributedOperations/chainedLinkedLDAP.oa";
import { chainedList } from "../DistributedOperations/chainedList.oa";
import { chainedModifyDN } from "../DistributedOperations/chainedModifyDN.oa";
import { chainedModifyEntry } from "../DistributedOperations/chainedModifyEntry.oa";
import { chainedRead } from "../DistributedOperations/chainedRead.oa";
import { chainedRemoveEntry } from "../DistributedOperations/chainedRemoveEntry.oa";
import { chainedSearch } from "../DistributedOperations/chainedSearch.oa";
import { dSABind } from "../DistributedOperations/dSABind.oa";
import { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { id_idm_dsp } from "../DirectoryIDMProtocols/id-idm-dsp.va";
export { chainedAbandon } from "../DistributedOperations/chainedAbandon.oa";
export { chainedAddEntry } from "../DistributedOperations/chainedAddEntry.oa";
export { chainedAdministerPassword } from "../DistributedOperations/chainedAdministerPassword.oa";
export { chainedChangePassword } from "../DistributedOperations/chainedChangePassword.oa";
export { chainedCompare } from "../DistributedOperations/chainedCompare.oa";
export { chainedLdapTransport } from "../DistributedOperations/chainedLdapTransport.oa";
export { chainedLinkedLDAP } from "../DistributedOperations/chainedLinkedLDAP.oa";
export { chainedList } from "../DistributedOperations/chainedList.oa";
export { chainedModifyDN } from "../DistributedOperations/chainedModifyDN.oa";
export { chainedModifyEntry } from "../DistributedOperations/chainedModifyEntry.oa";
export { chainedRead } from "../DistributedOperations/chainedRead.oa";
export { chainedRemoveEntry } from "../DistributedOperations/chainedRemoveEntry.oa";
export { chainedSearch } from "../DistributedOperations/chainedSearch.oa";
export { dSABind } from "../DistributedOperations/dSABind.oa";
export { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca";

/* START_OF_SYMBOL_DEFINITION dsp_ip */
/**
 * @summary dsp_ip
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsp-ip IDM-PROTOCOL ::= {
 *   BIND-OPERATION  dSABind
 *   OPERATIONS      {chainedRead |
 *                    chainedCompare |
 *                    chainedAbandon |
 *                    chainedList |
 *                    chainedSearch |
 *                    chainedAddEntry |
 *                    chainedRemoveEntry |
 *                    chainedModifyEntry |
 *                    chainedModifyDN |
 *                    chainedAdministerPassword |
 *                    chainedChangePassword |
 *                    chainedLdapTransport |
 *                    chainedLinkedLDAP }
 *   ID              id-idm-dsp }
 * ```
 *
 * @constant
 * @type {IDM_PROTOCOL}
 * @implements {IDM_PROTOCOL}
 */
export const dsp_ip: IDM_PROTOCOL = {
    class: "IDM-PROTOCOL",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSABind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        chainedRead,
        chainedCompare,
        chainedAbandon,
        chainedList,
        chainedSearch,
        chainedAddEntry,
        chainedRemoveEntry,
        chainedModifyEntry,
        chainedModifyDN,
        chainedAdministerPassword,
        chainedChangePassword,
        chainedLdapTransport,
        chainedLinkedLDAP,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_idm_dsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dsp_ip */

/* eslint-enable */
