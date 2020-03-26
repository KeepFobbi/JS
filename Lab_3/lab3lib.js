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
    //Ищем в массиве нужный нам класс. Если находим его, то удаляем.
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

function rundomSort(){
    return Math.random() - 0.5
}