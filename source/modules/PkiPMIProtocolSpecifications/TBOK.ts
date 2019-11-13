import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";

/**
 * `TBOK ::= SEQUENCE {
 *   levelOfAssurance  [0]  INTEGER (0..100),
 *   confidenceLevel   [1]  INTEGER (0..100),
 *   validationTime    [2]  UTCTime,
 *   info                   UTF8String  OPTIONAL,
 *   ... }`
 */
export default
class TBOK {
    constructor (
        readonly levelOfAssurance: number,
        readonly confidenceLevel: number,
        readonly validationTime: Date,
        readonly info: string | undefined,
    ) {}

    public static fromElement (value: DERElement): TBOK {
        let levelOfAssurance!: number;
        let confidenceLevel!: number;
        let validationTime!: Date;
        let info: string | undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "levelOfAssurance",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    levelOfAssurance = el.integer;
                },
            },
            {
                name: "confidenceLevel",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    confidenceLevel = el.integer;
                },
            },
            {
                name: "validationTime",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    validationTime = el.utcTime;
                },
            },
            {
                name: "info",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.utf8String,
                callback: (el: ASN1Element): void => {
                    info = el.utf8String;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new TBOK(
            levelOfAssurance,
            confidenceLevel,
            validationTime,
            info,
        );
    }

    public toElement (): DERElement {
        const validationTimeElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            2,
        );
        validationTimeElement.utcTime = this.validationTime;
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
                this.levelOfAssurance,
            ),
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                1,
                this.confidenceLevel,
            ),
            validationTimeElement,
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.utf8String,
                this.info,
            ),
        ]);
    }
}
