import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    validateConstruction,
} from "asn1-ts";
import InfoSyntax from "../AuthenticationFramework/InfoSyntax";
import PrivilegePolicy from "./PrivilegePolicy";

/**
 * `PrivilegePolicyIdentifier ::= SEQUENCE {
 *   privilegePolicy  PrivilegePolicy,
 *   privPolSyntax    InfoSyntax,
 *   ... }`
 */
export default class PrivilegePolicyIdentifier {
    constructor (
        readonly privilegePolicy: PrivilegePolicy,
        readonly privPolSyntax: InfoSyntax,
    ) {}

    public static fromElement (value: DERElement): PrivilegePolicyIdentifier {
        const ppiElements: DERElement[] = value.sequence;
        let privilegePolicy!: PrivilegePolicy;
        let privPolSyntax!: InfoSyntax;
        const specification = [
            {
                name: "privilegePolicy",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    privilegePolicy = el.objectIdentifier;
                },
            },
            {
                name: "privPolSyntax",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    privPolSyntax = InfoSyntax.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(ppiElements, specification);
        return new PrivilegePolicyIdentifier(
            privilegePolicy,
            privPolSyntax,
        );
    }

    public toElement (): DERElement {
        const privilegePolicyElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.objectIdentifier,
            this.privilegePolicy,
        );
        const ppiElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );
        ppiElement.sequence = [
            privilegePolicyElement,
            this.privPolSyntax.toElement(),
        ];
        return ppiElement;
    }

    public static fromBytes (value: Uint8Array): PrivilegePolicyIdentifier {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return PrivilegePolicyIdentifier.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
