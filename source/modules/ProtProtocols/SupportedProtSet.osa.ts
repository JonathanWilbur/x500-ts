/* eslint-disable */
import { avlProt } from "../ProtProtocols/avlProt.oa";
import { casubProt } from "../ProtProtocols/casubProt.oa";
import { tbprot } from "../ProtProtocols/tbprot.oa";
import { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca";
export { avlProt } from "../ProtProtocols/avlProt.oa";
export { casubProt } from "../ProtProtocols/casubProt.oa";
export { tbprot } from "../ProtProtocols/tbprot.oa";
export { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca";

/* START_OF_SYMBOL_DEFINITION SupportedProtSet */
/**
 * @summary SupportedProtSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedProtSet WRAPPED-PROT ::= {avlProt | casubProt | tbprot }
 * ```
 *
 * @constant
 * @type {WRAPPED_PROT[]}
 *
 */
export const SupportedProtSet: WRAPPED_PROT[] = [avlProt, casubProt, tbprot];
/* END_OF_SYMBOL_DEFINITION SupportedProtSet */

/* eslint-enable */
