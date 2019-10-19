import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";
import * as errors from "../../errors";
import Name from "../InformationFramework/Name";
import Validity from "./Validity";
import Version from "./Version";
import SubjectPublicKeyInfo from "./SubjectPublicKeyInfo";
import Extensions from "./Extensions";
import CertificateSerialNumber from "./CertificateSerialNumber";
import AlgorithmIdentifier from "./AlgorithmIdentifier";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import UniqueIdentifier from "../SelectedAttributeTypes/UniqueIdentifier";
import Extension from "./Extension";
import validateTag from "../../validateTag";

// TBSCertificate ::= SEQUENCE {
//     version                  [0]  Version DEFAULT v1,
//     serialNumber                  CertificateSerialNumber,
//     signature                     AlgorithmIdentifier{{SupportedAlgorithms}},
//     issuer                        Name,
//     validity                      Validity,
//     subject                       Name,
//     subjectPublicKeyInfo          SubjectPublicKeyInfo,
//     issuerUniqueIdentifier   [1] IMPLICIT UniqueIdentifier OPTIONAL,
//     ...,
//     [[2: -- if present, version shall be v2 or v3
//     subjectUniqueIdentifier  [2] IMPLICIT UniqueIdentifier OPTIONAL]],
//     [[3: -- if present, version shall be v2 or v3
//     extensions               [3]  Extensions OPTIONAL]]
//     -- If present, version shall be v3]]
//    } (CONSTRAINED BY { -- shall be DER encoded -- } )

export default
class TBSCertificate {
    // eslint-disable-next-line max-params
    constructor (
        readonly ver: Version = Version.v1,
        readonly serialNumber: CertificateSerialNumber,
        readonly signature: AlgorithmIdentifier,
        readonly issuer: Name,
        readonly validity: Validity,
        readonly subject: Name,
        readonly subjectPublicKeyInfo: SubjectPublicKeyInfo,
        readonly issuerUniqueID? : UniqueIdentifier,
        readonly subjectUniqueID? : UniqueIdentifier,
        readonly extensions? : Extensions
    ) {}

