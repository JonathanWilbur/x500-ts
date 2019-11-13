/**
 * `UnformattedPostalAddress ::= SET {
 *   printable-address SEQUENCE SIZE (1..ub-pds-physical-address-lines) OF
 *     PrintableString (SIZE (1..ub-pds-parameter-length)) OPTIONAL,
 *   teletex-string    TeletexString(SIZE (1..ub-unformatted-address-length)) OPTIONAL }`
 */
import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
} from "asn1-ts";

export default
class UnformattedPostalAddress {
    constructor (
        readonly printableAddress: string[] | undefined,
        readonly teletexString: Uint8Array | undefined,
    ) {}

    public static fromElement (value: DERElement): UnformattedPostalAddress {
        let printableAddress: string[] | undefined = undefined;
        let teletexString: Uint8Array | undefined = undefined;
        value.set.forEach((el): void => {
            if (el.tagClass !== ASN1TagClass.universal) {
                return;
            }
            switch (el.tagNumber) {
            case (ASN1UniversalType.sequence): {
                printableAddress = el.sizeConstrainedSequenceOf(1)
                    .map((pa) => pa.printableString);
                break;
            }
            case (ASN1UniversalType.teletexString): {
                teletexString = el.teletexString;
                break;
            }
            default: { break; }
            }
        });
        return new UnformattedPostalAddress(
            printableAddress,
            teletexString,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.printableAddress
                ? DERElement.fromSequence(
                    this.printableAddress.map((pa) => {
                        const paElement = new DERElement(
                            ASN1TagClass.universal,
                            ASN1Construction.primitive,
                            ASN1UniversalType.printableString,
                        );
                        paElement.printableString = pa;
                        return paElement
                    }),
                )
                : undefined,
            this.teletexString
                ? ((): DERElement => {
                    const teletexStringElement = new DERElement(
                        ASN1TagClass.universal,
                        ASN1Construction.primitive,
                        ASN1UniversalType.teletexString,
                    );
                    teletexStringElement.teletexString = this.teletexString;
                    return teletexStringElement;
                })()
                : undefined,
        ]);
    }
}
