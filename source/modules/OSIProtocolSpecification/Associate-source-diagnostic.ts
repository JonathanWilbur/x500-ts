import { ASN1Element } from "asn1-ts";

/**
 * `Associate-source-diagnostic ::= CHOICE {
 *   acse-service-user     [1]  INTEGER {
 *     null                                            (0),
 *     no-reason-given                                 (1),
 *     application-context-name-not-supported          (2),
 *     calling-AP-title-not-recognized                 (3),
 *     calling-AP-invocation-identifier-not-recognized (4),
 *     calling-AE-qualifier-not-recognized             (5),
 *     calling-AE-invocation-identifier-not-recognized (6),
 *     called-AP-title-not-recognized                  (7),
 *     called-AP-invocation-identifier-not-recognized  (8),
 *     called-AE-qualifier-not-recognized              (9),
 *     called-AE-invocation-identifier-not-recognized  (10)}(0..10, ...),
 *   acse-service-provider [2]  INTEGER {
 *     null                                            (0),
 *     no-reason-given                                 (1),
 *     no-common-acse-version                          (2)}(0..2, ...)}`
 */
type Associate_source_diagnostic = ASN1Element;
export default Associate_source_diagnostic;
