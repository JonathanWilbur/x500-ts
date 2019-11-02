import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import DirectoryString from "../SelectedAttributeTypes/DirectoryString";
import UnboundedDirectoryString from "../SelectedAttributeTypes/UnboundedDirectoryString";

/**
 * `SaslCredentials ::= SEQUENCE {
 *   mechanism    [0]  DirectoryString{ub-saslMechanism},
 *   credentials  [1]  OCTET STRING OPTIONAL,
 *   saslAbort    [2]  BOOLEAN DEFAULT FALSE,
 *   ... }`
 */
export default
class SaslCredentials {
    constructor (
        readonly mechanism: DirectoryString,
        readonly credentials: Uint8Array | undefined,
        readonly saslAbort: boolean,
    ) {}

    public static fromElement (value: DERElement): SaslCredentials {
        let mechanism!: DirectoryString;
        let credentials: Uint8Array | undefined = undefined;
        let saslAbort: boolean = false;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "mechanism",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    mechanism = UnboundedDirectoryString.fromElement((el as DERElement).inner);
                },
            },
            {
                name: "credentials",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    credentials = el.octetString;
                },
            },
            {
                name: "saslAbort",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    saslAbort = el.boolean;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SaslCredentials(mechanism, credentials, saslAbort);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
                this.mechanism,
            ),
            this.credentials
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    1,
                    this.credentials,
                )
                : undefined,
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
                this.saslAbort,
            ),
        ]);
    }
}
