const asn1 = require("asn1-ts");
const x509 = require("../dist/node/index");
const fs = require("fs");
const AuthenticationFramework = x509.AuthenticationFramework;
const InformationFramework = x509.InformationFramework;

// CertificateList ::= SIGNED{CertificateListContent}

// CertificateListContent ::= SEQUENCE {
//   version              Version OPTIONAL,
//   -- if present, version shall be v2
//   signature            AlgorithmIdentifier{{SupportedAlgorithms}},
//   issuer               Name,
//   thisUpdate           Time,
//   nextUpdate           Time OPTIONAL,
//   revokedCertificates  SEQUENCE OF SEQUENCE {
//     serialNumber         CertificateSerialNumber,
//     revocationDate       Time,
//     crlEntryExtensions   Extensions OPTIONAL,
//     ...} OPTIONAL,
//   ...,
//   ...,
//   crlExtensions   [0]  Extensions OPTIONAL }

const crl = new AuthenticationFramework.SIGNED(
    new AuthenticationFramework.CertificateListContent(
        AuthenticationFramework.Version_v1,
        new AuthenticationFramework.AlgorithmIdentifier(
            new asn1.ObjectIdentifier([ 1, 2, 840, 113549, 1, 1, 11 ]),
            new asn1.DERElement(
                asn1.ASN1TagClass.universal,
                asn1.ASN1Construction.primitive,
                asn1.ASN1UniversalType.nill,
                null,
            ),
        ),
        {
            rdnSequence: [
                [
                    new InformationFramework.AttributeTypeAndValue(
                        new asn1.ObjectIdentifier([ 2, 5, 4, 3 ]),
                        new asn1.DERElement(
                            asn1.ASN1TagClass.universal,
                            asn1.ASN1Construction.primitive,
                            asn1.ASN1UniversalType.printableString,
                            "bigboi",
                        ),
                    ),
                ],
            ],
        },
        { generalizedTime: new Date() },
        { generalizedTime: new Date() },
        [
            new AuthenticationFramework.CertificateListContent_revokedCertificates_Item(
                new Uint8Array([ 0x01, 0x02, 0x03, 0x04 ]),
                { generalizedTime: new Date() },
                [],
            ),
        ],
        [],
        [],
    ),
    new AuthenticationFramework.AlgorithmIdentifier(
        new asn1.ObjectIdentifier([ 1, 2, 840, 113549, 1, 1, 11 ]),
        new asn1.DERElement(
            asn1.ASN1TagClass.universal,
            asn1.ASN1Construction.primitive,
            asn1.ASN1UniversalType.nill,
            null,
        ),
    ),
    new Uint8ClampedArray([ 1, 0, 1, 0, 1, 0, 1, 0 ]),
);

fs.writeFileSync("./test/crl.der", AuthenticationFramework._encode_CertificateList(crl).toBytes());
