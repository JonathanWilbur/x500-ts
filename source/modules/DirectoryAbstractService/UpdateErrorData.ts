import UpdateProblem from "./UpdateProblem";
import { ASN1Element } from "asn1-ts";
import CommonResults from "./CommonResults";

/**
 * `UpdateErrorData ::= SET {
 *   problem        [0]  UpdateProblem,
 *   attributeInfo  [1]  SET SIZE (1..MAX) OF CHOICE {
 *     attributeType       AttributeType,
 *     attribute           Attribute{{SupportedAttributes}},
 *     ... } OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF       CommonResults }`
 */
export default
class UpdateErrorData {
    constructor (
        readonly problem: UpdateProblem,
        readonly attributeInfo: ASN1Element[] | undefined,
        readonly commonResults: CommonResults,
    ) {}
}
