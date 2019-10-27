import ToBeRevokedGroup from "./ToBeRevokedGroup";

/**
 * `ToBeRevokedSyntax ::= SEQUENCE SIZE (1..MAX) OF ToBeRevokedGroup`
 */
type ToBeRevokedSyntax = ToBeRevokedGroup[];
export default ToBeRevokedSyntax;
