import { ASN1Element } from "asn1-ts";

/**
 * `UserPwd ::= CHOICE {
 *     clear                 UTF8String,
 *     encrypted             SEQUENCE {
 *       algorithmIdentifier   AlgorithmIdentifier{{SupportedAlgorithms}},
 *       encryptedString       OCTET STRING,
 *       ...},
 *     ...}`
 */
type UserPwd = ASN1Element;
export default UserPwd;
