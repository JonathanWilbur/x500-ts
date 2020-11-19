import type { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta";

export default function compare(
    a: AttributeTypeAndValue,
    b: AttributeTypeAndValue,
): boolean {
    return (
        a.type_.toString() === b.type_.toString() &&
        a.value.toBytes().toString() === b.value.toBytes().toString()
    );
}
