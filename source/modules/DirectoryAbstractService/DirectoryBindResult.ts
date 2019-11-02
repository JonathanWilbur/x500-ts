import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
} from "asn1-ts";
import Credentials from "./Credentials";
import Versions from "./Versions";
import PwdResponseValue from "./PwdResponseValue";

/**
 * `DirectoryBindResult ::= SET {
 *   credentials       [0]  Credentials OPTIONAL,
 *   versions          [1]  Versions DEFAULT {v1},
 *   ...,
 *   pwdResponseValue  [2]  PwdResponseValue OPTIONAL }`
 */
export default
class DirectoryBindResult {
    constructor (
        readonly credentials: Credentials | undefined,
        readonly versions: Versions,
        readonly pwdResponseValue: PwdResponseValue | undefined,
    ) {}

    public static fromElement (value: DERElement): DirectoryBindResult {
        let credentials: Credentials | undefined = undefined;
        let versions: Versions = new Versions(true, false);
        let pwdResponseValue: PwdResponseValue | undefined = undefined;
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
            case (2): {
                pwdResponseValue = PwdResponseValue.fromElement(element);
                break;
            }
            default: { break; }
            }
        });

        return new DirectoryBindResult(credentials, versions, pwdResponseValue);
    }

    public toElement (): DERElement {
        const versionsElement: DERElement = this.versions.toElement();
        versionsElement.tagClass = ASN1TagClass.context;
        versionsElement.tagNumber = 1;

        let pwdResponseValueElement: DERElement | undefined = undefined;
        if (this.pwdResponseValue) {
            pwdResponseValueElement = this.pwdResponseValue.toElement();
            pwdResponseValueElement.tagClass = ASN1TagClass.context;
            pwdResponseValueElement.tagNumber = 2;
        }

        return DERElement.fromSet([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
                this.credentials,
            ),
            versionsElement,
            pwdResponseValueElement,
        ]);
    }
}
