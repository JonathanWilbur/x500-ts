import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import CountryName from "./CountryName";
import AdministrationDomainName from "./AdministrationDomainName";
import NetworkAddress from "./NetworkAddress";
import TerminalIdentifier from "./TerminalIdentifier";
import PrivateDomainName from "./PrivateDomainName";
import OrganizationName from "./OrganizationName";
import NumericUserIdentifier from "./NumericUserIdentifier";
import PersonalName from "./PersonalName";
import OrganizationalUnitNames from "./OrganizationalUnitNames";

/**
 * `BuiltInStandardAttributes ::= SEQUENCE {
 *   country-name                CountryName OPTIONAL,
 *   administration-domain-name  AdministrationDomainName OPTIONAL,
 *   network-address             [0]  NetworkAddress OPTIONAL,
 *   terminal-identifier         [1]  TerminalIdentifier OPTIONAL,
 *   private-domain-name         [2]  PrivateDomainName OPTIONAL,
 *   organization-name           [3]  OrganizationName OPTIONAL,
 *   numeric-user-identifier     [4]  NumericUserIdentifier OPTIONAL,
 *   personal-name               [5]  PersonalName OPTIONAL,
 *   organizational-unit-names   [6]  OrganizationalUnitNames OPTIONAL }`
 */
export default
class BuiltInStandardAttributes {
    constructor (
        readonly countryName: CountryName | undefined,
        readonly administrationDomainName: AdministrationDomainName | undefined,
        readonly networkAddress: NetworkAddress | undefined,
        readonly terminalIdentifier: TerminalIdentifier | undefined,
        readonly privateDomainName: PrivateDomainName | undefined,
        readonly organizationName: OrganizationName | undefined,
        readonly numericUserIdentifier: NumericUserIdentifier | undefined,
        readonly personalName: PersonalName | undefined,
        readonly organizationalUnitNames: OrganizationalUnitNames | undefined,
    ) {}

    public static fromElement (value: DERElement): BuiltInStandardAttributes {
        let countryName: CountryName | undefined = undefined;
        let administrationDomainName: AdministrationDomainName | undefined = undefined;
        let networkAddress: NetworkAddress | undefined = undefined;
        let terminalIdentifier: TerminalIdentifier | undefined = undefined;
        let privateDomainName: PrivateDomainName | undefined = undefined;
        let organizationName: OrganizationName | undefined = undefined;
        let numericUserIdentifier: NumericUserIdentifier | undefined = undefined;
        let personalName: PersonalName | undefined = undefined;
        let organizationalUnitNames: OrganizationalUnitNames | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "countryName",
                optional: true,
                tagClass: ASN1TagClass.application,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    countryName = el.inner.printableString;
                },
            },
            {
                name: "administrationDomainName",
                optional: true,
                tagClass: ASN1TagClass.application,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    administrationDomainName = el.inner.printableString;
                },
            },
            {
                name: "networkAddress",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    networkAddress = el.inner.numericString;
                },
            },
            {
                name: "terminalIdentifier",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    terminalIdentifier = el.inner.printableString;
                },
            },
            {
                name: "privateDomainName",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    privateDomainName = el.inner.printableString;
                },
            },
            {
                name: "organizationName",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    organizationName = el.inner.printableString;
                },
            },
            {
                name: "numericUserIdentifier",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    numericUserIdentifier = el.inner.numericString;
                },
            },
            {
                name: "personalName",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 5,
                callback: (el: ASN1Element): void => {
                    personalName = PersonalName.fromElement(el.inner as DERElement);
                },
            },
            {
                name: "organizationalUnitNames",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 6,
                callback: (el: ASN1Element): void => {
                    organizationalUnitNames = el.sequence.map((oun) => oun.printableString);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new BuiltInStandardAttributes(
            countryName,
            administrationDomainName,
            networkAddress,
            terminalIdentifier,
            privateDomainName,
            organizationName,
            numericUserIdentifier,
            personalName,
            organizationalUnitNames,
        );
    }

    public toElement (): DERElement {
        let countryNameElement: DERElement | undefined = undefined;
        if (this.countryName) {
            countryNameElement = new DERElement(
                ASN1TagClass.application,
                ASN1Construction.constructed,
                1,
            );
        }

        let administrationDomainNameElement: DERElement | undefined = undefined;
        if (this.administrationDomainName) {
            administrationDomainNameElement = new DERElement(
                ASN1TagClass.application,
                ASN1Construction.constructed,
                2,
            );
        }

        let networkAddressElement: DERElement | undefined = undefined;
        if (this.networkAddress) {
            networkAddressElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
        }

        let terminalIdentifierElement: DERElement | undefined = undefined;
        if (this.terminalIdentifier) {
            terminalIdentifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
        }

        let privateDomainNameElement: DERElement | undefined = undefined;
        if (this.privateDomainName) {
            privateDomainNameElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                2,
            );
        }

        let organizationNameElement: DERElement | undefined = undefined;
        if (this.organizationName) {
            organizationNameElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
        }

        let numericUserIdentifierElement: DERElement | undefined = undefined;
        if (this.numericUserIdentifier) {
            numericUserIdentifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                4,
            );
        }

        let personalNameElement: DERElement | undefined = undefined;
        if (this.personalName) {
            personalNameElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                5,
            );
        }

        let organizationalUnitNamesElement: DERElement | undefined = undefined;
        if (this.organizationalUnitNames) {
            organizationalUnitNamesElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                6,
            );
        }

        return DERElement.fromSequence([
            countryNameElement,
            administrationDomainNameElement,
            networkAddressElement,
            terminalIdentifierElement,
            privateDomainNameElement,
            organizationNameElement,
            numericUserIdentifierElement,
            personalNameElement,
            organizationalUnitNamesElement,
        ]);
    }
}
