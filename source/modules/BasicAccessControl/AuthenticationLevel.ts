import { ASN1Element } from "asn1-ts";

/**
 * `AuthenticationLevel ::= CHOICE {
 *   basicLevels     SEQUENCE {
 *     level           ENUMERATED {none(0), simple(1), strong(2),...},
 *     localQualifier  INTEGER OPTIONAL,
 *     signed          BOOLEAN DEFAULT FALSE,
 *     ...},
 *   other           EXTERNAL,
 *   ... }`
 */
type AuthenticationLevel = ASN1Element;
export default AuthenticationLevel;
