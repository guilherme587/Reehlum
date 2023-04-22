import Quagga from 'quagga';
const Quagga = require('quagga').default;

Quagga.init({
    inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#camera')
    },
    decoder: {
        readers: ["code_128_reader", "code_93_reader", "2of5_reader", "i2of5_reader", "upc_e_reader",
            "upc_reader", "codabar_reader", "code_39_vin_reader", "code_39_reader", "ean_8_reader",
            "ean_reader"]
    }
}, function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();
});

Quagga.onDetected(function (data) {
    console.log(data);
    document.querySelector('#code').innerHTML = data.codeResult.code;
});

Quagga.locate = true;