    public static fromElement (value: DERElement): TBSCertificate {
        switch (value.validateTag(
            [ ASN1TagClass.universal ],
            [ ASN1Construction.constructed ],
            [ ASN1UniversalType.sequence ]
        )) {
        case 0: break;
        case -1: throw new errors.X500Error("Invalid tag class on TBSCertificate");
        case -2: throw new errors.X500Error("Invalid construction on TBSCertificate");
        case -3: throw new errors.X500Error("Invalid tag number on TBSCertificate");
        default: throw new errors.X500Error("Undefined error when validating TBSCertificate tag");
        }

        const tbsCertificateElements: DERElement[] = value.sequence;
        if (tbsCertificateElements.length < 6) {
            throw new errors.X500Error(
                `TBSCertificate was too short. It contained ${tbsCertificateElements.length} elements.`,
            );
        }

        let ver: Version = Version.v1;
        let serialNumber: CertificateSerialNumber;
        // let signature: AlgorithmIdentifier;
        // let issuer: Name;
        // let validity: Validity;
        // let subject: Name;
        // let subjectPublicKeyInfo: SubjectPublicKeyInfo;
        let issuerUniqueID: UniqueIdentifier | undefined = undefined;
        let subjectUniqueID: UniqueIdentifier | undefined = undefined;
        let extensions: Extensions | undefined = undefined;

        let encounteredElements: number = 0;

        // version
        {
            if (
                tbsCertificateElements[encounteredElements].tagClass === ASN1TagClass.context
                && tbsCertificateElements[encounteredElements].construction === ASN1Construction.constructed
                && tbsCertificateElements[encounteredElements].tagNumber === 0
            ) {
                const versionElements: DERElement[] = tbsCertificateElements[encounteredElements].sequence;
                if (versionElements.length !== 1) throw new errors.X500Error("version can only contain one element.");
                switch (versionElements[0].validateTag(
                    [ ASN1TagClass.universal ],
                    [ ASN1Construction.primitive ],
                    [ ASN1UniversalType.integer ]
                )) {
                case 0: break;
                case -1: throw new errors.X500Error("Invalid tag class on TBSCertificate.version inner element");
                case -2: throw new errors.X500Error("Invalid construction on TBSCertificate.version inner element");
                case -3: throw new errors.X500Error("Invalid tag number on TBSCertificate.version inner element");
                default: {
                    throw new errors.X500Error(
                        "Undefined error when validating TBSCertificate.version inner element tag",
                    );
                }
                }

                switch (versionElements[0].integer) {
                case 0: ver = Version.v1; break;
                case 1: ver = Version.v2; break;
                case 2: ver = Version.v3; break;
                default:
                    throw new errors.X500Error("Invalid X.509 Certificate version.");
                }
                encounteredElements++;
            }
        }

        // serialNumber
        {
            switch (tbsCertificateElements[encounteredElements].validateTag(
                [ ASN1TagClass.universal ],
                [ ASN1Construction.primitive ],
                [ ASN1UniversalType.integer ]
            )) {
            case 0: break;
            case -1: throw new errors.X500Error("Invalid tag class on TBSCertificate.serialNumber");
            case -2: throw new errors.X500Error("Invalid construction on TBSCertificate.serialNumber");
            case -3: throw new errors.X500Error("Invalid tag number on TBSCertificate.serialNumber");
            default: throw new errors.X500Error("Undefined error when validating TBSCertificate.serialNumber tag");
            }
            serialNumber = tbsCertificateElements[encounteredElements++].octetString;
        }

        const signature: AlgorithmIdentifier = AlgorithmIdentifier.fromElement(
            tbsCertificateElements[encounteredElements++]
        );
        // const issuer: Name = RDNSequence.fromElement(tbsCertificateElements[encounteredElements++]);
        const issuer: Name = tbsCertificateElements[encounteredElements++].sizeConstrainedSequenceOf(1)
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

        const validity: Validity = Validity.fromElement(tbsCertificateElements[encounteredElements++]);

        const subject: Name = tbsCertificateElements[encounteredElements++].sizeConstrainedSequenceOf(1)
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

        const subjectPublicKeyInfo: SubjectPublicKeyInfo = SubjectPublicKeyInfo.fromElement(
            tbsCertificateElements[encounteredElements++]
        );

        // issuerUniqueIdentifier
        if (
            encounteredElements < tbsCertificateElements.length
            && tbsCertificateElements[encounteredElements].tagClass === ASN1TagClass.context
            && tbsCertificateElements[encounteredElements].construction === ASN1Construction.primitive
            && tbsCertificateElements[encounteredElements].tagNumber === 1
        ) {
            if (ver === Version.v1) {
                throw new errors.X500Error("issuerUniqueIdentifier not allowed in Version 1 X.509 certificate.");
            }
            issuerUniqueID = tbsCertificateElements[encounteredElements].bitString;
            encounteredElements++;
        }

        /**
         * This loop just determines where the ASN.1 extension marker "..."
         * begins and ends. (Not to be confused with the X.509 v3 Extensions.)
         * This is done so we can check that the extensions are in canonical
         * order as required by the distinguished encoding rules (DER) in the
         * next step.
         */
        let endOfTBSCertficateExtensionsIndex: number = encounteredElements;
        while (
            endOfTBSCertficateExtensionsIndex < tbsCertificateElements.length
            && !(
                tbsCertificateElements[encounteredElements].tagClass === ASN1TagClass.context
                && (
                    tbsCertificateElements[encounteredElements].tagNumber === 2
                    || tbsCertificateElements[encounteredElements].tagNumber === 3
                )
            )
        ) endOfTBSCertficateExtensionsIndex++;

        /**
         * The ASN.1 extensions to the TBSCertificate occur in the middle of
         * the TBSCertificate, rather than at the end, like most extensible
         * types. So we have to check everything within the extensibility
         * range is in canonical order.
         */
        DERElement.isInCanonicalOrder(
            tbsCertificateElements.slice(
                encounteredElements,
                endOfTBSCertficateExtensionsIndex
            )
        );

        DERElement.isUniquelyTagged(
            tbsCertificateElements.slice(
                encounteredElements,
                endOfTBSCertficateExtensionsIndex
            )
        );

        while (encounteredElements < tbsCertificateElements.length) {
            if (tbsCertificateElements[encounteredElements].tagClass === ASN1TagClass.context) {
                switch (tbsCertificateElements[encounteredElements].tagNumber) {
                case (2): {
                    if (ver === Version.v1) {
                        throw new errors.X500Error(
                            "subjectUniqueIdentifier not allowed in Version 1 X.509 certificate."
                        );
                    }
                    if ((tbsCertificateElements.length - encounteredElements) > 2) {
                        throw new errors.X500Error(
                            "subjectUniqueIdentifier must be last or second to last in the TBSCertificate."
                        );
                    }
                    subjectUniqueID = tbsCertificateElements[encounteredElements].bitString;
                    break;
                }
                case (3): {
                    if (ver !== Version.v3) {
                        throw new errors.X500Error("extensions not allowed in Version 1 or 2 X.509 certificate.");
                    }

                    if ((tbsCertificateElements.length - encounteredElements) !== 1) {
                        throw new errors.X500Error("extensions must be the last element in the TBSCertificate.");
                    }

                    switch (tbsCertificateElements[encounteredElements].validateTag(
                        [ ASN1TagClass.context ],
                        [ ASN1Construction.constructed ],
                        [ 3 ]
                    )) {
                    case 0: break;
                    case -1: {
                        throw new errors.X500Error("Invalid tag class on a TBSCertificate.extensions outer element");
                    }
                    case -2: {
                        throw new errors.X500Error("Invalid construction on a TBSCertificate.extensions outer element");
                    }
                    case -3: {
                        throw new errors.X500Error("Invalid tag number on a TBSCertificate.extensions outer element");
                    }
                    default: {
                        throw new errors.X500Error(
                            "Undefined error when validating a TBSCertificate.extensions outer element tag"
                        );
                    }
                    }

                    const extensionsElement: DERElement = new DERElement();
                    extensionsElement.fromBytes(tbsCertificateElements[encounteredElements].value);
                    const extensionElements: DERElement[] = extensionsElement.sequence;
                    if (extensionElements.length === 0) {
                        throw new errors.X500Error(
                            "extensions element may not be present in X.509 "
                            + "TBSCertificate if there are no extensions in it."
                        );
                    }
                    if (typeof extensions === "undefined") extensions = [];
                    extensions = extensions.concat(extensionElements.map(Extension.fromElement));
                    break;
                }
                default: break;
                }
            }
            encounteredElements++;
        }

        return new TBSCertificate(
            ver,
            serialNumber,
            signature,
            issuer,
            validity,
            subject,
            subjectPublicKeyInfo,
            issuerUniqueID,
            subjectUniqueID,
            extensions,
        );
    }

