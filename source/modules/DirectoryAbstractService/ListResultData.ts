import { BERElement } from "asn1-ts";

/**
 * `ListResultData ::= CHOICE {
 *   listInfo                     SET {
 *     name                         Name OPTIONAL,
 *     subordinates            [1]  SET OF SEQUENCE {
 *       rdn                          RelativeDistinguishedName,
 *       aliasEntry              [0]  BOOLEAN DEFAULT FALSE,
 *       fromEntry               [1]  BOOLEAN DEFAULT TRUE,
 *       ... },
 *     partialOutcomeQualifier [2]  PartialOutcomeQualifier OPTIONAL,
 *     ...,
 *     ...,
 *     COMPONENTS OF                CommonResults
 *     },
 *   uncorrelatedListInfo    [0]  SET OF ListResult,
 *   ... }`
 */
type ListResultData = BERElement;
export default ListResultData;
