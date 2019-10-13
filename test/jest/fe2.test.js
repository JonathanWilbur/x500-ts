const x500 = require("../../dist/index.js");
const asn1 = require("asn1-ts");

describe("fromElement2", () => {
    const targetCert = new x500.TargetCert(
        new x500.IssuerSerial(
            [
                new asn1.DERElement(),
            ],
            new Uint8Array(),
            [],
        ),
        // new asn1.DERElement(),
        new x500.ObjectDigestInfo(
            x500.DigestedObjectType.publicKeyCert,
            new asn1.ObjectIdentifier([ 1, 2, 3 ]),
            new x500.AlgorithmIdentifier(
                new asn1.ObjectIdentifier([ 0, 5, 6 ]),
            ),
            [],
        ),
    );
    test("actually works", () => {
        const el = targetCert.toElement();
        expect(() => {
            x500.TargetCert.fromElement2(el);
            // x509.CertificateList.fromBytes(crl.toBytes())
        }).not.toThrow();

        const tc = x500.TargetCert.fromElement2(el);
        expect(tc.certDigestInfo.otherObjectTypeID.nodes).toEqual([1, 2, 3]);
    });
});
