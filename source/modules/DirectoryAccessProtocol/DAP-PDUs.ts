import { ASN1Element } from "asn1-ts";

/**
 * `DAP-PDUs ::= CHOICE {
 *   basicRos  ROS{{DAP-InvokeIDSet}, {DAP-Invokable}, {DAP-Returnable}},
 *   bind      Bind{directoryBind},
 *   unbind    Unbind{directoryUnbind}
 * }`
 */
type DAP_PDUs = ASN1Element;
export default DAP_PDUs;
