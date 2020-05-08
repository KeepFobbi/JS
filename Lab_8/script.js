var worker;
var A;
var B;

function doSearch(A, B) {
    document.getElementById('startB').disabled = true;
    worker = new Worker('worker.js');

    localStorage['A'] = A;
    localStorage['B'] = B;

    worker.onmessage = receivedWorkerMessage;

    worker.postMessage(
        {
            from: A,
            to: B
        }
    )
}

document.getElementById('startB').onclick=  function() {
    doSearch(document.getElementById('from').value, document.getElementById('to').value);
};

document.getElementById('stopB').onclick=function () {
    document.getElementById('startB').disabled = false;
    worker.terminate();
    worker = null;
};

var primeList;

function receivedWorkerMessage(event)
{
    let primes = event.data;

    if(primes.length>1)
    {
        localStorage.clear();
        primeList = "";
        for (var i = 0; i < primes.length; i++) {
            primeList += primes[i];
            if (i !== primes.length - 1) primeList += ", ";
        }

        var primeContainer = document.getElementById("text_res");
        primeContainer.innerHTML = primeList;

        localStorage['list'] = primeList;

        document.getElementById('startB').disabled = false;
        let not = new Notification("Поиск простых чисел завершен!");
    }
    else  localStorage['lastNum'] = primes;
}

    window.onload = function () {
        if (localStorage['lastNum']) {
            doSearch(localStorage['lastNum'], localStorage['B']);
        }
        primeList = localStorage['list'];
        A = localStorage['A'];
        B = localStorage['B'];
        if (primeList) {
            document.getElementById('from').value = A;
            document.getElementById('to').value = B;

            document.getElementById("text_res").innerHTML = primeList;
        }
    };

    function getHiddenProp() {
        var prefixes = ['webkit', 'moz', 'ms', 'o'];

        if ('hidden' in document) return 'hidden';

        for (var i = 0; i < prefixes.length; i++) {
            if ((prefixes[i] + 'Hidden') in document)
                return prefixes[i] + 'Hidden';
        }

        return null;
    }

    function isHidden() {
        var prop = getHiddenProp();
        if (!prop) return false;

        return document[prop];
    }

    var visProp = getHiddenProp();
    if (visProp) {
        var evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
        document.addEventListener(evtname, visChange);
    }

    var timerId;

    function visChange() {

        if (isHidden()) {
            timerId = setTimeout(function () {

                let where = new Notification("Ти где?");
            }, 60000);
        } else
            clearTimeout(timerId);
    }