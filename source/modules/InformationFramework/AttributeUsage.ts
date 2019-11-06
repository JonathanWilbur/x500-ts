/**
 * `AttributeUsage ::= ENUMERATED {
 *   userApplications     (0),
 *   directoryOperation   (1),
 *   distributedOperation (2),
 *   dSAOperation         (3),
 *   ... }`
 */
enum AttributeUsage {
    userApplications = 0,
    directoryOperation = 1,
    distributedOperation = 2,
    dSAOperation = 3,
}

export default AttributeUsage;
