/**
 * @module DirectoryOperationalBindingTypes
 * @summary The ASN.1 module `DirectoryOperationalBindingTypes`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.directoryOperationalBindingTypes.9
 * IRI: undefined
 * EXTENSIBLE: false
 * ENCODINGREF: undefined
 * FILE: undefined
 *
 * This file was compiled by Wildboar Software's ASN.1 Compiler.
 *
 * @see {@link https://wildboarsoftware.com|Wildboar Software's Website}
 * /


/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ob } from "./UsefulDefinitions";
export { id_ob } from "./UsefulDefinitions";

/**
 * @summary id_op_binding_shadow
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-op-binding-shadow                     OBJECT IDENTIFIER ::= {id-ob 1}
 * ```
 *
 * @constant
 */
export const id_op_binding_shadow: OBJECT_IDENTIFIER = new _OID([1], id_ob);

/**
 * @summary id_op_binding_hierarchical
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-op-binding-hierarchical               OBJECT IDENTIFIER ::= {id-ob 2}
 * ```
 *
 * @constant
 */
export const id_op_binding_hierarchical: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_ob
);

/**
 * @summary id_op_binding_non_specific_hierarchical
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-op-binding-non-specific-hierarchical  OBJECT IDENTIFIER ::= {id-ob 3}
 * ```
 *
 * @constant
 */
export const id_op_binding_non_specific_hierarchical: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_ob
);

/* END_MODULE DirectoryOperationalBindingTypes */
/* eslint-enable */
