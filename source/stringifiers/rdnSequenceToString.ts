import { RDNSequence } from "../InformationFramework";
import relativeDistinguishedNameToString from "./relativeDistinguishedNameToString";

export default function rdnSequenceToString(rdns: RDNSequence): string {
    return rdns
        .map(relativeDistinguishedNameToString)
        .map((rdn) => rdn.replace(/\//g, "\\/"))
        .join("/");
}
