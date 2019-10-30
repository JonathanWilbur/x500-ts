import {
    ASN1Construction,
    ASN1UniversalType,
    ASN1TagClass,
    DERElement,
    ASN1Element,
} from "asn1-ts";
import validateTag from "../../validateTag";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import Name from "../InformationFramework/Name";
import OperationProgress from "./OperationProgress";

/**
 * `TraceItem ::= SET {
 *   dsa                [0]  Name,
 *   targetObject       [1]  Name OPTIONAL,
 *   operationProgress  [2]  OperationProgress,
 *   ... }`
 */
export default
class TraceItem {
    constructor (
        readonly dsa: Name,
        readonly targetObject: Name | undefined,
        readonly operationProgress: OperationProgress,
    ) {}

    public static fromElement (value: DERElement): TraceItem {
        let dsa!: Name;
        let targetObject: Name | undefined = undefined;
        let operationProgress!: OperationProgress;
        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (element.tagNumber) {
            case (0): {
                dsa = element.sizeConstrainedSequenceOf(1)
                    .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                        validateTag(rdnElement as DERElement, `dsa[${rdnIndex}]`,
                            [ ASN1TagClass.universal ],
                            [ ASN1Construction.constructed ],
                            [ ASN1UniversalType.set ],
                        );
                        return rdnElement.sizeConstrainedSetOf(1)
                            .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                validateTag(atavElement as DERElement, `dsa[${rdnIndex}][${atavIndex}]`,
                                    [ ASN1TagClass.universal ],
                                    [ ASN1Construction.constructed ],
                                    [ ASN1UniversalType.sequence ],
                                );
                                return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                            });
                    });
                break;
            }
            case (1): {
                targetObject = element.sizeConstrainedSequenceOf(1)
                    .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                        validateTag(rdnElement as DERElement, `targetObject[${rdnIndex}]`,
                            [ ASN1TagClass.universal ],
                            [ ASN1Construction.constructed ],
                            [ ASN1UniversalType.set ],
                        );
                        return rdnElement.sizeConstrainedSetOf(1)
                            .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                validateTag(atavElement as DERElement, `targetObject[${rdnIndex}][${atavIndex}]`,
                                    [ ASN1TagClass.universal ],
                                    [ ASN1Construction.constructed ],
                                    [ ASN1UniversalType.sequence ],
                                );
                                return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                            });
                    });
                break;
            }
            case (2): {
                operationProgress = OperationProgress.fromElement(element);
                break;
            }
            default: { break; }
            }
        });

        return new TraceItem(
            dsa,
            targetObject,
            operationProgress,
        );
    }

    public toElement (): DERElement {
        const dsaElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            0,
        );
        dsaElement.sequence = this.dsa.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));

        let targetObjectElement: DERElement | undefined = undefined;
        if (this.targetObject) {
            targetObjectElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            targetObjectElement.sequence = this.targetObject
                .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));
        }

        const operationProgressElement: DERElement = this.operationProgress.toElement();
        operationProgressElement.tagClass = ASN1TagClass.context;
        operationProgressElement.tagNumber = 2;

        return DERElement.fromSet([
            dsaElement,
            targetObjectElement,
            operationProgressElement,
        ]);
    }
}
