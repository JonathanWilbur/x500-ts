import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1Element,
} from "asn1-ts";

/**
 * `OperationProgress ::= SET {
 *   nameResolutionPhase  [0]  ENUMERATED {
 *     notStarted  (1),
 *     proceeding  (2),
 *     completed   (3),
 *     ... },
 *   nextRDNToBeResolved  [1]  INTEGER OPTIONAL,
 *   ... }`
 */
export default
class OperationProgress {
    constructor (
        readonly nameResolutionPhase: number,
        readonly nextRDNToBeResolved: number | undefined,
    ) {}

    public static fromElement (value: ASN1Element): OperationProgress {
        let nameResolutionPhase!: number;
        let nextRDNToBeResolved: number | undefined = undefined;
        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (element.tagNumber) {
            case (0): {
                nameResolutionPhase = element.enumerated;
                break;
            }
            case (1): {
                nextRDNToBeResolved = element.integer;
                break;
            }
            default: { break; }
            }
        });

        return new OperationProgress(
            nameResolutionPhase,
            nextRDNToBeResolved,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSet([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
                this.nameResolutionPhase,
            ),
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                1,
                this.nextRDNToBeResolved,
            ),
        ]);
    }
}
