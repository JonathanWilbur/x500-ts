import {
    ASN1Element,
    DERElement,
    ObjectIdentifier,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import {
    _encodeIA5String,
    _encodePrintableString,
} from "asn1-ts/dist/node/functional";
import * as selat from "../collections/selectedAttributeTypeAttributes";
import { AttributeTypeAndValue as ATAV } from "../modules/InformationFramework/AttributeTypeAndValue.ta";
import { RelativeDistinguishedName as RDN } from "../modules/InformationFramework/RelativeDistinguishedName.ta";
import { _encode_UnboundedDirectoryString as _encode_UBS } from "../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta";

// OpenSSL on Windows 10:
// Subject: CN = Jonathan Wilbur + dnQualifier = 68109699-a4f6-477e-a7b2-1246ef9717f3, ST = FL, C = US

const encodeUBS = (str: string): ASN1Element => {
    return _encode_UBS(
        {
            uTF8String: str,
        },
        () => new DERElement()
    );
};

const encodePrintableString = (str: string): ASN1Element => {
    return _encodePrintableString(str, () => new DERElement());
};

const encodeIA5String = (str: string): ASN1Element => {
    return _encodeIA5String(str, () => new DERElement());
};

export const nameToAttribute = new Map<
    string,
    [OBJECT_IDENTIFIER, (str: string) => ASN1Element]
>([
    ["cn", [selat.commonName["&id"], encodeUBS]],
    ["gn", [selat.givenName["&id"], encodeUBS]],
    ["sn", [selat.surname["&id"], encodeUBS]],
    ["dnqualifier", [selat.dnQualifier["&id"], encodePrintableString]],
    ["st", [selat.stateOrProvinceName["&id"], encodeUBS]],
    ["c", [selat.countryName["&id"], encodePrintableString]],
    ["o", [selat.organizationName["&id"], encodeUBS]],
    ["ou", [selat.organizationalUnitName["&id"], encodeUBS]],
    ["sn", [selat.serialNumber["&id"], encodePrintableString]],
    ["initials", [selat.initials["&id"], encodeUBS]],
    ["pseudonym", [selat.pseudonym["&id"], encodeUBS]],
    ["generationqualifier", [selat.generationQualifier["&id"], encodeUBS]],
    ["title", [selat.title["&id"], encodeUBS]],

    // This is not defined in any X.500 standard, but is still widely used. Defined in IETF RFC 2247.
    [
        "dc",
        [
            new ObjectIdentifier([0, 9, 2342, 19200300, 100, 1, 25]),
            encodeIA5String,
        ],
    ],
]);

/**
 * @see https://stackoverflow.com/questions/3891641/regex-test-only-works-every-other-time
 */
const oidRegex = /^(0|1|2)\.\d+(?:\.\d+)+$/;

export function atavFromString(
    str: string,
    encodingMap: Map<
        string,
        [OBJECT_IDENTIFIER, (str: string) => ASN1Element]
    > = nameToAttribute
): ATAV {
    const firstEqualSign: number = str.indexOf("=");
    if (firstEqualSign === -1) {
        throw new Error(str);
    }
    const name = str.slice(0, firstEqualSign).trim().toLowerCase();
    const value = str.slice(firstEqualSign + 1).trim();
    const attr = encodingMap.get(name);
    if (attr) {
        const [oid, encoder] = attr;
        return new ATAV(oid, encoder(value));
    } else {
        if (oidRegex.test(name)) {
            // Then it is just an OID.
            const oid: OBJECT_IDENTIFIER = new ObjectIdentifier(
                str.split(".").map((c) => Number.parseInt(c))
            );
            return new ATAV(
                oid,
                encodeUBS(value) // We guess that it is a UBS...
            );
        } else {
            throw new Error(name);
        }
    }
}

export function* rdnFromString(
    str: string,
    escape: number = "\\".charCodeAt(0),
    atavDelimiter: number = "+".charCodeAt(0),
    encodingMap: Map<
        string,
        [OBJECT_IDENTIFIER, (str: string) => ASN1Element]
    > = nameToAttribute
): IterableIterator<ATAV> {
    let start: number = 0;
    const escapeString: string = String.fromCharCode(escape);
    for (let i: number = 0; i < str.length; i++) {
        const char: number = str.charCodeAt(i);
        const prevChar: number = str.charCodeAt(i - 1);
        if (char === atavDelimiter && prevChar !== escape) {
            const escapedATAVString = str
                .slice(start, i)
                .split(escapeString)
                .map((segment: string): string =>
                    segment.length ? segment : escapeString
                )
                .join("");
            yield atavFromString(escapedATAVString, encodingMap);
            i++;
            start = i;
        }
    }
    const escapedATAVString = str
        .slice(start)
        .split(escapeString)
        .map((segment: string): string =>
            segment.length ? segment : escapeString
        )
        .join("");
    yield atavFromString(escapedATAVString, encodingMap);
}

export default function* rdnSequenceFromString(
    str: string,
    escape: number = "\\".charCodeAt(0),
    rdnDelimiter: number = ",".charCodeAt(0),
    atavDelimiter: number = "+".charCodeAt(0),
    encodingMap: Map<
        string,
        [OBJECT_IDENTIFIER, (str: string) => ASN1Element]
    > = nameToAttribute
): IterableIterator<RDN> {
    let start: number = 0;
    for (let i: number = 0; i < str.length; i++) {
        const char: number = str.charCodeAt(i);
        const prevChar: number = str.charCodeAt(i - 1);
        if (char === rdnDelimiter && prevChar !== escape) {
            const unescapedRDN = str.slice(start, i);
            yield Array.from(
                rdnFromString(unescapedRDN, escape, atavDelimiter, encodingMap)
            );
            i++;
            start = i;
        }
    }
    const unescapedRDN = str.slice(start);
    yield Array.from(
        rdnFromString(unescapedRDN, escape, atavDelimiter, encodingMap)
    );
}
