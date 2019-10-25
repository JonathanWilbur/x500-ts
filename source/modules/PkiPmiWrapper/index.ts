import { ObjectIdentifier } from "asn1-ts";
export const pkiPMIWrapperOID: ObjectIdentifier = new ObjectIdentifier([ 2, 5, 1, 42 ]);

export { default as AttributeCertificateV2 } from "./AttributeCertificateV2";
export { default as EncryptedKey } from "./EncryptedKey";
export { default as EncryptedPdu } from "./EncryptedPdu";
export { default as EncryptedPduInfo } from "./EncryptedPduInfo";
export { default as KeyAgreement } from "./KeyAgreement";
export { default as PkiWaError } from "./PkiWaError";
export { default as SenderDhInfo } from "./SenderDhInfo";
export { default as SenderDhPublicKey } from "./SenderDhPublicKey";
export { default as SenderStaticInfo } from "./SenderStaticInfo";
export { default as SignedAttributes } from "./SignedAttributes";
export { default as TBSPDU_wrapper } from "./TBSPDU-wrapper";
export { default as UserKeyingMaterial } from "./UserKeyingMaterial";
export { default as WrappedPDUInfo } from "./WrappedPDUInfo";

export const id_contentType = new ObjectIdentifier([1, 2, 840, 113549, 1, 9, 3]);
export const id_messageDigest = new ObjectIdentifier([1, 2, 840, 113549, 1, 9, 4]);
