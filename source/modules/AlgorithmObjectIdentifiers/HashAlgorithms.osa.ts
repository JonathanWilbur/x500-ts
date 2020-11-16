/* eslint-disable */
import { sha1Algorithm } from "../AlgorithmObjectIdentifiers/sha1Algorithm.oa";
import { sha224 } from "../AlgorithmObjectIdentifiers/sha224.oa";
import { sha256 } from "../AlgorithmObjectIdentifiers/sha256.oa";
import { sha384 } from "../AlgorithmObjectIdentifiers/sha384.oa";
import { sha512 } from "../AlgorithmObjectIdentifiers/sha512.oa";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";
export { sha1Algorithm } from "../AlgorithmObjectIdentifiers/sha1Algorithm.oa";
export { sha224 } from "../AlgorithmObjectIdentifiers/sha224.oa";
export { sha256 } from "../AlgorithmObjectIdentifiers/sha256.oa";
export { sha384 } from "../AlgorithmObjectIdentifiers/sha384.oa";
export { sha512 } from "../AlgorithmObjectIdentifiers/sha512.oa";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION HashAlgorithms */
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
/* END_OF_SYMBOL_DEFINITION HashAlgorithms */

/* eslint-enable */
