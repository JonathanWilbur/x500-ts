import { ASN1Element } from "asn1-ts";

/**
 * `SPKMInnerContextToken ::= CHOICE {
 *   req     [0]  SPKM-REQ,
 *   rep-ti  [1]  SPKM-REP-TI,
 *   rep-it  [2]  SPKM-REP-IT,
 *   error   [3]  SPKM-ERROR,
 *   mic     [4]  SPKM-MIC,
 *   wrap    [5]  SPKM-WRAP,
 *   del     [6]  SPKM-DEL
 * }`
 */
type SPKMInnerContextToken = ASN1Element;
export default SPKMInnerContextToken;
