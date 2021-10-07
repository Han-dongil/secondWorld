//let v1 = 10;
//console.log(v1);
//let v2 =20;
//console.log(v2);

const hong = {
    name : "홍길동",
    age : 20,
    score : 90
}

const kim = {
    name : "김길동",
    age : 21,
    score : 89
}

const choi = {
    name : "최길동",
    age : 22,
    score : 88
}

// console.log(hong.name);
// console.log(hong["age"]);
let field = "score";
// console.log(hong[field]);

const persons = [hong , kim , choi];

// for(let i=0 ; persons.length;i++)
// for(let person of persons)
// {
//     document.write("<ul>")
//     for(let field in person)
//     {
//       //  console.log(person[field]);
//         document.write('<li class="'+field+'">'+person[field]+'</li>');
//     }
//     document.write("</ul>")
// }

// for(let field in kim){
//     document.write(field + "-" + kim[field]);
// }
const arr = [5,4,3,2,1];

for (const i of arr) {
    console.log(i);
}
// document.write(kim["name"]);
for(let fields of kim)
{
    console.log(kim[fields]);
}