import { ObjectIdentifier } from "asn1-ts";
export const pkiPmiExternalDataTypesOID: ObjectIdentifier = new ObjectIdentifier([ 2, 5, 1, 40 ]);

export { default as AccessDescription } from "./AccessDescription";
export { default as AuthorityInfoAccessSyntax } from "./AuthorityInfoAccessSyntax";
export { default as SubjectInfoAccessSyntax } from "./SubjectInfoAccessSyntax";
