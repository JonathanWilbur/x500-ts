import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import AlgorithmIdentifier from "../AuthenticationFramework/AlgorithmIdentifier";
import DistinguishedName from "../InformationFramework/DistinguishedName";
import validateTag from "../../validateTag";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";

/**
 * `TokenContent ::= SEQUENCE {
 *   algorithm  [0]  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   name       [1]  DistinguishedName,
 *   time       [2]  Time,
 *   random     [3]  BIT STRING,
 *   response   [4]  BIT STRING OPTIONAL,
 *   ... }`
 */
export default
class TokenContent {
    constructor (
        readonly algorithm: AlgorithmIdentifier,
        readonly name: DistinguishedName,
        readonly time: Date,
        readonly random: boolean[],
        readonly response: boolean[] | undefined,
    ) {}

    public static fromElement (value: DERElement): TokenContent {
        let algorithm!: AlgorithmIdentifier;
        let name!: DistinguishedName;
        let time!: Date;
        let random!: boolean[];
        let response: boolean[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "algorithm",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    algorithm = AlgorithmIdentifier.fromElement(el as DERElement);
                },
            },
            {
                name: "name",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    name = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `name[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `name[${rdnIndex}][${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        });
                },
            },
            {
                name: "time",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    const innerElement = (el as DERElement).inner;
                    validateTag(innerElement, "time",
                        [ ASN1TagClass.universal ],
                        [ ASN1Construction.primitive, ASN1Construction.constructed ],
                        [ ASN1UniversalType.utcTime, ASN1UniversalType.generalizedTime ],
                    );
                    if (innerElement.tagNumber === ASN1UniversalType.utcTime) {
                        time = innerElement.utcTime;
                    } else {
                        time = innerElement.generalizedTime;
                    }
                },
            },
            {
                name: "random",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    random = el.bitString;
                },
            },
            {
                name: "response",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    response = el.bitString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new TokenContent(
            algorithm,
            name,
            time,
            random,
            response,
        );
    }

    public toElement (): DERElement {
        const algorithmElement: DERElement = this.algorithm.toElement();
        algorithmElement.tagClass = ASN1TagClass.context;
        algorithmElement.tagNumber = 0;

        const nameElement: DERElement = DERElement.fromSequence(
            this.name.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
        );
        nameElement.tagClass = ASN1TagClass.context;
        nameElement.tagNumber = 1;

        const randomElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            3,
        );
        randomElement.bitString = this.random;

        let responseElement: DERElement | undefined = undefined;
        if (this.response) {
            responseElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                4,
            );
            responseElement.bitString = this.response;
        }

        return DERElement.fromSequence([
            algorithmElement,
            nameElement,
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
                this.time,
            ),
            randomElement,
            responseElement,
        ]);
    }
}
