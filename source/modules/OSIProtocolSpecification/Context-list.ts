import ContextListItem from "./ContextListItem";

/**
 * `Context-list ::= SEQUENCE SIZE (2) OF SEQUENCE {
 *   presentation-context-identifier  Presentation-context-identifier,
 *   abstract-syntax-name             Abstract-syntax-name,
 *   transfer-syntax-name-list        SEQUENCE OF Transfer-syntax-name }`
 */
type Context_list = [ ContextListItem, ContextListItem ];
export default Context_list;
