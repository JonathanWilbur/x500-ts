/*
    BEGIN_MODULE AlgorithmObjectIdentifiers
    OID: joint-iso-itu-t.ds.module.algorithmObjectIdentifiers.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import { algorithm } from "./UsefulDefinitions";
import * as __utils from "./__utils";
export {
    ALGORITHM,
    AlgorithmIdentifier,
    SupportedAlgorithms,
    SupportedCurves,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "./AuthenticationFramework";
export { algorithm, authenticationFramework } from "./UsefulDefinitions";

export type ID = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_ID = __utils._decodeObjectIdentifier;
export const _encode_ID = __utils._encodeObjectIdentifier;

export const nullAlgorithm: ID = new asn1.ObjectIdentifier([0], algorithm);

export const encryptionAlgorithm: ID = new asn1.ObjectIdentifier(
    [1],
    algorithm
);

export const id_ea: ID = encryptionAlgorithm;

export const hashAlgorithm: ID = new asn1.ObjectIdentifier([2], algorithm);

export const id_ha: ID = hashAlgorithm;

export const signatureAlgorithm: ID = new asn1.ObjectIdentifier([3], algorithm);

export const id_sa: ID = signatureAlgorithm;

export const id_ea_rsa: ID = new asn1.ObjectIdentifier([1], id_ea);

export const id_ha_sqMod_n: ID = new asn1.ObjectIdentifier([1], id_ha);

export const id_sa_sqMod_nWithRSA: ID = new asn1.ObjectIdentifier([1], id_sa);

export const us_iso: ID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
]);

export const ansi_x9_57: ID = new asn1.ObjectIdentifier(
    [/* ansi-x9-57 */ 10040],
    us_iso
);

export const ansi_x9_62: ID = new asn1.ObjectIdentifier(
    [/* ansi-x962 */ 10045],
    us_iso
);

export const ansi_x9_42: ID = new asn1.ObjectIdentifier(
    [/* ansi-x942 */ 10046],
    us_iso
);

export const iso_standard: ID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* standard */ 0,
]);

export const iso9797: ID = new asn1.ObjectIdentifier(
    [/* message-authentication-codes */ 9797],
    iso_standard
);

export const iso_organization: ID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
]);

export const certicom: ID = new asn1.ObjectIdentifier(
    [/* certicom */ 132],
    iso_organization
);

export const certicom_curve: ID = new asn1.ObjectIdentifier(
    [/* curve */ 0],
    certicom
);

export const teletrust: ID = new asn1.ObjectIdentifier(
    [/* teletrust */ 36],
    iso_organization
);

export const ecStdCurvesAndGen: ID = new asn1.ObjectIdentifier(
    [/* algorithm */ 3, /* signaturealgorithm */ 3, /* ecSign */ 2, 8],
    teletrust
);

export const versionOne: ID = new asn1.ObjectIdentifier(
    [/* ellipticCurve */ 1, /* versionOne */ 1],
    ecStdCurvesAndGen
);

export const us_joint: ID = new asn1.ObjectIdentifier([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
]);

export const usgov: ID = new asn1.ObjectIdentifier(
    [/* organization */ 1, /* gov */ 101],
    us_joint
);

export const dodAlgorithms: ID = new asn1.ObjectIdentifier(
    [/* dod */ 2, /* infosec */ 1, /* algorithms */ 1],
    usgov
);

export const csor: ID = new asn1.ObjectIdentifier([/* csor */ 3], usgov);

export const nistAlgorithms: ID = new asn1.ObjectIdentifier(
    [/* nistAlgorithm */ 4],
    csor
);

export const aes: ID = new asn1.ObjectIdentifier([1], nistAlgorithms);

export const hashAlgs: ID = new asn1.ObjectIdentifier([2], nistAlgorithms);

export const sigAlgs: ID = new asn1.ObjectIdentifier([3], nistAlgorithms);

export const rsadsi: ID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
]);

export const pkcs_1: ID = new asn1.ObjectIdentifier(
    [/* pkcs */ 1, /* pkcs-1 */ 1],
    rsadsi
);

