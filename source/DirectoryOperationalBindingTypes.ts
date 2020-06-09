/*
    BEGIN_MODULE DirectoryOperationalBindingTypes
    OID: joint-iso-itu-t.ds.module.directoryOperationalBindingTypes.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import { id_ob } from "./UsefulDefinitions";
export { id_ob } from "./UsefulDefinitions";

export const id_op_binding_shadow: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_ob
);

export const id_op_binding_hierarchical: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_ob
);

export const id_op_binding_non_specific_hierarchical: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_ob
);

/* END_MODULE DirectoryOperationalBindingTypes */
