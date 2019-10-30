/**
 * `CommonResultsSeq ::= SEQUENCE {
 *   securityParameters  [30]  SecurityParameters OPTIONAL,
 *   performer           [29]  DistinguishedName OPTIONAL,
 *   aliasDereferenced   [28]  BOOLEAN DEFAULT FALSE,
 *   notification        [27]  SEQUENCE SIZE (1..MAX) OF Attribute
 *                             {{SupportedAttributes}} OPTIONAL,
 *   ... }`
 */
