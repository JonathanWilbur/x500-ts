/**
 * `Abort-reason ::= INTEGER {
 *   reason-not-specified                 (0),
 *   unrecognized-ppdu                    (1),
 *   unexpected-ppdu                      (2),
 *   unexpected-session-service-primitive (3),
 *   unrecognized-ppdu-parameter          (4),
 *   unexpected-ppdu-parameter            (5),
 *   invalid-ppdu-parameter-value         (6)}`
 */
enum Abort_reason {
    reason_not_specified                 = 0,
    unrecognized_ppdu                    = 1,
    unexpected_ppdu                      = 2,
    unexpected_session_service_primitive = 3,
    unrecognized_ppdu_parameter          = 4,
    unexpected_ppdu_parameter            = 5,
    invalid_ppdu_parameter_value         = 6,
}

export default Abort_reason;
