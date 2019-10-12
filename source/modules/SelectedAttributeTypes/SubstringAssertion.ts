/**
 * SubstringAssertion ::= SEQUENCE OF CHOICE {
 *   initial  [0]  UnboundedDirectoryString,
 *   any      [1]  UnboundedDirectoryString,
 *   final    [2]  UnboundedDirectoryString,
 *     -- at most one initial and one final component
 *   control       Attribute{{SupportedAttributes}},
 *     -- Used to specify interpretation of the following items
 *   ... }
 */
