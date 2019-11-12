import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";

/**
 * `PwdHistory{ATTRIBUTE:passwordAttribute} ::= SEQUENCE {
 *   time       GeneralizedTime,
 *   password   passwordAttribute.&Type,
 *   ...}`
 */
export default
class PwdHistory {
    constructor (
        readonly time: Date,
        readonly password: DERElement,
    ) {}

    public static fromElement (value: ASN1Element): PwdHistory {
        let time!: Date;
        let password!: DERElement;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "time",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.generalizedTime,
                callback: (el: ASN1Element): void => {
                    time = (el as DERElement).generalizedTime;
                },
            },
            {
                name: "password",
                optional: false,
                callback: (el: ASN1Element): void => {
                    password = (el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new PwdHistory(time, password);
    }

    public toElement (): DERElement {
        const timeElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.generalizedTime,
        );
        timeElement.generalizedTime = this.time;
        return DERElement.fromSequence([
            timeElement,
            this.password,
        ]);
    }

    public static fromBytes (value: Uint8Array): PwdHistory {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return PwdHistory.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
