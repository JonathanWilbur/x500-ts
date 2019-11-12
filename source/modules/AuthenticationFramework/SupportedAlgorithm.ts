import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import AlgorithmIdentifier from "./AlgorithmIdentifier";
import KeyUsage from "../CertificateExtensions/KeyUsage";
import CertificatePoliciesSyntax from "../CertificateExtensions/CertificatePoliciesSyntax";
import PolicyInformation from "../CertificateExtensions/PolicyInformation";

/**
 * `SupportedAlgorithm ::= SEQUENCE {
 *   algorithmIdentifier              AlgorithmIdentifier{{SupportedAlgorithms}},
 *   intendedUsage               [0]  KeyUsage OPTIONAL,
 *   intendedCertificatePolicies [1]  CertificatePoliciesSyntax OPTIONAL,
 *   ... }`
 */
export default
class SupportedAlgorithm {
    constructor (
        readonly algorithmIdentifier: AlgorithmIdentifier,
        readonly intendedUsage: KeyUsage | undefined,
        readonly intendedCertificatePolicies: CertificatePoliciesSyntax | undefined,
    ) {}

    public static fromElement (value: ASN1Element): SupportedAlgorithm {
        let algorithmIdentifier!: AlgorithmIdentifier;
        let intendedUsage: KeyUsage | undefined = undefined;
        let intendedCertificatePolicies: CertificatePoliciesSyntax | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "algorithmIdentifier",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    algorithmIdentifier = AlgorithmIdentifier.fromElement(el as DERElement);
                },
            },
            {
                name: "intendedUsage",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    intendedUsage = KeyUsage.fromElement(el as DERElement);
                },
            },
            {
                name: "intendedCertificatePolicies",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    intendedCertificatePolicies = (el.sizeConstrainedSequenceOf(1) as DERElement[])
                        .map(PolicyInformation.fromElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SupportedAlgorithm(
            algorithmIdentifier,
            intendedUsage,
            intendedCertificatePolicies,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.algorithmIdentifier.toElement(),
            this.intendedUsage
                ? this.intendedUsage.toElement()
                : undefined,
            this.intendedCertificatePolicies
                ? DERElement.fromSequence(this.intendedCertificatePolicies.map((icp) => icp.toElement()))
                : undefined,
        ]);
    }

    public static fromBytes (value: Uint8Array): SupportedAlgorithm {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return SupportedAlgorithm.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
