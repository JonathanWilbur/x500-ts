import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import UnitOfReplication from "./UnitOfReplication";
import UpdateMode from "./UpdateMode";
import AccessPoint from "../DistributedOperations/AccessPoint";

/**
 * `ShadowingAgreementInfo ::= SEQUENCE {
 *   shadowSubject          UnitOfReplication,
 *   updateMode             UpdateMode DEFAULT supplierInitiated:onChange:TRUE,
 *   master                 AccessPoint OPTIONAL,
 *   secondaryShadows  [2]  BOOLEAN DEFAULT FALSE }`
 */
export default
class ShadowingAgreementInfo {
    constructor (
        readonly shadowSubject: UnitOfReplication,
        readonly updateMode: UpdateMode,
        readonly master: AccessPoint | undefined,
        readonly secondaryShadows: boolean,
    ) {}

    public static fromElement (value: ASN1Element): ShadowingAgreementInfo {
        let shadowSubject!: UnitOfReplication;
        let updateMode: UpdateMode = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            0,
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.boolean,
                true,
            ),
        );
        let master: AccessPoint | undefined = undefined;
        let secondaryShadows: boolean = false;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "shadowSubject",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    shadowSubject = UnitOfReplication.fromElement(el as DERElement);
                },
            },
            {
                name: "updateMode",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                callback: (el: ASN1Element): void => {
                    updateMode = el;
                },
            },
            {
                name: "master",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    master = AccessPoint.fromElement(el as DERElement);
                },
            },
            {
                name: "secondaryShadows",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    secondaryShadows = el.boolean;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ShadowingAgreementInfo(
            shadowSubject,
            updateMode,
            master,
            secondaryShadows,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.shadowSubject.toElement(),
            this.updateMode as DERElement | undefined,
            this.master
                ? this.master.toElement()
                : undefined,
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
                this.secondaryShadows,
            ),
        ]);
    }
}
