import OrganizationalUnitName from "./OrganizationalUnitName";

/**
 * `OrganizationalUnitNames ::= SEQUENCE SIZE (1..ub-organizational-units) OF OrganizationalUnitName`
 */
type OrganizationalUnitNames = OrganizationalUnitName[];
export default OrganizationalUnitNames;