    public toElement (): DERElement {
        const retSequence: DERElement[] = [];
        const versionElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            0,
        );
        versionElement.inner = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.integer,
            this.ver,
        );
        retSequence.push(versionElement);
        retSequence.push(new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.integer,
            this.serialNumber,
        ));
        retSequence.push(this.signature.toElement());
        retSequence.push(DERElement.fromSequence(
            this.issuer.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
        ));
        retSequence.push(this.validity.toElement());
        retSequence.push(DERElement.fromSequence(
            this.subject.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
        ));
        retSequence.push(this.subjectPublicKeyInfo.toElement());

        if (this.ver !== Version.v1) {
            if (this.issuerUniqueID) {
                retSequence.push(new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    1,
                    this.issuerUniqueID,
                ));
            }
            if (this.subjectUniqueID) {
                retSequence.push(new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    2,
                    this.subjectUniqueID,
                ));
            }
        }

        if (this.ver === Version.v3 && this.extensions) {
            const extensionElements: DERElement[] = [];
            this.extensions.forEach((extension) => {
                extensionElements.push(extension.toElement());
            });
            const extensionsElement: DERElement = DERElement.fromSequence(extensionElements);
            const extensionsOuterElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
            extensionsOuterElement.inner = extensionsElement;
            retSequence.push(extensionsOuterElement);
        }

        return DERElement.fromSequence(retSequence);
    }

    public fromBytes (value: Uint8Array): TBSCertificate {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return TBSCertificate.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
