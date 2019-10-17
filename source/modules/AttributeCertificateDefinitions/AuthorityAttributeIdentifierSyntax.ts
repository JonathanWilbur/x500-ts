import AuthAttId from "./AuthAttId";

/**
 * `AuthorityAttributeIdentifierSyntax ::= SEQUENCE SIZE (1..MAX) OF AuthAttId`
 */
type AuthorityAttributeIdentifierSyntax = AuthAttId[];
export default AuthorityAttributeIdentifierSyntax;
