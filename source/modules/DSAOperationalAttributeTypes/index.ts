import { ObjectIdentifier } from "asn1-ts";

export { default as ConsumerInformation } from "./ConsumerInformation";
export { default as DSEType } from "./DSEType";
export { default as SupplierAndConsumers } from "./SupplierAndConsumers";
export { default as SupplierInformation } from "./SupplierInformation";
export { default as SupplierOrConsumer } from "./SupplierOrConsumer";

// dsa operational attributes

export const id_doa_dseType                  = new ObjectIdentifier([2, 5, 12, 0]);
export const id_doa_myAccessPoint            = new ObjectIdentifier([2, 5, 12, 1]);
export const id_doa_superiorKnowledge        = new ObjectIdentifier([2, 5, 12, 2]);
export const id_doa_specificKnowledge        = new ObjectIdentifier([2, 5, 12, 3]);
export const id_doa_nonSpecificKnowledge     = new ObjectIdentifier([2, 5, 12, 4]);
export const id_doa_supplierKnowledge        = new ObjectIdentifier([2, 5, 12, 5]);
export const id_doa_consumerKnowledge        = new ObjectIdentifier([2, 5, 12, 6]);
export const id_doa_secondaryShadows         = new ObjectIdentifier([2, 5, 12, 7]);
export const id_doa_ditBridgeKnowledge       = new ObjectIdentifier([2, 5, 12, 8]);

// knowledge matching rules

export const id_kmr_accessPointMatch         = new ObjectIdentifier([2, 5, 14, 0]);
export const id_kmr_masterShadowMatch        = new ObjectIdentifier([2, 5, 14, 1]);
export const id_kmr_supplierConsumerMatch    = new ObjectIdentifier([2, 5, 14, 2]);
export const id_kmr_supplierConsumersMatch   = new ObjectIdentifier([2, 5, 14, 3]);