export const digestAlgorithm: ID = new asn1.ObjectIdentifier(
    [/* digestAlgorithm */ 2],
    rsadsi
);

export const id_aes128_CBC: ID = new asn1.ObjectIdentifier([2], aes);

export const id_aes192_CBC: ID = new asn1.ObjectIdentifier([22], aes);

export const id_aes256_CBC: ID = new asn1.ObjectIdentifier([42], aes);

export const id_aes128_wrap: ID = new asn1.ObjectIdentifier([5], aes);

export const id_aes192_wrap: ID = new asn1.ObjectIdentifier([25], aes);

export const id_aes256_wrap: ID = new asn1.ObjectIdentifier([45], aes);

export const rsaEncryption: ID = new asn1.ObjectIdentifier(
    [/* rsaEncryption */ 1],
    pkcs_1
);

export const id_keyExchangeAlgorithm: ID = new asn1.ObjectIdentifier(
    [/* id-keyExchangeAlgorithm */ 22],
    dodAlgorithms
);

export const id_dsa: ID = new asn1.ObjectIdentifier(
    [/* x9algorithm */ 4, 1],
    ansi_x9_57
);

export const id_ecPublicKey: ID = new asn1.ObjectIdentifier(
    [/* keyType */ 2, 1],
    ansi_x9_62
);

export const id_ecDH: ID = new asn1.ObjectIdentifier(
    [/* schemes */ 1, /* ecdh */ 12],
    certicom
);

export const id_ecMQV: ID = new asn1.ObjectIdentifier(
    [/* schemes */ 1, /* ecmqv */ 13],
    certicom
);

export const dh_public_number: ID = new asn1.ObjectIdentifier(
    [/* number-type */ 2, /* dh-public-number */ 1],
    ansi_x9_42
);

export const id_sha1: ID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithms */ 2,
    26,
]);

export const id_sha256: ID = new asn1.ObjectIdentifier([1], hashAlgs);

export const id_sha384: ID = new asn1.ObjectIdentifier([2], hashAlgs);

export const id_sha512: ID = new asn1.ObjectIdentifier([3], hashAlgs);

export const id_sha224: ID = new asn1.ObjectIdentifier([4], hashAlgs);

export const id_sha512_224: ID = new asn1.ObjectIdentifier([5], hashAlgs);

export const id_sha512_256: ID = new asn1.ObjectIdentifier([6], hashAlgs);

export const hashAlg: ID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* private */ 4,
    /* enterprise */ 1,
    /* kudelski */ 1722,
    /* cryptography */ 12,
    2,
]);

export const sha1WithRSAEncryption: ID = new asn1.ObjectIdentifier(
    [/* sha1WithRSAEncryption */ 5],
    pkcs_1
);

export const sha256WithRSAEncryption: ID = new asn1.ObjectIdentifier(
    [/* sha256WithRSAEncryption */ 11],
    pkcs_1
);

export const sha384WithRSAEncryption: ID = new asn1.ObjectIdentifier(
    [/* sha384WithRSAEncryption */ 12],
    pkcs_1
);

export const sha512WithRSAEncryption: ID = new asn1.ObjectIdentifier(
    [/* sha512WithRSAEncryption */ 13],
    pkcs_1
);

export const sha224WithRSAEncryption: ID = new asn1.ObjectIdentifier(
    [/* sha224WithRSAEncryption */ 14],
    pkcs_1
);

export const id_RSASSA_PSS: ID = new asn1.ObjectIdentifier([10], pkcs_1);

export const id_mgf1: ID = new asn1.ObjectIdentifier([8], pkcs_1);

export const id_dsa_with_sha1: ID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* x9-57 */ 10040,
    /* x9algorithm */ 4,
    /* dsa-with-sha1 */ 3,
]);

export const id_dsa_with_sha224: ID = new asn1.ObjectIdentifier([1], sigAlgs);

