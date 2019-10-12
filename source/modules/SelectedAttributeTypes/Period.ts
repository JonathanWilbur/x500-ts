/**
 * Period ::= SEQUENCE {
 *   timesOfDay  [0]  SET SIZE (1..MAX) OF DayTimeBand OPTIONAL,
 *   days        [1]  CHOICE {
 *     intDay           SET OF INTEGER,
 *     bitDay           BIT STRING {
 *       sunday    (0),
 *       monday    (1),
 *       tuesday   (2),
 *       wednesday (3),
 *       thursday  (4),
 *       friday    (5),
 *       saturday  (6)},
 *     dayOf            XDayOf,
 *     ...} OPTIONAL,
 *   weeks       [2]  CHOICE {
 *     allWeeks         NULL,
 *     intWeek          SET OF INTEGER,
 *     bitWeek          BIT STRING {
 *       week1     (0),
 *       week2     (1),
 *       week3     (2),
 *       week4     (3),
 *       week5     (4)},
 *     ... } OPTIONAL,
 *   months      [3]  CHOICE {
 *     allMonths        NULL,
 *     intMonth         SET OF INTEGER,
 *     bitMonth         BIT STRING {
 *       january   (0),
 *       february  (1),
 *       march     (2),
 *       april     (3),
 *       may       (4),
 *       june      (5),
 *       july      (6),
 *       august    (7),
 *       september (8),
 *       october   (9),
 *       november  (10),
 *       december  (11)},
 *     ...} OPTIONAL,
 *   years       [4]  SET OF INTEGER(1000..MAX) OPTIONAL,
 *   ... }
 */
