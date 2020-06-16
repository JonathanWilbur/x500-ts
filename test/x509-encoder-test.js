const asn1 = require("asn1-ts");
const x509 = require("../dist/node/index");
const fs = require("fs");
const AuthenticationFramework = x509.AuthenticationFramework;
const InformationFramework = x509.InformationFramework;

const cert2 = new AuthenticationFramework.SIGNED(
    new AuthenticationFramework.TBSCertificate(
        AuthenticationFramework.Version_v1,
        new Uint8Array([ 1, 2, 3, 4, 5, 6, 7, 8 ]),
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
        new AuthenticationFramework.Validity(
            { generalizedTime: new Date() },
            { generalizedTime: new Date() },
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
                            "lilboi",
                        ),
                    ),
                ],
            ],
        },
        new AuthenticationFramework.SubjectPublicKeyInfo(
            new AuthenticationFramework.AlgorithmIdentifier(
                new asn1.ObjectIdentifier([ 1, 2, 840, 113549, 1, 1, 1 ]),
                new asn1.DERElement(
                    asn1.ASN1TagClass.universal,
                    asn1.ASN1Construction.primitive,
                    asn1.ASN1UniversalType.nill,
                    null,
                ),
            ),
            asn1.unpackBits((asn1.DERElement.fromSequence([
                new asn1.DERElement(
                    asn1.ASN1TagClass.universal,
                    asn1.ASN1Construction.primitive,
                    asn1.ASN1UniversalType.integer,
                    123456789,
                ),
                new asn1.DERElement(
                    asn1.ASN1TagClass.universal,
                    asn1.ASN1Construction.primitive,
                    asn1.ASN1UniversalType.integer,
                    65537,
                ),
            ])).toBytes()),
        ),
        undefined,
        undefined,
        undefined,
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

fs.writeFileSync("./test/output.der", AuthenticationFramework._encode_Certificate(cert2).toBytes());
