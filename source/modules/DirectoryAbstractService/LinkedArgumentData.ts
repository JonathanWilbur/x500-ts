import CommonArgumentsSeq from "./CommonArgumentsSeq";
import DistinguishedName from "../InformationFramework/DistinguishedName";
import { ASN1Element } from "asn1-ts";
import LinkId from "./LinkId";

/**
 * `LinkedArgumentData ::= SEQUENCE {
 *   object         DistinguishedName,
 *   ldapMessage    LDAPMessage,
 *   linkId         LinkId,
 *   returnToClient BOOLEAN DEFAULT FALSE,
 *   ...,
 *   ...,
 *   COMPONENTS OF  CommonArgumentsSeq }`
 */
export default
class LinkedArgumentData {
    constructor (
        readonly object: DistinguishedName,
        readonly ldapMessage: ASN1Element,
        readonly linkId: LinkId,
        readonly returnToClient: boolean,
        readonly commonArgumentsSeq: CommonArgumentsSeq,
    ) {}
}
