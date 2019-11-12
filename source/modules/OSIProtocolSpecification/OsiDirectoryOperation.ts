import { ASN1Element } from "asn1-ts";

/**
 * `OsiDirectoryOperation{OPERATION:Operations} ::= CHOICE {
 *   request  OsiReq{{Operations}},
 *   result   OsiRes{{Operations}},
 *   error    OsiErr{{Operations}},
 *   reject   OsiRej}`
 */
type OsiDirectoryOperation = ASN1Element;
export default OsiDirectoryOperation;
