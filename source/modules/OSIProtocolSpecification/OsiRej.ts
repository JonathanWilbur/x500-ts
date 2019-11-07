/**
 * `OsiRej ::= [4] IMPLICIT SEQUENCE {
 *   invokeId          InvokeId,
 *   problem           CHOICE {
 *     general      [0]  IMPLICIT GeneralProblem,
 *     invoke       [1]  IMPLICIT InvokeProblem,
 *     returnResult [2]  IMPLICIT ReturnResultProblem,
 *     returnError  [3]  IMPLICIT ReturnErrorProblem,
 *     ... },
 *   ... }`
 */
