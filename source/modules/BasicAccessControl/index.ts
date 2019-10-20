import { ObjectIdentifier } from "asn1-ts";

export { default as ACIItem } from "./ACIItem";
export { default as AuthenticationLevel } from "./AuthenticationLevel";
export { default as GrantsAndDenials } from "./GrantsAndDenials";
export { default as ItemPermission } from "./ItemPermission";
export { default as MaxValueCount } from "./MaxValueCount";
export { default as Precedence } from "./Precedence";
export { default as ProtectedItems } from "./ProtectedItems";
export { default as RestrictedValue } from "./RestrictedValue";
export { default as UserClasses } from "./UserClasses";
export { default as UserPermission } from "./UserPermission";

// attributes

export const id_aca_accessControlScheme     = new ObjectIdentifier([2, 5, 24, 1]);
export const id_aca_prescriptiveACI         = new ObjectIdentifier([2, 5, 24, 4]);
export const id_aca_entryACI                = new ObjectIdentifier([2, 5, 24, 5]);
export const id_aca_subentryACI             = new ObjectIdentifier([2, 5, 24, 6]);

// access control schemes

export const basicAccessControlScheme       = new ObjectIdentifier([2, 5, 28, 1]);
export const simplifiedAccessControlScheme  = new ObjectIdentifier([2, 5, 28, 2]);
export const rule_based_access_control      = new ObjectIdentifier([2, 5, 28, 3]);
export const rule_and_basic_access_control  = new ObjectIdentifier([2, 5, 28, 4]);
export const rule_and_simple_access_control = new ObjectIdentifier([2, 5, 28, 5]);
