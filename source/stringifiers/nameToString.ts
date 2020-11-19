import type { Name } from "../modules/InformationFramework/Name.ta";
import rdnSequenceToString from "./rdnSequenceToString";

export default function nameToString(name: Name): string {
    return rdnSequenceToString(name.rdnSequence);
}
