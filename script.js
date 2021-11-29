let lang = confirm('Выберите язык: "ОК" - русский, "Отмена" - английски')
  ? "ru"
  : "en";

//IF-ELSE
if (lang === "ru") {
  console.log(
    "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"
  );
} else {
  console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}

switch (lang) {
  case "ru":
    console.log(
      "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"
    );
    break;
  default:
    console.log(
      "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"
    );
}

const daysOfWeek = [
  ["Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"],
  ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]
];

console.log(daysOfWeek[lang === "ru" ? 0 : 1].join());

let namePerson = prompt("Введите ваше имя");

namePerson !== "Артем" && namePerson !== "Александр"
  ? console.log("студент")
  : namePerson === "Артем"
  ? console.log("директор")
  : console.log("преподаватель");
