import UnboundedDirectoryString from "./UnboundedDirectoryString";

/**
 * `DirectoryString{INTEGER:maxSize} ::= CHOICE {
 *   teletexString    TeletexString(SIZE (1..maxSize,...)),
 *   printableString  PrintableString(SIZE (1..maxSize,...)),
 *   bmpString        BMPString(SIZE (1..maxSize,...)),
 *   universalString  UniversalString(SIZE (1..maxSize,...)),
 *   uTF8String       UTF8String(SIZE (1..maxSize,...)) }`
 */
type DirectoryString = UnboundedDirectoryString;
export default DirectoryString;
