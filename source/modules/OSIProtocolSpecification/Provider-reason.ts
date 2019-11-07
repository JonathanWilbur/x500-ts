/**
 * `Provider-reason ::= INTEGER {
 *   reason-not-specified                (0),
 *   temporary-congestion                (1),
 *   local-limit-exceeded                (2),
 *   called-presentation-address-unknown (3),
 *   protocol-version-not-supported      (4),
 *   default-context-not-supported       (5),
 *   user-data-not-readable              (6),
 *   no-PSAP-available                   (7)}`
 */
enum Provider_reason {
    reason_not_specified                = 0,
    temporary_congestion                = 1,
    local_limit_exceeded                = 2,
    called_presentation_address_unknown = 3,
    protocol_version_not_supported      = 4,
    default_context_not_supported       = 5,
    user_data_not_readable              = 6,
    no_PSAP_available                   = 7,
}

export default Provider_reason;
