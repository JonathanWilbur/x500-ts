import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1Element,
} from "asn1-ts";
import Credentials from "./Credentials";
import Versions from "./Versions";

/**
 * `DirectoryBindArgument ::= SET {
 *   credentials  [0]  Credentials OPTIONAL,
 *   versions     [1]  Versions DEFAULT {v1},
 *   ... }`
 */
export default
class DirectoryBindArgument {
    constructor (
        readonly credentials: Credentials | undefined,
        readonly versions: Versions,
    ) {}

    public static fromElement (value: ASN1Element): DirectoryBindArgument {
        let credentials: Credentials | undefined = undefined;
        let versions: Versions = new Versions(true, false);
        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (element.tagNumber) {
            case (0): {
                credentials = element;
                break;
            }
            case (1): {
                versions = Versions.fromElement(element);
                break;
            }
            default: { break; }
            }
        });

        return new DirectoryBindArgument(credentials, versions);
    }

    public toElement (): DERElement {
        const versionsElement: DERElement = this.versions.toElement();
        versionsElement.tagClass = ASN1TagClass.context;
        versionsElement.tagNumber = 1;
        return DERElement.fromSet([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
                this.credentials,
            ),
            versionsElement,
        ]);
    }
}
