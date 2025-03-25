let level = localStorage.getItem("level") ? parseInt(localStorage.getItem("level")) : 1;
let skor = localStorage.getItem("skor") ? parseInt(localStorage.getItem("skor")) : 0;
let maxAngka = level * 5;
let angkaRahasia = Math.floor(Math.random() * maxAngka) + 1;
let ciriRahasia = angkaRahasia % 2 === 0 ? "Angka ini genap." : "Angka ini ganjil.";

// Menampilkan level, skor, dan petunjuk angka
document.getElementById("level").innerHTML = `🎯 Level: ${level} (Tebak angka 1-${maxAngka})`;
document.getElementById("ciri-ciri").innerHTML = "🔍 Petunjuk: " + ciriRahasia;

// Tambahkan elemen untuk skor
let skorElement = document.createElement("p");
skorElement.id = "skor";
skorElement.style.fontSize = "18px";
skorElement.style.fontWeight = "bold";
skorElement.textContent = `🏆 Skor: ${skor}`;
document.querySelector(".container").prepend(skorElement);

function masukkanAngka(angka) {
    let display = document.getElementById("display");
    if (display.value.length < 3) {
        display.value += angka;
    }
}

function hapusSatu() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function cekTebakan() {
    let tebakan = document.getElementById("display").value;
    let hasil = document.getElementById("hasil");

    if (tebakan === "" || isNaN(tebakan) || tebakan < 1 || tebakan > maxAngka) {
        hasil.innerHTML = `Masukkan angka 1 - ${maxAngka}!`;
        return;
    }

    tebakan = parseInt(tebakan);

    if (tebakan === angkaRahasia) {
        skor += 10; // Tambah skor 10 jika menang
        localStorage.setItem("skor", skor);
        setTimeout(() => {
            document.getElementById("angka-menang").textContent = angkaRahasia;
            document.getElementById("overlay").style.display = "block";
        }, 500);
    } else {
        hasil.innerHTML = tebakan < angkaRahasia ? "📉 Angka terlalu kecil!" : "📈 Angka terlalu besar!";
    }

    document.getElementById("display").value = "";
}

function naikLevel() {
    level++;
    localStorage.setItem("level", level);
    location.reload();
                       }
