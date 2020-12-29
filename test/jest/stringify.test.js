const asn1 = require("asn1-ts");
const { AttributeTypeAndValue } = require("../../dist/node/modules/InformationFramework/AttributeTypeAndValue.ta");
const { id_at_givenName } = require("../../dist/node/modules/SelectedAttributeTypes/id-at-givenName.va");
const { id_at_surname } = require("../../dist/node/modules/SelectedAttributeTypes/id-at-surName.va");
const { id_at_organizationName } = require("../../dist/node/modules/SelectedAttributeTypes/id-at-organizationName.va");
const rdnSequenceToString = require("../../dist/node/stringifiers/rdnSequenceToString").default;
const generalNameToString = require("../../dist/node/stringifiers/generalNameToString").default;
const rdnSequenceFromString = require("../../dist/node/stringifiers/rdnSequenceFromString").default;
const decodeUBS = require("../../dist/node/modules/SelectedAttributeTypes/UnboundedDirectoryString.ta")
    ._decode_UnboundedDirectoryString;
const directoryStringToString = require("../../dist/node/stringifiers/directoryStringToString").default;

// function getUBS (el) {
//     return decodeUBS(el.sequence[0]);
// }

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

    test("can convert a string to an RDNSequence", () => {
        const str = "CN = Jonathan Wilbur + dnQualifier = 68109699-a4f6-477e-a7b2-1246ef9717f3, ST = FL, C = US";
        const rdns = Array.from(rdnSequenceFromString(str));
        expect(rdns.length).toBe(3);
        expect(rdns[0].length).toBe(2);
        expect(rdns[1].length).toBe(1);
        expect(rdns[2].length).toBe(1);
        expect(rdns[0][0].type_.toString()).toBe("2.5.4.3");
        expect(rdns[0][1].type_.toString()).toBe("2.5.4.46");
        expect(rdns[1][0].type_.toString()).toBe("2.5.4.8");
        expect(rdns[2][0].type_.toString()).toBe("2.5.4.6");
        expect(directoryStringToString(decodeUBS(rdns[0][0].value))).toBe("Jonathan Wilbur");
        expect(rdns[0][1].value.printableString).toBe("68109699-a4f6-477e-a7b2-1246ef9717f3");
        expect(directoryStringToString(decodeUBS(rdns[1][0].value))).toBe("FL");
        expect(directoryStringToString(decodeUBS(rdns[2][0].value))).toBe("US");
    });

    test("can convert a string containing escapes to an RDNSequence", () => {
        const str = "CN = Wilbur\\, Jonathan + dnQualifier = bigboi\\+badboi, ST = FL, C = US";
        const rdns = Array.from(rdnSequenceFromString(str));
        expect(rdns.length).toBe(3);
        expect(rdns[0].length).toBe(2);
        expect(rdns[1].length).toBe(1);
        expect(rdns[2].length).toBe(1);
        expect(rdns[0][0].type_.toString()).toBe("2.5.4.3");
        expect(rdns[0][1].type_.toString()).toBe("2.5.4.46");
        expect(rdns[1][0].type_.toString()).toBe("2.5.4.8");
        expect(rdns[2][0].type_.toString()).toBe("2.5.4.6");
        expect(directoryStringToString(decodeUBS(rdns[0][0].value))).toBe("Wilbur, Jonathan");
        expect(rdns[0][1].value.printableString).toBe("bigboi+badboi");
        expect(directoryStringToString(decodeUBS(rdns[1][0].value))).toBe("FL");
        expect(directoryStringToString(decodeUBS(rdns[2][0].value))).toBe("US");
    });

    test("can convert a string containing escaped escapes to an RDNSequence", () => {
        const str = "CN = Jonathan \\\\Wilbur, ST = FL, C = US";
        const rdns = Array.from(rdnSequenceFromString(str));
        expect(rdns.length).toBe(3);
        expect(rdns[0].length).toBe(1);
        expect(rdns[1].length).toBe(1);
        expect(rdns[2].length).toBe(1);
        expect(rdns[0][0].type_.toString()).toBe("2.5.4.3");
        expect(rdns[1][0].type_.toString()).toBe("2.5.4.8");
        expect(rdns[2][0].type_.toString()).toBe("2.5.4.6");
        expect(directoryStringToString(decodeUBS(rdns[0][0].value))).toBe("Jonathan \\Wilbur");
        expect(directoryStringToString(decodeUBS(rdns[1][0].value))).toBe("FL");
        expect(directoryStringToString(decodeUBS(rdns[2][0].value))).toBe("US");
    });
});
