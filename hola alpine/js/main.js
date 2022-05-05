let today = new Date();
let days = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
];
let months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

let weekDay = days[today.getDay()];
let monthDay = today.getDate();
let month = today.getMonth();
let monthName = months[month];
let year = today.getFullYear();
const fecha = document.getElementById('fecha');

fecha.innerHTML = `${weekDay}, ${monthDay} ${monthName}, ${year}`;
