import { ASN1Element } from "asn1-ts";

/**
 * `SupplierUpdateMode ::= CHOICE {
 *   onChange   BOOLEAN,
 *   scheduled  SchedulingParameters,
 *   ... }`
 */
type SupplierUpdateMode = ASN1Element;
export default SupplierUpdateMode;
