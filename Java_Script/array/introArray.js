let array = [1,2,3,4,5]
console.log(array)
let i =0;
while(i<array.length){
    console.log("element at index", i, " is ", array[i])
    i++
}
let m = array.indexOf(2) // give index of element
console.log(m)
array.push("last element") //  push in last of an array
array.unshift("first element") // add element in first of an array
console.log(array)
let partOfAnArray = array.slice(2,5) // give part of an array, 2 is starting index and 5-1 is last index
// it doesn't change original array
console.log(partOfAnArray)
let newPart = array.slice(2) // gives all elements from 2 to end
console.log(newPart)

array.splice(2,3) // delete elements from array , 2 is first index and 3 is number of elements 
// from index 2
console.log(array)

