const marvel_heros = ["thor","ironman", "spiderman"]
const dc_heros = ["superman","batman", "flash"]

// it returns array into a array 
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros)
// this works well return all the elements combindly into a seprate array
//called allHeros

//spread 
const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);

 const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

 const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);

console.log(Array.isArray("Monday"));
console.log(Array.from("Monday"));
console.log(Array.from({name: "Monday"}));

let score1 =100
let score2 =200
let socre3 =300

console.log(Array.of(score1,score2,socre3));



