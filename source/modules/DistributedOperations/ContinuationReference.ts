/**
 * `ContinuationReference ::= SET {
 *   targetObject         [0]  Name,
 *   aliasedRDNs          [1]  INTEGER OPTIONAL, -- only present in first edition systems
 *   operationProgress    [2]  OperationProgress,
 *   rdnsResolved         [3]  INTEGER OPTIONAL,
 *   referenceType        [4]  ReferenceType,
 *   accessPoints         [5]  SET OF AccessPointInformation,
 *   entryOnly            [6]  BOOLEAN DEFAULT FALSE,
 *   exclusions           [7]  Exclusions OPTIONAL,
 *   returnToDUA          [8]  BOOLEAN DEFAULT FALSE,
 *   nameResolveOnMaster  [9]  BOOLEAN DEFAULT FALSE,
 *   ... }`
 */
