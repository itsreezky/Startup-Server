// setting zona waktu
Intl.DateTimeFormat().resolvedOptions().timeZone = "Asia/Jakarta";

// hari indonesia
export function hariIndo(hari) {
  const seminggu = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  return seminggu[hari];
}

// bulan indonesia
export function bulanIndo(bulan) {
  const bulanfull = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  return bulanfull[bulan - 1];
}

// tanggal indonesia
export function tanggalIndo(tgl) {
  const tanggal = tgl.getDate();
  const bulan = bulanIndo(tgl.getMonth() + 1);
  const tahun = tgl.getFullYear();
  return `${tanggal} ${bulan} ${tahun}`;
}

// jam indonesia
export function jamIndo(tgl) {
  const jam = tgl.getHours();
  const menit = tgl.getMinutes();
  const detik = tgl.getSeconds();
  return `${jam}:${menit}:${detik}`;
}
