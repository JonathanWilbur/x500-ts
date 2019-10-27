import RevokedGroup from "./RevokedGroup";

/**
 * `RevokedGroupsSyntax ::= SEQUENCE SIZE (1..MAX) OF RevokedGroup`
 */
type RevokedGroupsSyntax = RevokedGroup[];
export default RevokedGroupsSyntax;
