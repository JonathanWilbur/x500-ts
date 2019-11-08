import { ASN1Element } from "asn1-ts";

/**
 * `DISP-PDUs ::= CHOICE {
 *   basicROS  ROS{{DISP-InvokeIDSet}, {DISP-Invokable}, {DISP-Returnable}},
 *   bind      Bind{dSAShadowBind},
 *   unbind    Unbind{dSAShadowUnbind}
 * }`
 */
type DISP_PDUs = ASN1Element;
export default DISP_PDUs;
