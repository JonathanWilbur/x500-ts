const asn1 = require("asn1-ts");
const { _decode_Certificate, _encode_Certificate } = require("../../dist/node/modules/AuthenticationFramework/Certificate.ta");


describe("This library", () => {
    test("can decode a certificate with extensions.", () => {
        const certBytes = Buffer.from(
            `MIIFajCCA1KgAwIBAgIJALhlpkCfpoMfMA0GCSqGSIb3DQEBCwUAMEoxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJGTDEOMAwGA1UEBwwFVGFtcGExDDAKBgNVBAoMA1JYTjEQMA4GA1UEAwwHVGVzdCBDQTAeFw0yMDA2MjMxOTQzNDhaFw0yMTA2MjMxOTQzNDhaMEoxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJGTDEOMAwGA1UEBwwFVGFtcGExDDAKBgNVBAoMA1JYTjEQMA4GA1UEAwwHVGVzdCBDQTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAKQ9pSJSOxRwhy4QUTiVCRGQsDnkO0vqxhjbo8GHfQFF2m/ltwb6FeTWB8g/hbtCk1Zn+5x6rCA6FT1mmlkjdrI4a4zYfHI5urHy1lzuP4eQNr/zN2ICDe/gI50UdjzZRJMSmWS6HedP0+dWjHbeEQsYnzTfQrrnIL0hNiVXPs0nzuczBmveQ9WLAXOwcXFVGdcqBftW2Sw/3Tpg6AhbrLeQQU3UE3kdsKGwwLItsX8vwh5Z5D8F7pRRRJRs0cIpyrYzEBCmn5bVbeHXw5wqRqa0dghaSWyvNl+vP/cZJfWQ4rF85aX1RHyva2QUE8vFCBySh7sA17dCGkrALSb60eNvJchvUms47nTv+RhtfTG74C4SrDgy8oig9hWRM7XOfJ9IG3zuLTSz9yXk8i3cv4sWdlH0/1t5yhtXP5e/VBpMK8uhUJ0V94+u4zQgL+9fhfj3RmHJWs4EyBKWEFmx8bSf6pXIF9WsVKoUQsmePun+jmTRqQeX4yUU/AWoicX6V/URiRVMEQIjPKwDtK6yf1CJU3Z/Dyp2I1WDqQ4AikdJ29S9ID4rCbO+4AoGVUVVPauPe4QCvWCBUsxVmB4HhBaRYC5HGWmkMiLPPGlR8UaVDP7ey2ET0lO7nB0EwYF5kPC580wwEXISDIvvGwXQe3jx2c0E0CXDJkf50xnTUnNNAgMBAAGjUzBRMB0GA1UdDgQWBBTpennT4alUV+2jnI9iLiKYyU4KhjAfBgNVHSMEGDAWgBTpennT4alUV+2jnI9iLiKYyU4KhjAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4ICAQBiwxB2pRhZoTeiIHRjiHybaDk6m0AK/yLtWtjXjaxmAO49pZjGOySf7OR8iSxDAupXFxTPOMqlCk+1t+1yvso0t6Y+WkyBPP8My779OPBVhxnRMTeXa0pQUVX9e0ellyJUYPAle3sHQrq6TM030qqngNosBTqo25uwxu3hMND4SlN6sOYZQk4X3e191gebngwV3wQwOfgVzkFNwORPXlltnCrbyoSvUU+1WlfdCrDW+PpKWke76WCN8+xeLPzZ/10qazMWJvgjUhphtmIqpOLYZISXbV7lRc1nxv1j6cn2+exCWQxKk0w1jAOeuaxVMqAm2mKJgthjofbCsydtHooI9019wrmGagxc/exlwZqezipJbgDQ5Apxq78uV+KCq5FC1CTN64jl7fEEf09JS2ytwGj6EI6q8t/76jIPg6aNmWKuceDKVe/9h1XeKACBSxi7lTIBDvWshMTsNQj3HLbQwhW4mXdv8LvaxHJRhWLsW7B6p5fy4PQkGHfD33PsStRvw7wq4dCE8Wwr/hiqXypV1C73Uu3NWvTmbxFvI600oL/KDvihGYlnZJ2xa8gvdwG04hSZdgJXHwP7F+yPqbZP3grBykxb6AY0iK8VCNf1MdgNAGgB3nIWedLZ/jpBnMi7LY8gZoobDj/hqJCtvf2moxPLoRtKSPmjyBRptDg5Rw==`,
            "base64",
        );
        // console.log(certBytes.toString());
        const el = new asn1.DERElement();
        // const el2 = new asn1.BERElement();
        /**
         * REVIEW: Why was it necessary to convert Buffer to Uint8Array?
         *
         * For some reason, this didn't even work when I made another Buffer from certBytes.
         * For some reason, when I use BERElement or create a Uint8Array from certBytes, it works. DERElement does not work.
         */
        // el.fromBytes(new Uint8Array(certBytes));
        el.fromBytes(certBytes);
        // el2.fromBytes(certBytes);
        // expect(el.value.length).toBe(el2.value.length);
        // console.log(Buffer.from(el.value).toString("hex"));
        expect(() => {
            _decode_Certificate(el);
        }).not.toThrow();
    });
});
