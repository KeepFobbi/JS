var obj = {
    className: 'open menu'
}

addClass(obj, '   new'); // obj.className='open menu new'
addClass(obj, 'open        '); // без змін (клас вже існує)
addClass(obj, 'me'); // obj.className='open menu new me'

console.log( obj.className ); // "open menu new me"

console.log(camelize("background-color")) //'backgroundColor'
console.log(camelize("list-style-image")) //'listStyleImage';
console.log(camelize("-webkit-transition")) //'WebkitTransition';


obj = {
    className: 'my menu menu'
};
    
removeClass(obj, 'menu');
    
console.log( obj.className ); // 'my'

var arr = [5, 3, 8, 1];
    console.log(arr);
    filterRangeInPlace(arr, 1, 4);
    console.log(arr);

var arr = [5, 2, 1, -10, 8];
    reverseSort( arr );
    console.log( arr ) // 8, 5, 2, 1, -10

var arr = ["HTML", "JavaScript", "CSS"];
    arrSorted = arraySort( arr );
    console.log( arrSorted ); // CSS, HTML, JavaScript
    console.log( arr ); // HTML, JavaScript, CSS

var arr = [1, 2, 3, 4, 5];
    arr.sort(rundomSort);
    console.log( arr ); // елементи у випадковому порядку, наприклад [3,5,1,2,4]

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

sortBYAge(people);
// тепер people: [vovochka, masha, vasya]

console.log(people[0].age) // 6

var list = { value: 1 };
    list.next = { value: 2 };
    list.next.next = { value: 3 };
    list.next.next.next = { value: 4 };

printList(list)
printListRec(list)
printReverseListRec(list)
printReverseList(list)

var strings = ["C++", "C#", "C++", "С#",
"C", "C++", "JavaScript", "C++", "JavaScript"
];

console.log( unique(strings) ); // C++, C#, C, JavaScript