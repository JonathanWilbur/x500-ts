/**
 * TimeSpecification ::= SEQUENCE {
 *   time           CHOICE {
 *     absolute       SEQUENCE {
 *       startTime [0]  GeneralizedTime OPTIONAL,
 *       endTime   [1]  GeneralizedTime OPTIONAL,
 *       ... },
 *     periodic      SET SIZE (1..MAX) OF Period},
 *   notThisTime   BOOLEAN DEFAULT FALSE,
 *   timeZone      TimeZone OPTIONAL,
 *   ... }
 */
