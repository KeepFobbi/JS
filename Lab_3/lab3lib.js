function addClass(obj, cls){
    cls = cls.trim()
    var subObj = {};
        var arr = obj.className ? obj.className.split(" "):[];
        
        for(var i=0;i<arr.length;i++){
            subObj[arr[i]] = true;
        }
        
        subObj[cls] = true;
        
        arr = Object.keys(subObj);
        obj.className = arr.join(" ");        
}

function camelize(str) {
    return str.split('-')
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
  }

function removeClass(obj, cls){
    var arr = obj.className ? obj.className.split(" "):[];

    for(var i=0;i<arr.length;i++){
        if(arr[i] == cls){
            arr.splice(i,1);
            i --;
        }
    }
    obj.className = arr.join(' ');
}

function filterRangeInPlace(arr, a, b){
    for(var i=0;i<arr.length;i++){
        if(a<=arr[i] && arr[i]<=b){
            arr.splice(i, 1);
            i--;
        }
    }
}

function reverseSort(arr){
    arr.sort(function(a,b){
        return b - a
    })
}

function arraySort(arr){
    var rezArr = arr.slice(0)
    return rezArr.sort()
}

function rundomSort(){          // 7
    return Math.random() - 0.5
}

function sortBYAge(arr){
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

function printList(list){
    let temp = list

    while(temp){
        console.log(temp.value)
        temp = temp.next
    }
}

function printListRec(list){
    console.log(list.value)
    
    if (list.next) {
        printListRec(list.next)
    }
}

function printReverseListRec(list){    
    if (list.next) {
        printReverseListRec(list.next)
    }

    console.log(list.value)
}

function printReverseList(list){
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log( arr[i] );
  }
}

function unique(arr){
    var buff = []
    
    for(let val of arr){
        if (!buff.includes(val)) {
            buff.push(val)
        }
    }

    return buff
}