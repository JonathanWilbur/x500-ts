/**
 * `RequestShadowUpdateArgumentData ::= [0]  SEQUENCE {
 *   agreementID         AgreementID,
 *   lastUpdate          Time OPTIONAL,
 *   requestedStrategy   CHOICE {
 *     standard  ENUMERATED {
 *       incremental (1),
 *       total       (2),
 *       ...},
 *     other     EXTERNAL,
 *     ...},
 *   securityParameters  SecurityParameters OPTIONAL,
 *   ...}`
 */
