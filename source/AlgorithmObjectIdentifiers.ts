/**
 * @module AlgorithmObjectIdentifiers
 * @summary The ASN.1 module `AlgorithmObjectIdentifiers`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.algorithmObjectIdentifiers.9
 * IRI: undefined
 * EXTENSIBLE: false
 * ENCODINGREF: undefined
 * FILE: undefined
 *
 * This file was compiled by Wildboar Software's ASN.1 Compiler.
 *
 * @see {@link https://wildboarsoftware.com|Wildboar Software's Website}
 * /


/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    INTEGER,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ALGORITHM,
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "./AuthenticationFramework";
import { algorithm } from "./UsefulDefinitions";
export {
    ALGORITHM,
    AlgorithmIdentifier,
    SupportedAlgorithms,
    SupportedCurves,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "./AuthenticationFramework";
export { algorithm } from "./UsefulDefinitions";

export type ID<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_ID: $.ASN1Decoder<ID> | null = null;
let _cached_encoder_for_ID: $.ASN1Encoder<ID> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ID} The decoded data structure.
 */
export function _decode_ID(el: _Element) {
    if (!_cached_decoder_for_ID) {
        _cached_decoder_for_ID = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_ID(el);
}
/**
 * @summary Encodes a(n) ID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ID, encoded as an ASN.1 Element.
 */
export function _encode_ID(value: ID, elGetter: $.ASN1Encoder<ID>) {
    if (!_cached_encoder_for_ID) {
        _cached_encoder_for_ID = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_ID(value, elGetter);
}

/**
 * @summary nullAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nullAlgorithm           ID ::= {algorithm 0}
 * ```
 *
 * @constant
 */
export const nullAlgorithm: ID = new _OID([0], algorithm);

/**
 * @summary encryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * encryptionAlgorithm     ID ::= {algorithm 1}
 * ```
 *
 * @constant
 */
export const encryptionAlgorithm: ID = new _OID([1], algorithm);

/**
 * @summary id_ea
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ea                   ID ::= encryptionAlgorithm
 * ```
 *
 * @constant
 */
export const id_ea: ID = encryptionAlgorithm;

/**
 * @summary id_ea_rsa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ea-rsa               ID ::= {id-ea 1}
 * ```
 *
 * @constant
 */
export const id_ea_rsa: ID = new _OID([1], id_ea);

/**
 * @summary hashAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hashAlgorithm           ID ::= {algorithm 2}
 * ```
 *
 * @constant
 */
export const hashAlgorithm: ID = new _OID([2], algorithm);

/**
 * @summary id_ha
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ha                   ID ::= hashAlgorithm
 * ```
 *
 * @constant
 */
export const id_ha: ID = hashAlgorithm;

/**
 * @summary id_ha_sqMod_n
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ha-sqMod-n           ID ::= {id-ha 1}
 * ```
 *
 * @constant
 */
export const id_ha_sqMod_n: ID = new _OID([1], id_ha);

/**
 * @summary signatureAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signatureAlgorithm      ID ::= {algorithm 3}
 * ```
 *
 * @constant
 */
export const signatureAlgorithm: ID = new _OID([3], algorithm);

/**
 * @summary id_sa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sa                   ID ::= signatureAlgorithm
 * ```
 *
 * @constant
 */
export const id_sa: ID = signatureAlgorithm;

/**
 * @summary id_sa_sqMod_nWithRSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sa-sqMod-nWithRSA    ID ::= {id-sa 1}
 * ```
 *
 * @constant
 */
export const id_sa_sqMod_nWithRSA: ID = new _OID([1], id_sa);

/**
 * @summary us_joint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * us-joint                ID ::= { joint-iso-itu-t(2) country(16) us(840) }
 * ```
 *
 * @constant
 */
export const us_joint: ID = new _OID([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
]);

/**
 * @summary usgov
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * usgov                   ID ::= { us-joint organization(1) gov(101) }
 * ```
 *
 * @constant
 */
export const usgov: ID = new _OID(
    [/* organization */ 1, /* gov */ 101],
    us_joint
);

/**
 * @summary csor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * csor                    ID ::= { usgov csor(3) }
 * ```
 *
 * @constant
 */
export const csor: ID = new _OID([/* csor */ 3], usgov);

/**
 * @summary nistAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nistAlgorithms          ID ::= { csor nistAlgorithm(4) }
 * ```
 *
 * @constant
 */
export const nistAlgorithms: ID = new _OID([/* nistAlgorithm */ 4], csor);

/**
 * @summary aes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes                     ID ::= { nistAlgorithms 1 }
 * ```
 *
 * @constant
 */
export const aes: ID = new _OID([1], nistAlgorithms);

/**
 * @summary id_aes128_wrap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes128-wrap          ID ::= { aes 5 }
 * ```
 *
 * @constant
 */
export const id_aes128_wrap: ID = new _OID([5], aes);

/**
 * @summary id_aes192_wrap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes192-wrap          ID ::= { aes 25 }
 * ```
 *
 * @constant
 */
export const id_aes192_wrap: ID = new _OID([25], aes);

/**
 * @summary id_aes256_wrap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes256-wrap          ID ::= { aes 45 }
 * ```
 *
 * @constant
 */
export const id_aes256_wrap: ID = new _OID([45], aes);

/**
 * @summary hashAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hashAlg                 ID ::= {  iso(1) identified-organization(3) dod(6) internet(1)
 *                                   private(4) enterprise(1) kudelski(1722)
 *                                   cryptography(12) 2 }
 * ```
 *
 * @constant
 */
export const hashAlg: ID = new _OID([
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

/**
 * @summary rsadsi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rsadsi                  ID ::= { iso(1) member-body(2) us(840) rsadsi(113549) }
 * ```
 *
 * @constant
 */
export const rsadsi: ID = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
]);

/**
 * @summary pkcs_1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-1                  ID ::= { rsadsi pkcs(1) pkcs-1(1) }
 * ```
 *
 * @constant
 */
export const pkcs_1: ID = new _OID([/* pkcs */ 1, /* pkcs-1 */ 1], rsadsi);

/**
 * @summary id_mgf1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mgf1                 ID ::= { pkcs-1 8 }
 * ```
 *
 * @constant
 */
export const id_mgf1: ID = new _OID([8], pkcs_1);

/**
 * @summary id_dsa_with_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dsa-with-sha1        ID ::= {iso(1) member-body(2) us(840) x9-57(10040) x9algorithm(4)
 *                                 dsa-with-sha1(3)}
 * ```
 *
 * @constant
 */
export const id_dsa_with_sha1: ID = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* x9-57 */ 10040,
    /* x9algorithm */ 4,
    /* dsa-with-sha1 */ 3,
]);

/**
 * @summary us_iso
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * us-iso                  ID ::= { iso(1) member-body(2) us(840) }
 * ```
 *
 * @constant
 */
export const us_iso: ID = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
]);

/**
 * @summary ansi_x9_62
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansi-x9-62              ID ::= { us-iso ansi-x962(10045) }
 * ```
 *
 * @constant
 */
export const ansi_x9_62: ID = new _OID([/* ansi-x962 */ 10045], us_iso);

