const arr = ['7', '12', '28', '54', '453', '41', '259'];

for(let i = 0; i < arr.length; i++){
  if(arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  }
}


let n = 100;

function isSimpleNum(num) {
  for (let i = 2; i < num; i++) {
    while (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

for (let j = 2; j <= n; j++) {
  if (isSimpleNum(j)) {
    console.log(j, `Делители этого числа: 1 и ${j}`);
  }
}
