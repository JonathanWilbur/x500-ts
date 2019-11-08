/**
 * `TLSResponse ::= ENUMERATED {
 *   success         (0),
 *   operationsError (1),
 *   protocolError   (2),
 *   unavailable     (3),
 *   ...}`
 */
enum TLSResponse {
    success         = 0,
    operationsError = 1,
    protocolError   = 2,
    unavailable     = 3,
}

export default TLSResponse;
