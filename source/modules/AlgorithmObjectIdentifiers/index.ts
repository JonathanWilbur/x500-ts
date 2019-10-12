import { ObjectIdentifier } from "asn1-ts";

export const nullAlgorithm           = new ObjectIdentifier([2, 5, 8, 0]);
export const encryptionAlgorithm     = new ObjectIdentifier([2, 5, 8, 1]);
export const hashAlgorithm           = new ObjectIdentifier([2, 5, 8, 2]);
export const signatureAlgorithm      = new ObjectIdentifier([2, 5, 8, 3]);
export const id_ea: ObjectIdentifier = encryptionAlgorithm;
export const id_ha: ObjectIdentifier = hashAlgorithm;
export const id_sa: ObjectIdentifier = signatureAlgorithm;
export const id_ea_rsa               = new ObjectIdentifier([2, 5, 8, 1, 1]);
export const id_ha_sqMod_n           = new ObjectIdentifier([2, 5, 8, 2, 1]);
export const id_sa_sqMod_nWithRSA    = new ObjectIdentifier([2, 5, 8, 3, 1]);

// object identifiers allocated by other organization

export const us_iso                  = new ObjectIdentifier([1, 2, 840]);
export const ansi_x9_57              = new ObjectIdentifier([1, 2, 840, 10040]);
export const ansi_x9_62              = new ObjectIdentifier([1, 2, 840, 10045]);
export const ansi_x9_42              = new ObjectIdentifier([1, 2, 840, 10046]);
export const iso_standard            = new ObjectIdentifier([1, 0]);
export const iso9797                 = new ObjectIdentifier([1, 0, 9797]);
export const iso_organization        = new ObjectIdentifier([1, 3]);
export const certicom                = new ObjectIdentifier([1, 3, 132]);
export const certicom_curve          = new ObjectIdentifier([1, 3, 132, 0]);
export const teletrust               = new ObjectIdentifier([1, 0, 36]);
export const ecStdCurvesAndGen       = new ObjectIdentifier([1, 0, 36, 3, 3, 2]);
export const versionOne              = new ObjectIdentifier([1, 0, 36, 3, 3, 2, 1, 1]);
export const us_joint                = new ObjectIdentifier([2, 16, 840]);
export const usgov                   = new ObjectIdentifier([2, 16, 840, 1, 101]);
export const dodAlgorithms           = new ObjectIdentifier([2, 16, 840, 1, 101, 2, 1, 1]);
export const csor                    = new ObjectIdentifier([2, 16, 840, 1, 101, 3]);
export const nistAlgorithms          = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4]);
export const aes                     = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 1]);
export const hashAlgs                = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 2]);
export const sigAlgs                 = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 3]);
export const rsadsi                  = new ObjectIdentifier([1, 2, 840, 113549]);
export const pkcs_1                  = new ObjectIdentifier([1, 2, 840, 113549, 1, 1]);
export const digestAlgorithm         = new ObjectIdentifier([1, 2, 840, 113549, 2]);

// Symmetric key algorithm object identifiers

export const id_aes128_CBC           = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 1, 2]); // CSOR
export const id_aes192_CBC           = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 1, 22]); // CSOR
export const id_aes256_CBC           = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 1, 42]); // CSOR

// AES key wrap algorithms from IETF RFC 3394

export const id_aes128_wrap          = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 1, 5]);
export const id_aes192_wrap          = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 1, 25]);
export const id_aes256_wrap          = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 1, 45]);

// Pubkic key algorithm object identifiers

export const rsaEncryption           = new ObjectIdentifier([1, 2, 840, 113549, 1, 1, 1]); // IETF RFC 4055
export const id_keyExchangeAlgorithm = new ObjectIdentifier([2, 16, 840, 1, 101, 2, 1, 1, 22]); // IETF RFC 3279
export const id_dsa                  = new ObjectIdentifier([1, 2, 840, 10040, 4, 1]);   // IETF RFC 5480
export const id_ecPublicKey          = new ObjectIdentifier([1, 2, 840, 10045, 2, 1]);       // IETF RFC 5480
export const id_ecDH                 = new ObjectIdentifier([1, 3, 132, 1, 12]);  // IETF RFC 5480
export const id_ecMQV                = new ObjectIdentifier([1, 3, 132, 1, 13]); // IETF RFC 5480
export const dh_public_number        = new ObjectIdentifier([1, 2, 840, 10046, 2, 1]); // IETF RFC 2631

