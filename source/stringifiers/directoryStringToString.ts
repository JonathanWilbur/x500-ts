import { UnboundedDirectoryString } from "../modules/SelectedAttributeTypes";

// export type UnboundedDirectoryString =
//     | { teletexString: asn1.TeletexString } /* CHOICE_ALT_ROOT */
//     | { printableString: asn1.PrintableString } /* CHOICE_ALT_ROOT */
//     | { bmpString: asn1.BMPString } /* CHOICE_ALT_ROOT */
//     | { universalString: asn1.UniversalString } /* CHOICE_ALT_ROOT */
//     | { uTF8String: asn1.UTF8String } /* CHOICE_ALT_ROOT */;

export default function directoryStringToString(
    ds: UnboundedDirectoryString
): string {
    if ("teletexString" in ds) {
        return "[Cannot display TeletexString]";
    } else if ("printableString" in ds) {
        return ds.printableString;
    } else if ("bmpString" in ds) {
        return ds.bmpString;
    } else if ("universalString" in ds) {
        return ds.universalString;
    } else if ("uTF8String" in ds) {
        return ds.uTF8String;
    } else {
        return "[Unrecognized DirectoryString alternative]";
    }
}
