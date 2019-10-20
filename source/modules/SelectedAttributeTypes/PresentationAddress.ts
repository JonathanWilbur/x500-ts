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
 * `PresentationAddress ::= SEQUENCE {
 *   pSelector   [0]  OCTET STRING OPTIONAL,
 *   sSelector   [1]  OCTET STRING OPTIONAL,
 *   tSelector   [2]  OCTET STRING OPTIONAL,
 *   nAddresses  [3]  SET SIZE (1..MAX) OF OCTET STRING,
 *   ... }`
 */
export default
class PresentationAddress {
    constructor (
        readonly pSelector: Uint8Array | undefined,
        readonly sSelector: Uint8Array | undefined,
        readonly tSelector: Uint8Array | undefined,
        readonly nAddresses: Uint8Array[],
    ) {}

    public static fromElement (value: DERElement): PresentationAddress {
        let pSelector: Uint8Array | undefined = undefined;
        let sSelector: Uint8Array | undefined = undefined;
        let tSelector: Uint8Array | undefined = undefined;
        let nAddresses!: Uint8Array[];
        const specification: ConstructedElementSpecification[] = [
            {
                name: "pSelector",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    pSelector = (el as DERElement).octetString;
                },
            },
            {
                name: "sSelector",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    sSelector = (el as DERElement).octetString;
                },
            },
            {
                name: "tSelector",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    tSelector = (el as DERElement).octetString;
                },
            },
            {
                name: "maxCount",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    nAddresses = (el.sizeConstrainedSetOf(1) as DERElement[])
                        .map((nAddress) => nAddress.octetString);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new PresentationAddress(
            pSelector,
            sSelector,
            tSelector,
            nAddresses,
        );
    }

    public toElement (): DERElement {
        const nAddressesElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            3,
        );
        nAddressesElement.set = this.nAddresses.map((nAddress) => new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.octetString,
            nAddress,
        ));
        return DERElement.fromSequence([
            this.pSelector
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    0,
                    this.pSelector,
                )
                : undefined,
            this.sSelector
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    1,
                    this.sSelector,
                )
                : undefined,
            this.tSelector
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    2,
                    this.tSelector,
                )
                : undefined,
            nAddressesElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): PresentationAddress {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return PresentationAddress.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
