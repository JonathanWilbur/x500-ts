/**
 * TimeAssertion ::= CHOICE {
 *   now             NULL,
 *   at              GeneralizedTime,
 *   between         SEQUENCE {
 *     startTime  [0]  GeneralizedTime,
 *     endTime    [1]  GeneralizedTime OPTIONAL,
 *     entirely        BOOLEAN DEFAULT FALSE,
 *     ...},
 *   ... }
 */
