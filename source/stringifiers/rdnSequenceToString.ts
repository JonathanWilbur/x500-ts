import { RDNSequence } from "../modules/InformationFramework";
import relativeDistinguishedNameToString from "./relativeDistinguishedNameToString";

export default function rdnSequenceToString(rdns: RDNSequence): string {
    return rdns
        .map(relativeDistinguishedNameToString)
        .map((rdn) => rdn.replace(/\//g, "\\/"))
        .join("/");
}
