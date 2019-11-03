import { ASN1Element } from "asn1-ts";
import DistinguishedName from "../InformationFramework/DistinguishedName";
import LinkId from "./LinkId";
import CommonArgumentsSeq from "./CommonArgumentsSeq";

/**
 * `LdapArgumentData ::= SEQUENCE {
 *   object        DistinguishedName,
 *   ldapMessage   LDAPMessage,
 *   linkId        LinkId  OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonArgumentsSeq }`
 */
export default
class LdapArgumentData {
    constructor (
        readonly object: DistinguishedName,
        readonly ldapMessage: ASN1Element,
        readonly linkId: LinkId | undefined,
        readonly commonArgumentsSeq: CommonArgumentsSeq,
    ) {}
}
