/**
 * `DisplayText ::= CHOICE {
 *   visibleString  VisibleString(SIZE (1..200)),
 *   bmpString      BMPString(SIZE (1..200)),
 *   utf8String     UTF8String(SIZE (1..200)) }`
 */
type DisplayText = string;
export default DisplayText;
