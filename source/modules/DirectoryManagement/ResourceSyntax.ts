/**
 * `ResourceSyntax ::= INTEGER {
 *   insufficientMemory(0),
 *   insufficientAssociations(1),
 *   insufficientDiskSpace(2),
 *   miscellaneousResourceExhausted(4)}`
 */
enum ResourceSyntax {
    insufficientMemory = 0,
    insufficientAssociations = 1,
    insufficientDiskSpace = 2,
    miscellaneousResourceExhausted = 4,
}

export default ResourceSyntax;
