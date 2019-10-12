import UnboundedDirectoryString from "./UnboundedDirectoryString";

/**
 * `PostalAddress ::= SEQUENCE SIZE (1..MAX) OF UnboundedDirectoryString`
 */
type PostalAddress = UnboundedDirectoryString[];
export default PostalAddress;
