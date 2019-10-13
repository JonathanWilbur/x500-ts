import { ASN1Element, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";

export default
interface ConstructedElementSpecification {
    name: string;
    optional?: boolean;
    tagClass?: ASN1TagClass;
    construction?: ASN1Construction;
    tagNumber?: ASN1UniversalType;
    choice?: ConstructedElementSpecification[];
    callback?: (el: ASN1Element) => void;
}
