import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import AttributeType from "../InformationFramework/AttributeType";
import JoinContextType from "./JoinContextType";
import validateTag from "../../validateTag";

/**
 * `JoinAttPair ::= SEQUENCE {
 *   baseAtt      AttributeType,
 *   joinAtt      AttributeType,
 *   joinContext  SEQUENCE SIZE (1..MAX) OF JoinContextType OPTIONAL,
 *   ... }`
 */
export default
class JoinAttPair {
    constructor (
        readonly baseAtt: AttributeType,
        readonly joinAtt: AttributeType,
        readonly joinContext: JoinContextType[] | undefined,
    ) {}

    public static fromElement (value: DERElement): JoinAttPair {
        let baseAtt!: AttributeType;
        let joinAtt!: AttributeType;
        let joinContext: JoinContextType[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "baseAtt",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    baseAtt = el.objectIdentifier;
                },
            },
            {
                name: "joinAtt",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    joinAtt = el.objectIdentifier;
                },
            },
            {
                name: "joinContext",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    joinContext = el.sizeConstrainedSequenceOf(1)
                        .map((jc, i) => {
                            validateTag(jc as DERElement, `joinContext[${i}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.primitive ],
                                [ ASN1UniversalType.objectIdentifier ],
                            );
                            return jc.objectIdentifier;
                        });
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new JoinAttPair(baseAtt, joinAtt, joinContext);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.baseAtt,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.joinAtt,
            ),
            this.joinContext
                ? DERElement.fromSequence(this.joinContext.map((jc) => new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    jc,
                )))
                : undefined,
        ]);
    }
}
