var num = [2,6,8,3]
console.log(`Nosso vetor é o ${num}`)

num[4] = 9
console.log(`Nosso vetor é o ${num}`)

num.push(1)
console.log(`Nosso vetor é o ${num}`)

console.log(`O vetor em ${num.length} possicões`)
console.log(`O primeito valor do vetor é ${num[0]}`)
console.log(num.sort())

for(var pos=0;pos<=num.length;pos++){
    console.log(num[pos])
}

for(pos1 in num){
    console.log(num[pos1])
}

var n = num.indexOf(2)
console.log(`O valor 2 esta na posiçao ${n}`)