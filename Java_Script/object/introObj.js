let cap = {
    name: "steve",
    LastName : "Rogers",
    Address: {
        City : "Manhatten",
        State : "New York"
    },
    age : 35,
    isAvenger : true,
    movies : ["First Avenger","winter Soldier"],
    sayHi: function(){
        console.log("cap say's Hi");
    }
}
//get
console.log(cap.name)
console.log(cap.Address.City)
console.log(cap.movies)
console.log(cap.movies[1])
cap.sayHi()  // you can call function directly by object_name.function_name

// set dta
cap.age = 36
console.log("updated age is",cap.age)
cap.isAvenger = false
console.log("updated avenger is",cap.isAvenger)
// add new key value to existed object
cap.friends = ["Tony","Bruce","peter"]
console.log(cap.friends)
console.log(cap.friends[1])
// print object
console.log("cap is",cap)

// delete a key from  existed object
delete(cap.Address)
console.log("cap is",cap)

// for in loop specially iteration for object
for(let key in cap){
    console.log(key)
}  // this prints only key name

for(let key in cap){
    console.log(cap[key])
}
let propkey = "age"
console.log(cap["age"])
console.log(cap["age"])