/**
 * @summary secp192r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secp192r1       ID ::= { ansi-x9-62 curves(3) prime(1) 1 }
 * ```
 *
 * @constant
 */
export const secp192r1: ID = new _OID(
    [/* curves */ 3, /* prime */ 1, 1],
    ansi_x9_62
);

/**
 * @summary iso_organization
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iso-organization        ID ::= { iso(1) identified-organization(3) }
 * ```
 *
 * @constant
 */
export const iso_organization: ID = new _OID([
    /* iso */ 1,
    /* identified-organization */ 3,
]);

/**
 * @summary certicom
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certicom                ID ::= { iso-organization certicom(132) }
 * ```
 *
 * @constant
 */
export const certicom: ID = new _OID([/* certicom */ 132], iso_organization);

/**
 * @summary certicom_curve
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certicom-curve          ID ::= { certicom curve(0) }
 * ```
 *
 * @constant
 */
export const certicom_curve: ID = new _OID([/* curve */ 0], certicom);

/**
 * @summary sect163k1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect163k1       ID ::= { certicom-curve 1 }
 * ```
 *
 * @constant
 */
export const sect163k1: ID = new _OID([1], certicom_curve);

/**
 * @summary sect163r2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect163r2       ID ::= { certicom-curve 15 }
 * ```
 *
 * @constant
 */
export const sect163r2: ID = new _OID([15], certicom_curve);

/**
 * @summary secp224r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secp224r1       ID ::= { certicom-curve 33 }
 * ```
 *
 * @constant
 */
export const secp224r1: ID = new _OID([33], certicom_curve);

/**
 * @summary sect233k1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect233k1       ID ::= { certicom-curve 26 }
 * ```
 *
 * @constant
 */
export const sect233k1: ID = new _OID([26], certicom_curve);

/**
 * @summary sect233r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect233r1       ID ::= { certicom-curve 27 }
 * ```
 *
 * @constant
 */
export const sect233r1: ID = new _OID([27], certicom_curve);

/**
 * @summary secp256r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secp256r1       ID ::= { ansi-x9-62 curves(3) prime(1) 7 }
 * ```
 *
 * @constant
 */
export const secp256r1: ID = new _OID(
    [/* curves */ 3, /* prime */ 1, 7],
    ansi_x9_62
);

/**
 * @summary sect283k1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect283k1       ID ::= { certicom-curve 16 }
 * ```
 *
 * @constant
 */
export const sect283k1: ID = new _OID([16], certicom_curve);

/**
 * @summary sect283r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect283r1       ID ::= { certicom-curve 17 }
 * ```
 *
 * @constant
 */
export const sect283r1: ID = new _OID([17], certicom_curve);

/**
 * @summary secp384r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secp384r1       ID ::= { certicom-curve 34 }
 * ```
 *
 * @constant
 */
export const secp384r1: ID = new _OID([34], certicom_curve);

/**
 * @summary sect409k1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect409k1       ID ::= { certicom-curve 36 }
 * ```
 *
 * @constant
 */
export const sect409k1: ID = new _OID([36], certicom_curve);

/**
 * @summary sect409r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect409r1       ID ::= { certicom-curve 37 }
 * ```
 *
 * @constant
 */
export const sect409r1: ID = new _OID([37], certicom_curve);

/**
 * @summary secp521r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secp521r1       ID ::= { certicom-curve 35 }
 * ```
 *
 * @constant
 */
export const secp521r1: ID = new _OID([35], certicom_curve);

/**
 * @summary sect571k1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect571k1       ID ::= { certicom-curve 38 }
 * ```
 *
 * @constant
 */
export const sect571k1: ID = new _OID([38], certicom_curve);

/**
 * @summary sect571r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect571r1       ID ::= { certicom-curve 39 }
 * ```
 *
 * @constant
 */
export const sect571r1: ID = new _OID([39], certicom_curve);

/**
 * @summary teletrust
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletrust               ID ::= { iso-organization teletrust(36) }
 * ```
 *
 * @constant
 */
export const teletrust: ID = new _OID([/* teletrust */ 36], iso_organization);

/**
 * @summary ecStdCurvesAndGen
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecStdCurvesAndGen       ID ::= { teletrust algorithm(3) signature-algorithm(3) ecSign(2) 8}
 * ```
 *
 * @constant
 */
export const ecStdCurvesAndGen: ID = new _OID(
    [/* algorithm */ 3, /* signature-algorithm */ 3, /* ecSign */ 2, 8],
    teletrust
);

/**
 * @summary versionOne
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * versionOne              ID ::= { ecStdCurvesAndGen ellipticCurve(1) versionOne(1) }
 * ```
 *
 * @constant
 */
export const versionOne: ID = new _OID(
    [/* ellipticCurve */ 1, /* versionOne */ 1],
    ecStdCurvesAndGen
);

/**
 * @summary brainpoolP160r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP160r1 ID ::= { versionOne 1 }
 * ```
 *
 * @constant
 */
export const brainpoolP160r1: ID = new _OID([1], versionOne);

/**
 * @summary brainpoolP160t1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP160t1 ID ::= { versionOne 2 }
 * ```
 *
 * @constant
 */
export const brainpoolP160t1: ID = new _OID([2], versionOne);

/**
 * @summary brainpoolP192r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP192r1 ID ::= { versionOne 3 }
 * ```
 *
 * @constant
 */
export const brainpoolP192r1: ID = new _OID([3], versionOne);

/**
 * @summary brainpoolP192t1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP192t1 ID ::= { versionOne 4 }
 * ```
 *
 * @constant
 */
export const brainpoolP192t1: ID = new _OID([4], versionOne);

/**
 * @summary brainpoolP224r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP224r1 ID ::= { versionOne 5 }
 * ```
 *
 * @constant
 */
export const brainpoolP224r1: ID = new _OID([5], versionOne);

/**
 * @summary brainpoolP224t1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP224t1 ID ::= { versionOne 6 }
 * ```
 *
 * @constant
 */
export const brainpoolP224t1: ID = new _OID([6], versionOne);

/**
 * @summary brainpoolP256r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP256r1 ID ::= { versionOne 7 }
 * ```
 *
 * @constant
 */
export const brainpoolP256r1: ID = new _OID([7], versionOne);

/**
 * @summary brainpoolP256t1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP256t1 ID ::= { versionOne 8 }
 * ```
 *
 * @constant
 */
export const brainpoolP256t1: ID = new _OID([8], versionOne);

/**
 * @summary brainpoolP320r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP320r1 ID ::= { versionOne 9 }
 * ```
 *
 * @constant
 */
export const brainpoolP320r1: ID = new _OID([9], versionOne);

/**
 * @summary brainpoolP320t1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP320t1 ID ::= { versionOne 10 }
 * ```
 *
 * @constant
 */
export const brainpoolP320t1: ID = new _OID([10], versionOne);

/**
 * @summary brainpoolP384r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP384r1 ID ::= { versionOne 11 }
 * ```
 *
 * @constant
 */
export const brainpoolP384r1: ID = new _OID([11], versionOne);

/**
 * @summary brainpoolP384t1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP384t1 ID ::= { versionOne 12 }
 * ```
 *
 * @constant
 */
