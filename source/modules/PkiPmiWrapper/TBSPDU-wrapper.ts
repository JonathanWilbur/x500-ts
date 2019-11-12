import {
    DERElement,
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    validateConstruction,
    ConstructedElementSpecification,
    ASN1Element,
} from "asn1-ts";
import Version from "../AuthenticationFramework/Version";
import AlgorithmIdentifier from "../AuthenticationFramework/AlgorithmIdentifier";
import PkiPath from "../AuthenticationFramework/PkiPath";
import SignedAttributes from "./SignedAttributes";
import Certificate from "../AuthenticationFramework/Certificate";
import Attribute from "../InformationFramework/Attribute";

/**
 * `TBSPDU-wrapper ::= SEQUENCE  {
 *   version               Version DEFAULT v1,
 *   signatureAlgorithm    AlgorithmIdentifier {{SupportedSignatureAlgorithms}},
 *   certPath         [0]  IMPLICIT PkiPath,
 *   signedAttrs      [1]  IMPLICIT SignedAttributes OPTIONAL,
 *   conf                  CHOICE {
 *     clear            [2]  WrappedPDUInfo,
 *     protected        [3]  EncryptedInfo,
 *    ... },
 *   ... }`
 */
export default
class TBSPDU_wrapper {
    constructor (
        readonly version: Version,
        readonly signatureAlgorithm: AlgorithmIdentifier,
        readonly certPath: PkiPath,
        readonly signedAttrs: SignedAttributes | undefined,
        readonly conf: DERElement,
    ) {}

    public static fromElement (value: ASN1Element): TBSPDU_wrapper {
        let version!: Version;
        let signatureAlgorithm!: AlgorithmIdentifier;
        let certPath!: PkiPath;
        let signedAttrs: SignedAttributes | undefined = undefined;
        let conf!: DERElement;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "version",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    version = el.integer;
                },
            },
            {
                name: "signatureAlgorithm",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    signatureAlgorithm = AlgorithmIdentifier.fromElement(el as DERElement);
                },
            },
            {
                name: "certPath",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    certPath = el.sizeConstrainedSequenceOf(1)
                        .map((c) => Certificate.fromElement(c as DERElement));
                },
            },
            {
                name: "signedAttrs",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    signedAttrs = el.sizeConstrainedSetOf(1)
                        .map((sa) => Attribute.fromElement(sa as DERElement));
                },
            },
            {
                name: "conf",
                optional: false,
                callback: (el: ASN1Element): void => {
                    conf = el as DERElement;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new TBSPDU_wrapper(
            version,
            signatureAlgorithm,
            certPath,
            signedAttrs,
            conf,
        );
    }

    public toElement (): DERElement {
        const certPathElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            0,
        );
        certPathElement.sequence = this.certPath.map((c) => c.toElement());

        let signedAttrsElement: DERElement | undefined = undefined;
        if (this.signedAttrs) {
            signedAttrsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            signedAttrsElement.set = this.signedAttrs.map((sa) => sa.toElement());
        }

        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.version,
            ),
            this.signatureAlgorithm.toElement(),
            certPathElement,
            signedAttrsElement,
            this.conf,
        ]);
    }

    public static fromBytes (value: Uint8Array): TBSPDU_wrapper {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return TBSPDU_wrapper.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
