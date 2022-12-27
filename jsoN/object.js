const biodata={
    name:"binod",
    age:25,
    number:9632587411
};
console.log(biodata);
 const jsonData = JSON.stringify(biodata);
 console.log(jsonData);
//console.log(biodata.number,biodata.name,biodata.age);
const data =JSON.parse(biodata);
console.log(data);