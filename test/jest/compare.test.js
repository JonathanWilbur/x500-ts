const x500 = require("../../dist/node/index.js");
const asn1 = require("asn1-ts");

describe("Comparators", () => {
    const issuerCN = "Bigboi";
    const issuerEl = new asn1.DERElement(
        asn1.ASN1TagClass.universal,
        asn1.ASN1Construction.primitive,
        asn1.ASN1UniversalType.utf8String,
    );
    issuerEl.utf8String = issuerCN;

    const dn1 = [
        [
            new x500.InformationFramework.AttributeTypeAndValue(
                x500.SelectedAttributeTypes.id_at_givenName,
                issuerEl,
            ),
            new x500.InformationFramework.AttributeTypeAndValue(
                x500.SelectedAttributeTypes.id_at_surname,
                issuerEl,
            ),
        ],
        [
            new x500.InformationFramework.AttributeTypeAndValue(
                x500.SelectedAttributeTypes.id_at_organizationName,
                issuerEl,
            ),
        ]
    ];

    const dn2 = [
        [
            new x500.InformationFramework.AttributeTypeAndValue(
                x500.SelectedAttributeTypes.id_at_surname,
                issuerEl,
            ),
            new x500.InformationFramework.AttributeTypeAndValue(
                x500.SelectedAttributeTypes.id_at_givenName,
                issuerEl,
            ),
        ],
        [
            new x500.InformationFramework.AttributeTypeAndValue(
                x500.SelectedAttributeTypes.id_at_organizationName,
                issuerEl,
            ),
        ]
    ];

    const dn3 = [
        [
            new x500.InformationFramework.AttributeTypeAndValue(
                x500.SelectedAttributeTypes.id_at_surname,
                issuerEl,
            ),
        ],
        [
            new x500.InformationFramework.AttributeTypeAndValue(
                x500.SelectedAttributeTypes.id_at_organizationName,
                issuerEl,
            ),
        ]
    ];

    const dn4 = [
        [
            new x500.InformationFramework.AttributeTypeAndValue(
                x500.SelectedAttributeTypes.id_at_surname,
                issuerEl,
            ),
            new x500.InformationFramework.AttributeTypeAndValue(
                x500.SelectedAttributeTypes.id_at_givenName,
                issuerEl,
            ),
        ],
    ];

    const dn5 = [
        [
            new x500.InformationFramework.AttributeTypeAndValue(
                x500.SelectedAttributeTypes.id_at_organizationName,
                issuerEl,
            ),
        ],
        [
            new x500.InformationFramework.AttributeTypeAndValue(
                x500.SelectedAttributeTypes.id_at_surname,
                issuerEl,
            ),
            new x500.InformationFramework.AttributeTypeAndValue(
                x500.SelectedAttributeTypes.id_at_givenName,
                issuerEl,
            ),
        ],
    ];

    test("can compare two DNs", () => {
        expect(x500.comparators.compareRDNSequence(dn1, dn2)).toBe(true);
        expect(x500.comparators.compareRDNSequence(dn1, dn3)).toBe(false);
        expect(x500.comparators.compareRDNSequence(dn1, dn4)).toBe(false);
        expect(x500.comparators.compareRDNSequence(dn1, dn5)).toBe(false);
    });
});
