import PerAuthorityScope from "./PerAuthorityScope";

/**
 * `CRLScopeSyntax ::= SEQUENCE SIZE (1..MAX) OF PerAuthorityScope`
 */
type CRLScopeSyntax = PerAuthorityScope[];
export default CRLScopeSyntax;
