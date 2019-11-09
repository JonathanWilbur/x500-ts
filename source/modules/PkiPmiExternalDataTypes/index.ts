import { ObjectIdentifier } from "asn1-ts";
export const pkiPmiExternalDataTypesOID: ObjectIdentifier = new ObjectIdentifier([ 2, 5, 1, 40 ]);

export { default as AccessDescription } from "./AccessDescription";
export { default as AuthorityInfoAccessSyntax } from "./AuthorityInfoAccessSyntax";
export { default as SubjectInfoAccessSyntax } from "./SubjectInfoAccessSyntax";

// id-pkix                   OBJECT IDENTIFIER ::= { intSecurity mechanisms(5) pkix(7) }

// id-pe                     OBJECT IDENTIFIER ::= { id-pkix 1 }
// id-ad                     OBJECT IDENTIFIER ::= { id-pkix 48 }

// id-pe-authorityInfoAccess OBJECT IDENTIFIER ::= { id-pe 1 }
// id-pe-subjectInfoAccess   OBJECT IDENTIFIER ::= { id-pe 11 }
// id-ad-caIssuers           OBJECT IDENTIFIER ::= { id-ad 2 }
// id-ad-ocsp                OBJECT IDENTIFIER ::= { id-ad 1 }


// ub-integer-options                        INTEGER ::= 256
// ub-e163-4-number-length                   INTEGER ::= 15
// ub-e163-4-sub-address-length              INTEGER ::= 40
// ub-unformatted-address-length             INTEGER ::= 180
// ub-pds-parameter-length                   INTEGER ::= 30
// ub-pds-physical-address-lines             INTEGER ::= 6
// ub-postal-code-length                     INTEGER ::= 16
// ub-pds-name-length                        INTEGER ::= 16
// ub-universal-surname-length               INTEGER ::= 64
// ub-universal-given-name-length            INTEGER ::= 40
// ub-universal-initials-length              INTEGER ::= 16
// ub-universal-generation-qualifier-length  INTEGER ::= 16
// ub-common-name-length                     INTEGER ::= 64
// ub-extension-attributes                   INTEGER ::= 256
// ub-domain-defined-attribute-type-length   INTEGER ::= 8
// ub-domain-defined-attribute-value-length  INTEGER ::= 128
// ub-domain-defined-attributes              INTEGER ::= 4
// ub-organizational-unit-name-length        INTEGER ::= 32
// ub-organizational-units                   INTEGER ::= 4
// ub-generation-qualifier-length            INTEGER ::= 3
// ub-initials-length                        INTEGER ::= 5
// ub-given-name-length                      INTEGER ::= 16
// ub-surname-length                         INTEGER ::= 40
// ub-numeric-user-id-length                 INTEGER ::= 32
// ub-organization-name-length               INTEGER ::= 64
// ub-terminal-id-length                     INTEGER ::= 24
// ub-x121-address-length                    INTEGER ::= 16
// ub-domain-name-length                     INTEGER ::= 16
// ub-country-name-alpha-length              INTEGER ::= 2
// ub-country-name-numeric-length            INTEGER ::= 3
