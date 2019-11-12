import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
} from "asn1-ts";
import LimitProblem from "./LimitProblem";
import ContinuationReference from "../DistributedOperations/ContinuationReference";
import Filter from "./Filter";
import Attribute from "../InformationFramework/Attribute";

/**
 * `PartialOutcomeQualifier ::= SET {
 *   limitProblem                  [0]  LimitProblem OPTIONAL,
 *   unexplored                    [1]  SET SIZE (1..MAX) OF ContinuationReference OPTIONAL,
 *   unavailableCriticalExtensions [2]  BOOLEAN DEFAULT FALSE,
 *   unknownErrors                 [3]  SET SIZE (1..MAX) OF ABSTRACT-SYNTAX.&Type OPTIONAL,
 *   queryReference                [4]  OCTET STRING OPTIONAL,
 *   overspecFilter                [5]  Filter OPTIONAL,
 *   notification                  [6]  SEQUENCE SIZE (1..MAX) OF
 *                                        Attribute{{SupportedAttributes}} OPTIONAL,
 *   entryCount                         CHOICE {
 *     bestEstimate                  [7]  INTEGER,
 *     lowEstimate                   [8]  INTEGER,
 *     exact                         [9]  INTEGER,
 *     ...} OPTIONAL
 *   --                            [10] Not to be used -- }`
 */
export default
class PartialOutcomeQualifier {
    constructor (
        readonly limitProblem: LimitProblem | undefined,
        readonly unexplored: ContinuationReference[] | undefined,
        readonly unavailableCriticalExtensions: boolean,
        readonly unknownErrors: ASN1Element[] | undefined,
        readonly queryReference: Uint8Array | undefined,
        readonly overspecFilter: Filter | undefined,
        readonly notification: Attribute[] | undefined,
        readonly entryCount: ASN1Element | undefined,
    ) {}

    public static fromElement (value: ASN1Element): PartialOutcomeQualifier {
        let limitProblem: LimitProblem | undefined = undefined;
        let unexplored: ContinuationReference[] | undefined = undefined;
        let unavailableCriticalExtensions: boolean = false;
        let unknownErrors: ASN1Element[] | undefined = undefined;
        let queryReference: Uint8Array | undefined = undefined;
        let overspecFilter: Filter | undefined = undefined;
        let notification: Attribute[] | undefined = undefined;
        let entryCount: ASN1Element | undefined = undefined;
        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (element.tagNumber) {
            case (0): {
                limitProblem = element.integer;
                break;
            }
            case (1): {
                unexplored = element.sizeConstrainedSetOf(1)
                    .map((u) => ContinuationReference.fromElement(u as DERElement));
                break;
            }
            case (2): {
                unavailableCriticalExtensions = element.boolean;
                break;
            }
            case (3): {
                unknownErrors = element.sizeConstrainedSetOf(1);
                break;
            }
            case (4): {
                queryReference = element.octetString;
                break;
            }
            case (5): {
                overspecFilter = (element as DERElement).inner;
                break;
            }
            case (6): {
                notification = element.sizeConstrainedSequenceOf(1)
                    .map((attr) => Attribute.fromElement(attr as DERElement));
                break;
            }
            case (7):
            case (8):
            case (9): {
                entryCount = element;
                break;
            }
            default: { break; }
            }
        });

        return new PartialOutcomeQualifier(
            limitProblem,
            unexplored,
            unavailableCriticalExtensions,
            unknownErrors,
            queryReference,
            overspecFilter,
            notification,
            entryCount,
        );
    }

    public toElement (): DERElement {
        let limitProblemElement: DERElement | undefined = undefined;
        if (this.limitProblem) {
            limitProblemElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
                this.limitProblem,
            );
        }

        let unexploredElement: DERElement | undefined = undefined;
        if (this.unexplored) {
            unexploredElement = DERElement.fromSet(this.unexplored.map((u) => u.toElement()));
            unexploredElement.tagClass = ASN1TagClass.context;
            unexploredElement.tagNumber = 1;
        }

        let unavailableCriticalExtensionsElement: DERElement | undefined = undefined;
        if (this.unavailableCriticalExtensions) {
            unavailableCriticalExtensionsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
                this.unavailableCriticalExtensions,
            );
        }

        let unknownErrorsElement: DERElement | undefined = undefined;
        if (this.unknownErrors) {
            unknownErrorsElement = DERElement.fromSet(this.unknownErrors as DERElement[]);
            unknownErrorsElement.tagClass = ASN1TagClass.context;
            unknownErrorsElement.tagNumber = 3;
        }

        let queryReferenceElement: DERElement | undefined = undefined;
        if (this.queryReference) {
            queryReferenceElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                4,
                this.queryReference,
            );
        }

        let overspecFilterElement: DERElement | undefined = undefined;
        if (this.overspecFilter) {
            overspecFilterElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                5,
                this.overspecFilter,
            );
        }

        let notificationElement: DERElement | undefined = undefined;
        if (this.notification) {
            notificationElement = DERElement.fromSequence(this.notification.map((attr) => attr.toElement()));
            notificationElement.tagClass = ASN1TagClass.context;
            notificationElement.tagNumber = 6;
        }

        return DERElement.fromSet([
            limitProblemElement,
            unexploredElement,
            unavailableCriticalExtensionsElement,
            unknownErrorsElement,
            queryReferenceElement,
            overspecFilterElement,
            notificationElement,
            this.entryCount as (DERElement | undefined),
        ]);
    }
}
