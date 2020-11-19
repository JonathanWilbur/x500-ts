import type { DistinguishedName } from "../modules/InformationFramework/DistinguishedName.ta";
import rdnSequenceToString from "./rdnSequenceToString";

export default function distinguishedNameToString(
    dn: DistinguishedName
): string {
    return rdnSequenceToString(dn);
}
