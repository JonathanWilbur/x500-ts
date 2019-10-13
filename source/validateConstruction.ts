import { ASN1Element } from "asn1-ts";
import ConstructedElementSpecification from "./ConstructedElementSpecification";
import * as errors from "./errors";

export default
function validateConstruction (element: ASN1Element, specification: ConstructedElementSpecification[]): void {
    const containedElements: ASN1Element[] = element.sequence;
    let i: number = 0;
    specification.forEach((spec: ConstructedElementSpecification): void => {
        if (
            (i >= containedElements.length)
            || (spec.tagClass && spec.tagClass !== containedElements[i].tagClass)
            || (spec.construction && spec.construction !== containedElements[i].construction)
            || (spec.tagNumber && spec.tagNumber !== containedElements[i].tagNumber)
        ) {
            if (!spec.optional) {
                throw new errors.X500Error(`Missing '${spec.name}'.`);
            }
            return;
        }
        if (spec.choice && spec.choice.length > 0) {
            let matchingChoiceFound: boolean = false;
            for (let j: number = 0; j < spec.choice.length; j++) {
                const choice = spec.choice[j];
                if (
                    (!(choice.tagClass) || (choice.tagClass === containedElements[i].tagClass))
                    && (!(choice.construction) || (choice.construction === containedElements[i].construction))
                    && (!(choice.tagNumber) || (choice.tagNumber === containedElements[i].tagNumber))
                ) {
                    if (choice.callback) {
                        choice.callback(containedElements[i]);
                    }
                    matchingChoiceFound = true;
                    break;
                }
            }
            if (!matchingChoiceFound && !spec.optional) {
                throw new errors.X500Error(`Missing '${spec.name}'.`);
            }
        }
        if (spec.callback) {
            spec.callback(containedElements[i]);
        }
        i++;
    });
}
