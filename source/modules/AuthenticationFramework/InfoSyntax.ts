import UnboundedDirectoryString from "../SelectedAttributeTypes/UnboundedDirectoryString";
import GeneralNames from "../CertificateExtensions/GeneralNames";
// import { DERElement } from 'asn1-ts';
import HASH from "./HASH";
import validateConstruction from "../../validateConstruction";
import { ASN1Element, DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";

/**
 * InfoSyntax ::= CHOICE {
 *   content  UnboundedDirectoryString,
 *   pointer  SEQUENCE {
 *     name     GeneralNames,
 *     hash     HASH{HashedPolicyInfo} OPTIONAL,
 *     ... },
 *   ... }
 */
export default class InfoSyntax {
    constructor (
        readonly choice: string | { name: GeneralNames; hash?: HASH }
    ) {}

    public static fromElement (value: DERElement): InfoSyntax {
        let choice!: string | { name: GeneralNames; hash: HASH };
        const specification: ConstructedElementSpecification[] = [
            {
                name: "InfoSyntax",
                optional: false,
                choice: [
                    {
                        name: "pointer",
                        tagClass: ASN1TagClass.universal,
                        construction: ASN1Construction.constructed,
                        tagNumber: ASN1UniversalType.sequence,
                        callback: (el: ASN1Element): void => {
                            const elements: DERElement[] = (el as DERElement).sequence;
                            choice = {
                                name: elements[0].sequence,
                                hash: HASH.fromElement(elements[1]),
                            };
                        },
                    },
                    {
                        name: "content",
                        tagClass: ASN1TagClass.universal,
                        construction: ASN1Construction.constructed,
                        callback: (el: ASN1Element): void => {
                            choice = UnboundedDirectoryString.fromElement(el as DERElement).toString();
                        },
                    },
                ],
            },
        ];
        validateConstruction(value.sequence, specification);
        return new InfoSyntax(choice);
    }

    public toElement (): DERElement {
        const infoSyntaxElement: DERElement = new DERElement();
        infoSyntaxElement.tagClass = ASN1TagClass.universal;
        if (typeof this.choice === "string") {
            infoSyntaxElement.construction = ASN1Construction.primitive;
            infoSyntaxElement.tagNumber = ASN1UniversalType.utf8String;
            infoSyntaxElement.utf8String = this.choice;
        } else {
            const infoSyntaxElements: DERElement[] = [];

            const nameElement: DERElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.constructed,
                ASN1UniversalType.sequence,
            );
            nameElement.sequence = this.choice.name;
            infoSyntaxElements.push(nameElement);

            if (this.choice.hash) {
                infoSyntaxElements.push(this.choice.hash.toElement());
            }

            infoSyntaxElement.construction = ASN1Construction.constructed;
            infoSyntaxElement.tagNumber = ASN1UniversalType.sequence;
            infoSyntaxElement.sequence = infoSyntaxElements;
        }
        return infoSyntaxElement;
    }

    public static fromBytes (value: Uint8Array): InfoSyntax {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return InfoSyntax.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
