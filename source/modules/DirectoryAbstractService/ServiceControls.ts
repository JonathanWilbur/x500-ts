/**
 * `ServiceControls ::= SET {
 *   options              [0]  ServiceControlOptions DEFAULT {},
 *   priority             [1]  INTEGER {low(0), medium(1), high(2)} DEFAULT medium,
 *   timeLimit            [2]  INTEGER OPTIONAL,
 *   sizeLimit            [3]  INTEGER OPTIONAL,
 *   scopeOfReferral      [4]  INTEGER {dmd(0), country(1)} OPTIONAL,
 *   attributeSizeLimit   [5]  INTEGER OPTIONAL,
 *   manageDSAITPlaneRef  [6]  SEQUENCE {
 *     dsaName                   Name,
 *     agreementID               AgreementID,
 *     ...} OPTIONAL,
 *   serviceType          [7]  OBJECT IDENTIFIER OPTIONAL,
 *   userClass            [8]  INTEGER OPTIONAL,
 *   ... }`
 */
