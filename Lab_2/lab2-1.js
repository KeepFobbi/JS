function isInteger(num){
    return Number.isInteger(num);
}

function findPrimes(a, b) {
    let ar = [];
let n=0;
    nextPrime:
        for (let i = a; i <= b; i++) {

            for (let j = a; j < i; j++) {
                if (i % j == 0) continue nextPrime;
            }

            ar[n]= i ;
            n++;
        }
    return ar;
}