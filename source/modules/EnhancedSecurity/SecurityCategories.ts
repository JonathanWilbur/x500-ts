import SecurityCategory from "./SecurityCategory";

/**
 * `SecurityCategories ::= SET SIZE (1..MAX) OF SecurityCategory`
 */
type SecurityCategories = SecurityCategory[];
export default SecurityCategories;
