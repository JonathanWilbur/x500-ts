import AlgorithmIdentifier from "../AuthenticationFramework/AlgorithmIdentifier";

/**
 * `Key-Estb-Algs ::= SEQUENCE OF AlgorithmIdentifier{{SupportedAlgorithms}}`
 */
type Key_Estb_Algs = AlgorithmIdentifier[];
export default Key_Estb_Algs;
