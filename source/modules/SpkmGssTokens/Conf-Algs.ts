import { ASN1Element } from "asn1-ts";
import AlgorithmIdentifier from "../AuthenticationFramework/AlgorithmIdentifier";

/**
 * `Conf-Algs ::= CHOICE {
 *   algs  [0]  SEQUENCE OF AlgorithmIdentifier{{SupportedAlgorithms}},
 *   null  [1]  NULL
 * }`
 */
type Conf_Algs = AlgorithmIdentifier[] | null;
export default Conf_Algs;
