/**
 * `AuthenReasonSyntax ::= INTEGER {
 *   unknownUser(0),
 *   incorrectPassword(1),
 *   inaccessiblePassword(2),
 *   passwordVerificationLoop(3),
 *   unrecognizedUser(4)}`
 */
enum AuthenReasonSyntax {
    unknownUser = 0,
    incorrectPassword = 1,
    inaccessiblePassword = 2,
    passwordVerificationLoop = 3,
    unrecognizedUser = 4,
}

export default AuthenReasonSyntax;
