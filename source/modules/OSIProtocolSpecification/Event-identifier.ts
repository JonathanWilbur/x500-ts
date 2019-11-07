/**
 * `Event-identifier ::= INTEGER {
 *   cp-PPDU              (0),
 *   cpa-PPDU             (1),
 *   cpr-PPDU             (2),
 *   aru-PPDU             (3),
 *   arp-PPDU             (4),
 *   td-PPDU              (7),
 *   s-release-indication (14),
 *   s-release-confirm    (15) }`
 */
enum Event_identifier {
    cp_PPDU              = 0,
    cpa_PPDU             = 1,
    cpr_PPDU             = 2,
    aru_PPDU             = 3,
    arp_PPDU             = 4,
    td_PPDU              = 7,
    s_release_indication = 14,
    s_release_confirm    = 15,
}

export default Event_identifier;
