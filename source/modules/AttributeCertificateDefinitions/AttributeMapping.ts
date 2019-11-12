import AttributeType from "../InformationFramework/AttributeType";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ObjectIdentifier,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";

/**
 * This definition does not actually exist in the ASN.1 module, but was created
 * for convenience.
 *
 * `AttributeMapping ::= CHOICE {
 *   typeMappings      [0]  SEQUENCE {
 *     local             [0]  AttributeType,
 *     remote            [1]  AttributeType,
 *     ... },
 *   typeValueMappings [1]  SEQUENCE {
 *     local             [0]  AttributeTypeAndValue,
 *     remote            [1]  AttributeTypeAndValue,
 *     ... } }`
 */
export default
class AttributeMapping {
    constructor (
        readonly choice:
            { local: AttributeType; remote: AttributeType }
            | { local: AttributeTypeAndValue; remote: AttributeTypeAndValue }
    ) {}

    public static fromElement (value: ASN1Element): AttributeMapping {
        let choice!:
            { local: AttributeType; remote: AttributeType }
            | { local: AttributeTypeAndValue; remote: AttributeTypeAndValue };

        const specification: ConstructedElementSpecification[] = [
            {
                name: "AttributeMapping",
                optional: true,
                choice: [
                    {
                        name: "typeMappings",
                        tagClass: ASN1TagClass.context,
                        construction: ASN1Construction.constructed,
                        tagNumber: 0,
                        callback: (el: ASN1Element): void => {
                            let local!: AttributeType;
                            let remote!: AttributeType;
                            const typeMappingsSpec: ConstructedElementSpecification[] = [
                                {
                                    name: "local",
                                    optional: false,
                                    tagClass: ASN1TagClass.context,
                                    construction: ASN1Construction.primitive,
                                    tagNumber: 0,
                                    callback: (el2: ASN1Element): void => {
                                        local = el2.objectIdentifier as AttributeType;
                                    },
                                },
                                {
                                    name: "remote",
                                    optional: false,
                                    tagClass: ASN1TagClass.context,
                                    construction: ASN1Construction.primitive,
                                    tagNumber: 1,
                                    callback: (el2: ASN1Element): void => {
                                        remote = el2.objectIdentifier as AttributeType;
                                    },
                                },
                            ];
                            validateConstruction(el.sequence, typeMappingsSpec);
                            choice = {
                                local,
                                remote,
                            };
                        },
                    },
                    {
                        name: "typeValueMappings",
                        tagClass: ASN1TagClass.context,
                        construction: ASN1Construction.constructed,
                        tagNumber: 1,
                        callback: (el: ASN1Element): void => {
                            let local!: AttributeTypeAndValue;
                            let remote!: AttributeTypeAndValue;
                            const typeValueMappingsSpec: ConstructedElementSpecification[] = [
                                {
                                    name: "local",
                                    optional: false,
                                    tagClass: ASN1TagClass.context,
                                    construction: ASN1Construction.primitive,
                                    tagNumber: 0,
                                    callback: (el2: ASN1Element): void => {
                                        local = AttributeTypeAndValue.fromElement(el2 as DERElement);
                                    },
                                },
                                {
                                    name: "remote",
                                    optional: false,
                                    tagClass: ASN1TagClass.context,
                                    construction: ASN1Construction.primitive,
                                    tagNumber: 1,
                                    callback: (el2: ASN1Element): void => {
                                        remote = AttributeTypeAndValue.fromElement(el2 as DERElement);
                                    },
                                },
                            ];
                            validateConstruction(el.sequence, typeValueMappingsSpec);
                            choice = {
                                local,
                                remote,
                            };
                        },
                    },
                ],
            },
        ];

        validateConstruction([ value ], specification);
        return new AttributeMapping(choice);
    }

    public toElement (): DERElement {
        if (this.choice.local instanceof ObjectIdentifier && this.choice.remote instanceof ObjectIdentifier) {
            const localElement: DERElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                0,
                this.choice.local,
            );
            const remoteElement: DERElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                1,
                this.choice.remote,
            );
            const ret: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            ret.sequence = [
                localElement,
                remoteElement,
            ];
            return ret;
        } else {
            const localElement: DERElement = (this.choice.local as AttributeTypeAndValue).toElement();
            const remoteElement: DERElement = (this.choice.remote as AttributeTypeAndValue).toElement();
            localElement.tagClass = ASN1TagClass.context;
            remoteElement.tagClass = ASN1TagClass.context;
            localElement.tagNumber = 0;
            remoteElement.tagNumber = 1;
            const ret: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            ret.sequence = [
                localElement,
                remoteElement,
            ];
            return ret;
        }
    }

    public static fromBytes (value: Uint8Array): AttributeMapping {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return AttributeMapping.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
