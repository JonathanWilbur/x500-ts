import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
} from "asn1-ts";

/**
 * `PDSParameter ::= SET {
 *   printable-string  PrintableString(SIZE (1..ub-pds-parameter-length)) OPTIONAL,
 *   teletex-string    TeletexString(SIZE (1..ub-pds-parameter-length)) OPTIONAL }`
 */
export default
class PDSParameter {
    constructor (
        readonly printableString: string | undefined,
        readonly teletexString: Uint8Array | undefined,
    ) {}

    public static fromElement (value: DERElement): PDSParameter {
        let printableString: string | undefined = undefined;
        let teletexString: Uint8Array | undefined = undefined;
        value.set.forEach((el) => {
            if (el.tagClass !== ASN1TagClass.universal) {
                return;
            }
            switch (el.tagNumber) {
            case (ASN1UniversalType.printableString): {
                printableString = el.printableString;
                break;
            }
            case (ASN1UniversalType.teletexString): {
                teletexString = el.teletexString;
                break;
            }
            default: { break; }
            }
        });
        return new PDSParameter(printableString, teletexString);
    }

    public toElement (): DERElement {
        let printableStringElement: DERElement | undefined = undefined;
        if (this.printableString) {
            printableStringElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.printableString,
            );
            printableStringElement.printableString = this.printableString;
        }
        let teletexStringElement: DERElement | undefined = undefined;
        if (this.teletexString) {
            teletexStringElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.teletexString,
            );
            teletexStringElement.teletexString = this.teletexString;
        }

        return DERElement.fromSequence([
            printableStringElement,
            teletexStringElement,
        ]);
    }
}
