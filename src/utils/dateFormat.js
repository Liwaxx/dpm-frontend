export function changeMonth(date) {
  const options = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus',
    'September', 'Oktober', 'November', 'Desember'
  ];
  return options[date.getMonth()];
}

export function changeDay(date) {
  const options = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  return options[date.getDay()];
}