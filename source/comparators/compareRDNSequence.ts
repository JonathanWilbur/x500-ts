import { RDNSequence } from "../InformationFramework";
import compareRelativeDistinguishedName from "./compareRelativeDistinguishedName";

export default
function compare (a: RDNSequence, b: RDNSequence): boolean {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!(compareRelativeDistinguishedName(a[i], b[i]))) {
            return false;
        }
    }
    return true;
}
