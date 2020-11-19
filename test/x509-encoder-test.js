const asn1 = require("asn1-ts");
const fs = require("fs");
const { SIGNED } = require("../dist/node/modules/AuthenticationFramework/SIGNED.ta");
const { _encode_Certificate } = require("../dist/node/modules/AuthenticationFramework/Certificate.ta");
const { TBSCertificate } = require("../dist/node/modules/AuthenticationFramework/TBSCertificate.ta");
const { Version_v1 } = require("../dist/node/modules/AuthenticationFramework/Version.ta");
const { AlgorithmIdentifier } = require("../dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta");
const { Validity } = require("../dist/node/modules/AuthenticationFramework/Validity.ta");
const { SubjectPublicKeyInfo } = require("../dist/node/modules/AuthenticationFramework/SubjectPublicKeyInfo.ta");
const { AttributeTypeAndValue } = require("../dist/node/modules/InformationFramework/AttributeTypeAndValue.ta");

const cert2 = new SIGNED(
    new TBSCertificate(
        Version_v1,
        new Uint8Array([ 1, 2, 3, 4, 5, 6, 7, 8 ]),
        new AlgorithmIdentifier(
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
                    new AttributeTypeAndValue(
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
        new Validity(
            { generalizedTime: new Date() },
            { generalizedTime: new Date() },
        ),
        {
            rdnSequence: [
                [
                    new AttributeTypeAndValue(
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
        new SubjectPublicKeyInfo(
            new AlgorithmIdentifier(
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
    new AlgorithmIdentifier(
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

fs.writeFileSync("./test/output.der", _encode_Certificate(cert2).toBytes());
