import { RelativeDistinguishedName } from "../modules/InformationFramework";
import attributeTypeAndValueToString from "./attributeTypeAndValueToString";

export default function relativeDistinguishedNameToString(
    rdn: RelativeDistinguishedName
): string {
    return rdn
        .map(attributeTypeAndValueToString)
        .map((str) => str.replace(/\\/g, "\\\\").replace(/\+/g, "\\+"))
        .join("+");
}
