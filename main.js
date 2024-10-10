// function setDapurLed() {
//     ledDapur.style.backgroundColor = "red";
//     dapurLedImage.src = "./assets/ledmerah.png";
// }

// function setTamuLed() {
//     ledTamu.style.backgroundColor = "red";
//     tamuLedImage.src = "./assets/ledmerah.png"
// }

// function setMakanLed() {
//     ledMakan.style.backgroundColor = "red";
//     makanLedImage.src = "./assets/ledmerah.png"
// }

// function setToiletLed() {
//     ledToilet.style.backgroundColor = "red";
//     toiletLedImage.src = "./assets/ledmerah.png"
// }

function setDapurLed() {
    // Ambil elemen-elemen yang diperlukan
    var ledDapur = document.getElementById("ledDapur");
    var dapurLedImage = document.getElementById("dapurLedImage");

    // Cek kondisi tombol saat ini
    if (ledDapur.innerHTML === "TURN ON") {
        // Ubah menjadi kondisi menyala
        ledDapur.innerHTML = "TURN OFF"; // Ubah teks tombol
        dapurLedImage.src = "./assets/ledmerah.png"; // Ganti gambar lampu nyala
        ledDapur.style.backgroundColor = "red"; // Ubah warna tombol menjadi merah
    } else {
        // Ubah kembali ke kondisi mati
        ledDapur.innerHTML = "TURN ON"; // Kembalikan teks tombol
        dapurLedImage.src = "./assets/led-off.png"; // Kembalikan gambar lampu mati
        ledDapur.style.backgroundColor = "#579fff"; // Kembalikan warna tombol
    }
}

function setTamuLed() {
    var ledTamu = document.getElementById("ledTamu");
    var tamuLedImage = document.getElementById("tamuLedImage");

    if (ledTamu.innerHTML === "TURN ON") {
        ledTamu.innerHTML = "TURN OFF";
        tamuLedImage.src = "./assets/ledmerah.png";
        ledTamu.style.backgroundColor = "red";
    } else {
        ledTamu.innerHTML = "TURN ON";
        tamuLedImage.src = "./assets/led-off.png";
        ledTamu.style.backgroundColor = "#579fff";
    }
}

function setMakanLed() {
    var ledMakan = document.getElementById("ledMakan");
    var makanLedImage = document.getElementById("makanLedImage");

    if (ledMakan.innerHTML === "TURN ON") {
        ledMakan.innerHTML = "TURN OFF";
        makanLedImage.src = "./assets/ledmerah.png";
        ledMakan.style.backgroundColor = "red";
    } else {
        ledMakan.innerHTML = "TURN ON";
        makanLedImage.src = "./assets/led-off.png";
        ledMakan.style.backgroundColor = "#579fff";
    }
}

function setToiletLed() {
    var ledToilet = document.getElementById("ledToilet");
    var toiletLedImage = document.getElementById("toiletLedImage");

    if(ledToilet.innerHTML === "TURN ON") {
        ledToilet.innerHTML = "TURN OFF";
        toiletLedImage.src = "./assets/ledmerah.png";
        ledToilet.style.backgroundColor = "red";
    } else {
        ledToilet.innerHTML = "TURN ON";
        toiletLedImage.src = "./assets/led-off.png";
        ledToilet.style.backgroundColor = "#579fff";
    }
}