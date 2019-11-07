/**
 * `ABRT-source ::= INTEGER {
 *   acse-service-user     (0),
 *   acse-service-provider (1) }`
 */
enum ABRT_source {
    acse_service_user     = 0,
    acse_service_provider = 1,
}

export default ABRT_source;