// Hash algorithms object identifiers

// The OID for SHA hash algorithms are specified in NIST FIPS PUB 180-4

export const id_sha1                 = new ObjectIdentifier([1, 3, 14, 3, 2, 26]);
export const id_sha256               = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 2, 1]); // CSOR
export const id_sha384               = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 2, 2]); // CSOR
export const id_sha512               = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 2, 3]); // CSOR
export const id_sha224               = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 2, 4]); // CSOR
export const id_sha512_224           = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 2, 5]); // CSOR
export const id_sha512_256           = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 2, 6]); // CSOR

export const hashAlg                 = new ObjectIdentifier([ 1, 3, 6, 1, 4, 1, 1722, 12, 2]); // BLAKE2, RFC 7693

// SIGNATURE ALGORITHM IDS

// RSASSA-PKCS1-v1_5 signature algorithm object identifiers (From IETF RFC 3447)

export const sha1WithRSAEncryption   = new ObjectIdentifier([1, 2, 840, 113549, 1, 1, 5]);
export const sha256WithRSAEncryption = new ObjectIdentifier([1, 2, 840, 113549, 1, 1, 11]);
export const sha384WithRSAEncryption = new ObjectIdentifier([1, 2, 840, 113549, 1, 1, 12]);
export const sha512WithRSAEncryption = new ObjectIdentifier([1, 2, 840, 113549, 1, 1, 13]);
export const sha224WithRSAEncryption = new ObjectIdentifier([1, 2, 840, 113549, 1, 1, 14]);

// RSASSA-PSS signature algorithm object identifiers (From IETF RFC 4055)

export const id_RSASSA_PSS           = new ObjectIdentifier([1, 2, 840, 113549, 1, 1, 10]);
export const id_mgf1                 = new ObjectIdentifier([1, 2, 840, 113549, 1, 1, 8]);

// DSA algorithms object idntifiers

export const id_dsa_with_sha1        = new ObjectIdentifier([1, 2, 840, 10040, 4, 3]);
export const id_dsa_with_sha224      = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 3, 1]); // CSOR
export const id_dsa_with_sha256      = new ObjectIdentifier([2, 16, 840, 1, 101, 3, 4, 3, 2]); // CSOR

// From IETF RFC 5758
export const ecdsa_with_SHA224       = new ObjectIdentifier([1, 2, 840, 10045, 4, 3, 1]);
export const ecdsa_with_SHA256       = new ObjectIdentifier([1, 2, 840, 10045, 4, 3, 2]);
export const ecdsa_with_SHA384       = new ObjectIdentifier([1, 2, 840, 10045, 4, 3, 3]);
export const ecdsa_with_SHA512       = new ObjectIdentifier([1, 2, 840, 10045, 4, 3, 4]);

//  Object identifier for curves

// From IETF RFC 5480

