import {
    DERElement,
    ObjectIdentifier,
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    validateConstruction,
    ConstructedElementSpecification,
    ASN1Element,
} from "asn1-ts";
import SenderDhInfo from "./SenderDhInfo";

/**
 * `KeyAgreement ::= SEQUENCE {
 *   senderDhInfo       [0] SenderDhInfo,
 *   keyEncryptionAlgorithm SEQUENCE {
 *     algorithm    ALGORITHM.&id ({SupportedKeyEncryptionAlgorithm}),
 *     parameters   ALGORITHM.&Type({SupportedKeyEncryptionAlgorithm}{@.algorithm}),
 *     ... },
 *   ... }`
 */
export default
class KeyAgreement {
    constructor (
        readonly senderDhInfo: SenderDhInfo,
        readonly keyEncryptionAlgorithm: {
            algorithm: ObjectIdentifier;
            parameter: DERElement;
        },
    ) {}

    public static fromElement (value: ASN1Element): KeyAgreement {
        let senderDhInfo!: SenderDhInfo;
        let keyEncryptionAlgorithm!: {
            algorithm: ObjectIdentifier;
            parameter: DERElement;
        };
        const specification: ConstructedElementSpecification[] = [
            {
                name: "senderDhInfo",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    senderDhInfo = (el as DERElement).inner;
                },
            },
            {
                name: "keyEncryptionAlgorithm",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    let algorithm!: ObjectIdentifier;
                    let parameter!: DERElement;
                    const keyEncryptionAlgorithmSpecification: ConstructedElementSpecification[] = [
                        {
                            name: "keyEncryptionAlgorithm.algorithm",
                            optional: false,
                            tagClass: ASN1TagClass.universal,
                            construction: ASN1Construction.primitive,
                            tagNumber: ASN1UniversalType.objectIdentifier,
                            callback: (el2: ASN1Element): void => {
                                algorithm = el2.objectIdentifier;
                            },
                        },
                        {
                            name: "keyEncryptionAlgorithm.parameter",
                            optional: false,
                            callback: (el2: ASN1Element): void => {
                                parameter = el2 as DERElement;
                            },
                        },
                    ];
                    validateConstruction(el.sequence, keyEncryptionAlgorithmSpecification);
                    keyEncryptionAlgorithm = {
                        algorithm,
                        parameter,
                    };
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new KeyAgreement(senderDhInfo, keyEncryptionAlgorithm);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
                this.senderDhInfo,
            ),
            DERElement.fromSequence([
                new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    this.keyEncryptionAlgorithm.algorithm,
                ),
                this.keyEncryptionAlgorithm.parameter,
            ]),
        ]);
    }

    public static fromBytes (value: Uint8Array): KeyAgreement {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return KeyAgreement.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
