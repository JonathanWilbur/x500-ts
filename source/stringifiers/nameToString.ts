import { Name } from "../modules/InformationFramework";
import rdnSequenceToString from "./rdnSequenceToString";

export default function nameToString(name: Name): string {
    return rdnSequenceToString(name.rdnSequence);
}
