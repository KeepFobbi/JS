onmessage = function (event) {

    var primes = findPrimes(event.data.from, event.data.to);

    postMessage(primes);

};
function findPrimes(fromNumber, toNumber) {

    let list = [];
    for (let i = +fromNumber; i <= +toNumber; i++) {
        if (i > 1) list.push(i);
    }

    let maxDiv = Math.round(Math.sqrt(toNumber));
    let primes = [];

    var myTime = performance.now();
    let stopIdidItAgain;
    for (let i = 0; i < list.length; i++) {
        let failed = false;
        for (let j = 2; j <= maxDiv; j++) {
            if ((list[i] !== j) && (list[i] % j === 0)) {
                failed = true;
            } else if ((j === maxDiv) && (failed === false)) {
                stopIdidItAgain = performance.now();
                postMessage(list[i]);
                primes.push(list[i] + ' - ' + (stopIdidItAgain - myTime).toFixed(4));

                myTime = performance.now();
            }
        }
    }

    return primes;
}
