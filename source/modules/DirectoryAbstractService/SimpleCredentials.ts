import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import DistinguishedName from "../InformationFramework/DistinguishedName";
import validateTag from "../../validateTag";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";

/**
 * `SimpleCredentials ::= SEQUENCE {
 *   name      [0]  DistinguishedName,
 *   validity  [1]  SET {
 *     time1     [0]  CHOICE {
 *       utc            UTCTime,
 *       gt             GeneralizedTime} OPTIONAL,
 *     time2     [1]  CHOICE {
 *       utc            UTCTime,
 *       gt             GeneralizedTime} OPTIONAL,
 *     random1   [2]  BIT STRING OPTIONAL,
 *     random2   [3]  BIT STRING OPTIONAL} OPTIONAL,
 *   password  [2]  CHOICE {
 *     unprotected    OCTET STRING,
 *     protected      HASH{OCTET STRING},
 *     ...,
 *     userPwd   [0]  UserPwd } OPTIONAL }`
 */
export default
class SaslCredentials {
    constructor (
        readonly name: DistinguishedName,
        readonly validity: {
            time1: Date | undefined;
            time2: Date | undefined;
            random1: boolean[] | undefined;
            random2: boolean[] | undefined;
        } | undefined,
        readonly password: ASN1Element | undefined,
    ) {}

    public static fromElement (value: DERElement): SaslCredentials {
        let name!: DistinguishedName;
        let validity: {
            time1: Date | undefined;
            time2: Date | undefined;
            random1: boolean[] | undefined;
            random2: boolean[] | undefined;
        } | undefined = undefined;
        let password: ASN1Element | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "name",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    name = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `dsaName[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `dsaName[${rdnIndex}][${atavIndex}]`,
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
                name: "validity",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    let time1: Date | undefined = undefined;
                    let time2: Date | undefined = undefined;
                    let random1: boolean[] | undefined = undefined;
                    let random2: boolean[] | undefined = undefined;
                    el.set.forEach((el2) => {
                        if (el2.tagClass !== ASN1TagClass.context) {
                            return;
                        }
                        switch (el2.tagNumber) {
                        case (0): {
                            const timeChoice: DERElement = (el2 as DERElement).inner;
                            validateTag(timeChoice, "time1",
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.primitive, ASN1Construction.constructed ],
                                [ ASN1UniversalType.utcTime, ASN1UniversalType.generalizedTime ],
                            );
                            if (timeChoice.tagNumber === ASN1UniversalType.utcTime) {
                                time1 = el2.utcTime;
                            } else {
                                time1 = el2.generalizedTime;
                            }
                            break;
                        }
                        case (1): {
                            const timeChoice: DERElement = (el2 as DERElement).inner;
                            validateTag(timeChoice, "time2",
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.primitive, ASN1Construction.constructed ],
                                [ ASN1UniversalType.utcTime, ASN1UniversalType.generalizedTime ],
                            );
                            if (timeChoice.tagNumber === ASN1UniversalType.utcTime) {
                                time2 = timeChoice.utcTime;
                            } else {
                                time2 = timeChoice.generalizedTime;
                            }
                            break;
                        }
                        case (2): {
                            random1 = el2.bitString;
                            break;
                        }
                        case (3): {
                            random2 = el2.bitString;
                            break;
                        }
                        default: { break; }
                        }
                    });
                    validity = {
                        time1,
                        time2,
                        random1,
                        random2,
                    };
                },
            },
            {
                name: "password",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    password = (el as DERElement).inner;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SaslCredentials(name, validity, password);
    }

    public toElement (): DERElement {
        const nameElement: DERElement = DERElement.fromSequence(
            this.name.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
        );
        nameElement.tagClass = ASN1TagClass.context;
        nameElement.tagNumber = 0;

        let validityElement: DERElement | undefined = undefined;
        if (this.validity) {
            let random1Element: DERElement | undefined = undefined;
            if (this.validity.random1) {
                random1Element = new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    2,
                );
                random1Element.bitString = this.validity.random1;
            }

            let random2Element: DERElement | undefined = undefined;
            if (this.validity.random2) {
                random2Element = new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    3,
                );
                random2Element.bitString = this.validity.random2;
            }

            validityElement = DERElement.fromSet([
                this.validity.time1
                    ? new DERElement(
                        ASN1TagClass.context,
                        ASN1Construction.constructed,
                        0,
                        new DERElement(
                            ASN1TagClass.universal,
                            ASN1Construction.primitive,
                            ASN1UniversalType.generalizedTime,
                            this.validity.time1,
                        ),
                    )
                    : undefined,
                this.validity.time2
                    ? new DERElement(
                        ASN1TagClass.context,
                        ASN1Construction.constructed,
                        1,
                        new DERElement(
                            ASN1TagClass.universal,
                            ASN1Construction.primitive,
                            ASN1UniversalType.generalizedTime,
                            this.validity.time2,
                        ),
                    )
                    : undefined,
                random1Element,
                random2Element,
            ]);
            validityElement.tagClass = ASN1TagClass.context;
            validityElement.tagNumber = 1;
        }
        return DERElement.fromSequence([
            nameElement,
            validityElement,
            this.password
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.constructed,
                    2,
                    this.password,
                )
                : undefined,
        ]);
    }
}
