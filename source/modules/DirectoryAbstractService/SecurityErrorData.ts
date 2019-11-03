import {
    ASN1Element,
} from "asn1-ts";
import SecurityProblem from "./SecurityProblem";
import EncPwdInfo from "./EncPwdInfo";
import CommonResults from "./CommonResults";

/**
 * `SecurityErrorData ::= SET {
 *   problem      [0]  SecurityProblem,
 *   spkmInfo     [1]  SPKM-ERROR OPTIONAL,
 *   encPwdInfo   [2]  EncPwdInfo OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResults }`
 */
export default
class SecurityErrorData {
    constructor (
        readonly problem: SecurityProblem,
        readonly spkmInfo: ASN1Element | undefined,
        readonly encPwdInfo: EncPwdInfo | undefined,
        readonly commonResults: CommonResults,
    ) {}
}
