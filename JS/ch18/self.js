const arr = [3, 8, 11, 86, 43, 22, 27];
let result = [0, 0];

for (let i = 0; i < arr.length; i++) {
  result[arr[i] % 2] += arr[i]; // 0이면 짝수, 1이면 홀수
}

console.log(result);