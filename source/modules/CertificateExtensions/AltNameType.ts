import { DERElement } from "asn1-ts";

/**
 * `AltNameType ::= CHOICE {
 *   builtinNameForm
 *     ENUMERATED {rfc822Name(1), dNSName(2), x400Address(3), directoryName(4),
 *                 ediPartyName(5), uniformResourceIdentifier(6), iPAddress(7),
 *                 registeredId(8), ...
 *                 },
 *   otherNameForm    OBJECT IDENTIFIER,
 *   ... }`
 */
type AltNameType = DERElement;
export default AltNameType;
