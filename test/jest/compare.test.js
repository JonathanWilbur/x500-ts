const asn1 = require("asn1-ts");
const { AttributeTypeAndValue } = require("../../dist/node/modules/InformationFramework/AttributeTypeAndValue.ta");
const { id_at_givenName } = require("../../dist/node/modules/SelectedAttributeTypes/id-at-givenName.va");
const { id_at_surname } = require("../../dist/node/modules/SelectedAttributeTypes/id-at-surname.va");
const { id_at_organizationName } = require("../../dist/node/modules/SelectedAttributeTypes/id-at-organizationName.va");
const compareRDNSequence = require("../../dist/node/comparators/compareRDNSequence").default;

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
            new AttributeTypeAndValue(
                id_at_givenName,
                issuerEl,
            ),
            new AttributeTypeAndValue(
                id_at_surname,
                issuerEl,
            ),
        ],
        [
            new AttributeTypeAndValue(
                id_at_organizationName,
                issuerEl,
            ),
        ]
    ];

    const dn2 = [
        [
            new AttributeTypeAndValue(
                id_at_surname,
                issuerEl,
            ),
            new AttributeTypeAndValue(
                id_at_givenName,
                issuerEl,
            ),
        ],
        [
            new AttributeTypeAndValue(
                id_at_organizationName,
                issuerEl,
            ),
        ]
    ];

    const dn3 = [
        [
            new AttributeTypeAndValue(
                id_at_surname,
                issuerEl,
            ),
        ],
        [
            new AttributeTypeAndValue(
                id_at_organizationName,
                issuerEl,
            ),
        ]
    ];

    const dn4 = [
        [
            new AttributeTypeAndValue(
                id_at_surname,
                issuerEl,
            ),
            new AttributeTypeAndValue(
                id_at_givenName,
                issuerEl,
            ),
        ],
    ];

    const dn5 = [
        [
            new AttributeTypeAndValue(
                id_at_organizationName,
                issuerEl,
            ),
        ],
        [
            new AttributeTypeAndValue(
                id_at_surname,
                issuerEl,
            ),
            new AttributeTypeAndValue(
                id_at_givenName,
                issuerEl,
            ),
        ],
    ];

    test("can compare two DNs", () => {
        expect(compareRDNSequence(dn1, dn2)).toBe(true);
        expect(compareRDNSequence(dn1, dn3)).toBe(false);
        expect(compareRDNSequence(dn1, dn4)).toBe(false);
        expect(compareRDNSequence(dn1, dn5)).toBe(false);
    });
});
