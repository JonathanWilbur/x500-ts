import { BERElement } from "asn1-ts";

/**
 * `SearchResultData ::= CHOICE {
 *   searchInfo                    SET {
 *     name                          Name OPTIONAL,
 *     entries                  [0]  SET OF EntryInformation,
 *     partialOutcomeQualifier  [2]  PartialOutcomeQualifier OPTIONAL,
 *     altMatching              [3]  BOOLEAN DEFAULT FALSE,
 *     ...,
 *     ...,
 *     COMPONENTS OF                 CommonResults
 *     },
 *   uncorrelatedSearchInfo   [0]  SET OF SearchResult,
 *   ... }`
 */
type SearchResultData = BERElement;
export default SearchResultData;
