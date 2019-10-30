import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ObjectIdentifier,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import validateTag from "../../validateTag";

/**
 * `ExtensionAttribute ::= SEQUENCE {
 *   type            ATTRIBUTE.&id,
 *   value           SET SIZE (0..1) OF SEQUENCE {
 *     mandatory  [0]  BOOLEAN DEFAULT FALSE,
 *     critical   [1]  BOOLEAN DEFAULT FALSE,
 *     ext        [2]  EXTENSION.&ExtnType,
 *     ... },
 *   ... }`
 */
export default
class ExtensionAttribute {
    constructor (
        readonly type: ObjectIdentifier,
        readonly value: {
            mandatory: boolean;
            critical: boolean;
            ext: DERElement;
        }[],
    ) {}

    public static fromElement (element: DERElement): ExtensionAttribute {
        let type!: ObjectIdentifier;
        let value!: {
            mandatory: boolean;
            critical: boolean;
            ext: DERElement;
        }[];
        const specification: ConstructedElementSpecification[] = [
            {
                name: "type",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    type = (el as DERElement).objectIdentifier;
                },
            },
            {
                name: "value",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    value = el.sizeConstrainedSetOf(0, 1)
                        .map((v) => {
                            validateTag(v as DERElement, "value",
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.sequence ],
                            );
                            let mandatory: boolean = false;
                            let critical: boolean = false;
                            let ext!: DERElement;
                            const valueSpecification: ConstructedElementSpecification[] = [
                                {
                                    name: "mandatory",
                                    optional: true,
                                    tagClass: ASN1TagClass.context,
                                    construction: ASN1Construction.primitive,
                                    tagNumber: 0,
                                    callback: (el2: ASN1Element): void => {
                                        mandatory = el2.boolean;
                                    },
                                },
                                {
                                    name: "critical",
                                    optional: true,
                                    tagClass: ASN1TagClass.context,
                                    construction: ASN1Construction.primitive,
                                    tagNumber: 1,
                                    callback: (el2: ASN1Element): void => {
                                        critical = el2.boolean;
                                    },
                                },
                                {
                                    name: "critical",
                                    optional: false,
                                    tagClass: ASN1TagClass.context,
                                    tagNumber: 2,
                                    callback: (el2: ASN1Element): void => {
                                        ext = el2 as DERElement;
                                    },
                                },
                            ];
                            validateConstruction(v.sequence, valueSpecification);
                            return {
                                mandatory,
                                critical,
                                ext,
                            };
                        });
                },
            },
        ];
        validateConstruction(element.sequence, specification);
        return new ExtensionAttribute(type, value);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.type,
            ),
            DERElement.fromSet(this.value.map((v) => {
                return DERElement.fromSequence([
                    v.mandatory
                        ? new DERElement(
                            ASN1TagClass.context,
                            ASN1Construction.primitive,
                            0,
                            v.mandatory,
                        )
                        : undefined,
                    v.critical
                        ? new DERElement(
                            ASN1TagClass.context,
                            ASN1Construction.primitive,
                            1,
                            v.critical,
                        )
                        : undefined,
                    new DERElement(
                        ASN1TagClass.context,
                        ASN1Construction.constructed,
                        2,
                        v.ext,
                    ),
                ]);
            })),
        ]);
    }
}
