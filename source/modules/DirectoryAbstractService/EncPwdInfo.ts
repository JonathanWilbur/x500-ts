import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import AlgorithmIdentifier from "../AuthenticationFramework/AlgorithmIdentifier";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";

/**
 * `EncPwdInfo ::= SEQUENCE {
 *   algorithms     [0]  SEQUENCE OF AlgorithmIdentifier
 *                         {{SupportedAlgorithms}} OPTIONAL,
 *   pwdQualityRule [1]  SEQUENCE OF AttributeTypeAndValue OPTIONAL,
 *   ... }`
 */
export default
class EncPwdInfo {
    constructor (
        readonly algorithms: AlgorithmIdentifier[] | undefined,
        readonly pwdQualityRule: AttributeTypeAndValue[] | undefined,
    ) {}

    public static fromElement (value: DERElement): EncPwdInfo {
        let algorithms: AlgorithmIdentifier[] | undefined = undefined;
        let pwdQualityRule: AttributeTypeAndValue[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "algorithms",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    algorithms = el.sequence.map((ai) => AlgorithmIdentifier.fromElement(ai as DERElement));
                },
            },
            {
                name: "pwdQualityRule",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    pwdQualityRule = el.sequence.map((pqr) => AttributeTypeAndValue.fromElement(pqr as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new EncPwdInfo(algorithms, pwdQualityRule);
    }

    public toElement (): DERElement {
        let algorithmsElement: DERElement | undefined = undefined;
        if (this.algorithms) {
            algorithmsElement = DERElement.fromSequence(this.algorithms.map((x) => x.toElement()));
            algorithmsElement.tagClass = ASN1TagClass.context;
            algorithmsElement.tagNumber = 0;
        }
        let pwdQualityRuleElement: DERElement | undefined = undefined;
        if (this.pwdQualityRule) {
            pwdQualityRuleElement = DERElement.fromSequence(this.pwdQualityRule.map((x) => x.toElement()));
            pwdQualityRuleElement.tagClass = ASN1TagClass.context;
            pwdQualityRuleElement.tagNumber = 1;
        }
        return DERElement.fromSequence([
            algorithmsElement,
            pwdQualityRuleElement,
        ]);
    }
}