export const brainpoolP384t1: ID = new _OID([12], versionOne);

/**
 * @summary brainpoolP512r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP512r1 ID ::= { versionOne 13 }
 * ```
 *
 * @constant
 */
export const brainpoolP512r1: ID = new _OID([13], versionOne);

/**
 * @summary brainpoolP512t1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP512t1 ID ::= { versionOne 14 }
 * ```
 *
 * @constant
 */
export const brainpoolP512t1: ID = new _OID([14], versionOne);

/**
 * @summary iso_standard
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iso-standard            ID ::= { iso(1) standard(0) }
 * ```
 *
 * @constant
 */
export const iso_standard: ID = new _OID([/* iso */ 1, /* standard */ 0]);

/**
 * @summary iso9797
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iso9797                 ID ::= { iso-standard message-authentication-codes(9797) }
 * ```
 *
 * @constant
 */
export const iso9797: ID = new _OID(
    [/* message-authentication-codes */ 9797],
    iso_standard
);

/**
 * @summary id_gmac
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-gmac                 ID ::= { iso9797 part3(3) gmac(4) }
 * ```
 *
 * @constant
 */
export const id_gmac: ID = new _OID([/* part3 */ 3, /* gmac */ 4], iso9797);

/**
 * @summary mD5Algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mD5Algorithm ALGORITHM ::= {
 *   PARMS          NULL
 *   IDENTIFIED BY {iso(1) member-body(2) us(840) rsadsi(113549) digestAlgorithm(2) md5(5)}}
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const mD5Algorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": new _OID([
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* digestAlgorithm */ 2,
        /* md5 */ 5,
    ]) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary hashAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hashAlgs                ID ::= { nistAlgorithms hashalgs(2) }
 * ```
 *
 * @constant
 */
export const hashAlgs: ID = new _OID([/* hashalgs */ 2], nistAlgorithms);

/**
 * @summary id_sha512_224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha512-224           ID ::= { hashAlgs 5 }
 * ```
 *
 * @constant
 */
export const id_sha512_224: ID = new _OID([5], hashAlgs);

/**
 * @summary sha512_224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha512-224 ALGORITHM ::= {
 *   IDENTIFIED BY id-sha512-224 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha512_224: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha512_224 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_sha512_256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha512-256           ID ::= { hashAlgs 6 }
 * ```
 *
 * @constant
 */
export const id_sha512_256: ID = new _OID([6], hashAlgs);

/**
 * @summary sha512_256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha512-256 ALGORITHM ::= {
 *   IDENTIFIED BY id-sha512-256 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha512_256: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha512_256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_sha3_224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha3-224             ID ::= { hashAlgs 7 }
 * ```
 *
 * @constant
 */
export const id_sha3_224: ID = new _OID([7], hashAlgs);

/**
 * @summary sha3_224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha3-224 ALGORITHM ::= {
 *   IDENTIFIED BY id-sha3-224 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha3_224: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha3_224 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_sha3_256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha3-256             ID ::= { hashAlgs 8 }
 * ```
 *
 * @constant
 */
export const id_sha3_256: ID = new _OID([8], hashAlgs);

/**
 * @summary sha3_256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha3-256 ALGORITHM ::= {
 *   IDENTIFIED BY id-sha3-256 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha3_256: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha3_256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_sha3_384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha3-384             ID ::= { hashAlgs 9 }
 * ```
 *
 * @constant
 */
export const id_sha3_384: ID = new _OID([9], hashAlgs);

/**
 * @summary sha3_384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha3-384 ALGORITHM ::= {
 *   IDENTIFIED BY id-sha3-384 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha3_384: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha3_384 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_sha3_512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha3-512             ID ::= { hashAlgs 10 }
 * ```
 *
 * @constant
 */
export const id_sha3_512: ID = new _OID([10], hashAlgs);

/**
 * @summary sha3_512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha3-512 ALGORITHM ::= {
 *   IDENTIFIED BY id-sha3-512 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha3_512: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha3_512 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_shake128
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-shake128             ID ::= { hashAlgs 11 }
 * ```
 *
 * @constant
 */
export const id_shake128: ID = new _OID([11], hashAlgs);

/**
 * @summary shake128
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shake128 ALGORITHM ::= {
 *   IDENTIFIED BY id-shake128 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const shake128: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_shake128 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_shake256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-shake256             ID ::= { hashAlgs 12 }
 * ```
 *
 * @constant
 */
export const id_shake256: ID = new _OID([12], hashAlgs);

/**
 * @summary shake256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shake256 ALGORITHM ::= {
 *   IDENTIFIED BY id-shake256 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const shake256: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_shake256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ShakeOutputLen
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShakeOutputLen  ::=  INTEGER
 * ```
 */
export type ShakeOutputLen = INTEGER;
let _cached_decoder_for_ShakeOutputLen: $.ASN1Decoder<
    ShakeOutputLen
> | null = null;
let _cached_encoder_for_ShakeOutputLen: $.ASN1Encoder<
    ShakeOutputLen
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ShakeOutputLen
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShakeOutputLen} The decoded data structure.
 */
export function _decode_ShakeOutputLen(el: _Element) {
    if (!_cached_decoder_for_ShakeOutputLen) {
        _cached_decoder_for_ShakeOutputLen = $._decodeInteger;
    }
    return _cached_decoder_for_ShakeOutputLen(el);
}
/**
 * @summary Encodes a(n) ShakeOutputLen into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShakeOutputLen, encoded as an ASN.1 Element.
 */
export function _encode_ShakeOutputLen(
    value: ShakeOutputLen,
    elGetter: $.ASN1Encoder<ShakeOutputLen>
) {
    if (!_cached_encoder_for_ShakeOutputLen) {
        _cached_encoder_for_ShakeOutputLen = $._encodeInteger;
    }
    return _cached_encoder_for_ShakeOutputLen(value, elGetter);
}

/**
 * @summary id_shake128_len
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-shake128-len         ID ::= { hashAlgs 17 }
 * ```
 *
 * @constant
 */
export const id_shake128_len: ID = new _OID([17], hashAlgs);

/**
 * @summary shake128_len
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shake128-len ALGORITHM ::= {
 *   PARMS         ShakeOutputLen
 *   IDENTIFIED BY id-shake128-len }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const shake128_len: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_ShakeOutputLen,
    },
    encoderFor: {
        "&Type": _encode_ShakeOutputLen,
    },
    "&id": id_shake128_len /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_shake256_len
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-shake256-len         ID ::= { hashAlgs 18 }
 * ```
 *
 * @constant
 */
export const id_shake256_len: ID = new _OID([18], hashAlgs);

/**
 * @summary shake256_len
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shake256-len ALGORITHM ::= {
 *   PARMS         ShakeOutputLen
 *   IDENTIFIED BY id-shake256-len }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const shake256_len: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_ShakeOutputLen,
    },
    encoderFor: {
        "&Type": _encode_ShakeOutputLen,
    },
    "&id": id_shake256_len /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha1                 ID ::= {iso(1) identified-organization(3) oiw(14) secsig(3)
 *                                 algorithms(2) 26}
 * ```
 *
 * @constant
 */
