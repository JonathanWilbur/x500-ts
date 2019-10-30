import MasterOrShadowAccessPoint from "./MasterOrShadowAccessPoint";

/**
 * `MasterAndShadowAccessPoints ::= SET SIZE (1..MAX) OF MasterOrShadowAccessPoint`
 */
type MasterOrShadowAccessPoints = MasterOrShadowAccessPoint[];
export default MasterOrShadowAccessPoints;
