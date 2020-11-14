import { DistinguishedName } from "../InformationFramework";
import rdnSequenceToString from "./rdnSequenceToString";

export default function distinguishedNameToString(
    dn: DistinguishedName
): string {
    return rdnSequenceToString(dn);
}
