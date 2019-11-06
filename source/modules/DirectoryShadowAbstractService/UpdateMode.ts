import { ASN1Element } from "asn1-ts";

/**
 * `UpdateMode ::= CHOICE {
 *   supplierInitiated  [0]  SupplierUpdateMode,
 *   consumerInitiated  [1]  ConsumerUpdateMode,
 *   ... }`
 */
type UpdateMode = ASN1Element;
export default UpdateMode;
