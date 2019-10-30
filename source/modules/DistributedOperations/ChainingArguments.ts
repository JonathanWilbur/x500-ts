/**
 * `ChainingArguments ::= SET {
 *   originator                 [0]  DistinguishedName OPTIONAL,
 *   targetObject               [1]  DistinguishedName OPTIONAL,
 *   operationProgress          [2]  OperationProgress
 *                                DEFAULT {nameResolutionPhase notStarted},
 *   traceInformation           [3]  TraceInformation,
 *   aliasDereferenced          [4]  BOOLEAN DEFAULT FALSE,
 *   aliasedRDNs                [5]  INTEGER OPTIONAL,
 *            -- only present in first edition systems
 *   returnCrossRefs            [6]  BOOLEAN DEFAULT FALSE,
 *   referenceType              [7]  ReferenceType DEFAULT superior,
 *   info                       [8]  DomainInfo OPTIONAL,
 *   timeLimit                  [9]  Time OPTIONAL,
 *   securityParameters         [10] SecurityParameters DEFAULT {},
 *   entryOnly                  [11] BOOLEAN DEFAULT FALSE,
 *   uniqueIdentifier           [12] UniqueIdentifier OPTIONAL,
 *   authenticationLevel        [13] AuthenticationLevel OPTIONAL,
 *   exclusions                 [14] Exclusions OPTIONAL,
 *   excludeShadows             [15] BOOLEAN DEFAULT FALSE,
 *   nameResolveOnMaster        [16] BOOLEAN DEFAULT FALSE,
 *   operationIdentifier        [17] INTEGER OPTIONAL,
 *   searchRuleId               [18] SearchRuleId OPTIONAL,
 *   chainedRelaxation          [19] MRMapping OPTIONAL,
 *   relatedEntry               [20] INTEGER OPTIONAL,
 *   dspPaging                  [21] BOOLEAN DEFAULT FALSE,
 *   --                         [22] Not to be used
 *   --                         [23] Not to be used
 *   excludeWriteableCopies     [24] BOOLEAN DEFAULT FALSE,
 *   ... }`
 */
