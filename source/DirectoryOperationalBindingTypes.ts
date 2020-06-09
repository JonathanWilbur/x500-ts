
// DirectoryOperationalBindingTypes
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    id_ob
} from "./UsefulDefinitions";
export {
    id_ob
} from "./UsefulDefinitions";


const itu_t: number = 0;
const itu_r: number = 0;
const ccitt: number = 0;
const iso: number = 1;
const joint_iso_itu_t: number = 2;
const joint_iso_ccitt: number = 2;

export const id_op_binding_shadow: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_ob);

export const id_op_binding_hierarchical: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_ob);

export const id_op_binding_non_specific_hierarchical: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_ob);

