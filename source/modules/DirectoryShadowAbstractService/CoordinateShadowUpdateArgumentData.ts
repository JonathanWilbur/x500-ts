/**
 * `CoordinateShadowUpdateArgumentData ::= [0]  SEQUENCE {
 *   agreementID         AgreementID,
 *   lastUpdate          Time OPTIONAL,
 *   updateStrategy      CHOICE {
 *     standard            ENUMERATED {
 *       noChanges   (0),
 *       incremental (1),
 *       total       (2),
 *       ...},
 *     other               EXTERNAL,
 *     ...},
 *   securityParameters  SecurityParameters OPTIONAL,
 *   ...}`
 */
