import AlgorithmIdentifier from "../AuthenticationFramework/AlgorithmIdentifier";

/**
 * `OWF-Algs ::= SEQUENCE OF AlgorithmIdentifier{{SupportedAlgorithms}}`
 */
type OWF_Algs = AlgorithmIdentifier[];
export default OWF_Algs;
