function encodeAndDecodeMessages() {
    const encodeBtnEl = document.getElementsByTagName('button')[0];
    const decodeBtnEl = document.getElementsByTagName('button')[1];
    const msgSendingEl = document.getElementsByTagName('textarea')[0];
    const msgReceivedEl = document.getElementsByTagName('textarea')[1];

    encodeBtnEl.addEventListener('click', encode);
    decodeBtnEl.addEventListener('click', decode);

    function encode() {
        let msg = msgSendingEl.value;
        let msgEncoded = '';

        for (let c of msg) {
            msgEncoded += String.fromCharCode(c.charCodeAt(0) + 1);
        }

        msgSendingEl.value = '';
        msgReceivedEl.value = msgEncoded;
    }

    function decode() {
        let msgEncoded = msgReceivedEl.value;
        let msgDecoded = '';

        for (let c of msgEncoded) {
            msgDecoded += String.fromCharCode(c.charCodeAt(0) - 1);
        }

        msgReceivedEl.value = msgDecoded;
    }
}