let num = 266219;

num = String(num).split('');
let result = num[0];

for (let i = 1; i < num.length; i++) {
    result = result * num[i];
}
console.log(result);

result = result ** 3;

console.log(String(result).slice(0, 2));