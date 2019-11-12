import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";

/**
 * `SearchControlOptions ::= BIT STRING {
 *   searchAliases         (0),
 *   matchedValuesOnly     (1),
 *   checkOverspecified    (2),
 *   performExactly        (3),
 *   includeAllAreas       (4),
 *   noSystemRelaxation    (5),
 *   dnAttribute           (6),
 *   matchOnResidualName   (7),
 *   entryCount            (8),
 *   useSubset             (9),
 *   separateFamilyMembers (10),
 *   searchFamily          (11) }`
 */
export default
class SearchControlOptions {
    constructor (
        readonly searchAliases: boolean,
        readonly matchedValuesOnly: boolean,
        readonly checkOverspecified: boolean,
        readonly performExactly: boolean,
        readonly includeAllAreas: boolean,
        readonly noSystemRelaxation: boolean,
        readonly dnAttribute: boolean,
        readonly matchOnResidualName: boolean,
        readonly entryCount: boolean,
        readonly useSubset: boolean,
        readonly separateFamilyMembers: boolean,
        readonly searchFamily: boolean,
    ) {}

    public static fromElement (value: ASN1Element): SearchControlOptions {
        const bits: boolean[] = value.bitString;
        return new SearchControlOptions(
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
        );
    }

    public toElement (): DERElement {
        const keyUsageElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        keyUsageElement.bitString = [
            this.searchAliases,
            this.matchedValuesOnly,
            this.checkOverspecified,
            this.performExactly,
            this.includeAllAreas,
            this.noSystemRelaxation,
            this.dnAttribute,
            this.matchOnResidualName,
            this.entryCount,
            this.useSubset,
            this.separateFamilyMembers,
            this.searchFamily,
        ];
        return keyUsageElement;
    }

    public static fromBytes (value: Uint8Array): SearchControlOptions {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return SearchControlOptions.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
