import type { DistinguishedName } from "../modules/InformationFramework/DistinguishedName.ta";
import compareRDNSequence from "./compareRDNSequence";

export default function compare(
    a: DistinguishedName,
    b: DistinguishedName
): boolean {
    return compareRDNSequence(a, b);
}
