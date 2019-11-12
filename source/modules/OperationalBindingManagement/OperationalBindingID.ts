import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import * as errors from "../../errors";

/**
 * `OperationalBindingID ::= SEQUENCE {
 *   identifier  INTEGER,
 *   version     INTEGER,
 *   ... }`
 */
export default
class OperationalBindingID {
    constructor (
        readonly identifier: number,
        readonly version: number,
    ) {
        if (!Number.isSafeInteger(identifier)) {
            throw new errors.X500Error(
                "OperationalBindingID.identifier must be an INTEGER. Received "
                + `a value of ${identifier}.`,
            );
        }
        if (!Number.isSafeInteger(version)) {
            throw new errors.X500Error(
                "OperationalBindingID.version must be an INTEGER. Received "
                + `a value of ${version}.`,
            );
        }
    }

    public static fromElement (value: ASN1Element): OperationalBindingID {
        let identifier!: number;
        let version!: number;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "identifier",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    identifier = (el as DERElement).integer;
                },
            },
            {
                name: "version",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    version = (el as DERElement).integer;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new OperationalBindingID(identifier, version);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.identifier,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.version,
            ),
        ]);
    }

    public static fromBytes (value: Uint8Array): OperationalBindingID {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return OperationalBindingID.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
