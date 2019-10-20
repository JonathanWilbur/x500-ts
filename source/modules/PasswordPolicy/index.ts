import { ObjectIdentifier } from "asn1-ts";

export { default as PwdAlphabet } from "./PwdAlphabet";
export { default as PwdEncAlg } from "./PwdEncAlg";
export { default as PwdVocabulary } from "./PwdVocabulary";
export { default as UserPwd } from "./UserPwd";

export const id_at_userPwd                    = new ObjectIdentifier([2, 5, 4, 85]);

// operational attributes

export const id_oa_pwdStartTime               = new ObjectIdentifier([2, 5, 18, 22]);
export const id_oa_pwdExpiryTime              = new ObjectIdentifier([2, 5, 18, 23]);
export const id_oa_pwdEndTime                 = new ObjectIdentifier([2, 5, 18, 24]);
export const id_oa_pwdFails                   = new ObjectIdentifier([2, 5, 18, 25]);
export const id_oa_pwdFailureTime             = new ObjectIdentifier([2, 5, 18, 26]);
export const id_oa_pwdGracesUsed              = new ObjectIdentifier([2, 5, 18, 27]);
export const id_oa_userPwdHistory             = new ObjectIdentifier([2, 5, 18, 28]);
export const id_oa_userPwdRecentlyExpired     = new ObjectIdentifier([2, 5, 18, 29]);
export const id_oa_pwdModifyEntryAllowed      = new ObjectIdentifier([2, 5, 18, 30]);
export const id_oa_pwdChangeAllowed           = new ObjectIdentifier([2, 5, 18, 31]);
export const id_oa_pwdMaxAge                  = new ObjectIdentifier([2, 5, 18, 32]);
export const id_oa_pwdExpiryAge               = new ObjectIdentifier([2, 5, 18, 33]);
export const id_oa_pwdMinLength               = new ObjectIdentifier([2, 5, 18, 34]);
export const id_oa_pwdVocabulary              = new ObjectIdentifier([2, 5, 18, 35]);
export const id_oa_pwdAlphabet                = new ObjectIdentifier([2, 5, 18, 36]);
export const id_oa_pwdDictionaries            = new ObjectIdentifier([2, 5, 18, 37]);
export const id_oa_pwdExpiryWarning           = new ObjectIdentifier([2, 5, 18, 38]);
export const id_oa_pwdGraces                  = new ObjectIdentifier([2, 5, 18, 39]);
export const id_oa_pwdFailureDuration         = new ObjectIdentifier([2, 5, 18, 40]);
export const id_oa_pwdLockoutDuration         = new ObjectIdentifier([2, 5, 18, 41]);
export const id_oa_pwdMaxFailures             = new ObjectIdentifier([2, 5, 18, 42]);
export const id_oa_pwdMaxTimeInHistory        = new ObjectIdentifier([2, 5, 18, 43]);
export const id_oa_pwdMinTimeInHistory        = new ObjectIdentifier([2, 5, 18, 44]);
export const id_oa_pwdHistorySlots            = new ObjectIdentifier([2, 5, 18, 45]);
export const id_oa_pwdRecentlyExpiredDuration = new ObjectIdentifier([2, 5, 18, 46]);
export const id_oa_pwdEncAlg                  = new ObjectIdentifier([2, 5, 18, 47]);

// matching rules

export const id_mr_userPwdMatch               = new ObjectIdentifier([2, 5, 13, 71]);
export const id_mr_userPwdHistoryMatch        = new ObjectIdentifier([2, 5, 13, 72]);
export const id_mr_pwdEncAlgMatch             = new ObjectIdentifier([2, 5, 13, 73]);

// syntaxes

export const id_asx_userPwdDescription        = new ObjectIdentifier([2, 5, 40, 0]);
export const id_asx_pwdVocabularyDescription  = new ObjectIdentifier([2, 5, 40, 1]);
export const id_asx_pwdAlphabetDescription    = new ObjectIdentifier([2, 5, 40, 2]);
export const id_asx_pwdEncAlgDescription      = new ObjectIdentifier([2, 5, 40, 3]);
