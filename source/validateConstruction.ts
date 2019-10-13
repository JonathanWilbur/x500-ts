import { ASN1Element } from "asn1-ts";
import ConstructedElementSpecification from "./ConstructedElementSpecification";
import * as errors from "./errors";

// TODO: Make this handle extensibility in the middle of the sequence..
export default
function validateConstruction (elements: ASN1Element[], specification: ConstructedElementSpecification[]): void {
    // const containedElements: ASN1Element[] = element.sequence;
    let i: number = 0;
    specification.forEach((spec: ConstructedElementSpecification): void => {
        if (
            (i >= elements.length)
            || (spec.tagClass && spec.tagClass !== elements[i].tagClass)
            || (spec.construction && spec.construction !== elements[i].construction)
            || (spec.tagNumber && spec.tagNumber !== elements[i].tagNumber)
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
                    (!(choice.tagClass) || (choice.tagClass === elements[i].tagClass))
                    && (!(choice.construction) || (choice.construction === elements[i].construction))
                    && (!(choice.tagNumber) || (choice.tagNumber === elements[i].tagNumber))
                ) {
                    if (choice.callback) {
                        choice.callback(elements[i]);
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
            spec.callback(elements[i]);
        }
        i++;
    });
}