export const id_sha1: ID = new _OID([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithms */ 2,
    26,
]);

/**
 * @summary sha1Algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha1Algorithm ALGORITHM ::= {
 *   PARMS          NULL
 *   IDENTIFIED BY id-sha1 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha1Algorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_sha1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_sha224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha224               ID ::= { hashAlgs 4 }
 * ```
 *
 * @constant
 */
export const id_sha224: ID = new _OID([4], hashAlgs);

/**
 * @summary sha224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha224 ALGORITHM ::= { -- IETF RFC 5754
 *   IDENTIFIED BY id-sha224 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha224: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha224 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_sha256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha256               ID ::= { hashAlgs 1 }
 * ```
 *
 * @constant
 */
export const id_sha256: ID = new _OID([1], hashAlgs);

/**
 * @summary sha256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha256 ALGORITHM ::= { -- IETF RFC 5754
 *   IDENTIFIED BY id-sha256 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha256: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_sha384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha384               ID ::= { hashAlgs 2 }
 * ```
 *
 * @constant
 */
export const id_sha384: ID = new _OID([2], hashAlgs);

/**
 * @summary sha384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha384 ALGORITHM ::= { -- IETF RFC 5754
 *   IDENTIFIED BY id-sha384 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha384: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha384 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_sha512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha512               ID ::= { hashAlgs 3 }
 * ```
 *
 * @constant
 */
export const id_sha512: ID = new _OID([3], hashAlgs);

/**
 * @summary sha512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha512 ALGORITHM ::= { -- IETF RFC 5754
 *   IDENTIFIED BY id-sha512 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha512: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_sha512 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary HashAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashAlgorithms ALGORITHM ::= {sha1Algorithm |
 *                               sha224 |
 *                               sha256 |
 *                               sha384 |
 *                               sha512 }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const HashAlgorithms: ALGORITHM[] = [
    sha1Algorithm,
    sha224,
    sha256,
    sha384,
    sha512,
];

export type AES_InitializationVector<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_AES_InitializationVector: $.ASN1Decoder<
    AES_InitializationVector
> | null = null;
let _cached_encoder_for_AES_InitializationVector: $.ASN1Encoder<
    AES_InitializationVector
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AES_InitializationVector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AES_InitializationVector} The decoded data structure.
 */
export function _decode_AES_InitializationVector(el: _Element) {
    if (!_cached_decoder_for_AES_InitializationVector) {
        _cached_decoder_for_AES_InitializationVector = $._decodeOctetString;
    }
    return _cached_decoder_for_AES_InitializationVector(el);
}
/**
 * @summary Encodes a(n) AES_InitializationVector into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AES_InitializationVector, encoded as an ASN.1 Element.
 */
export function _encode_AES_InitializationVector(
    value: AES_InitializationVector,
    elGetter: $.ASN1Encoder<AES_InitializationVector>
) {
    if (!_cached_encoder_for_AES_InitializationVector) {
        _cached_encoder_for_AES_InitializationVector = $._encodeOctetString;
    }
    return _cached_encoder_for_AES_InitializationVector(value, elGetter);
}

/**
 * @summary id_aes128_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes128-CBC           ID ::= { aes 2 }
 * ```
 *
 * @constant
 */
export const id_aes128_CBC: ID = new _OID([2], aes);

/**
 * @summary aes128_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes128-CBC ALGORITHM ::= {  -- CSOR
 *   PARMS         AES-InitializationVector
 *   IDENTIFIED BY id-aes128-CBC }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const aes128_CBC: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_AES_InitializationVector,
    },
    encoderFor: {
        "&Type": _encode_AES_InitializationVector,
    },
    "&id": id_aes128_CBC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_aes192_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes192-CBC           ID ::= { aes 22 }
 * ```
 *
 * @constant
 */
export const id_aes192_CBC: ID = new _OID([22], aes);

/**
 * @summary aes192_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes192-CBC ALGORITHM ::= { -- CSOR
 *   PARMS         AES-InitializationVector
 *   IDENTIFIED BY id-aes192-CBC }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const aes192_CBC: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_AES_InitializationVector,
    },
    encoderFor: {
        "&Type": _encode_AES_InitializationVector,
    },
    "&id": id_aes192_CBC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_aes256_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes256-CBC           ID ::= { aes 42 }
 * ```
 *
 * @constant
 */
export const id_aes256_CBC: ID = new _OID([42], aes);

/**
 * @summary aes256_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes256-CBC ALGORITHM ::= { -- CSOR
 *   PARMS         AES-InitializationVector
 *   IDENTIFIED BY id-aes256-CBC }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const aes256_CBC: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_AES_InitializationVector,
    },
    encoderFor: {
        "&Type": _encode_AES_InitializationVector,
    },
    "&id": id_aes256_CBC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary rsaEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rsaEncryption           ID ::= { pkcs-1 rsaEncryption(1)}
 * ```
 *
 * @constant
 */
export const rsaEncryption: ID = new _OID([/* rsaEncryption */ 1], pkcs_1);

/**
 * @summary rsaEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rsaEncryptionAlgorithm ALGORITHM ::= { -- IETF RFC 4055
 *   PARMS         NULL
 *   IDENTIFIED BY rsaEncryption }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const rsaEncryptionAlgorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": rsaEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type KEA_Parms_Id<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_KEA_Parms_Id: $.ASN1Decoder<KEA_Parms_Id> | null = null;
let _cached_encoder_for_KEA_Parms_Id: $.ASN1Encoder<KEA_Parms_Id> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) KEA_Parms_Id
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KEA_Parms_Id} The decoded data structure.
 */
export function _decode_KEA_Parms_Id(el: _Element) {
    if (!_cached_decoder_for_KEA_Parms_Id) {
        _cached_decoder_for_KEA_Parms_Id = $._decodeOctetString;
    }
    return _cached_decoder_for_KEA_Parms_Id(el);
}
/**
 * @summary Encodes a(n) KEA_Parms_Id into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KEA_Parms_Id, encoded as an ASN.1 Element.
 */
export function _encode_KEA_Parms_Id(
    value: KEA_Parms_Id,
    elGetter: $.ASN1Encoder<KEA_Parms_Id>
) {
    if (!_cached_encoder_for_KEA_Parms_Id) {
        _cached_encoder_for_KEA_Parms_Id = $._encodeOctetString;
    }
    return _cached_encoder_for_KEA_Parms_Id(value, elGetter);
}

/**
 * @summary dodAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dodAlgorithms           ID ::= { usgov dod(2) infosec(1) algorithms(1) }
 * ```
 *
 * @constant
 */
export const dodAlgorithms: ID = new _OID(
    [/* dod */ 2, /* infosec */ 1, /* algorithms */ 1],
    usgov
);

/**
 * @summary id_keyExchangeAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-keyExchangeAlgorithm ID ::= { dodAlgorithms id-keyExchangeAlgorithm(22)}
 * ```
 *
 * @constant
 */
export const id_keyExchangeAlgorithm: ID = new _OID(
    [/* id-keyExchangeAlgorithm */ 22],
    dodAlgorithms
);

