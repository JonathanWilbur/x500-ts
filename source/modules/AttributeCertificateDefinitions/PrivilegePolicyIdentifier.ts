import PrivilegePolicy from "./PrivilegePolicy";
// import
/**
 * PrivilegePolicyIdentifier ::= SEQUENCE {
 *   privilegePolicy  PrivilegePolicy,
 *   privPolSyntax    InfoSyntax,
 *   ... }
 */
export default class PrivilegePolicyIdentifier {
    constructor (
        readonly privilegePolicy: PrivilegePolicy
    ) {}
}
