import type { Name } from "../modules/InformationFramework/Name.ta";
import compareRDNSequence from "./compareRDNSequence";

export default function compare(a: Name, b: Name): boolean {
    return compareRDNSequence(a.rdnSequence, b.rdnSequence);
}
