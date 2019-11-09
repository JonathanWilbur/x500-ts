/**
 * `UniversalOrBMPString{INTEGER:ub-string-length} ::= SET {
 *   character-encoding     CHOICE {
 *     two-octets             BMPString(SIZE (1..ub-string-length)),
 *     four-octets            UniversalString(SIZE (1..ub-string-length))},
 *   iso-639-language-code  PrintableString(SIZE (2 | 5)) OPTIONAL }`
 */
