import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import Version from "./Version";
import AlgorithmIdentifier from "./AlgorithmIdentifier";
import Name from "../InformationFramework/Name";
import Extensions from "./Extensions";
import Extension from "./Extension";
import TBSCertAVLEntry from "./TBSCertAVLEntry";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import validateTag from "../../validateTag";


/**
 * `TBSCertAVL ::= SEQUENCE {
 *   version               [0]  IMPLICIT Version DEFAULT v1,
 *   serialNumber               AvlSerialNumber OPTIONAL,
 *   signature                  AlgorithmIdentifier {{SupportedAlgorithms}},
 *   issuer                     Name,
 *   constrained                BOOLEAN,
 *   entries                    SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     idType                     CHOICE {
 *       certIdentifier        [0]  PKCertIdentifier,
 *       entityGroup                DistinguishedName, -- only for constrained = FALSE
 *       ... },
 *     scope                 [0]  IMPLICIT ScopeRestrictions OPTIONAL,
 *     entryExtensions       [1]  IMPLICIT Extensions OPTIONAL,
 *     ... },
 *   ...,
 *   ...,
 *   avlExtensions              Extensions OPTIONAL }`
 */
export default
class TBSCertAVL {
    constructor (
        readonly version: Version,
        readonly serialNumber: Uint8Array | undefined,
        readonly signature: AlgorithmIdentifier,
        readonly issuer: Name,
        readonly constrained: boolean,
        readonly entries: TBSCertAVLEntry[],
        readonly avlExtensions: Extensions | undefined,
    ) {}

    public static fromElement (value: ASN1Element): TBSCertAVL {
        const tbsCertAVLElements: ASN1Element[] = value.sequence;
        let encounteredDefinedElements: number = 0;
        let version: Version = Version.v1;
        let serialNumber: Uint8Array | undefined = undefined;
        let signature!: AlgorithmIdentifier;
        let issuer!: Name;
        let constrained!: boolean;
        let entries!: TBSCertAVLEntry[];
        let avlExtensions: Extensions | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "version",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    version = (el as DERElement).integer;
                    encounteredDefinedElements++;
                },
            },
            {
                name: "serialNumber",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    serialNumber = (el as DERElement).octetString;
                    encounteredDefinedElements++;
                },
            },
            {
                name: "signature",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    signature = AlgorithmIdentifier.fromElement(el as DERElement);
                    encounteredDefinedElements++;
                },
            },
            {
                name: "issuer",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    issuer = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `issuer[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `issuer[${rdnIndex}][${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        });
                    encounteredDefinedElements++;
                },
            },
            {
                name: "constrained",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    constrained = (el as DERElement).boolean;
                    encounteredDefinedElements++;
                },
            },
            {
                name: "entries",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    entries = (el.sizeConstrainedSequenceOf(1) as DERElement[])
                        .map(TBSCertAVLEntry.fromElement);
                    encounteredDefinedElements++;
                },
            },
        ];
        validateConstruction(tbsCertAVLElements, specification);

        const lastElement: ASN1Element = tbsCertAVLElements[tbsCertAVLElements.length - 1];
        if (
            tbsCertAVLElements.length > (encounteredDefinedElements + 1)
            && lastElement.tagClass === ASN1TagClass.universal
            && lastElement.construction === ASN1Construction.constructed
            && lastElement.tagNumber === ASN1UniversalType.sequence
        ) {
            avlExtensions = (lastElement.sizeConstrainedSequenceOf(1))
                .map(Extension.fromElement);
        }

        return new TBSCertAVL(
            version,
            serialNumber,
            signature,
            issuer,
            constrained,
            entries,
            avlExtensions,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
                this.version,
            ),
            this.serialNumber
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.serialNumber,
                )
                : undefined,
            this.signature.toElement(),
            DERElement.fromSequence(
                this.issuer.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.boolean,
                this.constrained,
            ),
            DERElement.fromSequence(this.entries.map((e) => e.toElement())),
            this.avlExtensions
                ? DERElement.fromSequence(this.avlExtensions.map((e) => e.toElement()))
                : undefined,
        ]);
    }

    public static fromBytes (value: Uint8Array): TBSCertAVL {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return TBSCertAVL.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
