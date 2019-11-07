/**
 * `Result ::= INTEGER {
 *   acceptance         (0),
 *   user-rejection     (1),
 *   provider-rejection (2)}`
 */
enum Result {
    acceptance         = 0,
    user_rejection     = 1,
    provider_rejection = 2,
}

export default Result;
