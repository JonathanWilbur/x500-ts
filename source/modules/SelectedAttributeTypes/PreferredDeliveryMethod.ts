/**
 * PreferredDeliveryMethod ::= SEQUENCE OF INTEGER {
 *   any-delivery-method   (0),
 *   mhs-delivery          (1),
 *   physical-delivery     (2),
 *   telex-delivery        (3),
 *   teletex-delivery      (4),
 *   g3-facsimile-delivery (5),
 *   g4-facsimile-delivery (6),
 *   ia5-terminal-delivery (7),
 *   videotex-delivery     (8),
 *   telephone-delivery    (9) }
 */
type PreferredDeliveryMethod = number[];
export default PreferredDeliveryMethod;
