"use stricts";

const socket = io("https://cashexplorer.bitcoin.com/");

const toLegacyAddress = bchaddr.toLegacyAddress;
const address = toLegacyAddress(settings.cashaddr);

const audio = document.getElementById('sound');
const amount = document.getElementById("amount");
const notify = document.getElementById("notification");
let timeout = null;

socket.on("connect", () => {
    socket.emit("subscribe", "inv");
    console.log("Connected to Bitcoin.com")
});

socket.on("tx", (data) => {
    const vout = data.vout;

    let donation = null; // use for testing { address: "booya", value: Math.floor(Math.random() * 100000000) }

    vout.forEach(element => {
        const value = element[address] || 0;
        if (value !== 0) donation = { address: Object.keys(element)[0], value };

    });

    if (donation !== null) displayNotification(donation);
});

const displayNotification = (txInfo) => {

    const unit = settings.units;

    let value = 0.00000000;
    switch (unit) {
        case "full":
            value = (txInfo.value / 100000000).toFixed(8) + " BCH";
            break;
        case "bits":
            value = txInfo.value / 100 + " BCH Bits";
            break;
        case "sats":
            value = txInfo.value + " Satoshis";
            break;
    }

    notify.className = "show";

    amount.innerHTML = value;
    audio.play();

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        notify.className = "hidden";

    }, settings.notification.duration);

}

const init = () => {
    notify.style.color = settings.notification.color;
    notify.style.fontFamily = settings.notification.font;
    notify.style.fontSize = settings.notification.size + 'px';
}

init();