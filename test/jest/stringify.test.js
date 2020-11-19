const asn1 = require("asn1-ts");
const { AttributeTypeAndValue } = require("../../dist/node/modules/InformationFramework/AttributeTypeAndValue.ta");
const { id_at_givenName } = require("../../dist/node/modules/SelectedAttributeTypes/id-at-givenName.va");
const { id_at_surname } = require("../../dist/node/modules/SelectedAttributeTypes/id-at-surName.va");
const { id_at_organizationName } = require("../../dist/node/modules/SelectedAttributeTypes/id-at-organizationName.va");
const rdnSequenceToString = require("../../dist/node/stringifiers/rdnSequenceToString").default;
const generalNameToString = require("../../dist/node/stringifiers/generalNameToString").default;

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

    const gn = {
        directoryName: {
            rdnSequence: dn,
        },
    };

    test("can stringify a DN", () => {
        expect(rdnSequenceToString(dn)).toBe("gn=Mr. Is\\/uer, Jr.+sn=Mr. Is\\/uer, Jr./o=Mr. Is\\/uer, Jr.");
    });

    test("can stringify a GeneralName", () => {
        expect(generalNameToString(gn)).toBe("directoryName:gn=Mr. Is\\/uer, Jr.+sn=Mr. Is\\/uer, Jr./o=Mr. Is\\/uer, Jr.");
    });
});
