import { ObjectIdentifier } from "asn1-ts";

export { default as AVIHash } from "./AVIHash";
export { default as AttribsHash } from "./AttribsHash";
// export { default as AttributeIntegrityInfo } from "./AttributeIntegrityInfo";
export { default as AttributeIntegrityInfoContent } from "./AttributeIntegrityInfoContent";
export { default as AttributeTypeValueContexts } from "./AttributeTypeValueContexts";
// export { default as AttributeValueIntegrityInfo } from "./AttributeValueIntegrityInfo";
export { default as AttributeValueIntegrityInfoContent } from "./AttributeValueIntegrityInfoContent";
export { default as ClassList } from "./ClassList";
export { default as Clearance } from "./Clearance";
export { default as HashedAttributes } from "./HashedAttributes";
export { default as IssuerAndSerialNumber } from "./IssuerAndSerialNumber";
export { default as PrivacyMark } from "./PrivacyMark";
export { default as Scope } from "./Scope";
export { default as SecurityCategories } from "./SecurityCategories";
export { default as SecurityCategory } from "./SecurityCategory";
export { default as SecurityClassification } from "./SecurityClassification";
export { default as SecurityLabel } from "./SecurityLabel";
export { default as SecurityPolicyIdentifier } from "./SecurityPolicyIdentifier";
// export { default as SignedSecurityLabel } from "./SignedSecurityLabel";
export { default as SignedSecurityLabelContent } from "./SignedSecurityLabelContent";
export { default as Signer } from "./Signer";
export { default as SpecificallyIdentified } from "./SpecificallyIdentified";
export { default as ThisEntry } from "./ThisEntry";

// Object identifier assignments
// object classes

export const id_oc_integrityInfo = new ObjectIdentifier([2, 5, 6, 40]);

// attributes

export const id_at_clearance = new ObjectIdentifier([2, 5, 4, 55]);
// id-at-defaultDirQop                    OBJECT IDENTIFIER ::= {id-at 56}
export const id_at_attributeIntegrityInfo = new ObjectIdentifier([2, 5, 4, 57]);
// id-at-confKeyInfo                      OBJECT IDENTIFIER ::= {id-at 60}

// matching rules

// id-mr-readerAndKeyIDMatch              OBJECT IDENTIFIER ::= {id-mr 43}

// contexts

export const id_avc_attributeValueSecurityLabelContext = new ObjectIdentifier([2, 5, 31, 3]);
export const id_avc_attributeValueIntegrityInfoContext  = new ObjectIdentifier([2, 5, 31, 4]);
