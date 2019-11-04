/**
 * `UnitOfReplication ::= SEQUENCE {
 *   area                 AreaSpecification,
 *   attributes           AttributeSelection,
 *   knowledge            Knowledge OPTIONAL,
 *   subordinates         BOOLEAN DEFAULT FALSE,
 *   contextSelection     ContextSelection OPTIONAL,
 *   supplyContexts  [0]  CHOICE {
 *     allContexts         NULL,
 *     selectedContexts    SET SIZE (1..MAX) OF CONTEXT.&id,
 *     ... } OPTIONAL }`
 */
