import { BERElement } from "asn1-ts";

/**
 * `PagedResultsRequest ::= CHOICE {
 *   newRequest         SEQUENCE {
 *     pageSize           INTEGER,
 *     sortKeys           SEQUENCE SIZE (1..MAX) OF SortKey OPTIONAL,
 *     reverse       [1]  BOOLEAN DEFAULT FALSE,
 *     unmerged      [2]  BOOLEAN DEFAULT FALSE,
 *     pageNumber    [3]  INTEGER OPTIONAL,
 *     ...},
 *   queryReference     OCTET STRING,
 *   abandonQuery  [0]  OCTET STRING,
 *   ... }`
 */
type PagedResultsRequest = BERElement;
export default PagedResultsRequest;
