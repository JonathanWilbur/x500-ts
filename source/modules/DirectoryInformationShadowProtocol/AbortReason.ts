/**
 * `AbortReason ::= INTEGER {
 *   localSystemProblem(0),
 *   invalidParameter(1), -- reflectedParameter supplied
 *   unrecognizedActivity(2),
 *   temporaryProblem(3),
 *   -- the RTSE cannot accept a session for a period of time
 *   protocolError(4), -- RTSE level protocol error
 *   permanentProblem(5), --provider-abort solely in normal mode
 *   userError(6), -- user-abort solely in normal mode
 *   transferCompleted(7) -- activity can't be discarded--}`
 */
enum AbortReason {
    localSystemProblem = 0,
    invalidParameter = 1, // reflectedParameter supplied
    unrecognizedActivity = 2,
    temporaryProblem = 3,
    // the RTSE cannot accept a session for a period of time
    protocolError = 4, // RTSE level protocol error
    permanentProblem = 5, // provider-abort solely in normal mode
    userError = 6, // user-abort solely in normal mode
    transferCompleted = 7, // activity can't be discarded
}

export default AbortReason;
