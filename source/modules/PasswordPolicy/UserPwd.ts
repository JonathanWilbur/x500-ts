import { DERElement } from "asn1-ts";

/**
 * `UserPwd ::= CHOICE {
 *     clear                 UTF8String,
 *     encrypted             SEQUENCE {
 *       algorithmIdentifier   AlgorithmIdentifier{{SupportedAlgorithms}},
 *       encryptedString       OCTET STRING,
 *       ...},
 *     ...}`
 */
type UserPwd = DERElement;
export default UserPwd;
