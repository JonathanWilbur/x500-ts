import AlgorithmIdentifier from "../AuthenticationFramework/AlgorithmIdentifier";

/**
 * `Intg-Algs ::= SEQUENCE OF AlgorithmIdentifier{{SupportedAlgorithms}}`
 */
type Intg_Algs = AlgorithmIdentifier[];
export default Intg_Algs;
