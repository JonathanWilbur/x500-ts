import {
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";

// pwdHistoryMatch{ATTRIBUTE:passwordAttribute,OBJECT IDENTIFIER:id}
// MATCHING-RULE ::= {
//   SYNTAX     passwordAttribute.&Type
//   ID         id}

export
function pwdHistoryMatch (passwordAttribute: ATTRIBUTE, id: OBJECT_IDENTIFIER): MATCHING_RULE {
    return {
        class: "MATCHING-RULE",
        decoderFor: {
            "&AssertionType": passwordAttribute.decoderFor["&Type"],
        },
        encoderFor: {
            "&AssertionType": passwordAttribute.encoderFor["&Type"],
        },
        "&id": id,
        "&AssertionType": passwordAttribute["&Type"],
    };
}
