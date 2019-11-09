/**
 * `Req-contents ::= SEQUENCE {
 *   tok-id        INTEGER(256), -- shall contain 0100 (hex)
 *   context-id    Random-Integer,
 *   pvno          BIT STRING,
 *   timestamp     UTCTime OPTIONAL, -- mandatory for SPKM-2
 *   randSrc       Random-Integer,
 *   targ-name     Name,
 *   src-name      [0]  Name OPTIONAL,
 *   req-data      Context-Data,
 *   validity      [1]  Validity OPTIONAL,
 *   key-estb-set  Key-Estb-Algs,
 *   key-estb-req  BIT STRING OPTIONAL,
 *   key-src-bind  OCTET STRING OPTIONAL
 *   -- This field must be present for the case of SPKM-2
 *   -- unilateral authen. if the K-ALG in use does not provide
 *   -- such a binding (but is optional for all other cases).
 *   -- The octet string holds the result of applying the
 *   -- mandatory hashing procedure (in MANDATORY I-ALG;
 *   -- see Section 2.1) as follows:  MD5(src || context_key),
 *   -- where "src" is the DER-encoded octets of src-name,
 *   -- "context-key" is the symmetric key (i.e., the
 *   -- unprotected version of what is transmitted in
 *   -- key-estb-req), and "||" is the concatenation operation.
 * }`
 */
