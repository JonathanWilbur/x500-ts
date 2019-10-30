/**
 * `ModifyDNArgumentData ::= SET {
 *   object        [0]  DistinguishedName,
 *   newRDN        [1]  RelativeDistinguishedName,
 *   deleteOldRDN  [2]  BOOLEAN DEFAULT FALSE,
 *   newSuperior   [3]  DistinguishedName OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF      CommonArguments }`
 */
