/**
 * UiiFormat ::= SEQUENCE {
 *   baseObject  URI  OPTIONAL,
 *   subset      ENUMERATED {
 *     baseObject   (0),
 *     oneLevel     (1),
 *     wholeSubtree (2) } DEFAULT baseObject,
 *   next        CHOICE {
 *     length      INTEGER,
 *     filter      UiiFilter } }
 */
