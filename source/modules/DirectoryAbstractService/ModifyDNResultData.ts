import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import CommonResultsSeq from "./CommonResultsSeq";

/**
 * `ModifyDNResultData ::= SEQUENCE {
 *   newRDN        RelativeDistinguishedName,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }`
 */
export default
class ModifyDNResultData {
    constructor (
        readonly newRDN: RelativeDistinguishedName,
        readonly commonResultsSeq: CommonResultsSeq,
    ) {}
}
