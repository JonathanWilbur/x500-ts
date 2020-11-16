import * as selat from "../modules/SelectedAttributeTypes";

const ret: Record<string, string> = {};
// Recognized attributes sourced from https://tools.ietf.org/html/rfc5280#section-4.1.2.4.
ret[selat.id_at_countryName.toString()] = "c";
ret[selat.id_at_organizationName.toString()] = "o";
ret[selat.id_at_organizationalUnitName.toString()] = "ou";
ret[selat.id_at_dnQualifier.toString()] = "dnQualifier";
ret[selat.id_at_stateOrProvinceName.toString()] = "st";
ret[selat.id_at_commonName.toString()] = "cn";
ret[selat.id_at_serialNumber.toString()] = "serialNumber";
ret[selat.id_at_localityName.toString()] = "l";
ret[selat.id_at_title.toString()] = "title";
ret[selat.id_at_surname.toString()] = "sn";
ret[selat.id_at_givenName.toString()] = "gn";
ret[selat.id_at_initials.toString()] = "initials";
ret[selat.id_at_pseudonym.toString()] = "pseudonym";
ret[selat.id_at_generationQualifier.toString()] = "generationQualifier";
export default ret;
