import PrivilegePolicy from "./PrivilegePolicy";

/**
 * `AcceptablePrivilegePoliciesSyntax ::= SEQUENCE SIZE (1..MAX) OF PrivilegePolicy`
 */
type AcceptablePrivilegePoliciesSyntax = PrivilegePolicy[];
export default AcceptablePrivilegePoliciesSyntax;