/**
 * @summary keyExchangeAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyExchangeAlgorithm ALGORITHM ::= { -- IETF RFC 3279
 *   PARMS         KEA-Parms-Id
 *   IDENTIFIED BY id-keyExchangeAlgorithm }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const keyExchangeAlgorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_KEA_Parms_Id,
    },
    encoderFor: {
        "&Type": _encode_KEA_Parms_Id,
    },
    "&id": id_keyExchangeAlgorithm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary DSS_Parms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSS-Parms ::= SEQUENCE {
 *   p   INTEGER,
 *   q   INTEGER,
 *   g   INTEGER,
 *   ... }
 * ```
 *
 * @class
 */
export class DSS_Parms {
    constructor(
        /**
         * @summary `p`.
         * @public
         * @readonly
         */
        readonly p: INTEGER,
        /**
         * @summary `q`.
         * @public
         * @readonly
         */
        readonly q: INTEGER,
        /**
         * @summary `g`.
         * @public
         * @readonly
         */
        readonly g: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DSS_Parms
     * @description
     *
     * This takes an `object` and converts it to a `DSS_Parms`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DSS_Parms`.
     * @returns {DSS_Parms}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DSS_Parms]: DSS_Parms[_K] }>
    ): DSS_Parms {
        return new DSS_Parms(_o.p, _o.q, _o.g, _o._unrecognizedExtensionsList);
    }
}
/**
 * @summary The Leading Root Component Types of DSS_Parms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DSS_Parms: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "p",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "q",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "g",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DSS_Parms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DSS_Parms: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DSS_Parms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DSS_Parms: $.ComponentSpec[] = [];
let _cached_decoder_for_DSS_Parms: $.ASN1Decoder<DSS_Parms> | null = null;
let _cached_encoder_for_DSS_Parms: $.ASN1Encoder<DSS_Parms> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DSS_Parms
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSS_Parms} The decoded data structure.
 */
export function _decode_DSS_Parms(el: _Element) {
    if (!_cached_decoder_for_DSS_Parms) {
        _cached_decoder_for_DSS_Parms = function (el: _Element): DSS_Parms {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "DSS-Parms contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "p";
            sequence[1].name = "q";
            sequence[2].name = "g";
            let p!: INTEGER;
            let q!: INTEGER;
            let g!: INTEGER;
            p = $._decodeInteger(sequence[0]);
            q = $._decodeInteger(sequence[1]);
            g = $._decodeInteger(sequence[2]);
            return new DSS_Parms(p, q, g, sequence.slice(3));
        };
    }
    return _cached_decoder_for_DSS_Parms(el);
}
/**
 * @summary Encodes a(n) DSS_Parms into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSS_Parms, encoded as an ASN.1 Element.
 */
export function _encode_DSS_Parms(
    value: DSS_Parms,
    elGetter: $.ASN1Encoder<DSS_Parms>
) {
    if (!_cached_encoder_for_DSS_Parms) {
        _cached_encoder_for_DSS_Parms = function (
            value: DSS_Parms,
            elGetter: $.ASN1Encoder<DSS_Parms>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(value.p, $.BER),
                            /* REQUIRED   */ $._encodeInteger(value.q, $.BER),
                            /* REQUIRED   */ $._encodeInteger(value.g, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DSS_Parms(value, elGetter);
}

/**
 * @summary ansi_x9_57
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansi-x9-57              ID ::= { us-iso ansi-x9-57(10040) }
 * ```
 *
 * @constant
 */
export const ansi_x9_57: ID = new _OID([/* ansi-x9-57 */ 10040], us_iso);

/**
 * @summary id_dsa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dsa                  ID ::= { ansi-x9-57 x9algorithm(4) 1 }
 * ```
 *
 * @constant
 */
export const id_dsa: ID = new _OID([/* x9algorithm */ 4, 1], ansi_x9_57);

/**
 * @summary dsa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsa ALGORITHM ::= { -- IETF RFC 5480
 *   PARMS         DSS-Parms
 *   IDENTIFIED BY id-dsa }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const dsa: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_DSS_Parms,
    },
    encoderFor: {
        "&Type": _encode_DSS_Parms,
    },
    "&id": id_dsa /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary X509Curves
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X509Curves OBJECT IDENTIFIER ::= { secp192r1 | sect163k1 | sect163r2 | secp224r1 | sect233k1 |
 *                                    sect233r1 | secp256r1 | sect283k1 | sect283r1 | secp384r1 |
 *                                    sect409k1 | sect409r1 | secp521r1 | sect571k1 | sect571r1 }
 * ```
 *
 * @type {OBJECT_IDENTIFIER}
 */
export type X509Curves = OBJECT_IDENTIFIER; // VALUE_SET_TYPE
let _cached_decoder_for_X509Curves: $.ASN1Decoder<X509Curves> | null = null;
let _cached_encoder_for_X509Curves: $.ASN1Encoder<X509Curves> | null = null;
export function _decode_X509Curves(el: _Element) {
    if (!_cached_decoder_for_X509Curves) {
        _cached_decoder_for_X509Curves = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_X509Curves(el);
}
export function _encode_X509Curves(
    value: X509Curves,
    elGetter: $.ASN1Encoder<X509Curves>
) {
    if (!_cached_encoder_for_X509Curves) {
        _cached_encoder_for_X509Curves = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_X509Curves(value, elGetter);
}

/**
 * @summary id_ecPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecPublicKey          ID ::= { ansi-x9-62 keyType(2) 1 }
 * ```
 *
 * @constant
 */
export const id_ecPublicKey: ID = new _OID([/* keyType */ 2, 1], ansi_x9_62);

/**
 * @summary ecPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecPublicKey ALGORITHM ::= { -- IETF RFC 5480
 *   PARMS         X509Curves
 *   IDENTIFIED BY id-ecPublicKey }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ecPublicKey: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_X509Curves,
    },
    encoderFor: {
        "&Type": _encode_X509Curves,
    },
    "&id": id_ecPublicKey /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ecDH
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecDH                 ID ::= { certicom schemes(1) ecdh(12) }
 * ```
 *
 * @constant
 */
export const id_ecDH: ID = new _OID([/* schemes */ 1, /* ecdh */ 12], certicom);

/**
 * @summary ecDH
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecDH ALGORITHM ::= { -- IETF RFC 5480
 *   PARMS         X509Curves
 *   IDENTIFIED BY id-ecDH }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ecDH: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_X509Curves,
    },
    encoderFor: {
        "&Type": _encode_X509Curves,
    },
    "&id": id_ecDH /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ecMQV
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecMQV                ID ::= { certicom schemes(1) ecmqv(13) }
 * ```
 *
 * @constant
 */
export const id_ecMQV: ID = new _OID(
    [/* schemes */ 1, /* ecmqv */ 13],
    certicom
);

/**
 * @summary ecMQV
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecMQV ALGORITHM ::= { -- IETF RFC 5480
 *   PARMS         X509Curves
 *   IDENTIFIED BY id-ecMQV }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ecMQV: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_X509Curves,
    },
    encoderFor: {
        "&Type": _encode_X509Curves,
    },
    "&id": id_ecMQV /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ValidationParms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidationParms ::= SEQUENCE {
 *   seed         BIT STRING,
 *   pgenCounter  INTEGER,
 *   ... }
 * ```
 *
 * @class
 */
export class ValidationParms {
    constructor(
        /**
         * @summary `seed`.
         * @public
         * @readonly
         */
        readonly seed: BIT_STRING,
        /**
         * @summary `pgenCounter`.
         * @public
         * @readonly
         */
        readonly pgenCounter: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ValidationParms
     * @description
     *
     * This takes an `object` and converts it to a `ValidationParms`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ValidationParms`.
     * @returns {ValidationParms}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ValidationParms]: ValidationParms[_K] }>
    ): ValidationParms {
        return new ValidationParms(
            _o.seed,
            _o.pgenCounter,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ValidationParms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ValidationParms: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "seed",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pgenCounter",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ValidationParms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ValidationParms: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ValidationParms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ValidationParms: $.ComponentSpec[] = [];
let _cached_decoder_for_ValidationParms: $.ASN1Decoder<
    ValidationParms
> | null = null;
let _cached_encoder_for_ValidationParms: $.ASN1Encoder<
    ValidationParms
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ValidationParms
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ValidationParms} The decoded data structure.
 */
export function _decode_ValidationParms(el: _Element) {
    if (!_cached_decoder_for_ValidationParms) {
        _cached_decoder_for_ValidationParms = function (
            el: _Element
        ): ValidationParms {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ValidationParms contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "seed";
            sequence[1].name = "pgenCounter";
            let seed!: BIT_STRING;
            let pgenCounter!: INTEGER;
            seed = $._decodeBitString(sequence[0]);
            pgenCounter = $._decodeInteger(sequence[1]);
            return new ValidationParms(seed, pgenCounter, sequence.slice(2));
        };
    }
    return _cached_decoder_for_ValidationParms(el);
}
/**
 * @summary Encodes a(n) ValidationParms into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValidationParms, encoded as an ASN.1 Element.
 */
export function _encode_ValidationParms(
    value: ValidationParms,
    elGetter: $.ASN1Encoder<ValidationParms>
) {
    if (!_cached_encoder_for_ValidationParms) {
        _cached_encoder_for_ValidationParms = function (
            value: ValidationParms,
            elGetter: $.ASN1Encoder<ValidationParms>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeBitString(
                                value.seed,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeInteger(
                                value.pgenCounter,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ValidationParms(value, elGetter);
}

/**
 * @summary DomainParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainParameters ::= SEQUENCE {
 *   p               INTEGER, -- odd prime, p=jq+1
 *   g               INTEGER, -- generator, g
 *   q               INTEGER, -- factor of p-1
 *   j               INTEGER  OPTIONAL, -- subgroup factor
 *   validationParms ValidationParms OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DomainParameters {
    constructor(
        /**
         * @summary `p`.
         * @public
         * @readonly
         */
        readonly p: INTEGER,
        /**
         * @summary `g`.
         * @public
         * @readonly
         */
        readonly g: INTEGER,
        /**
         * @summary `q`.
         * @public
         * @readonly
         */
        readonly q: INTEGER,
        /**
         * @summary `j`.
         * @public
         * @readonly
         */
        readonly j: OPTIONAL<INTEGER>,
        /**
         * @summary `validationParms`.
         * @public
         * @readonly
         */
        readonly validationParms: OPTIONAL<ValidationParms>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DomainParameters
     * @description
     *
     * This takes an `object` and converts it to a `DomainParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DomainParameters`.
     * @returns {DomainParameters}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DomainParameters]: DomainParameters[_K] }>
    ): DomainParameters {
        return new DomainParameters(
            _o.p,
            _o.g,
            _o.q,
            _o.j,
            _o.validationParms,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of DomainParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DomainParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "p",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "g",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "q",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "j",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "validationParms",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DomainParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DomainParameters: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DomainParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DomainParameters: $.ComponentSpec[] = [];
let _cached_decoder_for_DomainParameters: $.ASN1Decoder<
    DomainParameters
> | null = null;
let _cached_encoder_for_DomainParameters: $.ASN1Encoder<
    DomainParameters
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DomainParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DomainParameters} The decoded data structure.
 */
export function _decode_DomainParameters(el: _Element) {
    if (!_cached_decoder_for_DomainParameters) {
        _cached_decoder_for_DomainParameters = function (
            el: _Element
        ): DomainParameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let p!: INTEGER;
            let g!: INTEGER;
            let q!: INTEGER;
            let j: OPTIONAL<INTEGER>;
            let validationParms: OPTIONAL<ValidationParms>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                p: (_el: _Element): void => {
                    p = $._decodeInteger(_el);
                },
                g: (_el: _Element): void => {
                    g = $._decodeInteger(_el);
                },
                q: (_el: _Element): void => {
                    q = $._decodeInteger(_el);
                },
                j: (_el: _Element): void => {
                    j = $._decodeInteger(_el);
                },
                validationParms: (_el: _Element): void => {
                    validationParms = _decode_ValidationParms(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DomainParameters,
                _extension_additions_list_spec_for_DomainParameters,
                _root_component_type_list_2_spec_for_DomainParameters,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DomainParameters(
                /* SEQUENCE_CONSTRUCTOR_CALL */ p,
                g,
                q,
                j,
                validationParms,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DomainParameters(el);
}
/**
 * @summary Encodes a(n) DomainParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainParameters, encoded as an ASN.1 Element.
 */
export function _encode_DomainParameters(
    value: DomainParameters,
    elGetter: $.ASN1Encoder<DomainParameters>
) {
    if (!_cached_encoder_for_DomainParameters) {
        _cached_encoder_for_DomainParameters = function (
            value: DomainParameters,
            elGetter: $.ASN1Encoder<DomainParameters>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(value.p, $.BER),
                            /* REQUIRED   */ $._encodeInteger(value.g, $.BER),
                            /* REQUIRED   */ $._encodeInteger(value.q, $.BER),
                            /* IF_ABSENT  */ value.j === undefined
                                ? undefined
                                : $._encodeInteger(value.j, $.BER),
                            /* IF_ABSENT  */ value.validationParms === undefined
                                ? undefined
                                : _encode_ValidationParms(
                                      value.validationParms,
                                      $.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DomainParameters(value, elGetter);
}

/**
 * @summary ansi_x9_42
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansi-x9-42              ID ::= { us-iso ansi-x942(10046) }
 * ```
 *
 * @constant
 */
export const ansi_x9_42: ID = new _OID([/* ansi-x942 */ 10046], us_iso);

/**
 * @summary dh_public_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dh-public-number        ID ::= { ansi-x9-42 number-type(2) dh-public-number(1) }
 * ```
 *
 * @constant
 */
export const dh_public_number: ID = new _OID(
    [/* number-type */ 2, /* dh-public-number */ 1],
    ansi_x9_42
);

/**
 * @summary dh_public_numberAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dh-public-numberAlgorithm ALGORITHM ::= {
 *   PARMS         DomainParameters
 *   IDENTIFIED BY dh-public-number }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const dh_public_numberAlgorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_DomainParameters,
    },
    encoderFor: {
        "&Type": _encode_DomainParameters,
    },
    "&id": dh_public_number /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary sha1WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha1WithRSAEncryption   ID ::= { pkcs-1 sha1WithRSAEncryption(5) }
 * ```
 *
 * @constant
 */
export const sha1WithRSAEncryption: ID = new _OID(
    [/* sha1WithRSAEncryption */ 5],
    pkcs_1
);

/**
 * @summary sha1WithRSAEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha1WithRSAEncryptionAlgorithm ALGORITHM ::= { -- IETF 7427
 *   PARMS         NULL
 *   IDENTIFIED BY sha1WithRSAEncryption }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha1WithRSAEncryptionAlgorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": sha1WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary sha224WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha224WithRSAEncryption ID ::= { pkcs-1 sha224WithRSAEncryption(14) }
 * ```
 *
 * @constant
 */
export const sha224WithRSAEncryption: ID = new _OID(
    [/* sha224WithRSAEncryption */ 14],
    pkcs_1
);

/**
 * @summary sha224WithRSAEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha224WithRSAEncryptionAlgorithm ALGORITHM ::= { -- IETF RFC 5754
 *   PARMS         NULL
 *   IDENTIFIED BY sha224WithRSAEncryption }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha224WithRSAEncryptionAlgorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": sha224WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary sha256WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha256WithRSAEncryption ID ::= { pkcs-1 sha256WithRSAEncryption(11) }
 * ```
 *
 * @constant
 */
export const sha256WithRSAEncryption: ID = new _OID(
    [/* sha256WithRSAEncryption */ 11],
    pkcs_1
);

/**
 * @summary sha256WithRSAEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha256WithRSAEncryptionAlgorithm ALGORITHM ::= { -- IETF RFC 7427
 *   PARMS         NULL
 *   IDENTIFIED BY sha256WithRSAEncryption }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha256WithRSAEncryptionAlgorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": sha256WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary sha384WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha384WithRSAEncryption ID ::= { pkcs-1 sha384WithRSAEncryption(12) }
 * ```
 *
 * @constant
 */
export const sha384WithRSAEncryption: ID = new _OID(
    [/* sha384WithRSAEncryption */ 12],
    pkcs_1
);

/**
 * @summary sha384WithRSAEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha384WithRSAEncryptionAlgorithm ALGORITHM ::= { -- IETF RFC 7427
 *   PARMS         NULL
 *   IDENTIFIED BY sha384WithRSAEncryption }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha384WithRSAEncryptionAlgorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": sha384WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary sha512WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha512WithRSAEncryption ID ::= { pkcs-1 sha512WithRSAEncryption(13) }
 * ```
 *
 * @constant
 */
export const sha512WithRSAEncryption: ID = new _OID(
    [/* sha512WithRSAEncryption */ 13],
    pkcs_1
);

/**
 * @summary sha512WithRSAEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha512WithRSAEncryptionAlgorithm ALGORITHM ::= { -- IETF RFC 7427
 *   PARMS         NULL
 *   IDENTIFIED BY sha512WithRSAEncryption }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const sha512WithRSAEncryptionAlgorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": sha512WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary rSASSA_PSS_Type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rSASSA-PSS-Type ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class rSASSA_PSS_Type {
    constructor(
        /**
         * @summary `hashAlgorithm`.
         * @public
         * @readonly
         */
        readonly hashAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `saltLength`.
         * @public
         * @readonly
         */
        readonly saltLength: OPTIONAL<INTEGER>,
        /**
         * @summary `trailerField`.
         * @public
         * @readonly
         */
        readonly trailerField: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a rSASSA_PSS_Type
     * @description
     *
     * This takes an `object` and converts it to a `rSASSA_PSS_Type`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `rSASSA_PSS_Type`.
     * @returns {rSASSA_PSS_Type}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof rSASSA_PSS_Type]: rSASSA_PSS_Type[_K] }>
    ): rSASSA_PSS_Type {
        return new rSASSA_PSS_Type(
            _o.hashAlgorithm,
            _o.saltLength,
            _o.trailerField
        );
    }

    /**
     * @summary Getter that returns the default value for `saltLength`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_saltLength() {
        return 20;
    }
    /**
     * @summary Getter that returns the default value for `trailerField`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_trailerField() {
        return 1;
    }
}
/**
 * @summary The Leading Root Component Types of rSASSA_PSS_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_rSASSA_PSS_Type: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "hashAlgorithm",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "saltLength",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "trailerField",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of rSASSA_PSS_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_rSASSA_PSS_Type: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of rSASSA_PSS_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_rSASSA_PSS_Type: $.ComponentSpec[] = [];
let _cached_decoder_for_rSASSA_PSS_Type: $.ASN1Decoder<
    rSASSA_PSS_Type
> | null = null;
let _cached_encoder_for_rSASSA_PSS_Type: $.ASN1Encoder<
    rSASSA_PSS_Type
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) rSASSA_PSS_Type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {rSASSA_PSS_Type} The decoded data structure.
 */
export function _decode_rSASSA_PSS_Type(el: _Element) {
    if (!_cached_decoder_for_rSASSA_PSS_Type) {
        _cached_decoder_for_rSASSA_PSS_Type = function (
            el: _Element
        ): rSASSA_PSS_Type {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let hashAlgorithm!: AlgorithmIdentifier;
            let saltLength: OPTIONAL<INTEGER> =
                rSASSA_PSS_Type._default_value_for_saltLength;
            let trailerField: OPTIONAL<INTEGER> =
                rSASSA_PSS_Type._default_value_for_trailerField;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                hashAlgorithm: (_el: _Element): void => {
                    hashAlgorithm = $._decode_explicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                saltLength: (_el: _Element): void => {
                    saltLength = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                trailerField: (_el: _Element): void => {
                    trailerField = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_rSASSA_PSS_Type,
                _extension_additions_list_spec_for_rSASSA_PSS_Type,
                _root_component_type_list_2_spec_for_rSASSA_PSS_Type,
                undefined
            );
            return new rSASSA_PSS_Type(
                /* SEQUENCE_CONSTRUCTOR_CALL */ hashAlgorithm,
                saltLength,
                trailerField
            );
        };
    }
    return _cached_decoder_for_rSASSA_PSS_Type(el);
}
/**
 * @summary Encodes a(n) rSASSA_PSS_Type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The rSASSA_PSS_Type, encoded as an ASN.1 Element.
 */
export function _encode_rSASSA_PSS_Type(
    value: rSASSA_PSS_Type,
    elGetter: $.ASN1Encoder<rSASSA_PSS_Type>
) {
    if (!_cached_encoder_for_rSASSA_PSS_Type) {
        _cached_encoder_for_rSASSA_PSS_Type = function (
            value: rSASSA_PSS_Type,
            elGetter: $.ASN1Encoder<rSASSA_PSS_Type>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_AlgorithmIdentifier,
                            $.BER
                        )(value.hashAlgorithm, $.BER),
                        /* IF_DEFAULT */ value.saltLength === undefined ||
                        $.deepEq(
                            value.saltLength,
                            rSASSA_PSS_Type._default_value_for_saltLength
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.saltLength, $.BER),
                        /* IF_DEFAULT */ value.trailerField === undefined ||
                        $.deepEq(
                            value.trailerField,
                            rSASSA_PSS_Type._default_value_for_trailerField
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.trailerField, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_rSASSA_PSS_Type(value, elGetter);
}

/**
 * @summary id_RSASSA_PSS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-RSASSA-PSS           ID ::= { pkcs-1 10 }
 * ```
 *
 * @constant
 */
export const id_RSASSA_PSS: ID = new _OID([10], pkcs_1);

/**
 * @summary rSASSA_PSS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rSASSA-PSS ALGORITHM ::= {
 *   PARMS                 SEQUENCE {
 *     hashAlgorithm    [0]  AlgorithmIdentifier {{HashAlgorithms}},
 *  -- maskGenAlgorithm [1]  AlgorithmIdentifier {{MaskGenAlgorithms}},
 *     saltLength       [2]  INTEGER DEFAULT 20,
 *     trailerField     [3]  INTEGER DEFAULT 1 }
 *   IDENTIFIED BY         id-RSASSA-PSS }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const rSASSA_PSS: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_rSASSA_PSS_Type,
    },
    encoderFor: {
        "&Type": _encode_rSASSA_PSS_Type,
    },
    "&id": id_RSASSA_PSS /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary sigAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sigAlgs                 ID ::= { nistAlgorithms 3 }
 * ```
 *
 * @constant
 */
export const sigAlgs: ID = new _OID([3], nistAlgorithms);

/**
 * @summary id_dsa_with_sha224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dsa-with-sha224      ID ::= { sigAlgs 1 }
 * ```
 *
 * @constant
 */
export const id_dsa_with_sha224: ID = new _OID([1], sigAlgs);

/**
 * @summary dsa_with_sha224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsa-with-sha224 ALGORITHM ::= { -- IETF RFC 5754
 *   IDENTIFIED BY id-dsa-with-sha224 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const dsa_with_sha224: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_dsa_with_sha224 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_dsa_with_sha256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dsa-with-sha256      ID ::= { sigAlgs 2 }
 * ```
 *
 * @constant
 */
export const id_dsa_with_sha256: ID = new _OID([2], sigAlgs);

/**
 * @summary dsa_with_sha256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsa-with-sha256 ALGORITHM ::= { -- IETF RFC 5754
 *   IDENTIFIED BY id-dsa-with-sha256 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const dsa_with_sha256: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_dsa_with_sha256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ecdsa_with_SHA224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA224       ID ::= { ansi-x9-62 signatures(4)
 *                                                 ecdsa-with-SHA2(3) 1 }
 * ```
 *
 * @constant
 */
export const ecdsa_with_SHA224: ID = new _OID(
    [/* signatures */ 4, /* ecdsa-with-SHA2 */ 3, 1],
    ansi_x9_62
);

/**
 * @summary ecdsa_with_SHA224_Algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA224-Algorithm ALGORITHM ::= { -- IETF RFC
 *   IDENTIFIED BY ecdsa-with-SHA224 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ecdsa_with_SHA224_Algorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": ecdsa_with_SHA224 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ecdsa_with_SHA256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA256       ID ::= { ansi-x9-62 signatures(4)
 *                                                 ecdsa-with-SHA2(3) 2 }
 * ```
 *
 * @constant
 */
export const ecdsa_with_SHA256: ID = new _OID(
    [/* signatures */ 4, /* ecdsa-with-SHA2 */ 3, 2],
    ansi_x9_62
);

/**
 * @summary ecdsa_with_SHA256_Algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA256-Algorithm ALGORITHM ::= { -- IETF RFC 5758
 *   IDENTIFIED BY ecdsa-with-SHA256 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ecdsa_with_SHA256_Algorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": ecdsa_with_SHA256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ecdsa_with_SHA384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA384       ID ::= { ansi-x9-62 signatures(4)
 *                                                 ecdsa-with-SHA2(3) 3 }
 * ```
 *
 * @constant
 */
export const ecdsa_with_SHA384: ID = new _OID(
    [/* signatures */ 4, /* ecdsa-with-SHA2 */ 3, 3],
    ansi_x9_62
);

/**
 * @summary ecdsa_with_SHA384_Algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA384-Algorithm ALGORITHM ::= { -- IETF RFC 5758
 *   IDENTIFIED BY ecdsa-with-SHA384 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ecdsa_with_SHA384_Algorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": ecdsa_with_SHA384 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ecdsa_with_SHA512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA512       ID ::= { ansi-x9-62 signatures(4) ecdsa-with-SHA2(3) 4 }
 * ```
 *
 * @constant
 */
export const ecdsa_with_SHA512: ID = new _OID(
    [/* signatures */ 4, /* ecdsa-with-SHA2 */ 3, 4],
    ansi_x9_62
);

/**
 * @summary ecdsa_with_SHA512_Algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA512-Algorithm ALGORITHM ::= { -- IETF RFC 5758
 *   IDENTIFIED BY ecdsa-with-SHA512 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const ecdsa_with_SHA512_Algorithm: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": ecdsa_with_SHA512 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary digestAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * digestAlgorithm         ID ::= { rsadsi digestAlgorithm(2) }
 * ```
 *
 * @constant
 */
export const digestAlgorithm: ID = new _OID([/* digestAlgorithm */ 2], rsadsi);

/**
 * @summary id_hmacWithSHA224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA224       ID ::= { digestAlgorithm 8 }
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA224: ID = new _OID([8], digestAlgorithm);

/**
 * @summary hmacWithSHA224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hmacWithSHA224 ALGORITHM ::= {  -- IETF RFC 4231
 *   PARMS         NULL
 *   IDENTIFIED BY id-hmacWithSHA224 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const hmacWithSHA224: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_hmacWithSHA224 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_hmacWithSHA256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA256       ID ::= { digestAlgorithm 9 }
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA256: ID = new _OID([9], digestAlgorithm);

/**
 * @summary hmacWithSHA256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hmacWithSHA256 ALGORITHM ::= {  -- IETF RFC 4231
 *   PARMS         NULL
 *   IDENTIFIED BY id-hmacWithSHA256 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const hmacWithSHA256: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_hmacWithSHA256 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_hmacWithSHA384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA384       ID ::= { digestAlgorithm 10 }
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA384: ID = new _OID([10], digestAlgorithm);

/**
 * @summary hmacWithSHA384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hmacWithSHA384 ALGORITHM ::= {  -- IETF RFC 4231
 *   PARMS         NULL
 *   IDENTIFIED BY id-hmacWithSHA384 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const hmacWithSHA384: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_hmacWithSHA384 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_hmacWithSHA512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA512       ID ::= { digestAlgorithm 11 }
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA512: ID = new _OID([11], digestAlgorithm);

/**
 * @summary hmacWithSHA512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hmacWithSHA512 ALGORITHM ::= {  -- IETF RFC 4231
 *   PARMS         NULL
 *   IDENTIFIED BY id-hmacWithSHA512 }
 * ```
 *
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export const hmacWithSHA512: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_hmacWithSHA512 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* END_MODULE AlgorithmObjectIdentifiers */
/* eslint-enable */
