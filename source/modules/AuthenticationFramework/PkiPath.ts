import Certificate from "./Certificate";

/**
 * `PkiPath ::= SEQUENCE SIZE (1..MAX) OF Certificate`
 */
type PkiPath = Certificate[];
export default PkiPath;

