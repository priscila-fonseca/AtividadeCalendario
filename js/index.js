const weekDayNames = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

window.addEventListener("load", (event) => {
  const calendars = document.getElementsByClassName("calendar");

  updateCalendar()
  setInterval(updateCalendar, 1000);

  for (let calendar of calendars) {
    calendar.style.display = "block";
  }
});

function updateCalendar() {
  const date = new Date();
  const weekIndex = date.getDay();
  const weekPrefix = weekIndex > 0 && weekIndex < 6 ? "-feira" : "";

  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  /*
   *Foi utilizado o toLocaleTimeString, ao invés de
   *toLocaleString, pois não retorna a data junto
   */
  const hour = date
    .toLocaleTimeString("pt-BR", { hour12: true })
    .replace("M", ".M.");

  const weekDayName = weekDayNames[weekIndex] + weekPrefix;

  printInCalendar(month, day, year, hour, weekDayName);
}

function printInCalendar(month, day, year, hour, weekDayName) {
  document.getElementById("month").innerHTML = month;
  document.getElementById("week_day").innerHTML = weekDayName;
  document.getElementById("month_day").innerHTML = day;
  document.getElementById("year").innerHTML = year;
  document.getElementById("hour").innerHTML = hour;
}
