import { DERElement } from "asn1-ts";
// import * as errors from "../../errors";
// import GeneralName from "../CertificateExtensions/GeneralName";
// import TargetCert from "./TargetCert";

/**
 * `Target ::= CHOICE {
 *   targetName   [0]  GeneralName,
 *   targetGroup  [1]  GeneralName,
 *   targetCert   [2]  TargetCert,
 *   ... }`
 */
type Target = DERElement;
export default Target;
// Doing it this way because a Target can be basically anything.

// export default class Target {
//     constructor (
//         readonly targetName: GeneralName,
//         readonly targetGroup: GeneralName,
//         readonly targetCert: TargetCert,
//     ) {}

//     public static fromElement (value: ASN1Element): Target {
//         const targetElements: DERElement[] = value.sequence;
//         if (targetElements.length < 3) {
//             throw new errors.X500Error("Too few elements in Target.");
//         }
//     }
// }
