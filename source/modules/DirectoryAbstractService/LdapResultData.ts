import { ASN1Element } from "asn1-ts";
import CommonResultsSeq from "./CommonResultsSeq";

/**
 * `LdapResultData ::= SEQUENCE {
 *   ldapMessages   SEQUENCE SIZE (1..MAX) OF LDAPMessage OPTIONAL,
 *   returnToClient BOOLEAN DEFAULT FALSE,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }`
 */
export default
class LdapArgumentData {
    constructor (
        readonly ldapMessages: ASN1Element[] | undefined,
        readonly returnToClient: boolean,
        readonly commonResultsSeq: CommonResultsSeq,
    ) {}
}
