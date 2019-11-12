import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import ServiceControlOptions from "../DirectoryAbstractService/ServiceControlOptions";
import SearchControlOptions from "../DirectoryAbstractService/SearchControlOptions";
import HierarchySelections from "../DirectoryAbstractService/HierarchySelections";

/**
 * `ControlOptions ::= SEQUENCE {
 *   serviceControls   [0]  ServiceControlOptions DEFAULT {},
 *   searchOptions     [1]  SearchControlOptions  DEFAULT {searchAliases},
 *   hierarchyOptions  [2]  HierarchySelections   OPTIONAL,
 *   ... }`
 */
export default
class ControlOptions {
    constructor (
        readonly serviceControls: ServiceControlOptions,
        readonly searchOptions: SearchControlOptions,
        readonly hierarchyOptions: HierarchySelections | undefined,
    ) {}

    public static fromElement (value: ASN1Element): ControlOptions {
        let serviceControls: ServiceControlOptions = new ServiceControlOptions(
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
        );
        let searchOptions: SearchControlOptions = new SearchControlOptions(
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
        );
        let hierarchyOptions: HierarchySelections | undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "serviceControls",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    serviceControls = ServiceControlOptions.fromElement(el as DERElement);
                },
            },
            {
                name: "searchOptions",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    searchOptions = SearchControlOptions.fromElement(el as DERElement);
                },
            },
            {
                name: "hierarchyOptions",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    hierarchyOptions = HierarchySelections.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ControlOptions(
            serviceControls,
            searchOptions,
            hierarchyOptions,
        );
    }

    public toElement (): DERElement {
        const serviceControlsElement: DERElement = this.serviceControls.toElement();
        serviceControlsElement.tagClass = ASN1TagClass.context;
        serviceControlsElement.tagNumber = 0;
        const searchOptionsElement: DERElement = this.searchOptions.toElement();
        searchOptionsElement.tagClass = ASN1TagClass.context;
        searchOptionsElement.tagNumber = 1;
        let hierarchyOptionsElement: DERElement | undefined = undefined;
        if (this.hierarchyOptions) {
            hierarchyOptionsElement = this.hierarchyOptions.toElement();
            hierarchyOptionsElement.tagClass = ASN1TagClass.context;
            hierarchyOptionsElement.tagNumber = 2;
        }
        return DERElement.fromSequence([
            serviceControlsElement,
            searchOptionsElement,
            hierarchyOptionsElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): ControlOptions {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return ControlOptions.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
