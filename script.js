const API_URL = "https://script.google.com/macros/s/AKfycbw9pf6hXIRbeM6EXD4DF9ArwY2AxdZYli92wgvotS4JN4Ry8yeODabxHojkFhJYsl9hQA/exec"; // Ganti dengan URL Anda

function cariSurat() {
  const nomor = document.getElementById("nomorSurat").value;
  fetch(`${API_URL}?nomor=${encodeURIComponent(nomor)}`)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        document.getElementById("hasil").innerHTML = `<p>${data.error}</p>`;
      } else {
        document.getElementById("hasil").innerHTML = `
          <p><strong>No. Surat:</strong> ${data.nomor}</p>
          <p><strong>Tanggal:</strong> ${data.tanggal}</p>
          <p><strong>Penandatangan:</strong> ${data.penandatangan}</p>
          <p><strong>Jabatan:</strong> ${data.jabatan}</p>
          <p><strong>Perihal:</strong> ${data.perihal}</p>
          <p><strong>Unit Kerja:</strong> ${data.unit_kerja}</p>
          <a href="${data.pdf}" target="_blank">📄 Unduh Surat (PDF)</a>
        `;
      }
    })
    .catch(err => {
      document.getElementById("hasil").innerHTML = `<p>Terjadi kesalahan: ${err}</p>`;
    });
}
