// GIVEN
var example = "I'm the example!";
console.log(example);

// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


var hello = 'world';                                 
console.log(hello);                                   

var needle = 'haystack';
console.log(needle)
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();

var brendan = 'super cool';
console.log(brendan);
function print(){   
    brendan = 'only okay';
    console.log(brendan);
}
print();

var food = 'chicken';
console.log(food);
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
eat();

var food = "fish";
console.log(food);
function mean() {
    console.log(food);
    food = "chicken";
    console.log(food);
}
console.log(food);
mean();

var genre = "disco";
console.log(genre);
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);

dojo = "san jose";
console.log(dojo);
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo);


function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
    return dojo;
}