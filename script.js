const date1 = document.querySelector('.date');
const date2 = document.querySelector('.date2');

const getHoursText = function (num) {
  switch (true) {
    case num === 1:
    case num === 21:
      return `${num} час`;

    case num > 1 && num < 5:
    case num > 21 && num < 25:
      return `${num} часа`;

    case num > 5 && num < 21:
      return `${num} часов`;

    default:
      break;
  }
};


const getMinutesText = function (num) {
  switch (true) {
    case num === 1:
    case num === 21:
    case num === 31:
    case num === 41:
    case num === 51:  
      return `${num} минута`;

    case num > 1 && num < 5:
    case num > 21 && num < 25:
    case num > 31 && num < 35:
    case num > 41 && num < 45:
    case num > 51 && num < 55:  
      return `${num} минуты`;

    case num === 0:
    case num >= 5 && num < 21:
    case num > 24 && num < 31:
    case num > 34 && num < 41:
    case num > 44 && num < 51:
    case num > 54:  
      return `${num} минут`;
    default:
      break;
  }
};

const getSecondsText = function(num){
  switch(true){
      case num === 1:
        return `0${num} секунда`;
      case num === 21:
      case num === 31:
      case num === 41:
      case num === 51:  
        return `${num} секунда`;
  
      case num > 1 && num < 5:
        return `0${num} секунды`;

      case num > 21 && num < 25:
      case num > 31 && num < 35:
      case num > 41 && num < 45:
      case num > 51 && num < 55:  
        return `${num} секунды`;
  
      case num >= 5 && num < 10:
        return `0${num} секунд`;

      case num > 9 && num < 21:
      case num > 24 && num < 31:
      case num > 34 && num < 41:
      case num > 44 && num < 51:
      case num > 54:  
        return `${num} секунд`;

      case num === 0:
        return `0${num} секунд`;
      default:
        break;
  }
};

const getData = function () {
  date1.textContent = `сегодня ${new Date().toLocaleDateString('ru-RU', {
    weekday: 'long'
  })}, ${new Date().toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long'
  })} ${new Date().getFullYear()} года, ${getHoursText(new Date().getHours())} ${getMinutesText(new Date().getMinutes())} ${getSecondsText(new Date().getSeconds())}`;
  date2.textContent = `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`;
};


setInterval(getData, 1000);