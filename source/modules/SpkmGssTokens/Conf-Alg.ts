import { ASN1Element } from "asn1-ts";
import AlgorithmIdentifier from "../AuthenticationFramework/AlgorithmIdentifier";

/**
 * `Conf-Alg ::= CHOICE {
 *   algId  [0]  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   null   [1]  NULL
 * }`
 */
type Conf_Alg = AlgorithmIdentifier | null;
export default Conf_Alg;