export const id_dsa_with_sha256: ID = new asn1.ObjectIdentifier([2], sigAlgs);

export const ecdsa_with_SHA224: ID = new asn1.ObjectIdentifier(
    [/* signatures */ 4, /* ecdsa-with-SHA2 */ 3, 1],
    ansi_x9_62
);

export const ecdsa_with_SHA256: ID = new asn1.ObjectIdentifier(
    [/* signatures */ 4, /* ecdsa-with-SHA2 */ 3, 2],
    ansi_x9_62
);

export const ecdsa_with_SHA384: ID = new asn1.ObjectIdentifier(
    [/* signatures */ 4, /* ecdsa-with-SHA2 */ 3, 3],
    ansi_x9_62
);

export const ecdsa_with_SHA512: ID = new asn1.ObjectIdentifier(
    [/* signatures */ 4, /* ecdsa-with-SHA2 */ 3, 4],
    ansi_x9_62
);

export const secp192r1: ID = new asn1.ObjectIdentifier(
    [/* curves */ 3, /* prime */ 1, 1],
    ansi_x9_62
);

export const sect163k1: ID = new asn1.ObjectIdentifier([1], certicom_curve);

export const sect163r2: ID = new asn1.ObjectIdentifier([15], certicom_curve);

export const secp224r1: ID = new asn1.ObjectIdentifier([33], certicom_curve);

export const sect233k1: ID = new asn1.ObjectIdentifier([26], certicom_curve);

export const sect233r1: ID = new asn1.ObjectIdentifier([27], certicom_curve);

export const secp256r1: ID = new asn1.ObjectIdentifier(
    [/* curves */ 3, /* prime */ 1, 7],
    ansi_x9_62
);

export const sect283k1: ID = new asn1.ObjectIdentifier([16], certicom_curve);

export const sect283r1: ID = new asn1.ObjectIdentifier([17], certicom_curve);

export const secp384r1: ID = new asn1.ObjectIdentifier([34], certicom_curve);

export const sect409k1: ID = new asn1.ObjectIdentifier([36], certicom_curve);

export const sect409r1: ID = new asn1.ObjectIdentifier([37], certicom_curve);

export const secp521r1: ID = new asn1.ObjectIdentifier([35], certicom_curve);

export const sect571k1: ID = new asn1.ObjectIdentifier([38], certicom_curve);

export const sect571r1: ID = new asn1.ObjectIdentifier([39], certicom_curve);

export const brainpoolP160r1: ID = new asn1.ObjectIdentifier([1], versionOne);

export const brainpoolP160t1: ID = new asn1.ObjectIdentifier([2], versionOne);

export const brainpoolP192r1: ID = new asn1.ObjectIdentifier([3], versionOne);

export const brainpoolP192t1: ID = new asn1.ObjectIdentifier([4], versionOne);

export const brainpoolP224r1: ID = new asn1.ObjectIdentifier([5], versionOne);

export const brainpoolP224t1: ID = new asn1.ObjectIdentifier([6], versionOne);

export const brainpoolP256r1: ID = new asn1.ObjectIdentifier([7], versionOne);

export const brainpoolP256t1: ID = new asn1.ObjectIdentifier([8], versionOne);

export const brainpoolP320r1: ID = new asn1.ObjectIdentifier([9], versionOne);

export const brainpoolP320t1: ID = new asn1.ObjectIdentifier([10], versionOne);

export const brainpoolP384r1: ID = new asn1.ObjectIdentifier([11], versionOne);

export const brainpoolP384t1: ID = new asn1.ObjectIdentifier([12], versionOne);

export const brainpoolP512r1: ID = new asn1.ObjectIdentifier([13], versionOne);

export const brainpoolP512t1: ID = new asn1.ObjectIdentifier([14], versionOne);

export type X509Curves = asn1.OBJECT_IDENTIFIER; /* VALUE_SET_ASSIGNMENT */

export const id_hmacWithSHA224: ID = new asn1.ObjectIdentifier(
    [8],
    digestAlgorithm
);

