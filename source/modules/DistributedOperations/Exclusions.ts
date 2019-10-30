import RDNSequence from "../InformationFramework/RDNSequence";

/**
 * `Exclusions ::= SET SIZE (1..MAX) OF RDNSequence`
 */
type Exclusions = RDNSequence[];
export default Exclusions;
