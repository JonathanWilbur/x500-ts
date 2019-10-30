/**
 * `MasterOrShadowAccessPoint ::= SET {
 *   COMPONENTS OF          AccessPoint,
 *   category          [3]  ENUMERATED {
 *     master            (0),
 *     shadow            (1),
 *     writeableCopy     (2),
 *     ... } DEFAULT master,
 *   chainingRequired  [5]  BOOLEAN DEFAULT FALSE,
 *   ... }`
 */
