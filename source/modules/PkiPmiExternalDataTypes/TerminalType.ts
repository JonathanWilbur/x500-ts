/**
 * `TerminalType ::= INTEGER {
 *   telex(3),
 *   teletex(4),
 *   g3-facsimile(5),
 *   g4-facsimile(6),
 *   ia5-terminal(7),
 *   videotex(8)}(0..ub-integer-options)`
 */
enum TerminalType {
    telex = 3,
    teletex = 4,
    g3Facsimile = 5,
    g4Facsimile = 6,
    ia5Terminal = 7,
    videotex = 8,
}

export default TerminalType;
