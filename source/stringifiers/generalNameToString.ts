import { GeneralName } from "../CertificateExtensions";
import nameToString from "./nameToString";

// GeneralName ::= CHOICE {
//     otherName                  [0]  INSTANCE OF OTHER-NAME,
//     rfc822Name                 [1]  IA5String,
//     dNSName                    [2]  IA5String,
//     x400Address                [3]  ORAddress,
//     directoryName              [4]  Name,
//     ediPartyName               [5]  EDIPartyName,
//     uniformResourceIdentifier  [6]  IA5String,
//     iPAddress                  [7]  OCTET STRING,
//     registeredID               [8]  OBJECT IDENTIFIER,
//     ... }

export default
function generalNameToString (gn: GeneralName): string {
    const key = Object.keys(gn)[0];
    if ("otherName" in gn) {
        return `${key}:[Cannot display other name]`;
    } else if ("rfc822Name" in gn) {
        return `${key}:${gn.rfc822Name}`;
    } else if ("dNSName" in gn) {
        return `${key}:${gn.dNSName}}`;
    } else if ("x400Address" in gn) {
        return `${key}:[Cannot display X.400 address]`;
    } else if ("directoryName" in gn) {
        return `${key}:${nameToString(gn.directoryName)}`;
    } else if ("ediPartyName" in gn) {
        return `${key}:[Cannot display EDI Party Name]`;
    } else if ("uniformResourceIdentifier" in gn) {
        return `${key}:${gn.uniformResourceIdentifier}`;
    } else if ("iPAddress" in gn) {
        return `${key}:${Array.from(gn.iPAddress).join(".")}`;
    } else if ("registeredID" in gn) {
        return `${key}:${gn.registeredID.toString()}`;
    } else {
        return "[Unrecognized GeneralName alternative]";
    }
}
