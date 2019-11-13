import Attribute from "../InformationFramework/Attribute";

/**
 * `Notifications ::= SEQUENCE SIZE (1..MAX) OF Attribute {{SupportedAttributes}}`
 */
type Notifications = Attribute[];
export default Notifications;