export const id_hmacWithSHA256: ID = new asn1.ObjectIdentifier(
    [9],
    digestAlgorithm
);

export const id_hmacWithSHA384: ID = new asn1.ObjectIdentifier(
    [10],
    digestAlgorithm
);

export const id_hmacWithSHA512: ID = new asn1.ObjectIdentifier(
    [11],
    digestAlgorithm
);

export const id_gmac: ID = new asn1.ObjectIdentifier(
    [/* part3 */ 3, /* gmac */ 4],
    iso9797
);

// TODO: ObjectAssignment: mD5Algorithm

// TODO: ObjectAssignment: sha1Algorithm

// TODO: ObjectAssignment: sha224

// TODO: ObjectAssignment: sha256

// TODO: ObjectAssignment: sha384

// TODO: ObjectAssignment: sha512

// TODO: ObjectSetAssignment: HashAlgorithms

// TODO: ObjectAssignment: aes128-CBC

// TODO: ObjectAssignment: aes192-CBC

// TODO: ObjectAssignment: aes256-CBC

export type AES_InitializationVector = asn1.OCTET_STRING; // OctetStringType
export const _decode_AES_InitializationVector = __utils._decodeOctetString;
export const _encode_AES_InitializationVector = __utils._encodeOctetString;

// TODO: ObjectAssignment: rsaEncryptionAlgorithm

// TODO: ObjectAssignment: keyExchangeAlgorithm

export type KEA_Parms_Id = asn1.OCTET_STRING; // OctetStringType
export const _decode_KEA_Parms_Id = __utils._decodeOctetString;
export const _encode_KEA_Parms_Id = __utils._encodeOctetString;

// TODO: ObjectAssignment: dsa

