import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";
import * as errors from "../../errors";
import validateTag from "../../validateTag";
import GeneralNames from "../CertificateExtensions/GeneralNames";
import GeneralName from "../CertificateExtensions/GeneralName";

/**
 * `RoleSyntax ::= SEQUENCE {
 *   roleAuthority  [0]  GeneralNames OPTIONAL,
 *   roleName       [1]  GeneralName,
 *   ... }`
 */
export default
class RoleSyntax {
    constructor (
        readonly roleAuthority: GeneralNames | undefined,
        readonly roleName: GeneralName,
    ) {}

    public static fromElement (value: DERElement): RoleSyntax {
        const roleSyntaxElements: DERElement[] = value.sequence;
        if (roleSyntaxElements.length < 1) {
            throw new errors.X500Error("Too few elements in RoleSyntax.");
        }

        if (
            roleSyntaxElements[0].tagClass === ASN1TagClass.context
            && roleSyntaxElements[0].tagNumber === 1
        ) {
            return new RoleSyntax(
                undefined,
                roleSyntaxElements[0],
            );
        }

        let roleAuthority: GeneralNames | undefined = undefined;
        if (
            roleSyntaxElements[0].tagClass === ASN1TagClass.context
            && roleSyntaxElements[0].construction === ASN1Construction.constructed
            && roleSyntaxElements[0].tagNumber === 0
        ) {
            roleAuthority = roleSyntaxElements[0].sequence;
        } else {
            throw new errors.X500Error("First element of RoleSyntax was neither roleAuthority nor roleName.");
        }

        if (roleSyntaxElements.length < 2) {
            throw new errors.X500Error("Too few elements in RoleSyntax.");
        }

        validateTag(roleSyntaxElements[1], "RoleSyntax.roleName",
            [ ASN1TagClass.context ],
            [ ASN1Construction.primitive, ASN1Construction.constructed ],
            [ 1 ],
        );

        // REVIEW: This might be wrong. You might need to retrieve the element
        return new RoleSyntax(
            roleAuthority,
            roleSyntaxElements[1],
        );
    }

    public toElement (): DERElement {
        const roleSyntaxElements: DERElement[] = [];

        if (this.roleAuthority) {
            const roleAuthorityElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                ASN1UniversalType.sequence,
            );
            roleAuthorityElement.sequence = this.roleAuthority;
            roleSyntaxElements.push(roleAuthorityElement)
        }

        roleSyntaxElements.push(this.roleName);

        const roleSyntaxElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );
        roleSyntaxElement.sequence = roleSyntaxElements;
        return roleSyntaxElement;
    }

    public static fromBytes (value: Uint8Array): RoleSyntax {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return RoleSyntax.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
