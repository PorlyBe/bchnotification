"use stricts";

const socket = io("https://cashexplorer.bitcoin.com/");

const toLegacyAddress = bchaddr.toLegacyAddress;
const address = toLegacyAddress(settings.cashaddr);

const audio = document.getElementById('sound');
const amount = document.getElementById("amount");
const notify = document.getElementById("notification");
const message = document.getElementById("message");

let timeout = null;

socket.on("connect", () => {
    socket.emit("subscribe", "inv");
    console.log("Connected to Bitcoin.com")
});

socket.on("tx", (data) => {
    const vout = data.vout;

    let donation = settings.testmode ? Math.floor(Math.random() * 100000000) : null;

    vout.forEach(element => {
        const value = element[address] || 0;
        if (value !== 0) donation = value;

    });

    if (donation !== null) displayNotification(donation);
});

const displayNotification = (val) => {

    const unit = settings.units;

    let value = 0.00000000;
    switch (unit) {
        case "full":
            value = (val / 100000000).toFixed(8) + " BCH";
            break;
        case "bits":
            value = val / 100 + " BCH Bits";
            break;
        case "sats":
            value = val + " Satoshis";
            break;
        default:
            value = val + " Satoshis";
    }

    notify.className = "show";

    amount.innerHTML = value;
    settings.sound && audio.play();

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        notify.className = "hidden";

    }, settings.notification.duration);

}

const init = () => {
    message.innerHTML = settings.notification.message;
    notify.style.color = settings.notification.color;
    notify.style.fontFamily = settings.notification.font;
    notify.style.fontSize = settings.notification.size + 'px';
}

init();