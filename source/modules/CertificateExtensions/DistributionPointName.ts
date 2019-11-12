import { ASN1Element } from "asn1-ts";


/**
 * `DistributionPointName ::= CHOICE {
 *   fullName                 [0]  GeneralNames,
 *   nameRelativeToCRLIssuer  [1]  RelativeDistinguishedName,
 *   ... }`
 */
type DistributionPointName = ASN1Element;
export default DistributionPointName;
