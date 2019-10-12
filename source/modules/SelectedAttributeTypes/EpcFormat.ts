/**
 * EpcFormat ::= SEQUENCE {
 *   fields          SEQUENCE SIZE (1..MAX) OF SEQUENCE {
 *     bits            INTEGER,
 *     charField       CHOICE {
 *       characters  [0] INTEGER,
 *       maxValue    [1] INTEGER },
 *     result          ENUMERATED {
 *       numericPad     (0),
 *       numeric        (1),
 *       alpha7bits     (2) } DEFAULT numericPad },
 *   digitShift  [0] INTEGER                        OPTIONAL,
 *   checkCalc   [1] INTEGER                        OPTIONAL,
 *   urnPrefix       UTF8String                     OPTIONAL }
 */
