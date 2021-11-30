const getString = function(arg){
  if(typeof arg === "string"){
    arg.trim();
    return arg.length > 30 ? arg.slice(0, 30) + '...' : arg;
  } else {
    alert(`${arg} - 'это не строка`);
  }
};

console.log(getString('Объявить функцию '));