/**
 * `ZonalResult ::= ENUMERATED {
 *   cannot-select-mapping (0),
 *   zero-mappings         (2),
 *   multiple-mappings     (3),
 *    ... }`
 */
enum ZonalResult {
    cannot_select_mapping = 0,
    zero_mappings         = 2,
    multiple_mappings     = 3,
}

export default ZonalResult;
