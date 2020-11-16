import { DistinguishedName } from "../modules/InformationFramework";
import rdnSequenceToString from "./rdnSequenceToString";

export default function distinguishedNameToString(
    dn: DistinguishedName
): string {
    return rdnSequenceToString(dn);
}
