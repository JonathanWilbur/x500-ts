import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";

/**
 * `ServiceControlOptions ::= BIT STRING {
 *   preferChaining          (0),
 *   chainingProhibited      (1),
 *   localScope              (2),
 *   dontUseCopy             (3),
 *   dontDereferenceAliases  (4),
 *   subentries              (5),
 *   copyShallDo             (6),
 *   partialNameResolution   (7),
 *   manageDSAIT             (8),
 *   noSubtypeMatch          (9),
 *   noSubtypeSelection      (10),
 *   countFamily             (11),
 *   dontSelectFriends       (12),
 *   dontMatchFriends        (13),
 *   allowWriteableCopy      (14)}`
 */
export default
class ServiceControlOptions {
    constructor (
        readonly preferChaining: boolean,
        readonly chainingProhibited: boolean,
        readonly localScope: boolean,
        readonly dontUseCopy: boolean,
        readonly dontDereferenceAliases: boolean,
        readonly subentries: boolean,
        readonly copyShallDo: boolean,
        readonly partialNameResolution: boolean,
        readonly manageDSAIT: boolean,
        readonly noSubtypeMatch: boolean,
        readonly noSubtypeSelection: boolean,
        readonly countFamily: boolean,
        readonly dontSelectFriends: boolean,
        readonly dontMatchFriends: boolean,
        readonly allowWriteableCopy: boolean,
    ) {}

    public static fromElement (value: ASN1Element): ServiceControlOptions {
        const bits: boolean[] = value.bitString;
        return new ServiceControlOptions(
            ((bits.length >  0) ? bits[ 0] : false),
            ((bits.length >  1) ? bits[ 1] : false),
            ((bits.length >  2) ? bits[ 2] : false),
            ((bits.length >  3) ? bits[ 3] : false),
            ((bits.length >  4) ? bits[ 4] : false),
            ((bits.length >  5) ? bits[ 5] : false),
            ((bits.length >  6) ? bits[ 6] : false),
            ((bits.length >  7) ? bits[ 7] : false),
            ((bits.length >  8) ? bits[ 8] : false),
            ((bits.length >  9) ? bits[ 9] : false),
            ((bits.length > 10) ? bits[10] : false),
            ((bits.length > 11) ? bits[11] : false),
            ((bits.length > 12) ? bits[12] : false),
            ((bits.length > 13) ? bits[13] : false),
            ((bits.length > 14) ? bits[14] : false),
        );
    }

    public toElement (): DERElement {
        const keyUsageElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        keyUsageElement.bitString = [
            this.preferChaining,
            this.chainingProhibited,
            this.localScope,
            this.dontUseCopy,
            this.dontDereferenceAliases,
            this.subentries,
            this.copyShallDo,
            this.partialNameResolution,
            this.manageDSAIT,
            this.noSubtypeMatch,
            this.noSubtypeSelection,
            this.countFamily,
            this.dontSelectFriends,
            this.dontMatchFriends,
            this.allowWriteableCopy,
        ];
        return keyUsageElement;
    }

    public static fromBytes (value: Uint8Array): ServiceControlOptions {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return ServiceControlOptions.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
