const x500 = require("../../dist/node/index.js");
const asn1 = require("asn1-ts");

describe("Stringifiers", () => {
    const issuerCN = "Mr. Is/uer, Jr.";
    const issuerEl = new asn1.DERElement(
        asn1.ASN1TagClass.universal,
        asn1.ASN1Construction.primitive,
        asn1.ASN1UniversalType.utf8String,
    );
    issuerEl.utf8String = issuerCN;

    const dn = [
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

    test("can stringify a DN", () => {
        expect(x500.stringifiers.rdnSequenceToString(dn)).toBe("gn=Mr. Is\\/uer, Jr.+sn=Mr. Is\\/uer, Jr./o=Mr. Is\\/uer, Jr.");
    });
});
