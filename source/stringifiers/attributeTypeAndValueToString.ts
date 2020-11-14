import * as asn1 from "asn1-ts";
import { AttributeTypeAndValue } from "../InformationFramework";
import * as selat from "../SelectedAttributeTypes";
import directoryStringToString from "./directoryStringToString";
import oidToAttributeName from "./oidToAttributeName";

type ElementStringifier = (el: asn1.ASN1Element) => string;

const stringifyDirectoryString = (el: asn1.ASN1Element): string => {
    return directoryStringToString(selat._decode_DirectoryString(el));
};

const stringifyPrintableString = (el: asn1.ASN1Element): string => {
    return el.printableString;
};

const stringifyIA5String = (el: asn1.ASN1Element): string => {
    return el.ia5String;
};

const whatToDo: Record<string, ElementStringifier> = {};
whatToDo[selat.id_at_countryName.toString()] = stringifyPrintableString;
whatToDo[selat.id_at_organizationName.toString()] = stringifyDirectoryString;
whatToDo[
    selat.id_at_organizationalUnitName.toString()
] = stringifyDirectoryString;
whatToDo[selat.id_at_dnQualifier.toString()] = stringifyPrintableString;
whatToDo[selat.id_at_stateOrProvinceName.toString()] = stringifyDirectoryString;
whatToDo[selat.id_at_commonName.toString()] = stringifyDirectoryString;
whatToDo[selat.id_at_serialNumber.toString()] = stringifyPrintableString;
whatToDo[selat.id_at_localityName.toString()] = stringifyDirectoryString;
whatToDo[selat.id_at_title.toString()] = stringifyDirectoryString;
whatToDo[selat.id_at_surname.toString()] = stringifyDirectoryString;
whatToDo[selat.id_at_givenName.toString()] = stringifyDirectoryString;
whatToDo[selat.id_at_initials.toString()] = stringifyDirectoryString;
whatToDo[selat.id_at_pseudonym.toString()] = stringifyDirectoryString;
whatToDo[selat.id_at_generationQualifier.toString()] = stringifyDirectoryString;

const domainComponentID = "0.9.2342.19200300.100.1.25"; // Defined in https://tools.ietf.org/html/rfc4519#section-2.4.
whatToDo[domainComponentID] = stringifyIA5String;

export default function attributeTypeAndValueToString(
    atav: AttributeTypeAndValue
): string {
    const key: string =
        oidToAttributeName[atav.type_.toString()] ?? atav.type_.toString();
    const valueStringifier: ElementStringifier | undefined =
        whatToDo[atav.type_.toString()];
    const value: string = valueStringifier
        ? valueStringifier(atav.value)
        : "[Unable to display]";
    return `${key}=${value}`;
}