export class DSS_Parms {
    constructor(
        readonly p: asn1.INTEGER,
        readonly q: asn1.INTEGER,
        readonly g: asn1.INTEGER,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DSS_Parms: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "p",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "q",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "g",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DSS_Parms: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DSS_Parms: __utils.ComponentSpec[] = [];
export const _decode_DSS_Parms = function (el: asn1.ASN1Element): DSS_Parms {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError(
            "DSS-Parms contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "p";
    sequence[1].name = "q";
    sequence[2].name = "g";
    let p!: asn1.INTEGER;
    let q!: asn1.INTEGER;
    let g!: asn1.INTEGER;
    p = __utils._decodeInteger(sequence[0]);
    q = __utils._decodeInteger(sequence[1]);
    g = __utils._decodeInteger(sequence[2]);
    // TODO: Validate values.
    return new DSS_Parms(p, q, g, sequence.slice(3));
};
export const _encode_DSS_Parms = function (
    value: DSS_Parms,
    elGetter: __utils.ASN1Encoder<DSS_Parms>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    __utils._encodeInteger(value.p, __utils.BER),
                    __utils._encodeInteger(value.q, __utils.BER),
                    __utils._encodeInteger(value.g, __utils.BER),
                ],
                value._unrecognizedExtensionsList
                    ? value._unrecognizedExtensionsList
                    : []
            )
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: ecPublicKey

// TODO: ObjectAssignment: ecDH

// TODO: ObjectAssignment: ecMQV

// TODO: ObjectAssignment: dh-public-numberAlgorithm

export class ValidationParms {
    constructor(
        readonly seed: asn1.BIT_STRING,
        readonly pgenCounter: asn1.INTEGER,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ValidationParms: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "seed",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pgenCounter",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ValidationParms: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ValidationParms: __utils.ComponentSpec[] = [];
export const _decode_ValidationParms = function (
    el: asn1.ASN1Element
): ValidationParms {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "ValidationParms contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "seed";
    sequence[1].name = "pgenCounter";
    let seed!: asn1.BIT_STRING;
    let pgenCounter!: asn1.INTEGER;
    seed = __utils._decodeBitString(sequence[0]);
    pgenCounter = __utils._decodeInteger(sequence[1]);
    // TODO: Validate values.
    return new ValidationParms(seed, pgenCounter, sequence.slice(2));
};
export const _encode_ValidationParms = function (
    value: ValidationParms,
    elGetter: __utils.ASN1Encoder<ValidationParms>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    __utils._encodeBitString(value.seed, __utils.BER),
                    __utils._encodeInteger(value.pgenCounter, __utils.BER),
                ],
                value._unrecognizedExtensionsList
                    ? value._unrecognizedExtensionsList
                    : []
            )
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class DomainParameters {
    constructor(
        readonly p: asn1.INTEGER,
        readonly g: asn1.INTEGER,
        readonly q: asn1.INTEGER,
        readonly j: asn1.INTEGER | undefined,
        readonly validationParms: ValidationParms | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DomainParameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "p",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "g",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "q",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "j",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "validationParms",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DomainParameters: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DomainParameters: __utils.ComponentSpec[] = [];
export const _decode_DomainParameters = function (
    el: asn1.ASN1Element
): DomainParameters {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let p!: asn1.INTEGER;
    let g!: asn1.INTEGER;
    let q!: asn1.INTEGER;
    let j: asn1.OPTIONAL<asn1.INTEGER>;
    let validationParms: asn1.OPTIONAL<ValidationParms>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        p: (_el: asn1.ASN1Element): void => {
            p = __utils._decodeInteger(_el);
        },
        g: (_el: asn1.ASN1Element): void => {
            g = __utils._decodeInteger(_el);
        },
        q: (_el: asn1.ASN1Element): void => {
            q = __utils._decodeInteger(_el);
        },
        j: (_el: asn1.ASN1Element): void => {
            j = __utils._decodeInteger(_el);
        },
        validationParms: (_el: asn1.ASN1Element): void => {
            validationParms = _decode_ValidationParms(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_DomainParameters,
        _extension_additions_list_spec_for_DomainParameters,
        _root_component_type_list_2_spec_for_DomainParameters,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new DomainParameters /* SEQUENCE_CONSTRUCTOR_CALL */(
        p,
        g,
        q,
        j,
        validationParms,
        _unrecognizedExtensionsList
    );
};
export const _encode_DomainParameters = function (
    value: DomainParameters,
    elGetter: __utils.ASN1Encoder<DomainParameters>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    __utils._encodeInteger(value.p, __utils.BER),
                    __utils._encodeInteger(value.g, __utils.BER),
                    __utils._encodeInteger(value.q, __utils.BER),
                    value.j
                        ? __utils._encodeInteger(value.j, __utils.BER)
                        : undefined,
                    value.validationParms
                        ? _encode_ValidationParms(
                              value.validationParms,
                              __utils.BER
                          )
                        : undefined,
                ],
                value._unrecognizedExtensionsList
                    ? value._unrecognizedExtensionsList
                    : []
            )
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: sha1WithRSAEncryptionAlgorithm

// TODO: ObjectAssignment: sha224WithRSAEncryptionAlgorithm

// TODO: ObjectAssignment: sha256WithRSAEncryptionAlgorithm

// TODO: ObjectAssignment: sha384WithRSAEncryptionAlgorithm

// TODO: ObjectAssignment: sha512WithRSAEncryptionAlgorithm

// TODO: ObjectAssignment: rSASSA-PSS

// TODO: ObjectAssignment: dsa-with-sha224

// TODO: ObjectAssignment: dsa-with-sha256

// TODO: ObjectAssignment: ecdsa-with-SHA224-Algorithm

// TODO: ObjectAssignment: ecdsa-with-SHA256-Algorithm

// TODO: ObjectAssignment: ecdsa-with-SHA384-Algorithm

// TODO: ObjectAssignment: ecdsa-with-SHA512-Algorithm

// TODO: ObjectAssignment: hmacWithSHA224

// TODO: ObjectAssignment: hmacWithSHA256

// TODO: ObjectAssignment: hmacWithSHA384

// TODO: ObjectAssignment: hmacWithSHA512

/* END_MODULE AlgorithmObjectIdentifiers */
