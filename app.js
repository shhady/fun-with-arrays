function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  var result = range(1, 100); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  console.log(result);

//from method


let arr = Array.from({length: 100}, (elm, index) => {
    return index;
  });
  
  console.log(arr);
//object to an array
  var obj = {
    a: "hello",
    b: "this is",
    c: "javascript!",
}


var array = Object.keys(obj)
    .map(function(key) {
        return obj[key];
    });

console.log(array); 

//array to an object
let object = { ...['a', 'b', 'c'] }
console.log(object);

//array is an array 
Array.isArray([1,2,3,4,5]) ? console.log('true') : console.log('false');


//copy an array 
let arr3=[1,2,3,4,5]
let arr4=[...arr3]

console.log(arr3,...arr4);



let arr1=[1,2,3,4,5];
let arr2=arr1;

arr2.push(6);
console.log(arr1);


  


