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
import EncryptedKey from "./EncryptedKey";
import EncryptedPdu from "./EncryptedPdu";

/**
 * `EncryptedPduInfo ::= SEQUENCE {
 *   pduType                 WRAPPED-PDU.&id ({SupportedPduSet}),
 *   encryptedKey            EncryptedKey OPTIONAL,
 *   pduEncryptionAlgorithm  SEQUENCE {
 *     algorithm               ALGORITHM.&id ({SymmetricEncryptionAlgorithms}),
 *     parameter               ALGORITHM.&Type
 *                   ({SymmetricEncryptionAlgorithms}{@.algorithm})} OPTIONAL,
 *   encryptedPdu        [0] EncryptedPdu,
 *   ... }`
 */
export default
class EncryptedPduInfo {
    constructor (
        readonly pduType: ObjectIdentifier,
        readonly encryptedKey: EncryptedKey | undefined,
        readonly pduEncryptionAlgorithm: {
            algorithm: ObjectIdentifier;
            parameter: DERElement;
        } | undefined,
        readonly encryptedPdu: EncryptedPdu,
    ) {}

    public static fromElement (value: ASN1Element): EncryptedPduInfo {
        let pduType!: ObjectIdentifier;
        let encryptedKey: EncryptedKey | undefined = undefined;
        let pduEncryptionAlgorithm: {
            algorithm: ObjectIdentifier;
            parameter: DERElement;
        } | undefined = undefined;
        let encryptedPdu!: EncryptedPdu;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "pduType",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    pduType = el.objectIdentifier;
                },
            },
            {
                name: "encryptedKey",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.octetString,
                callback: (el: ASN1Element): void => {
                    encryptedKey = el.octetString;
                },
            },
            {
                name: "pduEncryptionAlgorithm",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    let algorithm!: ObjectIdentifier;
                    let parameter!: DERElement;
                    const pduEncryptionAlgorithmSpecification: ConstructedElementSpecification[] = [
                        {
                            name: "pduEncryptionAlgorithm.algorithm",
                            optional: false,
                            tagClass: ASN1TagClass.universal,
                            construction: ASN1Construction.primitive,
                            tagNumber: ASN1UniversalType.objectIdentifier,
                            callback: (el2: ASN1Element): void => {
                                algorithm = el2.objectIdentifier;
                            },
                        },
                        {
                            name: "pduEncryptionAlgorithm.parameter",
                            optional: false,
                            callback: (el2: ASN1Element): void => {
                                parameter = el2 as DERElement;
                            },
                        },
                    ];
                    validateConstruction(el.sequence, pduEncryptionAlgorithmSpecification);
                    pduEncryptionAlgorithm = {
                        algorithm,
                        parameter,
                    };
                },
            },
            {
                name: "encryptedPdu",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    encryptedPdu = el.octetString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new EncryptedPduInfo(
            pduType,
            encryptedKey,
            pduEncryptionAlgorithm,
            encryptedPdu,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.pduType,
            ),
            this.encryptedKey
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.octetString,
                    this.encryptedKey,
                )
                : undefined,
            this.pduEncryptionAlgorithm
                ? DERElement.fromSequence([
                    new DERElement(
                        ASN1TagClass.universal,
                        ASN1Construction.primitive,
                        ASN1UniversalType.objectIdentifier,
                        this.pduEncryptionAlgorithm.algorithm,
                    ),
                    this.pduEncryptionAlgorithm.parameter,
                ])
                : undefined,
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.octetString,
                this.encryptedPdu,
            ),
        ]);
    }

    public static fromBytes (value: Uint8Array): EncryptedPduInfo {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return EncryptedPduInfo.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