export const secp192r1       = new ObjectIdentifier([1, 2, 840, 10045, 3, 1, 1]);
export const sect163k1       = new ObjectIdentifier([1, 3, 132, 0, 1]);
export const sect163r2       = new ObjectIdentifier([1, 3, 132, 0, 15]);
export const secp224r1       = new ObjectIdentifier([1, 3, 132, 0, 33]);
export const sect233k1       = new ObjectIdentifier([1, 3, 132, 0, 26]);
export const sect233r1       = new ObjectIdentifier([1, 3, 132, 0, 27]);
export const secp256r1       = new ObjectIdentifier([1, 2, 840, 10045, 3, 1, 7]);
export const sect283k1       = new ObjectIdentifier([1, 3, 132, 0, 16]);
export const sect283r1       = new ObjectIdentifier([1, 3, 132, 0, 17]);
export const secp384r1       = new ObjectIdentifier([1, 3, 132, 0, 34]);
export const sect409k1       = new ObjectIdentifier([1, 3, 132, 0, 36]);
export const sect409r1       = new ObjectIdentifier([1, 3, 132, 0, 37]);
export const secp521r1       = new ObjectIdentifier([1, 3, 132, 0, 35]);
export const sect571k1       = new ObjectIdentifier([1, 3, 132, 0, 38]);
export const sect571r1       = new ObjectIdentifier([1, 3, 132, 0, 39]);

// From IETF RFC 5639

export const brainpoolP160r1 = new ObjectIdentifier([1, 0, 36, 3, 3, 2, 1, 1, 1 ]);
export const brainpoolP160t1 = new ObjectIdentifier([1, 0, 36, 3, 3, 2, 1, 1, 2 ]);
export const brainpoolP192r1 = new ObjectIdentifier([1, 0, 36, 3, 3, 2, 1, 1, 3 ]);
export const brainpoolP192t1 = new ObjectIdentifier([1, 0, 36, 3, 3, 2, 1, 1, 4 ]);
export const brainpoolP224r1 = new ObjectIdentifier([1, 0, 36, 3, 3, 2, 1, 1, 5 ]);
export const brainpoolP224t1 = new ObjectIdentifier([1, 0, 36, 3, 3, 2, 1, 1, 6 ]);
export const brainpoolP256r1 = new ObjectIdentifier([1, 0, 36, 3, 3, 2, 1, 1, 7 ]);
export const brainpoolP256t1 = new ObjectIdentifier([1, 0, 36, 3, 3, 2, 1, 1, 8 ]);
export const brainpoolP320r1 = new ObjectIdentifier([1, 0, 36, 3, 3, 2, 1, 1, 9 ]);
export const brainpoolP320t1 = new ObjectIdentifier([1, 0, 36, 3, 3, 2, 1, 1, 10 ]);
export const brainpoolP384r1 = new ObjectIdentifier([1, 0, 36, 3, 3, 2, 1, 1, 11 ]);
export const brainpoolP384t1 = new ObjectIdentifier([1, 0, 36, 3, 3, 2, 1, 1, 12 ]);
export const brainpoolP512r1 = new ObjectIdentifier([1, 0, 36, 3, 3, 2, 1, 1, 13 ]);
export const brainpoolP512t1 = new ObjectIdentifier([1, 0, 36, 3, 3, 2, 1, 1, 14 ]);

// X509Curves OBJECT IDENTIFIER ::= { secp192r1 | sect163k1 | sect163r2 | secp224r1 | sect233k1 |
//                                    sect233r1 | secp256r1 | sect283k1 | sect283r1 | secp384r1 |
//                                    sect409k1 | sect409r1 | secp521r1 | sect571k1 | sect571r1 ]);

// Object identifiers for Integrity Check Value (ICV) algorithms

export const id_hmacWithSHA224       = new ObjectIdentifier([1, 2, 840, 113549, 2, 8 ]);  // IETF RFC 4231
export const id_hmacWithSHA256       = new ObjectIdentifier([1, 2, 840, 113549, 2, 9 ]);  // IETF RFC 4231
export const id_hmacWithSHA384       = new ObjectIdentifier([1, 2, 840, 113549, 2, 10 ]); // IETF RFC 4231
export const id_hmacWithSHA512       = new ObjectIdentifier([1, 2, 840, 113549, 2, 11 ]); // IETF RFC 4231

export const id_gmac                 = new ObjectIdentifier([1, 0, 9797, 3, 4]); // ISO/IEC 9797-3

export { default as ID } from "./ID";
export { default as DSSParms } from "./DSSParms";
export { default as KEAParmsId } from "./KEAParmsId";
export { default as ValidationParms } from "./ValidationParms";
