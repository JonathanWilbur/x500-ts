import {
    AttributeTypeAndValue,
    RelativeDistinguishedName,
} from "../modules/InformationFramework";
import compareAttributeTypeAndValue from "./compareAttributeTypeAndValue";

export default function compare(
    a: RelativeDistinguishedName,
    b: RelativeDistinguishedName
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    const atavs: Record<string, AttributeTypeAndValue> = {};
    a.forEach((atav) => {
        atavs[atav.type_.toString()] = atav;
    });
    for (let i = 0; i < a.length; i++) {
        const atav_b = b[i];
        const atav_a: AttributeTypeAndValue | undefined =
            atavs[atav_b.type_.toString()];
        if (atav_a === undefined) {
            return false;
        }
        if (!compareAttributeTypeAndValue(atav_a, atav_b)) {
            return false;
        }
    }
    return true;
}
