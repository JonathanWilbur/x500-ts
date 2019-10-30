/**
 * `SimpleCredentials ::= SEQUENCE {
 *   name      [0]  DistinguishedName,
 *   validity  [1]  SET {
 *     time1     [0]  CHOICE {
 *       utc            UTCTime,
 *       gt             GeneralizedTime} OPTIONAL,
 *     time2     [1]  CHOICE {
 *       utc            UTCTime,
 *       gt             GeneralizedTime} OPTIONAL,
 *     random1   [2]  BIT STRING OPTIONAL,
 *     random2   [3]  BIT STRING OPTIONAL} OPTIONAL,
 *   password  [2]  CHOICE {
 *     unprotected    OCTET STRING,
 *     protected      HASH{OCTET STRING},
 *     ...,
 *     userPwd   [0]  UserPwd } OPTIONAL }`
 */
