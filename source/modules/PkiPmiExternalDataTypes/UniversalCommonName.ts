import UniversalOrBMPString from "./UniversalOrBMPString";

/**
 * `UniversalCommonName ::= UniversalOrBMPString{ub-common-name-length}`
 */
type UniversalCommonName = UniversalOrBMPString;
export default UniversalCommonName;
