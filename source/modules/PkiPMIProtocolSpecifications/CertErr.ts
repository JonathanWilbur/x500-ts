import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import Notifications from "./Notifications";
import Attribute from "../InformationFramework/Attribute";

/**
 * `CertErr ::= SEQUENCE {
 *   notOK  CHOICE {
 *     wrErr   [0]  PkiWaError,
 *     avmpErr [1]  AVMP-error,
 *     ... },
 *   note   Notifications OPTIONAL,
 *   ... }`
 */
export default
class CertErr {
    constructor (
        readonly notOK: ASN1Element,
        readonly note: Notifications | undefined,
    ) {}

    public static fromElement (value: DERElement): CertErr {
        let notOK!: ASN1Element;
        let note: Notifications | undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "notOK",
                optional: false,
                callback: (el: ASN1Element): void => {
                    notOK = el;
                },
            },
            {
                name: "note",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    note = el.sizeConstrainedSequenceOf(1)
                        .map((attr) => Attribute.fromElement(attr));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new CertErr(notOK, note);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.notOK,
            this.note
                ? DERElement.fromSequence(this.note.map((attr) => attr.toElement()))
                : undefined,
        ]);
    }
}
