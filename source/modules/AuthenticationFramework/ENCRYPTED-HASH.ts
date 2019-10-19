/**
 * `ENCRYPTED-HASH{ToBeSigned} ::= BIT STRING (CONSTRAINED BY {
 *   -- shall be the result of applying a hashing procedure to the DER-encoded (see 6.2)
 *   -- octets of a value of -- ToBeSigned -- and then applying an encipherment procedure
 *   -- to those octets -- } )`
 */
type ENCRYPTED_HASH = boolean[];
export default ENCRYPTED_HASH;
