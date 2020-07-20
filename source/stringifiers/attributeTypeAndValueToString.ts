import * as asn1 from "asn1-ts";
import * as selat from "../SelectedAttributeTypes";
import { AttributeTypeAndValue } from "../InformationFramework";
import oidToAttributeName from "./oidToAttributeName";
import directoryStringToString from "./directoryStringToString";

type ElementStringifier = (el: asn1.ASN1Element) => string;

const stringifyDirectoryString = (el: asn1.ASN1Element): string => {
    return directoryStringToString(selat._decode_DirectoryString(el));
};

const stringifyPrintableString = (el: asn1.ASN1Element): string => {
    return el.printableString;
};

const whatToDo: Record<string, ElementStringifier> = {};
whatToDo[selat.id_at_countryName.toString()] = stringifyPrintableString;
whatToDo[selat.id_at_organizationName.toString()] = stringifyDirectoryString;
whatToDo[selat.id_at_organizationalUnitName.toString()] = stringifyDirectoryString;
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

export default
function attributeTypeAndValueToString (atav: AttributeTypeAndValue): string {
    const key: string = oidToAttributeName[atav.type_.toString()] ?? atav.type_.toString();
    const valueStringifier: ElementStringifier | undefined = whatToDo[atav.type_.toString()];
    const value: string = valueStringifier
        ? valueStringifier(atav.value)
        : "[Unable to display]";
    return `${key}=${value}`;
}
