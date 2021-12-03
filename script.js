const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

week.forEach((item, i) => {
  
  if((new Date()).getDay()-1 === i ){
    document.write(`<div><b>${item}</b></div>`);
  } else if(i === 5 || i === 6){
    document.write(`<div><i>${item}</i></div>`);
  } else {
    document.write(`<div>${item}</div>`);
  }
});

console.log((new Date()).getDay());