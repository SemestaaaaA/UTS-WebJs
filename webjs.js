function hitung(operator) {
    const bil1 = parseFloat(document.getElementById("bil1").value);
    const bil2 = parseFloat(document.getElementById("bil2").value);
    let hasil;

    // Validasi input
    if (isNaN(bil1) || isNaN(bil2)) {
        alert("Harap masukkan angka yang valid pada Bil 1 dan Bil 2!");
        return;
    }

    switch (operator) {
        case '+':
            hasil = bil1 + bil2;
            break;
        case '-':
            hasil = bil1 - bil2;
            break;
        case '*':
            hasil = bil1 * bil2;
            break;
        case '/':
            if (bil2 === 0) {
                alert("Pembagian dengan nol tidak diperbolehkan!");
                return;
            }
            hasil = bil1 / bil2;
            break;
        default:
            alert("Operator tidak valid!");
            return;
    }

    // Tampilkan hasil di popup kustom
    document.getElementById("popupText").innerText = "Hasil: " + hasil;
    document.getElementById("popupOverlay").style.display = "block";
}

function tutupPopup() {
    document.getElementById("popupOverlay").style.display = "none";
}
