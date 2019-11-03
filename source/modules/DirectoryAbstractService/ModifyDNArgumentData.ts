import CommonArguments from "./CommonArguments";
import DistinguishedName from "../InformationFramework/DistinguishedName";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";

/**
 * `ModifyDNArgumentData ::= SET {
 *   object        [0]  DistinguishedName,
 *   newRDN        [1]  RelativeDistinguishedName,
 *   deleteOldRDN  [2]  BOOLEAN DEFAULT FALSE,
 *   newSuperior   [3]  DistinguishedName OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF      CommonArguments }`
 */
export default
class ListArgumentData {
    constructor (
        readonly object: DistinguishedName,
        readonly newRDN: RelativeDistinguishedName,
        readonly deleteOldRDN: boolean,
        readonly newSuperior: DistinguishedName | undefined,
        readonly commonArguments: CommonArguments,
    ) {}
}
