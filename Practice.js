// example of named function.
function person_name(){
    console.log("hi this is my name", this.name);
}
const person={
    name:"React Native",
    person_name
}
person.person_name();