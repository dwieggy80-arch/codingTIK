document.getElementById('hitung-bmi').addEventListener('click', function() {
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const berat = parseFloat(document.getElementById('berat').value);

    const hasilBmiElement = document.getElementById('hasil-bmi');
    const kategoriBmiElement = document.getElementById('kategori-bmi');

    if (isNaN(tinggi) || isNaN(berat) || tinggi <= 0 || berat <= 0) {
        hasilBmiElement.textContent = '-';
        kategoriBmiElement.textContent = 'Harap masukkan tinggi dan berat badan yang valid.';
        kategoriBmiElement.style.color = 'red';
        return;
    }

    // Menghitung BMI: berat (kg) / (tinggi (m))^2
    const tinggiMeter = tinggi / 100;
    const bmi = (berat / (tinggiMeter * tinggiMeter)).toFixed(1);

    hasilBmiElement.textContent = bmi;

    let kategori = '';
    let warna = '';

    if (bmi < 18.5) {
        kategori = 'Kekurangan berat badan';
        warna = '#3498db';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        kategori = 'Berat badan normal (ideal)';
        warna = '#2ecc71';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        kategori = 'Kelebihan berat badan';
        warna = '#f1c40f';
    } else {
        kategori = 'Kegemukan (Obesitas)';
        warna = '#e74c3c';
    }

    kategoriBmiElement.textContent = kategori;
    kategoriBmiElement.style.color = warna;
});
Cara Menggunakan
