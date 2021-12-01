const arr = ['7', '12', '28', '54', '453', '41', '259'];

for(let i = 0; i < arr.length; i++){
  if(arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  }
}


let n = 100;
next: 
for(let i = 2; i <= n; i++){
  for(let j = 2; j < i; j++) {
    if(i % j === 0) continue next;
  }
  console.log(i, `Делители этого числа: 1 и ${i}`);
}